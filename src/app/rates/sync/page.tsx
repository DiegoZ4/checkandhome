'use client'

import { RefreshCw, ArrowLeft, Link2 } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

// Canales de sincronización (iCal). Conexión real pendiente de backend.
const CHANNELS = [
  { id: 'airbnb', name: 'Airbnb', color: 'text-rose-600' },
  { id: 'booking', name: 'Booking.com', color: 'text-blue-700' },
]

export default function SyncCalendarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Tarifas y Disponibilidad - Check and Point" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/rates" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" /> Volver
        </Link>
        <div className="flex items-center mb-6">
          <RefreshCw className="h-8 w-8 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Sincronizar Calendario</h1>
        </div>

        <div className="bg-white shadow rounded-lg p-6 space-y-6">
          <p className="text-sm text-gray-500">
            Sincroniza la disponibilidad con canales externos mediante enlaces iCal. La conexión efectiva
            requiere backend (pendiente de implementación).
          </p>
          {CHANNELS.map(c => (
            <div key={c.id} className="border border-gray-200 rounded-lg p-4">
              <h3 className={`text-lg font-medium ${c.color} mb-3`}>{c.name}</h3>
              <label className="block text-sm font-medium text-gray-700">URL del calendario (iCal)</label>
              <div className="mt-1 flex gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Link2 className="h-4 w-4 text-gray-400" />
                  </div>
                  <input type="url" className="block w-full pl-9 rounded-md border-gray-300 shadow-sm sm:text-sm text-black" placeholder={`https://...${c.id}.../calendar.ics`} />
                </div>
                <button
                  onClick={() => alert('Sincronización - requiere backend (Próximamente)')}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap"
                >
                  <RefreshCw className="h-4 w-4 mr-2" /> Sincronizar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
