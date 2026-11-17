import { getPhoto } from '@/lib/server/photos'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// Pública a propósito: un <img> no manda el token. El id es aleatorio de 128 bits.
export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const photo = await getPhoto(id)
  if (!photo) return new Response('No encontrada', { status: 404 })
  return new Response(new Uint8Array(photo.data), {
    headers: {
      'Content-Type': photo.mimeType,
      'Content-Length': String(photo.size),
      // El contenido de un id nunca cambia: se puede cachear para siempre.
      'Cache-Control': 'public, max-age=31536000, immutable',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}
