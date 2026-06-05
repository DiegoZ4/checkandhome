'use client'

import { useState, useEffect, useMemo } from 'react'
import { Calendar, ArrowLeft, Save, Paperclip, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { loadProperties, Property } from '@/lib/properties'
import {
  loadReservations,
  saveReservations,
  calcNights,
  roundNice,
  CURRENCIES,
  CHANNELS,
  DOC_TYPES,
  SENA_OPTIONS,
  RESERVATION_STATUSES,
  Reservation,
} from '@/lib/reservations'

export default function NewBookingPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [successMessage, setSuccessMessage] = useState('')

  const [properties, setProperties] = useState<Property[]>([])
  const [cocheras, setCocheras] = useState<Property[]>([])

  useEffect(() => {
    const all = loadProperties().filter(p => !p.eliminado)
    setProperties(all.filter(p => (p.category || 'alojamiento') === 'alojamiento'))
    setCocheras(all.filter(p => p.category === 'cochera'))
  }, [])

  const [data, setData] = useState({
    propertyId: '',
    checkInDate: '',
    checkOutDate: '',
    checkInTime: '',
    checkOutTime: '',
    guests: '1',
    firstName: '',
    lastName: '',
    phone: '',
    docType: 'DNI',
    dni: '',
    currency: 'PESOS',
    channel: 'DIRECTA',
    valorNoches: '',
    mascotasEnabled: false,
    mascotasQty: '1',
    cocheraEnabled: false,
    cocheraId: '',
    descuento: '',
    senaPct: '20',
    status: 'PENDIENTE',
  })
  const [hasAttachment, setHasAttachment] = useState(false)
  const [attachmentName, setAttachmentName] = useState('')

  const selectedProperty = properties.find(p => String(p.id) === data.propertyId)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setHasAttachment(true)
      setAttachmentName(file.name)
    }
  }

  // ---- Cálculos en vivo ----
  const num = (v: string) => (v === '' ? 0 : parseFloat(v) || 0)

  const calc = useMemo(() => {
    const nights = calcNights(data.checkInDate, data.checkOutDate)
    const valorNoches = num(data.valorNoches)

    // Cargos de mascotas y cochera tomados de la propiedad seleccionada.
    const mascotasUnit = selectedProperty ? num(selectedProperty.charges.mascotas) : 0
    const mascotasValue = data.mascotasEnabled ? mascotasUnit * (parseInt(data.mascotasQty) || 0) : 0
    const cocheraValue = data.cocheraEnabled && selectedProperty ? num(selectedProperty.charges.cochera) : 0

    const extras = mascotasValue + cocheraValue
    const descuentoPct = num(data.descuento)
    const descuentoAmount = (valorNoches * descuentoPct) / 100

    // Total NETO = valor noches + extras - descuentos
    const totalNeto = Math.max(0, valorNoches + extras - descuentoAmount)

    // Cargos (limpieza + servicio) tomados de la propiedad
    const cargos = selectedProperty
      ? num(selectedProperty.charges.limpieza) + num(selectedProperty.charges.servicio)
      : 0

    // Total BRUTO = total de la reserva + cargos
    const totalBruto = totalNeto + cargos

    const senaPct = num(data.senaPct)
    const senaValue = roundNice((totalBruto * senaPct) / 100) // redondeado
    const restante = Math.max(0, totalBruto - senaValue)

    return { nights, valorNoches, mascotasValue, cocheraValue, totalNeto, cargos, totalBruto, senaValue, restante }
  }, [data, selectedProperty])

  const money = (v: number) => v.toLocaleString('es-AR')

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    if (!data.propertyId) newErrors.propertyId = 'Selecciona una propiedad'
    if (!data.checkInDate) newErrors.checkInDate = 'Fecha de check-in obligatoria'
    if (!data.checkOutDate) newErrors.checkOutDate = 'Fecha de check-out obligatoria'
    if (data.checkInDate && data.checkOutDate && calc.nights <= 0) {
      newErrors.checkOutDate = 'El check-out debe ser posterior al check-in'
    }
    if (!data.firstName.trim()) newErrors.firstName = 'Nombre obligatorio'
    if (!data.lastName.trim()) newErrors.lastName = 'Apellido obligatorio'
    // La reserva puede crearse sin archivo, pero NO puede ser CONFIRMADA sin él.
    if (data.status === 'CONFIRMADA' && !hasAttachment) {
      newErrors.status = 'No se puede CONFIRMAR sin un archivo adjunto'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    setLoading(true)
    try {
      const existing = loadReservations()
      const newReservation: Reservation = {
        id: Date.now(),
        status: data.status as Reservation['status'],
        propertyId: data.propertyId,
        propertyName: selectedProperty?.name || '',
        checkInDate: data.checkInDate,
        checkOutDate: data.checkOutDate,
        checkInTime: data.checkInTime,
        checkOutTime: data.checkOutTime,
        guests: parseInt(data.guests) || 1,
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        phone: data.phone.trim(),
        docType: data.docType,
        dni: data.dni.trim(),
        hasAttachment,
        attachmentName,
        currency: data.currency,
        channel: data.channel,
        nights: calc.nights,
        valorNoches: calc.valorNoches,
        mascotasEnabled: data.mascotasEnabled,
        mascotasQty: parseInt(data.mascotasQty) || 0,
        mascotasValue: calc.mascotasValue,
        cocheraEnabled: data.cocheraEnabled,
        cocheraId: data.cocheraId,
        cocheraValue: calc.cocheraValue,
        descuento: num(data.descuento),
        totalNeto: calc.totalNeto,
        cargos: calc.cargos,
        totalBruto: calc.totalBruto,
        senaPct: num(data.senaPct),
        senaValue: calc.senaValue,
        restante: calc.restante,
        createdAt: new Date().toISOString(),
      }
      saveReservations([...existing, newReservation])
      setSuccessMessage('¡Reserva creada exitosamente!')
      setTimeout(() => router.push('/bookings'), 1500)
    } catch (error) {
      console.error('Error saving reservation:', error)
      setErrors({ general: 'Ocurrió un error al guardar la reserva. Intenta nuevamente.' })
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field?: string) =>
    `block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
      field && errors[field] ? 'border-red-300' : ''
    }`

  const ReadonlyField = ({ label, value }: { label: string; value: string }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 block w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 sm:text-sm text-gray-900">{value}</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Reservas - Check and Point" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/bookings" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Reservas
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Formulario para crear Reservas</h1>
        </div>

        {successMessage && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-md p-4">
            <p className="text-sm font-medium text-green-800">{successMessage}</p>
          </div>
        )}
        {errors.general && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-sm font-medium text-red-800">{errors.general}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Propiedad y fechas */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Datos de la reserva
              </h3>

              <div className="mb-6">
                <label htmlFor="propertyId" className="block text-sm font-medium text-gray-700">Seleccionar Propiedad *</label>
                <select id="propertyId" name="propertyId" value={data.propertyId} onChange={handleChange} className={`mt-1 ${inputClass('propertyId')}`}>
                  <option value="">Seleccionar Propiedad</option>
                  {properties.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
                {errors.propertyId && <p className="mt-2 text-sm text-red-600">{errors.propertyId}</p>}
                {properties.length === 0 && (
                  <p className="mt-2 text-sm text-amber-600">No hay propiedades cargadas. <Link href="/units/new?category=alojamiento" className="underline">Crear una</Link>.</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">Fecha check-in *</label>
                  <input type="date" id="checkInDate" name="checkInDate" value={data.checkInDate} onChange={handleChange} className={`mt-1 ${inputClass('checkInDate')}`} />
                  {errors.checkInDate && <p className="mt-2 text-sm text-red-600">{errors.checkInDate}</p>}
                </div>
                <div>
                  <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">Fecha check-out *</label>
                  <input type="date" id="checkOutDate" name="checkOutDate" value={data.checkOutDate} onChange={handleChange} className={`mt-1 ${inputClass('checkOutDate')}`} />
                  {errors.checkOutDate && <p className="mt-2 text-sm text-red-600">{errors.checkOutDate}</p>}
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Cantidad de huéspedes</label>
                  <input type="number" min="1" id="guests" name="guests" value={data.guests} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
                </div>
                <div>
                  <label htmlFor="checkInTime" className="block text-sm font-medium text-gray-700">Horario check-in</label>
                  <input type="time" id="checkInTime" name="checkInTime" value={data.checkInTime} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
                </div>
                <div>
                  <label htmlFor="checkOutTime" className="block text-sm font-medium text-gray-700">Horario check-out</label>
                  <input type="time" id="checkOutTime" name="checkOutTime" value={data.checkOutTime} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
                </div>
              </div>
            </div>
          </div>

          {/* Información del huésped */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Información del Huésped
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nombre *</label>
                  <input type="text" id="firstName" name="firstName" value={data.firstName} onChange={handleChange} className={`mt-1 ${inputClass('firstName')}`} />
                  {errors.firstName && <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido *</label>
                  <input type="text" id="lastName" name="lastName" value={data.lastName} onChange={handleChange} className={`mt-1 ${inputClass('lastName')}`} />
                  {errors.lastName && <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input type="tel" id="phone" name="phone" value={data.phone} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
                </div>
                <div>
                  <label htmlFor="docType" className="block text-sm font-medium text-gray-700">Tipo de Documento</label>
                  <select id="docType" name="docType" value={data.docType} onChange={handleChange} className={`mt-1 ${inputClass()}`}>
                    {DOC_TYPES.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="dni" className="block text-sm font-medium text-gray-700">DNI</label>
                  <input type="text" id="dni" name="dni" value={data.dni} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
                </div>
                <div className="flex items-end">
                  <label className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer w-full justify-center">
                    <Paperclip className="h-4 w-4 mr-2" />
                    + Agregar archivo
                    <input type="file" className="hidden" onChange={handleFile} />
                  </label>
                </div>
              </div>
              {hasAttachment && (
                <p className="mt-3 text-sm text-green-600">Archivo adjunto: {attachmentName}</p>
              )}
              <p className="mt-2 text-xs text-gray-500">Se puede crear la reserva sin archivo, pero el estado NO puede ser CONFIRMADO.</p>
            </div>
          </div>

          {/* Valor de la reserva */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Valor Reserva</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Tipo de Moneda</label>
                  <select id="currency" name="currency" value={data.currency} onChange={handleChange} className={`mt-1 ${inputClass()}`}>
                    {CURRENCIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="channel" className="block text-sm font-medium text-gray-700">Canal de Reserva</label>
                  <select id="channel" name="channel" value={data.channel} onChange={handleChange} className={`mt-1 ${inputClass()}`}>
                    {CHANNELS.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <ReadonlyField label="Cantidad de noches" value={String(calc.nights)} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="valorNoches" className="block text-sm font-medium text-gray-700">Valor noches</label>
                  <input type="number" min="0" step="0.01" id="valorNoches" name="valorNoches" value={data.valorNoches} onChange={handleChange} className={`mt-1 ${inputClass()}`} placeholder="0" />
                  <p className="mt-1 text-xs text-gray-500">Sumatoria del valor de cada noche de la reserva.</p>
                </div>

                {/* Mascotas */}
                <div className="flex items-end gap-3">
                  <div className="flex items-center pb-2">
                    <button type="button" onClick={() => setData(prev => ({ ...prev, mascotasEnabled: !prev.mascotasEnabled }))}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors ${data.mascotasEnabled ? 'bg-indigo-600' : 'bg-gray-200'}`}>
                      <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${data.mascotasEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                    <span className="ml-3 text-sm text-gray-700">Mascotas</span>
                  </div>
                  {data.mascotasEnabled && (
                    <div className="flex-1">
                      <label htmlFor="mascotasQty" className="block text-xs text-gray-500">Cantidad</label>
                      <input type="number" min="1" id="mascotasQty" name="mascotasQty" value={data.mascotasQty} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
                    </div>
                  )}
                </div>

                {/* Cochera */}
                <div className="flex items-end gap-3">
                  <div className="flex items-center pb-2">
                    <button type="button" onClick={() => setData(prev => ({ ...prev, cocheraEnabled: !prev.cocheraEnabled }))}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors ${data.cocheraEnabled ? 'bg-indigo-600' : 'bg-gray-200'}`}>
                      <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${data.cocheraEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                    <span className="ml-3 text-sm text-gray-700">Cochera</span>
                  </div>
                  {data.cocheraEnabled && (
                    <div className="flex-1">
                      <label htmlFor="cocheraId" className="block text-xs text-gray-500">Cochera</label>
                      <select id="cocheraId" name="cocheraId" value={data.cocheraId} onChange={handleChange} className={`mt-1 ${inputClass()}`}>
                        <option value="">Cocheras</option>
                        {cocheras.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </select>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="descuento" className="block text-sm font-medium text-gray-700">Descuentos (%)</label>
                  <input type="number" min="0" max="100" id="descuento" name="descuento" value={data.descuento} onChange={handleChange} className={`mt-1 ${inputClass()}`} placeholder="porcentaje" />
                </div>
              </div>

              {/* Totales calculados */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 border-t border-gray-100 pt-6">
                <ReadonlyField label="Total NETO" value={`$${money(calc.totalNeto)}`} />
                <ReadonlyField label="Cargos (limpieza + servicio)" value={`$${money(calc.cargos)}`} />
                <ReadonlyField label="Total BRUTO" value={`$${money(calc.totalBruto)}`} />
                <div>
                  <label htmlFor="senaPct" className="block text-sm font-medium text-gray-700">Seña</label>
                  <select id="senaPct" name="senaPct" value={data.senaPct} onChange={handleChange} className={`mt-1 ${inputClass()}`}>
                    {SENA_OPTIONS.map(s => <option key={s} value={s}>{s}%</option>)}
                  </select>
                </div>
                <ReadonlyField label="Valor de la seña (redondeado)" value={`$${money(calc.senaValue)}`} />
                <ReadonlyField label="Restante" value={`$${money(calc.restante)}`} />
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">Estado de la reserva</label>
                  <select id="status" name="status" value={data.status} onChange={handleChange} className={`mt-1 ${inputClass('status')}`}>
                    {RESERVATION_STATUSES.map(s => (
                      <option key={s.id} value={s.id} disabled={s.id === 'CONFIRMADA' && !hasAttachment}>
                        {s.name}{s.id === 'CONFIRMADA' && !hasAttachment ? ' (requiere archivo)' : ''}
                      </option>
                    ))}
                  </select>
                  {errors.status && <p className="mt-2 text-sm text-red-600">{errors.status}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex justify-end space-x-3">
            <Link href="/bookings" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700">
              Cancelar
            </Link>
            <button type="submit" disabled={loading} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" /> : <Save className="h-5 w-5 mr-2" />}
              {loading ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
