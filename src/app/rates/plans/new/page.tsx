'use client'

import { useState } from 'react'
import { DollarSign, ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { loadRatePlans, saveRatePlans, RatePlan } from '@/lib/rates'

export default function NewRatePlanPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [successMessage, setSuccessMessage] = useState('')

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [hasMinNights, setHasMinNights] = useState(false)
  const [minNights, setMinNights] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { [key: string]: string } = {}
    if (!name.trim()) newErrors.name = 'El nombre es obligatorio'
    // Si tiene mínimo de noches, "Cuántas?" es obligatorio.
    if (hasMinNights && (!minNights || parseInt(minNights) < 1)) {
      newErrors.minNights = 'Indica la cantidad mínima de noches'
    }
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    try {
      const existing = loadRatePlans()
      const newPlan: RatePlan = {
        id: String(Date.now()),
        name: name.trim(),
        description: description.trim(),
        hasMinNights,
        minNights: hasMinNights ? parseInt(minNights) : 0,
        createdAt: new Date().toISOString(),
      }
      saveRatePlans([...existing, newPlan])
      setSuccessMessage('¡Plan de tarifa creado exitosamente!')
      setTimeout(() => router.push('/rates/plans'), 1200)
    } catch (error) {
      console.error('Error saving rate plan:', error)
      setErrors({ general: 'Ocurrió un error al guardar. Intenta nuevamente.' })
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field?: string) =>
    `block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
      field && errors[field] ? 'border-red-300' : ''
    }`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Planes de Tarifa - Check and Point" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/rates/plans" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" /> Volver
        </Link>
        <div className="flex items-center mb-6">
          <DollarSign className="h-8 w-8 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Formulario para crear Plan de Tarifas</h1>
        </div>

        {successMessage && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-md p-4">
            <p className="text-sm font-medium text-green-800">{successMessage}</p>
          </div>
        )}
        {errors.general && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-sm font-medium text-red-800">{errors.general}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna izquierda */}
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre *</label>
                    <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value); if (errors.name) setErrors(p => ({ ...p, name: '' })) }} className={`mt-1 ${inputClass('name')}`} placeholder="Ej: Tarifa estándar" />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => setHasMinNights(v => !v)}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors ${hasMinNights ? 'bg-indigo-600' : 'bg-gray-200'}`}
                        role="switch"
                        aria-checked={hasMinNights}
                      >
                        <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${hasMinNights ? 'translate-x-5' : 'translate-x-0'}`} />
                      </button>
                      <span className="ml-3 text-sm font-medium text-gray-700">Mínimo de noches</span>
                    </div>

                    {/* En caso de tener mínimo de noches, agregar campo "Cuántas?" (obligatorio) */}
                    {hasMinNights && (
                      <div className="mt-4 flex items-center gap-3">
                        <label htmlFor="minNights" className="text-sm text-gray-700">¿Cuántas?</label>
                        <input
                          type="number"
                          min="1"
                          id="minNights"
                          value={minNights}
                          onChange={(e) => { setMinNights(e.target.value); if (errors.minNights) setErrors(p => ({ ...p, minNights: '' })) }}
                          className={`w-24 ${inputClass('minNights')}`}
                        />
                      </div>
                    )}
                    {errors.minNights && <p className="mt-2 text-sm text-red-600">{errors.minNights}</p>}
                  </div>
                </div>

                {/* Columna derecha */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
                  <textarea id="description" rows={6} value={description} onChange={(e) => setDescription(e.target.value)} className={`mt-1 ${inputClass()}`} placeholder="Describe el plan de tarifa..." />
                </div>
              </div>

              {/* Botones */}
              <div className="flex justify-end space-x-3 mt-8">
                <Link href="/rates/plans" className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700">
                  Cancelar
                </Link>
                <button type="submit" disabled={loading} className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" /> : <Save className="h-5 w-5 mr-2" />}
                  {loading ? 'Guardando...' : 'Guardar'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
