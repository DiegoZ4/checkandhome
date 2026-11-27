// Ejecución de la búsqueda de disponibilidad: qué alojamientos entran en la búsqueda y
// su cotización. Usa quoteStay (availability.ts), el mismo cálculo de todas las vistas,
// así Tarjetas y Calendario aplican exactamente los mismos criterios.

import { quoteStay, type AvailabilityData, type StayQuote, type Unit } from './availability'
import type { Property } from './properties'

export interface SearchCriteria {
  checkIn: string
  checkOut: string
  adults: number
  minors: number
  pets: number
  zone: string // 'Todas' = sin filtro
}

/**
 * Filtros adicionales (Más filtros). Los importes son texto tal como se ingresaron
 * ('' = sin límite) en la moneda `currency`. La zona va en SearchCriteria (sincronizada
 * con la barra principal).
 */
export interface ExtraFilters {
  currency: Unit
  totalMin: string // presupuesto total de la estadía (sin cochera ni depósito)
  totalMax: string
  nightMin: string // precio promedio final por noche (con limpieza, servicio y mascotas)
  nightMax: string
  minBedrooms: string // dormitorios mínimos ('' = cualquiera)
  maxSeaDistance: string // metros ('' = sin límite)
  amenities: string[] // ids de AMENITIES: el depto tiene que tenerlas todas
}

export const NO_FILTERS: ExtraFilters = {
  currency: 'USD', totalMin: '', totalMax: '', nightMin: '', nightMax: '',
  minBedrooms: '', maxSeaDistance: '', amenities: [],
}

export interface SearchResult {
  property: Property
  quote: StayQuote
  /** Noches libres dentro del período consultado (= nightCount si está libre toda la estadía). */
  freeNights: number
}

/** Alojamientos activos (no cocheras, no eliminados, habilitados). */
export function searchableProperties(properties: Property[]): Property[] {
  return properties.filter(p => (p.category || 'alojamiento') === 'alojamiento' && !p.eliminado && p.enabled !== false)
}

/** Zonas cargadas en las fichas de los alojamientos, sin repetir y ordenadas. */
export function zonesOf(properties: Property[]): string[] {
  return [...new Set(searchableProperties(properties).map(p => (p.zona || '').trim()).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, 'es'))
}

const toNumber = (s: string) => (s.trim() === '' ? null : Number(s))

/** ¿Hay algún filtro adicional activo? */
export function hasExtraFilters(f: ExtraFilters): boolean {
  return [f.totalMin, f.totalMax, f.nightMin, f.nightMax, f.minBedrooms, f.maxSeaDistance].some(v => v.trim() !== '') ||
    f.amenities.length > 0
}

/**
 * Errores de los filtros, por campo (vacío = válidos). Máximo menor que su mínimo,
 * valores negativos o no numéricos, y pesos sin cotización para convertir.
 */
export function validateFilters(f: ExtraFilters, usdArs: number | null): Partial<Record<keyof ExtraFilters, string>> {
  const errors: Partial<Record<keyof ExtraFilters, string>> = {}
  const keys = ['totalMin', 'totalMax', 'nightMin', 'nightMax', 'minBedrooms', 'maxSeaDistance'] as const
  for (const k of keys) {
    const n = toNumber(f[k])
    if (n !== null && (!Number.isFinite(n) || n < 0)) errors[k] = 'Ingresá un número mayor o igual a 0'
  }
  const pairs = [['totalMin', 'totalMax'], ['nightMin', 'nightMax']] as const
  for (const [lo, hi] of pairs) {
    const a = toNumber(f[lo])
    const b = toNumber(f[hi])
    if (!errors[lo] && !errors[hi] && a !== null && b !== null && b < a) errors[hi] = 'El máximo tiene que ser mayor o igual que el mínimo'
  }
  const usesMoney = [f.totalMin, f.totalMax, f.nightMin, f.nightMax].some(v => v.trim() !== '')
  if (f.currency === 'ARS' && usesMoney && !usdArs) errors.currency = 'No hay cotización del dólar para comparar en pesos'
  return errors
}

/** Importe en USD expresado en la moneda del filtro, igual que se le muestra al huésped. */
const inUnit = (usd: number, unit: Unit, usdArs: number | null) => (unit === 'ARS' ? Math.round(usd * (usdArs ?? 0)) : usd)

const within = (value: number, min: number | null, max: number | null) =>
  (min === null || value >= min) && (max === null || value <= max) // límites inclusivos

/** ¿El alojamiento (con su cotización) cumple los filtros adicionales? */
export function matchesFilters(p: Property, q: StayQuote, f: ExtraFilters, usdArs: number | null): boolean {
  const totalMin = toNumber(f.totalMin), totalMax = toNumber(f.totalMax)
  const nightMin = toNumber(f.nightMin), nightMax = toNumber(f.nightMax)
  if ([totalMin, totalMax, nightMin, nightMax].some(v => v !== null)) {
    // Sin todas las tarifas o sin cotización no se puede comparar el precio: queda afuera.
    if (q.missingRates.length || q.needsRate) return false
    // Total de la estadía antes de la cochera y sin depósito; promedio por noche con los
    // cargos prorrateados. Una noche cara puede pasar si el promedio cumple.
    if (!within(inUnit(q.stayTotal, f.currency, usdArs), totalMin, totalMax)) return false
    if (!within(inUnit(q.averagePerNight, f.currency, usdArs), nightMin, nightMax)) return false
  }
  const minBedrooms = toNumber(f.minBedrooms)
  if (minBedrooms !== null && minBedrooms > 0 && !((parseInt(p.bedrooms) || 0) >= minBedrooms)) return false
  const maxSea = toNumber(f.maxSeaDistance)
  if (maxSea !== null && maxSea > 0) {
    const sea = parseInt(p.mtsDelMar)
    if (!Number.isFinite(sea) || sea > maxSea) return false
  }
  return f.amenities.every(a => !!p.amenities?.[a])
}

/**
 * Alojamientos de la zona pedida, con capacidad para los huéspedes, que admitan las
 * mascotas y cumplan los filtros adicionales (presupuesto, comodidades, etc.).
 * - Vista Tarjetas (por defecto): sólo los libres TODA la estadía, por total.
 * - Vista Calendario (partial: true): también los que tienen alguna noche ocupada o
 *   bloqueada (la disponibilidad es el único criterio parcial): primero los libres toda
 *   la estadía, después por cantidad de noches libres y, a igualdad, por total.
 */
export function runSearch(
  properties: Property[],
  c: SearchCriteria,
  data: AvailabilityData,
  filters: ExtraFilters = NO_FILTERS,
  { partial = false }: { partial?: boolean } = {},
): SearchResult[] {
  return searchableProperties(properties)
    .filter(p => c.zone === 'Todas' || (p.zona || '').trim() === c.zone)
    .map(property => {
      const quote = quoteStay(property, { checkIn: c.checkIn, checkOut: c.checkOut, adults: c.adults, minors: c.minors, pets: c.pets }, data)
      return { property, quote, freeNights: quote.nightCount - quote.occupied.length }
    })
    .filter(({ quote }) => (partial || quote.available) && quote.fitsGuests && quote.acceptsPets)
    .filter(({ property, quote }) => matchesFilters(property, quote, filters, data.usdArs))
    .sort((a, b) =>
      Number(b.quote.available) - Number(a.quote.available) ||
      b.freeNights - a.freeNights ||
      a.quote.stayTotal - b.quote.stayTotal)
}
