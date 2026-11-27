'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, ChevronDown, ChevronLeft, ChevronRight, MapPin, Minus, PawPrint, Plus, Search, Users } from 'lucide-react'
import { dateKey } from '@/lib/rates'

/** Valores de la barra de búsqueda de disponibilidad. */
export interface SearchValues {
  checkIn: string // YYYY-MM-DD ('' = sin elegir)
  checkOut: string
  adults: number // mínimo 1
  minors: number // mínimo 0
  pets: number // mínimo 0
  zone: string // 'Todas' o una zona de las fichas
}

export const ALL_ZONES = 'Todas'

export const EMPTY_SEARCH: SearchValues = { checkIn: '', checkOut: '', adults: 2, minors: 0, pets: 0, zone: ALL_ZONES }

type Pop = 'dates' | 'guests' | 'pets' | 'zone' | null

const MAX_COUNT = 25
const MAX_NIGHTS = 366
const WEEKDAYS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do']

/** "2027-01-10" -> "10/01/2027" */
const longDate = (d: string) => (d ? `${d.slice(8, 10)}/${d.slice(5, 7)}/${d.slice(0, 4)}` : '')
/** "2027-01-10" -> "10 ene" */
const shortDate = (d: string) => {
  const [y, m, day] = d.split('-').map(Number)
  return new Date(y, m - 1, day).toLocaleDateString('es-AR', { day: 'numeric', month: 'short' }).replace('.', '')
}
const parse = (d: string) => {
  const [y, m, day] = d.split('-').map(Number)
  return new Date(y, m - 1, day)
}
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`
/** Noches entre dos fechas (sin tope; para validar el máximo). */
const nightsBetween = (a: string, b: string) => Math.round((parse(b).getTime() - parse(a).getTime()) / 86_400_000)

export const guestsLabel = (v: SearchValues) => plural(v.adults + v.minors, 'huésped', 'huéspedes')
export const petsLabel = (pets: number) => (pets === 0 ? 'Sin mascotas' : plural(pets, 'mascota', 'mascotas'))

/** Errores que impiden buscar (fechas faltantes o rango inválido). */
export function validateSearch(v: SearchValues): string[] {
  const errors: string[] = []
  if (!v.checkIn) errors.push('Elegí la fecha de entrada.')
  if (!v.checkOut) errors.push('Elegí la fecha de salida.')
  if (v.checkIn && v.checkOut && v.checkOut <= v.checkIn) errors.push('La salida tiene que ser posterior a la entrada.')
  if (v.checkIn && v.checkOut && nightsBetween(v.checkIn, v.checkOut) > MAX_NIGHTS) {
    errors.push(`La estadía puede tener hasta ${MAX_NIGHTS} noches.`)
  }
  if (v.adults < 1) errors.push('Tiene que haber al menos un adulto.')
  return errors
}

// ---------- Calendario de dos meses ----------

function MonthGrid({ first, start, end, today, onPick }: {
  first: Date; start: string; end: string; today: string; onPick: (d: string) => void
}) {
  const year = first.getFullYear()
  const month = first.getMonth()
  const total = new Date(year, month + 1, 0).getDate()
  const lead = (first.getDay() + 6) % 7 // semana de lunes a domingo
  return (
    <div className="w-64">
      <h3 className="mb-2 text-center text-sm font-semibold capitalize text-gray-800">
        {first.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })}
      </h3>
      <div className="grid grid-cols-7 gap-y-1 text-center text-xs">
        {WEEKDAYS.map(w => <span key={w} className="py-1 font-medium text-gray-400">{w}</span>)}
        {Array.from({ length: lead }, (_, i) => <span key={`e${i}`} />)}
        {Array.from({ length: total }, (_, i) => {
          const key = dateKey(new Date(year, month, i + 1))
          const past = key < today
          const edge = key === start || key === end
          const inside = !!start && !!end && key > start && key < end
          return (
            <button
              key={key}
              type="button"
              disabled={past}
              onClick={() => onPick(key)}
              className={`h-8 rounded-md text-sm ${
                edge ? 'bg-indigo-600 font-semibold text-white'
                  : inside ? 'bg-indigo-100 text-indigo-800'
                    : past ? 'cursor-not-allowed text-gray-300'
                      : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function DatesPop({ value, onApply, onClose }: {
  value: SearchValues; onApply: (checkIn: string, checkOut: string) => void; onClose: () => void
}) {
  const today = dateKey(new Date())
  const [start, setStart] = useState(value.checkIn)
  const [end, setEnd] = useState(value.checkOut)
  const [month, setMonth] = useState(() => {
    const base = value.checkIn ? parse(value.checkIn) : new Date()
    return new Date(base.getFullYear(), base.getMonth(), 1)
  })
  const [error, setError] = useState('')

  // Primer click: entrada. Segundo click posterior: salida. Un click anterior o con el
  // rango completo vuelve a empezar desde la entrada.
  const pick = (d: string) => {
    setError('')
    if (end || !start || d <= start) {
      setStart(d)
      setEnd('')
    } else {
      setEnd(d)
    }
  }

  const nights = start && end ? nightsBetween(start, end) : 0
  const apply = () => {
    if (!start || !end) return setError(!start ? 'Elegí la fecha de entrada.' : 'Elegí la fecha de salida.')
    if (nights > MAX_NIGHTS) return setError(`La estadía puede tener hasta ${MAX_NIGHTS} noches.`)
    onApply(start, end)
  }

  const second = new Date(month.getFullYear(), month.getMonth() + 1, 1)
  const canGoBack = month > new Date(new Date().getFullYear(), new Date().getMonth(), 1)

  return (
    <div className="p-4">
      <div className="relative flex flex-col gap-6 sm:flex-row">
        <button type="button" onClick={() => setMonth(m => new Date(m.getFullYear(), m.getMonth() - 1, 1))}
          disabled={!canGoBack} aria-label="Mes anterior"
          className="absolute left-0 top-0 rounded p-1 text-gray-600 hover:bg-gray-100 disabled:opacity-30">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => setMonth(m => new Date(m.getFullYear(), m.getMonth() + 1, 1))}
          aria-label="Mes siguiente" className="absolute right-0 top-0 rounded p-1 text-gray-600 hover:bg-gray-100">
          <ChevronRight className="h-4 w-4" />
        </button>
        <MonthGrid first={month} start={start} end={end} today={today} onPick={pick} />
        <MonthGrid first={second} start={start} end={end} today={today} onPick={pick} />
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-3">
        <p className="text-sm text-gray-700">
          {start ? shortDate(start) : 'Elegí la entrada'} – {end ? shortDate(end) : 'elegí la salida'}
          {nights > 0 && <b className="ml-2 text-indigo-700">· {plural(nights, 'noche', 'noches')}</b>}
        </p>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => { setStart(''); setEnd(''); setError('') }} className="text-sm text-gray-500 hover:text-gray-700">
            Borrar fechas
          </button>
          <button type="button" onClick={onClose} className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">Cerrar</button>
          <button type="button" onClick={apply} className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">Aplicar</button>
        </div>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}

