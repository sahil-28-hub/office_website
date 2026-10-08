'use client'

import Icon from './icons'
import { CardSkeleton } from './Skeleton'
import { useCourse } from './CourseContext'
import { useInViewOnce } from '../../hooks/useCourseMotion'
import { useFilteredReveal } from '../../hooks/usePageMotion'
import './CourseProjects.css'
import SmartLink from '../common/SmartLink'

export default function CourseProjects() {
  const course = useCourse()
  const featured = course.featured
  const [gridRef, ready] = useInViewOnce('160px')
  /* useFilteredReveal, not useReveal: the grid below swaps skeletons
     for the real cards when `ready` flips, and a plain useReveal built
     its observer over the skeletons and never saw the cards that
     replaced them — leaving five [data-reveal] cards at opacity 0 for
     the life of the page. Re-keying the reveal on `ready` rebuilds the
     observer over the new children. */
  const sectionRef = useFilteredReveal(ready)

  /* Nothing to show, so no band. Every section on this page hides itself when
     its content is empty rather than printing a heading over a blank — a CMS
     course that has not filled this one in should not leave a gap where it
     would go. The check sits below every hook, so the component still calls
     the same hooks on every render. */
  if (!course.projects?.length && !featured) return null

  return (
    <section className="c-sec c-sec--dark cproj" id="course-projects" ref={sectionRef}>
      <span className="c-grid-bg" aria-hidden="true" />
      <span className="c-noise" aria-hidden="true" />

      <div className="shell">
        <div className="c-head" data-reveal>
          <p className="c-eyebrow">Hands-on projects</p>
          <h2 className="c-title">
            Projects you actually ship,
            <br />not just follow along with.
          </h2>
          <p className="c-lead">
            Each one lands in your portfolio with the working files, the process
            and something a reviewer can open.
          </p>
        </div>

        {/*
          The capstone.

          Only the hand-written seeds carry one — it has a code sample, a
          status and a difficulty, none of which the CMS models — so a course
          built from the CMS has no `featured` at all. Rendering it
          unconditionally read `featured.lines` off undefined and took the
          whole page down with a 500 the moment this band started mounting for
          CMS courses. The grid below stands on its own without it.
        */}
        {featured && (
          <article className="cproj-feature" data-reveal style={{ '--d': '100ms' }} data-cursor="View">
            <div className="cproj-feature-visual" aria-hidden="true">
              <div className="cproj-window">
                <span className="cproj-window-bar">
                  <i /><i /><i />
                  <span>{course.slug}.capstone</span>
                </span>
                {/* The code sample only the seeds carry. A CMS capstone has
                    no such field, so the window shows its brief instead of an
                    empty frame — the panel is the same shape either way. */}
                <pre>
                  {(featured.lines ?? [featured.text])
                    .filter(Boolean)
                    .map((l: string, i: number) => (
                      <code key={i}>{l || ' '}</code>
                    ))}
                </pre>
              </div>
              <span className="cproj-feature-glow" />
            </div>

            <div className="cproj-feature-copy">
              <p className="cproj-kicker">
                <span className="cproj-pip" />
                {featured.kicker}
              </p>
              <h3>{featured.title}</h3>
              <p className="cproj-feature-text">{featured.text}</p>

              <ul className="cproj-tags">
                {featured.tags.map((t) => (
                  <li key={t} className="c-chip">{t}</li>
                ))}
              </ul>

              <dl className="cproj-facts">
                <div>
                  <dt>Difficulty</dt>
                  <dd>{featured.difficulty}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd className="is-ready">{featured.status}</dd>
                </div>
              </dl>

              <SmartLink className="c-btn c-btn--ghost c-btn--sm cproj-cta" href="#course-enquire">
                View project brief
                <Icon name="arrowRight" />
              </SmartLink>
            </div>
          </article>
        )}

        {/* An even three-up grid, and no picture.

            These cards used to open with a 118px gradient panel
            containing the project title's first letter at 16% opacity.
            It was standing in for a screenshot that does not exist —
            and read as one that had failed to load. The cards also
            carried mixed `is-sm` / `is-lg` spans across a six-column
            grid, which left a ragged edge and a lonely card on the
            last row for any course with five projects, which is all of
            them.

            What replaces it is the numbering the projects already have
            an order for: a ghost numeral behind the card, the tags
            pinned to the foot so every card ends on the same line, and
            an even grid. `p.size` is still in the seed data and is
            deliberately no longer read — the ragged layout was the
            thing being fixed. */}
        <ol className="cproj-grid" ref={gridRef}>
          {!ready
            ? course.projects.slice(0, 3).map((p) => (
                <li key={p.title} className="cproj-cell">
                  <CardSkeleton lines={2} />
                </li>
              ))
            : course.projects.map((p, i) => (
                <li key={p.title} className="cproj-cell">
                  <article
                    className="cproj-card"
                    data-reveal
                    style={{ '--d': `${i * 70}ms` }}
                    data-cursor="View"
                  >
                    <span className="cproj-card-ghost" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <p className="cproj-card-no">
                      <span className="cproj-card-pip" aria-hidden="true" />
                      Project {String(i + 1).padStart(2, '0')}
                    </p>

                    <h3>{p.title}</h3>
                    <p className="cproj-card-text">{p.text}</p>

                    <ul className="cproj-tags cproj-tags--sm">
                      {p.tags.map((t) => (
                        <li key={t} className="c-chip">{t}</li>
                      ))}
                    </ul>

                    <span className="cproj-card-arrow" aria-hidden="true">
                      <Icon name="arrowUpRight" size={16} />
                    </span>
                  </article>
                </li>
              ))}
        </ol>
      </div>
    </section>
  )
}
