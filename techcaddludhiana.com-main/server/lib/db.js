import 'dotenv/config'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from '../generated/prisma/index.js'

/* ==================================================================
   The one database handle.

   Prisma talks to MySQL through the MariaDB driver adapter (the
   MariaDB connector speaks the MySQL protocol, and it is the adapter
   Prisma ships for both). Everything above this file goes through the
   generated model API — `prisma.lead.create({ data })` — which sends
   values as bound parameters, separate from the statement text.

   That is the whole SQL-injection story, and it is worth being
   explicit about why: there is no place in this codebase where a
   value from a form is concatenated into SQL, because there is no
   place where SQL is written at all. $queryRawUnsafe and
   $executeRawUnsafe are the two doors that would reopen that, and
   neither is used anywhere here. If you ever need raw SQL, use the
   tagged-template $queryRaw`...` form, which parameterises its
   interpolations, and never the Unsafe variants.

   One client for the whole process. A new PrismaClient per request
   would open a new connection pool per request, which is how a small
   server runs a database out of connections under mild load.
================================================================== */

const url = process.env.DATABASE_URL

if (!url) {
  throw new Error(
    'DATABASE_URL is not set. Copy .env.example to .env and fill in your MySQL details.'
  )
}

/* ------------------------------------------------------------------
   The connection string goes in as a STRING, not as { url }.

   PrismaMariaDb takes `mariadb.PoolConfig | string` and hands whatever
   it gets straight to mariadb.createPool(). PoolConfig has no `url`
   field — it has host, user, password, database — so passing
   `{ url, ... }` dropped every credential on the floor and the pool
   dialled mariadb's own defaults instead. Nothing errored: the
   connection simply never opened, and the first query died with

     pool timeout: failed to retrieve a connection from pool
     (pool connections: active=0 idle=0)

   which reads like the database is down when it is up and answering.

   Pool options ride along as query parameters, because the string form
   takes the whole configuration or none of it.

   A password containing @ : / ? # or % must be percent-encoded here —
   "p@ss" becomes "p%40ss". The parser splits the authority at the last
   @, so a single unencoded @ in a password usually survives by luck;
   two do not, and a / or ? never does.
------------------------------------------------------------------ */
const LOOPBACK = new Set(['localhost', '127.0.0.1', '::1', '[::1]'])

function connectionString(base) {
  let parsed
  try {
    parsed = new URL(base)
  } catch {
    throw new Error('DATABASE_URL is not a valid connection string. Expected mysql://user:password@host:port/database')
  }

  const options = parsed.searchParams

  /* Small on purpose. This server does one insert per enquiry and
     nothing else; a large pool on shared hosting is a good way to hit
     the account's max_user_connections and take the site down with
     it. */
  if (!options.has('connectionLimit')) {
    options.set('connectionLimit', String(Number(process.env.DB_POOL_SIZE || 5)))
  }
  if (!options.has('connectTimeout')) options.set('connectTimeout', '10000')

  /* MySQL 8 authenticates with caching_sha2_password. When the server
     has nothing cached for this user — a fresh account, or any time
     since the last restart — it asks the client to encrypt the password
     with its RSA public key, and the client has to obtain that key.
     Over TLS it comes free; over a plaintext link the driver refuses to
     ask unless told to, and fails with ER_CANNOT_RETRIEVE_RSA_KEY.

     Fetching that key unencrypted is a narrow man-in-the-middle
     exposure — something in the path could offer its own key. On a
     loopback connection there is nothing in the path, so it is enabled
     there and nowhere else. A remote database should use TLS, which
     solves this properly, and that is why this is not simply on. */
  if (LOOPBACK.has(parsed.hostname) && !options.has('allowPublicKeyRetrieval')) {
    options.set('allowPublicKeyRetrieval', 'true')
  }

  return parsed.toString()
}

const adapter = new PrismaMariaDb(connectionString(url))

export const prisma = new PrismaClient({ adapter })

/* Called once at boot so a wrong password is a startup error in the
   logs rather than a 500 on the first visitor who fills in a form.

   $connect() alone does not do that. With this adapter it resolves
   without opening anything — the pool is lazy, and the first real
   query is what discovers the credentials are wrong. So this sends a
   query, the cheapest one there is, and a failure to run it is a
   failure to boot. */
export async function assertDatabaseReady() {
  await prisma.$connect()
  await prisma.$queryRaw`SELECT 1`
}

export async function closeDatabase() {
  await prisma.$disconnect()
}
