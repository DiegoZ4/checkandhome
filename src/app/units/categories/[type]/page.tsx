'use client'

import { useState } from 'react'
import { ArrowLeft, BrushCleaning, DoorOpen, Plus, Pencil, Search } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Modal from '@/components/Modal'
import MoneyInput from '@/components/MoneyInput'
import { loadProperties, ZONAS } from '@/lib/properties'
import {
  loadChargeCategories,
  saveChargeCategories,
  formatMoney,
  propertiesUsing,
  type ChargeCategory,
  type ChargeCategoryType,
  type ChargeCurrency,
} from '@/lib/chargeCategories'

const TYPES: Record<ChargeCategoryType, { title: string; subtitle: string; singular: string; Icon: typeof DoorOpen }> = {
  limpieza: {
    title: 'Categorías de limpieza',
    subtitle: 'Administrá las categorías y sus tarifas',
    singular: 'limpieza',
    Icon: BrushCleaning,
  },
  servicio: {
    title: 'Categorías de servicio',
    subtitle: 'Administrá las categorías y tarifas de check-in / check-out',
    singular: 'servicio',
    Icon: DoorOpen,
  },
}

type Form = { name: string; amount: string; currency: ChargeCurrency; zona: string; description: string }
const EMPTY: Form = { name: '', amount: '', currency: 'USD', zona: '', description: '' }

const inputClass = (error?: string) =>
  `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm text-black ${
    error ? 'border-red-300' : ''
  }`

