// Categorías de cargos (Propiedades → Categorías → Limpieza / Servicio / Mascotas).
// Varios alojamientos comparten el mismo costo de limpieza y de servicio: se definen
// categorías acá y cada alojamiento elige una. Los alojamientos usan siempre el precio
// ACTUAL de la categoría: si se cambia acá, cambia en todos.
// El precio por mascota (por estadía) es uno solo, con su moneda, para todos los alojamientos.
// Se cachean en localStorage y se sincronizan con la base (ver cloudSync COLLECTIONS).

import type { Property } from './properties'

export const CHARGE_CATEGORIES_KEY = 'checkAndPointChargeCategories'
export const PET_CHARGES_KEY = 'checkAndPointPetCharges'

export type ChargeCategoryType = 'limpieza' | 'servicio'
export type ChargeCurrency = 'USD' | 'ARS'

/** Monedas para los campos de importe: USD o $ (pesos). */
export const MONEY_CURRENCIES: { id: ChargeCurrency; symbol: string }[] = [
  { id: 'USD', symbol: 'USD' },
  { id: 'ARS', symbol: '$' },
]

export const currencySymbol = (c: string) => MONEY_CURRENCIES.find(x => x.id === c)?.symbol || c

export interface ChargeCategory {
  id: number
  type: ChargeCategoryType
  name: string
  zona: string // sólo servicio
  description: string
  amount: number
  currency: ChargeCurrency
  createdAt: string
}

/** Precio por mascota y por estadía. amount vacío = sin cargar. */
export interface PetCharge {
  amount: string
  currency: ChargeCurrency
}

export function loadChargeCategories(): ChargeCategory[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(CHARGE_CATEGORIES_KEY) || '[]')
  } catch {
    return []
  }
}

export function saveChargeCategories(list: ChargeCategory[]) {
  localStorage.setItem(CHARGE_CATEGORIES_KEY, JSON.stringify(list))
}

export function loadPetCharge(): PetCharge {
  const empty: PetCharge = { amount: '', currency: 'USD' }
  if (typeof window === 'undefined') return empty
  try {
    const v = JSON.parse(localStorage.getItem(PET_CHARGES_KEY) || '{}')
    if (v && typeof v === 'object' && 'amount' in v) return { amount: String(v.amount ?? ''), currency: v.currency === 'ARS' ? 'ARS' : 'USD' }
    // Formato anterior: un precio por moneda { USD, ARS }.
    if (v?.USD) return { amount: String(v.USD), currency: 'USD' }
    if (v?.ARS) return { amount: String(v.ARS), currency: 'ARS' }
    return empty
  } catch {
    return empty
  }
}

export function savePetCharge(value: PetCharge) {
  localStorage.setItem(PET_CHARGES_KEY, JSON.stringify(value))
}

/** "USD 50" / "$ 15.000" */
export function formatMoney(currency: string, amount: number | string): string {
  const n = typeof amount === 'number' ? amount : parseFloat(amount)
  return `${currencySymbol(currency)} ${isNaN(n) ? '-' : n.toLocaleString('es-AR')}`
}

/** "Categoría 1 — USD 50" / "Categoría 2 — Centro — USD 40" */
export function categoryLabel(c: ChargeCategory): string {
  return [c.name, c.type === 'servicio' ? c.zona : '', formatMoney(c.currency, c.amount)].filter(Boolean).join(' — ')
}

/**
 * Cargos de limpieza, servicio y mascotas (por mascota) de un alojamiento, con los precios
 * actuales. Si el alojamiento es anterior a las categorías (no tiene categoría elegida) o la
 * categoría se borró, usa el importe que tenía guardado.
 */
export function resolvePropertyCharges(
  p: Pick<Property, 'charges' | 'chargesCurrency'>,
  categories: ChargeCategory[] = loadChargeCategories(),
  pet: PetCharge = loadPetCharge(),
): { limpieza: number; servicio: number; mascotas: number } {
  const num = (v: unknown) => (typeof v === 'number' ? v : parseFloat(String(v ?? ''))) || 0
  const byId = (id?: string) => (id ? categories.find(c => String(c.id) === id) : undefined)
  const limpieza = byId(p.charges?.limpiezaCategoryId)
  const servicio = byId(p.charges?.servicioCategoryId)
  return {
    limpieza: limpieza ? limpieza.amount : num(p.charges?.limpieza),
    servicio: servicio ? servicio.amount : num(p.charges?.servicio),
    mascotas: pet.amount ? num(pet.amount) : num(p.charges?.mascotas),
  }
}

/** Alojamientos (no eliminados) que usan la categoría. */
export function propertiesUsing(c: ChargeCategory, properties: Property[]): Property[] {
  return properties.filter(p => !p.eliminado && p.charges?.[`${c.type}CategoryId`] === String(c.id))
}
