import { collectionHandlers } from '@/lib/server/http'
import { users } from '@/lib/server/repositories'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const handlers = collectionHandlers(users, { read: 'users.manage', write: 'users.manage' })
export const GET = handlers.GET
export const PATCH = handlers.PATCH