/** Lista de categorías de limpieza o servicio, con alta y edición en ventana flotante. */
export default function CategoryTypePage() {
  const params = useParams()
  const type = params.type as ChargeCategoryType
  const cfg = TYPES[type]

  // CloudSyncGate no renderiza en el servidor: se puede leer localStorage al iniciar.
  const [all, setAll] = useState<ChargeCategory[]>(() => loadChargeCategories())
  const [search, setSearch] = useState('')
  // null = ventana cerrada; 'new' = nueva; número = id que se edita.
  const [editing, setEditing] = useState<'new' | number | null>(null)
  const [form, setForm] = useState<Form>(EMPTY)
  const [errors, setErrors] = useState<Record<string, string>>({})

  if (!cfg) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar title="Categorías - Check and Point" />
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">Categoría inexistente.</p>
          <Link href="/units/categories" className="mt-4 inline-block text-indigo-600">Volver a Categorías</Link>
        </div>
      </div>
    )
  }

  const isServicio = type === 'servicio'
  const term = search.trim().toLowerCase()
  const items = all
    .filter(c => c.type === type)
    .filter(c => !term || [c.name, c.zona, c.description].some(v => (v || '').toLowerCase().includes(term)))

  const current = typeof editing === 'number' ? all.find(c => c.id === editing) : undefined
  const usedBy = current ? propertiesUsing(current, loadProperties()) : []

  const persist = (next: ChargeCategory[]) => {
    setAll(next)
    saveChargeCategories(next)
  }

  const openNew = () => {
    setForm(EMPTY)
    setErrors({})
    setEditing('new')
  }

  const openEdit = (c: ChargeCategory) => {
    setForm({ name: c.name, amount: String(c.amount), currency: c.currency, zona: c.zona || '', description: c.description || '' })
    setErrors({})
    setEditing(c.id)
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'El nombre es obligatorio'
    const amount = parseFloat(form.amount)
    if (form.amount === '' || isNaN(amount) || amount < 0) errs.amount = 'Ingresá un monto válido'
    if (isServicio && !form.zona) errs.zona = 'Seleccioná una zona'
    setErrors(errs)
    if (Object.keys(errs).length) return

    const values = {
      name: form.name.trim(),
      amount,
      currency: form.currency,
      zona: isServicio ? form.zona : '',
      description: form.description.trim(),
    }
    if (editing === 'new') {
      persist([...all, { id: Date.now(), type, ...values, createdAt: new Date().toISOString() }])
    } else {
      persist(all.map(c => (c.id === editing ? { ...c, ...values } : c)))
    }
    setEditing(null)
  }

  const remove = () => {
    if (!current) return
    if (usedBy.length) return
    if (!confirm(`¿Eliminar la categoría "${current.name}"?`)) return
    persist(all.filter(c => c.id !== current.id))
    setEditing(null)
  }

  const { Icon } = cfg

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Categorías - Check and Point" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/units/categories" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" /> Volver a Categorías
        </Link>
        <div className="flex items-center mb-6">
          <Icon className="h-8 w-8 text-indigo-600 mr-3" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{cfg.title}</h1>
            <p className="mt-1 text-sm text-gray-500">{cfg.subtitle}</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="block w-full pl-9 rounded-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm text-black"
                placeholder="Buscar categoría"
              />
            </div>
            <button
              type="button"
              onClick={openNew}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
            >
              <Plus className="h-4 w-4 mr-2" /> Nueva categoría
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Nombre</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Monto</th>
                  {isServicio && <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Zona</th>}
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Descripción</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">Editar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={isServicio ? 5 : 4} className="px-4 py-8 text-center text-sm text-gray-500">
                      {term ? 'No hay categorías que coincidan con la búsqueda.' : `Todavía no hay categorías de ${cfg.singular}.`}
                    </td>
                  </tr>
                ) : (
                  items.map(c => (
                    <tr key={c.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{c.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{formatMoney(c.currency, c.amount)}</td>
                      {isServicio && <td className="px-4 py-3 text-sm text-gray-700">{c.zona || '-'}</td>}
                      <td className="px-4 py-3 text-sm text-gray-500">{c.description || '-'}</td>
                      <td className="px-4 py-3 text-right">
                        <button type="button" onClick={() => openEdit(c)} className="text-indigo-600 hover:text-indigo-800" aria-label={`Editar ${c.name}`}>
                          <Pencil className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {editing !== null && (
        <Modal
          title={editing === 'new' ? `Nueva categoría de ${cfg.singular}` : `Editar categoría de ${cfg.singular}`}
          onClose={() => setEditing(null)}
        >
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label htmlFor="cat-name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input id="cat-name" type="text" value={form.name} autoFocus
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className={inputClass(errors.name)} />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="cat-amount" className="block text-sm font-medium text-gray-700">Monto</label>
              <MoneyInput
                id="cat-amount"
                amount={form.amount}
                currency={form.currency}
                onAmountChange={v => setForm(f => ({ ...f, amount: v }))}
                onCurrencyChange={v => setForm(f => ({ ...f, currency: v }))}
                // Si la usan alojamientos, no se cambia la moneda (dejaría de coincidir con la de sus cargos).
                currencyDisabled={usedBy.length > 0}
                error={!!errors.amount}
              />
              {errors.amount && <p className="mt-1 text-sm text-red-600">{errors.amount}</p>}
              {usedBy.length > 0 && (
                <p className="mt-1 text-xs text-gray-500">
                  La usan {usedBy.length} alojamiento{usedBy.length === 1 ? '' : 's'}: el precio nuevo se aplica a todos. La moneda no se puede cambiar.
                </p>
              )}
            </div>
            {isServicio && (
              <div>
                <label htmlFor="cat-zona" className="block text-sm font-medium text-gray-700">Zona</label>
                <select id="cat-zona" value={form.zona} onChange={e => setForm(f => ({ ...f, zona: e.target.value }))}
                  className={inputClass(errors.zona)}>
                  <option value="">Seleccioná una zona</option>
                  {ZONAS.map(z => <option key={z} value={z}>{z}</option>)}
                </select>
                {errors.zona && <p className="mt-1 text-sm text-red-600">{errors.zona}</p>}
              </div>
            )}
            <div>
              <label htmlFor="cat-desc" className="block text-sm font-medium text-gray-700">Descripción</label>
              <textarea id="cat-desc" rows={3} value={form.description}
                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                className={inputClass()} />
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              {current ? (
                <button type="button" onClick={remove} disabled={usedBy.length > 0}
                  title={usedBy.length ? `No se puede eliminar: la usan ${usedBy.map(p => p.name).join(', ')}` : undefined}
                  className="text-sm text-red-600 hover:text-red-800 disabled:text-gray-300 disabled:cursor-not-allowed">
                  Eliminar
                </button>
              ) : <span />}
              <div className="flex gap-3">
                <button type="button" onClick={() => setEditing(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Cancelar
                </button>
                <button type="submit" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  {editing === 'new' ? 'Guardar' : 'Guardar cambios'}
                </button>
              </div>
            </div>
          </form>
        </Modal>
      )}
    </div>
  )
}
