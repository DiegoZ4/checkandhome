'use client'

import { useState, useEffect } from 'react'
import { Package, Plus, Filter, TrendingDown, TrendingUp, AlertTriangle, Eye, Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'

interface InventoryItem {
  id: number
  name: string
  category: string
  currentStock: number
  minStock: number
  maxStock: number
  unit: string
  location: string
  cost: number
  supplier?: string
  lastRestocked: string
  createdAt: string
}

export default function InventoryPage() {
  const [inventory, setInventory] = useState<InventoryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Todos los Productos', icon: Package },
    { id: 'cleaning', name: 'Limpieza', icon: Package },
    { id: 'amenities', name: 'Amenidades', icon: Package },
    { id: 'maintenance', name: 'Mantenimiento', icon: Package },
    { id: 'toiletries', name: 'Artículos de Baño', icon: Package },
    { id: 'kitchen', name: 'Cocina', icon: Package },
    { id: 'other', name: 'Otros', icon: Package }
  ]

  useEffect(() => {
    const loadInventory = () => {
      try {
        const storedInventory = JSON.parse(localStorage.getItem('checkAndHomeInventory') || '[]')
        setInventory(storedInventory)
      } catch (error) {
        console.error('Error loading inventory:', error)
        setInventory([])
      } finally {
        setLoading(false)
      }
    }

    loadInventory()
  }, [])

  const deleteItem = (itemId: number) => {
    if (confirm('¿Estás seguro de que deseas eliminar este producto del inventario?')) {
      const updatedInventory = inventory.filter(item => item.id !== itemId)
      setInventory(updatedInventory)
      localStorage.setItem('checkAndHomeInventory', JSON.stringify(updatedInventory))
    }
  }

  const getCategoryName = (categoryId: string) => {
    switch (categoryId) {
      case 'cleaning': return 'Limpieza'
      case 'amenities': return 'Amenidades'
      case 'maintenance': return 'Mantenimiento'
      case 'toiletries': return 'Artículos de Baño'
      case 'kitchen': return 'Cocina'
      case 'other': return 'Otros'
      default: return categoryId
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cleaning': return 'bg-blue-100 text-blue-800'
      case 'amenities': return 'bg-green-100 text-green-800'
      case 'maintenance': return 'bg-yellow-100 text-yellow-800'
      case 'toiletries': return 'bg-purple-100 text-purple-800'
      case 'kitchen': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStockStatus = (item: InventoryItem) => {
    if (item.currentStock <= item.minStock) return 'low'
    if (item.currentStock >= item.maxStock) return 'high'
    return 'normal'
  }

  const getStockStatusColor = (status: string) => {
    switch (status) {
      case 'low': return 'bg-red-100 text-red-800'
      case 'high': return 'bg-green-100 text-green-800'
      default: return 'bg-blue-100 text-blue-800'
    }
  }

  const getStockStatusText = (status: string) => {
    switch (status) {
      case 'low': return 'Stock Bajo'
      case 'high': return 'Stock Alto'
      default: return 'Stock Normal'
    }
  }

  const filteredInventory = inventory.filter(item => {
    if (activeCategory === 'all') return true
    return item.category === activeCategory
  })

  const lowStockItems = inventory.filter(item => item.currentStock <= item.minStock)
  const totalValue = inventory.reduce((sum, item) => sum + (item.currentStock * item.cost), 0)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="h-12 w-12 text-indigo-600 mx-auto animate-pulse" />
          <p className="mt-2 text-gray-600">Cargando inventario...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Inventario y Stock</h1>
            <p className="mt-1 text-sm text-gray-500">
              Gestiona el inventario de productos para tus propiedades
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filtrar
            </button>
            <Link
              href="/inventory/new"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Agregar Producto
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Productos</dt>
                    <dd className="text-lg font-medium text-gray-900">{inventory.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Stock Bajo</dt>
                    <dd className="text-lg font-medium text-gray-900">{lowStockItems.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Valor Total</dt>
                    <dd className="text-lg font-medium text-gray-900">${totalValue.toFixed(2)}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingDown className="h-8 w-8 text-yellow-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Categorías</dt>
                    <dd className="text-lg font-medium text-gray-900">{categories.length - 1}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Low Stock Alert */}
        {lowStockItems.length > 0 && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Productos con stock bajo
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <ul className="list-disc list-inside space-y-1">
                    {lowStockItems.slice(0, 3).map(item => (
                      <li key={item.id}>
                        {item.name} - Stock actual: {item.currentStock} {item.unit}
                      </li>
                    ))}
                    {lowStockItems.length > 3 && (
                      <li>Y {lowStockItems.length - 3} productos más...</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                  activeCategory === category.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {category.name} {category.id !== 'all' ? `(${inventory.filter(i => i.category === category.id).length})` : `(${inventory.length})`}
              </button>
            ))}
          </nav>
        </div>

        {/* Inventory List */}
        {filteredInventory.length === 0 ? (
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center py-12">
                <Package className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No hay productos en inventario</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Comienza agregando productos para gestionar tu inventario.
                </p>
                <div className="mt-6">
                  <Link
                    href="/inventory/new"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar Producto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInventory.map((item) => {
                  const stockStatus = getStockStatus(item)
                  return (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(item.category)}`}>
                          {getCategoryName(item.category)}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex justify-between items-center">
                          <span>Stock Actual:</span>
                          <span className="font-medium">{item.currentStock} {item.unit}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span>Rango de Stock:</span>
                          <span className="text-xs">{item.minStock} - {item.maxStock} {item.unit}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span>Ubicación:</span>
                          <span className="font-medium">{item.location}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span>Costo Unitario:</span>
                          <span className="font-medium">${item.cost.toFixed(2)}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span>Valor Total:</span>
                          <span className="font-medium text-green-600">${(item.currentStock * item.cost).toFixed(2)}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span>Última Reposición:</span>
                          <span className="text-xs">{formatDate(item.lastRestocked)}</span>
                        </div>
                      </div>
                      
                      {/* Stock Status Badge */}
                      <div className="mb-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStockStatusColor(stockStatus)}`}>
                          {getStockStatusText(stockStatus)}
                        </span>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex justify-end space-x-3 pt-3 border-t border-gray-200">
                        <button 
                          className="text-indigo-600 hover:text-indigo-900 text-sm font-medium flex items-center"
                          onClick={() => alert(`Ver detalles de ${item.name} - Próximamente`)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Ver
                        </button>
                        <button 
                          className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center"
                          onClick={() => alert(`Editar ${item.name} - Próximamente`)}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Editar
                        </button>
                        <button 
                          onClick={() => deleteItem(item.id)}
                          className="text-red-600 hover:text-red-900 text-sm font-medium flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Eliminar
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}