'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Search, X, Save, Check, CalendarRange } from 'lucide-react'
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

// Orden Dom..Sáb, igual que Date.getDay() (0 = domingo)
const WEEKDAY_LABELS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

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
  const [panel, setPanel] = useState<null | { property: Property; dates: string[] }>(null)
  const [pAvailable, setPAvailable] = useState(true)
  const [pPrice, setPPrice] = useState('')
  const [pPlans, setPPlans] = useState<string[]>([])

  // Selección de fechas (posiblemente salteadas) para una propiedad, antes de abrir el panel.
  const [selectedDates, setSelectedDates] = useState<null | { property: Property; keys: string[] }>(null)

  // Selección avanzada de fechas (estilo Booking): rango + filtro por día de la semana.
  const [showAdvancedPicker, setShowAdvancedPicker] = useState(false)
  const [advPropertyId, setAdvPropertyId] = useState('')
  const [advFrom, setAdvFrom] = useState('')
  const [advTo, setAdvTo] = useState('')
  const [advWeekdays, setAdvWeekdays] = useState<boolean[]>([true, true, true, true, true, true, true])

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

  // Click en una celda: suma/saca esa fecha de la selección (permite fechas salteadas).
  const toggleDateSelection = (property: Property, day: Date) => {
    if (panel) return // no tocar la selección mientras el panel está abierto
    const key = dateKey(day)
    setSelectedDates(prev => {
      if (!prev || String(prev.property.id) !== String(property.id)) {
        return { property, keys: [key] }
      }
      const keys = prev.keys.includes(key) ? prev.keys.filter(k => k !== key) : [...prev.keys, key]
      return keys.length === 0 ? null : { ...prev, keys }
    })
  }

  const cancelSelection = () => setSelectedDates(null)

  const toggleAdvWeekday = (i: number) => {
    setAdvWeekdays(prev => prev.map((v, idx) => (idx === i ? !v : v)))
  }

  const openAdvancedPicker = () => {
    setAdvPropertyId('')
    setAdvFrom('')
    setAdvTo('')
    setAdvWeekdays([true, true, true, true, true, true, true])
    setShowAdvancedPicker(true)
  }

  // Rango "Desde/Hasta" + filtro por día de la semana (estilo Booking) → arma la selección salteada.
  const canApplyAdvancedPicker = advPropertyId && advFrom && advTo && advWeekdays.some(Boolean)

  const applyAdvancedPicker = () => {
    if (!canApplyAdvancedPicker) return
    const property = properties.find(p => String(p.id) === advPropertyId)
    if (!property) return
    const from = parseDateKey(advFrom)
    const to = parseDateKey(advTo)
    const start = from <= to ? from : to
    const end = from <= to ? to : from
    const keys: string[] = []
    for (let d = new Date(start); d <= end; d = addDays(d, 1)) {
      if (advWeekdays[d.getDay()]) keys.push(dateKey(d))
    }
    if (keys.length === 0) return
    setSelectedDates({ property, keys })
    setShowAdvancedPicker(false)
  }

  // Abre el panel de edición con exactamente las fechas elegidas (contiguas o no).
  const applySelection = () => {
    if (!selectedDates || selectedDates.keys.length === 0) return
    const { property } = selectedDates
    const keys = [...selectedDates.keys].sort()
    const existing = getEntry(rates, String(property.id), keys[0])
    setPanel({ property, dates: keys })
    setPAvailable(existing ? existing.available : true)
    setPPrice(existing && existing.price ? String(existing.price) : '')
    setPPlans(existing ? existing.planIds : [])
    setSelectedDates(null)
  }

  const removeDateFromPanel = (key: string) => {
    setPanel(prev => (prev ? { ...prev, dates: prev.dates.filter(k => k !== key) } : prev))
  }

  const closePanel = () => setPanel(null)

  const togglePanelPlan = (id: string) => {
    setPPlans(prev => (prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]))
  }

  // Guarda de reentrancia sincrónica: evita que un doble clic dispare dos escrituras
  // antes de que React desmonte el panel (el estado `panel` se actualiza async).
  const savingPanelRef = useRef(false)

  const savePanel = () => {
    if (!panel || panel.dates.length === 0 || savingPanelRef.current) return
    savingPanelRef.current = true

    const entry: RateEntry = {
      price: parseFloat(pPrice) || 0,
      available: pAvailable,
      planIds: pPlans,
    }
    const updated = setEntryForDates(rates, String(panel.property.id), panel.dates, entry)
    setRates(updated)
    saveRates(updated)
    closePanel()
    savingPanelRef.current = false
  }

  // Formatea una dateKey ("YYYY-MM-DD") para mostrar, sin pasar por UTC (evita corrimientos de día).
  const formatDateKey = (key: string) => {
    const [, month, day] = key.split('-').map(Number)
    return `${String(day).padStart(2, '0')} ${MONTH_NAMES[month - 1].slice(0, 3)}`
  }

  // Parsea un "YYYY-MM-DD" (de un <input type="date">) como fecha LOCAL.
  // `new Date("YYYY-MM-DD")` lo interpreta como medianoche UTC, que en husos horarios
  // detrás de UTC (ej. Argentina, UTC-3) cae en el día anterior al leerlo en hora local.
  const parseDateKey = (key: string) => {
    const [year, month, day] = key.split('-').map(Number)
    return new Date(year, month - 1, day)
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
          <button
            onClick={openAdvancedPicker}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <CalendarRange className="h-4 w-4 mr-2 text-gray-400" />
            Selección avanzada de fechas
          </button>
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
                          const key = dateKey(d)
                          const entry = getEntry(rates, String(p.id), key)
                          const blocked = entry && !entry.available
                          const matchesPlan = !planFilter || (entry ? entry.planIds.includes(planFilter) : false)
                          const selected = selectedDates && String(selectedDates.property.id) === String(p.id) && selectedDates.keys.includes(key)
                          return (
                            <td
                              key={key}
                              onClick={() => toggleDateSelection(p, d)}
                              className={`relative w-24 min-w-24 border-r border-gray-100 px-1 py-3 text-center text-xs cursor-pointer hover:bg-indigo-50 ${
                                blocked ? 'bg-red-50' : ''
                              } ${!matchesPlan ? 'opacity-30' : ''} ${
                                selected ? 'bg-indigo-100 ring-2 ring-inset ring-indigo-500' : ''
                              }`}
                              title="Click para seleccionar (podés elegir varias fechas salteadas)"
                            >
                              {selected && (
                                <Check className="h-3.5 w-3.5 text-indigo-600 absolute top-1 right-1" />
                              )}
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

      {/* Selección avanzada de fechas: rango + días de la semana (estilo Booking) */}
      {showAdvancedPicker && (
        <div className="fixed inset-0 z-40 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/30" onClick={() => setShowAdvancedPicker(false)} />
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-medium text-gray-900">Selección avanzada de fechas</h3>
              <button onClick={() => setShowAdvancedPicker(false)} className="text-gray-400 hover:text-gray-600" aria-label="Cerrar">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Propiedad</label>
                <select
                  value={advPropertyId}
                  onChange={(e) => setAdvPropertyId(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm text-black"
                >
                  <option value="">Seleccionar propiedad</option>
                  {properties.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fecha inicial</label>
                  <input type="date" value={advFrom} onChange={(e) => setAdvFrom(e.target.value)} className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm text-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fecha final</label>
                  <input type="date" value={advTo} onChange={(e) => setAdvTo(e.target.value)} className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm text-black" />
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">¿A qué días de la semana querés aplicarles los cambios?</p>
                <div className="flex flex-wrap gap-3">
                  {WEEKDAY_LABELS.map((label, i) => (
                    <label key={label} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={advWeekdays[i]}
                        onChange={() => toggleAdvWeekday(i)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mr-1.5"
                      />
                      <span className="text-sm text-gray-700">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowAdvancedPicker(false)}
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={applyAdvancedPicker}
                disabled={!canApplyAdvancedPicker}
                className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Seleccionar fechas
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Barra flotante: aparece mientras hay fechas seleccionadas (pueden ser salteadas) */}
      {selectedDates && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 bg-white border border-gray-200 rounded-full shadow-lg px-5 py-3">
          <span className="text-sm text-gray-700">
            <span className="font-medium text-gray-900">{selectedDates.property.name}</span> · {selectedDates.keys.length} fecha{selectedDates.keys.length === 1 ? '' : 's'} seleccionada{selectedDates.keys.length === 1 ? '' : 's'}
          </span>
          <button onClick={cancelSelection} className="text-sm font-medium text-gray-500 hover:text-gray-700">
            Cancelar
          </button>
          <button onClick={applySelection} className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Aplicar
          </button>
        </div>
      )}

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
              {/* Fechas seleccionadas (pueden ser salteadas, no necesariamente un rango) */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Fechas seleccionadas ({panel.dates.length})
                </h4>
                <div className="flex flex-wrap gap-2">
                  {panel.dates.map(key => (
                    <span key={key} className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full pl-3 pr-1.5 py-1">
                      {formatDateKey(key)}
                      <button
                        type="button"
                        onClick={() => removeDateFromPanel(key)}
                        className="rounded-full hover:bg-indigo-200 p-0.5"
                        title="Quitar fecha"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
                {panel.dates.length === 0 && (
                  <p className="text-sm text-red-600 mt-1">Quitaste todas las fechas — seleccioná al menos una para guardar.</p>
                )}
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

              <button
                onClick={savePanel}
                disabled={panel.dates.length === 0}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
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
