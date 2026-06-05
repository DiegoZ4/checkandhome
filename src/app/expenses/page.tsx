'use client'

import { useState, useEffect } from 'react'
import { Receipt, Plus, Filter, DollarSign, Calendar, Tag, Edit, Trash2, Eye } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
interface Expense {
  id: number
  description: string
  amount: number
  date: string
  category: string
  unit: string
  receipt?: string
  createdAt: string
}

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Todos los Gastos', icon: Receipt },
    { id: 'maintenance', name: 'Mantenimiento', icon: Receipt },
    { id: 'supplies', name: 'Suministros', icon: Receipt },
    { id: 'utilities', name: 'Servicios', icon: Receipt },
    { id: 'marketing', name: 'Marketing', icon: Receipt },
    { id: 'other', name: 'Otros', icon: Receipt }
  ]

  useEffect(() => {
    const loadExpenses = () => {
      try {
        const storedExpenses = JSON.parse(localStorage.getItem('checkAndPointExpenses') || '[]')
        setExpenses(storedExpenses)
      } catch (error) {
        console.error('Error loading expenses:', error)
        setExpenses([])
      } finally {
        setLoading(false)
      }
    }

    loadExpenses()
  }, [])

  const deleteExpense = (expenseId: number) => {
    if (confirm('¿Estás seguro de que deseas eliminar este gasto?')) {
      const updatedExpenses = expenses.filter(expense => expense.id !== expenseId)
      setExpenses(updatedExpenses)
      localStorage.setItem('checkAndPointExpenses', JSON.stringify(updatedExpenses))
    }
  }

  const getCategoryName = (categoryId: string) => {
    switch (categoryId) {
      case 'maintenance': return 'Mantenimiento'
      case 'supplies': return 'Suministros'
      case 'utilities': return 'Servicios'
      case 'marketing': return 'Marketing'
      case 'other': return 'Otros'
      default: return categoryId
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'maintenance': return 'bg-blue-100 text-blue-800'
      case 'supplies': return 'bg-green-100 text-green-800'
      case 'utilities': return 'bg-yellow-100 text-yellow-800'
      case 'marketing': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredExpenses = expenses.filter(expense => {
    if (activeCategory === 'all') return true
    return expense.category === activeCategory
  })

  const totalExpenses = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0)

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
          <Receipt className="h-12 w-12 text-indigo-600 mx-auto animate-pulse" />
          <p className="mt-2 text-gray-600">Cargando gastos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Gastos - Check and Point" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gastos y Compras</h1>
            <p className="mt-1 text-sm text-gray-500">
              Gestiona todos los gastos y compras de tus propiedades
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filtrar
            </button>
            <Link
              href="/expenses/new"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Gasto
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Gastado</dt>
                    <dd className="text-lg font-medium text-gray-900">${totalExpenses.toFixed(2)} USD</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Receipt className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Gastos</dt>
                    <dd className="text-lg font-medium text-gray-900">{filteredExpenses.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Este Mes</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      ${expenses.filter(e => {
                        const expenseDate = new Date(e.date)
                        const now = new Date()
                        return expenseDate.getMonth() === now.getMonth() && expenseDate.getFullYear() === now.getFullYear()
                      }).reduce((sum, e) => sum + e.amount, 0).toFixed(2)} USD
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                {category.name} {category.id !== 'all' ? `(${expenses.filter(e => e.category === category.id).length})` : `(${expenses.length})`}
              </button>
            ))}
          </nav>
        </div>

        {/* Expenses List */}
        {filteredExpenses.length === 0 ? (
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center py-12">
                <Receipt className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No hay gastos registrados</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Comienza registrando tus primeros gastos y compras.
                </p>
                <div className="mt-6">
                  <Link
                    href="/expenses/new"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Registrar Gasto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-4">
                {filteredExpenses.map((expense) => (
                  <div key={expense.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-medium text-gray-900">{expense.description}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(expense.category)}`}>
                            {getCategoryName(expense.category)}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div className="space-y-2">
                            <p className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-2 flex-shrink-0" />
                              <span className="font-semibold text-lg text-green-600">${expense.amount.toFixed(2)} USD</span>
                            </p>
                            <p className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                              {formatDate(expense.date)}
                            </p>
                          </div>
                          
                          <div className="space-y-2">
                            <p className="flex items-center">
                              <Tag className="h-4 w-4 mr-2 flex-shrink-0" />
                              Propiedad: {expense.unit || 'General'}
                            </p>
                            <p className="text-xs text-gray-500">
                              ID: #{expense.id}
                            </p>
                          </div>
                          
                          <div className="space-y-2">
                            {expense.receipt && (
                              <p className="text-xs text-blue-600">
                                📎 Recibo adjunto
                              </p>
                            )}
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div className="flex justify-end space-x-3 mt-4 pt-3 border-t border-gray-200">
                          <button 
                            className="text-indigo-600 hover:text-indigo-900 text-sm font-medium flex items-center"
                            onClick={() => alert(`Ver detalles de gasto #${expense.id} - Próximamente`)}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            Ver Detalles
                          </button>
                          <button 
                            className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center"
                            onClick={() => alert(`Editar gasto #${expense.id} - Próximamente`)}
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Editar
                          </button>
                          <button 
                            onClick={() => deleteExpense(expense.id)}
                            className="text-red-600 hover:text-red-900 text-sm font-medium flex items-center"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}