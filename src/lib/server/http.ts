import { NextResponse } from 'next/server'
import { getSessionUser } from './auth'
import { BadItemError, Item } from './mapping'
import { Collection } from './repositories'

const unauthorized = () => NextResponse.json({ error: 'No autorizado' }, { status: 401 })

function handleError(err: unknown) {
  if (err instanceof BadItemError) return NextResponse.json({ error: err.message }, { status: 400 })
  console.error('[api]', err)
  return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
}

/**
 * Handlers REST para una colección:
 *   GET   -> { items: [...] }
 *   PATCH -> body { upsert?: Item[], delete?: string[] }  (crea/actualiza/borra en una transacción)
 */
export function collectionHandlers(collection: Collection) {
  return {
    async GET(req: Request) {
      if (!(await getSessionUser(req))) return unauthorized()
      try {
        return NextResponse.json({ items: await collection.list() }, { headers: { 'Cache-Control': 'no-store' } })
      } catch (err) {
        return handleError(err)
      }
    },
    async PATCH(req: Request) {
      if (!(await getSessionUser(req))) return unauthorized()
      let body: { upsert?: Item[]; delete?: unknown[] }
      try {
        body = await req.json()
      } catch {
        return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
      }
      const upsert = Array.isArray(body.upsert) ? body.upsert.filter((x) => x && typeof x === 'object') : []
      const del = Array.isArray(body.delete) ? body.delete.map(String) : []
      try {
        await collection.apply({ upsert, delete: del })
        return NextResponse.json({ ok: true })
      } catch (err) {
        return handleError(err)
      }
    },
  }
}
