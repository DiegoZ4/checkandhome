'use client'

import { Suspense, useState, useEffect } from 'react'
import { Trash2, RotateCcw, Search, ArrowLeft, Plus } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { loadProperties, saveProperties, Property, PropertyCategory } from '@/lib/properties'

function TrashView() {
  const searchParams = useSearchParams()
  const category = (searchParams.get('category') as PropertyCategory) || 'alojamiento'

  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setProperties(loadProperties())
    setLoading(false)
  }, [])

  // Reestablecer: eliminado = false
  const restore = (id: number) => {
    const updated = properties.map(p =>
      p.id === id ? { ...p, eliminado: false, deletedAt: null } : p
    )
    setProperties(updated)
    saveProperties(updated)
  }

  // Eliminar definitivamente
  const deleteForever = (id: number) => {
    if (confirm('¿Eliminar definitivamente esta propiedad? Esta acción no se puede deshacer.')) {
      const updated = properties.filter(p => p.id !== id)
      setProperties(updated)
      saveProperties(updated)
    }
  }

  // Vaciar papelera (de esta categoría)
  const emptyTrash = () => {
    if (confirm('¿Vaciar la papelera? Se eliminarán definitivamente todas las propiedades de la papelera.')) {
      const updated = properties.filter(p => !(p.eliminado && (p.category || 'alojamiento') === category))
      setProperties(updated)
      saveProperties(updated)
    }
  }

  const deleted = properties.filter(p => p.eliminado && (p.category || 'alojamiento') === category)
  const filtered = deleted.filter(p => {
    const term = searchTerm.toLowerCase()
    return p.name.toLowerCase().includes(term) || p.address.toLowerCase().includes(term)
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Trash2 className="h-12 w-12 text-red-600 mx-auto animate-pulse" />
          <p className="mt-2 text-gray-600">Cargando papelera...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Propiedades - Check and Point" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <Link
              href={`/units/list?category=${category}`}
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a la lista
            </Link>
            <div className="flex items-center">
              <Trash2 className="h-8 w-8 text-red-600 mr-3" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Papelera</h1>
                <p className="mt-1 text-sm text-gray-500">Propiedades eliminadas ({category === 'cochera' ? 'Cocheras' : 'Alojamientos'})</p>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              href={`/units/new?category=${category}`}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Agregar Propiedad
            </Link>
          </div>
        </div>

        {/* Buscador */}
        <div className="mb-6 max-w-md">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Buscador</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              placeholder="Buscar en la papelera..."
            />
          </div>
        </div>

        {/* Lista */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Trash2 className="h-5 w-5 mr-2 text-gray-500" />
              Papelera
            </h3>

            {filtered.length === 0 ? (
              <div className="text-center py-10">
                <Trash2 className="mx-auto h-12 w-12 text-gray-300" />
                <p className="mt-2 text-sm text-gray-500">La papelera está vacía.</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md">
                {filtered.map(p => (
                  <li key={p.id} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
                    <span className="text-sm text-gray-700">
                      <span className="font-medium text-gray-900">{p.name}</span>
                      <span className="text-gray-400"> — {p.address} {p.number}</span>
                    </span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => restore(p.id)}
                        className="inline-flex items-center justify-center h-8 w-8 rounded-full text-gray-500 hover:bg-gray-200"
                        title="Reestablecer la propiedad"
                      >
                        <RotateCcw className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteForever(p.id)}
                        className="inline-flex items-center justify-center h-8 w-8 rounded-full text-red-600 hover:bg-red-100"
                        title="Eliminar definitivamente la propiedad"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Acciones */}
            <div className="flex flex-wrap justify-end gap-3 mt-6">
              <button
                onClick={emptyTrash}
                disabled={deleted.length === 0}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Vaciar Papelera
              </button>
              <Link
                href={`/units/list?category=${category}`}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
              >
                Cancelar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PropertiesTrashPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <TrashView />
    </Suspense>
  )
}
