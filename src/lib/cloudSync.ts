'use client'

/**
 * Sincronización entre la UI y la base de datos (API en /api/*).
 *
 * La base de datos es la fuente de verdad. Las páginas todavía leen/escriben
 * localStorage, que acá funciona como caché local:
 *
 *  - Cada vez que una página guarda una colección (localStorage.setItem), se
 *    calcula la diferencia con lo anterior y se envía a la API sólo lo que cambió
 *    (registros nuevos/modificados y borrados, por id). Así dos personas que editan
 *    registros distintos no se pisan.
 *  - Al abrir la app / iniciar sesión / cambiar de página se descarga lo último de
 *    la base y se actualiza la caché.
 *  - Los cambios que todavía no llegaron al servidor (sin internet, sesión vencida)
 *    quedan en una cola persistente y se reenvían; al descargar, se aplican encima
 *    de lo que viene del servidor para no perderlos.
 *
 * Para migrar una página a la API directamente, alcanza con usar fetch('/api/...').
 */

type Item = Record<string, unknown>

type Kind = 'array' | 'rates' | 'value'

interface CollectionConfig {
  key: string // clave de localStorage que usan las páginas
  kind: Kind
  endpoint: string
}

export const COLLECTIONS: CollectionConfig[] = [
  { key: 'checkAndPointUnits', kind: 'array', endpoint: '/api/properties' },
  { key: 'checkAndPointBookings', kind: 'array', endpoint: '/api/reservations' },
  { key: 'checkAndPointExpenses', kind: 'array', endpoint: '/api/expenses' },
  { key: 'checkAndPointInventory', kind: 'array', endpoint: '/api/inventory' },
  { key: 'checkAndPointUsers', kind: 'array', endpoint: '/api/users' },
  { key: 'checkAndPointRatePlans', kind: 'array', endpoint: '/api/rate-plans' },
  { key: 'checkAndPointChargeCategories', kind: 'array', endpoint: '/api/charge-categories' },
  { key: 'checkAndPointPetCharges', kind: 'value', endpoint: '/api/settings/petCharges' },
  { key: 'checkAndPointRates', kind: 'rates', endpoint: '/api/rates' },
  { key: 'checkAndPointUserSettings', kind: 'value', endpoint: '/api/settings/userSettings' },
  { key: 'checkAndPointChannelConfig', kind: 'value', endpoint: '/api/settings/channelConfig' },
  { key: 'checkAndPointSettings', kind: 'value', endpoint: '/api/settings/general' },
]

const byKey = new Map(COLLECTIONS.map((c) => [c.key, c]))

export const TOKEN_KEY = 'checkAndPointToken'
export const USER_KEY = 'checkAndPointUser'
const QUEUE_KEY = 'checkAndPointSyncQueue'
// Marca que este navegador ya se sincronizó al menos una vez (ver migración en pullFromServer).
const INIT_KEY = 'checkAndPointSyncInit'

const DEBOUNCE_MS = 300
const RETRY_MS = 5000
const KEEPALIVE_LIMIT = 60_000 // los navegadores limitan keepalive a ~64KB

interface Op {
  key: string
  upsert?: Item[]
  delete?: string[]
  value?: unknown
}

let installed = false
let suppress = false
let origSetItem: Storage['setItem']
let origRemoveItem: Storage['removeItem']
let origGetItem: Storage['getItem']
let flushTimer: ReturnType<typeof setTimeout> | null = null
let flushing = false
let writeCounter = 0

// ---------- conversión colección <-> ítems con id ----------

function parse(raw: string | null): unknown {
  if (raw === null) return null
  try {
    return JSON.parse(raw)
  } catch {
    return undefined
  }
}

