'use client'

import { Suspense, useState, useEffect } from 'react'
import { Home, ArrowLeft, Save, Image as ImageIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import {
  loadProperties,
  saveProperties,
  ZONAS,
  PROPERTY_TYPES,
  AMENITIES,
  BED_TYPES,
  CURRENCIES,
  Property,
  PropertyCategory,
  BedConfig,
} from '@/lib/properties'

function AlojamientoForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const category = (searchParams.get('category') as PropertyCategory) || 'alojamiento'
  const editIdParam = searchParams.get('id')

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [successMessage, setSuccessMessage] = useState('')

  const [data, setData] = useState({
    name: '',
    zona: '',
    address: '',
    number: '',
    floor: '',
    apartment: '',
    description: '',
    bedrooms: '',
    bathrooms: '',
    maxGuests: '',
    propertyType: '',
    ambientes: '',
    checkInFrom: '',
    checkInTo: '',
    checkOutFrom: '',
    checkOutTo: '',
    mtsDelMar: '',
    mascotasCantidad: '',
    chargesCurrency: 'USD',
    charges: {
      limpieza: '',
      servicio: '',
      mascotas: '',
      cochera: '',
      deposito: '',
      depositoJoven: '',
    },
    wifiNetwork: '',
    wifiPassword: '',
    keysCount: '',
    electronicKey: false,
    keyCode: '',
    bookingId: '',
    airbnbId: '',
    bank: {
      entidad: '',
      numeroCuenta: '',
      cbu: '',
      alias: '',
      titular: '',
      cuitDni: '',
    },
    enabled: true,
  })

  // Estado de camas: cada tipo con enabled + quantity
  const [beds, setBeds] = useState<Record<string, BedConfig>>(
    Object.fromEntries(BED_TYPES.map(b => [b.id, { enabled: false, quantity: 1 }]))
  )

  // Comodidades seleccionadas
  const [amenities, setAmenities] = useState<Record<string, boolean>>(
    Object.fromEntries(AMENITIES.map(a => [a.id, false]))
  )

  const [photos, setPhotos] = useState<string[]>([])

  // Modo edición: si hay ?id=, precargamos los datos de la propiedad existente.
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingCreatedAt, setEditingCreatedAt] = useState('')

  useEffect(() => {
    if (!editIdParam) return
    const found = loadProperties().find(p => p.id === Number(editIdParam))
    if (!found) return

    setEditingId(found.id)
    setEditingCreatedAt(found.createdAt)
    setData({
      name: found.name,
      zona: found.zona,
      address: found.address,
      number: found.number,
      floor: found.floor,
      apartment: found.apartment,
      description: found.description,
      bedrooms: found.bedrooms,
      bathrooms: found.bathrooms,
      maxGuests: found.maxGuests,
      propertyType: found.propertyType,
      ambientes: found.ambientes,
      checkInFrom: found.checkInFrom,
      checkInTo: found.checkInTo,
      checkOutFrom: found.checkOutFrom,
      checkOutTo: found.checkOutTo,
      mtsDelMar: found.mtsDelMar,
      mascotasCantidad: found.mascotasCantidad,
      chargesCurrency: found.chargesCurrency,
      charges: found.charges,
      wifiNetwork: found.wifiNetwork,
      wifiPassword: found.wifiPassword,
      keysCount: found.keysCount,
      electronicKey: found.electronicKey,
      keyCode: found.keyCode,
      bookingId: found.bookingId,
      airbnbId: found.airbnbId,
      bank: found.bank,
      enabled: found.enabled,
    })
    setBeds(prev => ({ ...prev, ...found.beds }))
    setAmenities(prev => ({ ...prev, ...found.amenities }))
    setPhotos(found.photos)
  }, [editIdParam])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleChargeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, charges: { ...prev.charges, [name]: value } }))
    if (errors[`charge_${name}`]) setErrors(prev => ({ ...prev, [`charge_${name}`]: '' }))
  }

  const handleBankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, bank: { ...prev.bank, [name]: value } }))
  }

  const toggleBed = (id: string) => {
    setBeds(prev => ({ ...prev, [id]: { ...prev[id], enabled: !prev[id].enabled } }))
  }

  const setBedQuantity = (id: string, quantity: number) => {
    setBeds(prev => ({ ...prev, [id]: { ...prev[id], quantity } }))
  }

  const toggleAmenity = (id: string) => {
    setAmenities(prev => ({ ...prev, [id]: !prev[id] }))
    if (id === 'jovenes' && amenities.jovenes) {
      setData(prev => ({ ...prev, charges: { ...prev.charges, depositoJoven: '' } }))
    }
  }

  const handlePhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    const readers = Array.from(files).map(
      file =>
        new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result as string)
          reader.readAsDataURL(file)
        })
    )
    Promise.all(readers).then(results => setPhotos(prev => [...prev, ...results]))
    // Permitir volver a seleccionar el mismo archivo después de borrarlo
    e.target.value = ''
  }

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index))
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!data.name.trim()) newErrors.name = 'El nombre de la propiedad es obligatorio'
    // Dirección y N° obligatorios; Piso y Departamento NO obligatorios.
    if (!data.address.trim()) newErrors.address = 'La dirección es obligatoria'
    if (!data.number.trim()) newErrors.number = 'El N° es obligatorio'

    // Cargos siempre obligatorios: Limpieza, Servicio, Depósito.
    if (!data.charges.limpieza) newErrors.charge_limpieza = 'Obligatorio'
    if (!data.charges.servicio) newErrors.charge_servicio = 'Obligatorio'
    if (!data.charges.deposito) newErrors.charge_deposito = 'Obligatorio'

    // Cargos condicionales: obligatorios solo si la comodidad está seleccionada.
    if (amenities.mascotas && !data.charges.mascotas) newErrors.charge_mascotas = 'Obligatorio (Mascotas seleccionado)'
    if (amenities.cochera && !data.charges.cochera) newErrors.charge_cochera = 'Obligatorio (Cochera seleccionada)'
    if (amenities.jovenes && !data.charges.depositoJoven) newErrors.charge_depositoJoven = 'Obligatorio (Jóvenes seleccionado)'

    // Llave electrónica → código obligatorio.
    if (data.electronicKey && !data.keyCode.trim()) newErrors.keyCode = 'Ingresa el código de la llave electrónica'

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
      const existing = loadProperties()

      const newProperty: Property = {
        id: editingId ?? Date.now(),
        category,
        name: data.name.trim(),
        zona: data.zona,
        address: data.address.trim(),
        number: data.number.trim(),
        floor: data.floor.trim(),
        apartment: data.apartment.trim(),
        description: data.description.trim(),
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        maxGuests: data.maxGuests,
        propertyType: data.propertyType,
        ambientes: data.ambientes,
        checkInFrom: data.checkInFrom,
        checkInTo: data.checkInTo,
        checkOutFrom: data.checkOutFrom,
        checkOutTo: data.checkOutTo,
        beds,
        amenities,
        mtsDelMar: data.mtsDelMar,
        mascotasCantidad: data.mascotasCantidad,
        chargesCurrency: data.chargesCurrency,
        charges: data.charges,
        wifiNetwork: data.wifiNetwork.trim(),
        wifiPassword: data.wifiPassword,
        keysCount: data.keysCount,
        electronicKey: data.electronicKey,
        keyCode: data.keyCode.trim(),
        bookingId: data.bookingId.trim(),
        airbnbId: data.airbnbId.trim(),
        bank: {
          entidad: data.bank.entidad.trim(),
          numeroCuenta: data.bank.numeroCuenta.trim(),
          cbu: data.bank.cbu.trim(),
          alias: data.bank.alias.trim(),
          titular: data.bank.titular.trim(),
          cuitDni: data.bank.cuitDni.trim(),
        },
        photos,
        enabled: data.enabled,
        eliminado: false,
        createdAt: editingId ? editingCreatedAt : new Date().toISOString(),
        deletedAt: null,
      }

      if (editingId) {
        saveProperties(existing.map(p => (p.id === editingId ? newProperty : p)))
        setSuccessMessage('¡Propiedad actualizada exitosamente!')
      } else {
        saveProperties([...existing, newProperty])
        setSuccessMessage('¡Propiedad creada exitosamente!')
      }
      setTimeout(() => router.push(`/units/list?category=${category}`), 1500)
    } catch (error) {
      console.error('Error saving property:', error)
      setErrors({ general: 'Ocurrió un error al guardar la propiedad. Intenta nuevamente.' })
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field?: string) =>
    `block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
      field && errors[field] ? 'border-red-300' : ''
    }`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Propiedades - Check and Point" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={`/units/list?category=${category}`}
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            {editingId ? 'Editar Propiedad' : 'Formulario para crear Propiedades'}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Completa los datos de la propiedad ({category === 'cochera' ? 'Cochera' : 'Alojamiento'})
          </p>
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
          {/* Datos principales */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Datos de la propiedad
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre de la propiedad *</label>
                  <input type="text" id="name" name="name" value={data.name} onChange={handleChange} className={`mt-1 ${inputClass('name')}`} placeholder="Ej: Depto Centro 2 amb" />
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="zona" className="block text-sm font-medium text-gray-700">Zona</label>
                  <select id="zona" name="zona" value={data.zona} onChange={handleChange} className={`mt-1 ${inputClass()}`}>
                    <option value="">Seleccionar Zona</option>
                    {ZONAS.map(z => <option key={z} value={z}>{z}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección *</label>
                  <input type="text" id="address" name="address" value={data.address} onChange={handleChange} className={`mt-1 ${inputClass('address')}`} placeholder="Av. Colón" />
                  {errors.address && <p className="mt-2 text-sm text-red-600">{errors.address}</p>}
                </div>
                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-gray-700">N° *</label>
                  <input type="text" id="number" name="number" value={data.number} onChange={handleChange} className={`mt-1 ${inputClass('number')}`} placeholder="1234" />
                  {errors.number && <p className="mt-2 text-sm text-red-600">{errors.number}</p>}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="floor" className="block text-sm font-medium text-gray-700">Piso</label>
                    <input type="text" id="floor" name="floor" value={data.floor} onChange={handleChange} className={`mt-1 ${inputClass()}`} placeholder="3" />
                  </div>
                  <div>
                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">Depto</label>
                    <input type="text" id="apartment" name="apartment" value={data.apartment} onChange={handleChange} className={`mt-1 ${inputClass()}`} placeholder="B" />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
                <textarea id="description" name="description" rows={4} value={data.description} onChange={handleChange} className={`mt-1 ${inputClass()}`} placeholder="Describe la propiedad..." />
              </div>
            </div>
          </div>

          {/* Detalles de la propiedad */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Detalles de la propiedad</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">Dormitorios</label>
                  <input type="number" min="0" id="bedrooms" name="bedrooms" value={data.bedrooms} onChange={handleChange} className={`mt-1 ${inputClass()}`} placeholder="0" />
                </div>
                <div>
                  <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">Baños</label>
                  <input type="number" min="0" id="bathrooms" name="bathrooms" value={data.bathrooms} onChange={handleChange} className={`mt-1 ${inputClass()}`} placeholder="0" />
                </div>
                <div>
                  <label htmlFor="maxGuests" className="block text-sm font-medium text-gray-700">Máximo de huéspedes</label>
                  <input type="number" min="0" id="maxGuests" name="maxGuests" value={data.maxGuests} onChange={handleChange} className={`mt-1 ${inputClass()}`} placeholder="0" />
                </div>
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Tipo de propiedad</label>
                  <select id="propertyType" name="propertyType" value={data.propertyType} onChange={handleChange} className={`mt-1 ${inputClass()}`}>
                    <option value="">Tipo de propiedad</option>
                    {PROPERTY_TYPES.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="ambientes" className="block text-sm font-medium text-gray-700">Ambientes</label>
                  <input type="number" min="0" id="ambientes" name="ambientes" value={data.ambientes} onChange={handleChange} className={`mt-1 ${inputClass()}`} placeholder="0" />
                </div>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Horarios</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Check in</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="checkInFrom" className="block text-xs text-gray-500">De</label>
                      <input type="time" id="checkInFrom" name="checkInFrom" value={data.checkInFrom} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
                    </div>
                    <div>
                      <label htmlFor="checkInTo" className="block text-xs text-gray-500">Hasta</label>
                      <input type="time" id="checkInTo" name="checkInTo" value={data.checkInTo} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Check out</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="checkOutFrom" className="block text-xs text-gray-500">De</label>
                      <input type="time" id="checkOutFrom" name="checkOutFrom" value={data.checkOutFrom} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
                    </div>
                    <div>
                      <label htmlFor="checkOutTo" className="block text-xs text-gray-500">Hasta</label>
                      <input type="time" id="checkOutTo" name="checkOutTo" value={data.checkOutTo} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Camas */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Camas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {BED_TYPES.map(bed => (
                  <div key={bed.id} className="flex items-center justify-between border border-gray-200 rounded-md p-3">
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => toggleBed(bed.id)}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${beds[bed.id].enabled ? 'bg-indigo-600' : 'bg-gray-200'}`}
                        role="switch"
                        aria-checked={beds[bed.id].enabled}
                      >
                        <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${beds[bed.id].enabled ? 'translate-x-5' : 'translate-x-0'}`} />
                      </button>
                      <span className="ml-3 text-sm text-gray-700">{bed.name}</span>
                    </div>
                    {/* En caso de poner SI, aparece campo cantidad */}
                    {beds[bed.id].enabled && (
                      <div className="flex items-center">
                        <label className="text-xs text-gray-500 mr-2">Cantidad</label>
                        <input
                          type="number"
                          min="1"
                          value={beds[bed.id].quantity}
                          onChange={(e) => setBedQuantity(bed.id, parseInt(e.target.value) || 1)}
                          className="w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comodidades */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Comodidades</h3>
              <div className="flex flex-wrap gap-3">
                {AMENITIES.map(a => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => toggleAmenity(a.id)}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                      amenities[a.id]
                        ? 'bg-indigo-600 border-indigo-600 text-white'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {a.name}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-6">
                {amenities.mascotas && (
                  <div className="max-w-xs">
                    <label htmlFor="mascotasCantidad" className="block text-sm font-medium text-gray-700">Cantidad de mascotas</label>
                    <input type="number" min="0" id="mascotasCantidad" name="mascotasCantidad" value={data.mascotasCantidad} onChange={handleChange} className={`mt-1 ${inputClass()}`} placeholder="0" />
                  </div>
                )}
                <div className="max-w-xs">
                  <label htmlFor="mtsDelMar" className="block text-sm font-medium text-gray-700">Mts del mar</label>
                  <input type="number" min="0" id="mtsDelMar" name="mtsDelMar" value={data.mtsDelMar} onChange={handleChange} className={`mt-1 ${inputClass()}`} placeholder="0" />
                </div>
              </div>
            </div>
          </div>

          {/* Cargos */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-900">Cargos</h3>
                <div className="w-40">
                  <label htmlFor="chargesCurrency" className="sr-only">Tipo de moneda</label>
                  <select id="chargesCurrency" name="chargesCurrency" value={data.chargesCurrency} onChange={handleChange} className={inputClass()}>
                    {CURRENCIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-6">Limpieza, Servicio y Depósito son obligatorios. Mascotas, Cochera y Depósito joven solo si la comodidad está seleccionada.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { key: 'limpieza', label: 'Limpieza *', disabled: false },
                  { key: 'servicio', label: 'Servicio *', disabled: false },
                  { key: 'mascotas', label: `Mascotas${amenities.mascotas ? ' *' : ''}`, disabled: false },
                  { key: 'cochera', label: `Cochera${amenities.cochera ? ' *' : ''}`, disabled: false },
                  { key: 'deposito', label: 'Depósito *', disabled: false },
                  { key: 'depositoJoven', label: `Depósito joven${amenities.jovenes ? ' *' : ''}`, disabled: !amenities.jovenes },
                ].map(({ key, label, disabled }) => (
                  <div key={key}>
                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">{label}</label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      id={key}
                      name={key}
                      value={data.charges[key as keyof typeof data.charges]}
                      onChange={handleChargeChange}
                      disabled={disabled}
                      className={`mt-1 ${inputClass(`charge_${key}`)} disabled:bg-gray-100 disabled:cursor-not-allowed`}
                      placeholder={disabled ? 'Selecciona "Jóvenes" en Comodidades' : '0.00'}
                    />
                    {errors[`charge_${key}`] && <p className="mt-2 text-sm text-red-600">{errors[`charge_${key}`]}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WIFI */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">WIFI</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="wifiNetwork" className="block text-sm font-medium text-gray-700">Red</label>
                  <input type="text" id="wifiNetwork" name="wifiNetwork" value={data.wifiNetwork} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
                </div>
                <div>
                  <label htmlFor="wifiPassword" className="block text-sm font-medium text-gray-700">Contraseña</label>
                  <input type="text" id="wifiPassword" name="wifiPassword" value={data.wifiPassword} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
                </div>
              </div>
            </div>
          </div>

          {/* Llaves */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Llaves</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div>
                  <label htmlFor="keysCount" className="block text-sm font-medium text-gray-700">Cantidad de llaves</label>
                  <input type="number" min="0" id="keysCount" name="keysCount" value={data.keysCount} onChange={handleChange} className={`mt-1 ${inputClass()}`} placeholder="0" />
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setData(prev => ({ ...prev, electronicKey: !prev.electronicKey }))}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${data.electronicKey ? 'bg-indigo-600' : 'bg-gray-200'}`}
                    role="switch"
                    aria-checked={data.electronicKey}
                  >
                    <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${data.electronicKey ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                  <span className="ml-3 text-sm text-gray-700">Llave electrónica</span>
                </div>
                {/* En caso de SI, aparece campo código */}
                {data.electronicKey && (
                  <div>
                    <label htmlFor="keyCode" className="block text-sm font-medium text-gray-700">Código</label>
                    <input type="text" id="keyCode" name="keyCode" value={data.keyCode} onChange={handleChange} className={`mt-1 ${inputClass('keyCode')}`} />
                    {errors.keyCode && <p className="mt-2 text-sm text-red-600">{errors.keyCode}</p>}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* IDs externos */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">ID</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="bookingId" className="block text-sm font-medium text-gray-700">Booking</label>
                  <input type="text" id="bookingId" name="bookingId" value={data.bookingId} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
                </div>
                <div>
                  <label htmlFor="airbnbId" className="block text-sm font-medium text-gray-700">Airbnb</label>
                  <input type="text" id="airbnbId" name="airbnbId" value={data.airbnbId} onChange={handleChange} className={`mt-1 ${inputClass()}`} />
                </div>
              </div>
            </div>
          </div>

          {/* Cuenta bancaria */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Cuenta bancaria del propietario</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { key: 'entidad', label: 'Entidad' },
                  { key: 'numeroCuenta', label: 'N° de cuenta' },
                  { key: 'cbu', label: 'CBU' },
                  { key: 'alias', label: 'Alias' },
                  { key: 'titular', label: 'Titular' },
                  { key: 'cuitDni', label: 'CUIT/DNI' },
                ].map(({ key, label }) => (
                  <div key={key}>
                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">{label}</label>
                    <input type="text" id={key} name={key} value={data.bank[key as keyof typeof data.bank]} onChange={handleBankChange} className={`mt-1 ${inputClass()}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fotos + Habilitado */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Fotos</h3>
                  <label className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    + Agregar Fotos
                    <input type="file" accept="image/*" multiple className="hidden" onChange={handlePhotos} />
                  </label>
                  {photos.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {photos.map((src, i) => (
                        <div key={i} className="relative group">
                          <img src={src} alt={`Foto ${i + 1}`} className="h-20 w-20 object-cover rounded-md border border-gray-200" />
                          <button
                            type="button"
                            onClick={() => removePhoto(i)}
                            className="absolute -top-2 -right-2 inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-600 text-white shadow hover:bg-red-700"
                            title="Eliminar foto"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setData(prev => ({ ...prev, enabled: !prev.enabled }))}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${data.enabled ? 'bg-indigo-600' : 'bg-gray-200'}`}
                    role="switch"
                    aria-checked={data.enabled}
                  >
                    <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${data.enabled ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                  <span className="ml-3 text-sm font-medium text-gray-700">{data.enabled ? 'Habilitado' : 'Deshabilitado'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex justify-end space-x-3">
            <Link
              href={`/units/list?category=${category}`}
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

// Formulario simplificado para Cocheras: Nombre, Dirección, Descripción y Fotos.
function CocheraForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [successMessage, setSuccessMessage] = useState('')

  const [data, setData] = useState({ name: '', address: '', description: '' })
  const [photos, setPhotos] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handlePhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    const readers = Array.from(files).map(
      file =>
        new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result as string)
          reader.readAsDataURL(file)
        })
    )
    Promise.all(readers).then(results => setPhotos(prev => [...prev, ...results]))
    e.target.value = ''
  }

  const removePhoto = (index: number) => setPhotos(prev => prev.filter((_, i) => i !== index))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { [key: string]: string } = {}
    if (!data.name.trim()) newErrors.name = 'El nombre es obligatorio'
    if (!data.address.trim()) newErrors.address = 'La dirección es obligatoria'
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    try {
      const existing = loadProperties()
      const newCochera: Property = {
        id: Date.now(),
        category: 'cochera',
        name: data.name.trim(),
        zona: '',
        address: data.address.trim(),
        number: '',
        floor: '',
        apartment: '',
        description: data.description.trim(),
        bedrooms: '',
        bathrooms: '',
        maxGuests: '',
        propertyType: '',
        ambientes: '',
        checkInFrom: '',
        checkInTo: '',
        checkOutFrom: '',
        checkOutTo: '',
        beds: {},
        amenities: {},
        mtsDelMar: '',
        mascotasCantidad: '',
        chargesCurrency: 'USD',
        charges: { limpieza: '', servicio: '', mascotas: '', cochera: '', deposito: '', depositoJoven: '' },
        wifiNetwork: '',
        wifiPassword: '',
        keysCount: '',
        electronicKey: false,
        keyCode: '',
        bookingId: '',
        airbnbId: '',
        bank: { entidad: '', numeroCuenta: '', cbu: '', alias: '', titular: '', cuitDni: '' },
        photos,
        enabled: true,
        eliminado: false,
        createdAt: new Date().toISOString(),
        deletedAt: null,
      }
      saveProperties([...existing, newCochera])
      setSuccessMessage('¡Cochera creada exitosamente!')
      setTimeout(() => router.push('/units/list?category=cochera'), 1500)
    } catch (error) {
      console.error('Error saving cochera:', error)
      setErrors({ general: 'Ocurrió un error al guardar la cochera. Intenta nuevamente.' })
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field?: string) =>
    `block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
      field && errors[field] ? 'border-red-300' : ''
    }`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Propiedades - Check and Point" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            href="/units/list?category=cochera"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Formulario para crear Cocheras</h1>
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre *</label>
                  <input type="text" id="name" name="name" value={data.name} onChange={handleChange} className={`mt-1 ${inputClass('name')}`} placeholder="Ej: Cochera Centro" />
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección *</label>
                  <input type="text" id="address" name="address" value={data.address} onChange={handleChange} className={`mt-1 ${inputClass('address')}`} placeholder="Av. Colón 1234" />
                  {errors.address && <p className="mt-2 text-sm text-red-600">{errors.address}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
                <textarea id="description" name="description" rows={4} value={data.description} onChange={handleChange} className={`mt-1 ${inputClass()}`} placeholder="Describe la cochera..." />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Fotos</h3>
                <label className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  + Agregar Fotos
                  <input type="file" accept="image/*" multiple className="hidden" onChange={handlePhotos} />
                </label>
                {photos.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {photos.map((src, i) => (
                      <div key={i} className="relative">
                        <img src={src} alt={`Foto ${i + 1}`} className="h-20 w-20 object-cover rounded-md border border-gray-200" />
                        <button
                          type="button"
                          onClick={() => removePhoto(i)}
                          className="absolute -top-2 -right-2 inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-600 text-white shadow hover:bg-red-700"
                          title="Eliminar foto"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Link
              href="/units/list?category=cochera"
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
              {loading ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function FormRouter() {
  const searchParams = useSearchParams()
  const category = (searchParams.get('category') as PropertyCategory) || 'alojamiento'
  return category === 'cochera' ? <CocheraForm /> : <AlojamientoForm />
}

export default function NewPropertyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <FormRouter />
    </Suspense>
  )
}
