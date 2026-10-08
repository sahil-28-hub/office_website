/*
  Sets a CMS user's sign-in credentials from the command line.

  Why a script
  ------------
  Changing an administrator's own username is not something the CMS offers:
  the users module lets an admin edit other accounts, and the account you are
  signed in as is the one you cannot lock yourself out of. That is the right
  default for a web form and leaves no way to rename the first admin, which is
  exactly what a database cloned from another city needs.

  Run with tsx so it imports the application's own `hashPassword`, rather than
  calling argon2 here with parameters copied by hand. Those parameters are a
  cost setting that will be raised one day; a second copy of them in a script
  would silently write weaker hashes than the app expects, and nothing would
  fail — the passwords would just be cheaper to crack.

  Sessions
  --------
  A password change deletes that user's sessions, which is what
  users.repo.ts does for the same reason: the session cookie is what actually
  grants access, so an account whose password has changed must not keep
  working through one already issued.

  Usage
  -----
    cd cms-techcadd/backend
    npx tsx scripts/set-credentials.ts <current-username> <new-username> <new-password>

  It acts on the database named by DB_NAME in .env — check that first.
*/

import { execute, query, type Row } from '../src/db/pool.js'
import { hashPassword } from '../src/modules/auth/auth.service.js'
import { config } from '../src/config.js'

const [current, username, password] = process.argv.slice(2)

if (!current || !username || !password) {
  console.error(
    'Usage: npx tsx scripts/set-credentials.ts <current-username> <new-username> <new-password>',
  )
  process.exit(1)
}

/* The same floor the users module enforces — see users.schema.ts. A script
   that quietly accepted a weaker password than the form does would make the
   rule a suggestion. */
if (password.trim().length < 10) {
  console.error('Password must be at least 10 characters.')
  process.exit(1)
}

console.log(`Database: ${config.DB_NAME}\n`)

const found = await query<Row>(
  'SELECT id, name, email, username, role FROM users WHERE username = ? LIMIT 1',
  [current],
)

if (found.length === 0) {
  console.error(`No user with username "${current}".`)
  const all = await query<Row>('SELECT username, email, role FROM users ORDER BY role')
  console.error('\nAccounts in this database:')
  for (const u of all) console.error(`  ${String(u.username ?? '(none)').padEnd(20)} ${u.email}  [${u.role}]`)
  process.exit(1)
}

const user = found[0]

/* The username is a unique key, so a clash is a real error rather than
   something to overwrite. Checked before the update so the message names the
   problem instead of surfacing a driver error. */
if (username !== current) {
  const clash = await query<Row>('SELECT id FROM users WHERE username = ? AND id <> ? LIMIT 1', [
    username,
    user.id,
  ])
  if (clash.length > 0) {
    console.error(`Username "${username}" is already taken by another account.`)
    process.exit(1)
  }
}

await execute('UPDATE users SET username = ?, password_hash = ?, updated_at = NOW(3) WHERE id = ?', [
  username,
  await hashPassword(password),
  user.id,
])

/* See the note at the top: the cookie, not the password, is what grants
   access, so the sessions have to go with it.

   Counted before the delete rather than from its result — `execute` returns
   void, so the affected-row count is not available to read back. */
const [{ n: revoked }] = await query<{ n: number }>(
  'SELECT COUNT(*) AS n FROM sessions WHERE user_id = ?',
  [user.id],
)
await execute('DELETE FROM sessions WHERE user_id = ?', [user.id])

console.log(`Updated ${user.name} (${user.email}) [${user.role}]`)
console.log(`  username  ${current}  ->  ${username}`)
console.log(`  password  changed`)
console.log(`  sessions  ${revoked} revoked — sign in again with the new credentials`)

process.exit(0)
