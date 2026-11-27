// Modelo de datos, constantes y helpers de cálculo para Reservas.
// Persistencia en localStorage (demo), igual que el resto de la app.

import { addDays, dateKey, getEntry, isEntryAvailable, type RatesMap } from './rates'

export const RESERVATIONS_STORAGE_KEY = 'checkAndPointBookings'

export type ReservationStatus = 'CONFIRMADA' | 'PENDIENTE' | 'CANCELADA'

export const RESERVATION_STATUSES = [
  { id: 'CONFIRMADA', name: 'Confirmada' },
  { id: 'PENDIENTE', name: 'Pendiente' },
  { id: 'CANCELADA', name: 'Cancelada' },
] as const

// Tipo de moneda
export const CURRENCIES = [
  { id: 'PESOS', name: 'Pesos' },
  { id: 'USD_OFICIAL', name: 'Dólar oficial' },
  { id: 'USD_BLUE', name: 'Dólar blue' },
] as const

// Canal de reserva
export const CHANNELS = [
  { id: 'DIRECTA', name: 'Directa' },
  { id: 'BOOKING', name: 'Booking' },
  { id: 'AIRBNB', name: 'Airbnb' },
] as const

// Condición de la reserva — solo aplica cuando el canal es Booking
export const BOOKING_CONDITIONS = [
  { id: 'PRESENTADO', name: 'Presentado' },
  { id: 'CANCELADO', name: 'Cancelado' },
  { id: 'NO_SHOW', name: 'No show' },
] as const

export const DOC_TYPES = [
  { id: 'DNI', name: 'DNI' },
  { id: 'PASAPORTE', name: 'Pasaporte' },
  { id: 'CUIT', name: 'CUIT/CUIL' },
  { id: 'OTRO', name: 'Otro' },
] as const

// Seña: porcentaje del total de la reserva (predeterminado 20%)
export const SENA_OPTIONS = [10, 20] as const

export interface Reservation {
  id: number
  status: ReservationStatus
  propertyId: string
  propertyName: string

  checkInDate: string
  checkOutDate: string
  checkInTime: string
  checkOutTime: string
  guests: number

  // Información del huésped
  firstName: string
  lastName: string
  phone: string
  docType: string
  dni: string
  hasAttachment: boolean
  attachmentName: string
  // Sin DNI por excepción autorizada por un usuario admin (solo canales Directa/Booking).
  dniException: boolean
  // Sin seña por excepción autorizada por un usuario admin (solo canales Directa/Booking;
  // Airbnb nunca la pide, así que ahí no aplica).
  senaException: boolean

  hasPaymentProof: boolean
  paymentProofName: string
  // DNI y comprobante: solo se guarda el nombre del archivo, no el contenido.
  hasVideo: boolean
  videoName: string
  // El video sí se sube al servidor: URL /api/videos/<id> (vacío en reservas viejas).
  videoUrl?: string
  observaciones: string

  // Valor de la reserva
  currency: string
  channel: string
  condition: string
  nights: number
  valorNoches: number

  mascotasEnabled: boolean
  mascotasQty: number
  mascotasValue: number

  cocheraEnabled: boolean
  cocheraId: string
  cocheraValue: number

  descuento: number // porcentaje

  totalNeto: number
  cargos: number // limpieza + servicio (tomados de la propiedad)
  totalBruto: number

  senaPct: number
  senaValue: number
  restante: number

  createdAt: string
}

// Cantidad de noches entre check-in y check-out.
export function calcNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0
  const inDate = new Date(checkIn)
  const outDate = new Date(checkOut)
  const diff = outDate.getTime() - inDate.getTime()
  if (isNaN(diff) || diff <= 0) return 0
  return Math.round(diff / (1000 * 60 * 60 * 24))
}

// Redondeo hacia arriba a la base (ej: 23248 -> 24000 con base 1000; 56 -> 60 con base 10).
export function roundUp(value: number, base: number): number {
  if (!value || value < 0) return 0
  return Math.ceil(value / base) * base
}

// Base de redondeo de la seña según la moneda: pesos a los $1.000, dólares a los US$10.
export function senaRoundingBase(currency: string): number {
  return currency === 'PESOS' ? 1000 : 10
}

/**
 * Valor de las noches según el calendario de tarifas: suma el precio de cada noche
 * (desde el check-in hasta el día anterior al check-out).
 * - missing: noches sin precio cargado en el calendario.
 * - closed: noches cerradas en el calendario.
 */
export function nightsFromCalendar(rates: RatesMap, propertyId: string, checkIn: string, checkOut: string) {
  const result = { total: 0, count: 0, missing: [] as string[], closed: [] as string[] }
  if (!propertyId || !checkIn || !checkOut || checkIn >= checkOut) return result
  const [y, m, d] = checkIn.split('-').map(Number)
  for (let day = new Date(y, m - 1, d); dateKey(day) < checkOut; day = addDays(day, 1)) {
    const key = dateKey(day)
    const entry = getEntry(rates, propertyId, key)
    result.count++
    if (!entry || !(entry.price > 0)) result.missing.push(key)
    else result.total += entry.price
    if (entry && !isEntryAvailable(entry)) result.closed.push(key)
  }
  return result
}

/**
 * Reservas que se superponen con las fechas dadas.
 * Las fechas son YYYY-MM-DD; el día de check-out queda libre, así que una reserva puede
 * entrar el mismo día en que sale la anterior.
 * - status 'CONFIRMADA' (por defecto): las que OCUPAN las noches (bloquean la reserva).
 * - status 'PENDIENTE': las pendientes, que no ocupan; sólo se informan.
 * - field 'propertyId': choca en el mismo alojamiento.
 * - field 'cocheraId': choca en la misma cochera (sólo reservas con cochera activada).
 * Mismo criterio que el buscador de disponibilidad (availability.ts) y el servidor.
 */
export function findOverlaps(
  reservations: Reservation[],
  opts: {
    field: 'propertyId' | 'cocheraId'
    id: string
    checkIn: string
    checkOut: string
    excludeId?: number | null
    status?: 'CONFIRMADA' | 'PENDIENTE'
  },
): Reservation[] {
  const { field, id, checkIn, checkOut, excludeId, status = 'CONFIRMADA' } = opts
  if (!id || !checkIn || !checkOut || checkIn >= checkOut) return []
  return reservations.filter(r =>
    r.id !== excludeId &&
    r.status === status &&
    String(r[field]) === id &&
    (field !== 'cocheraId' || r.cocheraEnabled) &&
    r.checkInDate < checkOut &&
    checkIn < r.checkOutDate,
  )
}

export function loadReservations(): Reservation[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(RESERVATIONS_STORAGE_KEY) || '[]')
  } catch (error) {
    console.error('Error loading reservations:', error)
    return []
  }
}

export function saveReservations(reservations: Reservation[]) {
  localStorage.setItem(RESERVATIONS_STORAGE_KEY, JSON.stringify(reservations))
}

export function getStatusName(id: string) {
  return RESERVATION_STATUSES.find(s => s.id === id)?.name || id
}

export function getChannelName(id: string) {
  return CHANNELS.find(c => c.id === id)?.name || id
}

export function getConditionName(id: string) {
  return BOOKING_CONDITIONS.find(c => c.id === id)?.name || id
}

export function getCurrencyName(id: string) {
  return CURRENCIES.find(c => c.id === id)?.name || id
}

export function getStatusColor(status: string) {
  switch (status) {
    case 'CONFIRMADA': return 'bg-green-100 text-green-800'
    case 'PENDIENTE': return 'bg-yellow-100 text-yellow-800'
    case 'CANCELADA': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}
