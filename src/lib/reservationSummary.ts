// Texto de la reserva para copiar al portapapeles y mandarle al huésped (botón
// "Copiar datos de la reserva" en el detalle). Para cambiar el texto, editar acá.

import { getChannelName, type Reservation } from './reservations'
import type { Property } from './properties'

// Adicionales por check-in/out fuera de horario (texto fijo de la plantilla).
const EXTRA_EARLY_LATE = '$15.000' // entre las 6 y las 8 hs o entre las 20 y las 23 hs
const EXTRA_NIGHT = '$30.000' // entre las 23 y las 6 hs

const money = (v: number) => v.toLocaleString('es-AR', { maximumFractionDigits: 2 })

/** Importe en la moneda de la reserva: PESOS -> "$", dólar -> "US$". */
const reservationAmount = (r: Reservation, v: number) => `${r.currency === 'PESOS' ? '$' : 'US$'}${money(v)}`

/** Importe en la moneda de los cargos del alojamiento: ARS -> "$", USD -> "US$". */
const propertyAmount = (p: Property, v: number) => `${p.chargesCurrency === 'ARS' ? '$' : 'US$'}${money(v)}`

/** "2026-11-09" -> "09/11/26" */
const shortDate = (d: string) => (d ? `${d.slice(8, 10)}/${d.slice(5, 7)}/${d.slice(2, 4)}` : '-')

/** "14:00" -> "14", "14:30" -> "14:30" */
const hour = (t: string) => (t.endsWith(':00') ? String(Number(t.slice(0, 2))) : t)

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`

export function buildReservationSummary(r: Reservation, property?: Property): string {
  const upper = (s: string) => s.trim().toUpperCase()
  const pets = r.mascotasEnabled
    ? `con ${r.mascotasQty > 1 ? plural(r.mascotasQty, 'mascota', 'mascotas') : 'mascota'}`
    : 'sin mascota'
  const parking = r.cocheraEnabled ? 'con cochera' : 'sin cochera'
  const deposit = parseFloat(property?.charges?.deposito || '') || 0
  const lugar = property?.propertyType === 'casa' ? 'La casa' : 'El departamento'

  const lines: (string | null)[] = [
    `Reserva ${upper(getChannelName(r.channel))}`,
    '',
    `Reserva ${upper(`${r.firstName} ${r.lastName}`)}`,
    `Alojamiento ${upper(r.propertyName)}`,
    '',
    `Del ${shortDate(r.checkInDate)} al ${shortDate(r.checkOutDate)}`,
    '',
    `Total ${plural(r.nights, 'noche', 'noches')}`,
    `${plural(r.guests, 'persona', 'personas')}, ${pets}, ${parking}.`,
    '',
    `Horario de check-in registrado: ${r.checkInTime ? `${r.checkInTime} hs.` : 'a confirmar.'}`,
    `Horario de check-out registrado: ${r.checkOutTime ? `${r.checkOutTime} hs.` : 'a confirmar.'}`,
  ]

  // Horarios habituales: los configurados en el alojamiento (si los tiene).
  const usualIn = property?.checkInFrom && property?.checkInTo
    ? `Check-in entre las ${hour(property.checkInFrom)} y las ${hour(property.checkInTo)} hs.` : null
  const usualOut = property?.checkOutFrom && property?.checkOutTo
    ? `Check-out entre las ${hour(property.checkOutFrom)} y las ${hour(property.checkOutTo)} hs.` : null
  if (usualIn || usualOut) lines.push('', 'Horarios habituales:', usualIn, usualOut)

  lines.push(
    '',
    'Se deberá pagar un adicional cuando se realicen en estos horarios:',
    `Entre las 6 y las 8 hs o entre las 20 y las 23 hs: ${EXTRA_EARLY_LATE}.`,
    `Entre las 23 y las 6 hs: ${EXTRA_NIGHT}.`,
    '',
    `Total de la reserva: ${reservationAmount(r, r.totalBruto)}`,
    '',
    `Seña: ${r.senaValue > 0 ? reservationAmount(r, r.senaValue) : 'no corresponde'}`,
    '',
    `Restarían ${reservationAmount(r, r.restante)} en EFECTIVO a pagar al llegar. El pago con transferencia tendría un recargo del 10%. Precios sujetos a impuestos.`,
    '',
    `${lugar} incluye ropa de cama, no toallas.`,
    '',
    'La reserva se confirma al realizar el pago de la seña. La seña NO es reembolsable.',
  )

  if (deposit > 0 && property) {
    lines.push(
      '',
      `Se tomará un depósito de garantía de ${propertyAmount(property, deposit)} en EFECTIVO al ingresar, que será devuelto en el check-out.`,
    )
  }

  return lines.filter((l): l is string => l !== null).join('\n')
}

/** Copia al portapapeles. Usa la API moderna y, si no está disponible, el método clásico. */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  }
}
