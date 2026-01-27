'use client'

import { useState } from 'react'
import { Building2, MapPin, DollarSign, Camera, Plus, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Amenity {
  id: number
  name: string
  logo: string
}

const AVAILABLE_AMENITIES: Amenity[] = [
  { id: 1, name: 'WiFi', logo: '📶' },
  { id: 2, name: 'Aire Acondicionado', logo: '❄️' },
  { id: 3, name: 'Cocina', logo: '🍳' },
  { id: 4, name: 'Lavadora', logo: '🧺' },
  { id: 5, name: 'TV', logo: '📺' },
  { id: 6, name: 'Piscina', logo: '🏊' },
  { id: 7, name: 'Gimnasio', logo: '💪' },
  { id: 8, name: 'Estacionamiento', logo: '🚗' },
  { id: 9, name: 'Balcón', logo: '🏙️' },
  { id: 10, name: 'Mascotas Permitidas', logo: '🐕' }
]

export default function NewUnitPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    pricePerDay: '',
    currency: 'USD',
    description: '',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    checkInTime: '15:00',
    checkOutTime: '11:00'
  })
  
  const [selectedAmenities, setSelectedAmenities] = useState<number[]>([])
  const [photos, setPhotos] = useState<string[]>([])
  const [photoUrl, setPhotoUrl] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAmenityToggle = (amenityId: number) => {
    setSelectedAmenities(prev => 
      prev.includes(amenityId) 
        ? prev.filter(id => id !== amenityId)
        : [...prev, amenityId]
    )
  }

  const addPhoto = () => {
    if (photoUrl.trim() && !photos.includes(photoUrl.trim())) {
      setPhotos(prev => [...prev, photoUrl.trim()])
      setPhotoUrl('')
    }
  }

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Validaciones
      if (!formData.name.trim()) {
        setError('El nombre de la propiedad es obligatorio')
        return
      }
      
      if (!formData.address.trim()) {
        setError('La dirección es obligatoria')
        return
      }
      
      if (!formData.pricePerDay || parseFloat(formData.pricePerDay) <= 0) {
        setError('El precio por día debe ser mayor a 0')
        return
      }

      const selectedAmenityData = AVAILABLE_AMENITIES.filter(a => selectedAmenities.includes(a.id))

      const unitData = {
        ...formData,
        pricePerDay: parseFloat(formData.pricePerDay),
        amenities: selectedAmenityData,
        photos: photos,
        createdAt: new Date().toISOString()
      }

      // Simular guardado (aquí conectarías con tu API/base de datos)
      const existingUnits = JSON.parse(localStorage.getItem('checkAndHomeUnits') || '[]')
      const newUnit = {
        id: Date.now(),
        ...unitData
      }
      
      existingUnits.push(newUnit)
      localStorage.setItem('checkAndHomeUnits', JSON.stringify(existingUnits))

      // Mensaje de éxito y redirección
      alert('¡Propiedad creada exitosamente!')
      router.push('/units')
      
    } catch (error) {
      setError('Error al crear la propiedad. Inténtelo nuevamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Nueva Propiedad</h1>
            </div>
            <nav className="flex space-x-8">
              <Link href="/" className="text-gray-500 hover:text-gray-700">Inicio</Link>
              <Link href="/dashboard" className="text-gray-500 hover:text-gray-700">Panel</Link>
              <Link href="/units" className="text-indigo-600 font-medium">Propiedades</Link>
              <Link href="/bookings" className="text-gray-500 hover:text-gray-700">Reservas</Link>
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

            {/* Información Básica */}
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Información Básica</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre de la Propiedad *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Ej: Apartamento Céntrico Moderno"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Dirección Completa *
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Ej: Av. Corrientes 1234, CABA, Argentina"
                  />
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Descripción
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Describe tu propiedad, ubicación y características especiales..."
              />
            </div>

            {/* Detalles de la Propiedad */}
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Detalles de la Propiedad</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">
                    Dormitorios
                  </label>
                  <select
                    name="bedrooms"
                    id="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">
                    Baños
                  </label>
                  <select
                    name="bathrooms"
                    id="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="maxGuests" className="block text-sm font-medium text-gray-700">
                    Huéspedes Máx.
                  </label>
                  <select
                    name="maxGuests"
                    id="maxGuests"
                    value={formData.maxGuests}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="pricePerDay" className="block text-sm font-medium text-gray-700">
                    Precio por Día (USD) *
                  </label>
                  <input
                    type="number"
                    name="pricePerDay"
                    id="pricePerDay"
                    required
                    min="1"
                    step="0.01"
                    value={formData.pricePerDay}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="85.00"
                  />
                </div>
              </div>
            </div>

            {/* Horarios de Check-in/out */}
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Horarios</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="checkInTime" className="block text-sm font-medium text-gray-700">
                    Check-in
                  </label>
                  <input
                    type="time"
                    name="checkInTime"
                    id="checkInTime"
                    value={formData.checkInTime}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="checkOutTime" className="block text-sm font-medium text-gray-700">
                    Check-out
                  </label>
                  <input
                    type="time"
                    name="checkOutTime"
                    id="checkOutTime"
                    value={formData.checkOutTime}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Comodidades */}
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Comodidades</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {AVAILABLE_AMENITIES.map((amenity) => (
                  <button
                    key={amenity.id}
                    type="button"
                    onClick={() => handleAmenityToggle(amenity.id)}
                    className={`flex items-center p-3 rounded-lg border-2 transition-colors ${
                      selectedAmenities.includes(amenity.id)
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                        : 'border-gray-300 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg mr-2">{amenity.logo}</span>
                    <span className="text-sm font-medium">{amenity.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Fotos */}
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Fotos</h3>
              
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <input
                    type="url"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    placeholder="https://ejemplo.com/foto.jpg"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={addPhoto}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Agregar
                  </button>
                </div>
                
                {photos.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {photos.map((photo, index) => (
                      <div key={index} className="relative">
                        <img
                          src={photo}
                          alt={`Foto ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                          onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW4gbm8gZW5jb250cmFkYTwvdGV4dD48L3N2Zz4='
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Botones */}
            <div className="flex justify-end space-x-4 pt-6">
              <Link
                href="/units"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </Link>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Creando...' : 'Crear Propiedad'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}