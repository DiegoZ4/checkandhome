// Tarifas y disponibilidad por propiedad y por día + planes de tarifa.
// Persistencia en localStorage (demo).

export const RATES_STORAGE_KEY = 'checkAndPointRates'
export const RATE_PLANS_STORAGE_KEY = 'checkAndPointRatePlans'

// Estado de disponibilidad de una fecha.
// 'cerrado24' es un cierre temporal que se reabre solo al vencer `closedUntil`.
export type AvailabilityStatus = 'abierto' | 'cerrado' | 'cerrado24'

export const AVAILABILITY_OPTIONS: { id: AvailabilityStatus; name: string }[] = [
  { id: 'abierto', name: 'Abrir' },
  { id: 'cerrado', name: 'Cerrar' },
  { id: 'cerrado24', name: 'Cerrar por 24hs' },
]

export interface RateEntry {
  price: number
  // Se mantiene por compatibilidad con las entradas ya guardadas en localStorage
  // (las viejas solo tienen este campo). `status` manda cuando está presente.
  available: boolean
  status?: AvailabilityStatus
  // Solo para 'cerrado24': ISO del momento en que el cierre vence.
  closedUntil?: string
  planIds: string[]
}

// Estado efectivo de una entrada, resolviendo el vencimiento de 'cerrado24'
// y las entradas viejas que solo tienen `available`.
export function getEntryStatus(entry: RateEntry): AvailabilityStatus {
  if (entry.status === 'cerrado24') {
    return entry.closedUntil && new Date(entry.closedUntil) > new Date() ? 'cerrado24' : 'abierto'
  }
  if (entry.status) return entry.status
  return entry.available ? 'abierto' : 'cerrado'
}

export function isEntryAvailable(entry: RateEntry): boolean {
  return getEntryStatus(entry) === 'abierto'
}

// propertyId -> 'YYYY-MM-DD' -> RateEntry
export type RatesMap = Record<string, Record<string, RateEntry>>

export interface ProximityDiscount {
  days: string
  percent: string
}

export interface StayDiscount {
  duration: string
  percent: string
}

// Paleta para identificar visualmente cada plan en el calendario.
export const PLAN_COLORS = [
  '#4f46e5', // indigo
  '#059669', // esmeralda
  '#d97706', // ámbar
  '#dc2626', // rojo
  '#7c3aed', // violeta
  '#0891b2', // cian
  '#db2777', // rosa
  '#65a30d', // lima
]

// Color del plan. Los planes creados antes de que existiera el campo `color`
// reciben uno estable derivado de su id (no depende del orden de la lista).
export function getPlanColor(plan: RatePlan): string {
  if (plan.color) return plan.color
  let hash = 0
  for (const ch of plan.id) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0
  return PLAN_COLORS[hash % PLAN_COLORS.length]
}

export interface RatePlan {
  id: string
  name: string
  description: string
  // Color con el que se identifica el plan en el calendario (ver getPlanColor).
  color?: string
  hasMinNights: boolean
  minNights: number
  // "Según día": cantidad de noches requeridas por día de la semana (NO es precio).
  hasPerDayNights: boolean
  perDayNights: Record<string, string>
  priceVariation: string
  priceVariationType: 'aumento' | 'reduccion'
  hasStayDiscount: boolean
  stayDiscounts: StayDiscount[]
  proximityDiscounts: ProximityDiscount[]
  weekendSurcharge: string
  createdAt: string
}

// ---- Fechas ----
// Clave de fecha local YYYY-MM-DD (sin desfase de zona horaria).
export function dateKey(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export const DAY_LETTERS = ['D', 'L', 'M', 'X', 'J', 'V', 'S'] // getDay(): 0=Dom

export const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
]

export const WEEKDAY_NAMES = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

export function addDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

// ---- Rates ----
export function loadRates(): RatesMap {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(localStorage.getItem(RATES_STORAGE_KEY) || '{}')
  } catch (error) {
    console.error('Error loading rates:', error)
    return {}
  }
}

export function saveRates(rates: RatesMap) {
  localStorage.setItem(RATES_STORAGE_KEY, JSON.stringify(rates))
}

export function getEntry(rates: RatesMap, propertyId: string, key: string): RateEntry | undefined {
  return rates[propertyId]?.[key]
}

// Aplica una entrada (precio/disponibilidad/planes) a un rango de claves de fecha.
export function setEntryForDates(
  rates: RatesMap,
  propertyId: string,
  keys: string[],
  entry: RateEntry
): RatesMap {
  const next: RatesMap = { ...rates, [propertyId]: { ...(rates[propertyId] || {}) } }
  for (const k of keys) {
    next[propertyId][k] = { ...entry }
  }
  return next
}

// ---- Rate plans ----
export function loadRatePlans(): RatePlan[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(RATE_PLANS_STORAGE_KEY) || '[]')
  } catch (error) {
    console.error('Error loading rate plans:', error)
    return []
  }
}

export function saveRatePlans(plans: RatePlan[]) {
  localStorage.setItem(RATE_PLANS_STORAGE_KEY, JSON.stringify(plans))
}
