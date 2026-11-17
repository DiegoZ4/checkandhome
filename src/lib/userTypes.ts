// Tipos de usuario disponibles (según especificación).
// Compartido entre cliente y servidor (login en /api/auth/login).
export const USER_TYPES = [
  { id: 'admin', name: 'Admin', description: 'Tiene acceso a todas las funciones' },
  { id: 'reservas', name: 'Reservas', description: 'Tiene acceso solo a reservas' },
  { id: 'propietarios', name: 'Propietarios', description: 'Tiene acceso solo al calendario de su propiedad' },
  { id: 'checkin', name: 'Check in', description: 'Gestiona los check-in y check-out' },
  { id: 'huesped', name: 'Huésped', description: 'Acceso de huésped' },
  { id: 'limpieza', name: 'Limpieza', description: 'Gestiona tareas de limpieza' },
  { id: 'mantenimiento', name: 'Mantenimiento', description: 'Gestiona tareas de mantenimiento' },
]

export function getUserTypeName(typeId: string) {
  const type = USER_TYPES.find(t => t.id === typeId)
  return type ? type.name : typeId
}
