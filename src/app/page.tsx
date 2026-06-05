'use client'

import { useState, useEffect } from 'react'
import { Building2, LogIn } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    // Si ya hay sesión, ir directo al panel; si no, mostrar el aviso de login.
    const token = localStorage.getItem('checkAndPointToken')
    const user = localStorage.getItem('checkAndPointUser')
    if (token && user) {
      router.replace('/dashboard')
    } else {
      setChecking(false)
    }
  }, [router])

  if (checking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Building2 className="h-12 w-12 text-indigo-600 animate-pulse" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-5">
            <Building2 className="h-7 w-7 text-indigo-600" />
            <span className="ml-3 text-2xl font-semibold text-gray-800">Check and Point</span>
          </div>
        </div>
      </header>

      {/* Aviso de inicio de sesión */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-sm w-full">
          <div className="mx-auto h-14 w-14 rounded-full bg-indigo-50 flex items-center justify-center">
            <LogIn className="h-7 w-7 text-indigo-600" />
          </div>
          <h1 className="mt-6 text-2xl font-bold text-gray-900">Necesitás iniciar sesión</h1>
          <p className="mt-2 text-sm text-gray-500">
            Iniciá sesión para acceder al sistema de gestión.
          </p>
          <Link
            href="/dashboard"
            className="mt-6 inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <LogIn className="h-5 w-5 mr-2" />
            Iniciar sesión
          </Link>
        </div>
      </main>
    </div>
  )
}
