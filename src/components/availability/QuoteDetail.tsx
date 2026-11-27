'use client'

import { useState } from 'react'
import { ArrowLeft, Calendar, CheckCircle2, Home, MapPin, ShieldCheck } from 'lucide-react'
import { AMENITIES, type Property } from '@/lib/properties'
import { formatUnit, quoteStay, type AvailabilityData, type StayRequest, type Unit } from '@/lib/availability'
import UnitToggle from './UnitToggle'

const longDate = (d: string) => {
  const [y, m, day] = d.split('-').map(Number)
  return new Date(y, m - 1, day).toLocaleDateString('es-AR', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
}
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`

function Row({ label, value, strong = false, hint }: { label: string; value: string; strong?: boolean; hint?: string }) {
  return (
    <div className={`flex items-baseline justify-between gap-4 py-1.5 ${strong ? 'text-base font-semibold text-gray-900' : 'text-sm text-gray-700'}`}>
      <span>
        {label}
        {hint && <small className="block text-xs font-normal text-gray-500">{hint}</small>}
      </span>
      <span className="whitespace-nowrap">{value}</span>
    </div>
  )
}

/**
 * Cotización de un departamento para las fechas, huéspedes y mascotas de la búsqueda.
 * Usa quoteStay (el mismo cálculo que las tarjetas). La cochera se suma al total a
 * pagar sólo si el huésped la pide; el depósito de garantía va aparte.
 */
export default function QuoteDetail({ property: p, request, data, unit, onUnit, onBack }: {
  property: Property
  request: StayRequest
  data: AvailabilityData
  unit: Unit
  onUnit: (u: Unit) => void
  onBack: () => void
}) {
  const [garage, setGarage] = useState(!!request.garage)
  const q = quoteStay(p, { ...request, garage }, data)
  const money = (usd: number) => formatUnit(usd, unit, data.usdArs)
  const pets = request.pets ?? 0
  const guests = (request.adults ?? 1) + (request.minors ?? 0)
  const amenities = AMENITIES.filter(a => p.amenities?.[a.id]).map(a => a.name)
  const photos = (p.photos || []).slice(0, 3)
  const facts = [
    p.maxGuests && `Hasta ${p.maxGuests} huéspedes`,
    p.ambientes && plural(Number(p.ambientes) || 0, 'ambiente', 'ambientes'),
    p.bathrooms && plural(Number(p.bathrooms) || 0, 'baño', 'baños'),
    p.mtsDelMar && `${p.mtsDelMar} m del mar`,
  ].filter(Boolean)

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <button type="button" onClick={onBack} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver a resultados
        </button>
        <UnitToggle value={unit} onChange={onUnit} disabledArs={!data.usdArs} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Alojamiento */}
        <section className="rounded-lg bg-white p-5 shadow lg:col-span-3">
          <h2 className="text-2xl font-bold text-gray-900">{p.name}</h2>
          {p.zona && <p className="mt-1 flex items-center gap-1 text-sm text-gray-500"><MapPin className="h-4 w-4" /> {p.zona}</p>}
          <div className="mt-4 grid grid-cols-3 grid-rows-2 gap-2 h-64">
            {photos.length === 0 ? (
              <div className="col-span-3 row-span-2 flex items-center justify-center rounded-md bg-gray-100"><Home className="h-12 w-12 text-gray-300" /></div>
            ) : photos.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt={`${p.name} — foto ${i + 1}`}
                className={`h-full w-full rounded-md object-cover ${i === 0 ? (photos.length === 1 ? 'col-span-3 row-span-2' : 'col-span-2 row-span-2') : photos.length === 2 ? 'row-span-2' : ''}`} />
            ))}
          </div>
          {facts.length > 0 && <p className="mt-4 text-sm font-semibold text-gray-900">{facts.join(' · ')}</p>}
          {amenities.length > 0 && <p className="mt-1 text-sm text-gray-600">{amenities.join(' · ')}</p>}
          {p.description && <p className="mt-3 text-sm text-gray-600 whitespace-pre-line">{p.description}</p>}
        </section>

        {/* Cotización */}
        <section className="rounded-lg bg-white p-5 shadow lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900">Cotización de estadía</h2>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-md border border-gray-200 p-2">
              <span className="flex items-center gap-1 text-xs text-gray-500"><Calendar className="h-3.5 w-3.5" /> Entrada</span>
              <b className="capitalize text-gray-900">{longDate(request.checkIn)}</b>
            </div>
            <div className="rounded-md border border-gray-200 p-2">
              <span className="flex items-center gap-1 text-xs text-gray-500"><Calendar className="h-3.5 w-3.5" /> Salida</span>
              <b className="capitalize text-gray-900">{longDate(request.checkOut)}</b>
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            {plural(q.nightCount, 'noche', 'noches')} · {plural(guests, 'huésped', 'huéspedes')}
            {pets > 0 ? ` · ${plural(pets, 'mascota', 'mascotas')}` : ''}
          </p>

          {!q.available ? (
            // Disponibilidad parcial: no se cotiza ni se puede reservar ese período.
            <div className="mt-3 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
              <p className="font-semibold">
                Disponibilidad parcial: {q.nightCount - q.occupied.length} de {plural(q.nightCount, 'noche libre', 'noches libres')}
              </p>
              <ul className="mt-1 list-disc pl-5 text-xs">
                {q.occupied.map(o => (
                  <li key={o.date}>{longDate(o.date)}: {o.reason === 'reservada' ? 'ocupada por una reserva confirmada' : 'bloqueada por la oficina'}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs">
                Para ofrecer otro período, cambiá la entrada y la salida en la barra de búsqueda y volvé a buscar.
              </p>
            </div>
          ) : (q.missingRates.length > 0 || q.needsRate) ? (
            <div className="mt-3 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
              {q.missingRates.length
                ? `Faltan tarifas en el calendario para: ${q.missingRates.map(longDate).join(', ')}. Cargalas para poder cotizar.`
                : 'Falta la cotización del dólar para pasar a USD los cargos en pesos.'}
            </div>
          ) : (
          <div className="mt-3 divide-y divide-gray-100">
            <div>
              <Row label={`Alojamiento · ${plural(q.nightCount, 'noche', 'noches')}`} value={money(q.lodging)} />
              <Row label="Limpieza" value={money(q.cleaning)} />
              <Row label="Servicio de check-in / check-out" value={money(q.service)} />
              {q.pets > 0 && <Row label={`${plural(pets, 'mascota', 'mascotas')} por estadía`} value={money(q.pets)} />}
            </div>
            <div className="pt-1">
              <Row label="Total de la estadía" value={money(q.stayTotal)} strong />
              <Row label="Precio promedio final por noche" value={money(q.averagePerNight)} />
            </div>

            {q.garage.offered && (
              <div className="pt-2">
                <label className="flex items-center gap-2 py-1.5 text-sm text-gray-700">
                  <input type="checkbox" checked={garage} onChange={e => setGarage(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  Agregar cochera ({money(q.garage.amount)})
                </label>
                {garage && (
                  <>
                    <Row label="Cochera solicitada" value={money(q.garage.amount)} />
                    <Row label="Total a pagar con cochera" value={money(q.garage.totalWithGarage)} strong />
                  </>
                )}
              </div>
            )}
          </div>
          )}

          {q.deposit > 0 && (
            <div className="mt-3 flex items-start gap-2 rounded-md border border-gray-200 bg-gray-50 p-3 text-sm">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />
              <div>
                <b className="text-gray-900">Depósito reembolsable: {money(q.deposit)}</b>
                <p className="text-xs text-gray-500">Se informa por separado del total de la estadía.</p>
              </div>
            </div>
          )}

          {q.available && (
            <p className="mt-3 flex items-center gap-2 rounded-md bg-green-50 px-3 py-2 text-sm font-medium text-green-700">
              <CheckCircle2 className="h-4 w-4" /> Disponible en las fechas seleccionadas
            </p>
          )}
          {q.pendingCount > 0 && (
            <p className="mt-2 text-xs text-amber-700">
              {plural(q.pendingCount, 'reserva pendiente', 'reservas pendientes')} en esas fechas (no ocupan las noches hasta confirmarse).
            </p>
          )}
        </section>
      </div>
    </div>
  )
}
