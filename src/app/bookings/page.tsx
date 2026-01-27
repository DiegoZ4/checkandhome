'use client'

import { useState, useEffect } from 'react'
import { Calendar, Plus, Filter, Users, MapPin, DollarSign, Clock, Eye, Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'

interface Booking {
  id: number
  unitName: string
  unitAddress: string
  checkInDate: string
  checkOutDate: string
  guests: number
  totalPrice: number
  status: string
  source: string
  guest: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  createdAt: string
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    const loadBookings = () => {
      try {
        const storedBookings = JSON.parse(localStorage.getItem('checkAndHomeBookings') || '[]')
        setBookings(storedBookings)
      } catch (error) {
        console.error('Error loading bookings:', error)
        setBookings([])
      } finally {
        setLoading(false)
      }
    }

    loadBookings()
  }, [])

  const deleteBooking = (bookingId: number) => {
    if (confirm('¿Estás seguro de que deseas eliminar esta reserva?')) {
      const updatedBookings = bookings.filter(booking => booking.id !== bookingId)
      setBookings(updatedBookings)
      localStorage.setItem('checkAndHomeBookings', JSON.stringify(updatedBookings))
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CONFIRMED': return 'bg-green-100 text-green-800'
      case 'PENDING': return 'bg-yellow-100 text-yellow-800'
      case 'CANCELLED': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'CONFIRMED': return 'Confirmada'
      case 'PENDING': return 'Pendiente'
      case 'CANCELLED': return 'Cancelada'
      default: return status
    }
  }

  const getSourceText = (source: string) => {
    switch (source) {
      case 'DIRECT': return 'Directo'
      case 'AIRBNB': return 'Airbnb'
      case 'BOOKING': return 'Booking.com'
      case 'OTHER': return 'Otro'
      default: return source
    }
  }

  const filteredBookings = bookings.filter(booking => {
    if (activeTab === 'all') return true
    if (activeTab === 'confirmed') return booking.status === 'CONFIRMED'
    if (activeTab === 'pending') return booking.status === 'PENDING'
    if (activeTab === 'completed') {
      const checkOutDate = new Date(booking.checkOutDate)
      return checkOutDate < new Date() && booking.status === 'CONFIRMED'
    }
    return true
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Check and Home - Reservas</h1>
            </div>
            <nav className="flex space-x-8">
              <Link href="/" className="text-gray-500 hover:text-gray-700">Inicio</Link>
              <Link href="/dashboard" className="text-gray-500 hover:text-gray-700">Panel</Link>
              <Link href="/units" className="text-gray-500 hover:text-gray-700">Propiedades</Link>
              <Link href="/bookings" className="text-indigo-600 font-medium">Reservas</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="md:flex md:items-center md:justify-between mb-6">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Todas las Reservas
            </h2>
          </div>
          <div className="mt-4 flex space-x-3 md:mt-0 md:ml-4">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filtrar
            </button>
            <Link
              href="/bookings/new"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Nueva Reserva
            </Link>
          </div>
        </div>

        {/* Status Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'all'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Todas las Reservas ({bookings.length})
            </button>
            <button
              onClick={() => setActiveTab('confirmed')}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'confirmed'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Confirmadas ({bookings.filter(b => b.status === 'CONFIRMED').length})
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'pending'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Pendientes ({bookings.filter(b => b.status === 'PENDING').length})
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'completed'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Completadas
            </button>
          </nav>
        </div>

        {/* Bookings List */}
        {filteredBookings.length === 0 ? (
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center py-12">
                <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No hay reservas</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Comienza agregando propiedades y recibiendo tus primeras reservaciones.
                </p>
                <div className="mt-6 space-x-3">
                  <Link
                    href="/units/new"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Crear Propiedad
                  </Link>
                  <Link
                    href="/bookings/new"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Crear Reserva
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-4">
                {filteredBookings.map((booking) => (
                  <div key={booking.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-medium text-gray-900">{booking.unitName}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                            {getStatusText(booking.status)}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div className="space-y-2">
                            <p className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                              {booking.unitAddress}
                            </p>
                            <p className="flex items-center">
                              <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                              {booking.guest.firstName} {booking.guest.lastName}
                            </p>
                            <p className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                              {formatDate(booking.checkInDate)} - {formatDate(booking.checkOutDate)}
                            </p>
                          </div>
                          
                          <div className="space-y-2">
                            <p className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-2 flex-shrink-0" />
                              ${booking.totalPrice} USD
                            </p>
                            <p className="flex items-center">
                              <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                              {booking.guests} huésped{booking.guests !== 1 ? 'es' : ''}
                            </p>
                            <p className="text-xs text-gray-500">
                              Canal: {getSourceText(booking.source)} | ID: #{booking.id}
                            </p>
                          </div>
                        </div>
                        
                        {/* Acciones */}
                        <div className="flex justify-end space-x-3 mt-4 pt-3 border-t border-gray-200">
                          <button 
                            className="text-indigo-600 hover:text-indigo-900 text-sm font-medium flex items-center"
                            onClick={() => alert(`Ver detalles de reserva #${booking.id} - Próximamente`)}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            Ver Detalles
                          </button>
                          <button 
                            className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center"
                            onClick={() => alert(`Editar reserva #${booking.id} - Próximamente`)}
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Editar
                          </button>
                          <button 
                            onClick={() => deleteBooking(booking.id)}
                            className="text-red-600 hover:text-red-900 text-sm font-medium flex items-center"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}