/** Convierte el valor guardado por las páginas en un mapa id -> ítem. */
function toItems(kind: Kind, value: unknown): Map<string, Item> {
  const out = new Map<string, Item>()
  if (kind === 'array' && Array.isArray(value)) {
    for (const it of value) if (it && typeof it === 'object' && 'id' in it) out.set(String(it.id), it as Item)
  } else if (kind === 'rates' && value && typeof value === 'object') {
    for (const [propertyId, days] of Object.entries(value as Record<string, unknown>)) {
      if (!days || typeof days !== 'object') continue
      for (const [date, entry] of Object.entries(days as Record<string, Item>)) {
        out.set(`${propertyId}|${date}`, { ...entry, propertyId, date })
      }
    }
  }
  return out
}

/** Inverso de toItems: arma el valor con la forma que esperan las páginas. */
function fromItems(kind: Kind, items: Iterable<Item>): unknown {
  if (kind === 'rates') {
    const map: Record<string, Record<string, Item>> = {}
    for (const it of items) {
      const { propertyId, date, ...entry } = it
      const pid = String(propertyId)
      ;(map[pid] ||= {})[String(date)] = entry
    }
    return map
  }
  return [...items]
}

function itemsFromServer(kind: Kind, list: Item[]): Map<string, Item> {
  const out = new Map<string, Item>()
  for (const it of list) out.set(kind === 'rates' ? `${it.propertyId}|${it.date}` : String(it.id), it)
  return out
}

/** Calcula qué cambió entre dos versiones de una colección. */
function diff(kind: Kind, before: unknown, after: unknown): Op | null {
  const a = toItems(kind, before)
  const b = toItems(kind, after)
  const upsert: Item[] = []
  const del: string[] = []
  for (const [id, item] of b) {
    const prev = a.get(id)
    if (!prev || JSON.stringify(prev) !== JSON.stringify(item)) upsert.push(item)
  }
  for (const id of a.keys()) if (!b.has(id)) del.push(id)
  if (!upsert.length && !del.length) return null
  return { key: '', upsert, delete: del }
}

// ---------- cola persistente ----------

function readQueue(): Op[] {
  try {
    return JSON.parse(origGetItem.call(localStorage, QUEUE_KEY) || '[]')
  } catch {
    return []
  }
}

function writeQueue(q: Op[]) {
  try {
    if (q.length) origSetItem.call(localStorage, QUEUE_KEY, JSON.stringify(q))
    else origRemoveItem.call(localStorage, QUEUE_KEY)
  } catch (err) {
    console.error('[cloudSync] No se pudo guardar la cola de cambios', err)
  }
}

function enqueue(op: Op) {
  const q = readQueue()
  // Para configuraciones sólo importa el último valor.
  const filtered = op.value !== undefined ? q.filter((o) => o.key !== op.key) : q
  filtered.push(op)
  writeQueue(filtered)
  schedule()
}

function schedule(delay = DEBOUNCE_MS) {
  if (flushTimer) clearTimeout(flushTimer)
  flushTimer = setTimeout(() => {
    flushTimer = null
    void flush()
  }, delay)
}

// ---------- envío ----------

function getToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY)
  } catch {
    return null
  }
}

// Motivo del último cambio rechazado por el servidor (sin permiso, reserva superpuesta, ...).
let lastRejection = ''

async function sendOp(op: Op, token: string, keepalive: boolean): Promise<'ok' | 'unauthorized' | 'retry' | 'rejected'> {
  const cfg = byKey.get(op.key)
  if (!cfg) return 'rejected'
  const isValue = cfg.kind === 'value'
  const body = JSON.stringify(isValue ? { value: op.value } : { upsert: op.upsert || [], delete: op.delete || [] })
  try {
    const res = await fetch(cfg.endpoint, {
      method: isValue ? 'PUT' : 'PATCH',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body,
      keepalive: keepalive && body.length < KEEPALIVE_LIMIT,
    })
    if (res.status === 401) return 'unauthorized'
    if (res.status >= 400 && res.status < 500) {
      const err = await res.json().catch(() => ({}))
      console.error(`[cloudSync] El servidor rechazó un cambio en ${cfg.endpoint}:`, err.error || res.status, op)
      lastRejection = err.error || ''
      return 'rejected'
    }
    return res.ok ? 'ok' : 'retry'
  } catch {
    return 'retry'
  }
}

