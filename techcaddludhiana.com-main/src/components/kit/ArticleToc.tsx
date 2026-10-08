'use client'

import { useEffect, useState } from 'react'
import type { TocItem } from '../../lib/articleToc'
import '../legal/Legal.css'
import './ArticleToc.css'

/* ------------------------------------------------------------------
   The index beside a blog post or a CMS page.

   The rail itself is the legal pages' one — same classes, so the three
   kinds of long document share a contents list rather than each having
   its own. What this adds is the two things a hand-written legal page
   does not need: a second level for h3s, and a marker on the heading
   currently being read, because an article's index is long enough to
   lose your place in.
------------------------------------------------------------------ */
export default function ArticleToc({ toc }: { toc: TocItem[] }) {
  const [active, setActive] = useState('')
  const key = toc.map((item) => item.id).join('|')

  useEffect(() => {
    const headings = toc
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]
    if (!headings.length) return undefined

    /* The last heading to have passed under the navbar is the section
       on screen. */
    const sync = () => {
      const line = window.innerHeight * 0.3
      let current = headings[0].id
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= line) current = heading.id
        else break
      }
      setActive(current)
    }

    sync()
    window.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      window.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  if (!toc.length) return null

  return (
    <nav className="tc-legal-toc tc-toc" aria-label="On this page">
      <p className="tc-legal-toc-label">On this page</p>
      <ul>
        {toc.map((item) => (
          <li key={item.id} className={item.level === 3 ? 'tc-toc-sub' : undefined}>
            <a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
