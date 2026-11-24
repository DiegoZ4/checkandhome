'use client'

import { MONEY_CURRENCIES, type ChargeCurrency } from '@/lib/chargeCategories'

/** Campo de importe con la moneda (USD o $) elegida antes del monto. */
export default function MoneyInput({
  id,
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
  currencyDisabled = false,
  error = false,
}: {
  id?: string
  amount: string
  currency: ChargeCurrency
  onAmountChange: (v: string) => void
  onCurrencyChange: (v: ChargeCurrency) => void
  currencyDisabled?: boolean
  error?: boolean
}) {
  const border = error ? 'border-red-300' : 'border-gray-300'
  return (
    <div className="mt-1 flex rounded-md shadow-sm">
      <select
        aria-label="Moneda"
        value={currency}
        disabled={currencyDisabled}
        onChange={e => onCurrencyChange(e.target.value as ChargeCurrency)}
        className={`rounded-l-md border ${border} bg-gray-50 px-2 text-sm text-black focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-70`}
      >
        {MONEY_CURRENCIES.map(c => <option key={c.id} value={c.id}>{c.symbol}</option>)}
      </select>
      <input
        id={id}
        type="number"
        min="0"
        step="0.01"
        value={amount}
        onChange={e => onAmountChange(e.target.value)}
        className={`-ml-px block w-full rounded-r-md border ${border} text-sm text-black focus:border-indigo-500 focus:ring-indigo-500`}
        placeholder="0.00"
      />
    </div>
  )
}
