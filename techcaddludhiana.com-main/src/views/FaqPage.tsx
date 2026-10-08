'use client'

import { useMemo, useState } from 'react'
import { useReveal } from '../hooks/useCourseMotion'
import { useCmsList, listKey } from '../hooks/useCms'
import { faqGroupsFrom, mapFaq } from '../lib/cms'
import { useFilteredReveal } from '../hooks/usePageMotion'
import '../components/kit/page-kit.css'
import './FaqPage.css'
import PageHero from '../components/kit/PageHero'
import Cta from '../components/sections/Cta'
import Accordion from '../components/kit/Accordion'
import SmartLink from '../components/common/SmartLink'
import PageIcon from '../components/kit/icons'
import { FAQ_HERO, FAQ_GROUPS, FAQS, FAQ_CTA } from '../data/faq'

/* ------------------------------------------------------------------
   FAQ — reachable at #/faq, linked from the Resources menu.

     §1  banner                          dark, photo
     §2  the questions, filtered         light
     §3  the shortcuts                   dark
     §4  ask us the awkward one          dark, deep

   The first eight answers are word for word the ones the home page's
   Ask section gives, so the two never contradict each other.
------------------------------------------------------------------ */

const SHORTCUTS = [
  { icon: 'calendar', title: 'Batch dates', text: 'The next two or three start dates for the course you are considering.', label: 'Ask about batches', href: '/contact' },
  { icon: 'tag', title: 'Fees for one track', text: 'Quoted per course rather than published as one number that would be wrong for most people.', label: 'Request a quote', href: '/contact' },
  { icon: 'building', title: 'College partnerships', text: 'Industrial training, workshops and faculty development, handled by a separate desk.', label: 'College desk', href: '/college-partnerships' },
  { icon: 'play', title: 'A free demo class', text: 'Sit through a real session with the trainer who would take your batch before deciding.', label: 'Book a demo', href: '#demo' }
]

/* §2 — the list. Topic chips and a search filter it; the count under
   the list keeps the filtering honest.

   The questions come from the CMS, with the bundled list in src/data/faq.js
   as the fallback for when it cannot be reached. The topic chips follow: on
   CMS content they are derived from the categories actually in use, so a new
   category in the admin appears here without a second edit; on the bundled
   list they are FAQ_GROUPS, which carries the labels that file's entries only
   reference by key. */
function Questions({ initialFaqs }: { initialFaqs?: any[] | null }) {
  const [group, setGroup] = useState('all')
  const [query, setQuery] = useState('')

  const { items: faqs, state } = useCmsList('/faqs', { map: mapFaq, fallback: FAQS, initial: initialFaqs })
  const groups = useMemo(
    () => (state === 'cms' ? faqGroupsFrom(faqs) : FAQ_GROUPS),
    [state, faqs]
  )

  /* A chip picked from the bundled list can stop existing when the CMS answers
     and its categories replace them. Falling back to 'all' beats leaving the
     visitor on a topic that filters everything out. */
  const active = groups.some((entry) => entry.key === group) ? group : 'all'

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return faqs.filter((faq) => {
      if (active !== 'all' && faq.group !== active) return false
      if (!needle) return true
      return `${faq.q} ${faq.a}`.toLowerCase().includes(needle)
    })
  }, [faqs, active, query])

  const counts = useMemo(() => {
    const map = { all: faqs.length }
    faqs.forEach((faq) => {
      map[faq.group] = (map[faq.group] || 0) + 1
    })
    return map
  }, [faqs])

  /* The reveal observer snapshots its targets on mount, so it has to be
     rebuilt when the fetch swaps the list out underneath it — otherwise the
     new cards sit at opacity 0 and the section reads as empty. */
  const ref = useFilteredReveal(`${listKey(faqs)}-${active}-${query}`)

  return (
    <section className="ap-light ap-sec" id="questions">
      <div className="shell">
        <div className="tc-lede">
          <div className="ap-head">
            <p className="ap-eyebrow">The list</p>
            <h2 className="ap-title">Pick a topic, or search the lot</h2>
          </div>

          <label className="tc-search">
            <PageIcon name="search" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search questions"
              aria-label="Search questions"
            />
          </label>
        </div>

        <ul className="tc-filter">
          {[{ key: 'all', label: 'All' }, ...groups].map((entry) => (
            <li key={entry.key}>
              <button
                type="button"
                aria-pressed={active === entry.key}
                onClick={() => setGroup(entry.key)}
              >
                {entry.label}
                <b>{counts[entry.key] || 0}</b>
              </button>
            </li>
          ))}
        </ul>

        <div className="tc-faq-list" key={`${listKey(faqs)}-${active}-${query}`} ref={ref}>
          {visible.length > 0 ? (
            <Accordion items={visible} initial={visible[0].id} />
          ) : (
            <p className="tc-empty">
              No question here matches “{query}”. Ask us directly — the answer usually
              ends up on this page afterwards.
            </p>
          )}
        </div>

        <p className="tc-count">
          {visible.length} of {faqs.length} questions
        </p>
      </div>
    </section>
  )
}

/* §3 — the four things people are really after when they land here. */
function Shortcuts() {
  const ref = useReveal()

  return (
    <section className="ap-dark ap-sec" id="shortcuts" ref={ref}>
      <div className="shell">
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>Shortcuts</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>
            Four answers that need a person
          </h2>
          <p className="ap-lead" data-reveal style={{ '--d': '150ms' }}>
            Some questions only have a useful answer once we know which course, which
            semester and which city you are in. These are those.
          </p>
        </div>

        <ul className="tc-grid tc-grid--4">
          {SHORTCUTS.map((item, i) => (
            <li
              className="tc-card"
              key={item.title}
              data-reveal="rise"
              style={{ '--d': `${i * 80}ms` }}
            >
              <span className="ap-ico">
                <PageIcon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <SmartLink className="tc-post-more" href={item.href}>
                {item.label}
                <PageIcon name="arrowRight" />
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/**
 * @param initialFaqs already fetched and mapped by src/app/faq/page.tsx.
 *   The same list feeds the FAQPage structured data emitted there, so the
 *   schema and the page can never describe different questions.
 */
export default function FaqPage({ initialFaqs }: { initialFaqs?: any[] | null } = {}) {

  return (
    <div className="tc-page tc-page--faq">

      <main id="main">
        <PageHero {...FAQ_HERO} id="faq-top" />
        <Questions initialFaqs={initialFaqs} />
        <Shortcuts />
        <Cta />
      </main>
    </div>
  )
}
