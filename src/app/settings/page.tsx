'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Save, Key, Settings, Globe, Calendar, Info } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

interface UserSettings {
  airbnbApiKey?: string
  airbnbClientId?: string
  airbnbClientSecret?: string
  bookingComApiKey?: string
  bookingComUsername?: string
  bookingComPassword?: string
  notifications: {
    newBookings: boolean
    cancellations: boolean
    checkInReminders: boolean
    checkOutReminders: boolean
  }
  channelSync: {
    airbnbEnabled: boolean
    bookingComEnabled: boolean
    syncInterval: number // minutos
    autoSync: boolean
  }
}

const DEFAULT_SETTINGS: UserSettings = {
  notifications: {
    newBookings: true,
    cancellations: true,
    checkInReminders: true,
    checkOutReminders: true
  },
  channelSync: {
    airbnbEnabled: false,
    bookingComEnabled: false,
    syncInterval: 30,
    autoSync: false
  }
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<UserSettings>(DEFAULT_SETTINGS)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')
  const [activeTab, setActiveTab] = useState<'channels' | 'notifications' | 'general'>('channels')
  const [showApiKeys, setShowApiKeys] = useState(false)

  useEffect(() => {
    // Cargar configuraciones guardadas
    const savedSettings = localStorage.getItem('checkAndPointUserSettings')
    if (savedSettings) {
      setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(savedSettings) })
    }
  }, [])

  const saveSettings = async () => {
    setIsSaving(true)
    setSaveMessage('')

    try {
      // Validar API key de Airbnb si está configurada
      if (settings.airbnbApiKey) {
        if (settings.airbnbApiKey.length < 20) {
          throw new Error('La API key de Airbnb parece ser demasiado corta')
        }
      }

      // Guardar en localStorage
      localStorage.setItem('checkAndPointUserSettings', JSON.stringify(settings))
      
      // También actualizar la configuración de canales
      const currentChannels = JSON.parse(localStorage.getItem('checkAndPointChannelConfig') || '{}')
      const updatedChannels = {
        ...currentChannels,
        airbnb: {
          ...currentChannels.airbnb,
          enabled: settings.channelSync.airbnbEnabled && Boolean(settings.airbnbApiKey),
          apiKey: settings.airbnbApiKey,
          clientId: settings.airbnbClientId,
          clientSecret: settings.airbnbClientSecret
        },
        bookingCom: {
          ...currentChannels.bookingCom,
          enabled: settings.channelSync.bookingComEnabled && Boolean(settings.bookingComApiKey),
          apiKey: settings.bookingComApiKey,
          username: settings.bookingComUsername,
          password: settings.bookingComPassword
        }
      }
      
      localStorage.setItem('checkAndPointChannelConfig', JSON.stringify(updatedChannels))
      
      setSaveMessage('Configuración guardada exitosamente')
      setTimeout(() => setSaveMessage(''), 3000)
    } catch (error) {
      setSaveMessage(`Error: ${(error as Error).message}`)
      setTimeout(() => setSaveMessage(''), 5000)
    }

    setIsSaving(false)
  }

  const updateSettings = (path: keyof UserSettings, value: string | boolean | number) => {
    setSettings(prev => ({ ...prev, [path]: value }))
  }

  const updateNestedSettings = (section: keyof UserSettings, field: string, value: string | boolean | number) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...(prev[section] as Record<string, unknown>),
        [field]: value
      }
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Configuración - Check and Point" />
      
      <div className="max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Settings className="h-7 w-7 mr-2 text-blue-600" />
                  Configuración
                </h1>
                <p className="text-gray-600">Gestiona las configuraciones de tu cuenta y integraciones</p>
              </div>
              
              <button
                onClick={saveSettings}
                disabled={isSaving}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                         disabled:opacity-50 transition-colors flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>{isSaving ? 'Guardando...' : 'Guardar'}</span>
              </button>
            </div>

            {saveMessage && (
              <div className={`mt-4 p-3 rounded-lg ${
                saveMessage.includes('Error') 
                  ? 'bg-red-50 text-red-800 border border-red-200' 
                  : 'bg-green-50 text-green-800 border border-green-200'
              }`}>
                {saveMessage}
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex space-x-8 px-6">
              {[
                { id: 'channels', name: 'Integraciones', icon: Globe },
                { id: 'notifications', name: 'Notificaciones', icon: Bell },
                { id: 'general', name: 'General', icon: Settings }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'channels' | 'notifications' | 'general')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            
            {/* Tab: Integraciones de Canales */}
            {activeTab === 'channels' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-blue-600" />
                    Integraciones de Channel Manager
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Conecta tu cuenta con plataformas como Airbnb y Booking.com para sincronizar 
                    automáticamente calendarios, precios y reservas.
                  </p>
                </div>

                {/* Airbnb Integration */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Ab</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Airbnb</h3>
                        <p className="text-sm text-gray-600">Sincronización de calendario y reservas</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.channelSync.airbnbEnabled}
                        onChange={(e) => updateNestedSettings('channelSync', 'airbnbEnabled', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                    peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full 
                                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                                    after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
                                    after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  {settings.channelSync.airbnbEnabled && (
                    <div className="space-y-4 border-t border-gray-100 pt-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start space-x-2">
                          <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm">
                            <p className="text-blue-800 font-medium mb-1">Información importante sobre la API de Airbnb</p>
                            <p className="text-blue-700 mb-2">
                              Para obtener acceso a la API de Airbnb, necesitas registrarte en su programa de partners.
                            </p>
                            <ul className="text-blue-700 text-xs space-y-1 ml-4">
                              <li>• Visita <a href="https://developer.airbnb.com/" target="_blank" className="underline">developer.airbnb.com</a></li>
                              <li>• Completa el proceso de registro como partner</li>
                              <li>• Acepta los términos de servicio de la API</li>
                              <li>• Obtén tu API Key y Client ID</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            API Key *
                          </label>
                          <div className="relative">
                            <Key className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <input
                              type={showApiKeys ? "text" : "password"}
                              value={settings.airbnbApiKey || ''}
                              onChange={(e) => updateSettings('airbnbApiKey', e.target.value)}
                              placeholder="Ingresa tu API Key de Airbnb"
                              className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg 
                                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button
                              type="button"
                              onClick={() => setShowApiKeys(!showApiKeys)}
                              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            >
                              {showApiKeys ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Client ID
                          </label>
                          <input
                            type="text"
                            value={settings.airbnbClientId || ''}
                            onChange={(e) => updateSettings('airbnbClientId', e.target.value)}
                            placeholder="Client ID (opcional)"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Client Secret
                          </label>
                          <input
                            type={showApiKeys ? "text" : "password"}
                            value={settings.airbnbClientSecret || ''}
                            onChange={(e) => updateSettings('airbnbClientSecret', e.target.value)}
                            placeholder="Client Secret (opcional)"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Booking.com Integration */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">B</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Booking.com</h3>
                        <p className="text-sm text-gray-600">Sincronización de disponibilidad y reservas</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.channelSync.bookingComEnabled}
                        onChange={(e) => updateNestedSettings('channelSync', 'bookingComEnabled', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                    peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full 
                                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                                    after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
                                    after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  {settings.channelSync.bookingComEnabled && (
                    <div className="space-y-4 border-t border-gray-100 pt-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start space-x-2">
                          <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm">
                            <p className="text-blue-800 font-medium mb-1">Configuración de Booking.com</p>
                            <p className="text-blue-700">
                              Contacta a tu account manager de Booking.com para obtener acceso a la API.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            API Key
                          </label>
                          <input
                            type={showApiKeys ? "text" : "password"}
                            value={settings.bookingComApiKey || ''}
                            onChange={(e) => updateSettings('bookingComApiKey', e.target.value)}
                            placeholder="API Key de Booking.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Usuario
                          </label>
                          <input
                            type="text"
                            value={settings.bookingComUsername || ''}
                            onChange={(e) => updateSettings('bookingComUsername', e.target.value)}
                            placeholder="Usuario de acceso"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contraseña
                          </label>
                          <input
                            type={showApiKeys ? "text" : "password"}
                            value={settings.bookingComPassword || ''}
                            onChange={(e) => updateSettings('bookingComPassword', e.target.value)}
                            placeholder="Contraseña de acceso"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sync Settings */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    Configuración de Sincronización
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Sincronización Automática</label>
                        <p className="text-xs text-gray-500">Sincronizar automáticamente cada cierto tiempo</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.channelSync.autoSync}
                          onChange={(e) => updateNestedSettings('channelSync', 'autoSync', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                      peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full 
                                      peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                                      after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
                                      after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    {settings.channelSync.autoSync && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Intervalo de Sincronización (minutos)
                        </label>
                        <select
                          value={settings.channelSync.syncInterval}
                          onChange={(e) => updateNestedSettings('channelSync', 'syncInterval', parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                                   focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value={15}>15 minutos</option>
                          <option value={30}>30 minutos</option>
                          <option value={60}>1 hora</option>
                          <option value={120}>2 horas</option>
                          <option value={360}>6 horas</option>
                          <option value={720}>12 horas</option>
                          <option value={1440}>24 horas</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Notificaciones */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-blue-600" />
                    Configuración de Notificaciones
                  </h2>
                  <p className="text-gray-600">
                    Configura qué notificaciones deseas recibir sobre tus reservas y propiedades.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { key: 'newBookings', label: 'Nuevas Reservas', desc: 'Recibir notificación cuando llegue una nueva reserva' },
                    { key: 'cancellations', label: 'Cancelaciones', desc: 'Notificar cuando una reserva sea cancelada' },
                    { key: 'checkInReminders', label: 'Recordatorios de Check-in', desc: 'Recordatorios antes del check-in' },
                    { key: 'checkOutReminders', label: 'Recordatorios de Check-out', desc: 'Recordatorios antes del check-out' }
                  ].map((notification) => (
                    <div key={notification.key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <label className="text-sm font-medium text-gray-700">{notification.label}</label>
                        <p className="text-xs text-gray-500">{notification.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.notifications[notification.key as keyof typeof settings.notifications]}
                          onChange={(e) => updateNestedSettings('notifications', notification.key, e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                      peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full 
                                      peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                                      after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
                                      after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: General */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-blue-600" />
                    Configuración General
                  </h2>
                  <p className="text-gray-600">
                    Configuraciones generales de la aplicación.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Info className="h-5 w-5 text-yellow-600" />
                    <p className="text-sm text-yellow-800">
                      Más opciones de configuración general estarán disponibles en futuras versiones.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

// Import Bell component for notifications tab
import { Bell, Eye, EyeOff } from 'lucide-react'