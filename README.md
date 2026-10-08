# TechCadd — Hero, About, Universe, Community + Ask (React + Vite)

Dark AI/software-training hero for TechCadd Ludhiana, built from the brand logo
palette (indigo `#272269` on navy `#08091D`) with electric blue, violet and cyan accents.

## Run it

Three processes, two databases, two ports. Start them in this order.

```bash
# 1. the CMS API — content the site reads, on :4001
cd cms-techcadd/backend
npm install
npm run db:migrate      # creates the techcaddLdh schema
npm run db:seed         # creates the first administrator
npm run db:import       # loads src/data/* into the CMS (see below)
npm run dev

# 2. the site API — the forms, on :4000
cd ../..
npm install
npm run db:setup        # creates the `techcadd` database, its user and its tables
npm run start           # or: npm run dev:api

# 3. the site itself, on :5173
npm run dev             # or `npm run dev:all` to run 2 and 3 together
```

Then open http://localhost:5173, and the CMS at http://localhost:4000/admin
(`/login` redirects there). The seeded administrator is printed by `db:seed` —
change the password after the first sign-in.

### The two ports

The site API and the CMS API are separate servers and **must not share a port**.

| Process | Port | Database | What it does |
| --- | --- | --- | --- |
| site API (`server/`) | 4000 | `techcadd` (Prisma) | the forms — `/api/leads`, `/api/team-applications`; also serves `dist/` and the CMS bundle at `/admin` |
| CMS API (`cms-techcadd/backend/`) | 4001 | `techcaddLdh` (mysql2) | the CMS, and the published content the site reads from `/api/public/*` |

Both defaulted to 4000 at one point, which meant only one of them could ever
start. The CMS is on **4001** now; three settings have to agree with that, and
all three are in `.env` files:

- `cms-techcadd/backend/.env` → `PORT=4001`, and `CORS_ORIGIN` must list the
  site's origin or every page that reads the CMS falls back to bundled content
