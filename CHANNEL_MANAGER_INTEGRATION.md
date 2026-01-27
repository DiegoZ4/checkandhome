# API Integration Guide: Airbnb & Booking.com

## Datos Necesarios para las Integraciones

### 1. Airbnb API Integration

#### Datos Requeridos:
```env
AIRBNB_CLIENT_ID=your_client_id
AIRBNB_CLIENT_SECRET=your_client_secret
AIRBNB_REDIRECT_URI=http://localhost:3000/api/airbnb/callback
AIRBNB_ACCESS_TOKEN=user_access_token
```

#### Proceso de Integración:

1. **Registro en Airbnb Partners**
   - Ir a: https://partners.airbnb.com/
   - Crear cuenta de partner
   - Solicitar acceso a Calendar API

2. **OAuth 2.0 Flow**
   ```
   Authorization URL: https://www.airbnb.com/oauth/authorize
   Token URL: https://api.airbnb.com/oauth/token
   ```

3. **Endpoints Principales**:
   - **Calendar**: `GET /api/v2/calendar/{listing_id}`
   - **Reservations**: `GET /api/v2/reservations`
   - **Availability**: `PUT /api/v2/calendar/{listing_id}`

#### Funcionalidades:
- ✅ **Calendar Sync**: Importar/exportar disponibilidad
- ✅ **Reservation Import**: Obtener reservas existentes
- ✅ **Price Updates**: Actualizar precios
- ✅ **Availability Blocking**: Bloquear fechas

#### Limitaciones:
- Requiere aprobación de Airbnb para acceso completo
- Rate limiting: 200 requests/minuto
- Solo propietarios verificados

---

### 2. Booking.com Connectivity API

#### Datos Requeridos:
```env
BOOKING_COM_CLIENT_ID=your_client_id
BOOKING_COM_CLIENT_SECRET=your_client_secret
BOOKING_COM_API_KEY=your_api_key
BOOKING_COM_PROPERTY_ID=property_id
BOOKING_COM_ENVIRONMENT=production # or sandbox
```

#### Proceso de Integración:

1. **Registro en Booking.com Connect**
   - Ir a: https://connect.booking.com/
   - Completar formulario de partner
   - Obtener certificación

2. **Connectivity API Endpoints**:
   ```
   Base URL (Production): https://supply-xml.booking.com/
   Base URL (Sandbox): https://supply-xml.booking.com/hotels/xml/
   ```

3. **Endpoints Principales**:
   - **Property Info**: `POST /hotels/xml/property_info`
   - **Availability**: `POST /hotels/xml/availability`
   - **Reservations**: `POST /hotels/xml/reservations`
   - **Rates**: `POST /hotels/xml/rates`

#### Funcionalidades:
- ✅ **Two-way Calendar Sync**: Sincronización bidireccional
- ✅ **Real-time Reservations**: Recibir reservas instantáneamente
- ✅ **Rate Management**: Gestión completa de tarifas
- ✅ **Property Management**: Gestión completa de propiedades

#### Certificación Requerida:
- **Phase 1**: Basic connectivity (calendar sync)
- **Phase 2**: Advanced features (rates, restrictions)
- **Phase 3**: Full certification

---

## Implementación en el Sistema

### Estructura de Base de Datos Adicional:

```sql
-- Tabla para integraciones externas
CREATE TABLE channel_integrations (
  id STRING PRIMARY KEY,
  unit_id STRING NOT NULL,
  channel STRING NOT NULL, -- 'airbnb' | 'booking_com'
  external_id STRING NOT NULL,
  access_token TEXT,
  refresh_token TEXT,
  expires_at DATETIME,
  active BOOLEAN DEFAULT true,
  last_sync DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (unit_id) REFERENCES units(id)
);

-- Mapeo de reservas externas
CREATE TABLE external_bookings (
  id STRING PRIMARY KEY,
  booking_id STRING NOT NULL,
  channel STRING NOT NULL,
  external_booking_id STRING NOT NULL,
  external_guest_id STRING,
  sync_status STRING DEFAULT 'synced',
  last_updated DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (booking_id) REFERENCES bookings(id)
);
```

### Archivos de Implementación:

1. **Channel Manager Service**
   ```typescript
   // src/lib/channel-manager.ts
   export class ChannelManager {
     async syncCalendar(unitId: string, channel: string)
     async importBookings(unitId: string, channel: string)
     async updateAvailability(unitId: string, dates: Date[])
     async pushRates(unitId: string, rates: RateUpdate[])
   }
   ```

2. **Webhook Handlers**
   ```typescript
   // src/app/api/webhooks/airbnb/route.ts
   // src/app/api/webhooks/booking/route.ts
   ```

3. **Background Sync Jobs**
   ```typescript
   // src/lib/sync-jobs.ts
   export async function runDailySync()
   export async function syncAllChannels()
   ```

### Variables de Entorno Completas:

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Airbnb Integration
AIRBNB_CLIENT_ID="your_airbnb_client_id"
AIRBNB_CLIENT_SECRET="your_airbnb_client_secret"
AIRBNB_REDIRECT_URI="http://localhost:3000/api/auth/airbnb/callback"

# Booking.com Integration
BOOKING_COM_CLIENT_ID="your_booking_client_id"
BOOKING_COM_CLIENT_SECRET="your_booking_client_secret" 
BOOKING_COM_API_KEY="your_booking_api_key"
BOOKING_COM_ENVIRONMENT="sandbox" # or "production"

# Webhooks
WEBHOOK_SECRET="your_webhook_secret"

# File Upload (Cloudinary)
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

---

## Pasos para Activar las Integraciones:

### Para Airbnb:
1. ✅ Solicitar acceso a Airbnb Partner API
2. ✅ Implementar OAuth flow
3. ✅ Configurar webhooks para reservas
4. ✅ Probar sync de calendario

### Para Booking.com:
1. ✅ Registrarse en Booking.com Connect
2. ✅ Completar certificación Phase 1
3. ✅ Implementar XML API calls
4. ✅ Configurar property mapping
5. ✅ Obtener certificación completa

### Desarrollo Requerido:
- [ ] **OAuth handlers** para ambas plataformas
- [ ] **Webhook endpoints** para recibir reservas
- [ ] **Background jobs** para sincronización
- [ ] **UI de configuración** para conectar propiedades
- [ ] **Logging y monitoring** de sincronización

¿Te parece que comencemos con alguna de estas integraciones específicamente?