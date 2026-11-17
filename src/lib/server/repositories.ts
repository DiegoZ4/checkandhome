import crypto from 'node:crypto'
import { prisma } from '@/lib/prisma'
import { BadItemError, FieldSpec, fromRow, Item, toBigId, toRow } from './mapping'
import { deletePhotosOf, linkPhotos, normalizePhotoList } from './photos'

/**
 * Repositorios por entidad. Todos exponen la misma interfaz:
 *  - list():   todos los registros, con la forma que usa la UI
 *  - apply():  upsert de algunos registros + borrado por id, en una transacción
 */
export interface Collection {
  list(): Promise<Item[]>
  apply(ops: { upsert?: Item[]; delete?: string[] }): Promise<void>
}

// Delegados de Prisma tratados de forma genérica (cada repositorio define sus campos).
/* eslint-disable @typescript-eslint/no-explicit-any */
type Delegate = {
  findMany(args?: any): Promise<any[]>
  upsert(args: any): any
  deleteMany(args: any): any
}
/* eslint-enable @typescript-eslint/no-explicit-any */

function numericIdCollection(model: Delegate, spec: FieldSpec): Collection {
  return {
    async list() {
      const rows = await model.findMany({ orderBy: [{ createdAt: 'asc' }, { id: 'asc' }] })
      return rows.map((r) => ({ id: Number(r.id), ...fromRow(r, spec) }))
    },
    async apply({ upsert = [], delete: del = [] }) {
      const writes = upsert.map((item) => {
        const id = toBigId(item.id)
        const data = toRow(item, spec, ['id'])
        return model.upsert({ where: { id }, create: { id, ...data }, update: data })
      })
      const ids = del.map(toBigId)
      if (ids.length) writes.push(model.deleteMany({ where: { id: { in: ids } } }))
      await prisma.$transaction(writes)
    },
  }
}

// ---------- Propiedades ----------

const propertyRows = numericIdCollection(prisma.property as unknown as Delegate, {
  str: [
    'category', 'name', 'zona', 'address', 'number', 'floor', 'apartment', 'description',
    'bedrooms', 'bathrooms', 'maxGuests', 'propertyType', 'ambientes',
    'checkInFrom', 'checkInTo', 'checkOutFrom', 'checkOutTo',
    'mtsDelMar', 'mascotasCantidad', 'chargesCurrency',
    'wifiNetwork', 'wifiPassword', 'keysCount', 'keyCode', 'bookingId', 'airbnbId',
  ],
  json: { beds: {}, amenities: {}, charges: {}, bank: {}, photos: [] },
  bool: { electronicKey: false, enabled: true, eliminado: false },
  date: ['createdAt'],
  ndate: ['deletedAt'],
})

// Las fotos en base64 se pasan a la tabla `photos` (la propiedad guarda sólo URLs),
// se asocian a la propiedad y se borran las que ya no usa. Al borrar una propiedad
// definitivamente se borran sus fotos.
export const properties: Collection = {
  list: () => propertyRows.list(),
  async apply({ upsert = [], delete: del = [] }) {
    const normalized: Item[] = []
    for (const item of upsert) {
      toBigId(item.id) // valida antes de guardar fotos
      normalized.push({ ...item, photos: await normalizePhotoList(item.photos, String(item.id)) })
    }
    await propertyRows.apply({ upsert: normalized, delete: del })
    for (const item of normalized) await linkPhotos(String(item.id), item.photos as string[])
    await deletePhotosOf(del)
  },
}

// ---------- Reservas ----------

export const reservations = numericIdCollection(prisma.reservation as unknown as Delegate, {
  str: [
    'status', 'propertyId', 'propertyName', 'checkInDate', 'checkOutDate', 'checkInTime', 'checkOutTime',
    'firstName', 'lastName', 'phone', 'docType', 'dni', 'attachmentName', 'paymentProofName', 'videoName',
    'observaciones', 'currency', 'channel', 'condition', 'cocheraId',
  ],
  int: ['guests', 'nights', 'mascotasQty'],
  float: [
    'valorNoches', 'mascotasValue', 'cocheraValue', 'descuento', 'totalNeto', 'cargos', 'totalBruto',
    'senaPct', 'senaValue', 'restante',
  ],
  bool: {
    hasAttachment: false, dniException: false, senaException: false, hasPaymentProof: false,
    hasVideo: false, mascotasEnabled: false, cocheraEnabled: false,
  },
  date: ['createdAt'],
})

// ---------- Gastos ----------

export const expenses = numericIdCollection(prisma.expense as unknown as Delegate, {
  str: ['description', 'date', 'category', 'unit'],
  nstr: ['receipt'],
  float: ['amount'],
  date: ['createdAt'],
})

// ---------- Inventario ----------

export const inventory = numericIdCollection(prisma.inventoryItem as unknown as Delegate, {
  str: ['name', 'category', 'unit', 'location'],
  nstr: ['supplier', 'lastRestocked'],
  float: ['currentStock', 'minStock', 'maxStock', 'cost'],
  date: ['createdAt'],
})

// ---------- Planes de tarifa ----------

const ratePlanSpec: FieldSpec = {
  str: ['name', 'description', 'priceVariation', 'priceVariationType', 'weekendSurcharge'],
  nstr: ['color'],
  int: ['minNights'],
  bool: { hasMinNights: false, hasPerDayNights: false, hasStayDiscount: false },
  json: { perDayNights: {}, stayDiscounts: [], proximityDiscounts: [] },
  date: ['createdAt'],
}

