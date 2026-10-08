'use client'

import { useMemo, useState } from 'react'
import { useReveal } from '../hooks/useCourseMotion'
import { useSpotlight } from '../hooks/useAboutMotion'
import { useFilteredReveal } from '../hooks/usePageMotion'
import '../components/kit/page-kit.css'
import './CoursesIndexPage.css'
import PageHero from '../components/kit/PageHero'
import CourseDeck from '../components/sections/CourseDeck'
import Cta from '../components/sections/Cta'
import SmartLink from '../components/common/SmartLink'
import PageIcon from '../components/kit/icons'
import { COURSE_INDEX, coursePath } from '../data/courses/catalog'
import { courseImage, courseTone } from '../data/courseImages'
import { CI_HERO, CI_CATEGORIES, CI_CHOOSE, CI_PROMISE, CI_CTA } from '../data/coursesIndex'
import { COURSE_CATEGORIES, categoryPath, categoryTitle } from '../data/courseCategories'
import { MORE_CATEGORIES, moreCoursesPath } from '../data/moreCourses'
import { BRANCH_CITY } from '../data/branch'
import './CourseCategoryPage.css'
import { useCmsList } from '../hooks/useCms'
import { mapCourse, mapCategory, dedupeCoursesBySlug } from '../lib/cms'

/* ------------------------------------------------------------------
   All courses — reachable at /courses, linked from the footer of
   the Courses, Internship & Training and After 12th menus.

   The catalogue is read from the course registry rather than
   repeated here, so a course added to a seed file appears on this
   page on its own. Each card links to /courses/<slug>, the page
   that already renders every course.

     §1  banner                        dark, photo
     §2  the deck, every course        near-black, 3D
     §3  the catalogue, filtered       light
     §4  pick by where you are         dark
     §5  what every course includes    light tint
     §6  shortlist two                 dark, deep
------------------------------------------------------------------ */

/* slug → the one-line description already written on the course
   page, so the card copy and the course agree.

   The two chips on each card are counted from that course's own
   syllabus rather than written down, so they can never claim more
   modules than the course actually has. Both counts, and the blurb,
   come from the generated catalogue rather than from the full
   registry: this page shows forty-eight cards, and building them from
   the registry meant downloading forty-eight syllabuses to print two
   numbers on each. See data/courses/catalog.js. */
const CARDS = COURSE_INDEX.map((entry) => ({
  ...entry,
  href: coursePath(entry.slug),
  blurb: entry.sub || '',
  level: entry.level || '',
  image: courseImage(entry.slug),
  tone: courseTone(entry.category),
  chips: [
    entry.moduleCount ? `${entry.moduleCount} modules` : entry.category,
    entry.projectCount ? `${entry.projectCount} projects` : entry.mode || 'Classroom & online'
  ]
}))

/* A CMS course, decorated into the same card shape.

   The picture is the one uploaded in the CMS when there is one, and
   otherwise the photograph the site ships for that slug; a slug with
   neither falls back to the gradient. The colour is looked up from the
   category exactly as above.

   `projects` has no CMS column either, so the second chip carries the
   duration instead of claiming a project count nothing can back. */
function cardFromCms(course, categoryNames) {
  const category = categoryNames.get(course.categoryId) || 'Courses'

  return {
    slug: course.slug,
    name: course.name,
    short: course.short,
    category,
    duration: course.duration,
    href: coursePath(course.slug),
    blurb: course.blurb,
    level: course.level,
    /* The uploaded picture first; the site's own photograph for that
       slug when nobody uploaded one. */
    image: course.image || courseImage(course.slug),
    tone: courseTone(category),
    chips: [
      course.moduleCount ? `${course.moduleCount} modules` : category,
      course.duration || 'Classroom & online'
    ]
  }
}

/* "Programming Courses in Ludhiana" and the rest — every category
   that has a page of its own. */
const CATEGORY_LINKS = [
  ...COURSE_CATEGORIES.map((category) => ({
    label: categoryTitle(category),
    href: categoryPath(category.slug)
  })),
  ...MORE_CATEGORIES.map((category) => ({
    label: `${category.name} in ${BRANCH_CITY}`,
    href: moreCoursesPath(category.slug)
  }))
]

const ORDER = CI_CATEGORIES.map((category) => category.key)
const BLURBS = Object.fromEntries(CI_CATEGORIES.map((c) => [c.key, c.blurb]))

