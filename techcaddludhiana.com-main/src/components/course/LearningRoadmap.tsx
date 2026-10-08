'use client'

import { useEffect, useRef, useState } from 'react'
import Icon from './icons'
import { useCourse } from './CourseContext'
import { useReveal, useReducedMotion } from '../../hooks/useCourseMotion'
import './LearningRoadmap.css'

/* ------------------------------------------------------------------
   The curriculum, module by module.

   EVERY MODULE IS ON THE PAGE

   This used to be a set of tabs: a list of module names on the left
   and one module's detail on the right. Only the selected module was
   in the document, so a visitor saw one sixth of the syllabus without
   clicking — and a search engine or an answer engine, which does not
   click, saw one sixth of it full stop.

   Now the right-hand column is the whole syllabus, every module open,
   in the order it is taught. The list on the left stays, as the way to
   jump between them: it follows the page as it scrolls, and pressing a
   module scrolls to it rather than swapping it in.
------------------------------------------------------------------ */
export default function LearningRoadmap() {
  const course = useCourse()
  const modules = course.modules
  const sectionRef = useReveal()
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)

  /* a different slug means a different module list */
  useEffect(() => {
    setActive(0)
  }, [course.slug])

  /* Which module is being read: the last one whose top has passed the
     upper part of the window. */
  useEffect(() => {
    const cards = Array.from(
      listRef.current?.querySelectorAll<HTMLElement>('[data-module]') ?? []
    )
    if (!cards.length) return undefined

    let frame = 0
    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.38
      let current = 0
      cards.forEach((card, i) => {
        if (card.getBoundingClientRect().top <= line) current = i
      })
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [course.slug, modules.length])

  /*
    A course with no syllabus renders no roadmap — rendered as nothing,
    not as an empty shell: the same rule CourseNarrative follows for a
    slot with no copy behind it. The guard sits below every hook, so
    the hook order is unconditional.
  */
  if (!modules.length) return null

  const topics = modules.reduce((n, m) => n + (m.skills?.length || 0), 0)

  const goTo = (i: number) => {
    const card = listRef.current?.querySelectorAll<HTMLElement>('[data-module]')[i]
    card?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <section className="c-sec c-sec--tint croad" id="course-roadmap" ref={sectionRef}>
      <div className="shell">
        <div className="c-head" data-reveal>
          <p className="c-eyebrow">Curriculum</p>
          <h2 className="c-title">{course.roadmapTitle}</h2>
          {/* The CMS's own lead for this band when an editor wrote one,
              otherwise the count — which is the honest default. */}
          <p className="c-lead">
            {course.roadmapLead ||
              `${modules.length} modules and ${topics} topics${course.duration ? ` across ${course.duration}` : ''}, in the order they are taught. Each one closes with something that works before the next one opens.`}
          </p>
        </div>

        <div className="croad-progress" data-reveal style={{ '--d': '80ms' } as React.CSSProperties}>
          <span className="croad-progress-label">
            <strong>{modules.length}</strong> learning modules
          </span>
          <span className="croad-progress-track" aria-hidden="true">
            <span
              className="croad-progress-fill"
              style={{ width: `${((active + 1) / modules.length) * 100}%` }}
            />
          </span>
          <span className="croad-progress-count">
            {String(active + 1).padStart(2, '0')} / {String(modules.length).padStart(2, '0')}
          </span>
        </div>

        <div className="croad-grid">
          {/* the module list — a jump menu for the syllabus beside it */}
          <nav className="croad-rail" aria-label="Course modules" data-reveal style={{ '--d': '120ms' } as React.CSSProperties}>
            {modules.map((m, i) => (
              <button
                key={m.no}
                type="button"
                aria-current={i === active ? 'true' : undefined}
                className={`croad-step${i === active ? ' is-active' : ''}${i < active ? ' is-done' : ''}`}
                onClick={() => goTo(i)}
              >
                <span className="croad-marker" aria-hidden="true">
                  <span className="croad-marker-dot" />
                </span>
                <span className="croad-step-body">
                  <span className="croad-step-no">{m.no}</span>
                  <span className="croad-step-title">{m.title}</span>
                  <span className="croad-step-tag">{m.tag}</span>
                </span>
              </button>
            ))}
          </nav>

          {/* the syllabus itself — every module, fully written out */}
          <div className="croad-detail" ref={listRef}>
            {modules.map((module) => (
              <article key={module.no} className="croad-card" data-module data-reveal>
                <header className="croad-card-head">
                  <span className="croad-card-no">
                    Module {module.no}
                    {module.tag ? ` · ${module.tag}` : ''}
                  </span>
                  <h3 className="croad-card-title">{module.title}</h3>
                  {module.description && <p className="croad-card-text">{module.description}</p>}
                </header>

                {module.skills?.length > 0 && (
                  <div className="croad-block">
                    <p className="croad-block-label">Topics covered</p>
                    <ul className="croad-skills">
                      {module.skills.map((s) => (
                        <li key={s}>
                          <Icon name="check" size={13} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {module.tech?.length > 0 && (
                  <div className="croad-block">
                    <p className="croad-block-label">Tools &amp; libraries</p>
                    <ul className="croad-tech">
                      {module.tech.map((t) => (
                        <li key={t} className="c-chip">{t}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {module.outcome && (
                  <div className="croad-outcome">
                    <span className="croad-outcome-icon" aria-hidden="true">
                      <Icon name="terminal" size={18} />
                    </span>
                    <div>
                      <p className="croad-block-label">You finish with</p>
                      <p className="croad-outcome-text">{module.outcome}</p>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* An editor's footnote under the module list — "topics are reviewed
            each batch", and the like. Absent when nobody wrote one. */}
        {course.roadmapNote && <p className="croad-note">{course.roadmapNote}</p>}
      </div>
    </section>
  )
}
