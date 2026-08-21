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
  AvailabilityStatus,
  AVAILABILITY_OPTIONS,
  getEntry,
  getEntryStatus,
  getPlanColor,
  setEntryForDates,
  dateKey,
  addDays,
  DAY_LETTERS,
  MONTH_NAMES,
} from '@/lib/rates'

const WINDOW_DAYS = 14 // días visibles en la vista compacta

// 'month' = todos los días del mes (por defecto). 'window' = ventana corta de 14 días.
type CalendarView = 'month' | 'window'

// Orden Dom..Sáb, igual que Date.getDay() (0 = domingo)
const WEEKDAY_LABELS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

// Tope defensivo por si se tipea un año absurdo en el input de fecha.
const MAX_RANGE_DAYS = 366

// Formatea una dateKey ("YYYY-MM-DD") para mostrar, sin pasar por UTC (evita corrimientos de día).
function formatDateKey(key: string) {
  const [, month, day] = key.split('-').map(Number)
  return `${String(day).padStart(2, '0')} ${MONTH_NAMES[month - 1].slice(0, 3)}`
}

// Parsea un "YYYY-MM-DD" (de un <input type="date">) como fecha LOCAL.
// `new Date("YYYY-MM-DD")` lo interpreta como medianoche UTC, que en husos horarios
// detrás de UTC (ej. Argentina, UTC-3) cae en el día anterior al leerlo en hora local.
function parseDateKey(key: string) {
  const [year, month, day] = key.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export default function RatesCalendarPage() {
  const [loading, setLoading] = useState(true)
  const [properties, setProperties] = useState<Property[]>([])
  const [rates, setRates] = useState<RatesMap>({})
  const [plans, setPlans] = useState<RatePlan[]>([])
  const [search, setSearch] = useState('')
  const [planFilter, setPlanFilter] = useState('')

  // Inicio de la ventana visible
  const [startDate, setStartDate] = useState<Date>(() => new Date())
  const [view, setView] = useState<CalendarView>('month')

  // Panel de edición: se abre al clickear una fecha y contiene todo (rango, días obviados,
  // disponibilidad, precio y planes).
  const [panel, setPanel] = useState<null | { property: Property; from: string; to: string }>(null)
  const [pStatus, setPStatus] = useState<AvailabilityStatus>('abierto')
  const [pPrice, setPPrice] = useState('')
  const [pPlans, setPPlans] = useState<string[]>([])
  // Días de la semana obviados (true = se saltea ese día dentro del rango). Índice = Date.getDay().
  const [skipWeekdays, setSkipWeekdays] = useState<boolean[]>(Array(7).fill(false))
  // Fechas puntuales quitadas a mano desde los chips.
  const [excludedDates, setExcludedDates] = useState<string[]>([])

  useEffect(() => {
    setProperties(loadProperties().filter(p => !p.eliminado && (p.category || 'alojamiento') === 'alojamiento'))
    setRates(loadRates())
    setPlans(loadRatePlans())
    setLoading(false)
  }, [])

  const days = useMemo(() => {
    if (view === 'month') {
      const year = startDate.getFullYear()
      const month = startDate.getMonth()
      // Día 0 del mes siguiente = último día de este mes.
      const total = new Date(year, month + 1, 0).getDate()
      return Array.from({ length: total }, (_, i) => new Date(year, month, i + 1))
    }
    return Array.from({ length: WINDOW_DAYS }, (_, i) => addDays(startDate, i))
  }, [startDate, view])

  // Celdas de la grilla mensual: se rellena con null al principio y al final para que
  // cada día caiga en su columna (Dom..Sáb) y las semanas queden alineadas en filas.
  const monthCells = useMemo(() => {
    const year = startDate.getFullYear()
    const month = startDate.getMonth()
    const total = new Date(year, month + 1, 0).getDate()
    const lead = new Date(year, month, 1).getDay()
    const cells: (Date | null)[] = Array(lead).fill(null)
    for (let d = 1; d <= total; d++) cells.push(new Date(year, month, d))
    while (cells.length % 7 !== 0) cells.push(null)
    return cells
  }, [startDate])

  const filteredProps = properties.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  const goToday = () => setStartDate(new Date())
  // En vista de mes se navega de mes en mes; en la compacta, de semana en semana.
  const prevPeriod = () => setStartDate(d =>
    view === 'month' ? new Date(d.getFullYear(), d.getMonth() - 1, 1) : addDays(d, -7))
  const nextPeriod = () => setStartDate(d =>
    view === 'month' ? new Date(d.getFullYear(), d.getMonth() + 1, 1) : addDays(d, 7))

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

  // Fechas finales sobre las que se aplica el cambio: el rango completo, menos los días de la
  // semana obviados, menos las fechas quitadas a mano.
  const panelDates = useMemo(() => {
    if (!panel || !panel.from || !panel.to) return []
    const a = parseDateKey(panel.from)
    const b = parseDateKey(panel.to)
    if (isNaN(a.getTime()) || isNaN(b.getTime())) return []
    const start = a <= b ? a : b
    const end = a <= b ? b : a
    const keys: string[] = []
    for (let d = new Date(start); d <= end && keys.length < MAX_RANGE_DAYS; d = addDays(d, 1)) {
      if (skipWeekdays[d.getDay()]) continue
      const key = dateKey(d)
      if (excludedDates.includes(key)) continue
      keys.push(key)
    }
    return keys
  }, [panel, skipWeekdays, excludedDates])

  // Click en una celda: abre el panel con esa fecha como rango inicial (desde = hasta).
  const openPanel = (property: Property, day: Date) => {
    const key = dateKey(day)
    const existing = getEntry(rates, String(property.id), key)
    setPanel({ property, from: key, to: key })
    setSkipWeekdays(Array(7).fill(false))
    setExcludedDates([])
    setPStatus(existing ? getEntryStatus(existing) : 'abierto')
    setPPrice(existing && existing.price ? String(existing.price) : '')
    setPPlans(existing ? existing.planIds : [])
  }

  // Click normal: abre el panel en esa fecha. Shift+click: extiende el rango desde la
  // fecha ancla (`from`) hasta la clickeada, siempre dentro de la misma propiedad.
  const handleCellClick = (property: Property, day: Date, shiftKey: boolean) => {
    if (shiftKey && panel && String(panel.property.id) === String(property.id)) {
      const key = dateKey(day)
      const anchor = panel.from
      // Las dateKeys "YYYY-MM-DD" ordenan igual como texto que cronológicamente.
      const [from, to] = anchor <= key ? [anchor, key] : [key, anchor]
      setPanel({ property, from, to })
      setExcludedDates([])
      return
    }
    openPanel(property, day)
  }

  const closePanel = () => setPanel(null)

  const toggleSkipWeekday = (i: number) => {
    setSkipWeekdays(prev => prev.map((v, idx) => (idx === i ? !v : v)))
  }

  const excludeDate = (key: string) => setExcludedDates(prev => [...prev, key])

  const togglePanelPlan = (id: string) => {
    setPPlans(prev => (prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]))
  }

  // Guarda de reentrancia sincrónica: evita que un doble clic dispare dos escrituras
  // antes de que React desmonte el panel (el estado `panel` se actualiza async).
  const savingPanelRef = useRef(false)

  const savePanel = () => {
    if (!panel || panelDates.length === 0 || savingPanelRef.current) return
    savingPanelRef.current = true

    const entry: RateEntry = {
      price: parseFloat(pPrice) || 0,
      status: pStatus,
      // Se mantiene sincronizado para no romper entradas leídas por código viejo.
      available: pStatus === 'abierto',
      ...(pStatus === 'cerrado24'
        ? { closedUntil: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() }
        : {}),
      planIds: pPlans,
    }
    const updated = setEntryForDates(rates, String(panel.property.id), panelDates, entry)
    setRates(updated)
    saveRates(updated)
    closePanel()
    savingPanelRef.current = false
  }

  // Franja de color de una celda: un color por plan aplicado, repartidos en partes
  // iguales (2 planes = mitad y mitad, 3 = tercios, etc.).
  const planStripe = (planIds: string[]): string | undefined => {
    const colors = planIds
      .map(id => plans.find(pl => pl.id === id))
      .filter((pl): pl is RatePlan => Boolean(pl))
      .map(getPlanColor)
    if (colors.length === 0) return undefined
    if (colors.length === 1) return colors[0]
    const step = 100 / colors.length
    const stops = colors.map((c, i) => `${c} ${i * step}% ${(i + 1) * step}%`).join(', ')
    return `linear-gradient(90deg, ${stops})`
  }

  // Datos de una celda (día + propiedad), compartidos por la vista mensual y la compacta.
  const cellInfo = (property: Property, key: string) => {
    const entry = getEntry(rates, String(property.id), key)
    const status = entry ? getEntryStatus(entry) : 'abierto'
    return {
      entry,
      status,
      matchesPlan: !planFilter || (entry ? entry.planIds.includes(planFilter) : false),
      inSelection: Boolean(panel && String(panel.property.id) === String(property.id) && panelDates.includes(key)),
      stripe: entry ? planStripe(entry.planIds) : undefined,
      planNames: entry
        ? entry.planIds.map(id => plans.find(pl => pl.id === id)?.name).filter(Boolean).join(' + ')
        : '',
    }
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
        {/* Con el panel abierto se reserva el ancho del drawer para que la grilla siga
            visible. Va en su propio wrapper: en el div de arriba, `lg:px-8` le ganaría
            al padding derecho por el orden en que Tailwind emite las utilidades. */}
        <div className={`transition-[padding] duration-200 ${panel ? 'md:pr-[29rem]' : ''}`}>
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
          {/* Vista: mes completo (por defecto) o ventana compacta de 14 días */}
          <div className="inline-flex rounded-md border border-gray-300 bg-white overflow-hidden">
            <button
              onClick={() => setView('month')}
              aria-pressed={view === 'month'}
              className={`px-3 py-2 text-sm font-medium ${
                view === 'month' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Mes completo
            </button>
            <button
              onClick={() => setView('window')}
              aria-pressed={view === 'window'}
              className={`px-3 py-2 text-sm font-medium border-l border-gray-300 ${
                view === 'window' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              14 días
            </button>
          </div>
          <select
            value={planFilter}
            onChange={(e) => setPlanFilter(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm sm:text-sm text-black"
          >
            <option value="">Todos los planes de tarifa</option>
            {plans.map(pl => <option key={pl.id} value={pl.id}>{pl.name}</option>)}
          </select>
        </div>

        {/* Referencia de colores + ayuda de selección */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-xs text-gray-500">
          <span>
            <kbd className="px-1.5 py-0.5 rounded border border-gray-300 bg-gray-50 font-sans text-gray-700">Shift</kbd>
            {' '}+ click para seleccionar un rango de fechas
          </span>
          {plans.length > 0 && (
            <span className="flex flex-wrap items-center gap-3">
              {plans.map(pl => (
                <span key={pl.id} className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: getPlanColor(pl) }} />
                  {pl.name}
                </span>
              ))}
            </span>
          )}
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
          <div className={`flex-1 min-w-0 ${view === 'month' ? '' : 'overflow-x-auto'}`}>
            <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
              {/* Barra de mes con navegación */}
              <div className="flex items-center justify-between bg-gray-50 border-b border-gray-300 px-4 py-2">
                <button onClick={prevPeriod} className="p-1 rounded hover:bg-gray-200" title={view === 'month' ? 'Mes anterior' : 'Semana anterior'}>
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <span className="font-semibold text-gray-800">{headerMonth}</span>
                <button onClick={nextPeriod} className="p-1 rounded hover:bg-gray-200" title={view === 'month' ? 'Mes siguiente' : 'Semana siguiente'}>
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              {view === 'month' ? (
                /* Vista mensual: semanas hacia abajo, una grilla por propiedad. */
                filteredProps.length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm text-gray-500">
                    No hay propiedades. <Link href="/units/new?category=alojamiento" className="text-indigo-600 underline">Crear una</Link>.
                  </div>
                ) : (
                  filteredProps.map(p => (
                    <div key={p.id} className="border-b border-gray-200 last:border-b-0">
                      <div className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-50/70 border-b border-gray-200">
                        {p.name}
                      </div>
                      <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
                        {WEEKDAY_LABELS.map(l => (
                          <div key={l} className="px-2 py-1.5 text-center text-xs font-medium text-gray-500">{l}</div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7">
                        {monthCells.map((d, i) => {
                          if (!d) {
                            return <div key={`empty-${i}`} className="min-h-[4.5rem] border-r border-b border-gray-100 bg-gray-50/40" />
                          }
                          const key = dateKey(d)
                          const { entry, status, matchesPlan, inSelection, stripe, planNames } = cellInfo(p, key)
                          return (
                            <div
                              key={key}
                              onClick={(e) => handleCellClick(p, d, e.shiftKey)}
                              title="Click para editar · Shift + click para seleccionar un rango"
                              className={`relative min-h-[4.5rem] border-r border-b border-gray-100 px-2 pt-1.5 pb-3 text-xs cursor-pointer select-none hover:bg-indigo-50 ${
                                status === 'cerrado' ? 'bg-red-50' : status === 'cerrado24' ? 'bg-amber-50' : ''
                              } ${!matchesPlan ? 'opacity-30' : ''} ${
                                inSelection ? 'bg-indigo-100 ring-2 ring-inset ring-indigo-500' : ''
                              }`}
                            >
                              <div className={`text-[11px] font-semibold ${isToday(d) ? 'text-indigo-600' : 'text-gray-400'}`}>
                                {d.getDate()}
                              </div>
                              <div className="mt-1 text-center">
                                {status === 'cerrado' ? (
                                  <span className="text-red-600 font-medium">Cerrado</span>
                                ) : status === 'cerrado24' ? (
                                  <span className="text-amber-600 font-medium">Cerrado 24hs</span>
                                ) : entry && entry.price ? (
                                  <span className="text-gray-800 font-medium">${entry.price.toLocaleString('es-AR')}</span>
                                ) : (
                                  <span className="text-gray-400">Precio x noche</span>
                                )}
                              </div>
                              {stripe && (
                                <span
                                  className="absolute bottom-0 left-0 right-0 h-1.5"
                                  style={{ background: stripe }}
                                  title={planNames}
                                />
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))
                )
              ) : (
              <table className="border-collapse">
                <thead>
                  <tr>
                    <th className="w-40 min-w-40 sticky left-0 z-10 bg-white border-r border-gray-300 px-3 py-2 text-left text-xs font-medium text-gray-500">
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
                      <td colSpan={days.length + 1} className="px-4 py-8 text-center text-sm text-gray-500">
                        No hay propiedades. <Link href="/units/new?category=alojamiento" className="text-indigo-600 underline">Crear una</Link>.
                      </td>
                    </tr>
                  ) : (
                    filteredProps.map(p => (
                      <tr key={p.id} className="border-t border-gray-200">
                        <td className="sticky left-0 z-10 bg-white border-r border-gray-300 px-3 py-3 text-sm font-medium text-gray-800 truncate">
                          {p.name}
                        </td>
                        {days.map(d => {
                          const key = dateKey(d)
                          // `inSelection` resalta las fechas que va a afectar el panel abierto.
                          const { entry, status, matchesPlan, inSelection, stripe, planNames } = cellInfo(p, key)
                          return (
                            <td
                              key={key}
                              onClick={(e) => handleCellClick(p, d, e.shiftKey)}
                              className={`relative w-24 min-w-24 border-r border-gray-100 px-1 py-3 pb-4 text-center text-xs cursor-pointer select-none hover:bg-indigo-50 ${
                                status === 'cerrado' ? 'bg-red-50' : status === 'cerrado24' ? 'bg-amber-50' : ''
                              } ${!matchesPlan ? 'opacity-30' : ''} ${
                                inSelection ? 'bg-indigo-100 ring-2 ring-inset ring-indigo-500' : ''
                              }`}
                              title="Click para editar · Shift + click para seleccionar un rango"
                            >
                              {status === 'cerrado' ? (
                                <span className="text-red-600 font-medium">Cerrado</span>
                              ) : status === 'cerrado24' ? (
                                <span className="text-amber-600 font-medium">Cerrado 24hs</span>
                              ) : entry && entry.price ? (
                                <span className="text-gray-800 font-medium">${entry.price.toLocaleString('es-AR')}</span>
                              ) : (
                                <span className="text-gray-400">Precio x noche</span>
                              )}
                              {stripe && (
                                <span
                                  className="absolute bottom-0 left-0 right-0 h-1.5"
                                  style={{ background: stripe }}
                                  title={planNames}
                                />
                              )}
                            </td>
                          )
                        })}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              )}
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Panel de edición: rango de fechas + días obviados + disponibilidad/precio/planes.
          Sin fondo oscuro y con pointer-events acotados al drawer: la grilla queda usable
          mientras el panel está abierto, que es lo que permite el Shift + click para el rango. */}
      {panel && (
        <div className="fixed inset-0 z-20 flex justify-end pointer-events-none">
          <div className="pointer-events-auto relative w-full max-w-md bg-white h-full shadow-2xl border-l border-gray-200 overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <button onClick={closePanel} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
              <span className="text-sm font-medium text-gray-700 truncate">{panel.property.name}</span>
            </div>

            <div className="space-y-6">
              {/* Rango de fechas */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">Rango de fechas</h4>
                <p className="text-xs text-gray-500 mb-2">
                  <kbd className="px-1.5 py-0.5 rounded border border-gray-300 bg-gray-50 font-sans text-gray-700">Shift</kbd>
                  {' '}+ click en el calendario para extender el rango.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Desde</label>
                    <input
                      type="date"
                      value={panel.from}
                      onChange={(e) => setPanel(prev => prev && ({ ...prev, from: e.target.value }))}
                      className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Hasta</label>
                    <input
                      type="date"
                      value={panel.to}
                      onChange={(e) => setPanel(prev => prev && ({ ...prev, to: e.target.value }))}
                      className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm text-black"
                    />
                  </div>
                </div>
              </div>

              {/* Días obviados: un botón por día de la semana */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">Obviar días</h4>
                <p className="text-xs text-gray-500 mb-2">
                  Tocá un día para saltearlo. Ej: al obviar Vie, todos los viernes del rango quedan sin cambios.
                </p>
                <div className="flex flex-wrap gap-2">
                  {WEEKDAY_LABELS.map((label, i) => {
                    const skipped = skipWeekdays[i]
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => toggleSkipWeekday(i)}
                        aria-pressed={skipped}
                        className={`px-3 py-1.5 rounded-md border text-sm font-medium transition-colors ${
                          skipped
                            ? 'bg-gray-100 border-gray-200 text-gray-400 line-through'
                            : 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700'
                        }`}
                        title={skipped ? `${label} obviado — tocá para incluirlo` : `Tocá para obviar los ${label}`}
                      >
                        {label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Fechas resultantes */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Fechas a modificar ({panelDates.length})
                </h4>
                {panelDates.length === 0 ? (
                  <p className="text-sm text-red-600">
                    No queda ninguna fecha seleccionada — revisá el rango o los días obviados.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {panelDates.map(key => (
                      <span key={key} className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full pl-3 pr-1.5 py-1">
                        {formatDateKey(key)}
                        <button
                          type="button"
                          onClick={() => excludeDate(key)}
                          className="rounded-full hover:bg-indigo-200 p-0.5"
                          title="Quitar fecha"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Disponibilidad: abrir / cerrar / cerrar por 24hs */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Disponibilidad</h4>
                <div className="grid grid-cols-3 gap-2">
                  {AVAILABILITY_OPTIONS.map(opt => {
                    const active = pStatus === opt.id
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPStatus(opt.id)}
                        aria-pressed={active}
                        className={`px-2 py-2 rounded-md border text-sm font-medium transition-colors ${
                          active
                            ? opt.id === 'abierto'
                              ? 'bg-green-600 border-green-600 text-white'
                              : 'bg-red-600 border-red-600 text-white'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {opt.name}
                      </button>
                    )
                  })}
                </div>
                {pStatus === 'cerrado24' && (
                  <p className="mt-2 text-xs text-gray-500">
                    Se reabre automáticamente 24hs después de guardar.
                  </p>
                )}
              </div>

              {/* Precio por noche */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">Precio por noche</label>
                <input
                  type="number"
                  min="0"
                  value={pPrice}
                  onChange={(e) => setPPrice(e.target.value)}
                  disabled={pStatus === 'cerrado'}
                  className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm text-black disabled:bg-gray-100"
                  placeholder="Precio por noche"
                />
              </div>

              {/* Planes de Tarifa (se puede aplicar más de uno) */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Planes de Tarifa {pPlans.length > 0 && <span className="text-indigo-600">({pPlans.length})</span>}
                </label>
                <p className="text-xs text-gray-500 mb-2">Podés aplicar más de un plan a la vez.</p>
                {plans.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No hay planes creados. <Link href="/rates/plans" className="text-indigo-600 underline">Crear planes</Link>.
                  </p>
                ) : (
                  <div className="space-y-2 border border-gray-200 rounded-md p-3 max-h-40 overflow-y-auto">
                    {plans.map(pl => (
                      <label key={pl.id} className="flex items-center cursor-pointer">
                        <input type="checkbox" checked={pPlans.includes(pl.id)} onChange={() => togglePanelPlan(pl.id)} className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        <span className="ml-2 text-sm text-gray-700">{pl.name}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={savePanel}
                disabled={panelDates.length === 0}
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
