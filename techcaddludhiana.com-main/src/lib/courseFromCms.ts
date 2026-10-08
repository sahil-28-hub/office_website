/* ==================================================================
   A CMS course → the object CoursePage renders.

   THE PROBLEM THIS SOLVES

   The catalogue at /courses has read the CMS for a while. The course
   PAGES never did: they were built entirely from src/data/courses,
   48 hand-written seeds. So a course added in the CMS appeared on the
   index, and the card linked to a page that did not exist — the
   registry had no seed for that slug, `getCourse` returned nothing,
   and the visitor got "course not found" from a link the site had
   just shown them.

   TWO OUTPUTS, FOR TWO DIFFERENT JOBS

   `courseOverlay` is SPARSE. It carries only the fields the CMS
   actually holds a value for, and it is spread OVER a hand-written
   course. That direction matters: the seeds carry long-form copy
   written for search — narrative sections, FAQs, a salary table — and
   an overlay that included every key would replace all of it with
   generated defaults the moment a course was opened in the CMS. An
   editor changing a duration must change the duration and nothing
   else.

   `courseFromCms` is COMPLETE. It runs the CMS record through the
   same `buildCourse` factory the seeds go through, so a course with
   no seed at all still gets the standard benefits, the career path,
   the certification block and the rest, and renders on the same page
   as everything else rather than on a special one.

   WHAT IS DELIBERATELY NOT MAPPED

   - `faqs` and `testimonials`. A CMS course links these by id
     (`faqIds`, `reviewIds`) and the record carries no text for them,
     so there is nothing here to map. The seeds' own generated
     questions stand, which is better than an empty accordion.
   - `compare`, `salary`, `future`, `narrative`. Long-form editorial
     with no CMS column behind it. `buildCourse` generates all four.
================================================================== */

import { SALARY_MARKETS, buildCourse } from '@/data/courses/shared'
import { cmsAsset } from './cms'

/**
 * Icon names src/components/course/icons.tsx can actually draw.
 *
 * The CMS stores an icon as free text, and `Icon` returns null for a
 * name it does not know — which is a silently missing glyph rather
 * than an error. Anything unrecognised is swapped for the section's
 * own default instead.
 */
const ICONS = new Set([
  'arrowRight', 'arrowDown', 'arrowUpRight', 'download', 'play', 'star',
  'check', 'plus', 'minus', 'chevron', 'clock', 'quote', 'curriculum',
  'terminal', 'stack', 'mentor', 'career', 'support', 'code', 'server',
  'django', 'bot', 'chart', 'spark', 'database', 'phone', 'close'
])

const icon = (value: unknown, fallback: string) =>
  typeof value === 'string' && ICONS.has(value) ? value : fallback

/** A non-empty string, or nothing. Blank CMS fields must not overwrite copy. */
/*
  A field that holds only an editor's reminder — "[VERIFY ACTUAL
  DURATION]", "[TBD]" — is a field with nothing in it yet. Printing it
  put the reminder on the public page, in the hero and in the course
  schema. Treated as empty, the page shows its own default instead.
*/
const PLACEHOLDER = /^\[[^\]]*\]$/

const text = (value: unknown) => {
  const trimmed = typeof value === 'string' ? value.trim() : ''
  return trimmed.length && !PLACEHOLDER.test(trimmed) ? trimmed : undefined
}

/** A non-empty array, or nothing. Same reason as `text`. */
const list = <T,>(value: unknown): T[] | undefined =>
  Array.isArray(value) && value.length ? (value as T[]) : undefined

/**
 * The hero headline, which CourseHero maps over — so it has to be an
 * array, and a plain string from the CMS would throw.
 *
 * Split on a sentence break where there is one, because the design
 * sets the second line in the accent colour and a single long line
 * loses that. One line is fine; three would overflow the hero, so the
 * remainder joins the second.
 */
function headlineFrom(value: unknown): string[] | undefined {
  const raw = text(value)
  if (!raw) return undefined

  const parts = raw.split(/(?<=[.!?])\s+/).filter(Boolean)
  if (parts.length <= 1) return [raw]
  return [parts[0], parts.slice(1).join(' ')]
}

/** 'Python Programming Course' → 'Python Programming'. */
function shortFrom(title: string) {
  return title.replace(/\s+(course|training|programme|program)\s*$/i, '').trim() || title
}

