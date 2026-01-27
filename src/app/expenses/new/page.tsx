'use client'

import { useState, useEffect } from 'react'
import { Receipt, DollarSign, Calendar, Tag, Upload, ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Unit {
  id: number
  name: string
  address: string
}

export default function NewExpensePage() {
  const [units, setUnits] = useState<Unit[]>([])
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [successMessage, setSuccessMessage] = useState('')
  const router = useRouter()
  
  const [expenseData, setExpenseData] = useState({
    description: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    category: 'other',
    unit: '',
    receipt: ''
  })

  const categories = [
    { id: 'maintenance', name: 'Mantenimiento' },
    { id: 'supplies', name: 'Suministros' },
    { id: 'utilities', name: 'Servicios Públicos' },
    { id: 'marketing', name: 'Marketing y Publicidad' },
    { id: 'cleaning', name: 'Limpieza' },
    { id: 'insurance', name: 'Seguros' },
    { id: 'taxes', name: 'Impuestos' },
    { id: 'other', name: 'Otros' }
  ]

  useEffect(() => {
    // Cargar propiedades
    try {
      const storedUnits = JSON.parse(localStorage.getItem('checkAndHomeUnits') || '[]')
      setUnits(storedUnits)
    } catch (error) {
      console.error('Error loading units:', error)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setExpenseData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    if (!expenseData.description.trim()) {
      newErrors.description = 'La descripción es obligatoria'
    }

    if (!expenseData.amount || parseFloat(expenseData.amount) <= 0) {
      newErrors.amount = 'El monto debe ser mayor a 0'
    }

    if (!expenseData.date) {
      newErrors.date = 'La fecha es obligatoria'
    }

    if (!expenseData.category) {
      newErrors.category = 'La categoría es obligatoria'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      // Obtener gastos existentes
      const existingExpenses = JSON.parse(localStorage.getItem('checkAndHomeExpenses') || '[]')
      
      // Crear nuevo gasto
      const newExpense = {
        id: Date.now(),
        description: expenseData.description.trim(),
        amount: parseFloat(expenseData.amount),
        date: expenseData.date,
        category: expenseData.category,
        unit: expenseData.unit || 'General',
        receipt: expenseData.receipt,
        createdAt: new Date().toISOString()
      }

      // Guardar en localStorage
      const updatedExpenses = [...existingExpenses, newExpense]
      localStorage.setItem('checkAndHomeExpenses', JSON.stringify(updatedExpenses))

      setSuccessMessage('¡Gasto registrado exitosamente!')
      
      // Redirigir después de 2 segundos
      setTimeout(() => {
        router.push('/expenses')
      }, 2000)

    } catch (error) {
      console.error('Error saving expense:', error)
      setErrors({ general: 'Ocurrió un error al guardar el gasto. Intenta nuevamente.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/expenses"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Gastos
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Registrar Nuevo Gasto</h1>
          <p className="mt-1 text-sm text-gray-500">
            Registra gastos y compras relacionados con tus propiedades
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">{successMessage}</p>
              </div>
            </div>
          </div>
        )}

        {/* General Error */}
        {errors.general && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800">{errors.general}</p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6 flex items-center">
                <Receipt className="h-5 w-5 mr-2" />
                Información del Gasto
              </h3>

              <div className="grid grid-cols-1 gap-6">
                {/* Descripción */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Descripción del Gasto *
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      value={expenseData.description}
                      onChange={handleInputChange}
                      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                        errors.description ? 'border-red-300' : ''
                      }`}
                      placeholder="Ej: Reparación de aires acondicionados, compra de productos de limpieza..."
                    />
                  </div>
                  {errors.description && (
                    <p className="mt-2 text-sm text-red-600">{errors.description}</p>
                  )}
                </div>

                {/* Monto y Fecha */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                      Monto (USD) *
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        id="amount"
                        name="amount"
                        value={expenseData.amount}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                          errors.amount ? 'border-red-300' : ''
                        }`}
                        placeholder="0.00"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">USD</span>
                      </div>
                    </div>
                    {errors.amount && (
                      <p className="mt-2 text-sm text-red-600">{errors.amount}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                      Fecha del Gasto *
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={expenseData.date}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                          errors.date ? 'border-red-300' : ''
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="mt-2 text-sm text-red-600">{errors.date}</p>
                    )}
                  </div>
                </div>

                {/* Categoría y Propiedad */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Categoría *
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Tag className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="category"
                        name="category"
                        value={expenseData.category}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                          errors.category ? 'border-red-300' : ''
                        }`}
                      >
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.category && (
                      <p className="mt-2 text-sm text-red-600">{errors.category}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
                      Propiedad (Opcional)
                    </label>
                    <div className="mt-1">
                      <select
                        id="unit"
                        name="unit"
                        value={expenseData.unit}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
                      >
                        <option value="">General (Todas las propiedades)</option>
                        {units.map((unit) => (
                          <option key={unit.id} value={unit.name}>
                            {unit.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Recibo */}
                <div>
                  <label htmlFor="receipt" className="block text-sm font-medium text-gray-700">
                    URL del Recibo (Opcional)
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Upload className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      id="receipt"
                      name="receipt"
                      value={expenseData.receipt}
                      onChange={handleInputChange}
                      className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
                      placeholder="https://ejemplo.com/recibo.pdf"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Puedes subir el recibo a Google Drive, Dropbox u otro servicio y pegar aquí el enlace
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3">
            <Link
              href="/expenses"
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              ) : (
                <Save className="h-5 w-5 mr-2" />
              )}
              {loading ? 'Guardando...' : 'Registrar Gasto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}