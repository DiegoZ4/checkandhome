// Categorías de cargos (Categorías → Limpieza / Servicio / Mascotas).
// Los alojamientos eligen una categoría de limpieza y una de servicio, y usan siempre el
// precio ACTUAL de la categoría: si se cambia acá, cambia en todos los alojamientos.
// El precio de mascotas es uno por moneda y se aplica automáticamente.
// Se cachean en localStorage y se sincronizan con la base (ver cloudSync COLLECTIONS).

import type { Property } from './properties'

export const CHARGE_CATEGORIES_KEY = 'checkAndPointChargeCategories'
export const PET_CHARGES_KEY = 'checkAndPointPetCharges'

export type ChargeCategoryType = 'limpieza' | 'servicio'
export type ChargeCurrency = 'USD' | 'ARS'

export interface ChargeCategory {
  id: number
  type: ChargeCategoryType
  name: string
  zona: string // sólo servicio
  amount: number
  currency: ChargeCurrency
  createdAt: string
}

/** Precio por mascota y por estadía, por moneda (string vacío = sin cargar). */
export type PetCharges = Record<ChargeCurrency, string>

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

export function loadPetCharges(): PetCharges {
  const empty: PetCharges = { USD: '', ARS: '' }
  if (typeof window === 'undefined') return empty
  try {
    return { ...empty, ...JSON.parse(localStorage.getItem(PET_CHARGES_KEY) || '{}') }
  } catch {
    return empty
  }
}

export function savePetCharges(value: PetCharges) {
  localStorage.setItem(PET_CHARGES_KEY, JSON.stringify(value))
}

export function formatMoney(currency: string, amount: number | string): string {
  const n = typeof amount === 'number' ? amount : parseFloat(amount)
  return `${currency} ${isNaN(n) ? '-' : n.toLocaleString('es-AR')}`
}

/** "Categoría 1 — USD 50" / "Categoría 2 — Centro — USD 40" */
export function categoryLabel(c: ChargeCategory): string {
  return [c.name, c.type === 'servicio' ? c.zona : '', formatMoney(c.currency, c.amount)].filter(Boolean).join(' — ')
}

/**
 * Cargos de limpieza, servicio y mascotas (por mascota) de un alojamiento, con los precios
 * actuales de sus categorías. Si el alojamiento es anterior a las categorías (no tiene
 * categoría elegida) o la categoría se borró, usa el importe que tenía guardado.
 */
export function resolvePropertyCharges(
  p: Pick<Property, 'charges' | 'chargesCurrency'>,
  categories: ChargeCategory[] = loadChargeCategories(),
  pet: PetCharges = loadPetCharges(),
): { limpieza: number; servicio: number; mascotas: number } {
  const num = (v: unknown) => (typeof v === 'number' ? v : parseFloat(String(v ?? ''))) || 0
  const byId = (id?: string) => (id ? categories.find(c => String(c.id) === id) : undefined)
  const limpieza = byId(p.charges?.limpiezaCategoryId)
  const servicio = byId(p.charges?.servicioCategoryId)
  const petPrice = pet[p.chargesCurrency as ChargeCurrency]
  return {
    limpieza: limpieza ? limpieza.amount : num(p.charges?.limpieza),
    servicio: servicio ? servicio.amount : num(p.charges?.servicio),
    mascotas: petPrice ? num(petPrice) : num(p.charges?.mascotas),
  }
}
