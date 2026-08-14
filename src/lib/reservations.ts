// Modelo de datos, constantes y helpers de cálculo para Reservas.
// Persistencia en localStorage (demo), igual que el resto de la app.

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
  // Confirmada sin DNI adjunto por excepción de un usuario admin (solo canales Directa/Booking).
  dniException: boolean

  hasPaymentProof: boolean
  paymentProofName: string
  // Solo se guarda el nombre del archivo, no el contenido (ver hasAttachment/hasPaymentProof).
  hasVideo: boolean
  videoName: string
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

// Redondeo "lindo" a la base de 1000 más cercana (ej: 23248 -> 23000).
export function roundNice(value: number, base = 1000): number {
  if (!value || value < 0) return 0
  return Math.round(value / base) * base
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
