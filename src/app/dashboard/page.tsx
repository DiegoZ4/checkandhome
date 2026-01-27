'use client'

import { useState, useEffect } from 'react'
import { Building2, Users, Calendar, DollarSign, Package, TrendingUp, Eye, EyeOff, LogOut, Receipt, Home, Building, BarChart, Settings } from 'lucide-react'
import Link from 'next/link'

interface User {
  email: string;
  role: string;
  token: string;
}

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  // Cargar estadísticas reales
  useEffect(() => {
    if (isLoggedIn) {
      // Este efecto se ejecuta cuando el usuario está logueado
      // Los datos se cargan dinámicamente desde localStorage
    }
  }, [isLoggedIn])

  // Obtener estadísticas reales
  const getStats = () => {
    try {
      const units = JSON.parse(localStorage.getItem('checkAndHomeUnits') || '[]')
      const bookings = JSON.parse(localStorage.getItem('checkAndHomeBookings') || '[]')
      const expenses = JSON.parse(localStorage.getItem('checkAndHomeExpenses') || '[]')
      const inventory = JSON.parse(localStorage.getItem('checkAndHomeInventory') || '[]')
      
      const confirmedBookings = bookings.filter((b: any) => b.status === 'CONFIRMED')
      const currentDate = new Date()
      const currentMonth = currentDate.getMonth()
      const currentYear = currentDate.getFullYear()
      
      const monthlyExpenses = expenses
        .filter((e: any) => {
          const expenseDate = new Date(e.date)
          return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear
        })
        .reduce((sum: number, e: any) => sum + e.amount, 0)
      
      const lowStockItems = inventory.filter((i: any) => i.currentStock <= i.minStock)
      
      return {
        totalUnits: units.length,
        activeBookings: confirmedBookings.length,
        monthlyExpenses: monthlyExpenses,
        lowStockItems: lowStockItems.length
      }
    } catch (error) {
      return {
        totalUnits: 0,
        activeBookings: 0,
        monthlyExpenses: 0,
        lowStockItems: 0
      }
    }
  }

  const stats = isLoggedIn ? getStats() : { totalUnits: 0, activeBookings: 0, monthlyExpenses: 0, lowStockItems: 0 }
  useEffect(() => {
    const checkAuthToken = () => {
      const storedToken = localStorage.getItem('checkAndHomeToken')
      const storedUser = localStorage.getItem('checkAndHomeUser')
      
      if (storedToken && storedUser) {
        try {
          const userData = JSON.parse(storedUser)
          // Verificar si el token es válido (simulado)
          const tokenData = JSON.parse(atob(storedToken.split('.')[1] || ''))
          const currentTime = Date.now() / 1000
          
          if (tokenData.exp && tokenData.exp > currentTime) {
            setUser(userData)
            setIsLoggedIn(true)
          } else {
            // Token expirado
            localStorage.removeItem('checkAndHomeToken')
            localStorage.removeItem('checkAndHomeUser')
          }
        } catch (error) {
          // Token inválido
          localStorage.removeItem('checkAndHomeToken')
          localStorage.removeItem('checkAndHomeUser')
        }
      }
      setIsCheckingAuth(false)
    }

    checkAuthToken()
  }, [])

  const generateToken = (userData: Omit<User, 'token'>) => {
    // Simular JWT token (en producción usar JWT real)
    const header = { alg: 'HS256', typ: 'JWT' }
    const payload = { 
      email: userData.email, 
      role: userData.role,
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 horas
    }
    
    const encodedHeader = btoa(JSON.stringify(header))
    const encodedPayload = btoa(JSON.stringify(payload))
    const signature = 'mock-signature' // En producción usar firma real
    
    return `${encodedHeader}.${encodedPayload}.${signature}`
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      let userData: Omit<User, 'token'>
      
      // Sistema de login demo
      if (email === 'admin@demo.com' && password === 'password123') {
        userData = { email, role: 'Administrador' }
      } else if (email === 'owner@demo.com' && password === 'password123') {
        userData = { email, role: 'Propietario' }
      } else if (email === 'guest@demo.com' && password === 'password123') {
        userData = { email, role: 'Huésped' }
      } else {
        setError('Email o contraseña incorrectos')
        return
      }

      // Generar token y guardarlo
      const token = generateToken(userData)
      const userWithToken = { ...userData, token }
      
      localStorage.setItem('checkAndHomeToken', token)
      localStorage.setItem('checkAndHomeUser', JSON.stringify(userData))
      
      setUser(userWithToken)
      setIsLoggedIn(true)
      
    } catch (error) {
      setError('Error durante el inicio de sesión')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('checkAndHomeToken')
    localStorage.removeItem('checkAndHomeUser')
    setIsLoggedIn(false)
    setUser(null)
    setEmail('')
    setPassword('')
  }

  // Mostrar spinner mientras verifica autenticación
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Building2 className="h-12 w-12 text-indigo-600 mx-auto animate-pulse" />
          <p className="mt-2 text-gray-600">Verificando sesión...</p>
        </div>
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <Building2 className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Iniciar Sesión en Check and Home
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sistema Demo - Prueba: admin@demo.com / password123
          </p>
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>Otros usuarios de prueba:</p>
            <p>• owner@demo.com / password123 (Propietario)</p>
            <p>• guest@demo.com / password123 (Huésped)</p>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleLogin}>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                  {error}
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Ingrese su correo"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md placeholder-gray-400 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Ingrese su contraseña"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <Link href="/" className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                ← Volver al inicio
              </Link>
            </div>
          </div>
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
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Panel de Control Check and Home</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Bienvenido, {user?.role}</span>
              <nav className="flex space-x-8">
                <Link href="/" className="text-gray-500 hover:text-gray-700">Inicio</Link>
                <Link href="/dashboard" className="text-indigo-600 font-medium">Panel</Link>
                <Link href="/units" className="text-gray-500 hover:text-gray-700">Propiedades</Link>
                <Link href="/bookings" className="text-gray-500 hover:text-gray-700">Reservas</Link>
                <Link href="/expenses" className="text-gray-500 hover:text-gray-700">Gastos</Link>
                <Link href="/inventory" className="text-gray-500 hover:text-gray-700">Inventario</Link>
              </nav>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-500 hover:text-gray-700"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Salir
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Building2 className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Propiedades</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.totalUnits}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Reservas Confirmadas</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.activeBookings}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Receipt className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Gastos del Mes</dt>
                    <dd className="text-lg font-medium text-gray-900">${stats.monthlyExpenses.toFixed(2)}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Package className={`h-6 w-6 ${stats.lowStockItems > 0 ? 'text-red-500' : 'text-gray-400'}`} />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Productos Stock Bajo</dt>
                    <dd className={`text-lg font-medium ${stats.lowStockItems > 0 ? 'text-red-600' : 'text-gray-900'}`}>{stats.lowStockItems}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Acciones Rápidas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/units/new" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100">
                <Building2 className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Agregar Propiedad</p>
                  <p className="text-sm text-blue-700">Nueva unidad de alquiler</p>
                </div>
              </Link>

              <Link href="/bookings/new" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100">
                <Calendar className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-green-900">Nueva Reserva</p>
                  <p className="text-sm text-green-700">Crear reservación</p>
                </div>
              </Link>

              <Link href="/expenses/new" className="flex items-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100">
                <Receipt className="h-8 w-8 text-yellow-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-yellow-900">Registrar Gasto</p>
                  <p className="text-sm text-yellow-700">Nuevo gasto o compra</p>
                </div>
              </Link>

              <Link href="/inventory/new" className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100">
                <Package className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-purple-900">Agregar Producto</p>
                  <p className="text-sm text-purple-700">Nuevo item de inventario</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Reservas Recientes</h3>
            <div className="flow-root">
              <div className="text-sm text-gray-500">No hay reservas aún. Comienza agregando algunas propiedades y aceptando reservaciones.</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}