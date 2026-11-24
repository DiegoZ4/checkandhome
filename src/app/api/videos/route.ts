import { NextResponse } from 'next/server'
import { requirePermission } from '@/lib/server/auth'
import { cleanupOrphanVideos, MAX_VIDEO_BYTES, saveVideo, VideoTooLargeError } from '@/lib/server/videos'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

/**
 * Sube un video. Body: los bytes del video, con Content-Type video/*.
 * Header opcional X-File-Name (nombre original, codificado con encodeURIComponent).
 * Responde { url: "/api/videos/<id>" }.
 */
export async function POST(req: Request) {
  const auth = await requirePermission(req, 'bookings.edit')
  if (auth.error) return auth.error

  const mimeType = (req.headers.get('content-type') || '').split(';')[0].trim().toLowerCase()
  if (!/^video\/[a-z0-9.+-]+$/.test(mimeType)) {
    return NextResponse.json({ error: 'El archivo no es un video' }, { status: 415 })
  }
  const declared = Number(req.headers.get('content-length') || 0)
  const maxMb = MAX_VIDEO_BYTES / 1024 / 1024
  if (declared > MAX_VIDEO_BYTES) {
    return NextResponse.json({ error: `El video supera los ${maxMb} MB` }, { status: 413 })
  }
  if (!req.body) return NextResponse.json({ error: 'Archivo vacío' }, { status: 400 })

  let fileName = 'video'
  try {
    fileName = decodeURIComponent(req.headers.get('x-file-name') || '') || 'video'
  } catch {
    // nombre mal codificado: se usa el genérico
  }

  try {
    const url = await saveVideo(req.body, mimeType, fileName)
    void cleanupOrphanVideos().catch((err) => console.error('[videos] limpieza', err))
    return NextResponse.json({ url })
  } catch (err) {
    if (err instanceof VideoTooLargeError) {
      return NextResponse.json({ error: `El video supera los ${maxMb} MB` }, { status: 413 })
    }
    console.error('[videos] upload', err)
    return NextResponse.json({ error: 'No se pudo guardar el video' }, { status: 500 })
  }
}
