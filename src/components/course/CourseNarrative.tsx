'use client'

import RichText from './RichText'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import './CourseNarrative.css'

/* ------------------------------------------------------------------
   Long-form course copy.

   Some course pages carry editorial sections the standard blocks have
   no home for - who the course is for, why the programme is built the
   way it is, what the syllabus covers in prose rather than as a
   roadmap. They are numbered lists of title + paragraph, so one
   component renders all of them.

   Sections declare their own `slot`, and the page mounts this once
   per slot. That keeps each block of copy next to the standard
   section it belongs with, instead of stacking every word of it in
   one wall at the bottom of the page.

   Renders nothing at all when a course has no narrative, which is
   every course but the ones that were given one.
------------------------------------------------------------------ */
export default function CourseNarrative({ slot }) {
  const course = useCourse()
  const sections = (course.narrative || []).filter((s) => s.slot === slot)

  if (!sections.length) return null

  return (
    <>
      {sections.map((section) => (
        <NarrativeSection key={section.id} section={section} />
      ))}
    </>
  )
}

function NarrativeSection({ section }) {
  const sectionRef = useReveal()
  const tone = section.tone || 'paper'

  return (
    <section
      className={`c-sec c-sec--${tone} cnar`}
      id={section.id}
      ref={sectionRef}
    >
      <div className="shell">
        <div className="c-head" data-reveal>
          <p className="c-eyebrow">{section.eyebrow}</p>
          <h2 className="c-title">{section.title}</h2>
          {section.lead && <RichText className="c-lead" text={section.lead} />}
        </div>

        {section.items?.length > 0 && (
          <ol className="cnar-list">
            {section.items.map((item, i) => (
              <li key={item.title} data-reveal style={{ '--d': `${Math.min(i, 8) * 60}ms` }}>
                <article className="cnar-card" data-cursor="Read">
                  <span className="cnar-no" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="cnar-title">{item.title}</h3>
                  <RichText className="cnar-text" text={item.text} />
                </article>
              </li>
            ))}
          </ol>
        )}

        {section.tools && (
          <div className="cnar-tools" data-reveal>
            <p className="cnar-tools-label">{section.tools.label}</p>
            <ul className="cnar-tools-list">
              {section.tools.items.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        )}

        {section.close && (
          <RichText className="cnar-close" text={section.close} data-reveal />
        )}
      </div>
    </section>
  )
}
