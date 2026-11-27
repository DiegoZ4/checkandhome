'use client'

import { Calendar, RefreshCw, Home, DollarSign, Search } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { canCurrent } from '@/lib/permissions'

const tileClass =
  'flex flex-col items-center justify-center border-2 border-gray-200 rounded-lg p-10 hover:border-indigo-500 hover:bg-indigo-50 transition-colors group'
const iconClass = 'h-14 w-14 text-gray-600 group-hover:text-indigo-600 mb-4'
const labelClass = 'text-sm font-semibold uppercase tracking-wide text-gray-700 text-center'

export default function RatesHomePage() {
  // Planes y sincronización sólo para quien puede modificar tarifas. Calendario y
  // Buscador de disponibilidad los ve cualquiera que consulte disponibilidad (p. ej. Reservas).
  const canEdit = canCurrent('rates.edit')
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
          <div className={`grid grid-cols-1 gap-6 mx-auto ${canEdit ? 'sm:grid-cols-2 lg:grid-cols-4 max-w-5xl' : 'sm:grid-cols-2 max-w-xl'}`}>
            {canEdit && (
              <Link href="/rates/plans" className={tileClass}>
                <DollarSign className={iconClass} />
                <span className={labelClass}>Planes de Tarifa</span>
              </Link>
            )}

            <Link href="/rates/calendar" className={tileClass}>
              <Calendar className={iconClass} />
              <span className={labelClass}>Calendario</span>
            </Link>

            <Link href="/rates/search" className={tileClass}>
              <Search className={iconClass} />
              <span className={labelClass}>Buscador de disponibilidad</span>
            </Link>

            {canEdit && (
              <Link href="/rates/sync" className={tileClass}>
                <RefreshCw className={iconClass} />
                <span className={labelClass}>Sincronizar Calendario</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
