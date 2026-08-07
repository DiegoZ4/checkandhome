'use client'

import { Calendar, RefreshCw, Home, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function RatesHomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Tarifas y Disponibilidad - Check and Point" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Home className="h-8 w-8 text-indigo-600 mr-3" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tarifas y Disponibilidad</h1>
            <p className="mt-1 text-sm text-gray-500">Gestiona precios, disponibilidad y sincronización de calendarios</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link
              href="/rates/plans"
              className="flex flex-col items-center justify-center border-2 border-gray-200 rounded-lg p-10 hover:border-indigo-500 hover:bg-indigo-50 transition-colors group"
            >
              <DollarSign className="h-14 w-14 text-gray-600 group-hover:text-indigo-600 mb-4" />
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-700 text-center">Planes de Tarifa</span>
            </Link>

            <Link
              href="/rates/calendar"
              className="flex flex-col items-center justify-center border-2 border-gray-200 rounded-lg p-10 hover:border-indigo-500 hover:bg-indigo-50 transition-colors group"
            >
              <Calendar className="h-14 w-14 text-gray-600 group-hover:text-indigo-600 mb-4" />
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-700 text-center">Calendario</span>
            </Link>

            <Link
              href="/rates/sync"
              className="flex flex-col items-center justify-center border-2 border-gray-200 rounded-lg p-10 hover:border-indigo-500 hover:bg-indigo-50 transition-colors group"
            >
              <RefreshCw className="h-14 w-14 text-gray-600 group-hover:text-indigo-600 mb-4" />
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-700 text-center">Sincronizar Calendario</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
