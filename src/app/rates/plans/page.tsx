'use client'

import { useState, useEffect } from 'react'
import { DollarSign, Plus, Trash2, ArrowLeft, Search, Edit } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { loadRatePlans, saveRatePlans, RatePlan } from '@/lib/rates'

export default function RatePlansPage() {
  const [plans, setPlans] = useState<RatePlan[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setPlans(loadRatePlans())
    setLoading(false)
  }, [])

  const deletePlan = (id: string) => {
    if (confirm('¿Eliminar este plan de tarifa?')) {
      const updated = plans.filter(p => p.id !== id)
      setPlans(updated)
      saveRatePlans(updated)
    }
  }

  const filtered = plans.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <DollarSign className="h-12 w-12 text-indigo-600 animate-pulse" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Planes de Tarifa - Check and Point" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/rates" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" /> Volver
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Planes de tarifa</h1>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              href="/rates/plans/new"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Plus className="h-4 w-4 mr-2" /> Agregar Plan
            </Link>
          </div>
        </div>

        {/* Buscador */}
        <div className="mb-6 max-w-md">
          <label className="block text-sm font-medium text-gray-700 mb-1">Buscador</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-10 rounded-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              placeholder="Buscar plan..."
            />
          </div>
        </div>

        {/* Lista */}
        {filtered.length === 0 ? (
          <div className="bg-white shadow rounded-lg border border-gray-200">
            <div className="text-center py-16">
              <DollarSign className="mx-auto h-12 w-12 text-gray-300" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                {plans.length === 0 ? 'No hay planes de tarifa' : 'No se encontraron resultados'}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {plans.length === 0 ? 'Comienza creando tu primer plan de tarifa.' : 'Prueba con otro término.'}
              </p>
              {plans.length === 0 && (
                <div className="mt-6">
                  <Link href="/rates/plans/new" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    <Plus className="h-4 w-4 mr-2" /> Agregar Plan
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mínimo de noches</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filtered.map(p => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">{p.name}</td>
                    <td className="px-4 py-4 text-sm text-gray-600 max-w-md truncate">{p.description || '-'}</td>
                    <td className="px-4 py-4 text-sm text-gray-700">{p.hasMinNights ? `${p.minNights} noche(s)` : 'No'}</td>
                    <td className="px-4 py-4 text-right">
                      <div className="flex justify-end space-x-3">
                        <button className="text-gray-600 hover:text-gray-900" onClick={() => alert(`Editar ${p.name} - Próximamente`)} title="Editar"><Edit className="h-4 w-4" /></button>
                        <button onClick={() => deletePlan(p.id)} className="text-red-600 hover:text-red-900" title="Eliminar"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
