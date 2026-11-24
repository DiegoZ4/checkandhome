import { collectionHandlers } from '@/lib/server/http'
import { chargeCategories } from '@/lib/server/repositories'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const handlers = collectionHandlers(chargeCategories, { read: null, write: 'categories.edit' })
export const GET = handlers.GET
export const PATCH = handlers.PATCH
