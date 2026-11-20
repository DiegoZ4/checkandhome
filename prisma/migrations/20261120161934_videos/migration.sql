-- CreateTable
CREATE TABLE "videos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "reservationId" TEXT,
    "fileName" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_reservations" (
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
    "videoUrl" TEXT NOT NULL DEFAULT '',
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
INSERT INTO "new_reservations" ("attachmentName", "cargos", "channel", "checkInDate", "checkInTime", "checkOutDate", "checkOutTime", "cocheraEnabled", "cocheraId", "cocheraValue", "condition", "createdAt", "currency", "descuento", "dni", "dniException", "docType", "extra", "firstName", "guests", "hasAttachment", "hasPaymentProof", "hasVideo", "id", "lastName", "mascotasEnabled", "mascotasQty", "mascotasValue", "nights", "observaciones", "paymentProofName", "phone", "propertyId", "propertyName", "restante", "senaException", "senaPct", "senaValue", "status", "totalBruto", "totalNeto", "updatedAt", "valorNoches", "videoName") SELECT "attachmentName", "cargos", "channel", "checkInDate", "checkInTime", "checkOutDate", "checkOutTime", "cocheraEnabled", "cocheraId", "cocheraValue", "condition", "createdAt", "currency", "descuento", "dni", "dniException", "docType", "extra", "firstName", "guests", "hasAttachment", "hasPaymentProof", "hasVideo", "id", "lastName", "mascotasEnabled", "mascotasQty", "mascotasValue", "nights", "observaciones", "paymentProofName", "phone", "propertyId", "propertyName", "restante", "senaException", "senaPct", "senaValue", "status", "totalBruto", "totalNeto", "updatedAt", "valorNoches", "videoName" FROM "reservations";
DROP TABLE "reservations";
ALTER TABLE "new_reservations" RENAME TO "reservations";
CREATE INDEX "reservations_propertyId_idx" ON "reservations"("propertyId");
CREATE INDEX "reservations_checkInDate_idx" ON "reservations"("checkInDate");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "videos_reservationId_idx" ON "videos"("reservationId");
