import { useState, useEffect } from 'react'
import { CheckCircle, AlertCircle, XCircle, Wifi, WifiOff, RefreshCw, Play } from 'lucide-react'
import { CHANNEL_UTILS, CHANNEL_MANAGER } from '@/config/app.config'
import { airbnbService } from '@/services/airbnbService'

interface ChannelStatus {
  name: string
  enabled: boolean
  connected: boolean
  lastSync?: string
  errors?: string[]
}

export default function ChannelStatusWidget() {
  const [channels, setChannels] = useState<Record<string, ChannelStatus>>({})
  const [isSyncing, setIsSyncing] = useState<string | null>(null)

  useEffect(() => {
    const updateChannelStatus = () => {
      const channelStatus: Record<string, ChannelStatus> = {}
      
      Object.keys(CHANNEL_MANAGER).forEach(channelKey => {
        const channelConfig = CHANNEL_MANAGER[channelKey as keyof typeof CHANNEL_MANAGER]
        const config = CHANNEL_UTILS.getChannelConfig(channelKey)
        const validation = CHANNEL_UTILS.validateChannelConfig(channelKey, config)
        
        channelStatus[channelKey] = {
          name: channelConfig.name,
          enabled: Boolean(config.enabled),
          connected: validation.valid && Boolean(config.enabled),
          errors: validation.errors,
          lastSync: config.lastSync || undefined
        }
      })
      
      setChannels(channelStatus)
    }

    updateChannelStatus()
    
    // Actualizar cada 30 segundos
    const interval = setInterval(updateChannelStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  const handleSync = async (channelKey: string) => {
    setIsSyncing(channelKey)
    
    try {
      if (channelKey === 'airbnb') {
        const result = await airbnbService.syncToLocal()
        
        // Mostrar notificación de éxito
        alert(`Sincronización exitosa:\n- Propiedades: ${result.listings}\n- Reservas: ${result.bookings}`)
        
        // Actualizar estado
        setChannels(prev => ({
          ...prev,
          [channelKey]: {
            ...prev[channelKey],
            lastSync: new Date().toISOString()
          }
        }))
      }
    } catch (error) {
      alert(`Error en sincronización: ${error instanceof Error ? error.message : 'Error desconocido'}`)
    } finally {
      setIsSyncing(null)
    }
  }

  const handleTestConnection = async (channelKey: string) => {
    setIsSyncing(channelKey)
    
    try {
      if (channelKey === 'airbnb') {
        const result = await airbnbService.testConnection()
        
        if (result.success) {
          alert('✅ Conexión exitosa con Airbnb')
          // Actualizar estado
          setChannels(prev => ({
            ...prev,
            [channelKey]: {
              ...prev[channelKey],
              connected: true,
              errors: []
            }
          }))
        } else {
          alert(`❌ Error de conexión: ${result.message}`)
        }
      }
    } catch (error) {
      alert(`Error probando conexión: ${error instanceof Error ? error.message : 'Error desconocido'}`)
    } finally {
      setIsSyncing(null)
    }
  }

  const getStatusIcon = (channel: ChannelStatus) => {
    if (!channel.enabled) {
      return <WifiOff className="h-4 w-4 text-gray-400" />
    }
    if (channel.connected) {
      return <CheckCircle className="h-4 w-4 text-green-500" />
    }
    if (channel.errors && channel.errors.length > 0) {
      return <XCircle className="h-4 w-4 text-red-500" />
    }
    return <AlertCircle className="h-4 w-4 text-yellow-500" />
  }

  const getStatusText = (channel: ChannelStatus) => {
    if (!channel.enabled) return 'Deshabilitado'
    if (channel.connected) return 'Conectado'
    if (channel.errors && channel.errors.length > 0) return 'Error'
    return 'Configurando...'
  }

  const getStatusColor = (channel: ChannelStatus) => {
    if (!channel.enabled) return 'text-gray-500'
    if (channel.connected) return 'text-green-600'
    if (channel.errors && channel.errors.length > 0) return 'text-red-600'
    return 'text-yellow-600'
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Wifi className="h-5 w-5 mr-2 text-blue-600" />
          Estado de Integraciones
        </h3>
        <a 
          href="/settings" 
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          Configurar
        </a>
      </div>
      
      <div className="space-y-3">
        {Object.entries(channels).map(([key, channel]) => (
          <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              {getStatusIcon(channel)}
              <div>
                <p className="font-medium text-gray-900">{channel.name}</p>
                {channel.lastSync && (
                  <p className="text-xs text-gray-500">
                    Último sync: {new Date(channel.lastSync).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className={`text-sm font-medium ${getStatusColor(channel)}`}>
                  {getStatusText(channel)}
                </p>
                {channel.errors && channel.errors.length > 0 && (
                  <p className="text-xs text-red-500 mt-1">
                    {channel.errors[0]}
                  </p>
                )}
              </div>
              
              {channel.enabled && (
                <div className="flex space-x-2">
                  {!channel.connected && (
                    <button
                      onClick={() => handleTestConnection(key)}
                      disabled={isSyncing === key}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50"
                      title="Probar conexión"
                    >
                      {isSyncing === key ? (
                        <RefreshCw className="h-4 w-4 animate-spin" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </button>
                  )}
                  
                  {channel.connected && (
                    <button
                      onClick={() => handleSync(key)}
                      disabled={isSyncing === key}
                      className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors disabled:opacity-50"
                      title="Sincronizar ahora"
                    >
                      {isSyncing === key ? (
                        <RefreshCw className="h-4 w-4 animate-spin" />
                      ) : (
                        <RefreshCw className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {Object.keys(channels).length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Wifi className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No hay integraciones configuradas</p>
          </div>
        )}
      </div>
      
      {Object.values(channels).some(c => c.connected) && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <p className="text-sm text-green-800">
              Sincronización automática activa
            </p>
          </div>
        </div>
      )}
      
      {Object.values(channels).some(c => c.enabled && !c.connected) && (
        <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <p className="text-sm text-yellow-800">
              Algunas integraciones requieren configuración adicional
            </p>
          </div>
        </div>
      )}
    </div>
  )
}