/* ------------------------------------------------------------------
   Child collections.
------------------------------------------------------------------ */

/** A CMS syllabus module → the roadmap tab LearningRoadmap renders. */
function modulesFrom(syllabus: any[] | undefined) {
  if (!syllabus?.length) return undefined
  return syllabus.map((entry, i) => ({
    /* `buildCourse` numbers the seeds' modules; a course assembled
       here has to carry its own, because the roadmap prints it. */
    no: String(i + 1).padStart(2, '0'),
    title: entry.title,
    /*
      The line under the module title.

      `span` is the phrase the design shows ("Weeks 1-4"). `hours` is a
      number, so the old `text(entry.hours)` here was always undefined —
      `text` returns nothing for a non-string — and every CMS module fell
      through to "Module 01" no matter what an editor entered.
    */
    tag:
      text(entry.span) ||
      (typeof entry.hours === 'number' && entry.hours > 0
        ? `${entry.hours} hours`
        : `Module ${i + 1}`),
    description: text(entry.body) || '',
    skills: list<string>(entry.topics) || [],
    tech: list<string>(entry.tools) || [],
    /* the roadmap's closing line. `outcomes` is a list and `project` a
       sentence; either is a reasonable answer to "what do I leave this
       module with", and the project is the more concrete one. */
    outcome: text(entry.project) || (list<string>(entry.outcomes) || []).join(' · ')
  }))
}

/** A CMS tool → the TechEcosystem chip. */
/**
 * Lay a list of tools out on the ring TechEcosystem draws.
 *
 * The seeds get this from `technologies()` in courses/shared.js, and
 * the overlay replaces `technologies` wholesale — so a CMS list
 * arrived with no `angle` on it, TechEcosystem multiplied undefined by
 * pi, and every spoke of the diagram got `x2="NaN"`. Same formula as
 * the seed helper: evenly spaced, starting at twelve o'clock.
 */
function onRing<T>(list: T[]): (T & { angle: number })[] {
  const step = 360 / Math.max(list.length, 1)
  return list.map((item, i) => ({ ...item, angle: -90 + i * step }))
}

function technologiesFrom(tools: any[] | undefined, names: string[] | undefined) {
  if (tools?.length) {
    return onRing(
      tools.map((tool) => ({ name: tool.name, note: text(tool.body) || text(tool.category) || '' }))
    )
  }
  /* The course row also carries a plain list of tool names, which is
     what an editor who has not filled in the richer table will have
     used. A chip with no note still draws correctly. */
  if (names?.length) return onRing(names.map((name) => ({ name, note: '' })))
  return undefined
}

/** A CMS career row → the CareerOutcomes card. */
function careersFrom(roles: any[] | undefined) {
  if (!roles?.length) return undefined
  return roles.map((role) => ({
    icon: icon(role.icon, 'career'),
    title: role.role,
    text: text(role.body) || text(role.market) || ''
  }))
}

/** Whichever project the editor promoted, or none. */
function capstoneOf(projects: any[] | undefined) {
  return (projects ?? []).find((project) => project?.isCapstone && text(project?.title))
}

/**
 * A CMS project -> the grid card.
 *
 * The promoted one is left out: it is rendered above the grid as the capstone
 * panel, and showing it in both places reads as two different projects with
 * the same name.
 */
function projectsFrom(projects: any[] | undefined) {
  if (!projects?.length) return undefined
  const capstone = capstoneOf(projects)
  const rest = projects.filter((project) => project !== capstone)
  if (!rest.length) return undefined
  return rest.map((project) => ({
    title: project.title,
    /* the card reads `text`, the CMS column is `body` */
    text: text(project.body) || '',
    tags: list<string>(project.tags) || []
  }))
}

/**
 * The capstone panel above the grid.
 *
 * `featured` came from the seed and nothing mapped a CMS project into it, so a
 * course built in the CMS showed the grid with no panel over it however many
 * projects it had — and, once this band started mounting for CMS courses,
 * reading `featured.lines` off undefined took the page down entirely.
 *
 * The seeds' capstone carries a code sample; the CMS models no such thing, so
 * `lines` is absent here and CourseProjects draws its picture instead.
 */
