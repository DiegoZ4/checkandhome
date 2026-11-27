'use client'

import { useEffect, useState } from 'react'
import { DollarSign } from 'lucide-react'
import { canCurrent } from '@/lib/permissions'
import { fetchExchangeRate, saveExchangeRate, type ExchangeRateInfo } from '@/lib/exchangeRate'

/**
 * Cotización vigente del sistema (USD -> ARS) que usa el buscador para mostrar pesos.
 * La administración puede cambiar entre el dólar oficial (promedio compra/venta) y un
 * valor manual. Avisa al padre la cotización con onRate.
 */
export default function ExchangeRatePanel({ onRate }: { onRate?: (rate: number | null) => void }) {
  const [info, setInfo] = useState<ExchangeRateInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [mode, setMode] = useState<'oficial' | 'manual'>('oficial')
  const [manual, setManual] = useState('')
  const [error, setError] = useState('')
  const canEdit = canCurrent('admin.manage')

  useEffect(() => {
    let alive = true
    fetchExchangeRate().then(r => {
      if (!alive) return
      setInfo(r)
      setLoading(false)
      onRate?.(r?.rate ?? null)
    })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const startEdit = () => {
    setMode(info?.mode || 'oficial')
    setManual(info?.manual ? String(info.manual) : '')
    setError('')
    setEditing(true)
  }

  const save = async () => {
    try {
      const value = parseFloat(manual)
      const r = await saveExchangeRate(mode, value > 0 ? value : null)
      setInfo(r)
      onRate?.(r.rate)
      setEditing(false)
    } catch (err) {
      setError((err as Error).message)
    }
  }

  const fmt = (v: number) => v.toLocaleString('es-AR', { maximumFractionDigits: 2 })

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm">
      <DollarSign className="h-4 w-4 text-indigo-600" />
      {loading ? (
        <span className="text-gray-500">Consultando cotización…</span>
      ) : info?.rate ? (
        <span className="text-gray-700">
          Cotización: <b>USD 1 = $ {fmt(info.rate)}</b>{' '}
          <span className="text-gray-500">
            {info.source === 'manual'
              ? '(valor manual)'
              : `(dólar oficial, promedio compra $ ${fmt(info.oficial!.compra)} / venta $ ${fmt(info.oficial!.venta)})`}
          </span>
        </span>
      ) : (
        <span className="text-amber-700">No se pudo obtener la cotización del dólar: los importes en pesos no están disponibles.</span>
      )}

      {canEdit && !editing && (
        <button type="button" onClick={startEdit} className="text-indigo-600 hover:text-indigo-800 font-medium">
          Cambiar
        </button>
      )}

      {editing && (
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <select value={mode} onChange={e => setMode(e.target.value as 'oficial' | 'manual')}
            className="rounded-md border-gray-300 text-sm text-black">
            <option value="oficial">Dólar oficial (promedio compra/venta)</option>
            <option value="manual">Valor manual</option>
          </select>
          {mode === 'manual' && (
            <div className="flex items-center gap-1">
              <span className="text-gray-500">USD 1 = $</span>
              <input type="number" min="0" step="0.01" value={manual} onChange={e => setManual(e.target.value)}
                className="w-28 rounded-md border-gray-300 text-sm text-black" placeholder="0" />
            </div>
          )}
          <button type="button" onClick={save} className="px-3 py-1.5 rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Guardar</button>
          <button type="button" onClick={() => setEditing(false)} className="px-3 py-1.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">Cancelar</button>
          {error && <span className="text-red-600">{error}</span>}
        </div>
      )}
    </div>
  )
}
