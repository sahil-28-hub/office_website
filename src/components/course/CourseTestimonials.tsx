'use client'

import { useEffect, useRef, useState } from 'react'
import Icon from './icons'
import { QuoteSkeleton } from './Skeleton'
import { useCourse } from './CourseContext'
import { useInViewOnce, useReducedMotion, useReveal } from '../../hooks/useCourseMotion'
import './CourseTestimonials.css'

const AUTOPLAY_MS = 6500

export default function CourseTestimonials() {
  const course = useCourse()
  const testimonials = course.testimonials
  const total = testimonials.length

  const sectionRef = useReveal()
  const [stageRef, ready] = useInViewOnce('140px')
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(0)

  /* a different slug means a different set of quotes */
  useEffect(() => setIndex(0), [course.slug])

  const go = (next) => setIndex((next + total) % total)

  useEffect(() => {
    if (!ready || paused || reduced) return
    timer.current = window.setTimeout(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS)
    return () => window.clearTimeout(timer.current)
  }, [index, paused, ready, reduced, total])

  return (
    <section className="c-sec c-sec--tint ctes" id="course-reviews" ref={sectionRef}>
      <div className="shell">
        <div className="ctes-head" data-reveal>
          <div className="c-head">
            <p className="c-eyebrow">Student voices</p>
            <h2 className="c-title">What our students say</h2>
          </div>

          <div className="ctes-controls">
            <button
              type="button"
              className="ctes-nav"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
            >
              <Icon name="arrowRight" size={18} style={{ transform: 'rotate(180deg)' }} />
            </button>
            <button
              type="button"
              className="ctes-nav"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
            >
              <Icon name="arrowRight" size={18} />
            </button>
          </div>
        </div>

        <div
          className="ctes-stage"
          ref={stageRef}
          data-reveal
          style={{ '--d': '100ms' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label={`${course.short} student testimonials`}
        >
          {!ready ? (
            <QuoteSkeleton />
          ) : (
            <>
              <div className="ctes-viewport">
                <ul
                  className="ctes-track"
                  style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
                >
                  {/* Keyed by position, not by name. Two different
                      students can share a name — the C/C++ set has a
                      Simran Kaur and a Manpreet Singh twice over — and
                      a duplicate key makes React collapse the two
                      slides, so the dots and the carousel disagree
                      about which quote is showing. The list is static
                      per course and never reordered, so the index is a
                      stable key. */}
                  {testimonials.map((t, i) => (
                    <li
                      key={`${t.name}-${i}`}
                      className="ctes-slide"
                      aria-hidden={i !== index}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${i + 1} of ${total}`}
                    >
                      <figure className="ctes-card">
                        <span className="ctes-quote" aria-hidden="true">
                          <Icon name="quote" filled size={30} />
                        </span>

                        <div className="ctes-rating" aria-label={`${t.rating} out of 5`}>
                          {Array.from({ length: t.rating }).map((_, s) => (
                            <Icon key={s} name="star" filled size={15} />
                          ))}
                        </div>

                        <blockquote>{t.quote}</blockquote>

                        <figcaption>
                          <span className="ctes-avatar" aria-hidden="true">{t.initials}</span>
                          <span className="ctes-who">
                            <strong>{t.name}</strong>
                            <span>{t.course}</span>
                            <em>{t.detail}</em>
                          </span>
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ctes-dots" role="tablist" aria-label="Choose testimonial">
                {testimonials.map((t, i) => (
                  <button
                    key={`${t.name}-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`ctes-dot${i === index ? ' is-on' : ''}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
