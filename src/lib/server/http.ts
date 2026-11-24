import { NextResponse } from 'next/server'
import type { Permission } from '@/lib/permissions'
import { requirePermission } from './auth'
import { BadItemError, Item } from './mapping'
import { Collection } from './repositories'

function handleError(err: unknown) {
  if (err instanceof BadItemError) return NextResponse.json({ error: err.message }, { status: 400 })
  console.error('[api]', err)
  return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
}

/** Permiso necesario para leer, crear/editar y borrar en una colección (null = cualquier usuario con sesión). */
export type CollectionPermissions = {
  read: Permission | null
  write: Permission | null
  delete?: Permission | null // por defecto, el mismo que write
}

/**
 * Handlers REST para una colección:
 *   GET   -> { items: [...] }
 *   PATCH -> body { upsert?: Item[], delete?: string[] }  (crea/actualiza/borra en una transacción)
 * Sin sesión responde 401; sin permiso, 403.
 */
export function collectionHandlers(collection: Collection, perms: CollectionPermissions) {
  return {
    async GET(req: Request) {
      const auth = await requirePermission(req, perms.read)
      if (auth.error) return auth.error
      try {
        return NextResponse.json({ items: await collection.list() }, { headers: { 'Cache-Control': 'no-store' } })
      } catch (err) {
        return handleError(err)
      }
    },
    async PATCH(req: Request) {
      const auth = await requirePermission(req, null)
      if (auth.error) return auth.error
      let body: { upsert?: Item[]; delete?: unknown[] }
      try {
        body = await req.json()
      } catch {
        return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
      }
      const upsert = Array.isArray(body.upsert) ? body.upsert.filter((x) => x && typeof x === 'object') : []
      const del = Array.isArray(body.delete) ? body.delete.map(String) : []

      // Cada parte del cambio exige su permiso.
      const needed = [
        upsert.length ? perms.write : null,
        del.length ? (perms.delete === undefined ? perms.write : perms.delete) : null,
      ]
      for (const perm of needed) {
        if (!perm) continue
        const check = await requirePermission(req, perm)
        if (check.error) return check.error
      }

      try {
        await collection.apply({ upsert, delete: del })
        return NextResponse.json({ ok: true })
      } catch (err) {
        return handleError(err)
      }
    },
  }
}