export async function flush(keepalive = false): Promise<void> {
  if (flushing) {
    schedule()
    return
  }
  const token = getToken()
  if (!token) return

  flushing = true
  let rejected = false
  try {
    // Se envían en orden; cada op se saca de la cola recién cuando el servidor la confirma.
    for (;;) {
      const q = readQueue()
      if (!q.length) return
      const op = q[0]
      const r = await sendOp(op, token, keepalive)
      if (r === 'unauthorized') {
        handleUnauthorized()
        return
      }
      if (r === 'retry') {
        console.warn('[cloudSync] No se pudo guardar en el servidor, reintentando…')
        schedule(RETRY_MS)
        return
      }
      if (r === 'rejected') {
        alert(`No se pudo guardar el cambio: ${lastRejection || 'el servidor lo rechazó (datos inválidos).'}`)
        rejected = true
      }
      const now = readQueue()
      if (now.length && JSON.stringify(now[0]) === JSON.stringify(op)) writeQueue(now.slice(1))
    }
  } finally {
    flushing = false
    // Si el servidor rechazó algo, se vuelve a descargar para que la pantalla muestre
    // los datos guardados (los anteriores al cambio rechazado).
    if (rejected) void pullFromServer().then(() => window.dispatchEvent(new Event('checkandpoint:data-restored')))
  }
}

function handleUnauthorized() {
  // Sesión vencida o inválida. Los cambios pendientes quedan en la cola y se envían al volver a entrar.
  try {
    origRemoveItem.call(localStorage, TOKEN_KEY)
    origRemoveItem.call(localStorage, USER_KEY)
  } catch {
    // ignore
  }
  window.dispatchEvent(new Event('checkandpoint:session-expired'))
}

// ---------- descarga ----------

export type PullResult = 'ok' | 'unauthorized' | 'offline'

let quotaWarned = false

function setLocalSilently(key: string, value: string) {
  suppress = true
  try {
    localStorage.setItem(key, value)
  } catch (err) {
    // Caché llena (localStorage ~5MB, p. ej. muchas fotos en base64). Los datos están
    // seguros en la base; sólo esta caché local queda desactualizada.
    console.error(`[cloudSync] No entra ${key} en la caché local del navegador`, err)
    if (!quotaWarned) {
      quotaWarned = true
      alert('Los datos son demasiado grandes para la memoria del navegador (probablemente por las fotos). Están guardados en el servidor, pero esta pantalla puede no mostrarlos completos.')
    }
  } finally {
    suppress = false
  }
}

/**
 * Descarga todas las colecciones de la base y actualiza la caché local.
 * Los cambios pendientes de subir se aplican encima de lo descargado.
 * La primera vez que un navegador se sincroniza, sube los registros que tenía
 * sólo en localStorage (datos cargados antes de que existiera la base).
 */
