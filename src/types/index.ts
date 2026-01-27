import { UserRole } from '@/generated/prisma'

export interface User {
  id: string
  email: string
  name?: string | null
  role: UserRole
  phone?: string | null
  avatar?: string | null
}

export interface Unit {
  id: string
  name: string
  description?: string | null
  address: string
  pricePerDay: number
  currency: string
  active: boolean
  ownerId: string
}

export interface Booking {
  id: string
  unitId: string
  guestId: string
  checkIn: Date
  checkOut: Date
  totalPrice: number
  currency: string
  status: string
  source: string
  guestName: string
  guestEmail: string
  numberOfGuests: number
}

export interface Amenity {
  id: string
  name: string
  logo?: string | null
}

export interface CalendarEvent {
  id: string
  title: string
  start: Date
  end: Date
  color?: string
  extendedProps?: {
    bookingId?: string
    unitId?: string
    status?: string
  }
}