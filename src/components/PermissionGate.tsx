'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ShieldAlert } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { canCurrent, permissionForPath } from '@/lib/permissions'

/**
 * Bloquea las páginas que el tipo de usuario no puede usar (ver ROUTE_RULES en
 * permissions.ts). El servidor además rechaza los cambios sin permiso.
 * Va dentro de CloudSyncGate, así que sólo se renderiza en el navegador.
 */
export default function PermissionGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const perm = permissionForPath(pathname)
  const loggedIn = typeof window !== 'undefined' && !!localStorage.getItem('checkAndPointToken')

  if (!perm || !loggedIn || canCurrent(perm)) return <>{children}</>

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Check and Point" />
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <ShieldAlert className="h-12 w-12 text-amber-500 mx-auto" />
        <h1 className="mt-4 text-xl font-semibold text-gray-900">No tenés acceso a esta sección</h1>
        <p className="mt-2 text-sm text-gray-500">Tu tipo de usuario no tiene permiso para usar esta pantalla.</p>
        <Link href="/bookings" className="mt-6 inline-flex px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Ir a Reservas
        </Link>
      </div>
    </div>
  )
}
