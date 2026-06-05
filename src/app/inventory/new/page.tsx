'use client'

import { useState, useEffect } from 'react'
import { Package, DollarSign, Hash, MapPin, ArrowLeft, Save, Calendar } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'

export default function NewInventoryPage() {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [successMessage, setSuccessMessage] = useState('')
  const router = useRouter()
  
  const [itemData, setItemData] = useState({
    name: '',
    category: 'other',
    currentStock: '',
    minStock: '',
    maxStock: '',
    unit: 'unidad',
    location: '',
    cost: '',
    supplier: '',
    lastRestocked: new Date().toISOString().split('T')[0]
  })

  const categories = [
    { id: 'cleaning', name: 'Productos de Limpieza' },
    { id: 'amenities', name: 'Amenidades para Huéspedes' },
    { id: 'maintenance', name: 'Mantenimiento y Reparaciones' },
    { id: 'toiletries', name: 'Artículos de Baño' },
    { id: 'kitchen', name: 'Productos de Cocina' },
    { id: 'linens', name: 'Ropa de Cama y Toallas' },
    { id: 'safety', name: 'Seguridad y Emergencias' },
    { id: 'other', name: 'Otros' }
  ]

  const units = [
    { id: 'unidad', name: 'Unidad' },
    { id: 'litro', name: 'Litro' },
    { id: 'kilogramo', name: 'Kilogramo' },
    { id: 'metro', name: 'Metro' },
    { id: 'paquete', name: 'Paquete' },
    { id: 'botella', name: 'Botella' },
    { id: 'rollo', name: 'Rollo' },
    { id: 'caja', name: 'Caja' },
    { id: 'par', name: 'Par' },
    { id: 'juego', name: 'Juego' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setItemData(prev => ({
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

    if (!itemData.name.trim()) {
      newErrors.name = 'El nombre del producto es obligatorio'
    }

    if (!itemData.currentStock || parseFloat(itemData.currentStock) < 0) {
      newErrors.currentStock = 'El stock actual debe ser mayor o igual a 0'
    }

    if (!itemData.minStock || parseFloat(itemData.minStock) < 0) {
      newErrors.minStock = 'El stock mínimo debe ser mayor o igual a 0'
    }

    if (!itemData.maxStock || parseFloat(itemData.maxStock) <= 0) {
      newErrors.maxStock = 'El stock máximo debe ser mayor a 0'
    }

    if (parseFloat(itemData.minStock) >= parseFloat(itemData.maxStock)) {
      newErrors.minStock = 'El stock mínimo debe ser menor al máximo'
    }

    if (!itemData.cost || parseFloat(itemData.cost) < 0) {
      newErrors.cost = 'El costo debe ser mayor o igual a 0'
    }

    if (!itemData.location.trim()) {
      newErrors.location = 'La ubicación es obligatoria'
    }

    if (!itemData.lastRestocked) {
      newErrors.lastRestocked = 'La fecha de última reposición es obligatoria'
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
      // Obtener inventario existente
      const existingInventory = JSON.parse(localStorage.getItem('checkAndPointInventory') || '[]')
      
      // Crear nuevo producto
      const newItem = {
        id: Date.now(),
        name: itemData.name.trim(),
        category: itemData.category,
        currentStock: parseFloat(itemData.currentStock),
        minStock: parseFloat(itemData.minStock),
        maxStock: parseFloat(itemData.maxStock),
        unit: itemData.unit,
        location: itemData.location.trim(),
        cost: parseFloat(itemData.cost),
        supplier: itemData.supplier.trim() || undefined,
        lastRestocked: itemData.lastRestocked,
        createdAt: new Date().toISOString()
      }

      // Guardar en localStorage
      const updatedInventory = [...existingInventory, newItem]
      localStorage.setItem('checkAndPointInventory', JSON.stringify(updatedInventory))

      setSuccessMessage('¡Producto agregado al inventario exitosamente!')
      
      // Redirigir después de 2 segundos
      setTimeout(() => {
        router.push('/inventory')
      }, 2000)

    } catch (error) {
      console.error('Error saving inventory item:', error)
      setErrors({ general: 'Ocurrió un error al guardar el producto. Intenta nuevamente.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/inventory"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Inventario
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Agregar Producto al Inventario</h1>
          <p className="mt-1 text-sm text-gray-500">
            Añade un nuevo producto para gestionar su stock e inventario
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
          {/* Product Basic Info */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6 flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Información del Producto
              </h3>

              <div className="grid grid-cols-1 gap-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre del Producto *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={itemData.name}
                      onChange={handleInputChange}
                      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                        errors.name ? 'border-red-300' : ''
                      }`}
                      placeholder="Ej: Papel higiénico premium, Detergente líquido..."
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Categoría y Ubicación */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Categoría *
                    </label>
                    <div className="mt-1">
                      <select
                        id="category"
                        name="category"
                        value={itemData.category}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
                      >
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                      Ubicación *
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={itemData.location}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                          errors.location ? 'border-red-300' : ''
                        }`}
                        placeholder="Ej: Bodega principal, Apartamento 2A..."
                      />
                    </div>
                    {errors.location && (
                      <p className="mt-2 text-sm text-red-600">{errors.location}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stock Information */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6 flex items-center">
                <Hash className="h-5 w-5 mr-2" />
                Información de Stock
              </h3>

              <div className="grid grid-cols-1 gap-6">
                {/* Stock Actual y Unidad */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="currentStock" className="block text-sm font-medium text-gray-700">
                      Stock Actual *
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        id="currentStock"
                        name="currentStock"
                        value={itemData.currentStock}
                        onChange={handleInputChange}
                        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                          errors.currentStock ? 'border-red-300' : ''
                        }`}
                        placeholder="0"
                      />
                    </div>
                    {errors.currentStock && (
                      <p className="mt-2 text-sm text-red-600">{errors.currentStock}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
                      Unidad de Medida *
                    </label>
                    <div className="mt-1">
                      <select
                        id="unit"
                        name="unit"
                        value={itemData.unit}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
                      >
                        {units.map((unit) => (
                          <option key={unit.id} value={unit.id}>
                            {unit.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Stock Mínimo y Máximo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="minStock" className="block text-sm font-medium text-gray-700">
                      Stock Mínimo *
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        id="minStock"
                        name="minStock"
                        value={itemData.minStock}
                        onChange={handleInputChange}
                        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                          errors.minStock ? 'border-red-300' : ''
                        }`}
                        placeholder="0"
                      />
                    </div>
                    {errors.minStock && (
                      <p className="mt-2 text-sm text-red-600">{errors.minStock}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      Nivel de stock para generar alertas de reposición
                    </p>
                  </div>

                  <div>
                    <label htmlFor="maxStock" className="block text-sm font-medium text-gray-700">
                      Stock Máximo *
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        id="maxStock"
                        name="maxStock"
                        value={itemData.maxStock}
                        onChange={handleInputChange}
                        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                          errors.maxStock ? 'border-red-300' : ''
                        }`}
                        placeholder="0"
                      />
                    </div>
                    {errors.maxStock && (
                      <p className="mt-2 text-sm text-red-600">{errors.maxStock}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      Nivel máximo de stock recomendado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cost and Supplier Information */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6 flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Información Financiera
              </h3>

              <div className="grid grid-cols-1 gap-6">
                {/* Costo y Proveedor */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="cost" className="block text-sm font-medium text-gray-700">
                      Costo Unitario (USD) *
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        id="cost"
                        name="cost"
                        value={itemData.cost}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                          errors.cost ? 'border-red-300' : ''
                        }`}
                        placeholder="0.00"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">USD</span>
                      </div>
                    </div>
                    {errors.cost && (
                      <p className="mt-2 text-sm text-red-600">{errors.cost}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="supplier" className="block text-sm font-medium text-gray-700">
                      Proveedor (Opcional)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="supplier"
                        name="supplier"
                        value={itemData.supplier}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
                        placeholder="Ej: Supermercado XYZ, Proveedor ABC..."
                      />
                    </div>
                  </div>
                </div>

                {/* Fecha de Última Reposición */}
                <div>
                  <label htmlFor="lastRestocked" className="block text-sm font-medium text-gray-700">
                    Fecha de Última Reposición *
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="lastRestocked"
                      name="lastRestocked"
                      value={itemData.lastRestocked}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                        errors.lastRestocked ? 'border-red-300' : ''
                      }`}
                    />
                  </div>
                  {errors.lastRestocked && (
                    <p className="mt-2 text-sm text-red-600">{errors.lastRestocked}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3">
            <Link
              href="/inventory"
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
              {loading ? 'Guardando...' : 'Agregar Producto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}