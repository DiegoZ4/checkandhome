import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { Readable, Transform } from 'node:stream'
import { pipeline } from 'node:stream/promises'
import { Prisma } from '@/generated/prisma'
import { prisma } from '@/lib/prisma'

/**
 * Videos de reservas. La tabla `videos` guarda los datos (nombre, tipo, tamaño, reserva);
 * el archivo va en <UPLOADS_DIR>/videos/<id> (por defecto ./storage/videos). Un video pesa
 * cientos de MB: en SQLite habría que leerlo entero en memoria y no se podría servir por
 * partes (Range) para adelantarlo. La reserva guarda la URL `/api/videos/<id>`.
 * Los ids son aleatorios (128 bits) porque el <video> se sirve sin token.
 */

export const VIDEO_URL_PREFIX = '/api/videos/'
export const MAX_VIDEO_BYTES = 500 * 1024 * 1024
const ORPHAN_TTL_MS = 24 * 60 * 60 * 1000
const ID_RE = /^[0-9a-f]{32}$/

export class VideoTooLargeError extends Error {}

function videosDir(): string {
  return path.resolve(process.cwd(), process.env.UPLOADS_DIR || 'storage', 'videos')
}

function videoPath(id: string): string {
  return path.join(videosDir(), id)
}

/** Guarda el video leyendo el body de a partes (nunca entero en memoria). */
export async function saveVideo(
  body: ReadableStream<Uint8Array>,
  mimeType: string,
  fileName: string,
): Promise<string> {
  const id = crypto.randomBytes(16).toString('hex')
  await fs.promises.mkdir(videosDir(), { recursive: true })
  const tmp = videoPath(id) + '.part'
  let size = 0
  const limit = new Transform({
    transform(chunk: Buffer, _enc, cb) {
      size += chunk.length
      if (size > MAX_VIDEO_BYTES) cb(new VideoTooLargeError('El video supera el máximo permitido'))
      else cb(null, chunk)
    },
  })
  try {
    await pipeline(Readable.fromWeb(body as import('node:stream/web').ReadableStream), limit, fs.createWriteStream(tmp))
    if (!size) throw new Error('Archivo vacío')
    await fs.promises.rename(tmp, videoPath(id))
    await prisma.video.create({ data: { id, fileName: fileName.slice(0, 255), mimeType, size } })
  } catch (err) {
    await fs.promises.rm(tmp, { force: true })
    await fs.promises.rm(videoPath(id), { force: true })
    throw err
  }
  return VIDEO_URL_PREFIX + id
}

export async function getVideo(id: string) {
  if (!ID_RE.test(id)) return null
  const row = await prisma.video.findUnique({ where: { id } })
  return row ? { ...row, path: videoPath(id) } : null
}

function videoIdFromUrl(url: unknown): string | null {
  if (typeof url !== 'string' || !url.startsWith(VIDEO_URL_PREFIX)) return null
  const id = url.slice(VIDEO_URL_PREFIX.length)
  return ID_RE.test(id) ? id : null
}

async function removeVideos(where: Prisma.VideoWhereInput) {
  const rows = await prisma.video.findMany({ where, select: { id: true } })
  if (!rows.length) return
  const ids = rows.map((r) => r.id)
  await prisma.video.deleteMany({ where: { id: { in: ids } } })
  await Promise.all(ids.map((id) => fs.promises.rm(videoPath(id), { force: true })))
}

/** Asocia el video a la reserva y borra los videos que la reserva ya no usa. */
export async function linkVideo(reservationId: string, videoUrl: unknown) {
  const id = videoIdFromUrl(videoUrl)
  if (id) await prisma.video.updateMany({ where: { id }, data: { reservationId } })
  await removeVideos({ reservationId, ...(id ? { id: { not: id } } : {}) })
}

export async function deleteVideosOf(reservationIds: string[]) {
  if (reservationIds.length) await removeVideos({ reservationId: { in: reservationIds } })
}

/** Borra videos subidos que nunca se asociaron a una reserva (formulario abandonado). */
export async function cleanupOrphanVideos() {
  await removeVideos({ reservationId: null, createdAt: { lt: new Date(Date.now() - ORPHAN_TTL_MS) } })
}
