# Check and Home - Sistema de Gestión de Reservas

Un sistema completo de gestión de reservas y propiedades con integración de channel manager para Airbnb y Booking.com.

## 🚀 Características Principales

### ✅ **COMPLETADO - Sistema Base**
- **Autenticación completa** con localStorage y tokens JWT simulados
- **Dashboard interactivo** con estadísticas en tiempo real
- **Sistema multi-usuario** (Admin, Owner, Guest, Cleaner, CheckInOut)
- **Interfaz en español** completamente traducida
- **Responsive design** para móviles y tablets

### ✅ **COMPLETADO - Gestión de Propiedades**
- **Crear propiedades** con información completa:
  - Nombre, dirección, descripción
  - Precios diarios en USD
  - Galería de fotos (URLs)
  - Sistema de amenidades (WiFi, AC, Cocina, etc.)
  - Capacidad de huéspedes
- **Ver, editar y eliminar** propiedades
- **Validación completa** de formularios

### ✅ **COMPLETADO - Sistema de Reservas**
- **Crear reservas** con:
  - Selección de propiedad
  - Fechas de check-in/check-out
  - Información completa del huésped
  - Cálculo automático de precios
  - Estados: Pendiente, Confirmada, Cancelada
- **Canales de reserva**: Directo, Airbnb, Booking.com
- **Gestión completa** de reservas existentes
- **Validación de fechas** y disponibilidad

### ✅ **COMPLETADO - Gestión Financiera**
- **Sistema de gastos/compras**:
  - Registro de gastos con descripción y monto
  - Categorización (Mantenimiento, Suministros, etc.)
  - Asignación por propiedad
  - Adjunto de recibos (URLs)
  - Estadísticas mensuales
- **Filtros por categoría** y fecha
- **Reportes financieros** básicos

### ✅ **COMPLETADO - Sistema de Inventario**
- **Gestión completa de stock**:
  - Productos con stock actual, mínimo y máximo
  - Categorización por tipo de producto
  - Ubicación por propiedad
  - Costo unitario y valor total
  - Alertas de stock bajo
- **Proveedores** y fechas de reposición
- **Dashboard de inventario** con estadísticas

### ✅ **COMPLETADO - Funcionalidades Técnicas**
- **Persistencia de datos** con localStorage (para demo)
- **Validación de formularios** en tiempo real
- **Mensajes de éxito/error** informativos
- **Navegación consistente** entre páginas
- **Componentes reutilizables** optimizados

## 🔧 Tecnologías Utilizadas

