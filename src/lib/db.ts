import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from '@/generated/prisma'

/* ==================================================================
   The one database handle for the Next.js runtime.

   Uses the global-singleton pattern recommended for Next.js to prevent
   connection pool exhaustion during hot reloads in development. In
   production there is one process and one client regardless.

   Lazy: the client is created on first access, not at module load.
   This avoids a build-time crash when DATABASE_URL is not set.
================================================================== */

const LOOPBACK = new Set(['localhost', '127.0.0.1', '::1', '[::1]'])

function connectionString(base: string): string {
  let parsed: URL
  try {
    parsed = new URL(base)
  } catch {
    throw new Error(
      'DATABASE_URL is not a valid connection string. Expected mysql://user:password@host:port/database'
    )
  }

  const options = parsed.searchParams

  if (!options.has('connectionLimit')) {
    options.set('connectionLimit', String(Number(process.env.DB_POOL_SIZE || 5)))
  }
  if (!options.has('connectTimeout')) options.set('connectTimeout', '10000')

  if (LOOPBACK.has(parsed.hostname) && !options.has('allowPublicKeyRetrieval')) {
    options.set('allowPublicKeyRetrieval', 'true')
  }

  return parsed.toString()
}

const globalForPrisma = globalThis as unknown as { _prisma?: PrismaClient }

function getPrisma(): PrismaClient {
  if (globalForPrisma._prisma) return globalForPrisma._prisma

  const url = process.env.DATABASE_URL
  if (!url) {
    throw new Error(
      'DATABASE_URL is not set. Copy .env.example to .env.local and fill in your MySQL details.'
    )
  }

  const adapter = new PrismaMariaDb(connectionString(url))
  const client = new PrismaClient({ adapter })

  if (process.env.NODE_ENV !== 'production') globalForPrisma._prisma = client
  return client
}

/* A Proxy that lazily creates the PrismaClient on first property access.
   This means the module can be imported at build time without DATABASE_URL
   being set — the error only fires when an API route actually queries. */
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop, receiver) {
    const client = getPrisma()
    const value = Reflect.get(client, prop, receiver)
    return typeof value === 'function' ? value.bind(client) : value
  },
})
