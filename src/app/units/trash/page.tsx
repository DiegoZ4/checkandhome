'use client'

import { Suspense, useState, useEffect } from 'react'
import { Trash2, RotateCcw, Search, ArrowLeft, Plus, AlertTriangle, X } from 'lucide-react'
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

  // Eliminar definitivamente alojamientos es una acción exclusiva del tipo de usuario admin.
  const [isAdmin, setIsAdmin] = useState(false)
  const canDelete = category === 'cochera' || isAdmin

  useEffect(() => {
    setProperties(loadProperties())
    try {
      const storedUser = JSON.parse(localStorage.getItem('checkAndPointUser') || 'null')
      setIsAdmin(!!storedUser?.role && storedUser.role.toLowerCase().includes('admin'))
    } catch {
      setIsAdmin(false)
    }
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
    if (!canDelete) return
    const updated = properties.filter(p => p.id !== id)
    setProperties(updated)
    saveProperties(updated)
  }

  // Vaciar papelera (de esta categoría)
  const emptyTrash = () => {
    if (!canDelete) return
    const updated = properties.filter(p => !(p.eliminado && (p.category || 'alojamiento') === category))
    setProperties(updated)
    saveProperties(updated)
  }

  // Confirmación de borrado definitivo (una propiedad puntual, o toda la papelera).
  const [confirmAction, setConfirmAction] = useState<{ type: 'one'; property: Property } | { type: 'all' } | null>(null)

  const runConfirmedAction = () => {
    if (!confirmAction) return
    if (confirmAction.type === 'one') deleteForever(confirmAction.property.id)
    else emptyTrash()
    setConfirmAction(null)
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
                      {canDelete && (
                        <button
                          onClick={() => setConfirmAction({ type: 'one', property: p })}
                          className="inline-flex items-center justify-center h-8 w-8 rounded-full text-red-600 hover:bg-red-100"
                          title="Eliminar definitivamente la propiedad"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Acciones */}
            <div className="flex flex-wrap justify-end gap-3 mt-6">
              {canDelete && (
                <button
                  onClick={() => setConfirmAction({ type: 'all' })}
                  disabled={deleted.length === 0}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Vaciar Papelera
                </button>
              )}
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

      {/* Modal de confirmación */}
      {confirmAction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/30" onClick={() => setConfirmAction(null)} />
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-sm p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-red-100">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-base font-medium text-gray-900">
                  {confirmAction.type === 'one' ? 'Eliminar definitivamente' : 'Vaciar papelera'}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {confirmAction.type === 'one' ? (
                    <>¿Seguro que querés eliminar definitivamente <span className="font-medium text-gray-700">{confirmAction.property.name}</span>? Esta acción no se puede deshacer.</>
                  ) : (
                    '¿Seguro que querés vaciar la papelera? Se eliminarán definitivamente todas las propiedades. Esta acción no se puede deshacer.'
                  )}
                </p>
              </div>
              <button onClick={() => setConfirmAction(null)} className="text-gray-400 hover:text-gray-600" aria-label="Cerrar">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setConfirmAction(null)}
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={runConfirmedAction}
                className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
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
