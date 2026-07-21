'use client'

import { Home, Car } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function PropertiesHomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Propiedades - Check and Point" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Home className="h-8 w-8 text-indigo-600 mr-3" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Propiedades</h1>
            <p className="mt-1 text-sm text-gray-500">
              Selecciona el tipo de propiedad que deseas gestionar
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="bg-white shadow rounded-lg p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link
              href="/units/list?category=alojamiento"
              className="flex flex-col items-center justify-center border-2 border-gray-200 rounded-lg p-10 hover:border-indigo-500 hover:bg-indigo-50 transition-colors group"
            >
              <Home className="h-16 w-16 text-gray-600 group-hover:text-indigo-600 mb-4" />
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                Alojamientos
              </span>
            </Link>

            <Link
              href="/units/list?category=cochera"
              className="flex flex-col items-center justify-center border-2 border-gray-200 rounded-lg p-10 hover:border-indigo-500 hover:bg-indigo-50 transition-colors group"
            >
              <Car className="h-16 w-16 text-gray-600 group-hover:text-indigo-600 mb-4" />
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                Cocheras
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
