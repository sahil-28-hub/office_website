'use client'

import Icon from './icons'
import { useCourse } from './CourseContext'
import { useSiteSettings } from '../common/SiteSettingsProvider'
import { OPEN_DEMO_EVENT } from '../common/BookDemoModal'
import { PHONE_DIAL } from '../../data/contact'
import './CourseSessionStrip.css'

/* ------------------------------------------------------------------
   The admissions strip under the hero: that admissions are open, the
   batch slots, and the two low-commitment next steps.

   The group's course layout headlines a start date here. This site has
   no batch calendar to read one from, so the headline is the thing
   that is always true — the demo class and the counselling are free.

   The slots are the ones the site already commits to elsewhere (the
   hero's "weekday & weekend batches", the FAQ's evening batches) and
   no others.
------------------------------------------------------------------ */
const SLOTS = ['Weekday', 'Evening', 'Weekend']

export default function CourseSessionStrip() {
  const course = useCourse()
  const settings = useSiteSettings()

  const openDemo = () => window.dispatchEvent(new Event(OPEN_DEMO_EVENT))

  return (
    <section className="cstrip" aria-label={`Admissions for ${course.short || course.name}`}>
      <div className="shell cstrip-inner">
        <div className="cstrip-facts">
          <div>
            <p className="cstrip-open">
              <span aria-hidden="true" />
              Admissions open
            </p>
            <p className="cstrip-title">Free demo class &amp; counselling</p>
          </div>

          <div className="cstrip-slots">
            <p className="cstrip-label">Batch slots</p>
            <ul>
              {SLOTS.map((slot) => (
                <li key={slot}>{slot}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cstrip-actions">
          <button type="button" className="c-btn c-btn--primary c-btn--sm" onClick={openDemo}>
            Book a free demo
            <Icon name="arrowRight" size={16} />
          </button>
          <a className="c-btn c-btn--line c-btn--sm" href={`tel:${settings?.phoneDial || PHONE_DIAL}`}>
            <Icon name="phone" size={16} />
            Talk to a counsellor
          </a>
        </div>
      </div>
    </section>
  )
}
