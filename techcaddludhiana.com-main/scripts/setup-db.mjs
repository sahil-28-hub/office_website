/* ==================================================================
   Create the database and the application user that DATABASE_URL
   already names, then apply the migrations.

   Run it once, on a machine where MySQL is installed:

     npm run db:setup

   It reads .env for the name, user and password to create, asks for
   the MySQL root password, and does the rest. The application
   password is never printed; the root password is never written to a
   file, never put in argv, and is gone when the script exits.

   Idempotent: running it again is not an error, and it resets the
   application user's password to whatever .env says now, which is the
   usual reason to run it twice.
================================================================== */

import 'dotenv/config'
import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import path from 'node:path'
import fs from 'node:fs'

const url = process.env.DATABASE_URL
if (!url) {
  console.error('DATABASE_URL is not set. Copy .env.example to .env first.')
  process.exit(1)
}

const parsed = new URL(url)
const user = decodeURIComponent(parsed.username)
const password = decodeURIComponent(parsed.password)
const database = parsed.pathname.slice(1)
const host = parsed.hostname
const port = String(parsed.port || 3306)

if (!user || !password || !database) {
  console.error('DATABASE_URL must include a user, a password and a database name.')
  process.exit(1)
}

/* The application connects over TCP, so the account has to exist for
   the host MySQL sees it arriving from. 'localhost' and '127.0.0.1'
   are different grants as far as MySQL is concerned, and the
   connector may resolve either, so create both. */
const hosts = ['localhost', '127.0.0.1'].includes(host)
  ? ['localhost', '127.0.0.1']
  : [host]

/* Identifiers cannot be bound as parameters, so they are quoted the
   way MySQL quotes them and any embedded quote is doubled. These
   values come from your own .env rather than from a form, but writing
   it correctly costs nothing and keeps an apostrophe in a password
   from turning into a syntax error. */
const q = (value) => `'${String(value).replace(/'/g, "''")}'`
const id = (value) => `\`${String(value).replace(/`/g, '``')}\``

const sql = [
  `CREATE DATABASE IF NOT EXISTS ${id(database)} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`,
  ...hosts.flatMap((h) => [
    `CREATE USER IF NOT EXISTS ${q(user)}@${q(h)} IDENTIFIED BY ${q(password)};`,
    `ALTER USER ${q(user)}@${q(h)} IDENTIFIED BY ${q(password)};`,
    /* only what the server actually does. No CREATE and no DROP: the
       migrations below run as root instead, so a leaked application
       password cannot reshape the schema. */
    `GRANT SELECT, INSERT, UPDATE, DELETE ON ${id(database)}.* TO ${q(user)}@${q(h)};`
  ]),
  'FLUSH PRIVILEGES;'
].join('\n')

/* The installer does not always put mysql.exe on PATH on Windows. */
function findMysql() {
  const candidates = [
    'C:/Program Files/MySQL/MySQL Server 8.4/bin/mysql.exe',
    'C:/Program Files/MySQL/MySQL Server 8.0/bin/mysql.exe',
    'C:/xampp/mysql/bin/mysql.exe',
    'C:/laragon/bin/mysql/mysql-8.0.30-winx64/bin/mysql.exe'
  ]
  return candidates.find((c) => fs.existsSync(c)) || 'mysql'
}

const rootUser = process.env.MYSQL_ROOT_USER || 'root'

/* Asked for here rather than left to the mysql client's own prompt,
   because the migrations need it too and asking twice for one
   password is worse than asking once. Echo is suppressed the way any
   password prompt does it. */
