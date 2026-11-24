import { collectionHandlers } from '@/lib/server/http'
import { ratePlans } from '@/lib/server/repositories'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const handlers = collectionHandlers(ratePlans, { read: 'rates.view', write: 'rates.edit' })
export const GET = handlers.GET
export const PATCH = handlers.PATCH
