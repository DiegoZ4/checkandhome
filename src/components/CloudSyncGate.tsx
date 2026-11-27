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
  // Aviso cuando no se pudo descargar todo del servidor (la pantalla puede estar incompleta).
  const [syncWarning, setSyncWarning] = useState('')
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    installCloudSync()

    const onExpired = () => {
      alert('Tu sesión expiró. Volvé a iniciar sesión; los cambios sin guardar se subirán al ingresar.')
      router.push('/dashboard')
    }
    const onSyncError = () =>
      setSyncWarning('No se pudieron cargar algunos datos del servidor: esta pantalla puede estar incompleta. Avisá al administrador.')
    window.addEventListener('checkandpoint:session-expired', onExpired)
    window.addEventListener('checkandpoint:sync-error', onSyncError)

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
          } else if (r === 'offline') {
            setSyncWarning('No se pudo conectar con el servidor: se muestran los datos guardados en este navegador.')
          }
        })
        .catch((err) => console.error('[cloudSync] Error al descargar datos', err))
        .finally(() => setReady(true))
    }

    return () => {
      window.removeEventListener('checkandpoint:session-expired', onExpired)
      window.removeEventListener('checkandpoint:sync-error', onSyncError)
    }
  }, [router])

  // En cada cambio de página, refrescar en segundo plano (cambios de otros dispositivos).
  useEffect(() => {
    if (ready && localStorage.getItem(TOKEN_KEY)) {
      void pullFromServer().then(r => { if (r === 'ok') setSyncWarning(w => (w.startsWith('No se pudo conectar') ? '' : w)) })
    }
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

  return (
    <>
      {children}
      {syncWarning && (
        <div role="alert" className="fixed inset-x-0 bottom-0 z-50 flex items-start justify-center gap-3 bg-amber-100 px-4 py-3 text-sm text-amber-900 shadow-lg">
          <span>{syncWarning}</span>
          <button type="button" onClick={() => setSyncWarning('')} className="font-medium underline">Cerrar</button>
        </div>
      )}
    </>
  )
}
