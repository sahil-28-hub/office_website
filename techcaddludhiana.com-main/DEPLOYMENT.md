# Deploying the TechCadd site

The deployment target has not been settled yet, so this records the
three that the code actually supports and what each one costs. Nothing
in the repository is currently configured for one over another — pick
one and follow that section.

---

## Before anything: one outstanding database step

**The `/team` application form returns a 500 right now.** Its table has
never been created: `prisma/migrations/20260819000000_team_applications`
is present but unapplied, so `POST /api/team-applications` passes
validation and then fails on write.

It cannot be applied with the credentials in `.env`. That is deliberate
— `DATABASE_URL` names an application user holding only SELECT, INSERT,
UPDATE and DELETE, so a leaked application password cannot reshape the
schema. Migrations run as root instead:

```bash
npm run db:setup
```

It asks for the MySQL root password, creates the database, the
application user and its grants, and then runs `prisma migrate deploy`
as root. It is idempotent — running it on an existing database only
applies what is missing.

Verify afterwards:

```bash
npx prisma migrate status      # expect: no pending migrations
```

Everything else on the site works without this. `leads` already exists,
so the five enquiry forms write correctly; it is only the `/team`
application form that is down until this runs.

---

## Option A — one Node host

The intended shape, and the only one where every feature works.
`server/index.js` serves the built site *and* the API from a single
origin, so there is no CORS to configure and no cross-origin request
for a browser to refuse.

```bash
npm install          # postinstall runs `prisma generate`
npm run build        # writes dist/
npm run start        # serves dist/ + /api on $PORT (default 4000)
```

| Path | Serves |
| --- | --- |
| `/`, `/courses/...` | `dist/index.html` (SPA fallback) |
| `/api/leads`, `/api/team-applications` | MySQL, via Prisma |
| `/api/health` | `{"ok":true}` |
| `/admin` | the CMS, **only if** `cms-techcadd/frontend/dist` exists — otherwise an honest 404 |

Set `TRUST_PROXY=true` in `.env` if anything sits in front of Node
(nginx, cPanel, a load balancer). Without it every visitor looks like
the proxy to the rate limiter, and the first twelve enquiries of the
day exhaust the quota for everyone.

`vercel.json` is simply unused here.

---

## Option B — Vercel, static only

`vercel.json` is written for this: it rewrites everything except
`/api/` to `index.html`, and gives `/assets/` a one-year immutable
cache.

Set both of these in the project's **Environment Variables**, for
Production *and* Preview, then redeploy:

```bash
NEXT_PUBLIC_CMS_API_URL=off          # or the deployed CMS origin + /api
NEXT_PUBLIC_LEADS_TRANSPORT=mailto   # see below
```

`off` is right here because Vercel cannot host the CMS API either — it
needs a long-running Node process and MySQL. The site serves its bundled
content and makes no CMS requests.

**The forms do not work on this path as the repo currently stands.**
There is no `api/` directory, so Vercel has no serverless functions to
deploy — `POST /api/leads` returns 404 and the visitor is shown
*"Something went wrong at our end and the enquiry did not send. Please
call…"*. The transport must be switched before building:

```bash
NEXT_PUBLIC_LEADS_TRANSPORT=mailto
```

That makes every form open a pre-filled email to `NEXT_PUBLIC_ENQUIRY_INBOX`
instead of posting. Enquiries then arrive as email and **nothing is
written to MySQL** — no `leads` rows, and the CMS lead views stay
empty. It is the documented escape hatch for a backend-less deploy, not
the normal path.

Because `NEXT_PUBLIC_*` variables are inlined by Next at **build** time,
setting this in Vercel's dashboard only takes effect on the next build.
Setting it on a server that merely serves `dist/` does nothing at all.

---

## Option C — static site on Vercel, API elsewhere

Keeps the database. The site is static on Vercel; `server/index.js`
runs on a Node host of its own.

Build-time, on the Vercel side:

```bash
NEXT_PUBLIC_LEADS_ENDPOINT=https://api.example.com/api/leads
NEXT_PUBLIC_TEAM_ENDPOINT=https://api.example.com/api/team-applications
```

Runtime, on the API host:

```bash
CORS_ORIGINS=https://techcadd.com     # the website's exact origin, no wildcard
TRUST_PROXY=true
```

The API's CORS allowlist is an allowlist on purpose — the endpoints
write, and `*` would let any page on the internet post to them from a
visitor's browser. If the website's origin is missing here, every form
fails in the browser with no server-side error to find.

---

## Environment variables

The split that causes the most trouble: **`NEXT_PUBLIC_*` are build-time,
the rest are runtime.** A `NEXT_PUBLIC_*` change requires `npm run build`
again.

> **Parts of this file predate the move from Vite to Next.js** and still
> refer to `dist/` and `server/index.js`, neither of which exists now.
> The environment-variable names and the CMS section below are current;
> the surrounding build and hosting steps have not been re-verified
> since the migration.