function featuredFrom(projects: any[] | undefined) {
  const capstone = capstoneOf(projects)
  if (!capstone) return undefined

  return {
    kicker: 'Capstone project',
    title: text(capstone.title),
    text: text(capstone.body) || '',
    tags: list<string>(capstone.tags) || [],
    difficulty: text(capstone.difficulty) || 'Advanced',
    status: text(capstone.status) || 'Portfolio piece'
  }
}

/** A CMS benefit → the CourseBenefits card. */
function benefitsFrom(benefits: any[] | undefined) {
  if (!benefits?.length) return undefined
  return benefits.map((benefit, i) => ({
    no: String(i + 1).padStart(2, '0'),
    icon: icon(benefit.icon, 'check'),
    title: benefit.title,
    text: text(benefit.body) || ''
  }))
}

/** A CMS fact → a hero metric. */
function metricsFrom(facts: any[] | undefined) {
  if (!facts?.length) return undefined
  return facts.map((fact) => ({
    value: `${fact.value ?? ''}${fact.suffix ?? ''}`,
    label: fact.label
  }))
}

/**
 * The numbered points in "the case for it".
 *
 * They come from the CMS's `workflow` list — a `{title, body}` list that has
 * been editable and stored since the section list was written and was read by
 * nothing at all. The band numbers them by position, exactly as the generated
 * four are numbered, so `no` is derived here rather than asked of an editor.
 */
function valueItemsFrom(points: any[] | undefined) {
  if (!points?.length) return undefined
  const items = points
    .filter((point) => text(point?.title))
    .map((point, i) => ({
      no: String(i + 1).padStart(2, '0'),
      title: text(point.title),
      text: text(point.body) || ''
    }))
  return items.length ? items : undefined
}

/**
 * A hero button as the page wants it: `{ text, url }`, or nothing.
 *
 * The CMS stores a label, a `type` and a URL, and the type is what
 * decides where the button goes — only 'internal' and 'external' use
 * the URL at all. 'enquiry' and 'contact' name a destination the
 * editor cannot get wrong, which is the point of having them.
 *
 * A button with no label is not a button: the API drops one on save
 * (it writes the type and URL only when there is text), so returning
 * nothing here keeps the page agreeing with what was stored.
 */
function cta(value: any): { text: string; url: string } | undefined {
  const label = text(value?.text)
  if (!label) return undefined

  const type = text(value?.type) || 'enquiry'
  const url =
    type === 'enquiry'
      ? '#course-enquire'
      : type === 'contact'
        ? '/contact'
        : text(value?.url)

  /* A link with a label and nowhere to go would be a dead control.
     Falling back to the enquiry form matches what 'enquiry' — the
     schema's own default type — would have done. */
  return { text: label, url: url || '#course-enquire' }
}

/* ------------------------------------------------------------------
   The two exports.
------------------------------------------------------------------ */

/**
 * Only what the CMS actually holds, for spreading over a seed.
 *
 * Every value goes through `text` / `list`, so a field an editor has
 * left blank is absent rather than an empty string — spreading an
 * empty string over a hand-written headline would erase it.
 */
/**
 * The Future scope band.
 *
 * Partial, like every object-valued section: only the halves an editor filled
 * in, so the generated timeline still stands behind an editor who wrote trend
 * cards and nothing else. `mergeCourse` merges it a level deep.
 */
function futureFrom(record: Record<string, any>) {
  const horizon = (record.futureHorizon ?? [])
    .filter((row: any) => text(row?.title))
    .map((row: any) => ({
      when: text(row.label) || '',
      title: text(row.title),
      text: text(row.body) || ''
    }))

  const trends = (record.futureTrends ?? [])
    .filter((row: any) => text(row?.title))
    .map((row: any) => ({
      icon: icon(row.icon, 'spark'),
      title: text(row.title),
      text: text(row.body) || ''
    }))

  const title = text(record.futureTitle)
  const lead = text(record.futureLead)
  const industriesNote = text(record.futureIndustriesNote)
  const industries = list<string>(record.futureIndustries)

  if (!horizon.length && !trends.length && !title && !lead && !industriesNote && !industries)
    return undefined

  return {
    ...(title ? { title } : {}),
    ...(lead ? { lead } : {}),
    ...(horizon.length ? { horizon } : {}),
    ...(trends.length ? { trends } : {}),
    ...(industriesNote ? { industriesNote } : {}),
    ...(industries ? { industries } : {})
  }
}

