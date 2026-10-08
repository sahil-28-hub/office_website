'use client'

import { createContext, useContext, type ReactNode } from 'react'

/* The active course, selected by the slug in the URL. Every section on
   the course page reads from here, so the page structure stays fixed
   while the content changes per slug. */
const CourseContext = createContext(null)

export function CourseProvider({ course, children }: { course: Record<string, any>; children: ReactNode }) {
  return <CourseContext.Provider value={course}>{children}</CourseContext.Provider>
}

export function useCourse() {
  const course = useContext(CourseContext)
  if (!course) {
    throw new Error('useCourse() must be called inside <CourseProvider>')
  }
  return course
}
