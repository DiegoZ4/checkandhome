'use client'

import { useState } from 'react'
import { ArrowLeft, LayoutGrid, BrushCleaning, DoorOpen, PawPrint } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Modal from '@/components/Modal'
import MoneyInput from '@/components/MoneyInput'
import { loadPetCharge, savePetCharge, formatMoney, type PetCharge } from '@/lib/chargeCategories'

const cardClass =
  'flex flex-col items-center justify-center border-2 border-gray-200 rounded-lg p-10 hover:border-indigo-500 hover:bg-indigo-50 transition-colors group'

/** Propiedades → Categorías: elegir Limpieza, Servicio o Mascotas. */
export default function CategoriesHomePage() {
  // CloudSyncGate no renderiza en el servidor: se puede leer localStorage al iniciar.
  const [pet, setPet] = useState<PetCharge>(() => loadPetCharge())
  const [editingPet, setEditingPet] = useState<PetCharge | null>(null)
  const [petError, setPetError] = useState('')

  const savePet = (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingPet) return
    const n = parseFloat(editingPet.amount)
    if (editingPet.amount === '' || isNaN(n) || n < 0) return setPetError('Ingresá un monto válido')
    savePetCharge(editingPet)
    setPet(editingPet)
    setEditingPet(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Categorías - Check and Point" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/units" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" /> Volver a Propiedades
        </Link>
        <div className="flex items-center mb-8">
          <LayoutGrid className="h-8 w-8 text-indigo-600 mr-3" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Categorías</h1>
            <p className="mt-1 text-sm text-gray-500">Seleccioná la categoría que deseás gestionar</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/units/categories/limpieza" className={cardClass}>
              <BrushCleaning className="h-16 w-16 text-gray-600 group-hover:text-indigo-600 mb-4" />
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-700">Limpieza</span>
            </Link>
            <Link href="/units/categories/servicio" className={cardClass}>
              <DoorOpen className="h-16 w-16 text-gray-600 group-hover:text-indigo-600 mb-4" />
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-700">Servicio</span>
              <span className="mt-1 text-xs text-gray-500">Check-in / Check-out</span>
            </Link>
            <button type="button" onClick={() => { setEditingPet(pet); setPetError('') }} className={cardClass}>
              <PawPrint className="h-16 w-16 text-gray-600 group-hover:text-indigo-600 mb-4" />
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-700">Mascotas</span>
              <span className="mt-1 text-xs text-gray-500">
                {pet.amount ? `${formatMoney(pet.currency, pet.amount)} por mascota` : 'Sin precio cargado'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {editingPet && (
        <Modal
          title="Precio por mascota"
          description="El importe se cobra por mascota y por estadía."
          onClose={() => setEditingPet(null)}
        >
          <form onSubmit={savePet}>
            <label htmlFor="pet-amount" className="block text-sm font-medium text-gray-700">Monto</label>
            <MoneyInput
              id="pet-amount"
              amount={editingPet.amount}
              currency={editingPet.currency}
              onAmountChange={v => { setEditingPet(p => p && { ...p, amount: v }); setPetError('') }}
              onCurrencyChange={v => setEditingPet(p => p && { ...p, currency: v })}
              error={!!petError}
            />
            {petError && <p className="mt-1 text-sm text-red-600">{petError}</p>}
            <p className="mt-2 text-xs text-gray-500">
              Cargo total = precio × cantidad de mascotas. Se aplica automáticamente en todos los alojamientos.
            </p>
            <div className="mt-5 flex justify-end gap-3">
              <button type="button" onClick={() => setEditingPet(null)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Cancelar
              </button>
              <button type="submit"
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Guardar cambios
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  )
}
