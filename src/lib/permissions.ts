// Permisos por tipo de usuario. Compartido entre cliente (menú, botones, páginas) y
// servidor (las APIs rechazan con 403 lo que el tipo de usuario no puede hacer).

import { USER_TYPES } from './userTypes'

export type Permission =
  | 'properties.view' // ver propiedades (listado y ficha)
  | 'properties.edit' // crear / editar / eliminar propiedades, papelera, fotos
  | 'categories.edit' // Propiedades → Categorías (limpieza, servicio, mascotas)
  | 'bookings.view' // ver reservas
  | 'bookings.edit' // crear y editar reservas (incluye subir el video)
  | 'bookings.delete' // eliminar reservas
  | 'rates.view' // ver el calendario de disponibilidad y tarifas
  | 'rates.edit' // modificar el calendario, planes de tarifa y sincronización
  | 'users.manage' // usuarios
  | 'admin.manage' // gastos, inventario y configuración general

export const ALL_PERMISSIONS: Permission[] = [
  'properties.view', 'properties.edit', 'categories.edit',
  'bookings.view', 'bookings.edit', 'bookings.delete',
  'rates.view', 'rates.edit', 'users.manage', 'admin.manage',
]

/**
 * Permisos de cada tipo de usuario (ids de USER_TYPES).
 * Los tipos que todavía no tienen permisos definidos conservan acceso completo, como
 * hasta ahora; se restringen a medida que se especifica qué puede hacer cada uno.
 */
const ROLE_PERMISSIONS: Record<string, Permission[]> = {
  admin: ALL_PERMISSIONS,
  // Reservas: consulta todas las propiedades y su disponibilidad, y carga / edita reservas.
  reservas: ['properties.view', 'bookings.view', 'bookings.edit', 'rates.view'],
}

export function permissionsOf(userType: string | null | undefined): Permission[] {
  return (userType && ROLE_PERMISSIONS[userType]) || ALL_PERMISSIONS
}

export function can(userType: string | null | undefined, perm: Permission): boolean {
  return permissionsOf(userType).includes(perm)
}

// Nombre visible del rol de las cuentas demo / sesiones viejas -> id de tipo de usuario.
const ROLE_NAME_TO_TYPE: Record<string, string> = {
  administrador: 'admin',
  propietario: 'propietarios',
  huésped: 'huesped',
  ...Object.fromEntries(USER_TYPES.map(t => [t.name.toLowerCase(), t.id])),
}

/** Tipo de usuario de una sesión (las sesiones viejas sólo tienen el nombre del rol). */
export function userTypeOf(user: { type?: string | null; role?: string } | null | undefined): string | null {
  if (!user) return null
  if (user.type) return user.type
  return ROLE_NAME_TO_TYPE[(user.role || '').toLowerCase()] || null
}

// ---------- Páginas ----------

/** Permiso necesario para cada ruta (la primera regla que coincide). */
const ROUTE_RULES: { prefix: string; perm: Permission }[] = [
  { prefix: '/users', perm: 'users.manage' },
  { prefix: '/units/new', perm: 'properties.edit' },
  { prefix: '/units/trash', perm: 'properties.edit' },
  { prefix: '/units/categories', perm: 'categories.edit' },
  { prefix: '/units', perm: 'properties.view' },
  { prefix: '/rates/plans', perm: 'rates.edit' },
  { prefix: '/rates/sync', perm: 'rates.edit' },
  { prefix: '/rates/search', perm: 'rates.view' }, // buscador de disponibilidad (Reservas incluido)
  { prefix: '/rates', perm: 'rates.view' },
  { prefix: '/bookings/new', perm: 'bookings.edit' },
  { prefix: '/bookings', perm: 'bookings.view' },
  { prefix: '/expenses', perm: 'admin.manage' },
  { prefix: '/inventory', perm: 'admin.manage' },
  { prefix: '/settings', perm: 'admin.manage' },
]

export function permissionForPath(pathname: string): Permission | null {
  const rule = ROUTE_RULES.find(r => pathname === r.prefix || pathname.startsWith(r.prefix + '/'))
  return rule ? rule.perm : null
}

// ---------- Cliente ----------

/** Tipo de usuario de la sesión actual del navegador. */
export function currentUserType(): string | null {
  if (typeof window === 'undefined') return null
  try {
    return userTypeOf(JSON.parse(localStorage.getItem('checkAndPointUser') || 'null'))
  } catch {
    return null
  }
}

/** ¿La sesión actual tiene el permiso? (Las páginas sólo se renderizan en el navegador.) */
export function canCurrent(perm: Permission): boolean {
  return can(currentUserType(), perm)
}
