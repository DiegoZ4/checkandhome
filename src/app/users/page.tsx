'use client'

import { useState, useEffect } from 'react'
import { Users, Plus, Search, Edit, Trash2, Eye } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

interface AppUser {
  id: number
  userType: string
  username: string
  name: string
  lastName: string
  phone: string
  email: string
  enabled: boolean
  createdAt: string
}

// Tipos de usuario disponibles (según especificación)
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

const getUserTypeColor = (typeId: string) => {
  switch (typeId) {
    case 'admin': return 'bg-purple-100 text-purple-800'
    case 'reservas': return 'bg-blue-100 text-blue-800'
    case 'propietarios': return 'bg-green-100 text-green-800'
    case 'checkin': return 'bg-indigo-100 text-indigo-800'
    case 'huesped': return 'bg-gray-100 text-gray-800'
    case 'limpieza': return 'bg-yellow-100 text-yellow-800'
    case 'mantenimiento': return 'bg-orange-100 text-orange-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function UsersPage() {
  const [users, setUsers] = useState<AppUser[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const loadUsers = () => {
      try {
        const storedUsers = JSON.parse(localStorage.getItem('checkAndPointUsers') || '[]')
        setUsers(storedUsers)
      } catch (error) {
        console.error('Error loading users:', error)
        setUsers([])
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  const deleteUser = (userId: number) => {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      const updatedUsers = users.filter(user => user.id !== userId)
      setUsers(updatedUsers)
      localStorage.setItem('checkAndPointUsers', JSON.stringify(updatedUsers))
    }
  }

  const toggleEnabled = (userId: number) => {
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...user, enabled: !user.enabled } : user
    )
    setUsers(updatedUsers)
    localStorage.setItem('checkAndPointUsers', JSON.stringify(updatedUsers))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  const filteredUsers = users.filter(user => {
    const term = searchTerm.toLowerCase()
    return (
      user.name.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      user.username.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      getUserTypeName(user.userType).toLowerCase().includes(term)
    )
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Users className="h-12 w-12 text-indigo-600 mx-auto animate-pulse" />
          <p className="mt-2 text-gray-600">Cargando usuarios...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-indigo-600 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Usuarios</h1>
              <p className="mt-1 text-sm text-gray-500">
                Gestiona los usuarios y sus permisos de acceso
              </p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              href="/users/new"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Agregar Usuario
            </Link>
          </div>
        </div>

        {/* Buscador */}
        <div className="mb-6 max-w-md">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Buscador
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              placeholder="Buscar por nombre, usuario, email o tipo..."
            />
          </div>
        </div>

        {/* Tabla de Usuarios */}
        {filteredUsers.length === 0 ? (
          <div className="bg-white shadow rounded-lg">
            <div className="text-center py-12">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                {users.length === 0 ? 'No hay usuarios registrados' : 'No se encontraron resultados'}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {users.length === 0
                  ? 'Comienza agregando un nuevo usuario al sistema.'
                  : 'Prueba con otros términos de búsqueda.'}
              </p>
              {users.length === 0 && (
                <div className="mt-6">
                  <Link
                    href="/users/new"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar Usuario
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo de Usuario</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre de Usuario</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de creación</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getUserTypeColor(user.userType)}`}>
                          {getUserTypeName(user.userType)}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.username}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{user.name}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{user.lastName}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{user.phone}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{user.email}</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <button
                          onClick={() => toggleEnabled(user.id)}
                          className={`px-2 py-1 text-xs font-medium rounded-full cursor-pointer ${
                            user.enabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {user.enabled ? 'Habilitado' : 'Deshabilitado'}
                        </button>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(user.createdAt)}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-3">
                          <Link href={`/users/${user.id}`} className="text-indigo-600 hover:text-indigo-900" title="Ver">
                            <Eye className="h-4 w-4" />
                          </Link>
                          <Link href={`/users/new?id=${user.id}`} className="text-gray-600 hover:text-gray-900" title="Editar">
                            <Edit className="h-4 w-4" />
                          </Link>
                          <button
                            onClick={() => deleteUser(user.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Eliminar"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
