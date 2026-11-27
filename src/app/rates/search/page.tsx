'use client'

import { useMemo, useState } from 'react'
import { ArrowLeft, Search, SlidersHorizontal, X } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ExchangeRatePanel from '@/components/ExchangeRatePanel'
import SearchBar, { ALL_ZONES, EMPTY_SEARCH, guestsLabel, petsLabel, type SearchValues } from '@/components/availability/SearchBar'
import MoreFiltersModal from '@/components/availability/MoreFiltersModal'
import ResultCard from '@/components/availability/ResultCard'
import QuoteDetail from '@/components/availability/QuoteDetail'
import UnitToggle from '@/components/availability/UnitToggle'
import AvailabilityCalendar, { startFor, type CalendarSpan } from '@/components/availability/AvailabilityCalendar'
import { AMENITIES, loadProperties } from '@/lib/properties'
import { loadAvailabilityData } from '@/lib/exchangeRate'
import { stayNights, type Unit } from '@/lib/availability'
import { NO_FILTERS, runSearch, zonesOf, type ExtraFilters, type SearchResult } from '@/lib/availabilitySearch'

const amenityName = (id: string) => AMENITIES.find(a => a.id === id)?.name || id

type SortKey = 'totalAsc' | 'totalDesc' | 'nightAsc'
const SORTS: { id: SortKey; name: string }[] = [
  { id: 'totalAsc', name: 'Menor precio total' },
  { id: 'totalDesc', name: 'Mayor precio total' },
  { id: 'nightAsc', name: 'Menor promedio por noche' },
]

/** Ordena por el cálculo de la tarjeta 02; los que no se pueden cotizar van al final. */
function sortResults(list: SearchResult[], sort: SortKey): SearchResult[] {
  const priced = (r: SearchResult) => r.quote.missingRates.length === 0 && !r.quote.needsRate
  return [...list].sort((a, b) => {
    if (priced(a) !== priced(b)) return priced(a) ? -1 : 1
    if (sort === 'totalDesc') return b.quote.stayTotal - a.quote.stayTotal
    if (sort === 'nightAsc') return a.quote.averagePerNight - b.quote.averagePerNight
    return a.quote.stayTotal - b.quote.stayTotal
  })
}

