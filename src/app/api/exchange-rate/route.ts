import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/server/auth'
import { getExchangeRate, setExchangeRateConfig } from '@/lib/server/exchangeRate'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

/** GET -> cotización vigente (cualquier usuario con sesión). */
export async function GET(req: Request) {
  const auth = await requirePermission(req, null)
  if (auth.error) return auth.error
  return NextResponse.json(await getExchangeRate(), { headers: { 'Cache-Control': 'no-store' } })
}

/** PUT { mode: 'oficial' | 'manual', manual?: number } -> sólo administración. */
export async function PUT(req: Request) {
  const auth = await requirePermission(req, 'admin.manage')
  if (auth.error) return auth.error
  let body: { mode?: string; manual?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
  }
  const manual = Number(body.manual)
  const hasManual = Number.isFinite(manual) && manual > 0
  if (body.mode === 'manual' && !hasManual) {
    return NextResponse.json({ error: 'Ingresá un valor manual mayor a cero' }, { status: 400 })
  }
  await setExchangeRateConfig({ mode: body.mode === 'manual' ? 'manual' : 'oficial', manual: hasManual ? manual : null })
  return NextResponse.json(await getExchangeRate())
}
