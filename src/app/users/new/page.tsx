'use client'

import { Suspense, useState, useEffect } from 'react'
import { Users, User, Mail, Phone, Lock, ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { USER_TYPES } from '../page'

function NewUserForm() {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [successMessage, setSuccessMessage] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const editIdParam = searchParams.get('id')

  const [userData, setUserData] = useState({
    userType: '',
    name: '',
    lastName: '',
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    enabled: true
  })

  // Modo edición: si hay ?id=, precargamos los datos del usuario existente.
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingCreatedAt, setEditingCreatedAt] = useState('')

  useEffect(() => {
    if (!editIdParam) return
    try {
      const existingUsers = JSON.parse(localStorage.getItem('checkAndPointUsers') || '[]')
      const found = existingUsers.find((u: { id: number }) => u.id === Number(editIdParam))
      if (!found) return

      setEditingId(found.id)
      setEditingCreatedAt(found.createdAt)
      setUserData({
        userType: found.userType,
        name: found.name,
        lastName: found.lastName,
        username: found.username,
        phone: found.phone,
        email: found.email,
        password: found.password,
        confirmPassword: found.password,
        enabled: found.enabled,
      })
    } catch (error) {
      console.error('Error loading user to edit:', error)
    }
  }, [editIdParam])

  const selectedType = USER_TYPES.find(t => t.id === userData.userType)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setUserData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!userData.userType) {
      newErrors.userType = 'Selecciona un tipo de usuario'
    }

    if (!userData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio'
    }

    if (!userData.lastName.trim()) {
      newErrors.lastName = 'El apellido es obligatorio'
    }

    if (!userData.username.trim()) {
      newErrors.username = 'El nombre de usuario es obligatorio'
    }

    if (!userData.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      newErrors.email = 'El email no es válido'
    }

    if (!userData.password) {
      newErrors.password = 'La contraseña es obligatoria'
    } else if (userData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres'
    }

    if (userData.password !== userData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      const existingUsers = JSON.parse(localStorage.getItem('checkAndPointUsers') || '[]')

      // Validar email único (ignorando al propio usuario cuando se está editando)
      if (existingUsers.some((u: { id: number; email: string }) =>
        u.id !== editingId && u.email.toLowerCase() === userData.email.toLowerCase()
      )) {
        setErrors({ email: 'Ya existe un usuario con este email' })
        setLoading(false)
        return
      }

      const userRecord = {
        id: editingId ?? Date.now(),
        userType: userData.userType,
        name: userData.name.trim(),
        lastName: userData.lastName.trim(),
        username: userData.username.trim(),
        phone: userData.phone.trim(),
        email: userData.email.trim(),
        password: userData.password, // Nota: demo; en producción debe hashearse en el backend
        enabled: userData.enabled,
        createdAt: editingId ? editingCreatedAt : new Date().toISOString()
      }

      const updatedUsers = editingId
        ? existingUsers.map((u: { id: number }) => (u.id === editingId ? userRecord : u))
        : [...existingUsers, userRecord]
      localStorage.setItem('checkAndPointUsers', JSON.stringify(updatedUsers))

      setSuccessMessage(editingId ? '¡Usuario actualizado exitosamente!' : '¡Usuario creado exitosamente!')

      setTimeout(() => {
        router.push('/users')
      }, 2000)

    } catch (error) {
      console.error('Error saving user:', error)
      setErrors({ general: 'Ocurrió un error al guardar el usuario. Intenta nuevamente.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/users"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Usuarios
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            {editingId ? 'Editar Usuario' : 'Formulario para crear Usuarios'}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {editingId ? 'Actualiza los datos del usuario' : 'Completa los datos para registrar un nuevo usuario en el sistema'}
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">{successMessage}</p>
              </div>
            </div>
          </div>
        )}

        {/* General Error */}
        {errors.general && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800">{errors.general}</p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Tipo de Usuario */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Tipo de Usuario
              </h3>

              <div>
                <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
                  Seleccionar tipo de usuario *
                </label>
                <div className="mt-1">
                  <select
                    id="userType"
                    name="userType"
                    value={userData.userType}
                    onChange={handleInputChange}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                      errors.userType ? 'border-red-300' : ''
                    }`}
                  >
                    <option value="">Seleccionar tipo de usuario</option>
                    {USER_TYPES.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.userType && (
                  <p className="mt-2 text-sm text-red-600">{errors.userType}</p>
                )}
                {selectedType && (
                  <p className="mt-2 text-sm text-indigo-600">{selectedType.description}</p>
                )}
              </div>
            </div>
          </div>

          {/* Datos Personales */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Datos Personales
              </h3>

              <div className="grid grid-cols-1 gap-6">
                {/* Nombre, Apellido, Username */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nombre *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                          errors.name ? 'border-red-300' : ''
                        }`}
                        placeholder="Juan"
                      />
                    </div>
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Apellido *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleInputChange}
                        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                          errors.lastName ? 'border-red-300' : ''
                        }`}
                        placeholder="Pérez"
                      />
                    </div>
                    {errors.lastName && <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>}
                  </div>

                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Username *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                          errors.username ? 'border-red-300' : ''
                        }`}
                        placeholder="jperez"
                      />
                    </div>
                    {errors.username && <p className="mt-2 text-sm text-red-600">{errors.username}</p>}
                  </div>
                </div>

                {/* Teléfono y Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Teléfono
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
                        placeholder="+54 9 11 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                          errors.email ? 'border-red-300' : ''
                        }`}
                        placeholder="usuario@ejemplo.com"
                      />
                    </div>
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Credenciales */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6 flex items-center">
                <Lock className="h-5 w-5 mr-2" />
                Credenciales
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Contraseña *
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={userData.password}
                      onChange={handleInputChange}
                      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                        errors.password ? 'border-red-300' : ''
                      }`}
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirmar contraseña *
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={userData.confirmPassword}
                      onChange={handleInputChange}
                      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
                        errors.confirmPassword ? 'border-red-300' : ''
                      }`}
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.confirmPassword && <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Estado del usuario */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Estado del usuario
              </h3>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setUserData(prev => ({ ...prev, enabled: !prev.enabled }))}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    userData.enabled ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}
                  role="switch"
                  aria-checked={userData.enabled}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      userData.enabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
                <span className="ml-3 text-sm font-medium text-gray-700">
                  {userData.enabled ? 'Habilitado' : 'Deshabilitado'}
                </span>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex justify-end space-x-3">
            <Link
              href="/users"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              ) : (
                <Save className="h-5 w-5 mr-2" />
              )}
              {loading ? 'Guardando...' : editingId ? 'Guardar cambios' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function NewUserPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <NewUserForm />
    </Suspense>
  )
}
