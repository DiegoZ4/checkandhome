'use client'

import { useState } from 'react'
import { DollarSign, ArrowLeft, Save, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { loadRatePlans, saveRatePlans, RatePlan, ProximityDiscount } from '@/lib/rates'

const DAYS = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO']

const STAY_DURATIONS = [
  '2 noches', '3 noches', '4 noches', '5 noches', '6 noches',
  '1 semana', '2 semanas', '3 semanas', '4 semanas', '5 semanas',
  '6 semanas', '8 semanas', '10 semanas', '12 semanas',
]

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors ${enabled ? 'bg-indigo-600' : 'bg-gray-200'}`}
      role="switch"
      aria-checked={enabled}
    >
      <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${enabled ? 'translate-x-5' : 'translate-x-0'}`} />
    </button>
  )
}

export default function NewRatePlanPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [successMessage, setSuccessMessage] = useState('')

  // Básicos
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  // Mínimo de noches
  const [hasMinNights, setHasMinNights] = useState(false)
  const [minNights, setMinNights] = useState('')

  // Según día
  const [hasPerDayPricing, setHasPerDayPricing] = useState(false)
  const [perDayPrices, setPerDayPrices] = useState<Record<string, string>>(
    Object.fromEntries(DAYS.map(d => [d, '']))
  )

  // Variación del precio
  const [priceVariation, setPriceVariation] = useState('')
  const [priceVariationType, setPriceVariationType] = useState<'aumento' | 'reduccion'>('aumento')

  // Descuento por duración de estadía
  const [hasStayDiscount, setHasStayDiscount] = useState(false)
  const [stayDiscountDuration, setStayDiscountDuration] = useState('')
  const [stayDiscountPercent, setStayDiscountPercent] = useState('')

  // Descuento por proximidad
  const [proximityDiscounts, setProximityDiscounts] = useState<ProximityDiscount[]>([{ days: '', percent: '' }])

  // Aumento por fin de semana
  const [weekendSurcharge, setWeekendSurcharge] = useState('0')

  const addProximityRow = () => setProximityDiscounts(p => [...p, { days: '', percent: '' }])
  const removeProximityRow = (i: number) => setProximityDiscounts(p => p.filter((_, idx) => idx !== i))
  const updateProximityRow = (i: number, field: keyof ProximityDiscount, value: string) =>
    setProximityDiscounts(p => p.map((row, idx) => idx === i ? { ...row, [field]: value } : row))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}
    if (!name.trim()) newErrors.name = 'El nombre es obligatorio'
    if (hasMinNights && (!minNights || parseInt(minNights) < 1))
      newErrors.minNights = 'Indica la cantidad mínima de noches'
    if (hasStayDiscount && !stayDiscountDuration)
      newErrors.stayDiscountDuration = 'Seleccioná la duración de la estadía'
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    try {
      const newPlan: RatePlan = {
        id: String(Date.now()),
        name: name.trim(),
        description: description.trim(),
        hasMinNights,
        minNights: hasMinNights ? parseInt(minNights) : 0,
        hasPerDayPricing,
        perDayPrices,
        priceVariation,
        priceVariationType,
        hasStayDiscount,
        stayDiscountDuration,
        stayDiscountPercent,
        proximityDiscounts: proximityDiscounts.filter(r => r.days || r.percent),
        weekendSurcharge,
        createdAt: new Date().toISOString(),
      }
      saveRatePlans([...loadRatePlans(), newPlan])
      setSuccessMessage('¡Plan de tarifa creado exitosamente!')
      setTimeout(() => router.push('/rates/plans'), 1200)
    } catch {
      setErrors({ general: 'Ocurrió un error al guardar. Intenta nuevamente.' })
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field?: string) =>
    `block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black px-3 py-2 ${field && errors[field] ? 'border-red-300' : ''}`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Planes de Tarifa - Check and Point" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/rates/plans" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" /> Volver
        </Link>
        <div className="flex items-center mb-6">
          <DollarSign className="h-8 w-8 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Formulario para crear Plan de Tarifas</h1>
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

        <form onSubmit={handleSubmit}>
          <div className="bg-white shadow rounded-lg px-4 py-5 sm:p-6 space-y-8">

            {/* Nombre + Descripción */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => { setName(e.target.value); if (errors.name) setErrors(p => ({ ...p, name: '' })) }}
                  className={inputClass('name')}
                  placeholder="Ej: Tarifa estándar"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className={inputClass()}
                  placeholder="Describe el plan de tarifa..."
                />
              </div>
            </div>

            {/* Mínimo de noches */}
            <div>
              <div className="flex items-center gap-3">
                <Toggle enabled={hasMinNights} onChange={() => setHasMinNights(v => !v)} />
                <span className="text-sm font-medium text-gray-700">Mínimo de noches</span>
              </div>
              {hasMinNights && (
                <div className="mt-3 flex items-center gap-3">
                  <label className="text-sm text-gray-700">¿Cuántas?</label>
                  <input
                    type="number"
                    min="1"
                    value={minNights}
                    onChange={e => { setMinNights(e.target.value); if (errors.minNights) setErrors(p => ({ ...p, minNights: '' })) }}
                    className="w-24 rounded-md border border-gray-300 shadow-sm px-3 py-2 text-sm text-black focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {errors.minNights && <p className="text-sm text-red-600">{errors.minNights}</p>}
                </div>
              )}
            </div>

            {/* Según día */}
            <div>
              <div className="flex items-center gap-3">
                <Toggle enabled={hasPerDayPricing} onChange={() => setHasPerDayPricing(v => !v)} />
                <span className="text-sm font-medium text-gray-700">Según día</span>
              </div>
              {hasPerDayPricing && (
                <div className="mt-4 space-y-2">
                  {DAYS.map(day => (
                    <div key={day} className="flex items-center gap-3">
                      <span className="w-28 text-center text-xs font-semibold text-gray-600 bg-gray-100 border border-gray-300 rounded px-2 py-1.5">
                        {day}
                      </span>
                      <input
                        type="number"
                        min="0"
                        value={perDayPrices[day]}
                        onChange={e => setPerDayPrices(p => ({ ...p, [day]: e.target.value }))}
                        className="w-32 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-black focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Precio"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Variación del precio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Variación del precio</label>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    value={priceVariation}
                    onChange={e => setPriceVariation(e.target.value)}
                    className="w-32 rounded-md border border-gray-300 px-3 py-2 pr-7 text-sm text-black focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="0"
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="priceVariationType"
                    value="aumento"
                    checked={priceVariationType === 'aumento'}
                    onChange={() => setPriceVariationType('aumento')}
                    className="text-indigo-600"
                  />
                  Aumento
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="priceVariationType"
                    value="reduccion"
                    checked={priceVariationType === 'reduccion'}
                    onChange={() => setPriceVariationType('reduccion')}
                    className="text-indigo-600"
                  />
                  Reducción
                </label>
              </div>
            </div>

            {/* Descuento según duración de estadía */}
            <div>
              <div className="flex items-center gap-3">
                <Toggle enabled={hasStayDiscount} onChange={() => setHasStayDiscount(v => !v)} />
                <span className="text-sm font-medium text-gray-700">Descuento según la duración de la estadía</span>
              </div>
              {hasStayDiscount && (
                <div className="mt-4 space-y-4">
                  <div>
                    <select
                      value={stayDiscountDuration}
                      onChange={e => { setStayDiscountDuration(e.target.value); if (errors.stayDiscountDuration) setErrors(p => ({ ...p, stayDiscountDuration: '' })) }}
                      className="rounded-md border border-gray-300 px-3 py-2 text-sm text-black focus:border-indigo-500 focus:ring-indigo-500 w-56"
                    >
                      <option value="">Seleccionar duración de la estadía</option>
                      {STAY_DURATIONS.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                    {errors.stayDiscountDuration && <p className="mt-1 text-sm text-red-600">{errors.stayDiscountDuration}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Descuento por (selección de la duración de la estadía)</label>
                    <div className="relative w-40">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={stayDiscountPercent}
                        onChange={e => setStayDiscountPercent(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 pr-7 text-sm text-black focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="0"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Descuento por proximidad */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Descuento por proximidad</label>
              <div className="space-y-2">
                {proximityDiscounts.map((row, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0"
                      value={row.days}
                      onChange={e => updateProximityRow(i, 'days', e.target.value)}
                      className="w-36 rounded-md border border-gray-300 px-3 py-2 text-sm text-black focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Cantidad de días"
                    />
                    <div className="relative w-28">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={row.percent}
                        onChange={e => updateProximityRow(i, 'percent', e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 pr-7 text-sm text-black focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="0"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                    </div>
                    {proximityDiscounts.length > 1 && (
                      <button type="button" onClick={() => removeProximityRow(i)} className="text-red-500 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addProximityRow}
                  className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 mt-1"
                >
                  <Plus className="h-4 w-4" /> Agregar fila
                </button>
              </div>
            </div>

            {/* Aumento por fin de semana */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Aumento por fin de semana</label>
              <div className="relative w-32">
                <input
                  type="number"
                  min="0"
                  value={weekendSurcharge}
                  onChange={e => setWeekendSurcharge(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-7 text-sm text-black focus:border-indigo-500 focus:ring-indigo-500"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
              </div>
            </div>

            {/* Botones */}
            <div className="flex justify-end gap-3 pt-2 border-t border-gray-100">
              <Link
                href="/rates/plans"
                className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
              >
                Cancelar
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading
                  ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  : <Save className="h-5 w-5 mr-2" />}
                {loading ? 'Guardando...' : 'Guardar'}
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}