/**
 * The "Who it is for" band.
 *
 * Partial like the other object-valued sections: only the groups and the lead
 * an editor typed. The band's eyebrow, its heading, the entry-requirements
 * list and its closing note are still generated, so `mergeCourse` merges this
 * a level deep — a whole-value spread would leave the section with cards and
 * no heading around them.
 */
function joinersFrom(audience: any[] | undefined, intro: string | undefined) {
  const groups = (audience ?? [])
    .filter((row) => text(row?.title))
    .map((row, i) => ({
      /*
        The same marks, in the same order, as the generated groups.

        The audience editor has no icon field, so every CMS group fell back to
        one name — and the name it fell back to was `users`, which this icon
        set does not contain. `Icon` draws nothing for a name it does not know,
        so each card rendered an empty badge. Cycling JOINER_ICONS gives an
        edited group the mark its generated counterpart would have had.
      */
      icon: icon(row.icon, JOINER_ICONS[i % JOINER_ICONS.length]),
      title: text(row.title),
      text: text(row.body) || '',
      /* The generated groups carry a chip ("No background needed"); the CMS
         has no field for one, so an edited group simply has none. */
      tag: ''
    }))

  const lead = text(intro)
  if (!groups.length && !lead) return undefined
  return { ...(groups.length ? { groups } : {}), ...(lead ? { lead } : {}) }
}

/*
  The six marks the generated audience groups use, in their order. Kept beside
  the mapping that reads them rather than imported from the seed helper, which
  is a data module the site bundles lazily.
*/
const JOINER_ICONS = ['curriculum', 'code', 'career', 'stack', 'spark', 'chart']

/**
 * The CMS's enrolment plans -> the "Find your pace" band.
 *
 * The plans have been editable since the module was built and rendered
 * nowhere: the band generated its own three phases by cutting the module list
 * into thirds, so a course offering a 3-month and a 6-month plan still showed
 * "Foundation / Working / Professional" split by arithmetic.
 *
 * The syllabus editor already asks which plan each module starts from, which
 * is exactly the matrix this band draws — a row per skill, a tick under every
 * plan that reaches it. A module with no plan set is reachable from the first,
 * which is what an editor who has not thought about it means.
 */
function tracksFrom(plans: any[] | undefined, syllabus: any[] | undefined) {
  const chosen = (plans ?? []).filter((plan) => text(plan?.label))
  if (!chosen.length) return undefined

  const modules = (syllabus ?? []).filter((entry) => text(entry?.title))

  /* 1-based, to match the editor's own numbering. */
  const startsAt = (entry: any) => {
    const from = Number(entry?.fromPlan)
    return Number.isFinite(from) && from > 0 ? from : 1
  }

  const phases = chosen.map((plan, i) => ({
    key: text(plan.label) || `plan-${i + 1}`,
    name: text(plan.label),
    blurb: text(plan.summary) || '',
    span: text(plan.rangeLabel) || '',
    when: text(plan.duration) || (plan.months ? `${plan.months} months` : ''),
    count: modules.filter((entry) => startsAt(entry) <= i + 1).length
  }))

  const rows = modules.flatMap((entry) =>
    (list<string>(entry.topics) || []).map((topic) => ({
      label: topic,
      module: text(entry.title),
      /* One flag per plan, in the order the phases are drawn. */
      in: chosen.map((_plan, i) => startsAt(entry) <= i + 1)
    }))
  )

  if (!rows.length) return undefined
  return { phases, rows }
}

/** The comparison chart, from the CMS's rows and its three lines of copy. */
function compareFrom(record: Record<string, any>) {
  const rows = (record.comparisonRows ?? [])
    .filter((row: any) => text(row?.feature))
    .map((row: any) => ({
      feature: text(row.feature),
      /* The CMS names the columns `ours`/`theirs`; the table reads
         `us`/`them`. */
      us: text(row.ours) || '',
      them: text(row.theirs) || ''
    }))

  const lead = text(record.comparisonIntro)
  const them = text(record.comparisonOthers)
  const note = text(record.comparisonNote)
  if (!rows.length && !lead && !them && !note) return undefined

  return {
    ...(rows.length ? { rows } : {}),
    ...(lead ? { lead } : {}),
    ...(them ? { them } : {}),
    ...(note ? { note } : {})
  }
}

