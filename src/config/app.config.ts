// Configuración para Check and Point - Sistema de Reservas
export const APP_CONFIG = {
  appName: 'Check and Point',
  version: '1.0.0',

  // Configuración de canales (Channel Manager)
  channels: {
    airbnb: {
      enabled: false, // Habilitado cuando se integre con API real
      name: 'Airbnb',
      apiUrl: 'https://api.airbnb.com/v1',
      webhookUrl: '/api/webhooks/airbnb',
      supportedMethods: ['GET_BOOKINGS', 'UPDATE_CALENDAR', 'CREATE_BOOKING']
    },
    bookingCom: {
      enabled: false, // Habilitado cuando se integre con API real
      name: 'Booking.com',
      apiUrl: 'https://api.booking.com/v1',
      webhookUrl: '/api/webhooks/booking',
      supportedMethods: ['GET_RESERVATIONS', 'UPDATE_AVAILABILITY', 'CONFIRM_BOOKING']
    },
    direct: {
      enabled: true,
      name: 'Reserva Directa',
      description: 'Reservas creadas directamente en el sistema'
    }
  },

  // Configuración de usuarios
  userRoles: {
    ADMIN: {
      name: 'Administrador',
      permissions: ['ALL']
    },
    OWNER: {
      name: 'Propietario',
      permissions: ['MANAGE_UNITS', 'VIEW_BOOKINGS', 'VIEW_FINANCES']
    },
    GUEST: {
      name: 'Huésped',
      permissions: ['VIEW_BOOKING', 'UPDATE_PROFILE']
    },
    CLEANER: {
      name: 'Personal de Limpieza',
      permissions: ['VIEW_CLEANING_SCHEDULE', 'UPDATE_CLEANING_STATUS']
    },
    CHECKINOUT: {
      name: 'Check-in/Check-out',
      permissions: ['CHECKIN_GUEST', 'CHECKOUT_GUEST', 'VIEW_BOOKINGS']
    }
  },

  // Configuración de amenidades
  amenities: [
    { id: 'wifi', name: 'WiFi', icon: '📶', category: 'connectivity' },
    { id: 'ac', name: 'Aire Acondicionado', icon: '❄️', category: 'climate' },
    { id: 'heating', name: 'Calefacción', icon: '🔥', category: 'climate' },
    { id: 'kitchen', name: 'Cocina Completa', icon: '🍳', category: 'kitchen' },
    { id: 'washer', name: 'Lavadora', icon: '🧺', category: 'utilities' },
    { id: 'dryer', name: 'Secadora', icon: '🌀', category: 'utilities' },
    { id: 'parking', name: 'Estacionamiento', icon: '🚗', category: 'transportation' },
    { id: 'pool', name: 'Piscina', icon: '🏊', category: 'recreation' },
    { id: 'gym', name: 'Gimnasio', icon: '💪', category: 'recreation' },
    { id: 'balcony', name: 'Balcón', icon: '🏡', category: 'outdoor' },
    { id: 'garden', name: 'Jardín', icon: '🌿', category: 'outdoor' },
    { id: 'bbq', name: 'Parrilla', icon: '🔥', category: 'outdoor' },
    { id: 'tv', name: 'TV con Cable', icon: '📺', category: 'entertainment' },
    { id: 'netflix', name: 'Netflix', icon: '🎬', category: 'entertainment' },
    { id: 'pets', name: 'Se Permiten Mascotas', icon: '🐕', category: 'policies' },
    { id: 'smoking', name: 'Área para Fumar', icon: '🚬', category: 'policies' },
    { id: 'elevator', name: 'Ascensor', icon: '🛗', category: 'accessibility' },
    { id: 'wheelchair', name: 'Accesible en Silla de Ruedas', icon: '♿', category: 'accessibility' }
  ],

  // Configuración de monedas
  currencies: {
    USD: {
      symbol: '$',
      name: 'Dólar Estadounidense',
      code: 'USD',
      decimals: 2
    },
    EUR: {
      symbol: '€',
      name: 'Euro',
      code: 'EUR',
      decimals: 2
    },
    GBP: {
      symbol: '£',
      name: 'Libra Esterlina',
      code: 'GBP',
      decimals: 2
    }
  },

  // Estados de reservas
  bookingStatuses: {
    PENDING: {
      name: 'Pendiente',
      color: 'yellow',
      description: 'Reserva en espera de confirmación'
    },
    CONFIRMED: {
      name: 'Confirmada',
      color: 'green',
      description: 'Reserva confirmada por el propietario'
    },
    CANCELLED: {
      name: 'Cancelada',
      color: 'red',
      description: 'Reserva cancelada'
    },
    CHECKED_IN: {
      name: 'Check-in Realizado',
      color: 'blue',
      description: 'Huésped ha hecho check-in'
    },
    CHECKED_OUT: {
      name: 'Check-out Realizado',
      color: 'purple',
      description: 'Huésped ha hecho check-out'
    },
    NO_SHOW: {
      name: 'No Show',
      color: 'gray',
      description: 'Huésped no se presentó'
    }
  },

  // Configuración de integración futura
  integrations: {
    calendar: {
      google: {
        enabled: false,
        clientId: '',
        apiKey: ''
      },
      outlook: {
        enabled: false,
        clientId: '',
        tenantId: ''
      }
    },
    payments: {
      stripe: {
        enabled: false,
        publishableKey: '',
        webhookSecret: ''
      },
      paypal: {
        enabled: false,
        clientId: '',
        environment: 'sandbox' // 'sandbox' | 'production'
      }
    },
    messaging: {
      whatsapp: {
        enabled: false,
        businessAccountId: '',
        phoneNumberId: ''
      },
      sms: {
        enabled: false,
        provider: 'twilio', // 'twilio' | 'aws-sns'
        apiKey: ''
      }
    }
  },

  // Configuración de notificaciones
  notifications: {
    email: {
      enabled: false,
      provider: 'smtp', // 'smtp' | 'sendgrid' | 'ses'
      templates: {
        bookingConfirmation: 'booking_confirmation',
        bookingCancellation: 'booking_cancellation',
        checkInReminder: 'checkin_reminder',
        checkOutReminder: 'checkout_reminder'
      }
    },
    push: {
      enabled: false,
      provider: 'firebase' // 'firebase' | 'onesignal'
    }
  }
}

