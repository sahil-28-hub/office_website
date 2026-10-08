# The lead API

Every form on the site — the course enquiry, the brochure gate, the
book-a-demo modal, the home CTA and the about CTA — posts to
`POST /api/leads`, which validates the submission and writes one row
to MySQL through Prisma.

```
src/lib/submitLead.js     the browser side: one function, five callers
server/routes/leads.js    rate limit -> honeypot -> timing -> validate -> write
server/lib/validate.js    what a lead is allowed to be
server/lib/db.js          the one Prisma client
prisma/schema.prisma      the `leads` table
```

## Getting it running

```bash
cp .env.example .env          # then fill in DATABASE_URL
npm install
npx prisma generate           # writes server/generated/prisma
npx prisma migrate deploy     # creates the leads table
npm run dev:all               # Vite on :5173, API on :4000
```

`npm run dev:all` runs the site and the API together; Vite proxies
`/api` to the API, so the browser only ever talks to one origin and
there is no CORS to think about in development.

In production:

```bash
npm run build                 # the static site into dist/
npm start                     # the API, which also serves dist/
```

One process, one port, same origin. If you would rather host the
static site separately, set `VITE_LEADS_ENDPOINT` to the API's URL at
build time and add the site's origin to `CORS_ORIGINS`.

If you cannot run migrations against the database — shared hosting
with phpMyAdmin and nothing else — paste
`prisma/migrations/20260818000000_init/migration.sql` into the SQL tab
instead. It is the same statement.

## About SQL injection

The short version: there is no SQL in this codebase to inject into.

Every write goes through Prisma's model API —
`prisma.lead.create({ data })` — which sends the statement and the
values to MySQL separately, as a prepared statement with bound
parameters. A name submitted as `Robert'); DROP TABLE leads;--` is
stored as those literal characters, because the database never parses
it as SQL. Nothing is escaped, because nothing is concatenated.

Two things would reopen it, and neither is used anywhere here:

- `$queryRawUnsafe()` and `$executeRawUnsafe()` — these take a string
  and run it. If you ever need raw SQL, use the tagged-template
  ``$queryRaw`SELECT ... WHERE id = ${id}` `` form instead, which
  parameterises its interpolations. The `Unsafe` suffix is the whole
  warning.
- Building a query string by hand with `mysql2` or similar and passing
  it to `.query()`. Use `.execute()` with `?` placeholders.

A grep for `Unsafe` is a fair thing to put in code review.

The rest of what is here is not injection defence — it is what keeps
the table useful and the endpoint from being a free write API:

| Layer | What it stops |
|---|---|
| Rate limit, 12 per IP per 15 min | one script filling the table |
| Honeypot field | the ordinary form-spam bots |
| Time-on-form, 2.5s minimum | anything submitting faster than a person can read |
| Zod schema | wrong shapes, wrong types, oversized fields |
| Length caps at or under column widths | truncation errors on write |
| `details` capped to short string values | the JSON column used as free storage |
| 16KB body limit | the cheap half of a denial-of-service |
| CORS allowlist, not `*` | any page on the internet posting as a visitor |
| Generic 500 text | the error message being a free map of the schema |

Give the application's MySQL user only `SELECT`, `INSERT`, `UPDATE`
and `DELETE` on this one database. It has no reason to hold `DROP`,
and a user that does not hold it cannot be talked into using it. Run
migrations as a separate, more privileged user.

## Reading the leads

```sql
SELECT id, createdAt, source, name, phone, course, status
FROM leads
ORDER BY createdAt DESC
LIMIT 50;
```

`source` says which form it came from. `status` is there for the
counselling team's own workflow (`NEW` → `CONTACTED` → `ENROLLED` /
`CLOSED`) and nothing on the site ever writes it.

`npx prisma studio` opens a browser table editor against the same
database, which is usually easier than phpMyAdmin for this.