| Variable | When | Notes |
| --- | --- | --- |
| `DATABASE_URL` | runtime | App user only. Percent-encode `@ : / ? #` in the password. |
| `DB_POOL_SIZE` | runtime | Default 5. Keep it low on shared hosting. |
| `PORT` | runtime | Default 4000. |
| `CORS_ORIGINS` | runtime | Only matters when site and API are on different origins. |
| `TRUST_PROXY` | runtime | Set behind any reverse proxy, or rate limiting counts everyone as one visitor. |
| `LEADS_RATE_LIMIT` / `TEAM_RATE_LIMIT` | runtime | Defaults 12 and 6 per 15 min. Leave unset in production. |
| `NEXT_PUBLIC_ENQUIRY_INBOX` | **build** | Address shown on the forms and used by the mailto fallback. |
| `NEXT_PUBLIC_CMS_API_URL` | **build** | The deployed CMS origin plus `/api`, or `off`. See below. |
| `REVALIDATE_SECRET` | runtime | Shared with the CMS. Without it a publish takes up to 5 minutes to show. See below. |
| `NEXT_PUBLIC_LEADS_ENDPOINT` / `NEXT_PUBLIC_TEAM_ENDPOINT` | **build** | Only for a split deployment. |
| `NEXT_PUBLIC_LEADS_TRANSPORT` | **build** | `mailto` for a static deploy with no backend. |

---

## The CMS

The admin UI (`cms-techcadd/frontend`) and the API
(`cms-techcadd/backend`) are deployed separately from this site. The
public site does not need either to be running: every page that reads
the CMS treats `src/data/` as a fallback and renders from it whenever
the API gives nothing.

### What the CMS drives

| On the site | From |
| --- | --- |
| Blog index and articles, incl. comments | `/blogs`, `/blogs/:slug/comments` |
| Course catalogue and course pages | `/courses` (merged over `src/data/courses`) |
| FAQ, reviews, the home reviews wall | `/faqs`, `/reviews`, `/testimonials` |
| Gallery wall | `/gallery` |
| `/events` and each event page | `/events` |
| Any page an editor writes, at `/<slug>` | `/pages/:slug`, linked via `/nav-pages` |
| Footer contact details, socials, `sameAs` | `/site` |
| URL redirects | `/redirects` (see the note below) |
| Enquiries from every form | `POST /enquiries` |

Everything except events and CMS pages has a bundled fallback in
`src/data/`, so the site renders complete with no CMS running. Events
and CMS pages have none on purpose — inventing a workshop with a date
on it, or a page nobody wrote, would be worse than showing neither.

**Redirects are read in middleware, not at build.** The table is held
in memory and refreshed at most every five minutes, so a redirect
saved in the CMS takes up to that long to take effect and costs no
network call per request. A refresh that fails keeps the previous
table rather than un-redirecting the site.

### 1. `NEXT_PUBLIC_CMS_API_URL`

Where the site reads content from. Two valid answers:

```bash
NEXT_PUBLIC_CMS_API_URL=https://cms.techcadd.com/api   # the deployed CMS
NEXT_PUBLIC_CMS_API_URL=off                            # there isn't one yet
```

`off` is a real answer, not a workaround: the site serves the copy
bundled in `src/data/` and makes **no CMS requests at all** — nothing
failed in the network panel, nothing in the console.

Unset behaves like `off` in a production build. The localhost default
lives inside a `NODE_ENV === 'development'` branch, so a deployed bundle
does not contain it and cannot reach for a URL that would resolve to the
visitor's own machine.

**This is read on the server as well as in the browser.** The route
files fetch CMS content while rendering so it lands in the HTML (see
`src/lib/cms.server.ts`), which is what makes CMS articles and courses
visible to search engines. The server needs to be able to reach this URL
from inside your hosting network, not just from a visitor's browser.

### 2. `REVALIDATE_SECRET` — so a publish shows up immediately

The site caches every CMS read. The CMS pings `POST /api/revalidate`
after each save to drop that cache; the endpoint authenticates the ping
with a shared secret.

Set the **same string** in both places:

| Where | Variable |
| --- | --- |
| this site | `REVALIDATE_SECRET` |
| `cms-techcadd/backend/.env` | `REVALIDATE_SECRET` |

and point the CMS at the site:

```bash
# cms-techcadd/backend/.env
SITE_REVALIDATE_URL=https://techcaddludhiana.com/api/revalidate
```

Check the wiring without needing the secret:

```bash
curl https://techcaddludhiana.com/api/revalidate
# {"ok":true,"endpoint":"/api/revalidate","configured":true}
```

`configured:false` means the site has no `REVALIDATE_SECRET` and the
route refuses every ping — an unauthenticated cache-buster would let
anyone force a full rebuild on demand. Nothing breaks either way;
published changes simply take up to five minutes to appear instead of
seconds.

### 3. CORS — the CMS must allow this site's origin

Blog comments and any browser-side CMS request are sent from a
visitor's browser, so the production site origin has to be in the CMS's
allow-list:

```bash
# cms-techcadd/backend/.env
CORS_ORIGIN=https://cms.techcadd.com,https://techcaddludhiana.com
```

A missing origin here is silent: the browser blocks the request and the
page falls back to bundled content, which looks like the CMS simply
having no data in it.

### 4. Enquiries reach the CMS as well as the database

Every form still writes to this site's own `leads` table through Prisma,
and then forwards a copy to the CMS enquiries inbox so the counselling
team sees it where they work (`src/lib/cmsEnquiry.ts`). The forward runs
after the row is safely written and is never awaited, so a CMS that is
down or slow cannot delay or lose a submission — the worst case is an
enquiry in `leads` and not in the CMS.

---

## Verified on 2026-08-20

Against a local build and a running `server/index.js`:

- `npm run build` — clean, 17.8s
- all 14 routes plus an unknown path — 200, served from `dist/`
- `GET /api/health` — `{"ok":true}`
- `POST /api/leads` — 201, row written and then removed
- validation — rejects a malformed phone number and an unrecognised form
- `POST /api/team-applications` — **500, blocked on the migration above**
- `/admin` — 404, as expected with no CMS build
