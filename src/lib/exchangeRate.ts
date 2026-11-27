'use client'

import { TOKEN_KEY } from './cloudSync'
import { loadRates } from './rates'
import { loadReservations } from './reservations'
import { loadChargeCategories, loadPetCharge } from './chargeCategories'
import type { AvailabilityData } from './availability'

export type ExchangeRateInfo = {
  rate: number | null
  source: 'oficial' | 'manual'
  mode: 'oficial' | 'manual'
  manual: number | null
  oficial: { compra: number; venta: number; updatedAt: string } | null
}

/** Cotización vigente del sistema (ver /api/exchange-rate). */
export async function fetchExchangeRate(): Promise<ExchangeRateInfo | null> {
  const token = localStorage.getItem(TOKEN_KEY)
  if (!token) return null
  try {
    const res = await fetch('/api/exchange-rate', { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' })
    return res.ok ? await res.json() : null
  } catch {
    return null
  }
}

/** Guarda la cotización (sólo administración): oficial o valor manual. */
export async function saveExchangeRate(mode: 'oficial' | 'manual', manual: number | null): Promise<ExchangeRateInfo> {
  const token = localStorage.getItem(TOKEN_KEY)
  const res = await fetch('/api/exchange-rate', {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode, manual }),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(json.error || `Error ${res.status}`)
  return json
}

/** Datos para quoteStay (availability.ts), leídos una vez para todas las vistas. */
export function loadAvailabilityData(usdArs: number | null): AvailabilityData {
  return {
    rates: loadRates(),
    reservations: loadReservations(),
    categories: loadChargeCategories(),
    petCharge: loadPetCharge(),
    usdArs,
  }
}
