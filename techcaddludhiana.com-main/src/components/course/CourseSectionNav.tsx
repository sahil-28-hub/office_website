'use client'

import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { useReducedMotion } from '../../hooks/useCourseMotion'
import './CourseSectionNav.css'

/* ------------------------------------------------------------------
   The sticky in-page nav under the site navbar.

   Every band the course page can have, in page order, each named by
   the anchor the band already renders.

   Sections decide for themselves whether they render — a course with
   no compare table has no compare band — so this cannot know in
   advance which ids exist. It renders the full list on the server, so
   the bar has its height before hydration and nothing below it jumps,
   then keeps only the ids actually in the document. It re-checks when
   its siblings change, which is what the CMS preview does as an editor
   fills a section in.

   It must stay a direct child of the page's <main>: sticky is bounded
   by its parent, and anywhere deeper it would unstick after one band.
------------------------------------------------------------------ */
const SECTIONS = [
  { id: 'course-overview', label: 'Overview' },
  { id: 'course-roadmap', label: 'Curriculum' },
  { id: 'course-value', label: 'Why this course' },
  { id: 'course-who', label: 'Who can join' },
  { id: 'course-stack', label: 'Tools' },
  { id: 'course-certification', label: 'Certificate' },
  { id: 'course-careers', label: 'Career scope' },
  { id: 'course-compare', label: 'Compare' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'course-faq', label: 'FAQs' },
  { id: 'course-enquire', label: 'Enquire' }
]

type Item = (typeof SECTIONS)[number]

export default function CourseSectionNav() {
  const reduce = useReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLElement>(null)
  const [items, setItems] = useState<Item[]>(SECTIONS)
  const [active, setActive] = useState(SECTIONS[0].id)

  /* Keep only the sections that rendered. */
  useEffect(() => {
    const sync = () => {
      const present = SECTIONS.filter((section) => document.getElementById(section.id))
      setItems((prev) =>
        prev.length === present.length && prev.every((p, i) => p.id === present[i].id) ? prev : present
      )
    }
    sync()

    const parent = rootRef.current?.parentElement
    if (!parent) return undefined
    const observer = new MutationObserver(sync)
    observer.observe(parent, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  /* Highlight the band crossing the upper part of the viewport. */
  useEffect(() => {
    const targets = items
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[]
    if (!targets.length) return undefined

    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        /* First in page order wins. With nothing in the band — between
           two unlisted sections — the last highlight stays. */
        const first = items.find((section) => visible.has(section.id))
        if (first) setActive(first.id)
      },
      { rootMargin: '-160px 0px -55% 0px' }
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  /* Keep the active chip in view inside the horizontally scrolling rail. */
  useEffect(() => {
    const rail = railRef.current
    const link = rail?.querySelector<HTMLAnchorElement>(`a[data-section="${active}"]`)
    if (!rail || !link || rail.scrollWidth <= rail.clientWidth) return
    const left = link.offsetLeft - (rail.clientWidth - link.offsetWidth) / 2
    rail.scrollTo({ left: Math.max(0, left), behavior: reduce ? 'auto' : 'smooth' })
  }, [active, reduce])

  const go = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    event.preventDefault()
    setActive(id)
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    history.replaceState(null, '', `#${id}`)
    /* Move focus with the view, so the next Tab continues from the section. */
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
    target.focus({ preventScroll: true })
  }

  if (!items.length) return null

  return (
    <div className="csnav" ref={rootRef}>
      <nav className="csnav-rail" aria-label="Course sections" ref={railRef}>
        {items.map((section) => {
          const on = section.id === active
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              data-section={section.id}
              className={on ? 'csnav-link is-active' : 'csnav-link'}
              aria-current={on ? 'true' : undefined}
              onClick={(event) => go(event, section.id)}
            >
              {section.label}
            </a>
          )
        })}
      </nav>
    </div>
  )
}
