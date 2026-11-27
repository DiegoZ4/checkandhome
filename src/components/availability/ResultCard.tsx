'use client'

import { AlertTriangle, Home, MapPin } from 'lucide-react'
import { AMENITIES, type Property } from '@/lib/properties'
import { formatUnit, type StayQuote, type Unit } from '@/lib/availability'

// Comodidades que se destacan en la foto, en este orden (después de mascotas y cochera).
const HIGHLIGHT = ['wifi', 'aireAcondicionado', 'vistaAlMar', 'terrazaBalcon', 'parrilla']
const amenityName = (id: string) => AMENITIES.find(a => a.id === id)?.name || id

/** Texto de lo que incluye el total: "Incluye limpieza, servicio y 1 mascota". */
export function includesText(q: StayQuote, pets: number): string {
  const parts = ['limpieza', 'servicio']
  if (pets > 0 && q.pets > 0) parts.push(pets === 1 ? '1 mascota' : `${pets} mascotas`)
  return `Incluye ${parts.slice(0, -1).join(', ')} y ${parts.at(-1)}`
}

/** Etiquetas sobre la foto: mascotas y cochera si la búsqueda las pide, y comodidades. */
function tags(p: Property, pets: number, wantsGarage: boolean): string[] {
  const out: string[] = []
  if (pets > 0) out.push('Admite mascotas')
  if (p.amenities?.cochera && (wantsGarage || out.length < 3)) out.push('Cochera')
  for (const id of HIGHLIGHT) if (p.amenities?.[id] && out.length < 3) out.push(amenityName(id))
  return out
}

/**
 * Tarjeta de un alojamiento disponible: foto, datos de la ficha, total de la estadía y
 * promedio por noche (con cargos), cochera y depósito aparte, y reservas pendientes.
 */
export default function ResultCard({ property: p, quote: q, pets, wantsGarage, unit, usdArs, onDetail }: {
  property: Property
  quote: StayQuote
  pets: number
  wantsGarage: boolean
  unit: Unit
  usdArs: number | null
  onDetail: () => void
}) {
  const money = (usd: number) => formatUnit(usd, unit, usdArs)
  const priced = q.missingRates.length === 0 && !q.needsRate
  const details = [
    p.zona,
    p.maxGuests && `Hasta ${p.maxGuests} huéspedes`,
    p.ambientes && `${p.ambientes} ambiente${p.ambientes === '1' ? '' : 's'}`,
  ].filter(Boolean).join(' · ')

  return (
    <article className="flex flex-col overflow-hidden rounded-lg bg-white shadow transition-shadow hover:shadow-lg">
      <div className="relative h-44 bg-gray-100">
        {p.photos?.[0] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.photos[0]} alt={p.name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center"><Home className="h-12 w-12 text-gray-300" /></div>
        )}
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
          {tags(p, pets, wantsGarage).map(t => (
            <span key={t} className="rounded bg-white/90 px-2 py-0.5 text-[11px] font-medium text-gray-700 shadow-sm">{t}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold text-gray-900">{p.name}</h3>
        {details && (
          <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
            <MapPin className="h-3.5 w-3.5 shrink-0" /> {details}
          </p>
        )}

        {priced ? (
          <div className="mt-3">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-sm text-gray-600">Total por {q.nightCount} noche{q.nightCount === 1 ? '' : 's'}</span>
              <span className="text-xl font-bold text-indigo-700">{money(q.stayTotal)}</span>
            </div>
            <p className="text-xs text-gray-500">{includesText(q, pets)}</p>
            <div className="mt-1 flex items-baseline justify-between gap-2">
              <span className="text-sm text-gray-600">Promedio final por noche</span>
              <span className="text-sm font-semibold text-gray-900">{money(q.averagePerNight)}</span>
            </div>
          </div>
        ) : (
          <p className="mt-3 flex items-start gap-1 text-sm text-amber-700">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            {q.missingRates.length
              ? `Faltan tarifas en el calendario para ${q.missingRates.length} noche${q.missingRates.length === 1 ? '' : 's'}.`
              : 'Falta la cotización del dólar para calcular el precio.'}
          </p>
        )}

        <div className="mt-3 space-y-1 border-t border-gray-100 pt-2 text-xs text-gray-600">
          {q.garage.offered && (
            <div className="flex justify-between"><span>Cochera opcional</span><span className="font-medium">+ {money(q.garage.amount)}</span></div>
          )}
          {q.deposit > 0 && (
            <div className="flex justify-between"><span>Depósito reembolsable aparte</span><span className="font-medium">{money(q.deposit)}</span></div>
          )}
        </div>

        {q.pendingCount > 0 && (
          <span className="mt-2 inline-flex w-fit rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800"
            title="Reservas pendientes en esas fechas: no ocupan las noches hasta confirmarse">
            {q.pendingCount} pendiente{q.pendingCount === 1 ? '' : 's'}
          </span>
        )}

        <div className="mt-auto pt-4">
          <button type="button" onClick={onDetail}
            className="w-full rounded-md border border-indigo-600 px-3 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50">
            Ver detalle
          </button>
        </div>
      </div>
    </article>
  )
}