- `.env` → `VITE_CMS_API_URL=http://localhost:4001/api` (the website's reader)
- `cms-techcadd/frontend/.env` → `VITE_API_URL=http://localhost:4001/api`

The last one is baked in at build time, so the CMS bundle has to be rebuilt
(`cd cms-techcadd/frontend && npm run build`) after changing it.

### Content: the CMS is the source, `src/data` is the fallback

The blog, FAQ, reviews, testimonials and course catalogue read from the CMS and
fall back to the bundled lists in `src/data/` when it cannot be reached — see
the note at the top of `src/hooks/useCms.js` for why that is a fallback and not
a cache. `npm run db:import` in the CMS backend copies those bundled lists into
the CMS so the two start out agreeing; it skips any collection that already has
rows, and takes `--force` to replace them.

## Deploying

Two Node services and one MySQL server. Both services must be running:
the site API serves the pages and takes the forms, the CMS API serves the
content those pages read.

### 1. Before the first deploy

```bash
# on the database host, once
cd cms-techcadd/backend && npm ci && npm run db:migrate && npm run db:seed
cd ../..                 && npm ci && npm run db:deploy      # prisma migrate deploy
```

`db:seed` prints the first administrator. **Change that password at the
first sign-in** (Settings → Security) — it is a known default and the
CMS is on the public internet.

### 2. Environment

Copy both templates and fill them in. Nothing below has a safe default,
and two of them stop the build if they are missing.

| File | Must set in production |
| --- | --- |
| `.env` | `DATABASE_URL`, `CORS_ORIGINS` (the real site origin), `TRUST_PROXY=true`, `VITE_CMS_API_URL` |
| `cms-techcadd/backend/.env` | `NODE_ENV=production`, `DB_*`, `COOKIE_SECRET` (long and random), `CORS_ORIGIN` (site + admin origins) |
| `cms-techcadd/frontend/.env` | `VITE_API_URL` |

`VITE_CMS_API_URL` and `VITE_API_URL` are read at **build** time, not run
time, so they have to be set before `npm run build`, and the bundles must
be rebuilt to change them. Both builds now fail with an explanatory error
rather than quietly baking in a `localhost` URL — that mistake is
invisible afterwards, because the site falls back to its bundled copy and
looks fine while serving stale content.

`TRUST_PROXY` matters more than it looks: without it every visitor behind
your proxy shares one rate-limit bucket.

### 3. Build and start

```bash
cd cms-techcadd/frontend && npm ci && npm run build     # -> dist/, served at /admin
cd ../backend            && npm ci && npm run build     # tsc -> dist/
npm run start                                           # CMS API on :4001

cd ../..                 && npm ci && npm run build     # -> dist/
npm run start                                           # site + /admin on :4000
```

Run the two `npm run start` processes under a supervisor (systemd, pm2,
Docker — there are Dockerfiles beside both CMS packages). Put a reverse
proxy in front terminating TLS; the session cookie is `secure` in
production, so the CMS cannot sign in over plain HTTP.

Keep the CMS API and the site on the **same registrable domain**
(`techcadd.com` and `cms.techcadd.com`, say). The session cookie is
`SameSite=Lax`, so an admin UI on an unrelated domain will not be sent
its own session.

### 4. Check it came up

```bash
curl -fsS https://your-site/api/health              # {"ok":true}
curl -fsS https://your-cms/api/health               # {"status":"ok",...}
curl -fsS https://your-cms/api/public/faqs | head   # content, not []
```

Then open the site and confirm the FAQ page is showing CMS rows rather
than the bundled fallback — the quickest test is to edit one question in
the CMS and reload.

## What's inside

```
public/tece_new_logo.png       official wordmark (navbar + footer), optimised to 900px
public/techcadd-logo-white.png white wordmark, used by the loader on dark
public/techcadd-wordmark.png   wordmark without the tagline, used as the footer watermark
public/robot-dog.webp          the TechCadd robot dog, background removed
src/App.jsx                            page shell
src/components/layout/                 Navbar, Footer — app chrome
src/components/common/                 shared primitives: SmartLink, Skeleton, Deferred,
                                        ErrorBoundary, RouteFallback, Cursor, BookDemoModal,
                                        SecurityCheck, WriteIn
src/components/sections/               reusable content sections (Hero, About, Universe,
                                        Blog, Community, Ask, Journey, Cta, Capabilities,
                                        CourseCategories, PopularCourses, WhyTechCadd,
                                        Gallery, PageLinks)
src/components/sections/Journey.jsx    "5 Steps to Your Tech Career" — S-curve roadmap drawn on scroll
src/components/sections/Cta.jsx        "Start building your career today." — call pill + callback form
src/components/layout/Footer.jsx       link columns, contact pill, watermark, back-to-top
src/components/layout/Navbar.jsx       frosted pill nav + six mega menus + mobile accordion drawer
src/data/navMenus.js                   all dropdown content in one place
src/components/sections/Hero.jsx       headline, CTAs, feature row, floating tech panels
src/components/sections/About.jsx      "First line of code → future-ready career" story + 3D photo wall
src/components/sections/Universe.jsx   "Technology Universe" — course domains orbiting a glowing core
src/components/sections/Blog.jsx       "Notes from the classroom and the codebase" — post carousel
src/components/sections/Community.jsx  "Voices From The TechCadd Community" — student globe + auto carousel
src/components/sections/Ask.jsx        "Have Questions? Ask TechCadd." — AI orb + glass FAQ cards
public/photos/                 drop team.jpg / lab.jpg / placement.jpg here
src/styles/tokens.css          palette, type scale, radii, shadows
src/styles/base.css            reset + layout shell
```

## Adding your real photos

The About section reads three files from `public/photos/`:

| File | Frame | Suggested shot |
| --- | --- | --- |
| `team.jpg` | top right | trainers / faculty |
| `lab.jpg` | centre, largest | students in the project lab |
| `placement.jpg` | bottom right | placement drive or offer-letter moment |

Landscape, 1200px wide or more, under ~400KB each. If a file is missing, that
frame shows a labelled placeholder instead of breaking the layout.

Also edit the `PROOF` array at the top of `About.jsx` — the years, learner count
and hiring-partner numbers there are placeholders.

## Technology Universe (`#courses`)

Seven course domains orbit a glowing TechCadd core on a tilted ellipse. Hover or
focus a node (tap on touch) and the core swaps from its idle copy to that
domain's skill chain, career paths and an **Explore course** link; the orbit
freezes, the chosen node pulls in and brightens, and the rest drift outward and
dim so the selection reads as depth.

The whole thing is sized off the viewport — the stage height is
`clamp(480px, calc(100vh - 400px), 560px)` and the core diameter, orbit radii and
node scale are all derived from the stage in `resize()` — so the heading and the
full orbit sit inside one screen without scrolling on a normal laptop.

The nodes are true glassmorphism: a translucent white wash over
`backdrop-filter: blur(18px) saturate(150%)`, a lit top edge, an inner rim and a
specular highlight in the top-left. Each label sits in its own frosted pill with a
text shadow so it stays readable wherever the orbit carries it — and the depth and
dim curves were raised (floor 0.82 instead of 0.55, unselected 0.62 instead of 0.42)
so nothing at the back of the orbit washes out.

Edit the `DOMAINS` array at the top of `Universe.jsx` to change the courses —
`chain` renders as the arrow-separated skill path inside the core, `roles` as the
career line, and `href` as the Explore link target. Add or remove entries freely;
the orbit re-spaces itself and the geometry is derived from the stage size, so
the core never collides with a node.

## Blog carousel (`#blog`)

A white panel directly after the Technology Universe: the Blogs pill, the headline,
a **Read all posts** button, then a row of three post cards with CSS-gradient covers
in the brand's blue / violet / cyan / indigo, each with a frosted category tag.

The carousel is a native scroll container with `scroll-snap-type: x mandatory` rather
than a transform-driven slider, so touch swipe, trackpad and keyboard scrolling all
work without extra code. The arrows scroll by exactly one card width (measured from
the DOM, including the column gap) and disable themselves at each end. Cards per view
comes from `grid-auto-columns`: three, then two under 1000px, then one under 720px.

> **Replace the posts.** The six entries in the `POSTS` array in `Blog.jsx` are
> placeholder titles and excerpts written to show the layout, and every `href` is `#`.
> Point them at real articles before launch.

## Community globe (`#reviews`)

This section is dark and lifts over the white Blog panel above it with the usual
rounded-corner seam. The globe is painted for dark: an indigo sphere body under a blue
halo, pale wireframe rings and cyan connection lines.

Student reviews sit on a rotating wireframe globe — one node per learner, placed
with a Fibonacci sphere so they never clump at the poles. Back-facing nodes fade
out and stop taking clicks; clicking, tapping or tab-focusing a node opens that
review in the panel beside the globe.

The reviews run as a continuous auto carousel — the panel advances every 6.5s and
the progress bar under the arrows tracks the countdown. Choosing a node or an arrow
restarts the timer rather than ending it, and hovering anywhere over the globe or
the card pauses both the carousel and the globe's rotation.

> **Replace the reviews before launch.** The `STUDENTS` array at the top of
> `Community.jsx` is placeholder copy written to show the layout — swap in real,
> consented student feedback (name, course, batch, rating, quote). The list length
> is free; the globe re-distributes nodes automatically.

## Ask TechCadd (`#faq`)

The FAQ is framed as an AI assistant. On the left a glowing orb sits on a canvas —
a lit core with a moving waveform across it, three gyroscope rings, orbiting dust
and an ambient bloom. On the right the questions are floating glass cards.

Opening a question spikes the orb's `energy`: the bloom brightens, the rings and
waveform lift, a pulse ring fires outward and the status pill under the orb
switches from *AI core · idle* to *Answering*. The energy then eases back to its
resting level, so the orb reacts rather than just animating on a loop.

One card is open at a time. The panels animate with the `grid-template-rows:
0fr → 1fr` technique and are hidden with `visibility` when closed, so they stay out
of the tab order and the screen-reader tree without losing the transition. Buttons
carry `aria-expanded` / `aria-controls`.

The institute's own robot dog is the subject of the left column: it stands on a
glowing pad inside a soft bloom with dust drifting through it — there is no sphere
or circle behind it. It floats gently on a loop, and when a question opens it lifts,
picks up a cyan rim glow, and a scan light sweeps down it — the sweep is
a gradient masked to the robot's own silhouette via `mask-image`, so it tracks the
outline exactly. The pad glow shifts blue → cyan at the same moment.

`public/robot-dog.webp` is the supplied demo-day photo with its checkerboard
background removed (flood-filled from the borders, seams closed, largest blob kept,
edge feathered) and exported at 64KB.

Edit the `FAQS` array at the top of `Ask.jsx`. The counsellor link under the orb
points at `#contact` — repoint it when that section exists.

## Navigation

Six dropdowns hang off the pill bar — About Us, AI, Courses, Internship & Training,
After 12th and Resources — in three layouts:

| Layout | Used by | Shape |
| --- | --- | --- |
| `featured` | About Us, Resources | category rail + three photo cards with tag chips |
| `ai` | AI | headline, two link groups with Hot badges, a course card and a gradient promo |
| `columns` | Courses, Internship, After 12th | numbered columns + a quote strip with a browse-all link |

All content lives in `src/data/navMenus.js` — labels, hrefs, badges, photo paths — so
nothing needs touching in the component to add a course or rename a section.

The styling is the site's own glass identity rather than the flat grey of the
reference: a frosted white panel with a gradient accent rail across the top, mono
column numbers in electric blue, gradient badge pills, hover states that nudge links
right, and a tinted footer strip.

**Behaviour.** On desktop, hovering a trigger opens its menu and a 140ms grace period
plus a padded hover bridge lets the pointer cross from the bar to the panel without it
snapping shut. Clicking toggles, focus opens (so tabbing through works), Escape closes
and returns focus to the trigger, and a pointerdown or focus outside the header closes
it. Only one menu is ever open.

Below 1080px the mega menus are replaced entirely by drawer accordions — the same
content, one section open at a time, animated with `grid-template-rows: 0fr → 1fr`
and hidden with `visibility` so collapsed links stay out of the tab order. The two
modes are driven by a `matchMedia` listener, so they never both mount.

Photos come from `public/photos/` and fall back to brand gradient tiles when a file
is missing — see the list in `public/photos/README.txt`.

## Responsive

Global guards live in `styles/base.css`: `overflow-x: hidden` on the root, media
capped at `max-width: 100%`, `overflow-wrap: break-word` on text elements, and a 44px
minimum tap target under `(hover: none) and (pointer: coarse)`. `--nav-h` and
`--gutter` step down at 1079px and 480px in `tokens.css`, so every section's
`scroll-margin-top` follows the shorter bar automatically.

Every section carries its own breakpoints on top of that — the hero drops to one
column and loses its `100svh` floor, the Universe orbit becomes a chip grid, the
Journey rail collapses to a single left-hand line, the blog carousel goes 3 → 2 → 1
cards, and the Engine, CTA and footer all reflow at 980/720/620/460px.

## Loader

A dark curtain over the page while it loads: the white wordmark with a cyan light
sweeping across the letterforms (a gradient masked to the logo, the same technique
the robot's scan uses) inside two counter-rotating orbit rings with three coloured
dots circling them. No progress bar and no percentage readout — just the mark.

Timing still tracks the window's `load` event: the curtain holds for at least 1.5s
so it doesn't flash by, bails out after 6s if something stalls, and locks body
scroll until it lifts.

## 5 Steps to Your Tech Career (`#journey`)

Five cards alternating left and right down a pale panel, joined by a single S-curve.
The markers sit at opposite edges of a wide centre gutter — odd steps on its left
edge, even steps on its right — so the connecting curve has real horizontal swing to
work with and sweeps through empty space rather than crossing any card. The curve is
not hand-drawn coordinates: the component measures where the markers actually landed
and builds cubic beziers between their centres with vertical tangents at each end, so
it stays glued to the cards at every breakpoint and re-fits on resize. Handle length
scales off the horizontal swing as well as the drop, so the bend stays generous on
wide screens and eases off when the layout collapses to one rail.

Two paths are stacked: a faint indigo base and an electric-blue gradient overlay
that draws itself in via `stroke-dashoffset` as you scroll. Markers light up as the
line reaches them (`getPointAtLength` binary search finds each one's position along
the curve), and three glowing dots ride the drawn portion. Below 780px it collapses
to a single left-hand rail and the same measuring code produces a straight line.

The rail is tuned to stay compact — tighter row gaps, smaller markers and cards, a
narrower gutter — so five steps take roughly a third less height than they did while
the S keeps its proportion (the handle length scales with the swing, so shrinking one
dimension doesn't flatten the curve).

Edit the `STEPS` array in `Journey.jsx`; the path rebuilds for any number of steps.

## Start building your career today (`#demo`)

The closing CTA sits on the same dark canvas as the Ask section — the navy gradient,
the faint 72px grid and a drifting violet bloom, recentred for a centred layout — so
it reads as part of the site rather than the flat indigo of the reference shot. Pills,
hairlines, glass fills and body text all come from the shared tokens.

Inside: eyebrow, headline, a **Call now** pill wired to `tel:`, a mobile-number field
with a white **Book Demo** button, and the three assurances separated by hairlines.

**The form has no backend.** It validates for ten digits, then opens a pre-filled
email to `info@techcadd.com` rather than faking a submission. Replace the block
marked in `submit()` with a POST to your CRM or enquiry endpoint when you have one.
The phone number lives in `PHONE_DISPLAY` / `PHONE_DIAL` at the top of `Cta.jsx`.

## Footer

Four columns — brand blurb with the email pill and phone, then Courses, Company and
Support — over a giant `techcadd` watermark built from the real wordmark asset
(tagline cropped off) rather than a font approximation. Below the rule sits the
copyright with Ludhiana picked out in blue, and the social row. The back-to-top
button is `position: fixed` and fades in past 600px of scroll.

The footer carries `id="contact"`, so the counsellor link in the FAQ and the
Contact Us / Enquire Now links all resolve. **Social hrefs are all `#`** — put the
real profile URLs in the `SOCIALS` array in `Footer.jsx` before launch.

## Notes

- The 3D brain is drawn on a 2D canvas with its own perspective projection — no
  Three.js, no model files, no extra dependencies. It rotates continuously and
  tilts toward the cursor.
- `prefers-reduced-motion` freezes the rotation and pulses; the animation also
  pauses when the tab is hidden.
- Fonts load from Google Fonts (Space Grotesk / Plus Jakarta Sans / JetBrains Mono)
  and fall back to system faces offline.
- About sits on a white panel with rounded top corners pulled up over the hero,
  so the dark section reads through the corner cut instead of ending in a hard
  seam. Its light palette lives in the second `:root` block in `tokens.css`.
- The About photo wall tilts on `pointermove` with an eased rAF loop; each frame
  has its own depth, so they separate as the cursor moves. It is skipped entirely
  on coarse pointers and under `prefers-reduced-motion`.
- The About copy, photos and journey steps fade in once via IntersectionObserver.
- The Universe orbit and the Community globe are both plain 2D canvas plus DOM
  nodes positioned each frame — no Three.js, no WebGL, no extra dependencies. The
  nodes stay real focusable buttons, so keyboard and screen-reader users get the
  same content the hover reveals.
- Both new sections freeze their motion under `prefers-reduced-motion` and pause
  when the tab is hidden.
- The Universe panel lifts over the white About section with the same rounded-corner
  trick About uses over the hero, so the light → dark handover has no seam.
- Section order: hero (dark) → About (white) → Universe (dark) → Blog (white) →
  Community (dark) → Course Categories (dark) → Ask (dark) → Journey (pale) →
  CTA (dark) → footer (light). Dark and light now alternate the whole way down, and
  every handover uses the same negative margin plus rounded top corners, so there are
  no hard seams anywhere.
- Breakpoints: full nav above 980px, drawer below; hero and About stack below
  1020px; the journey rail goes 5 → 2 → 1 column. Below 900px the orbit collapses
  into a chip grid with the core as a card underneath; the Community globe and its
  review panel stack below 1020px.
