// Modelo de datos, constantes y helpers para Propiedades (Alojamientos y Cocheras)
// Persistencia en localStorage (demo), siguiendo el patrón del resto de la app.

export const PROPERTIES_STORAGE_KEY = 'checkAndPointUnits'

export type PropertyCategory = 'alojamiento' | 'cochera'

export const ZONAS = [
  'Centro',
  'Güemes',
  'La Perla',
  'Playa Grande',
  'Faro',
  'Chapadmalal',
  'Aldrey',
] as const

export const PROPERTY_TYPES = [
  { id: 'departamento', name: 'Departamento' },
  { id: 'casa', name: 'Casa' },
] as const

// Comodidades disponibles. `chargeKey` indica qué cargo se vuelve obligatorio
// cuando la comodidad está seleccionada (ver wireframe de Cargos).
export const AMENITIES = [
  { id: 'mascotas', name: 'Mascotas', chargeKey: 'mascotas' },
  { id: 'calefaccion', name: 'Calefacción' },
  { id: 'parrilla', name: 'Parrilla' },
  { id: 'terrazaBalcon', name: 'Terraza/Balcón' },
  { id: 'lavarropas', name: 'Lavarropas' },
  { id: 'cochera', name: 'Cochera', chargeKey: 'cochera' },
  { id: 'vistaAlMar', name: 'Vista al mar' },
  { id: 'aireAcondicionado', name: 'Aire Acondicionado' },
  { id: 'jovenes', name: 'Jóvenes', chargeKey: 'depositoJoven' },
] as const

export const BED_TYPES = [
  { id: 'camaDoble', name: 'Cama doble' },
  { id: 'camaSimple', name: 'Cama simple' },
  { id: 'sillonCamaDoble', name: 'Sillón cama doble' },
  { id: 'sillonCamaSimple', name: 'Sillón cama simple' },
] as const

export interface BedConfig {
  enabled: boolean
  quantity: number
}

export interface Property {
  id: number
  category: PropertyCategory
  name: string
  zona: string
  address: string
  number: string
  floor: string
  apartment: string
  description: string

  // Detalles
  bedrooms: string
  bathrooms: string
  maxGuests: string
  propertyType: string

  // Horarios
  checkInFrom: string
  checkInTo: string
  checkOutFrom: string
  checkOutTo: string

  // Camas
  beds: Record<string, BedConfig>

  // Comodidades (id -> seleccionado)
  amenities: Record<string, boolean>
  mtsDelMar: string

  // Cargos
  charges: {
    limpieza: string
    servicio: string
    mascotas: string
    cochera: string
    deposito: string
    depositoJoven: string
  }

  // WIFI
  wifiNetwork: string
  wifiPassword: string

  // Llaves
  keysCount: string
  electronicKey: boolean
  keyCode: string

  // IDs externos
  bookingId: string
  airbnbId: string

  // Cuenta bancaria del propietario
  bank: {
    entidad: string
    numeroCuenta: string
    cbu: string
    alias: string
    titular: string
    cuitDni: string
  }

  photos: string[]
  enabled: boolean
  eliminado: boolean
  createdAt: string
  deletedAt: string | null
}

export function loadProperties(): Property[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(PROPERTIES_STORAGE_KEY) || '[]')
  } catch (error) {
    console.error('Error loading properties:', error)
    return []
  }
}

export function saveProperties(properties: Property[]) {
  localStorage.setItem(PROPERTIES_STORAGE_KEY, JSON.stringify(properties))
}

export function getZonaList(): readonly string[] {
  return ZONAS
}
