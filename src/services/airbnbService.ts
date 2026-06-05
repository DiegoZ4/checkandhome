import { CHANNEL_UTILS, API_ENDPOINTS, STORAGE_KEYS } from '@/config/app.config'

export interface AirbnbListing {
  id: string
  title: string
  description: string
  address: string
  pricePerNight: number
  currency: string
  maxGuests: number
  bedrooms: number
  bathrooms: number
  amenities: string[]
  availability: AirbnbCalendar[]
  photos: string[]
}

export interface AirbnbBooking {
  id: string
  listingId: string
  guestName: string
  guestEmail: string
  checkIn: string
  checkOut: string
  guests: number
  totalPrice: number
  status: 'confirmed' | 'pending' | 'cancelled'
  paymentStatus: 'paid' | 'pending' | 'refunded'
  specialRequests?: string
  createdAt: string
  updatedAt: string
}

export interface AirbnbCalendar {
  date: string
  available: boolean
  price?: number
  minStay?: number
  maxStay?: number
}

export class AirbnbService {
  private apiKey: string
  private clientId?: string
  private clientSecret?: string
  private baseUrl: string

  constructor() {
    const config = CHANNEL_UTILS.getChannelConfig('airbnb')
    this.apiKey = config.apiKey || ''
    this.clientId = config.clientId
    this.clientSecret = config.clientSecret
    this.baseUrl = API_ENDPOINTS.airbnb.production
  }

  /**
   * Verificar si el servicio está configurado correctamente
   */
  isConfigured(): boolean {
    return Boolean(this.apiKey) && this.apiKey.length >= 20
  }

