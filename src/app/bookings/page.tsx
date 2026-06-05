'use client'

import { useState, useEffect } from 'react'
import { Calendar, Plus, Search, Eye, Edit, Trash2, SlidersHorizontal, Users, Minus, Check, X } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import {
  loadReservations,
  saveReservations,
  Reservation,
  getStatusName,
  getStatusColor,
  getChannelName,
  getCurrencyName,
} from '@/lib/reservations'

export default function BookingsPage() {
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [loading, setLoading] = useState(true)

  // Buscador avanzado
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [showPax, setShowPax] = useState(false)
  const [fProperty, setFProperty] = useState('')
  const [fCheckIn, setFCheckIn] = useState('')
  const [fCheckOut, setFCheckOut] = useState('')
  const [fMayores, setFMayores] = useState(0)
  const [fMenores, setFMenores] = useState(0)
  const [fHabitaciones, setFHabitaciones] = useState(0)
  const [fMascotas, setFMascotas] = useState(false)
  const [fCochera, setFCochera] = useState(false)
  const [applied, setApplied] = useState<null | {
    property: string; checkIn: string; checkOut: string; pax: number; mascotas: boolean; cochera: boolean
  }>(null)

  useEffect(() => {
    setReservations(loadReservations())
    setLoading(false)
  }, [])

  const deleteReservation = (id: number) => {
    if (confirm('¿Estás seguro de que deseas eliminar esta reserva?')) {
      const updated = reservations.filter(r => r.id !== id)
      setReservations(updated)
      saveReservations(updated)
    }
  }

  const formatDate = (dateString: string) =>
    dateString ? new Date(dateString).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '-'

  const money = (value: number) => (value ? value.toLocaleString('es-AR') : '0')

  const runSearch = () => {
    setApplied({
      property: fProperty.trim().toLowerCase(),
      checkIn: fCheckIn,
      checkOut: fCheckOut,
      pax: fMayores + fMenores,
      mascotas: fMascotas,
      cochera: fCochera,
    })
    setShowPax(false)
  }

  const clearSearch = () => {
    setFProperty(''); setFCheckIn(''); setFCheckOut('')
    setFMayores(0); setFMenores(0); setFHabitaciones(0)
    setFMascotas(false); setFCochera(false)
    setApplied(null)
  }

  const filtered = reservations.filter(r => {
    if (!applied) return true
    if (applied.property && !r.propertyName.toLowerCase().includes(applied.property)) return false
    if (applied.checkIn && r.checkInDate < applied.checkIn) return false
    if (applied.checkOut && r.checkOutDate > applied.checkOut) return false
    // El número de pax debe ser igual o mayor que la búsqueda
    if (applied.pax > 0 && r.guests < applied.pax) return false
    if (applied.mascotas && !r.mascotasEnabled) return false
    if (applied.cochera && !r.cocheraEnabled) return false
    return true
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Calendar className="h-12 w-12 text-indigo-600 mx-auto animate-pulse" />
          <p className="mt-2 text-gray-600">Cargando reservas...</p>
        </div>
      </div>
    )
  }

  const Counter = ({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) => (
    <div className="flex items-center justify-between border border-gray-200 rounded-md px-3 py-2">
      <span className="text-sm text-gray-700">{label}</span>
      <div className="flex items-center space-x-2">
        <button type="button" onClick={() => onChange(Math.max(0, value - 1))} className="h-6 w-6 inline-flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
          <Minus className="h-3 w-3" />
        </button>
        <span className="w-6 text-center text-sm">{value}</span>
        <button type="button" onClick={() => onChange(value + 1)} className="h-6 w-6 inline-flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
          <Plus className="h-3 w-3" />
        </button>
      </div>
    </div>
  )

  const Toggle = ({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) => (
    <div className="flex items-center justify-between border border-gray-200 rounded-md px-3 py-2">
      <span className="text-sm text-gray-700">{label}</span>
      <button
        type="button"
        onClick={() => onChange(!value)}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors ${value ? 'bg-indigo-600' : 'bg-gray-200'}`}
      >
        <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${value ? 'translate-x-5' : 'translate-x-0'}`} />
      </button>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Reservas - Check and Point" />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Reservas</h1>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              href="/bookings/new"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Agregar Reserva
            </Link>
          </div>
        </div>

        {/* Buscador */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Buscador</label>
          <div className="flex items-center space-x-2">
            <div className="relative max-w-md flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={fProperty}
                onChange={(e) => setFProperty(e.target.value)}
                onFocus={() => setShowAdvanced(true)}
                className="block w-full pl-10 rounded-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
                placeholder="Buscar reserva..."
              />
            </div>
            <button
              onClick={() => setShowAdvanced(s => !s)}
              className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100"
              title="Búsqueda avanzada"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </button>
          </div>

          {/* Buscador avanzado */}
          {showAdvanced && (
            <div className="mt-3 inline-flex flex-wrap items-end gap-3 bg-white border border-gray-200 rounded-lg p-3 shadow-sm relative">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Nombre de la propiedad</label>
                <input type="text" value={fProperty} onChange={(e) => setFProperty(e.target.value)} className="rounded-md border-gray-300 shadow-sm sm:text-sm text-black" placeholder="Propiedad" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Check - in</label>
                <input type="date" value={fCheckIn} onChange={(e) => setFCheckIn(e.target.value)} className="rounded-md border-gray-300 shadow-sm sm:text-sm text-black" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Check - out</label>
                <input type="date" value={fCheckOut} onChange={(e) => setFCheckOut(e.target.value)} className="rounded-md border-gray-300 shadow-sm sm:text-sm text-black" />
              </div>
              <div className="relative">
                <label className="block text-xs text-gray-500 mb-1">PAX</label>
                <button
                  type="button"
                  onClick={() => setShowPax(s => !s)}
                  className="inline-flex items-center rounded-md border border-gray-300 px-3 py-2 sm:text-sm text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Users className="h-4 w-4 mr-2 text-gray-400" />
                  {fMayores + fMenores > 0 ? `${fMayores + fMenores} pax` : 'PAX'}
                </button>

                {/* Popover PAX (no obligatorio) */}
                {showPax && (
                  <div className="absolute z-10 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-3 space-y-2">
                    <Counter label="Mayores" value={fMayores} onChange={setFMayores} />
                    <Counter label="Menores" value={fMenores} onChange={setFMenores} />
                    <Counter label="Habitaciones" value={fHabitaciones} onChange={setFHabitaciones} />
                    <Toggle label="Mascotas" value={fMascotas} onChange={setFMascotas} />
                    <Toggle label="Cochera" value={fCochera} onChange={setFCochera} />
                    <p className="text-[11px] text-gray-400 pt-1">No obligatorio</p>
                  </div>
                )}
              </div>
              <button onClick={runSearch} className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                <Check className="h-4 w-4 mr-1" />
                Buscar
              </button>
              {applied && (
                <button onClick={clearSearch} className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100">
                  <X className="h-4 w-4 mr-1" />
                  Limpiar
                </button>
              )}
            </div>
          )}
        </div>

        {/* Tabla */}
        {filtered.length === 0 ? (
          <div className="bg-white shadow rounded-lg">
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                {reservations.length === 0 ? 'No hay reservas registradas' : 'No se encontraron resultados'}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {reservations.length === 0 ? 'Comienza agregando una nueva reserva.' : 'Prueba con otros criterios de búsqueda.'}
              </p>
              {reservations.length === 0 && (
                <div className="mt-6">
                  <Link href="/bookings/new" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar Reserva
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    {['ID', 'Estado', 'Propiedad', 'Check-in', 'Check-out', 'Pax', 'Nombre', 'Apellido', 'Teléfono', 'DNI', 'Archivo', 'Moneda', 'Canal', 'Noches', 'Valor noches', 'Mascotas', 'Cochera', 'Cargos', 'Descuentos', 'Total', ''].map((h) => (
                      <th key={h} className="px-3 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filtered.map((r) => (
                    <tr key={r.id} className="hover:bg-gray-50 whitespace-nowrap">
                      <td className="px-3 py-3 text-gray-500">{r.id}</td>
                      <td className="px-3 py-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(r.status)}`}>{getStatusName(r.status)}</span>
                      </td>
                      <td className="px-3 py-3 font-medium text-gray-900">{r.propertyName}</td>
                      <td className="px-3 py-3 text-gray-700">{formatDate(r.checkInDate)}</td>
                      <td className="px-3 py-3 text-gray-700">{formatDate(r.checkOutDate)}</td>
                      <td className="px-3 py-3 text-gray-700">{r.guests}</td>
                      <td className="px-3 py-3 text-gray-700">{r.firstName}</td>
                      <td className="px-3 py-3 text-gray-700">{r.lastName}</td>
                      <td className="px-3 py-3 text-gray-700">{r.phone}</td>
                      <td className="px-3 py-3 text-gray-700">{r.dni}</td>
                      <td className="px-3 py-3">
                        <span className={`text-xs font-medium ${r.hasAttachment ? 'text-green-600' : 'text-red-600'}`}>{r.hasAttachment ? 'Sí' : 'No'}</span>
                      </td>
                      <td className="px-3 py-3 text-gray-700">{getCurrencyName(r.currency)}</td>
                      <td className="px-3 py-3 text-gray-700">{getChannelName(r.channel)}</td>
                      <td className="px-3 py-3 text-gray-700">{r.nights}</td>
                      <td className="px-3 py-3 text-gray-700">${money(r.valorNoches)}</td>
                      <td className="px-3 py-3 text-gray-700">{r.mascotasEnabled ? `$${money(r.mascotasValue)}` : '-'}</td>
                      <td className="px-3 py-3 text-gray-700">{r.cocheraEnabled ? `$${money(r.cocheraValue)}` : '-'}</td>
                      <td className="px-3 py-3 text-gray-700">${money(r.cargos)}</td>
                      <td className="px-3 py-3 text-gray-700">{r.descuento ? `${r.descuento}%` : '-'}</td>
                      <td className="px-3 py-3 font-medium text-gray-900">${money(r.totalBruto)}</td>
                      <td className="px-3 py-3 text-right">
                        <div className="flex justify-end space-x-2">
                          <button className="text-indigo-600 hover:text-indigo-900" onClick={() => alert(`Ver reserva #${r.id} - Próximamente`)} title="Ver"><Eye className="h-4 w-4" /></button>
                          <button className="text-gray-600 hover:text-gray-900" onClick={() => alert(`Editar reserva #${r.id} - Próximamente`)} title="Editar"><Edit className="h-4 w-4" /></button>
                          <button className="text-red-600 hover:text-red-900" onClick={() => deleteReservation(r.id)} title="Eliminar"><Trash2 className="h-4 w-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
