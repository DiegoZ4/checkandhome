'use client'

import { Suspense, useState, useEffect } from 'react'
import { Home, Car, Plus, Search, Trash2, Edit, Eye, MapPin, List, LayoutGrid } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { loadProperties, saveProperties, Property, PropertyCategory } from '@/lib/properties'

function PropertiesTable() {
  const searchParams = useSearchParams()
  const category = (searchParams.get('category') as PropertyCategory) || 'alojamiento'

  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  // Sin elección manual del usuario, la vista por defecto depende de la categoría.
  const [viewModeOverride, setViewModeOverride] = useState<'list' | 'grid' | null>(null)

  const isCochera = category === 'cochera'
  const title = isCochera ? 'Cocheras' : 'Alojamientos'
  const Icon = isCochera ? Car : Home
  const addLabel = isCochera ? 'Agregar Cochera' : 'Agregar Propiedad'
  const viewMode = viewModeOverride ?? (isCochera ? 'grid' : 'list')

  useEffect(() => {
    setProperties(loadProperties())
    setLoading(false)
  }, [])

  // Mover a la papelera (eliminado = true) en lugar de borrar.
  const moveToTrash = (id: number) => {
    if (confirm('¿Mover esta propiedad a la papelera?')) {
      const updated = properties.map(p =>
        p.id === id ? { ...p, eliminado: true, deletedAt: new Date().toISOString() } : p
      )
      setProperties(updated)
      saveProperties(updated)
    }
  }

  // Propiedades activas (no eliminadas) de la categoría seleccionada.
  const visible = properties.filter(p => !p.eliminado && (p.category || 'alojamiento') === category)
  const trashCount = properties.filter(p => p.eliminado && (p.category || 'alojamiento') === category).length

  const filtered = visible.filter(p => {
    const term = searchTerm.toLowerCase()
    return (
      p.name.toLowerCase().includes(term) ||
      (p.zona || '').toLowerCase().includes(term) ||
      p.address.toLowerCase().includes(term)
    )
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Icon className="h-12 w-12 text-indigo-600 mx-auto animate-pulse" />
          <p className="mt-2 text-gray-600">Cargando propiedades...</p>
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
          <div className="flex items-center">
            <Icon className="h-8 w-8 text-indigo-600 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
              <p className="mt-1 text-sm text-gray-500">Gestiona tus propiedades</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-3">
            {/* Papelera */}
            <Link
              href={`/units/trash?category=${category}`}
              className="relative inline-flex items-center justify-center h-10 w-10 rounded-full bg-red-600 text-white hover:bg-red-700 shadow-sm"
              title="Papelera"
            >
              <Trash2 className="h-5 w-5" />
              {trashCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border border-red-600">
                  {trashCount}
                </span>
              )}
            </Link>
            <Link
              href={`/units/new?category=${category}`}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              {addLabel}
            </Link>
          </div>
        </div>

        {/* Buscador + Alternar vista */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end gap-3">
          <div className="max-w-md flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Buscador
            </label>
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
                placeholder={isCochera ? 'Buscar por nombre o ubicación...' : 'Buscar por nombre de la propiedad o zona...'}
              />
            </div>
          </div>
          <div className="inline-flex rounded-md border border-gray-300 bg-white overflow-hidden self-start">
            <button
              type="button"
              onClick={() => setViewModeOverride('list')}
              title="Vista de lista"
              className={`p-2 ${viewMode === 'list' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <List className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setViewModeOverride('grid')}
              title="Vista de cuadrícula"
              className={`p-2 border-l border-gray-300 ${viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <LayoutGrid className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Listado */}
        {filtered.length === 0 ? (
          <div className="bg-white shadow rounded-lg">
            <div className="text-center py-12">
              <Icon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                {visible.length === 0
                  ? (isCochera ? 'No hay cocheras registradas' : 'No hay propiedades registradas')
                  : 'No se encontraron resultados'}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {visible.length === 0
                  ? (isCochera ? 'Comienza agregando una nueva cochera.' : 'Comienza agregando una nueva propiedad.')
                  : 'Prueba con otros términos de búsqueda.'}
              </p>
              {visible.length === 0 && (
                <div className="mt-6">
                  <Link
                    href={`/units/new?category=${category}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    {addLabel}
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : viewMode === 'grid' ? (
          /* Vista de cuadrícula */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.id} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {/* Foto */}
                <div className="h-44 bg-gray-100 flex items-center justify-center">
                  {p.photos && p.photos[0] ? (
                    <img src={p.photos[0]} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <Icon className="h-12 w-12 text-gray-300" />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 truncate">{p.name}</h3>
                  <p className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{p.address} {p.number}</span>
                  </p>
                  {p.description && (
                    <div className="mt-3 border border-gray-200 rounded-md p-3 text-sm text-gray-600 min-h-[3rem]">
                      {p.description}
                    </div>
                  )}
                  {/* Acciones */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <div className="flex space-x-3">
                      <Link
                        href={`/units/${p.id}`}
                        className="text-indigo-600 hover:text-indigo-900 text-sm font-medium flex items-center"
                      >
                        <Eye className="h-4 w-4 mr-1" /> Ver
                      </Link>
                      {isCochera ? (
                        <button
                          className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center"
                          onClick={() => alert(`Editar ${p.name} - Próximamente`)}
                        >
                          <Edit className="h-4 w-4 mr-1" /> Editar
                        </button>
                      ) : (
                        <Link
                          href={`/units/new?category=${category}&id=${p.id}`}
                          className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center"
                        >
                          <Edit className="h-4 w-4 mr-1" /> Editar
                        </Link>
                      )}
                    </div>
                    <button
                      onClick={() => moveToTrash(p.id)}
                      className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium text-white bg-red-600 hover:bg-red-700"
                    >
                      <Trash2 className="h-3.5 w-3.5 mr-1" /> Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Nombre de la propiedad</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Dirección</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">N°</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Piso</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Departamento</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filtered.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{p.id}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{p.name}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{p.address}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{p.number}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{p.floor || '-'}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{p.apartment || '-'}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-3">
                          <Link href={`/units/${p.id}`} className="text-indigo-600 hover:text-indigo-900" title="Ver">
                            <Eye className="h-4 w-4" />
                          </Link>
                          {isCochera ? (
                            <button
                              className="text-gray-600 hover:text-gray-900"
                              onClick={() => alert(`Editar ${p.name} - Próximamente`)}
                              title="Editar"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                          ) : (
                            <Link href={`/units/new?category=${category}&id=${p.id}`} className="text-gray-600 hover:text-gray-900" title="Editar">
                              <Edit className="h-4 w-4" />
                            </Link>
                          )}
                          <button
                            onClick={() => moveToTrash(p.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Mover a la papelera"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
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

export default function PropertiesListPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <PropertiesTable />
    </Suspense>
  )
}