// Configuración de desarrollo (localStorage keys)
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'checkAndPointToken',
  USER_DATA: 'checkAndPointUser',
  UNITS: 'checkAndPointUnits',
  BOOKINGS: 'checkAndPointBookings',
  EXPENSES: 'checkAndPointExpenses',
  INVENTORY: 'checkAndPointInventory',
  SETTINGS: 'checkAndPointSettings',
  USER_SETTINGS: 'checkAndPointUserSettings',
  CHANNEL_CONFIG: 'checkAndPointChannelConfig'
}

// Configuración de APIs externas y Channel Manager
export const API_ENDPOINTS = {
  airbnb: {
    production: 'https://api.airbnb.com/v1',
    sandbox: 'https://api.airbnb.com/v1/sandbox',
    auth: '/oauth/token',
    listings: '/listings',
    bookings: '/bookings',
    calendar: '/calendar',
    pricing: '/pricing'
  },
  bookingCom: {
    production: 'https://distribution-xml.booking.com/json',
    test: 'https://distribution-xml.booking.com/json/bookings/test',
    reservations: '/reservations',
    availability: '/availability',
    rates: '/rates'
  }
}

// Configuración para integraciones de Channel Manager
export const CHANNEL_MANAGER = {
  airbnb: {
    name: 'Airbnb',
    description: 'Integración con Airbnb para sincronización automática de calendarios, precios y reservas',
    authType: 'oauth2', // oauth2, api_key
    requiredFields: ['apiKey', 'clientId', 'clientSecret'],
    optionalFields: ['webhookUrl'],
    scopes: [
      'read:listings',
      'write:listings',
      'read:bookings',
      'write:bookings',
      'read:calendar',
      'write:calendar'
    ],
    webhookEvents: [
      'booking.created',
      'booking.updated',
      'booking.cancelled',
      'listing.updated',
      'calendar.updated'
    ]
  },
  bookingCom: {
    name: 'Booking.com',
    description: 'Integración con Booking.com para gestión de disponibilidad y reservas',
    authType: 'basic', // basic, api_key
    requiredFields: ['apiKey', 'username', 'password'],
    optionalFields: ['propertyId'],
    supportedOperations: [
      'get_reservations',
      'update_availability',
      'update_rates',
      'confirm_reservation',
      'cancel_reservation'
    ]
  }
}

// Utilidades para Channel Manager
export const CHANNEL_UTILS = {
  // Validar configuración de canal
  validateChannelConfig: (channel: string, config: Record<string, unknown>): { valid: boolean; errors: string[] } => {
    const errors: string[] = []
    const channelConfig = CHANNEL_MANAGER[channel as keyof typeof CHANNEL_MANAGER]

    if (!channelConfig) {
      errors.push(`Canal no soportado: ${channel}`)
      return { valid: false, errors }
    }

    // Validar campos requeridos
    for (const field of channelConfig.requiredFields) {
      const value = config[field]
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        errors.push(`Campo requerido faltante: ${field}`)
      }
    }

    // Validaciones específicas
    if (channel === 'airbnb') {
      const apiKey = config.apiKey as string
      const clientId = config.clientId as string
      if (apiKey && apiKey.length < 20) {
        errors.push('API Key de Airbnb parece ser demasiado corta')
      }
      if (clientId && !/^[a-zA-Z0-9_-]+$/.test(clientId)) {
        errors.push('Client ID de Airbnb contiene caracteres inválidos')
      }
    }

    return { valid: errors.length === 0, errors }
  },

  // Obtener configuración de canal desde localStorage
  getChannelConfig: (channel: string) => {
    try {
      // Verificar si estamos en el navegador
      if (typeof window === 'undefined') {
        return {}
      }

      const config = localStorage.getItem(STORAGE_KEYS.CHANNEL_CONFIG)
      const allConfigs = config ? JSON.parse(config) : {}
      return allConfigs[channel] || {}
    } catch (error) {
      console.error(`Error loading ${channel} config:`, error)
      return {}
    }
  },

  // Verificar si un canal está habilitado
  isChannelEnabled: (channel: string): boolean => {
    try {
      const config = CHANNEL_UTILS.getChannelConfig(channel)
      const validation = CHANNEL_UTILS.validateChannelConfig(channel, config)
      return config.enabled === true && validation.valid
    } catch (error) {
      return false
    }
  },

  // Obtener canales habilitados
  getEnabledChannels: (): string[] => {
    return Object.keys(CHANNEL_MANAGER).filter(channel =>
      CHANNEL_UTILS.isChannelEnabled(channel)
    )
  }
}

// Utilidades para manejo de fechas
export const DATE_FORMATS = {
  DISPLAY: 'DD/MM/YYYY',
  INPUT: 'YYYY-MM-DD',
  DATETIME: 'YYYY-MM-DD HH:mm:ss'
}

// Configuración de validaciones
export const VALIDATIONS = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^\+?[1-9]\d{1,14}$/,
  MIN_PASSWORD_LENGTH: 6,
  MAX_BOOKING_DAYS: 365,
  MIN_BOOKING_DAYS: 1
}

export default APP_CONFIG