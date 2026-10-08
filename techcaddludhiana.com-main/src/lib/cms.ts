import { CMS_SOURCE_FOR, canonicalCourseSlug } from '../data/courses/path'
/* ==================================================================
   The website's half of the CMS link.

   The blog, FAQ, reviews, courses, gallery and the reviews wall all
   render what the CMS API's public endpoints return — `/api/public/
   blogs`, `/faqs`, `/reviews`, `/courses`, `/categories`, `/gallery`,
   `/testimonials`. Those endpoints are the only ones without a session
   in front of them, and they force `status = 'published'`
   server-side, so nothing here can accidentally pull a draft onto the
   site.

   These functions run in the BROWSER. The same endpoints are read on
   the server by src/lib/cms.server.ts, which is where the page's first
   paint comes from; this file is the fallback path and the shared
   mappers.

   Two things live in this file:

     - `cmsList`, a thin fetch with a timeout;
     - the mappers, which turn a CMS record into the shape the page
       components were already written against.

   The mappers are the reason connecting the CMS did not mean
   rewriting three pages. A CMS review has `authorName` and
   `reviewedOn`; the page wants `name` and `batch`. Translating once,
   here, keeps that vocabulary out of the components.
================================================================== */

/* Next.js inlines this at build time, so a deployed bundle points at
   the deployed API. Left unset it assumes the API is on localhost:4000,
   which is where `npm run dev` in cms-techcadd/backend puts it — see
   PORT in that project's .env.example. The site's own form API is a
   Next.js route handler on 3000, so there is no clash to avoid.

   In production the variable has to be set: the localhost fallback is
   inside a NODE_ENV check, so a deployed build has no URL at all and
   the site runs on its bundled copy rather than on a localhost address
   that will never answer.

   `NEXT_PUBLIC_CMS_API_URL=off` is the other accepted answer: there is
   no CMS reachable yet, so the site runs on the copy bundled in
   src/data. That is not the same as "the CMS is down" — there is
   nothing to be down, so nothing is requested and nothing is logged as
   a failure. See CMS_ENABLED below, which both useCms and
   cms.server.ts check before they fetch. */
const RAW = (process.env.NEXT_PUBLIC_CMS_API_URL ?? '').trim()

/** false when the build was told there is no CMS to talk to. */
export const CMS_ENABLED = !['off', 'none', 'false', 'disabled'].includes(RAW.toLowerCase())

/* The localhost default is written inside a `process.env.NODE_ENV`
   branch rather than as a plain `||` fallback, because Next replaces
   that expression with a literal at build time and the whole branch —
   the URL string included — is then dropped by the minifier.

   That matters for more than tidiness. `.trim()` and `.includes()`
   above are not statically foldable, so a plain fallback survives into
   the bundle as unreachable code, and anyone grepping a deployed
   bundle for "localhost" finds a hit and has to work out whether it is
   live. This way a production bundle simply does not contain the
   string. */
const API_BASE = (
  CMS_ENABLED ? RAW || (process.env.NODE_ENV === 'development' ? 'http://localhost:4000/api' : '') : ''
).replace(/\/+$/, '')

export const CMS_PUBLIC_BASE = `${API_BASE}/public`
const PUBLIC_BASE = CMS_PUBLIC_BASE

/* The API's own origin, without the /api suffix. Uploaded images are
   stored as site-relative paths (/uploads/…) so the database survives
   a change of domain — which means the website has to resolve them
   against the API rather than against itself. */
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, '')

/** Resolves an uploaded file's path against the API host. */
export function cmsAsset(url: string | undefined | null) {
  if (!url) return undefined
  if (/^(https?:|data:|blob:)/i.test(url)) return url
  if (!url.startsWith('/uploads/')) return url
  return `${API_ORIGIN}${url}`
}

/* A page that hangs waiting for an unreachable CMS is worse than one
   that falls back to its bundled copy, so every request is capped. */
const TIMEOUT_MS = 8000

/**
 * GETs a public collection and returns its items.
 *
 * Throws on anything other than a 2xx with a JSON body — the caller
 * (see `useCmsList`) turns that into the fallback path rather than an
 * error screen.
 */