/**
 * The salary table, from the career roles.
 *
 * The generated table is role x market, with three geography columns. The CMS
 * models the same question as role x experience — a starting figure, a senior
 * figure, and the market the role sits in — so the column headings are
 * replaced to match the data rather than the data being bent to fit headings
 * it cannot fill. A role carrying no figures is left out: a blank row in a
 * salary table reads as "this one pays nothing".
 */
function salaryFrom(roles: any[] | undefined) {
  const rows = (roles ?? [])
    .filter(
      (role) =>
        text(role?.role) &&
        (text(role?.salaryStart) || text(role?.salarySenior) || text(role?.market))
    )
    .map((role) => ({
      role: text(role.role),
      /* The small line under the role name. */
      level: text(role.level) || '',
      /* One cell per market, in the order `regions` names them. An em dash
         where a figure is missing: a blank cell in a salary table reads as
         "nothing", where the honest answer is "we have not said". */
      cells: [
        text(role.salaryStart) || '—',
        text(role.salarySenior) || '—',
        text(role.market) || '—'
      ]
    }))

  if (!rows.length) return undefined

  const note = (roles ?? []).map((role) => text(role?.salaryNote)).find(Boolean)
  return {
    /* The same three markets the seeds use, so a CMS course's table has the
       same columns as a hand-written one. */
    regions: SALARY_MARKETS,
    rows,
    ...(note ? { note } : {})
  }
}

/**
 * Seed, with the CMS's edits over it.
 *
 * A plain spread is right for almost every key — a duration is a duration.
 * It is wrong for the few whose value is an object the generator fills in
 * completely. `future` arrives from the CMS as only the halves an editor
 * typed, and spreading that over the generated object would take the heading,
 * the timeline and the industry chips with it, leaving a band with trend
 * cards and nothing else.
 *
 * So those keys merge one level deep, and one level only: their contents are
 * arrays, and a `trends` array from the CMS is meant to replace the generated
 * trends rather than be concatenated with them.
 */
const DEEP_KEYS = ['joiners', 'compare', 'salary', 'tracks', 'future'] as const

export function mergeCourse<T extends Record<string, any>>(
  seed: T,
  overlay: Record<string, any> | null | undefined
): T {
  if (!overlay) return seed
  const merged: Record<string, any> = { ...seed, ...overlay }

  for (const key of DEEP_KEYS) {
    if (overlay[key] && seed[key]) merged[key] = { ...seed[key], ...overlay[key] }
  }

  /* Generic in the seed so callers keep the keys they had — the course route
     reads `slug` and `name` off the result, which a plain record would hide. */
  return merged as T
}

