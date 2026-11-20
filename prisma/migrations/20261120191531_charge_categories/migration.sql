-- CreateTable
CREATE TABLE "charge_categories" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "zona" TEXT NOT NULL DEFAULT '',
    "amount" REAL NOT NULL,
    "currency" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "extra" JSONB
);

-- CreateIndex
CREATE INDEX "charge_categories_type_idx" ON "charge_categories"("type");