// ---------- Contadores ----------

function Counter({ label, hint, value, min, onChange }: {
  label: string; hint?: string; value: number; min: number; onChange: (v: number) => void
}) {
  return (
    <div className="flex items-center justify-between gap-6 py-2">
      <div>
        <p className="text-sm font-medium text-gray-800">{label}</p>
        {hint && <p className="text-xs text-gray-500">{hint}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min}
          aria-label={`Restar ${label.toLowerCase()}`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-30">
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-6 text-center text-sm font-semibold text-gray-900" aria-live="polite">{value}</span>
        <button type="button" onClick={() => onChange(Math.min(MAX_COUNT, value + 1))} disabled={value >= MAX_COUNT}
          aria-label={`Sumar ${label.toLowerCase()}`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-30">
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

function PopFooter({ onClose, onApply }: { onClose: () => void; onApply: () => void }) {
  return (
    <div className="mt-3 flex justify-end gap-3 border-t border-gray-100 pt-3">
      <button type="button" onClick={onClose} className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">Cerrar</button>
      <button type="button" onClick={onApply} className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">Aplicar</button>
    </div>
  )
}

function GuestsPop({ value, onApply, onClose }: { value: SearchValues; onApply: (a: number, m: number) => void; onClose: () => void }) {
  const [adults, setAdults] = useState(value.adults)
  const [minors, setMinors] = useState(value.minors)
  return (
    <div className="w-72 p-4">
      <Counter label="Adultos" hint="13 años o más" value={adults} min={1} onChange={setAdults} />
      <Counter label="Menores" hint="De 0 a 12 años" value={minors} min={0} onChange={setMinors} />
      <p className="mt-1 text-sm text-gray-600">Total: <b>{plural(adults + minors, 'huésped', 'huéspedes')}</b></p>
      <PopFooter onClose={onClose} onApply={() => onApply(adults, minors)} />
    </div>
  )
}

function PetsPop({ value, onApply, onClose }: { value: SearchValues; onApply: (p: number) => void; onClose: () => void }) {
  const [pets, setPets] = useState(value.pets)
  return (
    <div className="w-72 p-4">
      <Counter label="Cantidad de mascotas" value={pets} min={0} onChange={setPets} />
      <p className="text-xs text-gray-500">Se muestran sólo los alojamientos que admiten esa cantidad.</p>
      {pets > 0 && (
        <button type="button" onClick={() => setPets(0)} className="mt-2 text-sm text-indigo-600 hover:text-indigo-800">Sin mascotas</button>
      )}
      <PopFooter onClose={onClose} onApply={() => onApply(pets)} />
    </div>
  )
}

function ZonePop({ value, zones, onApply, onClose }: {
  value: SearchValues; zones: string[]; onApply: (z: string) => void; onClose: () => void
}) {
  const [zone, setZone] = useState(value.zone)
  return (
    <div className="w-64 p-4">
      <label htmlFor="zone-select" className="block text-sm font-medium text-gray-800">Zona</label>
      <select id="zone-select" value={zone} onChange={e => setZone(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 text-sm text-black focus:border-indigo-500 focus:ring-indigo-500">
        <option value={ALL_ZONES}>Todas las zonas</option>
        {zones.map(z => <option key={z} value={z}>{z}</option>)}
      </select>
      <PopFooter onClose={onClose} onApply={() => onApply(zone)} />
    </div>
  )
}

// ---------- Barra ----------

function Field({ icon: Icon, title, value, active, invalid, onClick }: {
  icon: typeof Calendar; title: string; value: string; active: boolean; invalid?: boolean; onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={active}
      className={`flex min-w-0 flex-1 items-center gap-2 rounded-md border px-3 py-2 text-left transition-colors ${
        active ? 'border-indigo-500 ring-1 ring-indigo-500' : invalid ? 'border-red-400' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <Icon className={`h-4 w-4 shrink-0 ${invalid ? 'text-red-500' : 'text-gray-500'}`} />
      <span className="min-w-0 flex-1">
        <small className="block text-[11px] text-gray-500">{title}</small>
        <b className={`block truncate text-sm ${value ? 'text-gray-900' : 'font-normal text-gray-400'}`}>{value || 'Elegir'}</b>
      </span>
      <ChevronDown className="h-4 w-4 shrink-0 text-gray-400" />
    </button>
  )
}

/**
 * Barra de búsqueda: Entrada, Salida, Huéspedes, Mascotas, Zona y Buscar.
 * Cada control se edita en su ventana y se confirma con Aplicar (actualiza el resumen
 * vía onChange: los valores los guarda la página, así la zona queda sincronizada con
 * Más filtros). Buscar valida y entrega los valores visibles a onSearch.
 */
export default function SearchBar({ value: values, zones, onChange, onSearch }: {
  value: SearchValues
  zones: string[]
  onChange: (values: SearchValues) => void
  onSearch: (values: SearchValues) => void
}) {
  const [pop, setPop] = useState<Pop>(null)
  const [errors, setErrors] = useState<string[]>([])
  const ref = useRef<HTMLDivElement>(null)

  // Cerrar la ventana abierta al hacer click afuera o con Escape (sin aplicar).
  useEffect(() => {
    if (!pop) return
    const onDown = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setPop(null) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setPop(null) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [pop])

  const apply = (patch: Partial<SearchValues>) => {
    onChange({ ...values, ...patch })
    setErrors([])
    setPop(null)
  }

  const search = () => {
    const errs = validateSearch(values)
    setErrors(errs)
    setPop(null)
    if (!errs.length) onSearch(values)
  }

  const toggle = (p: Pop) => setPop(cur => (cur === p ? null : p))
  const datesInvalid = errors.length > 0 && (!values.checkIn || !values.checkOut || values.checkOut <= values.checkIn)

  return (
    <div ref={ref} className="relative">
      <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-2 shadow-sm lg:flex-row lg:items-stretch">
        <Field icon={Calendar} title="Entrada" value={longDate(values.checkIn)} active={pop === 'dates'} invalid={datesInvalid && !values.checkIn} onClick={() => toggle('dates')} />
        <Field icon={Calendar} title="Salida" value={longDate(values.checkOut)} active={pop === 'dates'} invalid={datesInvalid} onClick={() => toggle('dates')} />
        <Field icon={Users} title="Huéspedes" value={guestsLabel(values)} active={pop === 'guests'} onClick={() => toggle('guests')} />
        <Field icon={PawPrint} title="Mascotas" value={petsLabel(values.pets)} active={pop === 'pets'} onClick={() => toggle('pets')} />
        <Field icon={MapPin} title="Zona" value={values.zone === ALL_ZONES ? 'Todas' : values.zone} active={pop === 'zone'} onClick={() => toggle('zone')} />
        <button type="button" onClick={search}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          <Search className="h-4 w-4" /> Buscar
        </button>
      </div>

      {pop && (
        <div className={`absolute z-30 mt-2 rounded-lg border border-gray-200 bg-white shadow-xl ${
          pop === 'dates' ? 'left-0' : pop === 'zone' ? 'right-0 lg:right-28' : 'left-0 lg:left-1/3'
        }`}>
          {pop === 'dates' && <DatesPop value={values} onClose={() => setPop(null)} onApply={(checkIn, checkOut) => apply({ checkIn, checkOut })} />}
          {pop === 'guests' && <GuestsPop value={values} onClose={() => setPop(null)} onApply={(adults, minors) => apply({ adults, minors })} />}
          {pop === 'pets' && <PetsPop value={values} onClose={() => setPop(null)} onApply={pets => apply({ pets })} />}
          {pop === 'zone' && <ZonePop value={values} zones={zones} onClose={() => setPop(null)} onApply={zone => apply({ zone })} />}
        </div>
      )}

      {errors.length > 0 && (
        <div role="alert" className="mt-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          <p className="font-medium">Revisá la búsqueda antes de continuar:</p>
          <ul className="list-disc pl-5">{errors.map(e => <li key={e}>{e}</li>)}</ul>
        </div>
      )}
    </div>
  )
}
