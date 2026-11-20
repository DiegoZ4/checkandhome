'use client'

import { Suspense, useState } from 'react'
import { Tags, Plus, Edit, Trash2, Save, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { loadProperties, ZONAS, CURRENCIES } from '@/lib/properties'
import {
  loadChargeCategories,
  saveChargeCategories,
  loadPetCharges,
  savePetCharges,
  formatMoney,
  ChargeCategory,
  ChargeCategoryType,
  ChargeCurrency,
  PetCharges,
} from '@/lib/chargeCategories'

type Tab = ChargeCategoryType | 'mascotas'

const TABS: { id: Tab; name: string }[] = [
  { id: 'limpieza', name: 'Limpieza' },
  { id: 'servicio', name: 'Servicio' },
  { id: 'mascotas', name: 'Mascotas' },
]

const inputClass = (error?: string) =>
  `block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${
    error ? 'border-red-300' : ''
  }`

/** Alojamientos (no eliminados) que usan la categoría. */
function propertiesUsing(c: ChargeCategory) {
  return loadProperties().filter(
    p => !p.eliminado && p.charges?.[`${c.type}CategoryId`] === String(c.id),
  )
}

// ---------- Limpieza / Servicio ----------

const EMPTY_FORM = { name: '', zona: '', amount: '', currency: 'USD' as ChargeCurrency }

function CategoryList({ type }: { type: ChargeCategoryType }) {
  // CloudSyncGate no renderiza en el servidor: se puede leer localStorage al iniciar.
  const [all, setAll] = useState<ChargeCategory[]>(() => loadChargeCategories())
  const [form, setForm] = useState(EMPTY_FORM)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [message, setMessage] = useState('')

  const items = all.filter(c => c.type === type)
  const isServicio = type === 'servicio'
  const editingInUse = editingId !== null && propertiesUsing(all.find(c => c.id === editingId)!).length > 0

  const persist = (next: ChargeCategory[]) => {
    setAll(next)
    saveChargeCategories(next)
  }

  const resetForm = () => {
    setForm(EMPTY_FORM)
    setEditingId(null)
    setErrors({})
  }

  const startEdit = (c: ChargeCategory) => {
    setEditingId(c.id)
    setForm({ name: c.name, zona: c.zona, amount: String(c.amount), currency: c.currency })
    setErrors({})
    setMessage('')
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'El nombre es obligatorio'
    if (isServicio && !form.zona) errs.zona = 'Elegí la zona'
    const amount = parseFloat(form.amount)
    if (!form.amount || isNaN(amount) || amount < 0) errs.amount = 'Ingresá un monto válido'
    setErrors(errs)
    if (Object.keys(errs).length) return

    const values = { name: form.name.trim(), zona: isServicio ? form.zona : '', amount, currency: form.currency }
    if (editingId !== null) {
      persist(all.map(c => (c.id === editingId ? { ...c, ...values } : c)))
      setMessage('Categoría actualizada. Los alojamientos que la usan ya toman el precio nuevo.')
    } else {
      persist([...all, { id: Date.now(), type, ...values, createdAt: new Date().toISOString() }])
      setMessage('Categoría creada.')
    }
    resetForm()
  }

  const remove = (c: ChargeCategory) => {
    const used = propertiesUsing(c)
    if (used.length) {
      setMessage(`No se puede borrar "${c.name}": la usan ${used.map(p => p.name).join(', ')}. Cambiá la categoría en esos alojamientos primero.`)
      return
    }
    if (!confirm(`¿Eliminar la categoría "${c.name}"?`)) return
    persist(all.filter(x => x.id !== c.id))
    if (editingId === c.id) resetForm()
    setMessage('Categoría eliminada.')
  }

  return (
    <div className="space-y-6">
      {message && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-md p-3 text-sm text-indigo-800 flex justify-between gap-3">
          <span>{message}</span>
          <button type="button" onClick={() => setMessage('')} aria-label="Cerrar"><X className="h-4 w-4" /></button>
        </div>
      )}

      {/* Formulario alta / edición */}
      <form onSubmit={submit} className="bg-white shadow rounded-lg px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {editingId !== null ? 'Editar categoría' : `Nueva categoría de ${type}`}
        </h3>
        <div className={`grid grid-cols-1 gap-4 ${isServicio ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
          <div>
            <label htmlFor="cat-name" className="block text-sm font-medium text-gray-700">Nombre *</label>
            <input id="cat-name" type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className={`mt-1 ${inputClass(errors.name)}`} placeholder="Ej: Categoría 1" />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>
          {isServicio && (
            <div>
              <label htmlFor="cat-zona" className="block text-sm font-medium text-gray-700">Zona *</label>
              <select id="cat-zona" value={form.zona} onChange={e => setForm(f => ({ ...f, zona: e.target.value }))}
                className={`mt-1 ${inputClass(errors.zona)}`}>
                <option value="">Seleccionar zona</option>
                {ZONAS.map(z => <option key={z} value={z}>{z}</option>)}
              </select>
              {errors.zona && <p className="mt-1 text-sm text-red-600">{errors.zona}</p>}
            </div>
          )}
          <div>
            <label htmlFor="cat-currency" className="block text-sm font-medium text-gray-700">Moneda</label>
            <select id="cat-currency" value={form.currency} disabled={editingInUse}
              onChange={e => setForm(f => ({ ...f, currency: e.target.value as ChargeCurrency }))}
              className={`mt-1 ${inputClass()} disabled:bg-gray-100 disabled:cursor-not-allowed`}>
              {CURRENCIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
            {editingInUse && <p className="mt-1 text-xs text-gray-500">En uso por alojamientos: no se puede cambiar la moneda.</p>}
          </div>
          <div>
            <label htmlFor="cat-amount" className="block text-sm font-medium text-gray-700">Monto *</label>
            <input id="cat-amount" type="number" min="0" step="0.01" value={form.amount}
              onChange={e => setForm(f => ({ ...f, amount: e.target.value }))}
              className={`mt-1 ${inputClass(errors.amount)}`} placeholder="0.00" />
            {errors.amount && <p className="mt-1 text-sm text-red-600">{errors.amount}</p>}
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-3">
          {editingId !== null && (
            <button type="button" onClick={resetForm}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Cancelar
            </button>
          )}
          <button type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            {editingId !== null ? <><Save className="h-4 w-4 mr-2" /> Guardar cambios</> : <><Plus className="h-4 w-4 mr-2" /> Agregar</>}
          </button>
        </div>
      </form>

      {/* Lista */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {items.length === 0 ? (
          <p className="p-6 text-sm text-gray-500 text-center">Todavía no hay categorías de {type}.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Nombre</th>
                  {isServicio && <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Zona</th>}
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Monto</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Alojamientos</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {items.map(c => (
                  <tr key={c.id} className={editingId === c.id ? 'bg-indigo-50' : 'hover:bg-gray-50'}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{c.name}</td>
                    {isServicio && <td className="px-4 py-3 text-sm text-gray-700">{c.zona || '-'}</td>}
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{formatMoney(c.currency, c.amount)}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{propertiesUsing(c).length}</td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button type="button" onClick={() => startEdit(c)} className="text-indigo-600 hover:text-indigo-800 mr-3" aria-label="Editar">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button type="button" onClick={() => remove(c)} className="text-red-600 hover:text-red-800" aria-label="Eliminar">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

// ---------- Mascotas ----------

function PetChargesForm() {
  const [values, setValues] = useState<PetCharges>(() => loadPetCharges())
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const bad = (Object.keys(values) as ChargeCurrency[]).some(k => values[k] !== '' && (isNaN(parseFloat(values[k])) || parseFloat(values[k]) < 0))
    if (bad) return setError('Ingresá montos válidos')
    setError('')
    savePetCharges(values)
    setMessage('Precio de mascotas guardado. Se aplica automáticamente en todos los alojamientos.')
  }

  return (
    <form onSubmit={submit} className="bg-white shadow rounded-lg px-4 py-5 sm:p-6">
      <h3 className="text-lg font-medium text-gray-900">Precio por mascota y por estadía</h3>
      <p className="mt-1 text-sm text-gray-500">
        Se carga solo en cada alojamiento según la moneda de sus cargos y no se puede modificar desde el alojamiento.
      </p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl">
        {CURRENCIES.map(c => (
          <div key={c.id}>
            <label htmlFor={`pet-${c.id}`} className="block text-sm font-medium text-gray-700">{c.name}</label>
            <input id={`pet-${c.id}`} type="number" min="0" step="0.01" value={values[c.id as ChargeCurrency]}
              onChange={e => { setValues(v => ({ ...v, [c.id]: e.target.value })); setMessage('') }}
              className={`mt-1 ${inputClass()}`} placeholder="0.00" />
          </div>
        ))}
      </div>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      {message && <p className="mt-3 text-sm text-green-700">{message}</p>}
      <div className="mt-4 flex justify-end">
        <button type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
          <Save className="h-4 w-4 mr-2" /> Guardar
        </button>
      </div>
    </form>
  )
}

// ---------- Página ----------

function CategoriesContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tabParam = searchParams.get('tab') as Tab | null
  const tab: Tab = TABS.some(t => t.id === tabParam) ? tabParam! : 'limpieza'

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Categorías - Check and Point" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-2">
          <Tags className="h-8 w-8 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Categorías</h1>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Tarifas de limpieza, servicio y mascotas que usan los alojamientos.{' '}
          <Link href="/units/list?category=alojamiento" className="text-indigo-600 hover:text-indigo-800">Ir a Alojamientos</Link>
        </p>

        <div className="border-b border-gray-200 mb-6 flex gap-6" role="tablist">
          {TABS.map(t => (
            <button key={t.id} type="button" role="tab" aria-selected={tab === t.id}
              onClick={() => router.replace(`/categories?tab=${t.id}`)}
              className={`pb-3 text-sm font-medium border-b-2 -mb-px ${
                tab === t.id ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}>
              {t.name}
            </button>
          ))}
        </div>

        {tab === 'mascotas' ? <PetChargesForm /> : <CategoryList key={tab} type={tab} />}
      </div>
    </div>
  )
}

export default function CategoriesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <CategoriesContent />
    </Suspense>
  )
}
