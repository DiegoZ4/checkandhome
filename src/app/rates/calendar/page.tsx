'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Search, X, Save } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { loadProperties, Property } from '@/lib/properties'
import {
  loadRates,
  saveRates,
  loadRatePlans,
  RatePlan,
  RatesMap,
  RateEntry,
  getEntry,
  setEntryForDates,
  dateKey,
  addDays,
  DAY_LETTERS,
  MONTH_NAMES,
} from '@/lib/rates'

const WINDOW_DAYS = 14 // días visibles en la grilla

export default function RatesCalendarPage() {
  const [loading, setLoading] = useState(true)
  const [properties, setProperties] = useState<Property[]>([])
  const [rates, setRates] = useState<RatesMap>({})
  const [plans, setPlans] = useState<RatePlan[]>([])
  const [search, setSearch] = useState('')
  const [planFilter, setPlanFilter] = useState('')

  // Inicio de la ventana visible
  const [startDate, setStartDate] = useState<Date>(() => new Date())

  // Panel de edición
  const [panel, setPanel] = useState<null | { property: Property; from: string; to: string }>(null)
  const [pAvailable, setPAvailable] = useState(true)
  const [pPrice, setPPrice] = useState('')
  const [pPlans, setPPlans] = useState<string[]>([])

  useEffect(() => {
    setProperties(loadProperties().filter(p => !p.eliminado && (p.category || 'alojamiento') === 'alojamiento'))
    setRates(loadRates())
    setPlans(loadRatePlans())
    setLoading(false)
  }, [])

  const days = useMemo(() => Array.from({ length: WINDOW_DAYS }, (_, i) => addDays(startDate, i)), [startDate])

  const filteredProps = properties.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  const goToday = () => setStartDate(new Date())
  const prevWeek = () => setStartDate(d => addDays(d, -7))
  const nextWeek = () => setStartDate(d => addDays(d, 7))

  const onMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [year, month] = e.target.value.split('-').map(Number)
    setStartDate(new Date(year, month, 1))
  }

  // Opciones del desplegable (mes/año): 12 meses desde el mes actual
  const monthOptions = useMemo(() => {
    const base = new Date()
    base.setDate(1)
    return Array.from({ length: 12 }, (_, i) => {
      const d = new Date(base.getFullYear(), base.getMonth() + i, 1)
      return { value: `${d.getFullYear()}-${d.getMonth()}`, label: `${MONTH_NAMES[d.getMonth()]} de ${d.getFullYear()}` }
    })
  }, [])

  const openPanel = (property: Property, day: Date) => {
    const key = dateKey(day)
    const existing = getEntry(rates, String(property.id), key)
    setPanel({ property, from: key, to: key })
    setPAvailable(existing ? existing.available : true)
    setPPrice(existing && existing.price ? String(existing.price) : '')
    setPPlans(existing ? existing.planIds : [])
  }

  const closePanel = () => setPanel(null)

  const togglePanelPlan = (id: string) => {
    setPPlans(prev => (prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]))
  }

  // Guarda de reentrancia sincrónica: evita que un doble clic dispare dos escrituras
  // antes de que React desmonte el panel (el estado `panel` se actualiza async).
  const savingPanelRef = useRef(false)

  const savePanel = () => {
    if (!panel || savingPanelRef.current) return
    savingPanelRef.current = true
    // Construir el rango de fechas (inclusive)
    const from = new Date(panel.from)
    const to = new Date(panel.to)
    const start = from <= to ? from : to
    const end = from <= to ? to : from
    const keys: string[] = []
    for (let d = new Date(start); d <= end; d = addDays(d, 1)) keys.push(dateKey(d))

    const entry: RateEntry = {
      price: parseFloat(pPrice) || 0,
      available: pAvailable,
      planIds: pPlans,
    }
    const updated = setEntryForDates(rates, String(panel.property.id), keys, entry)
    setRates(updated)
    saveRates(updated)
    closePanel()
    savingPanelRef.current = false
  }

  const headerMonth = `${MONTH_NAMES[startDate.getMonth()]} de ${startDate.getFullYear()}`
  const isToday = (d: Date) => dateKey(d) === dateKey(new Date())

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <CalendarIcon className="h-12 w-12 text-indigo-600 mx-auto animate-pulse" />
          <p className="mt-2 text-gray-600">Cargando calendario...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Tarifas y Disponibilidad - Check and Point" />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-6">
          <CalendarIcon className="h-8 w-8 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Calendario</h1>
        </div>

        {/* Controles: mes/año + HOY */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <select
            onChange={onMonthChange}
            value={`${startDate.getFullYear()}-${startDate.getMonth()}`}
            className="rounded-md border-gray-300 shadow-sm sm:text-sm text-black"
          >
            {/* aseguramos que el mes actual de la ventana esté disponible */}
            {!monthOptions.some(o => o.value === `${startDate.getFullYear()}-${startDate.getMonth()}`) && (
              <option value={`${startDate.getFullYear()}-${startDate.getMonth()}`}>
                {MONTH_NAMES[startDate.getMonth()]} de {startDate.getFullYear()}
              </option>
            )}
            {monthOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <button onClick={goToday} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            HOY
          </button>
          <select
            value={planFilter}
            onChange={(e) => setPlanFilter(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm sm:text-sm text-black"
          >
            <option value="">Todos los planes de tarifa</option>
            {plans.map(pl => <option key={pl.id} value={pl.id}>{pl.name}</option>)}
          </select>
        </div>

        <div className="flex gap-4">
          {/* Columna de propiedades con buscador */}
          <div className="w-56 flex-shrink-0">
            <label className="block text-sm font-medium text-gray-700 mb-1">Propiedad</label>
            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="block w-full pl-9 rounded-full border-gray-300 shadow-sm sm:text-sm text-black"
                placeholder="Buscar propiedad"
              />
            </div>
          </div>

          {/* Grilla */}
          <div className="flex-1 overflow-x-auto">
            <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
              {/* Barra de mes con navegación de semana */}
              <div className="flex items-center justify-between bg-gray-50 border-b border-gray-300 px-4 py-2">
                <button onClick={prevWeek} className="p-1 rounded hover:bg-gray-200" title="Semana anterior">
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <span className="font-semibold text-gray-800">{headerMonth}</span>
                <button onClick={nextWeek} className="p-1 rounded hover:bg-gray-200" title="Semana siguiente">
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <table className="border-collapse">
                <thead>
                  <tr>
                    <th className="w-40 min-w-40 sticky left-0 bg-white border-r border-gray-300 px-3 py-2 text-left text-xs font-medium text-gray-500">
                      Propiedad
                    </th>
                    {days.map(d => (
                      <th key={dateKey(d)} className={`w-24 min-w-24 border-r border-gray-200 px-2 py-2 text-center text-xs ${isToday(d) ? 'bg-indigo-50' : ''}`}>
                        <div className="font-medium text-gray-700">{DAY_LETTERS[d.getDay()]}</div>
                        <div className="text-gray-500">{d.getDate()}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredProps.length === 0 ? (
                    <tr>
                      <td colSpan={WINDOW_DAYS + 1} className="px-4 py-8 text-center text-sm text-gray-500">
                        No hay propiedades. <Link href="/units/new?category=alojamiento" className="text-indigo-600 underline">Crear una</Link>.
                      </td>
                    </tr>
                  ) : (
                    filteredProps.map(p => (
                      <tr key={p.id} className="border-t border-gray-200">
                        <td className="sticky left-0 bg-white border-r border-gray-300 px-3 py-3 text-sm font-medium text-gray-800 truncate">
                          {p.name}
                        </td>
                        {days.map(d => {
                          const entry = getEntry(rates, String(p.id), dateKey(d))
                          const blocked = entry && !entry.available
                          const matchesPlan = !planFilter || (entry ? entry.planIds.includes(planFilter) : false)
                          return (
                            <td
                              key={dateKey(d)}
                              onClick={() => openPanel(p, d)}
                              className={`w-24 min-w-24 border-r border-gray-100 px-1 py-3 text-center text-xs cursor-pointer hover:bg-indigo-50 ${
                                blocked ? 'bg-red-50' : ''
                              } ${!matchesPlan ? 'opacity-30' : ''}`}
                              title="Editar precio / disponibilidad"
                            >
                              {blocked ? (
                                <span className="text-red-600 font-medium">Bloqueado</span>
                              ) : entry && entry.price ? (
                                <span className="text-gray-800 font-medium">${entry.price.toLocaleString('es-AR')}</span>
                              ) : (
                                <span className="text-gray-400">Precio x noche</span>
                              )}
                            </td>
                          )
                        })}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Panel de edición de precio/disponibilidad (clic en celda) */}
      {panel && (
        <div className="fixed inset-0 z-20 flex justify-end">
          <div className="absolute inset-0 bg-black/30" onClick={closePanel} />
          <div className="relative w-full max-w-md bg-white h-full shadow-xl overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <button onClick={closePanel} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
              <span className="text-sm font-medium text-gray-700 truncate">{panel.property.name}</span>
            </div>

            <div className="space-y-6">
              {/* Fechas seleccionadas */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Fechas seleccionadas</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Desde</label>
                    <input type="date" value={panel.from} onChange={(e) => setPanel(prev => prev && ({ ...prev, from: e.target.value }))} className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm text-black" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Hasta</label>
                    <input type="date" value={panel.to} onChange={(e) => setPanel(prev => prev && ({ ...prev, to: e.target.value }))} className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm text-black" />
                  </div>
                </div>
              </div>

              {/* Disponibilidad */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Disponibilidad</h4>
                <div className="flex items-center space-x-6">
                  <label className="inline-flex items-center">
                    <input type="radio" name="avail" checked={pAvailable} onChange={() => setPAvailable(true)} className="h-4 w-4 text-indigo-600 border-gray-300" />
                    <span className="ml-2 text-sm text-gray-700">Disponible</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="avail" checked={!pAvailable} onChange={() => setPAvailable(false)} className="h-4 w-4 text-indigo-600 border-gray-300" />
                    <span className="ml-2 text-sm text-gray-700">Bloqueado</span>
                  </label>
                </div>
              </div>

              {/* Precio por noche */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">Precio por noche</label>
                <input type="number" min="0" value={pPrice} onChange={(e) => setPPrice(e.target.value)} disabled={!pAvailable} className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm text-black disabled:bg-gray-100" placeholder="Precio por noche" />
              </div>

              {/* Planes de Tarifa (multiselección) */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Planes de Tarifa</label>
                {plans.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No hay planes creados. <Link href="/rates/plans" className="text-indigo-600 underline">Crear planes</Link>.
                  </p>
                ) : (
                  <div className="space-y-2 border border-gray-200 rounded-md p-3 max-h-40 overflow-y-auto">
                    {plans.map(pl => (
                      <label key={pl.id} className="flex items-center">
                        <input type="checkbox" checked={pPlans.includes(pl.id)} onChange={() => togglePanelPlan(pl.id)} className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        <span className="ml-2 text-sm text-gray-700">{pl.name}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={savePanel} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                <Save className="h-5 w-5 mr-2" />
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
