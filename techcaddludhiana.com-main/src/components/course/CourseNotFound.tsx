import Icon from './icons'
import { COURSE_CATEGORIES, coursePath } from '../../data/courses/catalog'
import './CourseNotFound.css'
import SmartLink from '../common/SmartLink'

/* A slug we do not recognise still lands somewhere useful: the list of
   courses that do exist, grouped the way the navigation groups them. */
export default function CourseNotFound({ slug }) {
  return (
    <main id="main" className="c-sec c-sec--dark cnf">
      <span className="c-grid-bg" aria-hidden="true" />

      <div className="shell">
        <div className="c-head" >
          <p className="c-eyebrow">Course not found</p>
          <h1 className="c-title">
            We do not have a course at
            <br />
            <code className="cnf-slug">/{slug}</code>
          </h1>
          <p className="c-lead">
            The link may be out of date. Every course we currently run is listed
            below.
          </p>
        </div>

        <div className="cnf-grid">
          {Object.entries(COURSE_CATEGORIES).map(([category, courses]) => (
            <section className="cnf-col" key={category}>
              <h2 className="cnf-col-title">{category}</h2>
              <ul>
                {courses.map((c) => (
                  <li key={c.slug}>
                    <SmartLink href={coursePath(c.slug)}>
                      {c.short}
                      <Icon name="arrowUpRight" size={15} />
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <SmartLink className="c-btn c-btn--ghost cnf-home" href="/">
          Back to the home page
          <Icon name="arrowRight" />
        </SmartLink>
      </div>
    </main>
  )
}
