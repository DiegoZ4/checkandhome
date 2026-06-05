// Tarifas y disponibilidad por propiedad y por día + planes de tarifa.
// Persistencia en localStorage (demo).

export const RATES_STORAGE_KEY = 'checkAndPointRates'
export const RATE_PLANS_STORAGE_KEY = 'checkAndPointRatePlans'

export interface RateEntry {
  price: number
  available: boolean
  planIds: string[]
}

// propertyId -> 'YYYY-MM-DD' -> RateEntry
export type RatesMap = Record<string, Record<string, RateEntry>>

export interface RatePlan {
  id: string
  name: string
  description: string
  hasMinNights: boolean
  minNights: number
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
