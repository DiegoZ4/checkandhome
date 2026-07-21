'use client'

import { useState, useEffect } from 'react'
import { Users, ArrowLeft, Edit } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { getUserTypeName } from '../page'

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

const Field = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div>
    <p className="text-xs font-medium text-gray-500">{label}</p>
    <p className="mt-1 text-sm text-gray-900">{value || '-'}</p>
  </div>
)

export default function UserDetailPage() {
  const params = useParams()
  const id = Number(params.id)

  const [user, setUser] = useState<AppUser | null | undefined>(undefined)

  useEffect(() => {
    try {
      const users: AppUser[] = JSON.parse(localStorage.getItem('checkAndPointUsers') || '[]')
      setUser(users.find(u => u.id === id) || null)
    } catch {
      setUser(null)
    }
  }, [id])

  if (user === undefined) {
    return <div className="min-h-screen bg-gray-50" />
  }

  if (user === null) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-gray-600">No se encontró el usuario.</p>
          <Link href="/users" className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800">
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver a Usuarios
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) =>
    dateString ? new Date(dateString).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '-'

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/users" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Usuarios
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-indigo-600 mr-3" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{user.name} {user.lastName}</h1>
                <p className="mt-1 text-sm text-gray-500">
                  {getUserTypeName(user.userType)} ·{' '}
                  <span className={user.enabled ? 'text-green-600' : 'text-red-600'}>
                    {user.enabled ? 'Habilitado' : 'Deshabilitado'}
                  </span>
                </p>
              </div>
            </div>
            <Link
              href={`/users/new?id=${user.id}`}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Edit className="h-4 w-4 mr-2" />
              Editar
            </Link>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Username" value={user.username} />
              <Field label="Tipo de usuario" value={getUserTypeName(user.userType)} />
              <Field label="Nombre" value={user.name} />
              <Field label="Apellido" value={user.lastName} />
              <Field label="Teléfono" value={user.phone} />
              <Field label="Email" value={user.email} />
              <Field label="Fecha de creación" value={formatDate(user.createdAt)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
