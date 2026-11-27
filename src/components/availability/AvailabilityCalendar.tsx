'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { addDays, dateKey } from '@/lib/rates'
import { confirmedOf, formatUnit, nightInfo, type AvailabilityData, type NightState, type Unit } from '@/lib/availability'
import type { SearchResult } from '@/lib/availabilitySearch'

export type CalendarSpan = 14 | 'month'

const parse = (d: string) => {
  const [y, m, day] = d.split('-').map(Number)
  return new Date(y, m - 1, day)
}
const DOW = ['D', 'L', 'M', 'X', 'J', 'V', 'S']
const dayMonth = (d: Date) => d.toLocaleDateString('es-AR', { day: 'numeric', month: 'short' }).replace('.', '')

/** Días visibles: 14 días desde `start`, o el mes completo de `start`. */
export function visibleDays(start: string, span: CalendarSpan): string[] {
  const s = parse(start)
  if (span === 14) return Array.from({ length: 14 }, (_, i) => dateKey(addDays(s, i)))
  const total = new Date(s.getFullYear(), s.getMonth() + 1, 0).getDate()
  return Array.from({ length: total }, (_, i) => dateKey(new Date(s.getFullYear(), s.getMonth(), i + 1)))
}

/** Inicio del período visible al cambiar de vista o al moverse (n = -1 / +1). */
export function shiftStart(start: string, span: CalendarSpan, n: number): string {
  const s = parse(start)
  if (span === 14) return dateKey(addDays(s, 14 * n))
  return dateKey(new Date(s.getFullYear(), s.getMonth() + n, 1))
}

export const startFor = (checkIn: string, span: CalendarSpan) =>
  span === 14 ? checkIn : dateKey(new Date(parse(checkIn).getFullYear(), parse(checkIn).getMonth(), 1))

const CELL: Record<NightState, { label: string; className: string }> = {
  libre: { label: 'Libre', className: 'bg-green-50 text-green-800' },
  reservada: { label: 'Ocupada', className: 'bg-red-100 text-red-800' },
  bloqueada: { label: 'Bloqueada', className: 'bg-gray-200 text-gray-700' },
}

/**
 * Vista Calendario del buscador: una fila por departamento, una columna por día.
 * Usa nightInfo / quoteStay (availability.ts), igual que las tarjetas. Las noches de la
 * consulta se marcan con borde; el período visible no cambia las fechas consultadas.
 */
