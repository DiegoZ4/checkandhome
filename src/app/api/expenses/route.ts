import { collectionHandlers } from '@/lib/server/http'
import { expenses } from '@/lib/server/repositories'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const handlers = collectionHandlers(expenses, { read: 'admin.manage', write: 'admin.manage' })
export const GET = handlers.GET
export const PATCH = handlers.PATCH