export async function pullFromServer(token = getToken()): Promise<PullResult> {
  if (!token) return 'unauthorized'
  const startedAt = writeCounter

  // Cada colección se descarga por separado: si una falla (p. ej. error del servidor),
  // las demás se cargan igual y se avisa, en vez de dejar la pantalla sin datos.
  let responses: { cfg: CollectionConfig; data: { items?: Item[]; value?: unknown } }[]
  const failed: string[] = []
  try {
    responses = await Promise.all(
      COLLECTIONS.map(async (cfg) => {
        let res: Response
        try {
          res = await fetch(cfg.endpoint, { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' })
        } catch {
          throw new Error('offline') // sin conexión: no se descarga nada
        }
        if (res.status === 401) throw new Error('unauthorized')
        if (res.status === 403) return null // el tipo de usuario no puede ver esta colección
        if (!res.ok) {
          console.error(`[cloudSync] No se pudo descargar ${cfg.endpoint}: HTTP ${res.status}`)
          failed.push(cfg.endpoint)
          return null
        }
        return { cfg, data: await res.json() }
      }),
    ).then((list) => list.filter((x): x is NonNullable<typeof x> => x !== null))
  } catch (err) {
    return (err as Error).message === 'unauthorized' ? 'unauthorized' : 'offline'
  }
  if (failed.length) {
    window.dispatchEvent(new CustomEvent('checkandpoint:sync-error', { detail: failed }))
  }

  // Si una página guardó algo mientras se descargaba, se vuelve a intentar después.
  if (writeCounter !== startedAt) {
    schedule()
    setTimeout(() => void pullFromServer(), 1000)
    return 'ok'
  }

  const firstSync = origGetItem.call(localStorage, INIT_KEY) !== '1'
  const queue = readQueue()

  for (const { cfg, data } of responses) {
    const localRaw = localStorage.getItem(cfg.key)
    const pending = queue.filter((o) => o.key === cfg.key)

    if (cfg.kind === 'value') {
      if (pending.length) continue // gana el cambio local pendiente
      if (data.value !== null && data.value !== undefined) {
        const serverRaw = JSON.stringify(data.value)
        if (serverRaw !== localRaw) setLocalSilently(cfg.key, serverRaw)
      } else if (firstSync && localRaw !== null) {
        const value = parse(localRaw)
        if (value !== undefined && value !== null) enqueue({ key: cfg.key, value })
      }
      continue
    }

    const items = itemsFromServer(cfg.kind, data.items || [])

    if (firstSync) {
      const localOnly = [...toItems(cfg.kind, parse(localRaw))].filter(([id]) => !items.has(id))
      if (localOnly.length) {
        const upsert = localOnly.map(([, it]) => it)
        enqueue({ key: cfg.key, upsert })
        pending.push({ key: cfg.key, upsert })
      }
    }

    for (const op of pending) {
      for (const it of op.upsert || []) {
        items.set(cfg.kind === 'rates' ? `${it.propertyId}|${it.date}` : String(it.id), it)
      }
      for (const id of op.delete || []) items.delete(id)
    }

    const merged = JSON.stringify(fromItems(cfg.kind, items.values()))
    if (merged !== localRaw) setLocalSilently(cfg.key, merged)
  }

  if (firstSync) origSetItem.call(localStorage, INIT_KEY, '1')
  if (readQueue().length) schedule(0)
  return 'ok'
}

// ---------- instalación ----------

export function installCloudSync() {
  if (installed || typeof window === 'undefined') return
  installed = true

  const proto = Storage.prototype
  origSetItem = proto.setItem
  origRemoveItem = proto.removeItem
  origGetItem = proto.getItem

  const track = (storage: Storage, key: string, write: () => void) => {
    const cfg = !suppress && storage === window.localStorage ? byKey.get(key) : undefined
    if (!cfg) return write()
    const before = origGetItem.call(storage, key)
    write()
    const after = origGetItem.call(storage, key)
    if (before === after) return
    writeCounter++
    if (cfg.kind === 'value') {
      const value = parse(after)
      if (value !== undefined && value !== null) enqueue({ key, value })
      return
    }
    const op = diff(cfg.kind, parse(before), parse(after))
    if (op) enqueue({ ...op, key })
  }

  proto.setItem = function (this: Storage, key: string, value: string) {
    track(this, key, () => origSetItem.call(this, key, value))
  }
  proto.removeItem = function (this: Storage, key: string) {
    track(this, key, () => origRemoveItem.call(this, key))
  }

  // Al cerrar/recargar la pestaña, enviar lo que quede pendiente.
  const flushNow = () => {
    if (flushTimer) {
      clearTimeout(flushTimer)
      flushTimer = null
    }
    void flush(true)
  }
  window.addEventListener('pagehide', flushNow)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushNow()
    else if (getToken()) void pullFromServer()
  })
  window.addEventListener('online', () => schedule(0))
}

/** Decodifica el payload de un JWT (base64url) sin verificar la firma. */
export function decodeTokenPayload(token: string): { exp?: number } | null {
  try {
    const part = token.split('.')[1] || ''
    const b64 = part.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(part.length / 4) * 4, '=')
    return JSON.parse(atob(b64))
  } catch {
    return null
  }
}
