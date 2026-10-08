'use client'

import { useEffect, useState } from 'react'
import Icon from './icons'
import { useCourse } from './CourseContext'
import { useScrolledPast } from '../../hooks/useCourseMotion'
import './FloatingCourseCTA.css'
import SmartLink from '../common/SmartLink'

export default function FloatingCourseCTA() {
  const course = useCourse()
  const past = useScrolledPast(680)
  const [dismissed, setDismissed] = useState(false)
  const shown = past && !dismissed

  /* dismissing applies to the course you dismissed it on, not the next one */
  useEffect(() => setDismissed(false), [course.slug])

  return (
    <aside
      className={`fcta${shown ? ' is-shown' : ''}`}
      aria-hidden={!shown}
      aria-label="Course enquiry"
    >
      <div className="fcta-body">
        <p className="fcta-name">{course.name}</p>
        <p className="fcta-meta">
          {course.city} · {course.duration}
        </p>
      </div>

      <SmartLink className="c-btn c-btn--primary c-btn--sm fcta-btn" href="#course-enquire" tabIndex={shown ? 0 : -1}>
        Enquire now
        <Icon name="arrowRight" size={16} />
      </SmartLink>

      <button
        type="button"
        className="fcta-close"
        onClick={() => setDismissed(true)}
        aria-label="Hide enquiry bar"
        tabIndex={shown ? 0 : -1}
      >
        <Icon name="close" size={16} />
      </button>
    </aside>
  )
}
