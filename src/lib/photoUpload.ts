'use client'

import { TOKEN_KEY } from './cloudSync'

const MAX_DIMENSION = 1600
const QUALITY = 0.85

/** Achica la imagen en el navegador (menos datos para subir). Si falla, devuelve el archivo original. */
async function compress(file: File): Promise<Blob> {
  if (file.type === 'image/gif') return file
  try {
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, MAX_DIMENSION / Math.max(bitmap.width, bitmap.height))
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)
    canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    bitmap.close()
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', QUALITY))
    return blob && blob.size < file.size ? blob : file
  } catch {
    return file
  }
}

/** Sube una foto a la base de datos y devuelve su URL (/api/photos/<id>). */
export async function uploadPhoto(file: File): Promise<string> {
  const token = localStorage.getItem(TOKEN_KEY)
  if (!token) throw new Error('La sesión expiró, volvé a iniciar sesión')
  const body = await compress(file)
  const res = await fetch('/api/photos', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': body.type || file.type },
    body,
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(json.error || `Error ${res.status} al subir ${file.name}`)
  return json.url as string
}

/** Sube varias fotos; devuelve las URLs de las que se subieron bien y avisa de las que fallaron. */
export async function uploadPhotos(files: FileList | File[]): Promise<string[]> {
  const results = await Promise.allSettled(Array.from(files).map(uploadPhoto))
  const failed = results.filter((r): r is PromiseRejectedResult => r.status === 'rejected')
  if (failed.length) alert(`No se pudieron subir ${failed.length} foto(s):\n${failed.map((f) => f.reason?.message).join('\n')}`)
  return results.filter((r): r is PromiseFulfilledResult<string> => r.status === 'fulfilled').map((r) => r.value)
}
