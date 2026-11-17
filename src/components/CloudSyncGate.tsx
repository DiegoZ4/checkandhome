'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Building2 } from 'lucide-react'
import { installCloudSync, pullFromServer, TOKEN_KEY, USER_KEY } from '@/lib/cloudSync'

/**
 * Antes de mostrar cualquier página, descarga los datos guardados en el servidor
 * a localStorage (si hay sesión). Así las páginas, que leen localStorage al montar,
 * ven la misma información en cualquier navegador/computadora.
 */
export default function CloudSyncGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    installCloudSync()

    const onExpired = () => {
      alert('Tu sesión expiró. Volvé a iniciar sesión; los cambios sin guardar se subirán al ingresar.')
      router.push('/dashboard')
    }
    window.addEventListener('checkandpoint:session-expired', onExpired)

    const token = localStorage.getItem(TOKEN_KEY)
    if (!token) {
      setReady(true)
    } else {
      pullFromServer(token)
        .then((r) => {
          if (r === 'unauthorized') {
            // Token viejo (anterior a la sincronización) o vencido: pedir login de nuevo.
            localStorage.removeItem(TOKEN_KEY)
            localStorage.removeItem(USER_KEY)
          }
        })
        .catch((err) => console.error('[cloudSync] Error al descargar datos', err))
        .finally(() => setReady(true))
    }

    return () => window.removeEventListener('checkandpoint:session-expired', onExpired)
  }, [router])

  // En cada cambio de página, refrescar en segundo plano (cambios de otros dispositivos).
  useEffect(() => {
    if (ready && localStorage.getItem(TOKEN_KEY)) void pullFromServer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  if (!ready) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Building2 className="h-12 w-12 text-indigo-600 mx-auto animate-pulse" />
          <p className="mt-2 text-gray-600">Cargando datos...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
