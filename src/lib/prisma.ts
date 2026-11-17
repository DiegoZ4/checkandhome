import path from 'node:path'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { PrismaClient } from '@/generated/prisma'

// Prisma 7 necesita un driver adapter. DATABASE_URL usa el formato "file:./ruta.db",
// relativo a la raíz del proyecto (igual que el CLI de Prisma).
function databaseFile(): string {
  const url = process.env.DATABASE_URL || 'file:./prisma/checkandhome.db'
  const file = url.replace(/^file:/, '')
  return path.isAbsolute(file) ? file : path.join(process.cwd(), file)
}

function createClient() {
  const adapter = new PrismaBetterSqlite3({ url: databaseFile() })
  return new PrismaClient({ adapter })
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? createClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
