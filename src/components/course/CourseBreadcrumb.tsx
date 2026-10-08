'use client'

import SmartLink from '../common/SmartLink'
import { useCourse } from './CourseContext'
import { coursePath } from '../../data/courses/path'
import { categoryForKey, categoryPath } from '../../data/courseCategories'
import './CourseBreadcrumb.css'

/* Sits inside the hero's own top padding rather than claiming a
   section of its own — the course page reserves one full screen per
   section (see course-base.css), and a breadcrumb strip doesn't
   deserve one. Three real internal links per course page: home, the
   all-courses list, and the category filter — none of which existed
   here before. */
export default function CourseBreadcrumb() {
  const course = useCourse()
  const category = categoryForKey(course.category)

  return (
    <nav className="cbc" aria-label="Breadcrumb">
      <ol className="cbc-list">
        <li>
          <SmartLink href="/">Home</SmartLink>
        </li>
        <li className="cbc-sep" aria-hidden="true">/</li>
        <li>
          <SmartLink href="/courses">Courses</SmartLink>
        </li>
        <li className="cbc-sep" aria-hidden="true">/</li>
        <li>
          {/* the category's own page where it has one, the filtered
              catalogue where it does not */}
          <SmartLink
            href={
              category
                ? categoryPath(category.slug)
                : `/courses?category=${encodeURIComponent(course.category)}`
            }
          >
            {course.category}
          </SmartLink>
        </li>
        <li className="cbc-sep" aria-hidden="true">/</li>
        <li aria-current="page" className="cbc-current">
          {course.short}
        </li>
      </ol>
    </nav>
  )
}