/* The first two banner figures used to be computed here, from the
   bundled registry. They are counted in the component now instead —
   the whole point is that they follow whichever catalogue is showing,
   and a module-level const cannot. */

/* The card's picture. Where a course has no photograph the gradient
   underneath carries the card on its own, so a missing file costs
   nothing — same contract as the home page's course cards. */
function CardArt({ src, name }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="tc-course-art">
      {src && !failed && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      <span className="tc-course-scrim" aria-hidden="true" />
      <span className="sr-only">{name}</span>
    </div>
  )
}

/* §3 — the catalogue. */
function Catalogue({ cards, order }) {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return cards.filter((card) => {
      if (category !== 'All' && card.category !== category) return false
      if (!needle) return true
      return `${card.name} ${card.short} ${card.category} ${card.blurb}`
        .toLowerCase()
        .includes(needle)
    })
  }, [cards, category, query])

  const counts = useMemo(() => {
    const map = { All: cards.length }
    cards.forEach((card) => {
      map[card.category] = (map[card.category] || 0) + 1
    })
    return map
  }, [cards])

  /* the list is in the key too, so the reveal observer is rebuilt when
     the CMS answer replaces the bundled catalogue */
  const revealRef = useFilteredReveal(`${category}-${query}-${cards.length}`)
  /* the spotlight is delegated from the band itself rather than from
     the grid, so it survives the grid being swapped by a filter */
  const spotRef = useSpotlight('.tc-course')

  return (
    <section className="ap-light ap-sec" id="catalogue">
      <div className="shell" ref={spotRef}>
        <div className="tc-lede">
          <div className="ap-head">
            <p className="ap-eyebrow">The catalogue</p>
            <h2 className="ap-title">
              {cards.length} courses, <span className="ap-accent">one filter</span>
            </h2>
            {category !== 'All' && BLURBS[category] && (
              <p className="ap-lead">{BLURBS[category]}</p>
            )}
          </div>

          <label className="tc-search">
            <PageIcon name="search" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search a skill — Python, SEO, AutoCAD…"
              aria-label="Search courses"
            />
          </label>
        </div>

        <ul className="tc-filter">
          {['All', ...order].map((entry) => (
            <li key={entry}>
              <button
                type="button"
                aria-pressed={category === entry}
                onClick={() => setCategory(entry)}
              >
                {entry}
                <b>{counts[entry] || 0}</b>
              </button>
            </li>
          ))}
        </ul>

        {/* The category pages. Plain links rather than more filter
            buttons: a filter narrows this page, these leave it for the
            page written for that category. */}
        <ul className="cat-links cat-links--inline" aria-label="Category pages">
          {CATEGORY_LINKS.map((link) => (
            <li key={link.href}>
              <SmartLink href={link.href}>{link.label}</SmartLink>
            </li>
          ))}
        </ul>

        {visible.length > 0 ? (
          /* keyed on the filter so a new set reveals rather than
             snapping into place */
          <ul className="tc-courses" key={`${category}-${query}`} ref={revealRef}>
            {visible.map((card, i) => (
              <li key={card.slug} data-reveal="rise" style={{ '--d': `${Math.min(i, 10) * 45}ms` }}>
                {/* An <article>, not a link: the "Show more" button is the
                    link, and it stretches its own hit area over the whole
                    card — nesting an <a> inside an <a> would not be valid. */}
                <article className={`tc-course tone-${card.tone}`}>
                  <CardArt src={card.image} name={card.short || card.name} />

                  <div className="tc-course-body">
                    <h3>{card.short || card.name}</h3>
                    <p>{card.blurb}</p>

                    <ul className="tc-course-chips">
                      {card.chips.map((chip, c) => (
                        <li key={chip}>
                          <PageIcon name={c === 0 ? 'layers' : 'award'} />
                          {chip}
                        </li>
                      ))}
                    </ul>

                    <SmartLink className="tc-course-more" href={card.href}>
                      Show more
                    </SmartLink>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <p className="tc-empty">
            Nothing matches “{query}”. Try a broader term, or call the campus — we run
            more formats than this page lists.
          </p>
        )}

        <p className="tc-count">
          {visible.length} of {cards.length} courses
        </p>
      </div>
    </section>
  )
}

/* §4 — four honest starting points. */
function Choose() {
  const ref = useReveal()

  return (
    <section className="ap-dark ap-sec" id="choose" ref={ref}>
      <div className="shell">
        <div className="ap-head">
          <p className="ap-eyebrow" data-reveal>{CI_CHOOSE.eyebrow}</p>

          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>
            {CI_CHOOSE.title}
            <br />
            <span className="ap-accent">{CI_CHOOSE.accent}</span>
          </h2>

          <p className="ap-lead" data-reveal style={{ '--d': '150ms' }}>{CI_CHOOSE.lead}</p>
        </div>

        <ul className="tc-grid tc-grid--4">
          {CI_CHOOSE.routes.map((route, i) => (
            <li
              className="tc-card"
              key={route.no}
              data-reveal="rise"
              style={{ '--d': `${i * 80}ms` }}
            >
              <div className="tc-card-head">
                <span className="ap-ico">
                  <PageIcon name={route.icon} />
                </span>
                <span className="tc-card-no">{route.no}</span>
              </div>

              <h3>{route.title}</h3>
              <p>{route.text}</p>

              <ul className="tc-ci-links">
                {route.links.map((link) => (
                  <li key={link.href}>
                    <SmartLink className="ap-chip" href={link.href}>{link.label}</SmartLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* §5 — the constants across every track. */
function Included() {
  const revealRef = useReveal()
  const spotRef = useSpotlight('.tc-card')

  return (
    <section className="ap-light ap-light--tint ap-sec" id="included" ref={revealRef}>
      <div className="shell">
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>{CI_PROMISE.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{CI_PROMISE.title}</h2>
          <p className="ap-lead" data-reveal style={{ '--d': '150ms' }}>{CI_PROMISE.lead}</p>
        </div>

        <ul className="tc-grid" ref={spotRef}>
          {CI_PROMISE.items.map((item, i) => (
            <li
              className="tc-card"
              key={item.title}
              data-spot
              data-reveal="rise"
              style={{ '--d': `${i * 70}ms` }}
            >
              <span className="ap-ico">
                <PageIcon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/**
 * @param initialCourses,initialCategories already fetched and mapped by
 *   src/app/courses/page.tsx, so the catalogue is server-rendered and the
 *   ItemList structured data there lists the same courses this page shows.
 */
export default function CoursesIndexPage({
  initialCourses,
  initialCategories
}: { initialCourses?: any[] | null; initialCategories?: any[] | null } = {}) {

  /* Two requests, because a course record names its category by id.
     Both fall back independently: no categories simply means every
     CMS course lands under 'Courses', which is still a usable page. */
  const { items: categories } = useCmsList('/categories', {
    map: mapCategory,
    limit: 100,
    initial: initialCategories
  })
  const { items: cmsCourses, state } = useCmsList('/courses', {
    map: mapCourse,
    fallback: [],
    limit: 100,
    initial: initialCourses
  })

  const cards = useMemo(() => {
    if (state !== 'cms' || !cmsCourses.length) return CARDS
    const names = new Map(categories.map((entry) => [entry.id, entry.name]))
    /* Idempotent — the server already did this for the list it handed
       down. It runs again for the browser-fetch path, which a component
       rendered outside the CMS-aware route still takes. */
    return dedupeCoursesBySlug(cmsCourses).map((course) => cardFromCms(course, names))
  }, [state, cmsCourses, categories])

  /* CI_CATEGORIES fixes the order the chips read in; anything the CMS
     adds beyond that list is appended rather than dropped. */
  const order = useMemo(() => {
    const present = [...new Set(cards.map((card) => card.category))]
    const known = ORDER.filter((key) => present.includes(key))
    return [...known, ...present.filter((key) => !ORDER.includes(key))]
  }, [cards])

  const hero = useMemo(
    () => ({
      ...CI_HERO,
      stats: CI_HERO.stats.map((stat, i) =>
        i === 0 ? { ...stat, to: cards.length } : i === 1 ? { ...stat, to: order.length } : stat
      )
    }),
    [cards.length, order.length]
  )

  return (
    <div className="tc-page tc-page--courses">

      <main id="main">
        <PageHero {...hero} id="courses-top" />
        {/* The same `cards` the catalogue below renders, so the deck and
            the grid always show the same courses — including whatever
            the CMS has replaced the built-in catalogue with. */}
        <CourseDeck cards={cards} />
        <Catalogue cards={cards} order={order} />
        <Choose />
        <Included />
        <Cta />
      </main>
    </div>
  )
}
