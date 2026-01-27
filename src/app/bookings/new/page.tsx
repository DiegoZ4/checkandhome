'use client'

import { useState, useEffect } from 'react'
import { Calendar, Users, MapPin, DollarSign, Clock } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Unit {
  id: number
  name: string
  address: string
  pricePerDay: number
  maxGuests: number
  checkInTime: string
  checkOutTime: string
}

interface Guest {
  firstName: string
  lastName: string
  email: string
  phone: string
  documentType: string
  documentNumber: string
}

export default function NewBookingPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [units, setUnits] = useState<Unit[]>([])
  
  // Form state
  const [formData, setFormData] = useState({
    unitId: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
    totalPrice: 0,
    status: 'PENDING',
    source: 'DIRECT',
    notes: ''
  })

  const [guestData, setGuestData] = useState<Guest>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    documentType: 'DNI',
    documentNumber: ''
  })

  // Cargar unidades disponibles
  useEffect(() => {
    const storedUnits = JSON.parse(localStorage.getItem('checkAndHomeUnits') || '[]')
    setUnits(storedUnits)
  }, [])

  // Calcular precio total cuando cambian las fechas o unidad
  useEffect(() => {
    if (formData.unitId && formData.checkInDate && formData.checkOutDate) {
      const selectedUnit = units.find(unit => unit.id === parseInt(formData.unitId))
      if (selectedUnit) {
        const checkIn = new Date(formData.checkInDate)
        const checkOut = new Date(formData.checkOutDate)
        const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        
        const totalPrice = diffDays * selectedUnit.pricePerDay
        setFormData(prev => ({ ...prev, totalPrice }))
      }
    }
  }, [formData.unitId, formData.checkInDate, formData.checkOutDate, units])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    if (name.startsWith('guest.')) {
      const guestField = name.replace('guest.', '') as keyof Guest
      setGuestData(prev => ({
        ...prev,
        [guestField]: value
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: name === 'guests' || name === 'unitId' ? parseInt(value) || value : value
      }))
    }
  }

  const validateDates = () => {
    if (!formData.checkInDate || !formData.checkOutDate) {
      setError('Las fechas de check-in y check-out son obligatorias')
      return false
    }

    const checkIn = new Date(formData.checkInDate)
    const checkOut = new Date(formData.checkOutDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (checkIn < today) {
      setError('La fecha de check-in no puede ser anterior a hoy')
      return false
    }

    if (checkOut <= checkIn) {
      setError('La fecha de check-out debe ser posterior al check-in')
      return false
    }

    return true
  }

  const validateGuest = () => {
    if (!guestData.firstName.trim()) {
      setError('El nombre del huésped es obligatorio')
      return false
    }
    
    if (!guestData.lastName.trim()) {
      setError('El apellido del huésped es obligatorio')
      return false
    }
    
    if (!guestData.email.trim() || !/\S+@\S+\.\S+/.test(guestData.email)) {
      setError('Ingrese un email válido')
      return false
    }
    
    if (!guestData.phone.trim()) {
      setError('El teléfono es obligatorio')
      return false
    }
    
    if (!guestData.documentNumber.trim()) {
      setError('El número de documento es obligatorio')
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      // Validaciones
      if (!formData.unitId) {
        setError('Debe seleccionar una propiedad')
        return
      }

      if (!validateDates()) return
      if (!validateGuest()) return

      const selectedUnit = units.find(unit => unit.id === parseInt(formData.unitId.toString()))
      if (!selectedUnit) {
        setError('La propiedad seleccionada no es válida')
        return
      }

      if (formData.guests > selectedUnit.maxGuests) {
        setError(`La propiedad seleccionada permite máximo ${selectedUnit.maxGuests} huéspedes`)
        return
      }

      // Crear booking
      const bookingData = {
        id: Date.now(),
        ...formData,
        unitId: parseInt(formData.unitId.toString()),
        guest: guestData,
        unitName: selectedUnit.name,
        unitAddress: selectedUnit.address,
        checkInTime: selectedUnit.checkInTime,
        checkOutTime: selectedUnit.checkOutTime,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      // Guardar en localStorage (simular base de datos)
      const existingBookings = JSON.parse(localStorage.getItem('checkAndHomeBookings') || '[]')
      existingBookings.push(bookingData)
      localStorage.setItem('checkAndHomeBookings', JSON.stringify(existingBookings))

      setSuccess(`¡Reserva creada exitosamente! ID: ${bookingData.id}`)
      
      // Limpiar formulario después de 2 segundos y redirigir
      setTimeout(() => {
        router.push('/bookings')
      }, 2000)
      
    } catch (error) {
      setError('Error al crear la reserva. Inténtelo nuevamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const selectedUnit = units.find(unit => unit.id === parseInt(formData.unitId.toString()))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Nueva Reserva</h1>
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

      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md text-sm">
                {success}
              </div>
            )}

            {/* Selección de Propiedad */}
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Seleccionar Propiedad</h3>
              
              {units.length === 0 ? (
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Building2 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-500 mb-4">No hay propiedades disponibles</p>
                  <Link
                    href="/units/new"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Crear Primera Propiedad
                  </Link>
                </div>
              ) : (
                <div>
                  <label htmlFor="unitId" className="block text-sm font-medium text-gray-700 mb-2">
                    Propiedad *
                  </label>
                  <select
                    name="unitId"
                    id="unitId"
                    required
                    value={formData.unitId}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Seleccionar propiedad</option>
                    {units.map((unit) => (
                      <option key={unit.id} value={unit.id}>
                        {unit.name} - ${unit.pricePerDay}/día (Máx. {unit.maxGuests} huéspedes)
                      </option>
                    ))}
                  </select>
                  
                  {selectedUnit && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        {selectedUnit.address}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-gray-600 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Check-in: {selectedUnit.checkInTime} | Check-out: {selectedUnit.checkOutTime}
                        </span>
                        <span className="text-sm font-medium text-indigo-600 flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          ${selectedUnit.pricePerDay}/día
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {units.length > 0 && (
              <>
                {/* Fechas y Huéspedes */}
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Detalles de la Reserva</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">
                        Fecha Check-in *
                      </label>
                      <input
                        type="date"
                        name="checkInDate"
                        id="checkInDate"
                        required
                        value={formData.checkInDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">
                        Fecha Check-out *
                      </label>
                      <input
                        type="date"
                        name="checkOutDate"
                        id="checkOutDate"
                        required
                        value={formData.checkOutDate}
                        onChange={handleInputChange}
                        min={formData.checkInDate || new Date().toISOString().split('T')[0]}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                        Número de Huéspedes *
                      </label>
                      <select
                        name="guests"
                        id="guests"
                        required
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        {Array.from({ length: selectedUnit?.maxGuests || 10 }, (_, i) => i + 1).map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'huésped' : 'huéspedes'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {formData.totalPrice > 0 && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-900">Precio Total:</span>
                        <span className="text-2xl font-bold text-green-600">${formData.totalPrice} USD</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Información del Huésped */}
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Información del Huésped Principal</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="guest.firstName" className="block text-sm font-medium text-gray-700">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="guest.firstName"
                        id="guest.firstName"
                        required
                        value={guestData.firstName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Juan"
                      />
                    </div>

                    <div>
                      <label htmlFor="guest.lastName" className="block text-sm font-medium text-gray-700">
                        Apellido *
                      </label>
                      <input
                        type="text"
                        name="guest.lastName"
                        id="guest.lastName"
                        required
                        value={guestData.lastName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Pérez"
                      />
                    </div>

                    <div>
                      <label htmlFor="guest.email" className="block text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="guest.email"
                        id="guest.email"
                        required
                        value={guestData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="juan@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="guest.phone" className="block text-sm font-medium text-gray-700">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="guest.phone"
                        id="guest.phone"
                        required
                        value={guestData.phone}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="+54 11 1234-5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="guest.documentType" className="block text-sm font-medium text-gray-700">
                        Tipo de Documento
                      </label>
                      <select
                        name="guest.documentType"
                        id="guest.documentType"
                        value={guestData.documentType}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="DNI">DNI</option>
                        <option value="PASAPORTE">Pasaporte</option>
                        <option value="CEDULA">Cédula</option>
                        <option value="OTRO">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="guest.documentNumber" className="block text-sm font-medium text-gray-700">
                        Número de Documento *
                      </label>
                      <input
                        type="text"
                        name="guest.documentNumber"
                        id="guest.documentNumber"
                        required
                        value={guestData.documentNumber}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="12345678"
                      />
                    </div>
                  </div>
                </div>

                {/* Configuración Adicional */}
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Configuración Adicional</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                        Estado de la Reserva
                      </label>
                      <select
                        name="status"
                        id="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="PENDING">Pendiente</option>
                        <option value="CONFIRMED">Confirmada</option>
                        <option value="CANCELLED">Cancelada</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="source" className="block text-sm font-medium text-gray-700">
                        Canal de Reserva
                      </label>
                      <select
                        name="source"
                        id="source"
                        value={formData.source}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="DIRECT">Directo</option>
                        <option value="AIRBNB">Airbnb</option>
                        <option value="BOOKING">Booking.com</option>
                        <option value="OTHER">Otro</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Notas */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                    Notas Adicionales
                  </label>
                  <textarea
                    name="notes"
                    id="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Solicitudes especiales, instrucciones de llegada, etc..."
                  />
                </div>

                {/* Botones */}
                <div className="flex justify-end space-x-4 pt-6">
                  <Link
                    href="/bookings"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancelar
                  </Link>
                  <button
                    type="submit"
                    disabled={isLoading || units.length === 0}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Creando...' : 'Crear Reserva'}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </main>
    </div>
  )
}