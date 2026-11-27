import { getSetting, setSetting } from './repositories'

/**
 * Cotización vigente del sistema (pesos por dólar) para mostrar importes en ARS.
 * - mode 'oficial': promedio de compra y venta del dólar oficial (dolarapi.com), con caché
 *   de 30 minutos. Si la consulta falla se usa el último valor obtenido.
 * - mode 'manual': el valor que cargó el administrador.
 * Config en app_settings "exchangeRate" = { mode, manual }; último oficial en "_exchangeRateOficial".
 */

export type ExchangeRateMode = 'oficial' | 'manual'
export type ExchangeRateConfig = { mode: ExchangeRateMode; manual: number | null }
type Oficial = { compra: number; venta: number; updatedAt: string; fetchedAt: number }

export type ExchangeRate = {
  rate: number | null // pesos por dólar
  source: ExchangeRateMode
  mode: ExchangeRateMode
  manual: number | null
  oficial: { compra: number; venta: number; updatedAt: string } | null
}

const OFICIAL_URL = 'https://dolarapi.com/v1/dolares/oficial'
const CACHE_MS = 30 * 60 * 1000

let cache: Oficial | null = null

export async function getExchangeRateConfig(): Promise<ExchangeRateConfig> {
  const v = (await getSetting('exchangeRate')) as Partial<ExchangeRateConfig> | null
  const manual = typeof v?.manual === 'number' && v.manual > 0 ? v.manual : null
  return { mode: v?.mode === 'manual' && manual ? 'manual' : 'oficial', manual }
}

export async function setExchangeRateConfig(config: ExchangeRateConfig) {
  await setSetting('exchangeRate', config)
}

async function fetchOficial(): Promise<Oficial | null> {
  if (cache && Date.now() - cache.fetchedAt < CACHE_MS) return cache
  try {
    const res = await fetch(OFICIAL_URL, { signal: AbortSignal.timeout(5000), cache: 'no-store' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const j = await res.json()
    const compra = Number(j.compra)
    const venta = Number(j.venta)
    if (!(compra > 0 && venta > 0)) throw new Error('respuesta sin compra/venta')
    cache = { compra, venta, updatedAt: String(j.fechaActualizacion || new Date().toISOString()), fetchedAt: Date.now() }
    await setSetting('_exchangeRateOficial', cache)
    return cache
  } catch (err) {
    console.warn('[exchangeRate] No se pudo consultar el dólar oficial:', (err as Error).message)
    if (cache) return cache
    const stored = (await getSetting('_exchangeRateOficial')) as Oficial | null
    if (stored && stored.compra > 0 && stored.venta > 0) return (cache = stored)
    return null
  }
}

export async function getExchangeRate(): Promise<ExchangeRate> {
  const config = await getExchangeRateConfig()
  const oficial = await fetchOficial()
  const oficialInfo = oficial ? { compra: oficial.compra, venta: oficial.venta, updatedAt: oficial.updatedAt } : null
  if (config.mode === 'manual' && config.manual) {
    return { rate: config.manual, source: 'manual', mode: 'manual', manual: config.manual, oficial: oficialInfo }
  }
  return {
    rate: oficial ? Math.round(((oficial.compra + oficial.venta) / 2) * 100) / 100 : null,
    source: 'oficial',
    mode: 'oficial',
    manual: config.manual,
    oficial: oficialInfo,
  }
}
