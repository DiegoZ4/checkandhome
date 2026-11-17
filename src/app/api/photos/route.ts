import { NextResponse } from 'next/server'
import { getSessionUser } from '@/lib/server/auth'
import { ALLOWED_TYPES, cleanupOrphanPhotos, MAX_UPLOAD_BYTES, savePhoto } from '@/lib/server/photos'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

/**
 * Sube una foto. Body: los bytes de la imagen, con Content-Type image/jpeg|png|webp|gif.
 * Responde { url: "/api/photos/<id>" }. El servidor la achica (máx. 1600px) y recomprime.
 */
export async function POST(req: Request) {
  if (!(await getSessionUser(req))) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const mimeType = (req.headers.get('content-type') || '').split(';')[0].trim().toLowerCase()
  if (!ALLOWED_TYPES.includes(mimeType)) {
    return NextResponse.json({ error: 'Formato no permitido (usar JPG, PNG, WEBP o GIF)' }, { status: 415 })
  }
  const data = Buffer.from(await req.arrayBuffer())
  if (!data.length) return NextResponse.json({ error: 'Archivo vacío' }, { status: 400 })
  if (data.length > MAX_UPLOAD_BYTES) return NextResponse.json({ error: 'La foto supera los 15 MB' }, { status: 413 })

  try {
    const url = await savePhoto(data, mimeType)
    void cleanupOrphanPhotos().catch((err) => console.error('[photos] limpieza', err))
    return NextResponse.json({ url })
  } catch (err) {
    console.error('[photos] upload', err)
    return NextResponse.json({ error: 'No se pudo guardar la foto' }, { status: 500 })
  }
}
