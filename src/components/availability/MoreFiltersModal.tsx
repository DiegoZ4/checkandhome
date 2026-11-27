'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import Modal from '@/components/Modal'
import { AMENITIES } from '@/lib/properties'
import { validateFilters, type ExtraFilters } from '@/lib/availabilitySearch'
import type { Unit } from '@/lib/availability'
import { ALL_ZONES } from './SearchBar'

const MONEY_KEYS = ['totalMin', 'totalMax', 'nightMin', 'nightMax'] as const

const inputClass = (error?: string) =>
  `mt-1 block w-full rounded-md shadow-sm text-sm text-black focus:border-indigo-500 focus:ring-indigo-500 ${
    error ? 'border-red-400 ring-1 ring-red-300' : 'border-gray-300'
  }`

/**
 * Más filtros: presupuesto total y por noche (USD o pesos), zona, dormitorios mínimos,
 * distancia máxima al mar y comodidades. Trabaja sobre una copia: Cancelar descarta,
 * "Mostrar disponibilidad" valida y aplica, "Limpiar filtros" quita los adicionales.
 */
export default function MoreFiltersModal({ filters, zone, zones, usdArs, onApply, onClear, onClose }: {
  filters: ExtraFilters
  zone: string
  zones: string[]
  usdArs: number | null
  onApply: (filters: ExtraFilters, zone: string) => void
  onClear: () => void
  onClose: () => void
}) {
  const [draft, setDraft] = useState<ExtraFilters>(filters)
  const [draftZone, setDraftZone] = useState(zone)
  const [errors, setErrors] = useState<ReturnType<typeof validateFilters>>({})

  const set = <K extends keyof ExtraFilters>(k: K, v: ExtraFilters[K]) => {
    setDraft(d => ({ ...d, [k]: v }))
    setErrors(e => ({ ...e, [k]: undefined }))
  }

  // Al cambiar de moneda, los importes ya cargados se convierten con la cotización vigente.
  const changeCurrency = (next: Unit) => {
    if (next === draft.currency) return
    const factor = usdArs ? (next === 'ARS' ? usdArs : 1 / usdArs) : null
    const converted = { ...draft, currency: next }
    for (const k of MONEY_KEYS) {
      const v = draft[k].trim()
      if (v !== '' && factor) converted[k] = String(Math.round(Number(v) * factor * 100) / 100)
    }
    setDraft(converted)
    setErrors({})
  }

  const toggleAmenity = (id: string) =>
    set('amenities', draft.amenities.includes(id) ? draft.amenities.filter(a => a !== id) : [...draft.amenities, id])

  const apply = () => {
    const errs = validateFilters(draft, usdArs)
    setErrors(errs)
    // Con errores no se aplica nada: quedan los resultados de la última búsqueda.
    if (Object.values(errs).some(Boolean)) return
    onApply(draft, draftZone)
  }

  const unit = draft.currency === 'ARS' ? 'ARS' : 'USD'
  const money = (k: (typeof MONEY_KEYS)[number], word: 'Desde' | 'Hasta') => (
    <div>
      <input
        type="number" min="0" step="any" inputMode="decimal"
        aria-label={`${word} (${unit})`}
        value={draft[k]}
        onChange={e => set(k, e.target.value)}
        placeholder={`${word} ${unit}`}
        className={inputClass(errors[k])}
      />
      {errors[k] && <p className="mt-1 text-xs text-red-600">{errors[k]}</p>}
    </div>
  )

  const currencyToggle = (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500">Moneda</span>
      <div className="inline-flex overflow-hidden rounded-md border border-gray-300" role="group" aria-label="Moneda del presupuesto">
        {(['USD', 'ARS'] as const).map(c => (
          <button key={c} type="button" onClick={() => changeCurrency(c)} aria-pressed={draft.currency === c}
            className={`px-3 py-1 text-xs font-medium ${draft.currency === c ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
            {c === 'ARS' ? 'Pesos (ARS)' : 'USD'}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <Modal title="Más filtros" onClose={onClose} wide headerExtra={currencyToggle}>
      {errors.currency && <p className="mb-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{errors.currency}</p>}
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
        <div>
          <label htmlFor="mf-zone" className="block text-sm font-medium text-gray-700">Zona</label>
          <select id="mf-zone" value={draftZone} onChange={e => setDraftZone(e.target.value)} className={inputClass()}>
            <option value={ALL_ZONES}>Todas</option>
            {zones.map(z => <option key={z} value={z}>{z}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="mf-rooms" className="block text-sm font-medium text-gray-700">Habitaciones mínimas</label>
          <select id="mf-rooms" value={draft.minBedrooms} onChange={e => set('minBedrooms', e.target.value)} className={inputClass()}>
            <option value="">Cualquiera</option>
            {[1, 2, 3, 4, 5].map(n => <option key={n} value={String(n)}>{n}{n === 5 ? ' o más' : ''}</option>)}
          </select>
        </div>
        <fieldset>
          <legend className="text-sm font-medium text-gray-700">Presupuesto total de la estadía</legend>
          <div className="grid grid-cols-2 gap-2">{money('totalMin', 'Desde')}{money('totalMax', 'Hasta')}</div>
        </fieldset>
        <div>
          <label htmlFor="mf-sea" className="block text-sm font-medium text-gray-700">Distancia máxima al mar</label>
          <div className="relative">
            <input id="mf-sea" type="number" min="0" step="1" value={draft.maxSeaDistance}
              onChange={e => set('maxSeaDistance', e.target.value)} placeholder="Sin límite"
              className={`${inputClass(errors.maxSeaDistance)} pr-8`} />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">m</span>
          </div>
          {errors.maxSeaDistance && <p className="mt-1 text-xs text-red-600">{errors.maxSeaDistance}</p>}
        </div>
        <fieldset className="md:col-span-1">
          <legend className="text-sm font-medium text-gray-700">Precio promedio final por noche</legend>
          <div className="grid grid-cols-2 gap-2">{money('nightMin', 'Desde')}{money('nightMax', 'Hasta')}</div>
        </fieldset>
      </div>

      <h3 className="mt-6 text-sm font-semibold text-gray-900">Comodidades</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {AMENITIES.map(a => {
          const on = draft.amenities.includes(a.id)
          return (
            <button key={a.id} type="button" onClick={() => toggleAmenity(a.id)} aria-pressed={on}
              className={`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm ${
                on ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
              }`}>
              {on && <Check className="h-3.5 w-3.5" />}{a.name}
            </button>
          )
        })}
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Se muestran los alojamientos que tienen todas las comodidades seleccionadas. El presupuesto incluye
        alojamiento, limpieza, servicio y mascotas; la cochera y el depósito de garantía van aparte.
        Los límites incluyen el valor ingresado.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">
        <button type="button" onClick={onClear} className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
          Limpiar filtros
        </button>
        <div className="flex gap-3">
          <button type="button" onClick={onClose}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancelar
          </button>
          <button type="button" onClick={apply}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Mostrar disponibilidad
          </button>
        </div>
      </div>
    </Modal>
  )
}
