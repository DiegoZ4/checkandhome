'use client'

/**
 * Selector de horario "HH:MM" con minutos de a 15 (00, 15, 30, 45).
 * Reemplaza a <input type="time">, cuyo selector muestra todos los minutos y no
 * impide elegir un horario menor al mínimo.
 * - min: horario mínimo permitido (p. ej. el "De" para el "Hasta"); lo anterior queda deshabilitado.
 * - max: horario máximo permitido; lo posterior queda deshabilitado.
 * - Si el valor guardado tiene minutos fuera de la grilla (datos viejos), se muestra igual.
 */

const HOURS = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'))
const QUARTERS = ['00', '15', '30', '45']

type Props = {
  id?: string
  value: string
  onChange: (value: string) => void
  min?: string
  max?: string
  className?: string
}

export default function TimeSelect({ id, value, onChange, min = '', max = '', className = '' }: Props) {
  const [hour = '', minute = ''] = value ? value.split(':') : []
  const [minHour = ''] = min ? min.split(':') : []
  const [maxHour = ''] = max ? max.split(':') : []

  const minutes = minute && !QUARTERS.includes(minute) ? [...QUARTERS, minute].sort() : QUARTERS
  const allowed = (h: string, m: string) => (!min || `${h}:${m}` >= min) && (!max || `${h}:${m}` <= max)
  const hourAllowed = (h: string) => (!min || h >= minHour) && (!max || h <= maxHour)
  // Primer minuto permitido para una hora (respetando mínimo y máximo).
  const firstMinute = (h: string) => QUARTERS.find((m) => allowed(h, m)) ?? (min && h === minHour ? min.split(':')[1] : '00')

  const changeHour = (h: string) => {
    if (!h) return onChange('')
    const m = minute && allowed(h, minute) ? minute : firstMinute(h)
    onChange(`${h}:${m}`)
  }

  const changeMinute = (m: string) => {
    const h = hour || minHour || '00'
    onChange(`${h}:${m}`)
  }

  const selectClass = `block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black ${className}`

  return (
    <div className="flex items-center gap-1">
      <select id={id} aria-label="Hora" value={hour} onChange={(e) => changeHour(e.target.value)} className={selectClass}>
        <option value="">--</option>
        {HOURS.map((h) => (
          <option key={h} value={h} disabled={!hourAllowed(h)}>
            {h}
          </option>
        ))}
      </select>
      <span className="text-gray-500">:</span>
      <select aria-label="Minutos" value={minute} onChange={(e) => changeMinute(e.target.value)} className={selectClass}>
        {!minute && <option value="">--</option>}
        {minutes.map((m) => (
          <option key={m} value={m} disabled={!allowed(hour || minHour || '00', m)}>
            {m}
          </option>
        ))}
      </select>
    </div>
  )
}