export async function cmsList(path: string, { limit, signal }: { limit?: number; signal?: AbortSignal } = {}) {
  const url = new URL(`${PUBLIC_BASE}${path}`)
  if (limit) url.searchParams.set('limit', String(limit))

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  /* the caller's signal and our timeout both have to be able to
     cancel this, and AbortSignal.any is too new to rely on */
  const onAbort = () => controller.abort()
  signal?.addEventListener('abort', onAbort)

  try {
    const response = await fetch(url, {
      headers: { accept: 'application/json' },
      signal: controller.signal
    })
    if (!response.ok) throw new Error(`CMS responded ${response.status}`)

    const data = await response.json()
    return Array.isArray(data?.items) ? data.items : []
  } finally {
    clearTimeout(timer)
    signal?.removeEventListener('abort', onAbort)
  }
}

/** Fetches one published record by slug. */
export async function cmsGet(path: string, { signal }: { signal?: AbortSignal } = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  const onAbort = () => controller.abort()
  signal?.addEventListener('abort', onAbort)

  try {
    const response = await fetch(`${PUBLIC_BASE}${path}`, {
      headers: { accept: 'application/json' },
      signal: controller.signal
    })
    /* a 404 is a real answer — the slug is not published — and has to
       be distinguishable from the CMS being down */
    if (response.status === 404) return null
    if (!response.ok) throw new Error(`CMS responded ${response.status}`)
    return await response.json()
  } finally {
    clearTimeout(timer)
    signal?.removeEventListener('abort', onAbort)
  }
}

/* ------------------------------------------------------------------
   Small formatting helpers, shared by the mappers below.
------------------------------------------------------------------ */

