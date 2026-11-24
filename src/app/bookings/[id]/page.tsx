'use client'

import { useState, useEffect } from 'react'
import { Calendar, ArrowLeft, Edit, Download, Copy, Check } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import {
  loadReservations,
  Reservation,
  getStatusName,
  getStatusColor,
  getChannelName,
  getConditionName,
  getCurrencyName,
} from '@/lib/reservations'
import { loadProperties } from '@/lib/properties'
import { buildReservationSummary, copyText } from '@/lib/reservationSummary'
import { canCurrent } from '@/lib/permissions'

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

export default function ReservationDetailPage() {
  const params = useParams()
  const id = Number(params.id)

  const [reservation, setReservation] = useState<Reservation | null | undefined>(undefined)
  const [copyState, setCopyState] = useState<'idle' | 'ok' | 'error'>('idle')

  useEffect(() => {
    setReservation(loadReservations().find(r => r.id === id) || null)
  }, [id])

  const formatDate = (dateString: string) =>
    dateString ? new Date(dateString).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '-'

  const money = (value: number) => value.toLocaleString('es-AR')

  if (reservation === undefined) {
    return <div className="min-h-screen bg-gray-50" />
  }

  if (reservation === null) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar title="Reservas - Check and Point" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-gray-600">No se encontró la reserva.</p>
          <Link href="/bookings" className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800">
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver a Reservas
          </Link>
        </div>
      </div>
    )
  }

  const r = reservation

  // Copia el texto de la reserva (con los horarios y el depósito del alojamiento).
  const handleCopy = async () => {
    const property = loadProperties().find(p => String(p.id) === String(r.propertyId))
    const ok = await copyText(buildReservationSummary(r, property))
    setCopyState(ok ? 'ok' : 'error')
    setTimeout(() => setCopyState('idle'), 2500)
  }

  const currencySymbol = r.currency === 'PESOS' ? '$' : 'US$'
  const amount = (value: number) => `${currencySymbol}${money(value)}`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Reservas - Check and Point" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/bookings" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Reservas
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-indigo-600 mr-3" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{r.propertyName || `Reserva #${r.id}`}</h1>
                <p className="mt-1 text-sm text-gray-500">
                  {r.firstName} {r.lastName} ·{' '}
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(r.status)}`}>
                    {getStatusName(r.status)}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className={`inline-flex items-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md bg-white transition-colors ${
                  copyState === 'ok'
                    ? 'border-green-600 text-green-700'
                    : copyState === 'error'
                      ? 'border-red-600 text-red-700'
                      : 'border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {copyState === 'ok' ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copyState === 'ok' ? '¡Copiado!' : copyState === 'error' ? 'No se pudo copiar' : 'Copiar datos de la reserva'}
              </button>
              {canCurrent('bookings.edit') && (
                <Link
                  href={`/bookings/new?id=${r.id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Editar
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Section title="Datos de la reserva">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Field label="Propiedad" value={r.propertyName} />
              <Field label="Fecha check-in" value={formatDate(r.checkInDate)} />
              <Field label="Fecha check-out" value={formatDate(r.checkOutDate)} />
              <Field label="Horario check-in" value={r.checkInTime} />
              <Field label="Horario check-out" value={r.checkOutTime} />
              <Field label="Cantidad de huéspedes" value={r.guests} />
            </div>
          </Section>

          <Section title="Información del huésped">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Field label="Nombre" value={r.firstName} />
              <Field label="Apellido" value={r.lastName} />
              <Field label="Teléfono" value={r.phone} />
              <Field label="Tipo de documento" value={r.docType} />
              <Field label="DNI" value={r.dni || (r.dniException ? 'No requerido (excepción autorizada por admin)' : '')} />
              <Field
                label="Archivo adjunto"
                value={
                  r.hasAttachment
                    ? (r.attachmentName || 'Sí')
                    : (r.dniException ? 'No (excepción autorizada por admin)' : 'No')
                }
              />
            </div>
          </Section>

          <Section title="Valor de la reserva">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Field label="Moneda" value={getCurrencyName(r.currency)} />
              <Field
                label="Canal"
                value={r.condition ? `${getChannelName(r.channel)} (${getConditionName(r.condition)})` : getChannelName(r.channel)}
              />
              <Field label="Noches" value={r.nights} />
              <Field label="Valor noches" value={amount(r.valorNoches)} />
              <Field label="Mascotas" value={r.mascotasEnabled ? `${r.mascotasQty} - ${amount(r.mascotasValue)}` : 'No'} />
              <Field label="Cochera" value={r.cocheraEnabled ? amount(r.cocheraValue) : 'No'} />
              <Field label="Descuento" value={r.descuento ? `${r.descuento}%` : '-'} />
              <Field label="Cargos (limpieza + servicio)" value={amount(r.cargos)} />
              <Field label="Total NETO" value={amount(r.totalNeto)} />
              <Field label="Total BRUTO" value={amount(r.totalBruto)} />
              <Field
                label="Seña"
                value={r.senaException ? 'Sin seña (excepción autorizada por admin)' : `${r.senaPct}% (${amount(r.senaValue)})`}
              />
              <Field label="Restante" value={amount(r.restante)} />
            </div>
          </Section>

          {(r.hasPaymentProof || r.hasVideo || r.observaciones) && (
            <Section title="Comprobante de pago / Observaciones">
              <div className="grid grid-cols-1 gap-6">
                <Field label="Comprobante de pago" value={r.hasPaymentProof ? (r.paymentProofName || 'Sí') : 'No'} />
                <div>
                  <Field label="Video" value={r.hasVideo ? (r.videoName || 'Sí') : 'No'} />
                  {r.videoUrl && (
                    <>
                      <video src={r.videoUrl} controls preload="metadata" className="mt-2 w-full max-h-96 rounded-md bg-black" />
                      <a href={`${r.videoUrl}?download=1`} className="mt-2 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800">
                        <Download className="h-4 w-4 mr-1" /> Descargar video
                      </a>
                    </>
                  )}
                </div>
                {r.observaciones && (
                  <div>
                    <p className="text-xs font-medium text-gray-500">Observaciones / Notas</p>
                    <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{r.observaciones}</p>
                  </div>
                )}
              </div>
            </Section>
          )}
        </div>
      </div>
    </div>
  )
}
