import { NextResponse } from 'next/server'
import { getSessionUser } from '@/lib/server/auth'
import { getSetting, setSetting, SETTING_KEYS } from '@/lib/server/repositories'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

type Ctx = { params: Promise<{ key: string }> }

async function resolveKey(ctx: Ctx) {
  const { key } = await ctx.params
  return (SETTING_KEYS as readonly string[]).includes(key) ? key : null
}

/** GET -> { value } (null si nunca se guardó) */
export async function GET(req: Request, ctx: Ctx) {
  if (!(await getSessionUser(req))) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  const key = await resolveKey(ctx)
  if (!key) return NextResponse.json({ error: 'Configuración inexistente' }, { status: 404 })
  return NextResponse.json({ value: await getSetting(key) }, { headers: { 'Cache-Control': 'no-store' } })
}

/** PUT body { value } */
export async function PUT(req: Request, ctx: Ctx) {
  if (!(await getSessionUser(req))) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  const key = await resolveKey(ctx)
  if (!key) return NextResponse.json({ error: 'Configuración inexistente' }, { status: 404 })
  let body: { value?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
  }
  if (body.value === undefined || body.value === null) {
    return NextResponse.json({ error: 'Falta value' }, { status: 400 })
  }
  await setSetting(key, body.value)
  return NextResponse.json({ ok: true })
}
