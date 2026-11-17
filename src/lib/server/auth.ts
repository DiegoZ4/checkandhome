import crypto from 'node:crypto'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'
import { getUserTypeName } from '@/lib/userTypes'
import { getSetting, setSetting, verifyPassword } from './repositories'

export type SessionUser = {
  email: string
  role: string
  name?: string
}

const TOKEN_TTL = '24h'

// Cuentas demo (las mismas que antes estaban en el cliente)
const DEMO_ACCOUNTS: Record<string, { password: string; role: string }> = {
  'admin@demo.com': { password: 'password123', role: 'Administrador' },
  'owner@demo.com': { password: 'password123', role: 'Propietario' },
  'guest@demo.com': { password: 'password123', role: 'Huésped' },
}

let cachedSecret: string | null = null

/** Secreto para firmar tokens: AUTH_SECRET / NEXTAUTH_SECRET, o uno generado y guardado en la base. */
async function getAuthSecret(): Promise<string> {
  const fromEnv = process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET
  if (fromEnv) return fromEnv
  if (cachedSecret) return cachedSecret
  const stored = await getSetting('_authSecret')
  if (typeof stored === 'string' && stored) return (cachedSecret = stored)
  const generated = crypto.randomBytes(48).toString('hex')
  await setSetting('_authSecret', generated)
  return (cachedSecret = generated)
}

export type LoginResult =
  | { ok: true; user: SessionUser; token: string }
  | { ok: false; status: number; error: string }

export async function login(loginIdRaw: string, password: string): Promise<LoginResult> {
  const loginId = loginIdRaw.trim().toLowerCase()
  let user: SessionUser | null = null

  // 1) Usuarios de la tabla users (por email o username)
  const candidates = await prisma.user.findMany()
  const match = candidates.find(
    (u) =>
      (u.email.toLowerCase() === loginId || u.username.toLowerCase() === loginId) &&
      verifyPassword(password, u.passwordHash),
  )
  if (match) {
    if (!match.enabled) {
      return { ok: false, status: 403, error: 'El usuario está deshabilitado. Contacta al administrador.' }
    }
    const fullName = `${match.name} ${match.lastName}`.trim()
    user = {
      email: match.email,
      role: getUserTypeName(match.userType),
      name: fullName || match.username || match.email,
    }
  }

  // 2) Cuentas demo
  if (!user) {
    const demo = DEMO_ACCOUNTS[loginId]
    if (demo && demo.password === password) user = { email: loginId, role: demo.role }
  }

  if (!user) return { ok: false, status: 401, error: 'Email o contraseña incorrectos' }

  const token = jwt.sign(user, await getAuthSecret(), { expiresIn: TOKEN_TTL })
  return { ok: true, user, token }
}

/** Devuelve el usuario del header Authorization: Bearer <token>, o null si no es válido. */
export async function getSessionUser(req: Request): Promise<SessionUser | null> {
  const header = req.headers.get('authorization') || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : ''
  if (!token) return null
  try {
    const payload = jwt.verify(token, await getAuthSecret()) as SessionUser
    return { email: payload.email, role: payload.role, name: payload.name }
  } catch {
    return null
  }
}
