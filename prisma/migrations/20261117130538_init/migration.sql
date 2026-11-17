-- CreateTable
CREATE TABLE "users" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "userType" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "extra" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "properties" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "zona" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "floor" TEXT NOT NULL,
    "apartment" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bedrooms" TEXT NOT NULL,
    "bathrooms" TEXT NOT NULL,
    "maxGuests" TEXT NOT NULL,
    "propertyType" TEXT NOT NULL,
    "ambientes" TEXT NOT NULL,
    "checkInFrom" TEXT NOT NULL,
    "checkInTo" TEXT NOT NULL,
    "checkOutFrom" TEXT NOT NULL,
    "checkOutTo" TEXT NOT NULL,
    "beds" JSONB NOT NULL,
    "amenities" JSONB NOT NULL,
    "mtsDelMar" TEXT NOT NULL,
    "mascotasCantidad" TEXT NOT NULL,
    "chargesCurrency" TEXT NOT NULL,
    "charges" JSONB NOT NULL,
    "wifiNetwork" TEXT NOT NULL,
    "wifiPassword" TEXT NOT NULL,
    "keysCount" TEXT NOT NULL,
    "electronicKey" BOOLEAN NOT NULL,
    "keyCode" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,
    "airbnbId" TEXT NOT NULL,
    "bank" JSONB NOT NULL,
    "photos" JSONB NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "eliminado" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME,
    "updatedAt" DATETIME NOT NULL,
    "extra" JSONB
);

-- CreateTable
CREATE TABLE "reservations" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "propertyName" TEXT NOT NULL,
    "checkInDate" TEXT NOT NULL,
    "checkOutDate" TEXT NOT NULL,
    "checkInTime" TEXT NOT NULL,
    "checkOutTime" TEXT NOT NULL,
    "guests" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "docType" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "hasAttachment" BOOLEAN NOT NULL,
    "attachmentName" TEXT NOT NULL,
    "dniException" BOOLEAN NOT NULL,
    "senaException" BOOLEAN NOT NULL,
    "hasPaymentProof" BOOLEAN NOT NULL,
    "paymentProofName" TEXT NOT NULL,
    "hasVideo" BOOLEAN NOT NULL,
    "videoName" TEXT NOT NULL,
    "observaciones" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "nights" INTEGER NOT NULL,
    "valorNoches" REAL NOT NULL,
    "mascotasEnabled" BOOLEAN NOT NULL,
    "mascotasQty" INTEGER NOT NULL,
    "mascotasValue" REAL NOT NULL,
    "cocheraEnabled" BOOLEAN NOT NULL,
    "cocheraId" TEXT NOT NULL,
    "cocheraValue" REAL NOT NULL,
    "descuento" REAL NOT NULL,
    "totalNeto" REAL NOT NULL,
    "cargos" REAL NOT NULL,
    "totalBruto" REAL NOT NULL,
    "senaPct" REAL NOT NULL,
    "senaValue" REAL NOT NULL,
    "restante" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "extra" JSONB
);

-- CreateTable
CREATE TABLE "rate_entries" (
    "propertyId" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "available" BOOLEAN NOT NULL,
    "status" TEXT,
    "closedUntil" TEXT,
    "planIds" JSONB NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "extra" JSONB,

    PRIMARY KEY ("propertyId", "date")
);

-- CreateTable
CREATE TABLE "rate_plans" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT,
    "hasMinNights" BOOLEAN NOT NULL,
    "minNights" INTEGER NOT NULL,
    "hasPerDayNights" BOOLEAN NOT NULL,
    "perDayNights" JSONB NOT NULL,
    "priceVariation" TEXT NOT NULL,
    "priceVariationType" TEXT NOT NULL,
    "hasStayDiscount" BOOLEAN NOT NULL,
    "stayDiscounts" JSONB NOT NULL,
    "proximityDiscounts" JSONB NOT NULL,
    "weekendSurcharge" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "extra" JSONB
);

-- CreateTable
CREATE TABLE "expenses" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "date" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "receipt" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "extra" JSONB
);

-- CreateTable
CREATE TABLE "inventory_items" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "currentStock" REAL NOT NULL,
    "minStock" REAL NOT NULL,
    "maxStock" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "cost" REAL NOT NULL,
    "supplier" TEXT,
    "lastRestocked" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "extra" JSONB
);

-- CreateTable
CREATE TABLE "app_settings" (
    "key" TEXT NOT NULL PRIMARY KEY,
    "value" JSONB NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_username_idx" ON "users"("username");

-- CreateIndex
CREATE INDEX "properties_eliminado_idx" ON "properties"("eliminado");

-- CreateIndex
CREATE INDEX "reservations_propertyId_idx" ON "reservations"("propertyId");

-- CreateIndex
CREATE INDEX "reservations_checkInDate_idx" ON "reservations"("checkInDate");

-- CreateIndex
CREATE INDEX "expenses_date_idx" ON "expenses"("date");
