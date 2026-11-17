import crypto from 'node:crypto'
import { prisma } from '@/lib/prisma'

/**
 * Fotos guardadas en la tabla `photos`. Las propiedades sólo guardan la URL
 * `/api/photos/<id>`. Los ids son aleatorios (128 bits) porque la imagen se sirve
 * sin token (un <img> no puede mandar el header Authorization).
 */

export const PHOTO_URL_PREFIX = '/api/photos/'
export const MAX_UPLOAD_BYTES = 15 * 1024 * 1024
export const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

const MAX_DIMENSION = 1600
const ORPHAN_TTL_MS = 24 * 60 * 60 * 1000

type Processed = { data: Buffer; mimeType: string; width: number | null; height: number | null }

/** Reduce y recomprime con sharp. Si sharp no está disponible, guarda la imagen tal cual. */
async function processImage(input: Buffer, mimeType: string): Promise<Processed> {
  if (mimeType === 'image/gif') return { data: input, mimeType, width: null, height: null }
  try {
    const sharp = (await import('sharp')).default
    const { data, info } = await sharp(input)
      .rotate() // respeta la orientación EXIF de las fotos de celular
      .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer({ resolveWithObject: true })
    // Si la recompresión no achica (ya venía optimizada), se queda con la original.
    if (data.length >= input.length && mimeType === 'image/jpeg') {
      return { data: input, mimeType, width: info.width, height: info.height }
    }
    return { data, mimeType: 'image/jpeg', width: info.width, height: info.height }
  } catch (err) {
    console.warn('[photos] No se pudo procesar con sharp, se guarda original:', (err as Error).message)
    return { data: input, mimeType, width: null, height: null }
  }
}

export async function savePhoto(input: Buffer, mimeType: string, propertyId: string | null = null): Promise<string> {
  const p = await processImage(input, mimeType)
  const id = crypto.randomBytes(16).toString('hex')
  await prisma.photo.create({
    data: {
      id,
      propertyId,
      mimeType: p.mimeType,
      size: p.data.length,
      width: p.width,
      height: p.height,
      data: new Uint8Array(p.data),
    },
  })
  return PHOTO_URL_PREFIX + id
}

export async function getPhoto(id: string) {
  if (!/^[0-9a-f]{32}$/.test(id)) return null
  return prisma.photo.findUnique({ where: { id } })
}

function photoIdFromUrl(url: string): string | null {
  return url.startsWith(PHOTO_URL_PREFIX) ? url.slice(PHOTO_URL_PREFIX.length) : null
}

/**
 * Normaliza la lista de fotos de una propiedad antes de guardarla:
 * las que vienen en base64 (data:image/...;base64, datos viejos) se pasan a la tabla
 * `photos` y se reemplazan por su URL.
 */
export async function normalizePhotoList(photos: unknown, propertyId: string): Promise<string[]> {
  if (!Array.isArray(photos)) return []
  const out: string[] = []
  for (const p of photos) {
    if (typeof p !== 'string' || !p) continue
    const m = /^data:(image\/[a-z+.-]+);base64,([\s\S]*)$/.exec(p)
    if (m) {
      const mime = ALLOWED_TYPES.includes(m[1]) ? m[1] : 'image/jpeg'
      out.push(await savePhoto(Buffer.from(m[2], 'base64'), mime, propertyId))
    } else {
      out.push(p)
    }
  }
  return out
}

/** Asocia las fotos a la propiedad y borra las que la propiedad ya no usa. */
export async function linkPhotos(propertyId: string, photos: string[]) {
  const ids = photos.map(photoIdFromUrl).filter((x): x is string => !!x)
  await prisma.$transaction([
    prisma.photo.updateMany({ where: { id: { in: ids } }, data: { propertyId } }),
    prisma.photo.deleteMany({ where: { propertyId, id: { notIn: ids } } }),
  ])
}

export async function deletePhotosOf(propertyIds: string[]) {
  if (propertyIds.length) await prisma.photo.deleteMany({ where: { propertyId: { in: propertyIds } } })
}

/** Borra fotos subidas que nunca se asociaron a una propiedad (formulario abandonado). */
export async function cleanupOrphanPhotos() {
  await prisma.photo.deleteMany({
    where: { propertyId: null, createdAt: { lt: new Date(Date.now() - ORPHAN_TTL_MS) } },
  })
}