export const ratePlans: Collection = {
  async list() {
    const rows = await prisma.ratePlan.findMany({ orderBy: [{ createdAt: 'asc' }, { id: 'asc' }] })
    return rows.map((r) => ({ id: r.id, ...fromRow(r as unknown as Item, ratePlanSpec) }))
  },
  async apply({ upsert = [], delete: del = [] }) {
    const writes = upsert.map((item) => {
      const id = String(item.id ?? '')
      if (!id) throw new BadItemError('Plan sin id')
      const data = toRow(item, ratePlanSpec, ['id']) as Parameters<typeof prisma.ratePlan.create>[0]['data']
      return prisma.ratePlan.upsert({ where: { id }, create: { ...data, id }, update: data })
    })
    await prisma.$transaction([...writes, prisma.ratePlan.deleteMany({ where: { id: { in: del } } })])
  },
}

// ---------- Calendario de tarifas ----------
// Cada ítem es { propertyId, date, price, available, status?, closedUntil?, planIds }.
// Su id en el protocolo es "propertyId|date".

const rateSpec: FieldSpec = {
  float: ['price'],
  bool: { available: true },
  nstr: ['status', 'closedUntil'],
  json: { planIds: [] },
}

function splitRateId(id: string) {
  const i = id.lastIndexOf('|')
  if (i <= 0) throw new BadItemError(`ID de tarifa inválido: ${id}`)
  return { propertyId: id.slice(0, i), date: id.slice(i + 1) }
}

export const rates: Collection = {
  async list() {
    const rows = await prisma.rateEntry.findMany({ orderBy: [{ propertyId: 'asc' }, { date: 'asc' }] })
    return rows.map((r) => ({ propertyId: r.propertyId, date: r.date, ...fromRow(r as unknown as Item, rateSpec) }))
  },
  async apply({ upsert = [], delete: del = [] }) {
    const writes = upsert.map((item) => {
      const propertyId = String(item.propertyId ?? '')
      const date = String(item.date ?? '')
      if (!propertyId || !/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new BadItemError('Tarifa sin propiedad/fecha válida')
      const data = toRow(item, rateSpec, ['propertyId', 'date']) as Parameters<typeof prisma.rateEntry.create>[0]['data']
      return prisma.rateEntry.upsert({
        where: { propertyId_date: { propertyId, date } },
        create: { ...data, propertyId, date },
        update: data,
      })
    })
    const deletes = del.map((id) => prisma.rateEntry.deleteMany({ where: splitRateId(id) }))
    await prisma.$transaction([...writes, ...deletes])
  },
}

// ---------- Usuarios ----------
// La contraseña se guarda hasheada (scrypt). Nunca se devuelve: la UI recibe password: ''.
// Si un upsert trae password vacío, se conserva la contraseña actual.

const userSpec: FieldSpec = {
  str: ['userType', 'username', 'name', 'lastName', 'phone', 'email'],
  bool: { enabled: true },
  date: ['createdAt'],
}

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.scryptSync(password, salt, 64).toString('hex')
  return `scrypt$${salt}$${hash}`
}

export function verifyPassword(password: string, stored: string): boolean {
  const [scheme, salt, hash] = stored.split('$')
  if (scheme !== 'scrypt' || !salt || !hash) return false
  const candidate = crypto.scryptSync(password, salt, 64)
  const expected = Buffer.from(hash, 'hex')
  return expected.length === candidate.length && crypto.timingSafeEqual(candidate, expected)
}

export const users: Collection = {
  async list() {
    const rows = await prisma.user.findMany({ orderBy: [{ createdAt: 'asc' }, { id: 'asc' }] })
    return rows.map((r) => ({ id: Number(r.id), ...fromRow(r as unknown as Item, userSpec), password: '' }))
  },
  async apply({ upsert = [], delete: del = [] }) {
    const writes = []
    for (const item of upsert) {
      const id = toBigId(item.id)
      const data = toRow(item, userSpec, ['id', 'password', 'confirmPassword']) as Parameters<
        typeof prisma.user.create
      >[0]['data']
      if (!data.email) throw new BadItemError('Usuario sin email')
      const password = typeof item.password === 'string' ? item.password : ''
      if (password) {
        const passwordHash = hashPassword(password)
        writes.push(prisma.user.upsert({ where: { id }, create: { ...data, id, passwordHash }, update: { ...data, passwordHash } }))
      } else {
        const exists = await prisma.user.findUnique({ where: { id }, select: { id: true } })
        if (!exists) throw new BadItemError(`El usuario ${data.email} necesita contraseña`)
        writes.push(prisma.user.update({ where: { id }, data }))
      }
    }
    if (del.length) writes.push(prisma.user.deleteMany({ where: { id: { in: del.map(toBigId) } } }))
    await prisma.$transaction(writes)
  },
}

// ---------- Configuración ----------

export const SETTING_KEYS = ['userSettings', 'channelConfig', 'general'] as const
export type SettingKey = (typeof SETTING_KEYS)[number]

export async function getSetting(key: string): Promise<unknown | null> {
  const row = await prisma.appSetting.findUnique({ where: { key } })
  return row ? row.value : null
}

export async function setSetting(key: string, value: unknown): Promise<void> {
  const json = value as Parameters<typeof prisma.appSetting.create>[0]['data']['value']
  await prisma.appSetting.upsert({ where: { key }, create: { key, value: json }, update: { value: json } })
}

export const COLLECTIONS = {
  properties,
  reservations,
  expenses,
  inventory,
  'rate-plans': ratePlans,
  rates,
  users,
} satisfies Record<string, Collection>