  /**
   * Verificar la conectividad y validez de las credenciales
   */
  async testConnection(): Promise<{ success: boolean; message: string }> {
    if (!this.isConfigured()) {
      return { success: false, message: 'API Key no configurada' }
    }

    try {
      // En un entorno real, aquí haríamos una llamada a la API de Airbnb
      // Por ahora simulamos la validación
      await this.simulateApiCall('test')

      // Actualizar timestamp de última conexión
      this.updateLastSync()

      return { success: true, message: 'Conectado exitosamente' }
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Error de conexión'
      }
    }
  }

  /**
   * Obtener listings/propiedades de Airbnb
   */
  async getListings(): Promise<AirbnbListing[]> {
    if (!this.isConfigured()) {
      throw new Error('Servicio no configurado')
    }

    try {
      // Simulación de datos (en producción sería una llamada real a la API)
      await this.simulateApiCall('listings')

      // Datos de ejemplo para demostración
      const mockListings: AirbnbListing[] = [
        {
          id: 'airbnb_123456',
          title: 'Apartamento moderno en el centro',
          description: 'Hermoso apartamento con todas las comodidades',
          address: 'Av. Corrientes 1234, Buenos Aires',
          pricePerNight: 85,
          currency: 'USD',
          maxGuests: 4,
          bedrooms: 2,
          bathrooms: 1,
          amenities: ['wifi', 'ac', 'kitchen', 'tv'],
          availability: this.generateMockCalendar(),
          photos: [
            'https://example.com/photo1.jpg',
            'https://example.com/photo2.jpg'
          ]
        }
      ]

      this.updateLastSync()
      return mockListings
    } catch (error) {
      throw new Error(`Error obteniendo listings: ${error}`)
    }
  }

  /**
   * Obtener reservas de Airbnb
   */
  async getBookings(): Promise<AirbnbBooking[]> {
    if (!this.isConfigured()) {
      throw new Error('Servicio no configurado')
    }

    try {
      await this.simulateApiCall('bookings')

      // Datos de ejemplo
      const mockBookings: AirbnbBooking[] = [
        {
          id: 'airbnb_booking_789',
          listingId: 'airbnb_123456',
          guestName: 'John Doe',
          guestEmail: 'john.doe@example.com',
          checkIn: '2024-02-15',
          checkOut: '2024-02-18',
          guests: 2,
          totalPrice: 255,
          status: 'confirmed',
          paymentStatus: 'paid',
          specialRequests: 'Late check-in requested',
          createdAt: '2024-02-01T10:00:00Z',
          updatedAt: '2024-02-01T10:00:00Z'
        }
      ]

      this.updateLastSync()
      return mockBookings
    } catch (error) {
      throw new Error(`Error obteniendo reservas: ${error}`)
    }
  }

  /**
   * Actualizar calendario/disponibilidad en Airbnb
   */
  async updateCalendar(listingId: string, calendar: AirbnbCalendar[]): Promise<void> {
    if (!this.isConfigured()) {
      throw new Error('Servicio no configurado')
    }

    try {
      await this.simulateApiCall('calendar')

      // En producción, aquí se enviarían los datos del calendario a Airbnb
      console.log(`Actualizando calendario para listing ${listingId}:`, calendar)

      this.updateLastSync()
    } catch (error) {
      throw new Error(`Error actualizando calendario: ${error}`)
    }
  }

  /**
   * Sincronizar datos con la aplicación local
   */
  async syncToLocal(): Promise<{ listings: number; bookings: number }> {
    try {
      const [listings, bookings] = await Promise.all([
        this.getListings(),
        this.getBookings()
      ])

      // Convertir listings de Airbnb al formato local
      const localUnits = listings.map(listing => ({
        id: listing.id,
        name: listing.title,
        address: listing.address,
        description: listing.description,
        maxGuests: listing.maxGuests,
        bedrooms: listing.bedrooms,
        bathrooms: listing.bathrooms,
        pricePerNight: listing.pricePerNight,
        currency: listing.currency,
        amenities: listing.amenities,
        photos: listing.photos,
        source: 'airbnb',
        externalId: listing.id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }))

      // Convertir bookings de Airbnb al formato local
      const localBookings = bookings.map(booking => ({
        id: booking.id,
        unitId: booking.listingId,
        guestName: booking.guestName,
        guestEmail: booking.guestEmail,
        checkIn: booking.checkIn,
        checkOut: booking.checkOut,
        guests: booking.guests,
        totalAmount: booking.totalPrice,
        status: booking.status.toUpperCase(),
        paymentStatus: booking.paymentStatus,
        notes: booking.specialRequests || '',
        source: 'airbnb',
        externalId: booking.id,
        createdAt: booking.createdAt,
        updatedAt: booking.updatedAt
      }))

      // Guardar en localStorage (en producción sería en base de datos)
      const existingUnits = JSON.parse(localStorage.getItem(STORAGE_KEYS.UNITS) || '[]')
      const existingBookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS) || '[]')

      // Merge de datos sin duplicados
      const updatedUnits = this.mergeData(existingUnits, localUnits, 'externalId')
      const updatedBookings = this.mergeData(existingBookings, localBookings, 'externalId')

      localStorage.setItem(STORAGE_KEYS.UNITS, JSON.stringify(updatedUnits))
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(updatedBookings))

      return {
        listings: localUnits.length,
        bookings: localBookings.length
      }
    } catch (error) {
      throw new Error(`Error en sincronización: ${error}`)
    }
  }

  /**
   * Simular llamada a API (para demostración)
   */
  private async simulateApiCall(endpoint: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simular éxito el 90% de las veces
        if (Math.random() > 0.1) {
          resolve()
        } else {
          reject(new Error(`Error simulado en ${endpoint}`))
        }
      }, 1000 + Math.random() * 2000) // 1-3 segundos
    })
  }

  /**
   * Generar calendario mock para demostración
   */
  private generateMockCalendar(): AirbnbCalendar[] {
    const calendar: AirbnbCalendar[] = []
    const today = new Date()

    for (let i = 0; i < 90; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      calendar.push({
        date: date.toISOString().split('T')[0],
        available: Math.random() > 0.3, // 70% disponible
        price: 85 + Math.floor(Math.random() * 40), // $85-125
        minStay: 2,
        maxStay: 14
      })
    }

    return calendar
  }

  /**
   * Actualizar timestamp de última sincronización
   */
  private updateLastSync(): void {
    try {
      const config = JSON.parse(localStorage.getItem(STORAGE_KEYS.CHANNEL_CONFIG) || '{}')
      config.airbnb = {
        ...config.airbnb,
        lastSync: new Date().toISOString()
      }
      localStorage.setItem(STORAGE_KEYS.CHANNEL_CONFIG, JSON.stringify(config))
    } catch (error) {
      console.error('Error updating last sync:', error)
    }
  }

  /**
   * Fusionar datos sin duplicados
   */
  private mergeData<T extends Record<string, unknown>>(existing: T[], newData: T[], keyField: string): T[] {
    const merged = [...existing]

    newData.forEach(newItem => {
      const existingIndex = merged.findIndex(item => item[keyField] === newItem[keyField])
      if (existingIndex >= 0) {
        // Actualizar existente
        merged[existingIndex] = { ...merged[existingIndex], ...newItem }
      } else {
        // Agregar nuevo
        merged.push(newItem)
      }
    })

    return merged
  }
}

// Instancia singleton
export const airbnbService = new AirbnbService()