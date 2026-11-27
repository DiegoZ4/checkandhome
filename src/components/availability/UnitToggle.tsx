'use client'

import type { Unit } from '@/lib/availability'

/** Selector de moneda para mostrar importes: USD o Pesos (ARS). */
export default function UnitToggle({ value, onChange, disabledArs = false }: {
  value: Unit
  onChange: (u: Unit) => void
  disabledArs?: boolean // sin cotización no se puede mostrar en pesos
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500">Moneda</span>
      <div className="inline-flex overflow-hidden rounded-md border border-gray-300" role="group" aria-label="Moneda de los importes">
        {(['USD', 'ARS'] as const).map(u => (
          <button
            key={u}
            type="button"
            onClick={() => onChange(u)}
            aria-pressed={value === u}
            disabled={u === 'ARS' && disabledArs}
            title={u === 'ARS' && disabledArs ? 'Sin cotización del dólar' : undefined}
            className={`px-3 py-1 text-xs font-medium disabled:cursor-not-allowed disabled:opacity-40 ${
              value === u ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {u === 'ARS' ? 'Pesos (ARS)' : 'USD'}
          </button>
        ))}
      </div>
    </div>
  )
}