/** Chip de un criterio activo; con onRemove muestra la ✕ para quitarlo. */
function Chip({ label, onRemove }: { label: string; onRemove?: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
      {label}
      {onRemove && (
        <button type="button" onClick={onRemove} aria-label={`Quitar ${label}`} className="text-indigo-400 hover:text-indigo-700">
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  )
}

/**
 * Buscador de disponibilidad (Tarifas y Disponibilidad → Buscador de disponibilidad).
 * Acceso para cualquiera que consulte disponibilidad, incluido el usuario Reservas.
 * Búsqueda (barra), filtros (Más filtros), orden y moneda se guardan acá, en la página,
 * para que todas las vistas (Tarjetas, Calendario, Detalle, cotización) usen los mismos
 * criterios y el mismo cálculo: runSearch() / quoteStay(). Al volver del detalle se
 * conserva todo.
 */
export default function AvailabilitySearchPage() {
  // CloudSyncGate no renderiza en el servidor: se puede leer localStorage al iniciar.
  const [properties, setProperties] = useState(() => loadProperties())
  const zones = useMemo(() => zonesOf(properties), [properties])
  const [base, setBase] = useState(() => loadAvailabilityData(null))
  const [usdArs, setUsdArs] = useState<number | null>(null)

  const [bar, setBar] = useState<SearchValues>(EMPTY_SEARCH) // lo que muestra la barra
  const [applied, setApplied] = useState<SearchValues | null>(null) // última búsqueda ejecutada
  const [filters, setFilters] = useState<ExtraFilters>(NO_FILTERS) // Más filtros aplicados
  const [showFilters, setShowFilters] = useState(false)
  const [sort, setSort] = useState<SortKey>('totalAsc')
  const [unit, setUnit] = useState<Unit>('USD') // moneda en que se muestran los importes
  const [detailId, setDetailId] = useState<number | null>(null) // departamento en "Ver detalle"
  // Vista y período visible del calendario (se conservan al volver del detalle).
  const [view, setView] = useState<'cards' | 'calendar'>('cards')
  const [span, setSpan] = useState<CalendarSpan>(14)
  const [calStart, setCalStart] = useState<string | null>(null)

  const data = useMemo(() => ({ ...base, usdArs }), [base, usdArs])
  // Tarjetas: sólo libres toda la estadía. Calendario: también parciales (mismos filtros).
  const results = useMemo(
    () => (applied ? sortResults(runSearch(properties, applied, data, filters), sort) : []),
    [applied, properties, data, filters, sort],
  )
  const calendarResults = useMemo(
    () => (applied ? runSearch(properties, applied, data, filters, { partial: true }) : []),
    [applied, properties, data, filters],
  )

  const onSearch = (values: SearchValues) => {
    // Datos frescos (reservas/tarifas que pudieron cambiar desde que se abrió la página).
    setProperties(loadProperties())
    setBase(loadAvailabilityData(null))
    setApplied(values)
    setCalStart(null) // el calendario vuelve a mostrar la nueva estadía
  }

  const setZone = (zone: string) => {
    setBar(b => ({ ...b, zone }))
    setApplied(a => (a ? { ...a, zone } : a))
  }

  const applyFilters = (next: ExtraFilters, zone: string) => {
    setFilters(next)
    setZone(zone)
    setShowFilters(false)
  }

  // Limpiar: quita los filtros adicionales (y la zona); conserva fechas, huéspedes y mascotas.
  const clearFilters = () => {
    setFilters(f => ({ ...NO_FILTERS, currency: f.currency }))
    setZone(ALL_ZONES)
    setShowFilters(false)
  }

  const openDetail = (id: number) => {
    setDetailId(id)
    window.scrollTo({ top: 0 })
  }

  const patchFilters = (patch: Partial<ExtraFilters>) => setFilters(f => ({ ...f, ...patch }))
  // Los chips de presupuesto se muestran en la moneda en que se cargaron los límites.
  const budget = (v: string) => `${filters.currency === 'ARS' ? '$' : 'USD'} ${Number(v).toLocaleString('es-AR')}`
  const nights = applied ? stayNights(applied.checkIn, applied.checkOut).length : 0
  const wantsGarage = filters.amenities.includes('cochera')
  const detail = detailId !== null ? properties.find(p => p.id === detailId) : undefined

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Buscar disponibilidad - Check and Point" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {applied && detail ? (
          <QuoteDetail
            property={detail}
            request={{ ...applied, garage: false }}
            data={data}
            unit={unit}
            onUnit={setUnit}
            onBack={() => setDetailId(null)}
          />
        ) : (
          <>
            <Link href="/rates" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" /> Volver a Tarifas y Disponibilidad
            </Link>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center">
                <Search className="h-8 w-8 text-indigo-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Buscar disponibilidad</h1>
              </div>
              <UnitToggle value={unit} onChange={setUnit} disabledArs={!usdArs} />
            </div>

            <SearchBar value={bar} zones={zones} onChange={setBar} onSearch={onSearch} />

            {/* Más filtros + criterios activos */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button type="button" onClick={() => setShowFilters(true)}
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <SlidersHorizontal className="h-4 w-4" /> Más filtros
              </button>
              {applied && (
                <>
                  <Chip label={`${nights} noche${nights === 1 ? '' : 's'}`} />
                  <Chip label={guestsLabel(applied)} />
                  {applied.pets > 0 && <Chip label={petsLabel(applied.pets)} />}
                </>
              )}
              {(applied ?? bar).zone !== ALL_ZONES && <Chip label={(applied ?? bar).zone} onRemove={() => setZone(ALL_ZONES)} />}
              {filters.totalMin && <Chip label={`Total desde ${budget(filters.totalMin)}`} onRemove={() => patchFilters({ totalMin: '' })} />}
              {filters.totalMax && <Chip label={`Total hasta ${budget(filters.totalMax)}`} onRemove={() => patchFilters({ totalMax: '' })} />}
              {filters.nightMin && <Chip label={`Noche desde ${budget(filters.nightMin)}`} onRemove={() => patchFilters({ nightMin: '' })} />}
              {filters.nightMax && <Chip label={`Noche hasta ${budget(filters.nightMax)}`} onRemove={() => patchFilters({ nightMax: '' })} />}
              {filters.minBedrooms && <Chip label={`Habitaciones mín. ${filters.minBedrooms}`} onRemove={() => patchFilters({ minBedrooms: '' })} />}
              {filters.maxSeaDistance && <Chip label={`Hasta ${filters.maxSeaDistance} m del mar`} onRemove={() => patchFilters({ maxSeaDistance: '' })} />}
              {filters.amenities.map(a => (
                <Chip key={a} label={amenityName(a)} onRemove={() => patchFilters({ amenities: filters.amenities.filter(x => x !== a) })} />
              ))}
            </div>

            <div className="mt-3">
              <ExchangeRatePanel onRate={setUsdArs} />
            </div>

            {!applied ? (
              <div className="mt-6 bg-white shadow rounded-lg p-10 text-center">
                <Search className="h-12 w-12 text-gray-300 mx-auto" />
                <p className="mt-3 text-sm text-gray-500">Elegí las fechas y presioná Buscar para ver los alojamientos disponibles.</p>
              </div>
            ) : (
              <div className="mt-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {view === 'cards'
                        ? (results.length === 1 ? '1 alojamiento disponible' : `${results.length} alojamientos disponibles`)
                        : `${calendarResults.length} alojamiento${calendarResults.length === 1 ? '' : 's'} · ${results.length} libre${results.length === 1 ? '' : 's'} toda la estadía`}
                    </h2>
                    {view === 'cards' && results.length > 1 && (
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        Ordenar:
                        <select value={sort} onChange={e => setSort(e.target.value as SortKey)}
                          className="rounded-md border-gray-300 text-sm text-black focus:border-indigo-500 focus:ring-indigo-500">
                          {SORTS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                        </select>
                      </label>
                    )}
                  </div>
                  <div className="inline-flex overflow-hidden rounded-md border border-gray-300" role="group" aria-label="Vista de resultados">
                    {([['cards', 'Tarjetas'], ['calendar', 'Calendario']] as const).map(([v, label]) => (
                      <button key={v} type="button" onClick={() => setView(v)} aria-pressed={view === v}
                        className={`px-4 py-1.5 text-sm font-medium ${view === v ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {view === 'calendar' ? (
                  calendarResults.length === 0 ? (
                    <div className="bg-white shadow rounded-lg p-8 text-center text-sm text-gray-500">
                      No hay alojamientos que cumplan los requisitos de la búsqueda y los filtros seleccionados.
                    </div>
                  ) : (
                    <AvailabilityCalendar
                      results={calendarResults}
                      checkIn={applied.checkIn}
                      checkOut={applied.checkOut}
                      data={data}
                      unit={unit}
                      span={span}
                      start={calStart ?? startFor(applied.checkIn, span)}
                      onSpan={setSpan}
                      onStart={setCalStart}
                      onDetail={openDetail}
                    />
                  )
                ) : results.length === 0 ? (
                  <div className="bg-white shadow rounded-lg p-8 text-center text-sm text-gray-500">
                    No hay alojamientos disponibles para toda la estadía con los filtros seleccionados.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {results.map(({ property, quote }) => (
                      <ResultCard
                        key={property.id}
                        property={property}
                        quote={quote}
                        pets={applied.pets}
                        wantsGarage={wantsGarage}
                        unit={unit}
                        usdArs={usdArs}
                        onDetail={() => openDetail(property.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {showFilters && (
        <MoreFiltersModal
          filters={filters}
          zone={bar.zone}
          zones={zones}
          usdArs={usdArs}
          onApply={applyFilters}
          onClear={clearFilters}
          onClose={() => setShowFilters(false)}
        />
      )}
    </div>
  )
}
