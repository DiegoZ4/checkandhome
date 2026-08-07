'use client'

import { useState, useEffect } from 'react'
import {
  Menu, X, LogOut, Home, Users, Calendar, CalendarRange, Building2, BarChart3,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

interface User {
  email: string;
  role: string;
  name?: string;
  token: string;
}

interface NavbarProps {
  title?: string;
  showUserInfo?: boolean;
}

// Secciones del menú lateral (drawer).
// NOTA: secciones comentadas temporalmente para dejar la app al ~50%.
// Para reactivarlas, descomentar las líneas correspondientes.
const MENU_ITEMS = [
  { label: 'Inicio', href: '/dashboard', icon: Home },
  { label: 'Usuarios', href: '/users', icon: Users },
  { label: 'Reservas', href: '/bookings', icon: Calendar },
  { label: 'Tarifas y Disponibilidad', href: '/rates', icon: CalendarRange },
  { label: 'Propiedades', href: '/units', icon: Building2 },
  // { label: 'Cocheras', href: '/units/list?category=cochera', icon: Car },
  // { label: 'Administración', href: '/expenses', icon: Receipt },
  // { label: 'Compras', href: '/inventory', icon: Package },
  { label: 'Análisis', href: '/dashboard', icon: BarChart3 },
  // { label: 'Configuración', href: '/settings', icon: Settings },
]

export default function Navbar({ title = "Check and Point" }: NavbarProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedToken = localStorage.getItem('checkAndPointToken')
        const storedUser = localStorage.getItem('checkAndPointUser')
        if (storedToken && storedUser) {
          setUser(JSON.parse(storedUser))
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false)
          setUser(null)
        }
      } catch {
        setIsLoggedIn(false)
        setUser(null)
      }
    }
    checkAuth()
  }, [pathname])

  // Título de la pestaña del navegador
  useEffect(() => { if (title) document.title = title }, [title])

  const handleLogout = () => {
    localStorage.removeItem('checkAndPointToken')
    localStorage.removeItem('checkAndPointUser')
    setIsLoggedIn(false)
    setUser(null)
    router.push('/')
  }

  // ---- Navbar simple (sin sesión) ----
  if (!isLoggedIn) {
    return (
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <Link href="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-3 text-xl font-bold text-gray-900">Check and Point</span>
            </Link>
            <nav className="flex space-x-6 text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700">Inicio</Link>
              <Link href="/dashboard" className="text-gray-500 hover:text-gray-700">Acceder</Link>
            </nav>
          </div>
        </div>
      </header>
    )
  }

  // ---- Navbar con menú lateral (con sesión) ----
  return (
    <>
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between py-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 shadow-sm"
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </button>

            <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-semibold text-gray-800 whitespace-nowrap">
              Check and Point
            </h1>

            <div className="flex items-center gap-3">
              {user && (
                <div className="hidden sm:block text-right leading-tight">
                  <p className="text-sm font-medium text-gray-800">{user.name || user.email}</p>
                  <p className="text-xs text-gray-400">{user.role}</p>
                </div>
              )}
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 shadow-sm"
                aria-label="Salir"
                title="Salir"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMenuOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Menú</h2>
              <button onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-gray-600" aria-label="Cerrar menú">
                <X className="h-6 w-6" />
              </button>
            </div>

            {user && (
              <div className="px-6 py-3 border-b border-gray-100">
                <p className="text-xs text-gray-400">Sesión</p>
                <p className="text-sm font-medium text-gray-700">{user.role}</p>
              </div>
            )}

            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
              {MENU_ITEMS.map((item) => {
                const active = item.href === '/dashboard'
                  ? pathname === '/dashboard'
                  : pathname.startsWith(item.href.split('?')[0])
                const Icon = item.icon
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center px-4 py-2.5 rounded-md border text-sm font-medium transition-colors ${
                      active
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="px-4 py-4 border-t border-gray-100">
              <button
                onClick={handleLogout}
                className="flex w-full items-center px-4 py-2.5 rounded-md text-sm font-medium text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4 mr-3" />
                Salir
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
