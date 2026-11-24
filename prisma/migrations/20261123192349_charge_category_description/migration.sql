-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_charge_categories" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "zona" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "amount" REAL NOT NULL,
    "currency" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "extra" JSONB
);
INSERT INTO "new_charge_categories" ("amount", "createdAt", "currency", "extra", "id", "name", "type", "updatedAt", "zona") SELECT "amount", "createdAt", "currency", "extra", "id", "name", "type", "updatedAt", "zona" FROM "charge_categories";
DROP TABLE "charge_categories";
ALTER TABLE "new_charge_categories" RENAME TO "charge_categories";
CREATE INDEX "charge_categories_type_idx" ON "charge_categories"("type");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
