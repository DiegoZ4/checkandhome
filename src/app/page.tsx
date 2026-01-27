import Link from 'next/link'
import { CalendarDays, Building2, Users, DollarSign, Package, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Check and Point</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/dashboard" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Panel de Control
              </Link>
              <Link href="/units" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Propiedades
              </Link>
              <Link href="/bookings" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Reservas
              </Link>
              <Link href="/calendar" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Calendario
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Sistema Completo de</span>
            <span className="block text-indigo-600">Gestión de Reservas</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Gestiona tus propiedades, reservas e integra con Airbnb y Booking.com de forma fluida.
            Incluye seguimiento financiero completo y gestión de inventario.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Calendar Management */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CalendarDays className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Sincronización de Calendario</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Sincroniza automáticamente con calendarios de Airbnb y Booking.com
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/calendar" className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                    Ver Calendario →
                  </Link>
                </div>
              </div>
            </div>

            {/* Property Management */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Building2 className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Gestión de Propiedades</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Gestiona unidades, comodidades, fotos y precios
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/units" className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                    Gestionar Propiedades →
                  </Link>
                </div>
              </div>
            </div>

            {/* User Management */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Roles de Usuario</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Admin, Propietario, Huésped, Limpieza, Personal de Check-in/out
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/users" className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                    Gestionar Usuarios →
                  </Link>
                </div>
              </div>
            </div>

            {/* Financial Tracking */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <DollarSign className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Seguimiento Financiero</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Rastrea gastos, compras e ingresos
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/finances" className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                    Ver Finanzas →
                  </Link>
                </div>
              </div>
            </div>

            {/* Inventory Management */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Package className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Inventario y Stock</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Gestiona inventario y rastrea el consumo
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/inventory" className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                    Gestionar Inventario →
                  </Link>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Análisis</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Reportes de ingresos y análisis de ocupación
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/analytics" className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                    Ver Análisis →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-indigo-600 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white">
                ¿Listo para optimizar tu gestión de reservas?
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Comienza hoy con nuestro sistema integral de gestión de propiedades.
              </p>
              <div className="mt-8">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                >
                  Ir al Panel de Control
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
