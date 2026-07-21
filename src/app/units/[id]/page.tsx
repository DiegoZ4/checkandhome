'use client'

import { useState, useEffect } from 'react'
import { Home, Car, ArrowLeft, Edit } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import {
  loadProperties,
  Property,
  PROPERTY_TYPES,
  AMENITIES,
  BED_TYPES,
  CURRENCIES,
} from '@/lib/properties'

const nameOf = (list: readonly { id: string; name: string }[], id: string) =>
  list.find(i => i.id === id)?.name || id

const Field = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div>
    <p className="text-xs font-medium text-gray-500">{label}</p>
    <p className="mt-1 text-sm text-gray-900">{value || '-'}</p>
  </div>
)

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white shadow rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">{title}</h3>
      {children}
    </div>
  </div>
)

export default function PropertyDetailPage() {
  const params = useParams()
  const id = Number(params.id)

  const [property, setProperty] = useState<Property | null | undefined>(undefined)

  useEffect(() => {
    const found = loadProperties().find(p => p.id === id)
    setProperty(found || null)
  }, [id])

  if (property === undefined) {
    return <div className="min-h-screen bg-gray-50" />
  }

  if (property === null) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar title="Propiedades - Check and Point" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-gray-600">No se encontró la propiedad.</p>
          <Link href="/units" className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800">
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver a Propiedades
          </Link>
        </div>
      </div>
    )
  }

  const p = property
  const isCochera = p.category === 'cochera'
  const Icon = isCochera ? Car : Home
  const enabledBeds = BED_TYPES.filter(b => p.beds?.[b.id]?.enabled)
  const enabledAmenities = AMENITIES.filter(a => p.amenities?.[a.id])
  const charges = [
    { label: 'Limpieza', value: p.charges?.limpieza },
    { label: 'Servicio', value: p.charges?.servicio },
    { label: 'Mascotas', value: p.charges?.mascotas },
    { label: 'Cochera', value: p.charges?.cochera },
    { label: 'Depósito', value: p.charges?.deposito },
    { label: 'Depósito joven', value: p.charges?.depositoJoven },
  ].filter(c => c.value)
  const hasBank = Object.values(p.bank || {}).some(Boolean)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Propiedades - Check and Point" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            href={`/units/list?category=${p.category}`}
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center">
              <Icon className="h-8 w-8 text-indigo-600 mr-3" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{p.name}</h1>
                <p className="mt-1 text-sm text-gray-500">
                  {isCochera ? 'Cochera' : 'Alojamiento'} ·{' '}
                  <span className={p.enabled ? 'text-green-600' : 'text-red-600'}>
                    {p.enabled ? 'Habilitado' : 'Deshabilitado'}
                  </span>
                </p>
              </div>
            </div>
            {!isCochera && (
              <Link
                href={`/units/new?category=${p.category}&id=${p.id}`}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Edit className="h-4 w-4 mr-2" />
                Editar
              </Link>
            )}
          </div>
        </div>

        <div className="space-y-8">
          <Section title="Datos de la propiedad">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Field label="Zona" value={p.zona} />
              <Field label="Dirección" value={`${p.address} ${p.number}`.trim()} />
              <Field label="Piso / Depto" value={[p.floor, p.apartment].filter(Boolean).join(' / ')} />
            </div>
            {p.description && (
              <div className="mt-6">
                <p className="text-xs font-medium text-gray-500">Descripción</p>
                <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{p.description}</p>
              </div>
            )}
          </Section>

          {!isCochera && (
            <>
              <Section title="Detalles de la propiedad">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <Field label="Dormitorios" value={p.bedrooms} />
                  <Field label="Baños" value={p.bathrooms} />
                  <Field label="Máximo de huéspedes" value={p.maxGuests} />
                  <Field label="Tipo de propiedad" value={p.propertyType && nameOf(PROPERTY_TYPES, p.propertyType)} />
                  <Field label="Ambientes" value={p.ambientes} />
                </div>
              </Section>

              <Section title="Horarios">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Check in" value={p.checkInFrom || p.checkInTo ? `${p.checkInFrom} - ${p.checkInTo}` : ''} />
                  <Field label="Check out" value={p.checkOutFrom || p.checkOutTo ? `${p.checkOutFrom} - ${p.checkOutTo}` : ''} />
                </div>
              </Section>

              <Section title="Camas">
                {enabledBeds.length === 0 ? (
                  <p className="text-sm text-gray-500">Sin camas configuradas.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {enabledBeds.map(b => (
                      <div key={b.id} className="flex items-center justify-between border border-gray-200 rounded-md px-3 py-2">
                        <span className="text-sm text-gray-700">{b.name}</span>
                        <span className="text-sm font-medium text-gray-900">x{p.beds[b.id].quantity}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Section>

              <Section title="Comodidades">
                {enabledAmenities.length === 0 ? (
                  <p className="text-sm text-gray-500">Sin comodidades seleccionadas.</p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {enabledAmenities.map(a => (
                      <span key={a.id} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium">
                        {a.name}
                      </span>
                    ))}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {p.amenities?.mascotas && <Field label="Cantidad de mascotas" value={p.mascotasCantidad} />}
                  <Field label="Mts del mar" value={p.mtsDelMar} />
                </div>
              </Section>

              <Section title="Cargos">
                {charges.length === 0 ? (
                  <p className="text-sm text-gray-500">Sin cargos configurados.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {charges.map(c => (
                      <Field key={c.label} label={c.label} value={`${nameOf(CURRENCIES, p.chargesCurrency)} ${c.value}`} />
                    ))}
                  </div>
                )}
              </Section>

              {(p.wifiNetwork || p.wifiPassword) && (
                <Section title="WIFI">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Red" value={p.wifiNetwork} />
                    <Field label="Contraseña" value={p.wifiPassword} />
                  </div>
                </Section>
              )}

              {(p.keysCount || p.electronicKey) && (
                <Section title="Llaves">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <Field label="Cantidad de llaves" value={p.keysCount} />
                    <Field label="Llave electrónica" value={p.electronicKey ? 'Sí' : 'No'} />
                    {p.electronicKey && <Field label="Código" value={p.keyCode} />}
                  </div>
                </Section>
              )}

              {(p.bookingId || p.airbnbId) && (
                <Section title="ID">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Booking" value={p.bookingId} />
                    <Field label="Airbnb" value={p.airbnbId} />
                  </div>
                </Section>
              )}

              {hasBank && (
                <Section title="Cuenta bancaria del propietario">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Entidad" value={p.bank.entidad} />
                    <Field label="N° de cuenta" value={p.bank.numeroCuenta} />
                    <Field label="CBU" value={p.bank.cbu} />
                    <Field label="Alias" value={p.bank.alias} />
                    <Field label="Titular" value={p.bank.titular} />
                    <Field label="CUIT/DNI" value={p.bank.cuitDni} />
                  </div>
                </Section>
              )}
            </>
          )}

          {p.photos && p.photos.length > 0 && (
            <Section title="Fotos">
              <div className="flex flex-wrap gap-3">
                {p.photos.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt={`Foto ${i + 1}`} className="h-28 w-28 object-cover rounded-md border border-gray-200" />
                ))}
              </div>
            </Section>
          )}
        </div>
      </div>
    </div>
  )
}