export function courseOverlay(record: Record<string, any> | null | undefined) {
  if (!record) return null

  const overlay: Record<string, any> = {
    name: text(record.title),
    category: text(record.categoryName),
    eyebrow: text(record.eyebrow),
    /* The one-word mark beside the hero label ("New", "Popular"). Like
       the two buttons below it, the CMS has always stored it and the
       page had nowhere to put it. */
    badge: text(record.badge),
    duration: text(record.duration),
    level: text(record.level),
    mode: text(record.mode),
    headline: headlineFrom(record.h1),
    /*
      The hero paragraph, and the one line above it.

      Both fields exist and they are not the same thing: the tagline is
      "what this course actually is" in one line, the intro is the
      paragraph. They used to collapse into a single `sub`, so an
      editor who filled in both saw only the intro and reported the
      tagline as broken. The tagline is now carried separately and the
      hero drops it when it would only repeat what `sub` already says.
    */
    /* The hero's paragraph: the hero description when one is written,
       the short description when it is not — which is what the CMS form
       tells an editor will happen ("Blank falls back to the short
       description"). It used to skip straight to the tagline, so the
       short description never reached the hero of any course that had a
       tagline, and typing in that field changed nothing in the preview. */
    sub: text(record.intro) || text(record.shortDescription) || text(record.tagline),
    tagline: text(record.tagline),
    overviewLead: text(record.overview) || text(record.description),
    highlights: list<string>(record.highlights),
    badges: list<string>(record.tools),
    metaTitle: text(record.seo?.metaTitle),
    metaDescription: text(record.seo?.metaDescription),
    /* The course's own video. It was stored by the CMS and read by
       nothing, so a course with a recorded walkthrough showed no sign
       of it. (The reviews band had a second video field beside this
       one; it was removed from the editor on request.) */
    videoUrl: text(record.videoUrl),
    videoTitle: text(record.videoTitle),
    /* The hero's two buttons. `cta` keeps a pair only when the editor
       gave it a label — a URL with no text renders an empty button,
       and a blank pair must stay absent so the hero's own defaults
       survive the spread. */
    ctaPrimary: cta(record.ctaPrimary),
    ctaSecondary: cta(record.ctaSecondary),
    /* The "why techcadd" band. Stored, edited and rendered nowhere
       until now — see CourseWhy. */
    whyIntro: text(record.whyIntro),
    /* The CMS calls the description `body`; the band reads `text`. Passing
       the rows through untouched left every card with a heading and no
       paragraph under it. */
    whyPoints: (record.whyPoints ?? [])
      .filter((row: any) => text(row?.title))
      .map((row: any) => ({
        icon: icon(row.icon, 'check'),
        title: text(row.title),
        text: text(row.body) || ''
      })),
    modules: modulesFrom(record.syllabus),
    technologies: technologiesFrom(record.toolItems, record.tools),
    careers: careersFrom(record.careerRoles),
    projects: projectsFrom(record.projects),
    featured: featuredFrom(record.projects),
    benefits: benefitsFrom(record.benefits),
    metrics: metricsFrom(record.facts),
    /*
      "The case for it". Every course argued its case in the same generated
      words until these were carried; each is absent when an editor left it
      blank, so the generated copy still covers whatever they did not write.
    */
    valueTitle: text(record.valueTitle),
    valueText: text(record.valueText),
    valueStat: record.valueStat?.num
      ? {
          num: text(record.valueStat.num),
          label: text(record.valueStat.label) || '',
          sub: text(record.valueStat.sub) || ''
        }
      : undefined,
    valueItems: valueItemsFrom(record.workflow),
    /* The syllabus band's own lead and footnote. Both have been editable and
       stored since the field was added and reached nothing on the page. */
    /* "Who it is for" — stored and editable since the field was added, and
       read by nothing until now. */
    joiners: joinersFrom(record.audience, record.audienceIntro),
    compare: compareFrom(record),
    /* The enrolment plans, which drove nothing on the page until now. */
    tracks: tracksFrom(record.plans, record.syllabus),
    salary: salaryFrom(record.careerRoles),
    roadmapLead: text(record.syllabusIntro),
    roadmapNote: text(record.syllabusNote),
    /*
      "What you will learn" — the numbered card grid under the syllabus.
      `learnTools` is the course's own tool list, reused for the chip row
      rather than duplicated into a second field. It is named apart from
      `tools` because the seeds put a different shape in `technologies` and
      the two must not collide.
    */
    learnTitle: text(record.learnTitle),
    learnIntro: text(record.learnIntro),
    learnOutro: text(record.learnOutro),
    learnPoints: (record.learnPoints ?? [])
      .filter((row: any) => text(row?.title))
      .map((row: any) => ({ title: text(row.title), text: text(row.body) || '' })),
    learnTools: list<string>(record.tools) || [],
    /* The editor's per-course running order and hidden bands. Ids, not copy,
       so they are carried raw and translated where they are applied — see
       lib/courseSectionOrder.ts. */
    sectionOrder: list<string>(record.sectionOrder) || [],
    hiddenSections: list<string>(record.hiddenSections) || [],
    /* "Future scope" — the last band the CMS could not reach at all. */
    future: futureFrom(record)
  }

  /* A thumbnail is only useful with its address resolved against the
     CMS host — see `cmsAsset`. Width and height are set together with
     it or not at all, so the hero reserves the right box. */
  const art = cmsAsset(record.thumbnail?.url)
  if (art) {
    overlay.heroArt = art
    overlay.heroArtAlt = record.thumbnail?.alt || record.title || ''
    /* Cleared, not left alone. The seed's width and height describe
       the seed's picture, and carrying them over to a different one
       reserves a box of the wrong shape — the headline beside it then
       jumps when the real image lands. The CMS thumbnail record does
       not carry its own dimensions, so the honest answer is none. */
    overlay.heroArtWidth = null
    overlay.heroArtHeight = null
  }

  /* `undefined` means "the CMS has nothing to say here", and spreading
     it would still overwrite the seed's value with undefined. `null`
     is different and is kept: it is this file saying "there is no
     value", which is what clears a stale hero dimension above. */
  for (const key of Object.keys(overlay)) {
    if (overlay[key] === undefined) delete overlay[key]
  }

  return overlay
}

