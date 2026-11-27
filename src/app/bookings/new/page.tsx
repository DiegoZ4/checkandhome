'use client'

import { Suspense, useState, useEffect, useMemo } from 'react'
import { Calendar, ArrowLeft, Save, Paperclip, User, Search, Video as VideoIcon, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { loadProperties, Property } from '@/lib/properties'
import {
  loadReservations,
  saveReservations,
  calcNights,
  roundUp,
  senaRoundingBase,
  nightsFromCalendar,
  CURRENCIES,
  CHANNELS,
  BOOKING_CONDITIONS,
  DOC_TYPES,
  SENA_OPTIONS,
  RESERVATION_STATUSES,
  Reservation,
  findOverlaps,
} from '@/lib/reservations'
import { pullFromServer } from '@/lib/cloudSync'
import { resolvePropertyCharges } from '@/lib/chargeCategories'
import { loadRates, dateKey, addDays, type RatesMap } from '@/lib/rates'

/** "2026-11-10" -> "2026-11-11" */
const nextDay = (d: string) => {
  const [y, m, day] = d.split('-').map(Number)
  return dateKey(addDays(new Date(y, m - 1, day), 1))
}

/** "14:00" -> "14", "14:30" -> "14:30" (para los textos de ayuda) */
const hourText = (t: string) => (t.endsWith(':00') ? String(Number(t.slice(0, 2))) : t)

// "2026-11-17" -> "17/11"
const shortDate = (d: string) => (d ? `${d.slice(8, 10)}/${d.slice(5, 7)}` : '?')
import { MAX_VIDEO_MB, uploadVideo } from '@/lib/videoUpload'
import TimeSelect from '@/components/TimeSelect'

function BookingForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const editIdParam = searchParams.get('id')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [successMessage, setSuccessMessage] = useState('')

  const [properties, setProperties] = useState<Property[]>([])
  const [cocheras, setCocheras] = useState<Property[]>([])
  // Todas las reservas, para avisar si las fechas elegidas ya están ocupadas.
  const [allReservations, setAllReservations] = useState<Reservation[]>([])
  // Calendario de tarifas (precio de cada noche). CloudSyncGate no renderiza en el
  // servidor, así que se puede leer localStorage al iniciar.
  const [rates] = useState<RatesMap>(() => loadRates())
  const today = dateKey(new Date())
  // Al editar: datos originales, para no recalcular el valor de las noches si no cambian
  // propiedad ni fechas (el calendario pudo cambiar de precio después de reservar).
  const [original, setOriginal] = useState<{ propertyId: string; checkInDate: string; checkOutDate: string; valorNoches: number } | null>(null)

  // Excepción de DNI: solo un admin puede confirmar una reserva Directa/Booking sin el archivo.
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const all = loadProperties().filter(p => !p.eliminado)
    setProperties(all.filter(p => (p.category || 'alojamiento') === 'alojamiento'))
    setCocheras(all.filter(p => p.category === 'cochera'))
    setAllReservations(loadReservations())
    try {
      const storedUser = JSON.parse(localStorage.getItem('checkAndPointUser') || 'null')
      setIsAdmin(!!storedUser?.role && storedUser.role.toLowerCase().includes('admin'))
    } catch {
      setIsAdmin(false)
    }
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
    condition: '',
    valorNoches: '',
    mascotasEnabled: false,
    mascotasQty: '1',
    cocheraEnabled: false,
    cocheraId: '',
    descuento: '',
    senaPct: '20',
    status: 'PENDIENTE',
    observaciones: '',
    dniException: false,
    senaException: false,
  })
  const [hasAttachment, setHasAttachment] = useState(false)
  const [attachmentName, setAttachmentName] = useState('')
  const [hasPaymentProof, setHasPaymentProof] = useState(false)
  const [paymentProofName, setPaymentProofName] = useState('')
  const [hasVideo, setHasVideo] = useState(false)
  const [videoName, setVideoName] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  // Porcentaje de subida del video; null cuando no se está subiendo nada.
  const [videoProgress, setVideoProgress] = useState<number | null>(null)

  // Modo edición: si hay ?id=, precargamos los datos de la reserva existente.
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingCreatedAt, setEditingCreatedAt] = useState('')

  useEffect(() => {
    if (!editIdParam) return
    const found = loadReservations().find(r => r.id === Number(editIdParam))
    if (!found) return

    setEditingId(found.id)
    setEditingCreatedAt(found.createdAt)
    setData({
      propertyId: found.propertyId,
      checkInDate: found.checkInDate,
      checkOutDate: found.checkOutDate,
      checkInTime: found.checkInTime,
      checkOutTime: found.checkOutTime,
      guests: String(found.guests),
      firstName: found.firstName,
      lastName: found.lastName,
      phone: found.phone,
      docType: found.docType,
      dni: found.dni,
      currency: found.currency,
      channel: found.channel,
      condition: found.condition,
      valorNoches: String(found.valorNoches),
      mascotasEnabled: found.mascotasEnabled,
      mascotasQty: String(found.mascotasQty),
      cocheraEnabled: found.cocheraEnabled,
      cocheraId: found.cocheraId,
      descuento: String(found.descuento),
      senaPct: String(found.senaPct),
      status: found.status,
      observaciones: found.observaciones,
      dniException: found.dniException,
      senaException: found.senaException,
    })
    setHasAttachment(found.hasAttachment)
    setAttachmentName(found.attachmentName)
    setHasPaymentProof(found.hasPaymentProof)
    setPaymentProofName(found.paymentProofName)
    setHasVideo(found.hasVideo)
    setVideoName(found.videoName)
    setVideoUrl(found.videoUrl || '')
    setOriginal({
      propertyId: found.propertyId,
      checkInDate: found.checkInDate,
      checkOutDate: found.checkOutDate,
      valorNoches: found.valorNoches,
    })
  }, [editIdParam])

  const selectedProperty = properties.find(p => String(p.id) === data.propertyId)

  // Canales en los que rigen las excepciones (Airbnb queda fuera).
  const isDirectOrBooking = data.channel === 'DIRECTA' || data.channel === 'BOOKING'

  // Solo un admin puede autorizar una reserva sin DNI, y solo en canales Directa/Booking.
  const canWaiveDni = isAdmin && isDirectOrBooking
  const dniWaived = canWaiveDni && data.dniException

  // La seña se pide en Directa/Booking; Airbnb no la pide. Un admin puede eximirla.
  const senaRequired = isDirectOrBooking
  const canWaiveSena = isAdmin && senaRequired
  const senaWaived = canWaiveSena && data.senaException

  // Buscador de propiedad (combobox): mientras está abierto se muestra el texto buscado,
  // cerrado muestra el nombre de la propiedad seleccionada.
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false)
  const [propertySearch, setPropertySearch] = useState('')
  const filteredProperties = properties.filter(p => p.name.toLowerCase().includes(propertySearch.toLowerCase()))

  // Horario permitido por la propiedad (vacío = sin límite).
  const inRange = (t: string, from?: string, to?: string) => !t || ((!from || t >= from) && (!to || t <= to))

  const selectProperty = (p: Property) => {
    // Los horarios fuera del rango de la nueva propiedad se borran.
    setData(prev => ({
      ...prev,
      propertyId: String(p.id),
      checkInTime: inRange(prev.checkInTime, p.checkInFrom, p.checkInTo) ? prev.checkInTime : '',
      checkOutTime: inRange(prev.checkOutTime, p.checkOutFrom, p.checkOutTo) ? prev.checkOutTime : '',
    }))
    if (errors.propertyId) setErrors(prev => ({ ...prev, propertyId: '' }))
    setShowPropertyDropdown(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'channel' && value !== 'BOOKING' ? { condition: '' } : {}),
      // El check-out tiene que ser al menos un día después del check-in.
      ...(name === 'checkInDate' && value && (!prev.checkOutDate || prev.checkOutDate <= value)
        ? { checkOutDate: nextDay(value) }
        : {}),
    }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setHasAttachment(true)
      setAttachmentName(file.name)
    }
  }

  const handlePaymentProofFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setHasPaymentProof(true)
      setPaymentProofName(file.name)
    }
  }

  // El video se sube al servidor apenas se elige; la reserva guarda su URL.
  const handleVideoFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target
    const file = input.files?.[0]
    if (!file) return
    setVideoProgress(0)
    try {
      const url = await uploadVideo(file, setVideoProgress)
      setHasVideo(true)
      setVideoName(file.name)
      setVideoUrl(url)
    } catch (err) {
      alert(`No se pudo subir el video: ${(err as Error).message}`)
    } finally {
      setVideoProgress(null)
      input.value = '' // permite volver a elegir el mismo archivo
    }
  }

  const removeVideo = () => {
    setHasVideo(false)
    setVideoName('')
    setVideoUrl('')
  }

  // ---- Cálculos en vivo ----
  const num = (v: string) => (v === '' ? 0 : parseFloat(v) || 0)

  // Valor de las noches: suma de los precios del calendario de la propiedad.
  const nightly = useMemo(
    () => nightsFromCalendar(rates, data.propertyId, data.checkInDate, data.checkOutDate),
    [rates, data.propertyId, data.checkInDate, data.checkOutDate],
  )
  // Editando sin cambiar propiedad ni fechas: se respeta el valor con el que se reservó.
  const keepOriginalNights = !!original &&
    original.propertyId === data.propertyId &&
    original.checkInDate === data.checkInDate &&
    original.checkOutDate === data.checkOutDate

  // Mascotas: sólo si la propiedad las acepta, hasta su cantidad máxima.
  const acceptsPets = !!selectedProperty?.amenities?.mascotas
  const maxPets = acceptsPets ? parseInt(selectedProperty?.mascotasCantidad || '') || 0 : 0

  const calc = useMemo(() => {
    const nights = calcNights(data.checkInDate, data.checkOutDate)
    const valorNoches = keepOriginalNights ? original!.valorNoches : nightly.total

    // Limpieza, servicio y mascotas: precios actuales de las categorías del alojamiento.
    const categoryCharges = selectedProperty ? resolvePropertyCharges(selectedProperty) : null

    // Cargos de mascotas y cochera tomados de la propiedad seleccionada.
    const mascotasUnit = categoryCharges ? categoryCharges.mascotas : 0
    const mascotasValue = data.mascotasEnabled ? mascotasUnit * (parseInt(data.mascotasQty) || 0) : 0
    const cocheraValue = data.cocheraEnabled && selectedProperty ? num(selectedProperty.charges.cochera) : 0

    const extras = mascotasValue + cocheraValue
    const descuentoPct = num(data.descuento)
    const descuentoAmount = (valorNoches * descuentoPct) / 100

    // Total NETO = valor noches + extras - descuentos
    const totalNeto = Math.max(0, valorNoches + extras - descuentoAmount)

    // Cargos (limpieza + servicio) tomados de la propiedad
    const cargos = categoryCharges ? categoryCharges.limpieza + categoryCharges.servicio : 0

    // Total BRUTO = total de la reserva + cargos
    const totalBruto = totalNeto + cargos

    const senaPct = num(data.senaPct)
    // Seña: porcentaje del total, redondeado hacia arriba ($1.000 en pesos, US$10 en dólares).
    const senaValue = roundUp((totalBruto * senaPct) / 100, senaRoundingBase(data.currency))
    const restante = Math.max(0, totalBruto - senaValue)

    return { nights, valorNoches, mascotasValue, cocheraValue, totalNeto, cargos, totalBruto, senaValue, restante }
  }, [data, selectedProperty, nightly, keepOriginalNights, original])

  const money = (v: number) => v.toLocaleString('es-AR')
  const currencySymbol = data.currency === 'PESOS' ? '$' : 'US$'

  // Reservas CONFIRMADAS que chocan con las fechas elegidas (mismo alojamiento / misma
  // cochera): bloquean. Las pendientes no ocupan noches, sólo se avisan. Una reserva que
  // se guarda cancelada no se verifica.
  const overlapsFor = (list: Reservation[]) => {
    if (data.status === 'CANCELADA') return { property: [], cochera: [] }
    return {
      property: findOverlaps(list, {
        field: 'propertyId', id: data.propertyId, checkIn: data.checkInDate, checkOut: data.checkOutDate, excludeId: editingId,
      }),
      cochera: data.cocheraEnabled
        ? findOverlaps(list, {
            field: 'cocheraId', id: data.cocheraId, checkIn: data.checkInDate, checkOut: data.checkOutDate, excludeId: editingId,
          })
        : [],
    }
  }
  const overlaps = overlapsFor(allReservations)
  const pendingOverlaps = findOverlaps(allReservations, {
    field: 'propertyId', id: data.propertyId, checkIn: data.checkInDate, checkOut: data.checkOutDate,
    excludeId: editingId, status: 'PENDIENTE',
  })

  const describeOverlap = (r: Reservation) =>
    `${`${r.firstName} ${r.lastName}`.trim() || 'Sin nombre'} (${shortDate(r.checkInDate)} al ${shortDate(r.checkOutDate)}, ${r.status.toLowerCase()})`

  const validateForm = (reservationsList: Reservation[] = allReservations) => {
    const newErrors: { [key: string]: string } = {}
    const found = overlapsFor(reservationsList)
    if (found.property.length) {
      newErrors.checkInDate = `La propiedad ya está reservada en esas fechas: ${found.property.map(describeOverlap).join('; ')}`
    }
    if (found.cochera.length) {
      newErrors.cocheraId = `La cochera ya está reservada en esas fechas: ${found.cochera.map(describeOverlap).join('; ')}`
    }
    if (!data.propertyId) newErrors.propertyId = 'Selecciona una propiedad'
    if (!data.checkInDate) newErrors.checkInDate = 'Fecha de check-in obligatoria'
    if (!data.checkOutDate) newErrors.checkOutDate = 'Fecha de check-out obligatoria'
    if (data.checkInDate && data.checkOutDate && calc.nights <= 0) {
      newErrors.checkOutDate = 'El check-out debe ser al menos un día después del check-in'
    }
    // No se puede reservar en el pasado (al editar, sólo si se cambió la fecha).
    if (data.checkInDate && data.checkInDate < today && data.checkInDate !== original?.checkInDate) {
      newErrors.checkInDate = 'El check-in no puede ser anterior a hoy'
    }
    // Horarios dentro de los configurados en la propiedad.
    const p = selectedProperty
    if (p && !inRange(data.checkInTime, p.checkInFrom, p.checkInTo)) {
      newErrors.checkInTime = `Fuera del horario de la propiedad (${hourText(p.checkInFrom)} a ${hourText(p.checkInTo)} hs)`
    }
    if (p && !inRange(data.checkOutTime, p.checkOutFrom, p.checkOutTo)) {
      newErrors.checkOutTime = `Fuera del horario de la propiedad (${hourText(p.checkOutFrom)} a ${hourText(p.checkOutTo)} hs)`
    }
    // Todas las noches tienen que tener precio en el calendario.
    if (!keepOriginalNights && nightly.missing.length) {
      newErrors.valorNoches = `Faltan precios en el calendario para: ${nightly.missing.map(d => shortDate(d)).join(', ')}`
    }
    // Mascotas: la propiedad las tiene que aceptar y no superar su máximo.
    if (data.mascotasEnabled) {
      const qty = parseInt(data.mascotasQty) || 0
      if (!acceptsPets) newErrors.mascotasQty = 'La propiedad no acepta mascotas'
      else if (qty < 1) newErrors.mascotasQty = 'Indicá cuántas mascotas'
      else if (maxPets && qty > maxPets) newErrors.mascotasQty = `La propiedad admite hasta ${maxPets} mascota${maxPets === 1 ? '' : 's'}`
    }
    if (!data.firstName.trim()) newErrors.firstName = 'Nombre obligatorio'
    if (!data.lastName.trim()) newErrors.lastName = 'Apellido obligatorio'
    if (!data.phone.trim()) newErrors.phone = 'Teléfono obligatorio'
    // El DNI es obligatorio salvo que un admin autorice la excepción.
    if (!data.dni.trim() && !dniWaived) {
      newErrors.dni = 'DNI obligatorio (requiere autorización de admin para omitirlo)'
    }
    // La seña es obligatoria en Directa/Booking salvo autorización de un admin.
    // En Airbnb no se pide, así que no se valida.
    if (senaRequired && !senaWaived && calc.senaValue <= 0) {
      newErrors.senaPct = 'La seña es obligatoria (requiere autorización de admin para omitirla)'
    }
    // La cantidad de huéspedes no puede superar el máximo configurado en la propiedad.
    if (selectedProperty?.maxGuests && parseInt(data.guests) > parseInt(selectedProperty.maxGuests)) {
      newErrors.guests = `La propiedad admite un máximo de ${selectedProperty.maxGuests} huésped${selectedProperty.maxGuests === '1' ? '' : 'es'}`
    }
    // La reserva puede crearse sin archivo, pero NO puede ser CONFIRMADA sin él,
    // salvo que un admin autorice la excepción (solo canales Directa/Booking).
    if (data.status === 'CONFIRMADA' && !hasAttachment && !dniWaived) {
      newErrors.status = 'No se puede CONFIRMAR sin un archivo adjunto (o autorización de admin)'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (videoProgress !== null) return // esperar a que termine de subir el video
    // Traer lo último del servidor (reservas hechas desde otra computadora) antes de validar.
    setLoading(true)
    await pullFromServer().catch(() => undefined)
    setLoading(false)
    const latest = loadReservations()
    setAllReservations(latest)
    if (!validateForm(latest)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    setLoading(true)
    try {
      const existing = loadReservations()
      const newReservation: Reservation = {
        id: editingId ?? Date.now(),
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
        dniException: dniWaived,
        senaException: senaWaived,
        hasPaymentProof,
        paymentProofName,
        hasVideo,
        videoName,
        videoUrl,
        observaciones: data.observaciones.trim(),
        currency: data.currency,
        channel: data.channel,
        condition: data.channel === 'BOOKING' ? data.condition : '',
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
        createdAt: editingId ? editingCreatedAt : new Date().toISOString(),
      }
      if (editingId) {
        saveReservations(existing.map(r => (r.id === editingId ? newReservation : r)))
        setSuccessMessage('¡Reserva actualizada exitosamente!')
      } else {
        saveReservations([...existing, newReservation])
        setSuccessMessage('¡Reserva creada exitosamente!')
      }
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
          <h1 className="text-3xl font-bold text-gray-900">
            {editingId ? 'Editar Reserva' : 'Formulario para crear Reservas'}
          </h1>
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

              <div className="mb-6 relative">
                <label htmlFor="propertyId" className="block text-sm font-medium text-gray-700">Seleccionar Propiedad *</label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="propertyId"
                    autoComplete="off"
                    value={showPropertyDropdown ? propertySearch : (selectedProperty?.name || '')}
                    onChange={(e) => setPropertySearch(e.target.value)}
                    onFocus={() => { setPropertySearch(''); setShowPropertyDropdown(true) }}
                    onBlur={() => setShowPropertyDropdown(false)}
                    className={`pl-9 ${inputClass('propertyId')}`}
                    placeholder="Buscar propiedad..."
                  />
                </div>

                {showPropertyDropdown && (
                  <ul className="absolute z-10 mt-1 w-full max-h-56 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg">
                    {filteredProperties.length === 0 ? (
                      <li className="px-3 py-2 text-sm text-gray-500">No se encontraron propiedades.</li>
                    ) : (
                      filteredProperties.map(p => (
                        <li key={p.id}>
                          <button
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => selectProperty(p)}
                            className={`block w-full text-left px-3 py-2 text-sm hover:bg-indigo-50 ${
                              String(p.id) === data.propertyId ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700'
                            }`}
                          >
                            {p.name}
                          </button>
                        </li>
                      ))
                    )}
                  </ul>
                )}

                {errors.propertyId && <p className="mt-2 text-sm text-red-600">{errors.propertyId}</p>}
                {properties.length === 0 && (
                  <p className="mt-2 text-sm text-amber-600">No hay propiedades cargadas. <Link href="/units/new?category=alojamiento" className="underline">Crear una</Link>.</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">Fecha check-in *</label>
                  <input
                    type="date"
                    id="checkInDate"
                    name="checkInDate"
                    value={data.checkInDate}
                    // Al editar una reserva ya pasada se deja su fecha original como mínimo.
                    min={original?.checkInDate && original.checkInDate < today ? original.checkInDate : today}
                    onChange={handleChange}
                    className={`mt-1 ${inputClass('checkInDate')}`}
                  />
                  {errors.checkInDate && <p className="mt-2 text-sm text-red-600">{errors.checkInDate}</p>}
                </div>
                <div>
                  <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">Fecha check-out *</label>
                  <input
                    type="date"
                    id="checkOutDate"
                    name="checkOutDate"
                    value={data.checkOutDate}
                    min={data.checkInDate ? nextDay(data.checkInDate) : nextDay(today)}
                    onChange={handleChange}
                    className={`mt-1 ${inputClass('checkOutDate')}`}
                  />
                  {errors.checkOutDate && <p className="mt-2 text-sm text-red-600">{errors.checkOutDate}</p>}
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Cantidad de huéspedes</label>
                  <input
                    type="number"
                    min="1"
                    max={selectedProperty?.maxGuests || undefined}
                    id="guests"
                    name="guests"
                    value={data.guests}
                    onChange={handleChange}
                    className={`mt-1 ${inputClass('guests')}`}
                  />
                  {selectedProperty?.maxGuests && !errors.guests && (
                    <p className="mt-1 text-xs text-gray-500">Máximo de la propiedad: {selectedProperty.maxGuests}</p>
                  )}
                  {errors.guests && <p className="mt-2 text-sm text-red-600">{errors.guests}</p>}
                </div>
                <div>
                  <label htmlFor="checkInTime" className="block text-sm font-medium text-gray-700">Horario check-in</label>
                  <TimeSelect
                    id="checkInTime"
                    className="mt-1"
                    value={data.checkInTime}
                    min={selectedProperty?.checkInFrom}
                    max={selectedProperty?.checkInTo}
                    onChange={v => { setData(prev => ({ ...prev, checkInTime: v })); setErrors(prev => ({ ...prev, checkInTime: '' })) }}
                  />
                  {errors.checkInTime ? (
                    <p className="mt-2 text-sm text-red-600">{errors.checkInTime}</p>
                  ) : selectedProperty?.checkInFrom && selectedProperty?.checkInTo ? (
                    <p className="mt-1 text-xs text-gray-500">Horario de la propiedad: {hourText(selectedProperty.checkInFrom)} a {hourText(selectedProperty.checkInTo)} hs</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="checkOutTime" className="block text-sm font-medium text-gray-700">Horario check-out</label>
                  <TimeSelect
                    id="checkOutTime"
                    className="mt-1"
                    value={data.checkOutTime}
                    min={selectedProperty?.checkOutFrom}
                    max={selectedProperty?.checkOutTo}
                    onChange={v => { setData(prev => ({ ...prev, checkOutTime: v })); setErrors(prev => ({ ...prev, checkOutTime: '' })) }}
                  />
                  {errors.checkOutTime ? (
                    <p className="mt-2 text-sm text-red-600">{errors.checkOutTime}</p>
                  ) : selectedProperty?.checkOutFrom && selectedProperty?.checkOutTo ? (
                    <p className="mt-1 text-xs text-gray-500">Horario de la propiedad: {hourText(selectedProperty.checkOutFrom)} a {hourText(selectedProperty.checkOutTo)} hs</p>
                  ) : null}
                </div>
              </div>
              {overlaps.property.length > 0 && !errors.checkInDate && (
                <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  <p className="font-medium">La propiedad ya está reservada en esas fechas:</p>
                  <ul className="mt-1 list-disc pl-5">
                    {overlaps.property.map(r => <li key={r.id}>{describeOverlap(r)}</li>)}
                  </ul>
                </div>
              )}
              {pendingOverlaps.length > 0 && data.status !== 'CANCELADA' && (
                <div className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
                  <p className="font-medium">
                    Hay {pendingOverlaps.length} reserva{pendingOverlaps.length === 1 ? '' : 's'} pendiente{pendingOverlaps.length === 1 ? '' : 's'} en esas fechas
                    (no ocupan las noches hasta confirmarse):
                  </p>
                  <ul className="mt-1 list-disc pl-5">
                    {pendingOverlaps.map(r => <li key={r.id}>{describeOverlap(r)}</li>)}
                  </ul>
                </div>
              )}
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono *</label>
                  <input type="tel" id="phone" name="phone" value={data.phone} onChange={handleChange} className={`mt-1 ${inputClass('phone')}`} />
                  {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="docType" className="block text-sm font-medium text-gray-700">Tipo de Documento</label>
                  <select id="docType" name="docType" value={data.docType} onChange={handleChange} className={`mt-1 ${inputClass()}`}>
                    {DOC_TYPES.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="dni" className="block text-sm font-medium text-gray-700">
                    DNI {!dniWaived && '*'}
                  </label>
                  <input
                    type="text"
                    id="dni"
                    name="dni"
                    value={data.dni}
                    onChange={handleChange}
                    disabled={dniWaived}
                    className={`mt-1 ${inputClass('dni')} disabled:bg-gray-100 disabled:cursor-not-allowed`}
                    placeholder={dniWaived ? 'No requerido (autorizado por admin)' : ''}
                  />
                  {errors.dni && <p className="mt-2 text-sm text-red-600">{errors.dni}</p>}
                  {canWaiveDni && (
                    <label className="mt-2 flex items-start text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={data.dniException}
                        onChange={(e) => {
                          setData(prev => ({ ...prev, dniException: e.target.checked }))
                          if (e.target.checked) setErrors(prev => ({ ...prev, dni: '' }))
                        }}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mr-2 mt-0.5"
                      />
                      No pedir DNI (autorización de admin)
                    </label>
                  )}
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

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
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
                {data.channel === 'BOOKING' && (
                  <div>
                    <label htmlFor="condition" className="block text-sm font-medium text-gray-700">Condición</label>
                    <select id="condition" name="condition" value={data.condition} onChange={handleChange} className={`mt-1 ${inputClass()}`}>
                      <option value="">Tipo</option>
                      {BOOKING_CONDITIONS.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                )}
                <ReadonlyField label="Cantidad de noches" value={String(calc.nights)} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="valorNoches" className="block text-sm font-medium text-gray-700">Valor noches</label>
                  <input
                    type="text"
                    id="valorNoches"
                    readOnly
                    value={`${currencySymbol}${money(calc.valorNoches)}`}
                    className={`mt-1 ${inputClass('valorNoches')} bg-gray-50 cursor-default`}
                  />
                  {errors.valorNoches ? (
                    <p className="mt-2 text-sm text-red-600">{errors.valorNoches}</p>
                  ) : keepOriginalNights ? (
                    <p className="mt-1 text-xs text-gray-500">Valor con el que se hizo la reserva. Se recalcula si cambiás la propiedad o las fechas.</p>
                  ) : (
                    <p className="mt-1 text-xs text-gray-500">
                      Suma automática del precio de cada noche en el calendario
                      {nightly.count > 0 && ` (${nightly.count} noche${nightly.count === 1 ? '' : 's'})`}.
                    </p>
                  )}
                  {!keepOriginalNights && !errors.valorNoches && nightly.missing.length > 0 && (
                    <p className="mt-1 text-xs text-amber-600">
                      Sin precio en el calendario: {nightly.missing.map(d => shortDate(d)).join(', ')}.{' '}
                      <Link href="/rates/calendar" className="underline">Cargar precios</Link>
                    </p>
                  )}
                  {!keepOriginalNights && nightly.closed.length > 0 && (
                    <p className="mt-1 text-xs text-amber-600">
                      Atención: el calendario tiene cerradas estas noches: {nightly.closed.map(d => shortDate(d)).join(', ')}.
                    </p>
                  )}
                </div>

                {/* Mascotas: sólo si la propiedad las acepta, hasta su máximo */}
                <div>
                  <div className="flex items-end gap-3">
                    <div className="flex items-center pb-2">
                      <button
                        type="button"
                        disabled={!!selectedProperty && !acceptsPets && !data.mascotasEnabled}
                        onClick={() => {
                          setData(prev => ({ ...prev, mascotasEnabled: !prev.mascotasEnabled }))
                          setErrors(prev => ({ ...prev, mascotasQty: '' }))
                        }}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${data.mascotasEnabled ? 'bg-indigo-600' : 'bg-gray-200'}`}>
                        <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${data.mascotasEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                      </button>
                      <span className="ml-3 text-sm text-gray-700">Mascotas</span>
                    </div>
                    {data.mascotasEnabled && (
                      <div className="flex-1">
                        <label htmlFor="mascotasQty" className="block text-xs text-gray-500">Cantidad</label>
                        <input
                          type="number"
                          min="1"
                          max={maxPets || undefined}
                          id="mascotasQty"
                          name="mascotasQty"
                          value={data.mascotasQty}
                          onChange={handleChange}
                          className={`mt-1 ${inputClass('mascotasQty')}`}
                        />
                      </div>
                    )}
                  </div>
                  {errors.mascotasQty ? (
                    <p className="mt-2 text-sm text-red-600">{errors.mascotasQty}</p>
                  ) : selectedProperty && !acceptsPets ? (
                    <p className="mt-1 text-xs text-gray-500">La propiedad no acepta mascotas.</p>
                  ) : maxPets > 0 ? (
                    <p className="mt-1 text-xs text-gray-500">Máximo de la propiedad: {maxPets}</p>
                  ) : null}
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
                      {(errors.cocheraId || overlaps.cochera.length > 0) && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.cocheraId || `Ya está reservada en esas fechas: ${overlaps.cochera.map(describeOverlap).join('; ')}`}
                        </p>
                      )}
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
                <ReadonlyField label="Total NETO" value={`${currencySymbol}${money(calc.totalNeto)}`} />
                <ReadonlyField label="Cargos (limpieza + servicio)" value={`${currencySymbol}${money(calc.cargos)}`} />
                <ReadonlyField label="Total BRUTO" value={`${currencySymbol}${money(calc.totalBruto)}`} />
                <div>
                  <label htmlFor="senaPct" className="block text-sm font-medium text-gray-700">
                    Seña {senaRequired && !senaWaived && '*'}
                  </label>
                  <select
                    id="senaPct"
                    name="senaPct"
                    value={data.senaPct}
                    onChange={handleChange}
                    disabled={senaWaived}
                    className={`mt-1 ${inputClass('senaPct')} disabled:bg-gray-100 disabled:cursor-not-allowed`}
                  >
                    {SENA_OPTIONS.map(s => <option key={s} value={s}>{s}%</option>)}
                  </select>
                  {!senaRequired && (
                    <p className="mt-1 text-xs text-gray-500">Airbnb no requiere seña.</p>
                  )}
                  {errors.senaPct && <p className="mt-2 text-sm text-red-600">{errors.senaPct}</p>}
                  {canWaiveSena && (
                    <label className="mt-2 flex items-start text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={data.senaException}
                        onChange={(e) => {
                          setData(prev => ({ ...prev, senaException: e.target.checked }))
                          if (e.target.checked) setErrors(prev => ({ ...prev, senaPct: '' }))
                        }}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mr-2 mt-0.5"
                      />
                      Sin seña (autorización de admin)
                    </label>
                  )}
                </div>
                <ReadonlyField label="Valor de la seña (redondeado)" value={`${currencySymbol}${money(calc.senaValue)}`} />
                <ReadonlyField label="Restante" value={`${currencySymbol}${money(calc.restante)}`} />
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">Estado de la reserva</label>
                  <select id="status" name="status" value={data.status} onChange={handleChange} className={`mt-1 ${inputClass('status')}`}>
                    {RESERVATION_STATUSES.map(s => (
                      <option key={s.id} value={s.id} disabled={s.id === 'CONFIRMADA' && !hasAttachment && !dniWaived}>
                        {s.name}{s.id === 'CONFIRMADA' && !hasAttachment && !dniWaived ? ' (requiere archivo)' : ''}
                      </option>
                    ))}
                  </select>
                  {errors.status && <p className="mt-2 text-sm text-red-600">{errors.status}</p>}
                  {!hasAttachment && canWaiveDni && !dniWaived && (
                    <p className="mt-2 text-xs text-gray-500">
                      Para confirmar sin archivo, marcá &quot;No pedir DNI&quot; en Información del Huésped.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Comprobante de pago / Observaciones */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-700">Comprobante de pago</label>
                <label className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                  <Paperclip className="h-4 w-4 mr-2" />
                  + Agregar archivo
                  <input type="file" className="hidden" onChange={handlePaymentProofFile} />
                </label>
              </div>
              {hasPaymentProof && (
                <p className="mt-3 text-sm text-green-600">Archivo adjunto: {paymentProofName}</p>
              )}

              <div className="flex items-center justify-between mt-6">
                <label className="block text-sm font-medium text-gray-700">Video</label>
                <label
                  className={`inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 ${
                    videoProgress !== null ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  <VideoIcon className="h-4 w-4 mr-2" />
                  {hasVideo ? 'Cambiar video' : '+ Agregar video'}
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    disabled={videoProgress !== null}
                    onChange={handleVideoFile}
                  />
                </label>
              </div>
              {videoProgress !== null && (
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Subiendo video...</span>
                    <span>{videoProgress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full bg-indigo-600 transition-all" style={{ width: `${videoProgress}%` }} />
                  </div>
                </div>
              )}
              {hasVideo && videoProgress === null && (
                <div className="mt-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-green-600 truncate">Video adjunto: {videoName}</p>
                    <button type="button" onClick={removeVideo} className="inline-flex items-center text-sm text-red-600 hover:text-red-800 shrink-0">
                      <Trash2 className="h-4 w-4 mr-1" /> Quitar
                    </button>
                  </div>
                  {videoUrl ? (
                    <video src={videoUrl} controls preload="metadata" className="mt-2 w-full max-h-80 rounded-md bg-black" />
                  ) : (
                    <p className="mt-1 text-xs text-amber-600">
                      Este video se cargó antes de que el sistema guardara videos: solo quedó el nombre. Volvé a subirlo para guardarlo.
                    </p>
                  )}
                </div>
              )}
              <p className="mt-1 text-xs text-gray-500">El video se guarda en el sistema (máximo {MAX_VIDEO_MB} MB).</p>

              <div className="mt-6">
                <label htmlFor="observaciones" className="block text-sm font-medium text-gray-700">Observaciones / Notas</label>
                <textarea id="observaciones" name="observaciones" rows={4} value={data.observaciones} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex justify-end space-x-3">
            <Link href="/bookings" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700">
              Cancelar
            </Link>
            <button type="submit" disabled={loading || videoProgress !== null} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" /> : <Save className="h-5 w-5 mr-2" />}
              {loading ? 'Guardando...' : editingId ? 'Guardar cambios' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function NewBookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <BookingForm />
    </Suspense>
  )
}