export default function AvailabilityCalendar({ results, checkIn, checkOut, data, unit, span, start, onSpan, onStart, onDetail }: {
  results: SearchResult[]
  checkIn: string
  checkOut: string
  data: AvailabilityData
  unit: Unit
  span: CalendarSpan
  start: string
  onSpan: (span: CalendarSpan) => void
  onStart: (start: string) => void
  onDetail: (propertyId: number) => void
}) {
  const days = visibleDays(start, span)
  const today = dateKey(new Date())
  const money = (usd: number) => formatUnit(usd, unit, data.usdArs)
  const title = span === 'month'
    ? parse(start).toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })
    : `${dayMonth(parse(days[0]))} al ${dayMonth(parse(days.at(-1)!))}`

  return (
    <div className="rounded-lg bg-white shadow">
      {/* Controles del período visible */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 p-3">
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => onStart(shiftStart(start, span, -1))} aria-label="Período anterior"
            className="rounded-md border border-gray-300 p-1.5 text-gray-700 hover:bg-gray-50"><ChevronLeft className="h-4 w-4" /></button>
          <span className="min-w-[10rem] text-center text-sm font-semibold capitalize text-gray-900">{title}</span>
          <button type="button" onClick={() => onStart(shiftStart(start, span, 1))} aria-label="Período siguiente"
            className="rounded-md border border-gray-300 p-1.5 text-gray-700 hover:bg-gray-50"><ChevronRight className="h-4 w-4" /></button>
          <button type="button" onClick={() => onStart(startFor(checkIn, span))}
            className="ml-1 rounded-md border border-gray-300 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
            Ir a la estadía
          </button>
        </div>
        <div className="inline-flex overflow-hidden rounded-md border border-gray-300" role="group" aria-label="Período visible">
          {([[14, '14 días'], ['month', 'Mes']] as const).map(([value, label]) => (
            <button key={label} type="button" aria-pressed={span === value}
              onClick={() => { onSpan(value); onStart(startFor(checkIn, value)) }}
              className={`px-3 py-1.5 text-xs font-medium ${span === value ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 px-3 py-2 text-xs text-gray-600">
        {(['libre', 'reservada', 'bloqueada'] as const).map(s => (
          <span key={s} className="inline-flex items-center gap-1.5">
            <span className={`h-3 w-3 rounded-sm ${CELL[s].className}`} />
            {s === 'libre' ? 'Libre' : s === 'reservada' ? 'Ocupada por reserva confirmada' : 'Bloqueada por Oficina'}
          </span>
        ))}
        <span className="inline-flex items-center gap-1.5"><span className="h-3 w-3 rounded-sm ring-2 ring-indigo-500" /> Noches consultadas</span>
        <span className="text-gray-400">Una reserva pendiente mantiene la noche libre.</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-xs">
          <thead>
            <tr className="border-y border-gray-200 bg-gray-50">
              <th className="sticky left-0 z-10 min-w-[11rem] bg-gray-50 px-3 py-2 text-left font-medium text-gray-600">Departamento</th>
              {days.map(d => {
                const date = parse(d)
                const asked = d >= checkIn && d < checkOut
                return (
                  <th key={d} className={`min-w-[3.5rem] px-1 py-2 text-center font-medium ${asked ? 'bg-indigo-50 text-indigo-800' : d === today ? 'text-indigo-600' : 'text-gray-600'}`}>
                    <div>{DOW[date.getDay()]}</div>
                    <div className="text-sm">{date.getDate()}</div>
                    {(date.getDate() === 1 || d === days[0]) && <div className="text-[10px] text-gray-400">{dayMonth(date).split(' ')[1]}</div>}
                  </th>
                )
              })}
              <th className="min-w-[8rem] px-3 py-2 text-right font-medium text-gray-600">Total estadía</th>
              <th className="px-3 py-2 text-center font-medium text-gray-600">Pendientes</th>
              <th className="px-3 py-2" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {results.map(({ property: p, quote: q, freeNights }) => {
              const confirmed = confirmedOf(p, data.reservations)
              const priced = q.missingRates.length === 0 && !q.needsRate
              return (
                <tr key={p.id} className="hover:bg-gray-50/60">
                  <td className="sticky left-0 z-10 bg-white px-3 py-2">
                    <div className="font-semibold text-gray-900">{p.name}</div>
                    <div className={q.available ? 'text-green-700' : 'text-amber-700'}>
                      {freeNights} de {q.nightCount} noches libres
                    </div>
                  </td>
                  {days.map(d => {
                    const n = nightInfo(p, d, data, confirmed)
                    const asked = d >= checkIn && d < checkOut
                    const who = n.reservation ? ` · ${`${n.reservation.firstName} ${n.reservation.lastName}`.trim()}` : ''
                    const price = n.price !== null ? ` · ${money(n.price)}` : ''
                    return (
                      <td key={d} className="px-0.5 py-1">
                        <span
                          title={`${dayMonth(parse(d))}: ${CELL[n.state].label}${n.state === 'libre' ? price : who}`}
                          className={`block rounded px-1 py-1.5 text-center text-[11px] font-medium ${CELL[n.state].className} ${asked ? 'ring-2 ring-inset ring-indigo-500' : ''}`}
                        >
                          {CELL[n.state].label}
                        </span>
                      </td>
                    )
                  })}
                  <td className="px-3 py-2 text-right whitespace-nowrap">
                    {!q.available ? (
                      <span className="font-medium text-amber-700">Disponibilidad parcial</span>
                    ) : !priced ? (
                      <span className="text-amber-700">{q.missingRates.length ? 'Faltan tarifas' : 'Falta cotización'}</span>
                    ) : (
                      <>
                        <div className="text-sm font-semibold text-gray-900">{money(q.stayTotal)}</div>
                        <div className="text-gray-500">{money(q.averagePerNight)} / noche</div>
                      </>
                    )}
                  </td>
                  <td className="px-3 py-2 text-center text-gray-700">{q.pendingCount || '—'}</td>
                  <td className="px-3 py-2 text-right">
                    <button type="button" onClick={() => onDetail(p.id)}
                      className="whitespace-nowrap rounded-md border border-indigo-600 px-3 py-1.5 text-xs font-medium text-indigo-600 hover:bg-indigo-50">
                      Ver detalle
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
