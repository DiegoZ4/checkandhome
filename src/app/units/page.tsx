'use client'

import { useState, useEffect } from 'react'
import { Building2, Plus, MapPin, DollarSign, Users, Eye, Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'

interface Unit {
  id: number
  name: string
  address: string
  pricePerDay: number
  maxGuests: number
  bedrooms: number
  bathrooms: number
  amenities: Array<{ name: string, logo: string }>
  photos: string[]
  description: string
}

export default function UnitsPage() {
  const [units, setUnits] = useState<Unit[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUnits = () => {
      try {
        const storedUnits = JSON.parse(localStorage.getItem('checkAndHomeUnits') || '[]')
        setUnits(storedUnits)
      } catch (error) {
        console.error('Error loading units:', error)
        setUnits([])
      } finally {
        setLoading(false)
      }
    }

    loadUnits()
  }, [])

  const deleteUnit = (unitId: number) => {
    if (confirm('¿Estás seguro de que deseas eliminar esta propiedad?')) {
      const updatedUnits = units.filter(unit => unit.id !== unitId)
      setUnits(updatedUnits)
      localStorage.setItem('checkAndHomeUnits', JSON.stringify(updatedUnits))
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Building2 className="h-12 w-12 text-indigo-600 mx-auto animate-pulse" />
          <p className="mt-2 text-gray-600">Cargando propiedades...</p>
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
              <Building2 className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Check and Home - Propiedades</h1>
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

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="md:flex md:items-center md:justify-between mb-6">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Tus Propiedades
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Link
              href="/units/new"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Agregar Propiedad
            </Link>
          </div>
        </div>

        {/* Properties Grid */}
        {units.length === 0 ? (
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center py-12">
                <Building2 className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No hay propiedades</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Comienza agregando tu primera propiedad de alquiler.
                </p>
                <div className="mt-6">
                  <Link
                    href="/units/new"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar Propiedad
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {units.map((unit) => (
              <div key={unit.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
                {/* Imagen */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {unit.photos && unit.photos[0] ? (
                    <img 
                      src={unit.photos[0]} 
                      alt={unit.name} 
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Tm4gU2luIEltYWdlbjwvdGV4dD48L3N2Zz4='
                      }}
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                      <Building2 className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                </div>
                
                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 truncate">{unit.name}</h3>
                  
                  <p className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{unit.address}</span>
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <p className="flex items-center text-sm font-medium text-gray-900">
                      <DollarSign className="h-4 w-4 mr-1" />
                      ${unit.pricePerDay} / noche
                    </p>
                    
                    <p className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      Máx. {unit.maxGuests}
                    </p>
                  </div>
                  
                  {/* Detalles */}
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                    <span>{unit.bedrooms} dormitorio{unit.bedrooms !== 1 ? 's' : ''}</span>
                    <span>{unit.bathrooms} baño{unit.bathrooms !== 1 ? 's' : ''}</span>
                  </div>
                  
                  {/* Amenities */}
                  {unit.amenities && unit.amenities.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {unit.amenities.slice(0, 3).map((amenity, index) => (
                          <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center">
                            <span className="mr-1">{amenity.logo}</span>
                            {amenity.name}
                          </span>
                        ))}
                        {unit.amenities.length > 3 && (
                          <span className="text-xs text-gray-500">+{unit.amenities.length - 3} más</span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Acciones */}
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="flex space-x-2">
                      <button 
                        className="text-indigo-600 hover:text-indigo-900 text-sm font-medium flex items-center"
                        onClick={() => alert('Ver detalles - Próximamente')}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Ver
                      </button>
                      <button 
                        className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center"
                        onClick={() => alert('Editar - Próximamente')}
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Editar
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => deleteUnit(unit.id)}
                      className="text-red-600 hover:text-red-900 text-sm font-medium flex items-center"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sample Property Cards (commented for future use) */}
        {/*
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img src="/placeholder-property.jpg" alt="Property" className="w-full h-48 object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Cozy Downtown Apartment</h3>
              <p className="flex items-center text-sm text-gray-500 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                123 Main St, Downtown
              </p>
              <p className="flex items-center text-sm text-gray-900">
                <DollarSign className="h-4 w-4 mr-1" />
                $85 / night
              </p>
              <div className="mt-4 flex space-x-3">
                <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">
                  Edit
                </button>
                <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                  View Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
        */}
      </main>
    </div>
  )
}