/**
 * Conversión entre los objetos que usa la UI y las filas de la base.
 *
 * Cada entidad declara qué campos son columnas y de qué tipo. Lo que la UI mande
 * y no esté declarado se guarda en la columna `extra` (Json) y se devuelve tal cual,
 * así nunca se pierden datos aunque la UI agregue campos nuevos.
 */

import { Prisma } from '@/generated/prisma'

export type Item = Record<string, unknown>

export interface FieldSpec {
  str?: string[] // String (obligatorio, default '')
  nstr?: string[] // String? (null si no viene)
  int?: string[] // Int
  float?: string[] // Float
  bool?: Record<string, boolean> // Boolean con default
  json?: Record<string, unknown> // Json con default
  date?: string[] // DateTime (default ahora)
  ndate?: string[] // DateTime?
}

export class BadItemError extends Error {}

const toStr = (v: unknown) => (v === null || v === undefined ? '' : String(v))
const toNStr = (v: unknown) => (v === null || v === undefined || v === '' ? null : String(v))
const toFloat = (v: unknown) => {
  const n = typeof v === 'number' ? v : parseFloat(String(v ?? ''))
  return Number.isFinite(n) ? n : 0
}
const toInt = (v: unknown) => Math.trunc(toFloat(v))
const toBool = (v: unknown, def: boolean) => (v === undefined || v === null ? def : v === true || v === 'true')
const toDate = (v: unknown) => {
  const d = v ? new Date(String(v)) : new Date()
  return isNaN(d.getTime()) ? new Date() : d
}
const toNDate = (v: unknown) => {
  if (!v) return null
  const d = new Date(String(v))
  return isNaN(d.getTime()) ? null : d
}

export function toBigId(v: unknown): bigint {
  const s = String(v ?? '')
  if (!/^-?\d+$/.test(s)) throw new BadItemError(`ID inválido: ${s}`)
  return BigInt(s)
}

function declaredKeys(spec: FieldSpec): Set<string> {
  return new Set([
    ...(spec.str || []),
    ...(spec.nstr || []),
    ...(spec.int || []),
    ...(spec.float || []),
    ...Object.keys(spec.bool || {}),
    ...Object.keys(spec.json || {}),
    ...(spec.date || []),
    ...(spec.ndate || []),
  ])
}

/** Objeto de la UI -> datos para Prisma (sin la clave primaria). */
export function toRow(item: Item, spec: FieldSpec, skip: string[] = []): Item {
  const row: Item = {}
  for (const k of spec.str || []) row[k] = toStr(item[k])
  for (const k of spec.nstr || []) row[k] = toNStr(item[k])
  for (const k of spec.int || []) row[k] = toInt(item[k])
  for (const k of spec.float || []) row[k] = toFloat(item[k])
  for (const [k, def] of Object.entries(spec.bool || {})) row[k] = toBool(item[k], def)
  for (const [k, def] of Object.entries(spec.json || {})) row[k] = item[k] ?? def
  for (const k of spec.date || []) row[k] = toDate(item[k])
  for (const k of spec.ndate || []) row[k] = toNDate(item[k])

  const known = declaredKeys(spec)
  const extra: Item = {}
  for (const [k, v] of Object.entries(item)) {
    if (!known.has(k) && !skip.includes(k) && v !== undefined) extra[k] = v
  }
  row.extra = Object.keys(extra).length ? extra : Prisma.DbNull
  return row
}

/** Fila de Prisma -> objeto de la UI. */
export function fromRow(row: Item, spec: FieldSpec): Item {
  const item: Item = { ...((row.extra as Item | null) || {}) }
  for (const k of declaredKeys(spec)) {
    const v = row[k]
    item[k] = v instanceof Date ? v.toISOString() : v
  }
  return item
}