/** 'Jul 28, 2026' — the format the cards were already written for. */
function formatDate(value: string | number | Date | null | undefined) {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

/**
 * Same ~200 wpm estimate the CMS shows the author while they write.
 *
 * Returns nothing for a post with no body yet — a card that promises
 * '1 min read' and opens on an empty article is worse than one that
 * simply does not mention a length.
 */
function readingTime(html: string | null | undefined) {
  const words = String(html || '')
    .replace(/<[^>]*>/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length

  if (!words) return undefined
  return `${Math.max(1, Math.round(words / 200))} min read`
}

function stripHtml(html: string | null | undefined) {
  return String(html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&rsquo;|&lsquo;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
}

/* The four cover gradients the blog cards use. The CMS has no field
   for one — it is presentation, not content — so it is dealt round
   the list, which keeps a page of covers varied however many posts
   there happen to be. */
const TONES = ['blue', 'violet', 'cyan', 'indigo']

/* ------------------------------------------------------------------
   Mappers — CMS record → the shape the page components render.
------------------------------------------------------------------ */

/** A CMS blog post → the card shape in src/data/blog.js. */
export function mapPost(post: Record<string, any>, index = 0) {
  const excerpt = post.excerpt?.trim() || stripHtml(post.body).slice(0, 180)

  return {
    id: post.id,
    slug: post.slug,
    /* the first tag is the topic chip; a post with no tags still has
       to land under something the filter can show */
    tag: post.tags?.[0] || 'Insights',
    tone: TONES[index % TONES.length],
    date: formatDate(post.publishDate || post.createdAt),
    read: readingTime(post.body),
    title: post.title,
    excerpt,
    cover: cmsAsset(post.coverImage?.url),
    coverAlt: post.coverImage?.alt || '',
    href: `/blog/${post.slug}`,
    /* newest first is how the API sorts, so the first post is the one
       the page leads with */
    featured: index === 0
  }
}

/** A CMS blog post → the article shape the post page renders. */
export function mapPostDetail(post: Record<string, any> | null) {
  if (!post) return null

  return {
    ...mapPost(post),
    body: post.body || '',
    metaTitle: post.seo?.metaTitle || post.title,
    metaDescription: post.seo?.metaDescription || post.excerpt || ''
  }
}

/** A CMS category label → the key the FAQ topic filter uses. */
export const faqGroupKey = (category: string | null | undefined) =>
  String(category || 'General')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'general'

/** A CMS question → the accordion shape in src/data/faq.js. */
export function mapFaq(faq: Record<string, any>) {
  return {
    id: faq.id,
    group: faqGroupKey(faq.category),
    groupLabel: faq.category || 'General',
    q: faq.question,
    a: faq.answer,
    featured: Boolean(faq.featured)
  }
}

/**
 * The topic chips, built from the questions themselves.
 *
 * Deriving them means a new category in the CMS appears on the site
 * as soon as a question uses it, with no second edit anywhere. Order
 * follows the API's, which groups by category.
 */
export function faqGroupsFrom(faqs: Array<{ group: string; groupLabel: string }>) {
  const seen = new Map()
  faqs.forEach((faq) => {
    if (!seen.has(faq.group)) seen.set(faq.group, faq.groupLabel)
  })
  return [...seen].map(([key, label]) => ({ key, label }))
}

/** A CMS review → the quote-card shape in src/data/reviews.js. */
export function mapReview(review: Record<string, any>) {
  /* `reviewedOn` is a free-text field in the CMS ('2024', 'Mar 2024',
     an ISO date) — pull a year out of whatever is there rather than
     assuming a format, and drop the line entirely if there is none */
  const year = String(review.reviewedOn || '').match(/\b(19|20)\d{2}\b/)?.[0]

  return {
    id: review.id,
    name: review.authorName,
    course: review.courseName?.trim() || 'techcadd',
    batch: year ? `${year} batch` : 'Verified learner',
    rating: Math.max(1, Math.min(5, Number(review.rating) || 5)),
    quote: review.quote,
    source: review.source,
    /* The address this review can actually be read at.
       Migration 015_review_google_url added it precisely so the Google
       mark on a card leads somewhere; this mapper dropped it, so every
       card claimed "Posted on Google" and linked nowhere. Optional by
       design — a review typed up from a walk-in has none. */
    googleUrl: review.googleUrl || undefined
  }
}

/**
 * A CMS testimonial → the wall-card shape src/components/Community.jsx
 * renders.
 *
 * Separate from `mapReview` because the two are different records with
 * different jobs: a review is a rating with a course attached and is
 * counted into the breakdown on /reviews, a testimonial is a quote
 * with a face on it that any page may show. The CMS keeps them in
 * separate tables for the same reason.
 */
export function mapTestimonial(testimonial: Record<string, any>) {
  return {
    id: testimonial.id,
    name: testimonial.studentName,
    /* The wall prints one line under the name, from `course` and
       `batch`. A CMS testimonial has no course column — only the free
       `batch` field, which is where the seed put the course or the
       locality — so `course` is left empty and the card renders the
       one part it has rather than an orphaned separator. */
    course: '',
    detail: testimonial.batch || '',
    rating: Math.max(1, Math.min(5, Number(testimonial.rating) || 5)),
    quote: testimonial.quote,
    photo: cmsAsset(testimonial.photo?.url),
    featured: Boolean(testimonial.featured),
    /* Where it was actually left, which the card's footer prints.

       A testimonial carries `googleReviewUrl` only when it really is a
       Google review, so that field — and nothing else — is what earns
       the Google mark. Without it the card says "Posted on our
       website", which is the truth about a quote an editor typed in.
       Guessing the other way would put a specific, checkable and false
       claim under someone's name. */
    source: testimonial.googleReviewUrl ? 'google' : 'website',
    /* Named `googleUrl` to match `mapReview`. Both shapes feed the same
       card, and a second name for the same thing is how one of them
       ends up unrendered. */
    googleUrl: testimonial.googleReviewUrl || undefined,
    /* A student's video testimonial. The CMS has stored this since the
       testimonials table was created and nothing on the site read it,
       so a recorded testimonial was invisible. Played in place — see
       VideoPlayer. */
    videoUrl: testimonial.videoUrl || undefined
  }
}

/**
 * A CMS course → the fields the catalogue card needs.
 *
 * Carries the editor's own picture when there is one (`image`); the
 * colour, and the picture for a course with no upload, come from
 * `courseTone(category)` and `courseImage(slug)` in src/data. The page
 * decorates what this returns — see CoursesIndexPage — so this file
 * stays free of imports from the bundled dataset.
 */
export function mapCourse(course: Record<string, any>) {
  return {
    id: course.id,
    slug: course.slug,
    /* Which of the CMS's three URL segments the record belongs to —
       'courses', 'after-12th-courses' or 'internship-training'. The
       website has one course namespace and serves all of them from
       /courses/<slug>, so this is not part of the address here; it is
       what `dedupeCoursesBySlug` breaks a tie on. */
    segment: course.segment || 'courses',
    name: course.title,
    short: course.shortDescription || '',
    /* the card's paragraph. `description` is where the course's own
       subtitle landed; shortDescription is the label-length one. */
    blurb: stripHtml(course.description) || course.shortDescription || '',
    /* the record carries only the id — the catalogue resolves it
       against /public/categories, which it fetches alongside */
    categoryId: course.categoryId || null,
    /* not an editor's "[VERIFY …]" reminder — see courseFromCms.ts */
    duration: /^\[[^\]]*\]$/.test(String(course.duration || '').trim()) ? '' : course.duration || '',
    level: course.level || '',
    moduleCount: Array.isArray(course.syllabus) ? course.syllabus.length : 0,
    highlights: Array.isArray(course.highlights) ? course.highlights : [],
    /* The picture an editor uploaded. The note above used to say courses
       have no image column — they do, `thumbnail`, and 36 of the live
       Ludhiana courses have one set — so every card showed the bundled
       photograph for its slug, or a gradient, and the upload appeared
       nowhere on the catalogue. Resolved against the CMS origin, since
       the record stores a site-relative /uploads path. */
    image: cmsAsset(course.thumbnail?.url) || null
  }
}

/* ------------------------------------------------------------------
   Events — seminars and workshops.
------------------------------------------------------------------ */

/** '25 Aug 2026', or '25–27 Aug 2026' when it runs over several days. */
function formatDateRange(start: string | undefined, end: string | undefined) {
  const from = formatDate(start)
  if (!from) return ''
  const to = formatDate(end)
  /* An end date equal to the start is a one-day event recorded with
     both fields filled in; printing it twice reads as a mistake. */
  if (!to || to === from) return from
  return `${from} — ${to}`
}

/** '10:00 AM – 4:00 PM', or nothing when no times were given. */
function formatTimeRange(start: string | undefined, end: string | undefined) {
  if (!start) return ''
  return end ? `${start} – ${end}` : start
}

/**
 * A CMS event → the shape the events pages render.
 *
 * `past` is decided here, once, against the event's LAST day: a
 * three-day workshop is still running on its second morning, and
 * comparing against the start date would file it under "past" the day
 * after it opened.
 */
export function mapEvent(event: Record<string, any>) {
  const end = event.endsOn || event.startsOn
  /* Date-only comparison. An event finishing today is on today, not
     over — comparing against the current time would retire it at
     midnight-plus-one-second on its own last day. */
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const last = end ? new Date(end) : null
  if (last) last.setHours(0, 0, 0, 0)

  /*
    The stage an event is in.

    An editor may set it explicitly — for one postponed, or running right now
    across a date boundary — and that answer wins. Otherwise it is worked out
    from the dates, which is what this did before the field existed and is
    still right for almost every event.
  */
  const derived = last && last < today ? 'completed' : 'upcoming'
  const lifecycle = event.lifecycle || derived

  return {
    id: event.id,
    slug: event.slug,
    title: event.title,
    type: event.eventType || 'event',
    category: event.category || '',
    lifecycle,
    whoCanAttend: event.whoCanAttend || '',
    prerequisites: event.prerequisites || '',
    videoUrl: event.videoUrl || '',
    videoTitle: event.videoTitle || '',
    registrationLabel: event.registrationLabel || '',
    contactName: event.contactName || '',
    contactPhone: event.contactPhone || '',
    contactEmail: event.contactEmail || '',
    /* Only the ones with a real address — an empty value is a profile the
       editor has not filled in, not a link. */
    social: Object.entries(event.social || {})
      .filter(([, url]) => typeof url === 'string' && /^https?:\/\//i.test(url))
      .map(([platform, url]) => ({ platform, url: url as string })),
    faqs: Array.isArray(event.faqs)
      ? event.faqs.filter((f: any) => f?.question && f?.answer)
      : [],
    mode: event.mode || '',
    summary: event.summary || '',
    body: event.body || '',
    cover: cmsAsset(event.coverImage?.url),
    coverAlt: event.coverImage?.alt || '',
    startsOn: event.startsOn,
    endsOn: event.endsOn,
    dateLabel: formatDateRange(event.startsOn, event.endsOn),
    timeLabel: formatTimeRange(event.startTime, event.endTime),
    venueName: event.venueName || '',
    venueAddress: event.venueAddress || '',
    city: event.city || '',
    mapUrl: event.mapUrl || '',
    hostName: event.hostName || '',
    registrationUrl: event.registrationUrl || '',
    seats: typeof event.seats === 'number' ? event.seats : undefined,
    tags: Array.isArray(event.tags) ? event.tags : [],
    highlights: Array.isArray(event.highlights) ? event.highlights.map((h: any) => h.text).filter(Boolean) : [],
    agenda: Array.isArray(event.agenda) ? event.agenda : [],
    speakers: Array.isArray(event.speakers)
      ? event.speakers.map((speaker: any) => ({ ...speaker, photo: cmsAsset(speaker.photo?.url) }))
      : [],
    images: Array.isArray(event.images)
      ? event.images
          .map((image: any) => ({
            src: cmsAsset(image.media?.url),
            alt: image.media?.alt || image.caption || '',
            caption: image.caption || ''
          }))
          .filter((image: any) => image.src)
      : [],
    featured: Boolean(event.featured),
    /* Follows the lifecycle, so an editor marking something completed moves
       it to the past list even if its dates say otherwise. */
    past: lifecycle === 'completed',
    metaTitle: event.seo?.metaTitle || '',
    metaDescription: event.seo?.metaDescription || event.summary || ''
  }
}

/* ------------------------------------------------------------------
   Gallery.

   The CMS models the campus photographs as ALBUMS, each holding
   images; the wall on /gallery is one flat, shuffled set of frames
   with no album structure on screen at all. So the albums are
   flattened here rather than the wall being rebuilt around a grouping
   it does not show.
------------------------------------------------------------------ */

/* Ratios the wall lays out against, mirroring src/data/gallery.ts.
   Repeated rather than imported so this file stays free of imports
   from the bundled dataset — the same rule `mapCourse` follows. */
const RATIO = { square: '1 / 1', portrait: '3 / 4', landscape: '4 / 3' }

/* The gradient a tile shows before its file loads, and keeps showing
   if the file is missing. Presentation, so the CMS has no column for
   it; dealt round the list, which keeps the wall varied at any length. */
const GALLERY_TONES = ['violet', 'blue', 'cyan', 'indigo']

/**
 * A stored image's real shape, so the frame reserves the right box.
 *
 * The frames are `object-fit: cover`, so a ratio that disagrees with
 * the file crops it. Without dimensions — an older media row, an SVG —
 * square is the safest guess: it is the shape most of the wall is in,
 * and it crops a landscape photograph symmetrically rather than
 * stretching it.
 */
function ratioFor(width?: number, height?: number) {
  if (!width || !height) return RATIO.square
  const aspect = width / height
  if (aspect > 1.15) return RATIO.landscape
  if (aspect < 0.87) return RATIO.portrait
  return RATIO.square
}

/**
 * CMS albums → the flat photo list the wall deals across its columns.
 *
 * Album order first, then image order within each — which is the order
 * an editor arranged them in at both levels.
 */
export function mapGalleryPhotos(albums: Array<Record<string, any>>) {
  const photos: Array<{ src: string; tone: string; ratio: string; alt: string }> = []

  albums.forEach((album) => {
    ;(Array.isArray(album.images) ? album.images : []).forEach((image: Record<string, any>) => {
      const src = cmsAsset(image?.media?.url)
      if (!src) return

      photos.push({
        src,
        tone: GALLERY_TONES[photos.length % GALLERY_TONES.length],
        ratio: ratioFor(image.media?.width, image.media?.height),
        /* Nothing is printed over a photograph, so the alt text is the
           only words these carry and it is the whole accessible
           description. The caption is a reasonable second choice; the
           album title is a poor third but beats an empty alt on a
           photograph that is not decorative. */
        alt: image.media?.alt || image.caption || album.title || ''
      })
    })
  })

  return photos
}

/**
 * One card per URL.
 *
 * A CMS slug is unique within its segment, not across the table (see
 * migration 018 in the backend), and two courses legitimately share
 * one: `cybersecurity` and `generative-ai` each exist under `courses`
 * and under `after-12th-courses`.
 *
 * The CMS models those as two addresses — /courses/<slug> and
 * /after-12th-courses/<slug>. This website has never had the second:
 * it serves every course from /courses/<slug>, and its own After 12th
 * menu links there too. So on this site the two records really are one
 * page, and listing both puts two cards with different names and the
 * same destination side by side in the catalogue.
 *
 * The `courses` segment wins, which is the record that namespace
 * belongs to and the same tie-break the API applies when it resolves
 * one of these slugs. Order is otherwise preserved.
 */
export function dedupeCoursesBySlug(courses: Array<Record<string, any>>) {
  const bySlug = new Map<string, Record<string, any>>()

  courses.forEach((raw) => {
    /* A CMS record that is one of the built-in courses under another
       slug is that course — see CMS_DUPLICATE_OF. It is filed under the
       course's own slug, so it is listed once and links to the one page. */
    const slug = canonicalCourseSlug(raw.slug)
    const isSource = CMS_SOURCE_FOR[slug] === raw.slug
    const course = slug === raw.slug ? raw : { ...raw, slug }

    const existing = bySlug.get(slug)
    if (!existing) {
      bySlug.set(slug, { ...course, __source: isSource })
      return
    }
    /* Of several records for one course, the one the page takes its
       content from is the one the card should describe. */
    if (isSource && !existing.__source) {
      bySlug.set(slug, { ...course, __source: true })
      return
    }
    if (existing.__source) return
    /* Only a main-catalogue record may displace one already held; two
       records from other segments keep the first, so the result is
       stable however the list arrives. */
    if (course.segment === 'courses' && existing.segment !== 'courses') {
      bySlug.set(course.slug, course)
    }
  })

  /* the marker was only for choosing between records */
  return [...bySlug.values()].map(({ __source, ...course }) => course)
}

/**
 * Testimonials and reviews as one list of quotes.
 *
 * The two are different records with different jobs — a review is a
 * rating attached to a course and is counted into the breakdown on
 * /reviews; a testimonial is a quote an editor picked out. On a wall
 * of student voices they are the same thing, and both mappers already
 * produce the same card shape.
 *
 * Merging rather than choosing is the fix for a real bug: the home
 * page used to take testimonials when there were any and reviews only
 * when there were none, so a single testimonial in the CMS replaced
 * all twelve reviews — and `fill()` in Community then cycled that one
 * card twelve times to make the columns loop.
 *
 * `course` is normalised on the way through. `mapTestimonial` leaves
 * it empty on purpose, which is right for the wall card but wrong for
 * the course filter on /reviews, where an empty value becomes a chip
 * with no label. 'techcadd' is what `mapReview` already falls back to
 * for a review with no course named.
 */
export function mergeVoices(
  testimonials: Array<Record<string, any>> | null | undefined,
  reviews: Array<Record<string, any>> | null | undefined
) {
  const all = [
    /* Editors' picks lead; reviews follow in their own order. */
    ...(testimonials ?? []),
    ...(reviews ?? [])
  ].map((voice) => ({ ...voice, course: voice.course?.trim() || 'techcadd' }))

  /* `null`, not `[]`, when neither answered — that is what tells
     `useCmsList` to fall back to the bundled copy. */
  return all.length ? all : null
}

/** A CMS category → `{ id, name }`, for resolving a course's categoryId. */
export function mapCategory(category: Record<string, any>) {
  return { id: category.id, name: category.name }
}

/**
 * The star breakdown, counted from the reviews on the page.
 *
 * The bundled copy carries hand-written percentages; once the reviews
 * are real, quoting a figure the visible list does not support is the
 * kind of thing that gets noticed. This one always adds up.
 */
export function breakdownFrom(reviews: Array<{ rating: number }>) {
  if (!reviews.length) return null

  const counts = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    n: reviews.filter((review) => review.rating === stars).length
  }))

  const total = reviews.length
  const mean = reviews.reduce((sum, review) => sum + review.rating, 0) / total

  return {
    score: mean.toFixed(1),
    outOf: 'out of 5',
    total: `${total} ${total === 1 ? 'rating' : 'ratings'} across courses`,
    rows: counts.map((row) => ({
      stars: row.stars,
      pct: Math.round((row.n / total) * 1000) / 10
    }))
  }
}
