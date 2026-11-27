// Disponibilidad y cotización de una estadía (Buscador de disponibilidad).
// Es el ÚNICO cálculo que usan las vistas Tarjetas, Calendario, Detalle y la cotización
// que se copia para el huésped: mismo departamento + fechas + condiciones = mismos importes.
//
// Reglas:
// - Noches: desde la de entrada hasta la anterior a la salida (10 al 15 de enero = 5 noches;
//   el 15 puede entrar otro huésped).
// - Una noche está ocupada si hay una reserva CONFIRMADA del departamento o si la oficina
//   la cerró en el calendario (Cerrado / Cerrado 24hs: uso de dueños, arreglos, etc.).
//   Para ofrecer la estadía, todas las noches tienen que estar libres.
// - Las reservas PENDIENTES no ocupan noches: sólo se informa cuántas se superponen.
// - Precios base en USD: la tarifa de cada noche es la cargada en el calendario.
// - Cargos por estadía (una sola vez): limpieza y servicio de check-in/out según las
//   categorías del departamento, y mascotas (precio por mascota × cantidad).
// - Promedio por noche = total de la estadía / noches (incluye los cargos prorrateados).
// - Cochera aparte: total de la estadía, cochera y total con cochera.
// - Depósito de garantía aparte (reembolsable): no suma a ningún total.
// - Pesos: equivalente con la cotización vigente del sistema (USD 1 = ARS rate).

import { addDays, dateKey, getEntry, getEntryStatus, type RatesMap } from './rates'
import type { Reservation } from './reservations'
import type { Property } from './properties'
import type { ChargeCategory, PetCharge } from './chargeCategories'

export type Unit = 'USD' | 'ARS'

/** Datos del sistema que necesita el cálculo (se cargan una vez y se reusan en todas las vistas). */
export interface AvailabilityData {
  rates: RatesMap
  reservations: Reservation[]
  categories: ChargeCategory[]
  petCharge: PetCharge
  /** Cotización vigente: pesos por dólar. null si todavía no se pudo obtener. */
  usdArs: number | null
}

export interface StayRequest {
  checkIn: string // YYYY-MM-DD
  checkOut: string // YYYY-MM-DD
  adults?: number
  minors?: number
  pets?: number
  garage?: boolean
}

export type NightIssue = 'reservada' | 'bloqueada'

export interface StayQuote {
  nights: string[] // fechas de cada noche
  nightCount: number

  // Disponibilidad
  available: boolean // todas las noches libres
  occupied: { date: string; reason: NightIssue }[]
  pendingCount: number // reservas pendientes que se superponen (no ocupan)
  fitsGuests: boolean // adultos + menores <= capacidad
  acceptsPets: boolean // pide mascotas y el depto las acepta (o no pide)

  // Precio (todo en USD)
  nightly: { date: string; price: number | null }[]
  missingRates: string[] // noches sin tarifa en el calendario
  lodging: number
  cleaning: number
  service: number
  pets: number
  stayTotal: number // alojamiento + cargos de la estadía
  averagePerNight: number // stayTotal / noches
  garage: { requested: boolean; offered: boolean; amount: number; totalWithGarage: number }
  deposit: number // reembolsable, aparte
  /** Hay cargos en pesos y falta la cotización para pasarlos a USD. */
  needsRate: boolean

  /** Se puede ofrecer: noches libres, con tarifa, capacidad y mascotas OK. */
  bookable: boolean
}

const num = (v: unknown) => (typeof v === 'number' ? v : parseFloat(String(v ?? ''))) || 0
const round2 = (v: number) => Math.round(v * 100) / 100

/** Fechas de las noches de la estadía (entrada incluida, salida excluida). */
export function stayNights(checkIn: string, checkOut: string): string[] {
  if (!checkIn || !checkOut || checkIn >= checkOut) return []
  const [y, m, d] = checkIn.split('-').map(Number)
  const out: string[] = []
  for (let day = new Date(y, m - 1, d); dateKey(day) < checkOut && out.length < 366; day = addDays(day, 1)) {
    out.push(dateKey(day))
  }
  return out
}

const overlaps = (aIn: string, aOut: string, bIn: string, bOut: string) => aIn < bOut && bIn < aOut

/**
 * Pasa un importe a USD. ARS se divide por la cotización; si falta la cotización
 * devuelve null (el que llama marca la cotización como incompleta).
 */
function toUsd(amount: number, currency: string | undefined, usdArs: number | null): number | null {
  if (!amount) return 0
  if (currency === 'ARS') return usdArs ? amount / usdArs : null
  return amount
}

export type NightState = 'libre' | NightIssue

export interface NightInfo {
  state: NightState
  price: number | null // tarifa del calendario (USD), null si no hay
  reservation?: Reservation // la confirmada que ocupa la noche
}

/**
 * Estado de una noche de un departamento (la regla de toda la app): ocupada por una
 * reserva CONFIRMADA, bloqueada por la oficina (Cerrado / Cerrado 24hs) o libre.
 * Las pendientes no ocupan. `confirmed` permite pasar ya filtradas las confirmadas
 * del departamento cuando se consultan muchas noches.
 */
