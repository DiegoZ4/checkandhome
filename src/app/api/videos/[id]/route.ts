import fs from 'node:fs'
import { Readable } from 'node:stream'
import { getVideo } from '@/lib/server/videos'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

/**
 * Pública a propósito: un <video> no manda el token. El id es aleatorio de 128 bits.
 * Soporta Range (206) para que el reproductor pueda adelantar sin bajar todo.
 * ?download=1 lo baja como archivo con su nombre original.
 */
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const video = await getVideo(id)
  if (!video) return new Response('No encontrado', { status: 404 })

  let size: number
  try {
    size = (await fs.promises.stat(video.path)).size
  } catch {
    return new Response('No encontrado', { status: 404 })
  }

  const download = new URL(req.url).searchParams.has('download')
  const headers: Record<string, string> = {
    'Content-Type': video.mimeType,
    'Accept-Ranges': 'bytes',
    // no-transform: que el proxy (Apache) no lo comprima; rompería los pedidos por partes.
    'Cache-Control': 'public, max-age=31536000, immutable, no-transform',
    'X-Content-Type-Options': 'nosniff',
    'Content-Disposition': `${download ? 'attachment' : 'inline'}; filename*=UTF-8''${encodeURIComponent(video.fileName)}`,
  }

  let start = 0
  let end = size - 1
  let status = 200
  const range = req.headers.get('range')
  if (range) {
    const m = /^bytes=(\d*)-(\d*)$/.exec(range.trim())
    if (m && (m[1] || m[2])) {
      if (m[1]) {
        start = Number(m[1])
        if (m[2]) end = Math.min(Number(m[2]), size - 1)
      } else {
        start = Math.max(0, size - Number(m[2])) // bytes=-N: los últimos N
      }
      if (start > end || start >= size) {
        return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } })
      }
      status = 206
      headers['Content-Range'] = `bytes ${start}-${end}/${size}`
    }
  }
  headers['Content-Length'] = String(end - start + 1)

  if (req.method === 'HEAD') return new Response(null, { status, headers })
  const stream = Readable.toWeb(fs.createReadStream(video.path, { start, end })) as ReadableStream
  return new Response(stream, { status, headers })
}

export const HEAD = GET