function askHidden(question) {
  return new Promise((resolve) => {
    process.stdout.write(question)

    const stdin = process.stdin
    stdin.setEncoding('utf8')

    if (!stdin.isTTY) {
      /* piped input, e.g. from a script — read one line, no echo games */
      let buffer = ''
      stdin.on('data', (chunk) => {
        buffer += chunk
        const end = buffer.indexOf('\n')
        if (end !== -1) {
          stdin.pause()
          console.log('')
          resolve(buffer.slice(0, end).trimEnd())
        }
      })
      stdin.resume()
      return
    }

    const wasRaw = stdin.isRaw
    stdin.setRawMode(true)
    stdin.resume()

    let value = ''
    const onData = (char) => {
      const code = char.charCodeAt(0)

      if (code === 13 || code === 10 || code === 4) {
        stdin.removeListener('data', onData)
        stdin.setRawMode(wasRaw === true)
        stdin.pause()
        console.log('')
        resolve(value)
      } else if (code === 3) {
        console.log('')
        process.exit(130)
      } else if (code === 127 || code === 8) {
        value = value.slice(0, -1)
      } else {
        value += char
      }
    }

    stdin.on('data', onData)
  })
}

function run(command, argv, env, input) {
  return new Promise((resolve) => {
    const child = spawn(command, argv, {
      stdio: ['pipe', 'inherit', 'inherit'],
      env: { ...process.env, ...env }
    })
    child.on('error', (error) => resolve({ code: 1, error }))
    child.on('exit', (code) => resolve({ code: code ?? 1 }))
    if (input) child.stdin.write(input)
    child.stdin.end()
  })
}

console.log(`Database:  ${database}`)
console.log(`App user:  ${user}@${hosts.join(', ')}`)
console.log(`Server:    ${host}:${port}`)
console.log('')

const rootPassword = await askHidden(`MySQL password for ${rootUser}: `)

/* ---- 1. the database, the user and its grants -------------------- */
/* MYSQL_PWD rather than -p on the command line, which would put the
   password where any process listing could read it. */
const created = await run(
  findMysql(),
  ['-h', host, '-P', port, '-u', rootUser, '--protocol=TCP'],
  { MYSQL_PWD: rootPassword },
  sql
)

if (created.error) {
  console.error('')
  console.error(`Could not run the mysql client: ${created.error.message}`)
  console.error('Install it, or add its bin directory to PATH.')
  process.exit(1)
}

if (created.code !== 0) {
  console.error('')
  console.error('mysql exited with an error. Nothing was changed if the login failed.')
  process.exit(created.code)
}

console.log('Database and user are in place.')

/* ---- 2. the tables ----------------------------------------------- */
/* As root, because the application user deliberately has no CREATE.
   `migrate deploy` applies the migrations already in
   prisma/migrations and records them — it never invents a new one. */
const rootUrl = new URL(url)
rootUrl.username = encodeURIComponent(rootUser)
rootUrl.password = encodeURIComponent(rootPassword)

console.log('Applying migrations...')

/* Prisma's own entry point rather than npx: npx on Windows is a .cmd
   shim, and since the fix for CVE-2024-27980 Node refuses to spawn
   one without a shell — the failure is a bare EINVAL. Running the
   file with this same Node binary needs no shell at all, so there is
   nothing to quote and nothing to escape. */
function findPrismaCli() {
  const require = createRequire(import.meta.url)
  /* the package's own manifest says where its bin is, and resolving
     the manifest works regardless of where npm hoisted the package.
     Resolving 'prisma' itself does not — its exports map points at a
     types entry that is not a runnable file. */
  const manifestPath = require.resolve('prisma/package.json')
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  const relative = typeof manifest.bin === 'string' ? manifest.bin : manifest.bin?.prisma
  return path.join(path.dirname(manifestPath), relative)
}

const prismaCli = findPrismaCli()

const migrated = await run(process.execPath, [prismaCli, 'migrate', 'deploy'], {
  DATABASE_URL: rootUrl.toString()
})

if (migrated.error) {
  console.error('')
  console.error(`Could not run prisma: ${migrated.error.message}`)
  process.exit(1)
}

if (migrated.code !== 0) {
  console.error('')
  console.error('The migrations did not apply. The database and user were still created.')
  process.exit(migrated.code)
}

console.log('')
console.log('Done. Start the app with:  npm run dev')