export function nightInfo(
  property: Pick<Property, 'id'>,
  date: string,
  data: Pick<AvailabilityData, 'rates' | 'reservations'>,
  confirmed: Reservation[] = confirmedOf(property, data.reservations),
): NightInfo {
  const entry = getEntry(data.rates, String(property.id), date)
  const price = entry && entry.price > 0 ? entry.price : null
  const reservation = confirmed.find(r => r.checkInDate <= date && date < r.checkOutDate)
  if (reservation) return { state: 'reservada', price, reservation }
  if (entry && getEntryStatus(entry) !== 'abierto') return { state: 'bloqueada', price }
  return { state: 'libre', price }
}

/** Reservas confirmadas de un departamento (las que ocupan noches). */
export function confirmedOf(property: Pick<Property, 'id'>, reservations: Reservation[]): Reservation[] {
  const pid = String(property.id)
  return reservations.filter(r => r.status === 'CONFIRMADA' && String(r.propertyId) === pid)
}

export function quoteStay(property: Property, req: StayRequest, data: AvailabilityData): StayQuote {
  const pid = String(property.id)
  const nights = stayNights(req.checkIn, req.checkOut)
  const nightCount = nights.length

  // ---- Disponibilidad por noche ----
  const occupied: StayQuote['occupied'] = []
  const confirmed = confirmedOf(property, data.reservations)
  const nightly: StayQuote['nightly'] = []
  const missingRates: string[] = []
  let lodging = 0
  for (const date of nights) {
    const { state, price } = nightInfo(property, date, data, confirmed)
    if (state !== 'libre') occupied.push({ date, reason: state })
    nightly.push({ date, price })
    if (price === null) missingRates.push(date)
    else lodging += price
  }
  const pendingCount = data.reservations.filter(
    r => r.status === 'PENDIENTE' && String(r.propertyId) === pid &&
      overlaps(req.checkIn, req.checkOut, r.checkInDate, r.checkOutDate),
  ).length

  // ---- Capacidad ----
  const guests = (req.adults ?? 1) + (req.minors ?? 0)
  const maxGuests = parseInt(property.maxGuests || '') || 0
  const fitsGuests = !maxGuests || guests <= maxGuests
  const petsWanted = req.pets ?? 0
  const maxPets = property.amenities?.mascotas ? parseInt(property.mascotasCantidad || '') || 0 : 0
  const acceptsPets = petsWanted === 0 || (!!property.amenities?.mascotas && (!maxPets || petsWanted <= maxPets))

  // ---- Cargos por estadía (una sola vez), en USD ----
  let needsRate = false
  const usd = (amount: number, currency: string | undefined) => {
    const v = toUsd(amount, currency, data.usdArs)
    if (v === null) needsRate = true
    return v ?? 0
  }
  const cat = (id?: string) => (id ? data.categories.find(c => String(c.id) === id) : undefined)
  const cleaningCat = cat(property.charges?.limpiezaCategoryId)
  const serviceCat = cat(property.charges?.servicioCategoryId)
  const cleaning = cleaningCat
    ? usd(cleaningCat.amount, cleaningCat.currency)
    : usd(num(property.charges?.limpieza), property.chargesCurrency)
  const service = serviceCat
    ? usd(serviceCat.amount, serviceCat.currency)
    : usd(num(property.charges?.servicio), property.chargesCurrency)
  const petUnit = data.petCharge.amount
    ? usd(num(data.petCharge.amount), data.petCharge.currency)
    : usd(num(property.charges?.mascotas), property.chargesCurrency)
  const pets = petsWanted > 0 ? petUnit * petsWanted : 0

  const stayTotal = lodging + cleaning + service + pets
  const averagePerNight = nightCount ? stayTotal / nightCount : 0

  // ---- Cochera (aparte) y depósito (aparte, reembolsable) ----
  const garageOffered = !!property.amenities?.cochera && num(property.charges?.cochera) > 0
  const garageAmount = garageOffered ? usd(num(property.charges?.cochera), property.chargesCurrency) : 0
  const garageRequested = !!req.garage && garageOffered
  const deposit = usd(num(property.charges?.deposito), property.chargesCurrency)

  const available = nightCount > 0 && occupied.length === 0
  return {
    nights,
    nightCount,
    available,
    occupied,
    pendingCount,
    fitsGuests,
    acceptsPets,
    nightly,
    missingRates,
    lodging: round2(lodging),
    cleaning: round2(cleaning),
    service: round2(service),
    pets: round2(pets),
    stayTotal: round2(stayTotal),
    averagePerNight: round2(averagePerNight),
    garage: {
      requested: garageRequested,
      offered: garageOffered,
      amount: round2(garageAmount),
      totalWithGarage: round2(stayTotal + (garageRequested ? garageAmount : 0)),
    },
    deposit: round2(deposit),
    needsRate,
    bookable: available && missingRates.length === 0 && fitsGuests && acceptsPets && !needsRate,
  }
}

// ---------- Mostrar importes ----------

/** Importe base en USD mostrado en la unidad elegida: "USD 510" / "$ 535.500". */
export function formatUnit(amountUsd: number, unit: Unit, usdArs: number | null): string {
  if (unit === 'ARS') {
    if (!usdArs) return '$ —'
    return `$ ${Math.round(amountUsd * usdArs).toLocaleString('es-AR')}`
  }
  return `USD ${amountUsd.toLocaleString('es-AR', { maximumFractionDigits: 2 })}`
}