- **Next.js 16.1.1** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos y diseño responsivo
- **Lucide React** - Iconografía moderna
- **localStorage** - Persistencia de datos (demo)

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── dashboard/           # Panel principal con estadísticas
│   ├── units/              # Gestión de propiedades
│   │   ├── new/            # Crear nueva propiedad
│   │   └── page.tsx        # Lista de propiedades
│   ├── bookings/           # Sistema de reservas
│   │   ├── new/            # Crear nueva reserva
│   │   └── page.tsx        # Lista de reservas
│   ├── expenses/           # Gestión de gastos
│   │   ├── new/            # Registrar nuevo gasto
│   │   └── page.tsx        # Lista de gastos
│   ├── inventory/          # Sistema de inventario
│   │   ├── new/            # Agregar producto
│   │   └── page.tsx        # Lista de inventario
│   └── page.tsx            # Página de inicio/login
├── config/
│   └── app.config.ts       # Configuración general
└── components/             # Componentes reutilizables (futuros)
```

## 🚀 Instalación y Uso

### 1. Instalación
```bash
npm install
```

### 2. Ejecutar en desarrollo
```bash
npm run dev
```

### 3. Abrir en navegador
```
http://localhost:3000
```

### 4. Login de Prueba
- **Email**: admin@checkandhome.com
- **Contraseña**: admin123
- **Rol**: Administrador

## 📊 Funcionalidades por Pantalla

### 🏠 **Dashboard Principal**
- Estadísticas en tiempo real
- Acciones rápidas para crear contenido
- Alertas de stock bajo
- Resumen financiero mensual

### 🏢 **Gestión de Propiedades (/units)**
- Lista de propiedades con filtros
- Formulario completo de creación
- Edición y eliminación
- Galería de fotos y amenidades

### 📅 **Sistema de Reservas (/bookings)**
- Calendario de reservas
- Formulario de nueva reserva
- Estados de reserva
- Información completa de huéspedes

### 💰 **Gastos y Compras (/expenses)**
- Registro de gastos categorizados
- Filtros por categoría y fecha
- Reportes mensuales
- Adjunto de recibos

### 📦 **Inventario y Stock (/inventory)**
- Gestión de productos por categoría
- Alertas de stock bajo
- Control de proveedores
- Valoración de inventario

## 🔮 **PRÓXIMAS INTEGRACIONES** (Preparado para implementar)

### 📡 **Channel Manager**
- **Airbnb API**: Sincronización de calendarios y reservas
- **Booking.com API**: Gestión automática de disponibilidad
- **Webhook endpoints** configurados para recibir reservas

### 💳 **Sistemas de Pago**
- **Stripe**: Procesar pagos de huéspedes
- **PayPal**: Método de pago alternativo
- **Reportes financieros** automáticos

### 📧 **Notificaciones**
- **Email automation**: Confirmaciones y recordatorios
- **WhatsApp Business**: Mensajes automáticos
- **SMS**: Notificaciones de check-in/out

### 📱 **Integraciones Adicionales**
- **Google Calendar**: Sincronización de eventos
- **Smart locks**: Check-in automático
- **Cleaning services**: Programación automática

## 🗄️ **Estructura de Datos**

### Propiedades (Units)
```typescript
{
  id: number
  name: string
  address: string
  description: string
  dailyPrice: number
  currency: "USD"
  maxGuests: number
  amenities: string[]
  photos: string[]
  createdAt: string
}
```

### Reservas (Bookings)
```typescript
{
  id: number
  unitName: string
  checkInDate: string
  checkOutDate: string
  guests: number
  totalPrice: number
  status: "PENDING" | "CONFIRMED" | "CANCELLED"
  source: "DIRECT" | "AIRBNB" | "BOOKING"
  guest: GuestInfo
  createdAt: string
}
```

### Gastos (Expenses)
```typescript
{
  id: number
  description: string
  amount: number
  date: string
  category: string
  unit: string
  receipt?: string
  createdAt: string
}
```

### Inventario (Inventory)
```typescript
{
  id: number
  name: string
  category: string
  currentStock: number
  minStock: number
  maxStock: number
  unit: string
  location: string
  cost: number
  supplier?: string
  lastRestocked: string
  createdAt: string
}
```

## 🔐 **Seguridad y Roles**

### Roles de Usuario Implementados:
- **ADMIN**: Acceso completo al sistema
- **OWNER**: Gestión de propiedades y finanzas
- **GUEST**: Acceso limitado a sus reservas
- **CLEANER**: Programación de limpieza
- **CHECKINOUT**: Gestión de check-in/out

### Seguridad:
- Tokens JWT simulados con expiración
- Validación de sesión automática
- Logout automático por expiración
- Validación de formularios client-side

## 🔄 **Estado del Proyecto**

### ✅ **COMPLETADO (100%)**
1. **Sistema base de autenticación**
2. **Gestión completa de propiedades**
3. **Sistema de reservas funcional**
4. **Gestión de gastos/compras**
5. **Sistema de inventario con alertas**
6. **Dashboard con estadísticas reales**
7. **Interfaz completamente en español**
8. **Validación de formularios**
9. **Persistencia de datos (localStorage)**
10. **Navegación y UX optimizada**

### 🔄 **LISTO PARA INTEGRAR**
1. **APIs de Airbnb y Booking.com**
2. **Sistemas de pago (Stripe/PayPal)**
3. **Notificaciones automáticas**
4. **Base de datos real (PostgreSQL/MongoDB)**
5. **Autenticación con proveedores OAuth**

## 📝 **Notas Técnicas**

- **Datos de demostración**: Almacenados en localStorage
- **Validación**: Cliente-side con feedback en tiempo real  
- **Responsive**: Optimizado para móviles y tablets
- **Performance**: Componentes optimizados con TypeScript
- **SEO Ready**: Estructura preparada para Next.js SSR

---

## 💡 **¿Cómo usar el sistema?**

1. **Inicia sesión** con las credenciales de prueba
2. **Crea propiedades** usando el formulario completo
3. **Agrega reservas** seleccionando fechas y huéspedes
4. **Registra gastos** para llevar control financiero
5. **Gestiona inventario** para control de stock
6. **Monitorea estadísticas** en el dashboard principal

**¡El sistema está completamente funcional y listo para pruebas!** 🎉