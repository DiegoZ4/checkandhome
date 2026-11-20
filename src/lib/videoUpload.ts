'use client'

import { TOKEN_KEY } from './cloudSync'

export const MAX_VIDEO_MB = 500

// Algunos navegadores no informan el tipo de ciertos videos (.mkv, .mov en Windows...).
const EXT_TYPES: Record<string, string> = {
  mp4: 'video/mp4', m4v: 'video/mp4', mov: 'video/quicktime', webm: 'video/webm',
  mkv: 'video/x-matroska', avi: 'video/x-msvideo', '3gp': 'video/3gpp', mpeg: 'video/mpeg', mpg: 'video/mpeg',
}

function videoType(file: File): string {
  if (file.type.startsWith('video/')) return file.type
  return EXT_TYPES[file.name.split('.').pop()?.toLowerCase() || ''] || ''
}

/**
 * Sube un video al servidor y devuelve su URL (/api/videos/<id>).
 * Usa XMLHttpRequest para poder informar el progreso (fetch no lo da al subir).
 */
export function uploadVideo(file: File, onProgress?: (percent: number) => void): Promise<string> {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (!token) return reject(new Error('La sesión expiró, volvé a iniciar sesión'))
    const type = videoType(file)
    if (!type) return reject(new Error('El archivo no es un video'))
    if (file.size > MAX_VIDEO_MB * 1024 * 1024) return reject(new Error(`El video supera los ${MAX_VIDEO_MB} MB`))

    const xhr = new XMLHttpRequest()
    xhr.open('POST', '/api/videos')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', type)
    xhr.setRequestHeader('X-File-Name', encodeURIComponent(file.name))
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) onProgress(Math.round((e.loaded / e.total) * 100))
    }
    xhr.onload = () => {
      let json: { url?: string; error?: string } = {}
      try {
        json = JSON.parse(xhr.responseText)
      } catch {
        // respuesta no JSON (p. ej. error del proxy)
      }
      if (xhr.status >= 200 && xhr.status < 300 && json.url) resolve(json.url)
      else reject(new Error(json.error || `Error ${xhr.status} al subir el video`))
    }
    xhr.onerror = () => reject(new Error('Se cortó la conexión al subir el video'))
    xhr.send(file)
  })
}
