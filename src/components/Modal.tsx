'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

/** Ventana flotante simple. Se cierra con la X, con Escape o tocando el fondo. */
export default function Modal({
  title,
  description,
  onClose,
  children,
  wide = false,
  headerExtra,
}: {
  title: string
  description?: string
  onClose: () => void
  children: React.ReactNode
  wide?: boolean // ventana ancha (p. ej. Más filtros)
  headerExtra?: React.ReactNode // controles junto al título (p. ej. Moneda)
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 px-4"
      onMouseDown={e => e.target === e.currentTarget && onClose()}
    >
      <div role="dialog" aria-modal="true" aria-label={title}
        className={`w-full ${wide ? 'max-w-3xl' : 'max-w-md'} max-h-[90vh] overflow-y-auto rounded-lg bg-white shadow-xl`}>
        <div className="flex items-start justify-between gap-4 px-5 pt-5">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
          </div>
          <div className="flex items-center gap-4">
            {headerExtra}
            <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Cerrar">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="px-5 pb-5 pt-4">{children}</div>
      </div>
    </div>
  )
}
