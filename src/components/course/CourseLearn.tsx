'use client'

import RichText from './RichText'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import './CourseLearn.css'

/* ==================================================================
   "What you will learn" — the numbered card grid under the syllabus.

   NOT A SECOND SYLLABUS

   The syllabus above is the running order: modules in sequence, the
   weeks each occupies, the skills each closes with. This band is the
   prose answer to a different question — what a student will actually
   be able to do — written at length and for search. The two sit
   together deliberately: the list, then the argument.

   THE CHIPS ARE THE COURSE'S OWN TOOLS

   The row under the cards reuses `tools`, the same list the technology
   ecosystem draws from. Giving this band a second tool field would
   guarantee the two drifted apart the first time somebody added one to
   only one of them.

   EVERY PART IS OPTIONAL

   A course with no cards and no copy renders nothing at all. A course
   with cards but no closing paragraph renders the cards. Nothing here
   is generated from the course name, because a paragraph written from
   a course's own name is the same paragraph on every course.
================================================================== */

type LearnPoint = { title?: string; text?: string }

export default function CourseLearn() {
  const course = useCourse()
  const sectionRef = useReveal()

  const points: LearnPoint[] = (course.learnPoints || []).filter((p: LearnPoint) => p?.title)
  const tools: string[] = course.learnTools || []
  const hasCopy = course.learnTitle || course.learnIntro || course.learnOutro

  if (!points.length && !hasCopy) return null

  return (
    <section className="c-sec c-sec--paper clearn" id="course-learn" ref={sectionRef}>
      <div className="shell">
        <div className="c-head" data-reveal>
          <p className="c-eyebrow">What you learn</p>
          <h2 className="c-title">
            {course.learnTitle || `What you will learn in the ${course.name} course`}
          </h2>
          {course.learnIntro && <RichText className="c-lead" text={course.learnIntro} />}
        </div>

        {points.length > 0 && (
          <ul className="clearn-grid">
            {points.map((point, i) => (
              <li key={point.title} data-reveal style={{ '--d': `${60 + i * 60}ms` }}>
                <article className="clearn-card">
                  {/* Two digits, so 01 and 10 set to the same width and the
                      titles below them line up across the grid. */}
                  <span className="clearn-no">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="clearn-title">{point.title}</h3>
                  {point.text && <RichText className="clearn-text" text={point.text} />}
                </article>
              </li>
            ))}
          </ul>
        )}

        {tools.length > 0 && (
          <div className="clearn-tools" data-reveal>
            <p className="clearn-tools-label">Tools you&rsquo;ll work with</p>
            <ul className="clearn-chips">
              {tools.map((tool) => (
                <li key={tool} className="c-chip">{tool}</li>
              ))}
            </ul>
          </div>
        )}

        {course.learnOutro && (
          <RichText className="clearn-outro" text={course.learnOutro} data-reveal />
        )}
      </div>
    </section>
  )
}
