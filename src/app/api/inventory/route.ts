import { collectionHandlers } from '@/lib/server/http'
import { inventory } from '@/lib/server/repositories'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const handlers = collectionHandlers(inventory)
export const GET = handlers.GET
export const PATCH = handlers.PATCH