/**
 * Three opening points for a course that carries no highlights.
 *
 * Only facts the record actually holds — no invented claims about
 * placement or batch sizes. An empty list is the honest answer for a
 * record with nothing filled in, and CourseOverview renders nothing
 * for it.
 */
function factsAsHighlights(record: Record<string, any>) {
  return [
    text(record.duration) && `${text(record.duration)} programme`,
    text(record.level),
    text(record.mode)
  ].filter(Boolean) as string[]
}

/**
 * A complete course object from a CMS record alone.
 *
 * For a slug with no seed behind it. Everything the CMS does not hold
 * — the six promises, the career ladder, the certification block, the
 * standard questions — is generated by `buildCourse` exactly as it is
 * for a seed, so the page renders whole rather than half-empty.
 */
export function courseFromCms(record: Record<string, any> | null | undefined) {
  if (!record?.slug || !record?.title) return null

  const overlay = courseOverlay(record) || {}
  const short = shortFrom(record.title)

  /* buildCourse reads `subject` for the generated copy ("teams that
     ship <subject>"), and a seed sets it by hand. The short name is
     the closest thing a CMS record has. */
  const seed = {
    slug: record.slug,
    name: record.title,
    short,
    subject: short,
    category: text(record.categoryName) || 'Courses',
    /* The long arrangement only makes sense with content behind its
       extra bands. A CMS course gets it once it has a syllabus and
       careers filled in, and the shorter page until then — the same
       judgement the seeds encode by hand. */
    /*
      Which arrangement the page uses.

      It used to demand a syllabus AND career roles, which meant a CMS course
      with a full toolchain and five shipped projects still got the short
      layout — and the short layout mounts neither the tools band nor the
      projects one, so both were invisible however much an editor wrote.

      Any of the long page's content is now enough to earn the long page.
      Bands with nothing in them hide themselves, so asking for the long
      arrangement costs an empty section nowhere.
    */
    layout:
      record.syllabus?.length ||
      record.careerRoles?.length ||
      record.toolItems?.length ||
      record.tools?.length ||
      record.projects?.length ||
      record.comparisonRows?.length
        ? 'full'
        : 'standard',
    duration: text(record.duration) || 'Flexible batches',
    ...overlay,
    /* `headline` is not optional downstream — CourseHero maps over it
       — so it gets a real default rather than being left to the
       overlay's absence. */
    headline: overlay.headline || [`${short}.`, 'Built for real work.'],
    sub: overlay.sub || text(record.shortDescription) || '',
    modules: overlay.modules || [],
    projects: overlay.projects || [],
    careers: overlay.careers || [],
    technologies: overlay.technologies || [],
    /*
      `buildCourse` passes these two straight through with no default,
      because every hand-written seed sets them. A CMS record need not,
      and `course.highlights.map(...)` in CourseOverview then throws on
      undefined — which is a 500 on the whole page, not a missing list.

      Derived from what the record does have rather than left empty: a
      course page that prints its duration, level and mode as its three
      opening points is a reasonable page, and an empty <ul> under a
      heading is not.
    */
    highlights: overlay.highlights || factsAsHighlights(record),
    badges: overlay.badges || list<string>(record.tools) || []
  }

  /*
    The overlay is re-applied OVER the built course, not just handed to
    the factory.

    `buildCourse` returns an explicit object literal — it reads the
    fields it knows about and drops everything else. So a field the CMS
    has and the seeds never did, `videoUrl` being the first, went in
    and did not come out, and a course with a recorded walkthrough
    rendered no sign of it.

    Spreading afterwards is safe: the overlay only holds keys the CMS
    actually carries a value for, so every generated default —
    benefits, the career path, the certification block — survives
    untouched for a course that does not override it.
  */
  return mergeCourse(buildCourse(seed), overlay)
}
