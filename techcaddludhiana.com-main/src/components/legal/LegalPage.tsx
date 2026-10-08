'use client'

import { useReveal } from '@/hooks/useCourseMotion'
import '@/components/kit/page-kit.css'
import '@/components/kit/BlogPost.css'
import './Legal.css'
import PageHero from '@/components/kit/PageHero'
import Cta from '@/components/sections/Cta'
import SmartLink from '@/components/common/SmartLink'
import { OPEN_COOKIE_SETTINGS_EVENT } from '@/components/common/CookieConsent'

/* ------------------------------------------------------------------
   One template, four pages — Privacy Policy, Terms & Conditions,
   Cookie Policy, Refund & Cancellation Policy. The content for each
   lives in src/data/legal.js; this file only knows how to lay a
   `doc` object out, the same way CoursePage renders 48 different
   courses from one component.

     §1  banner              dark, the page title and last-updated
     §2  contents             light, jump links to every section below
     §3  the sections         light, plain prose (reuses the blog
                               article's .tc-article-body typography)
     §4  the CTA band         shared with every other page
------------------------------------------------------------------ */

/* A body block is a string (a paragraph) or one shaped object. Kept
   as data rather than JSX so src/data/legal.js never imports React. */
function Block({ block }) {
  if (typeof block === 'string') return <p>{block}</p>

  /* A sub-heading inside a section. The refund policy has two of them
     — 'Important Note on Non-Attendance' and 'Rescheduled Sessions' —
     which belong under their parent clause rather than beside it, so
     they cannot be sections of their own without promoting them in
     the document's hierarchy. .tc-article-body already styles h3. */
  if (block.h3) return <h3>{block.h3}</h3>

  if (block.linkPara) {
    const { label, href, after } = block.linkPara
    return (
      <p>
        <SmartLink href={href}>{label}</SmartLink>
        {after}
      </p>
    )
  }

  if (block.ul) {
    return (
      <ul>
        {block.ul.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }

  if (block.ol) {
    return (
      <ol>
        {block.ol.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    )
  }

  if (block.table) {
    const { head, rows } = block.table
    return (
      <table>
        <thead>
          <tr>
            {head.map((cell) => (
              <th key={cell}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return null
}

function Contents({ toc }) {
  return (
    <nav className="tc-legal-toc" aria-label="On this page">
      <p className="tc-legal-toc-label">On this page</p>
      <ul>
        {toc.map((item) => (
          <li key={item.id}>
            <SmartLink href={`#${item.id}`}>{item.label}</SmartLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function LegalPage({ doc }) {
  const ref = useReveal()

  return (
    <div className="tc-page tc-page--legal">
      <main id="main">
        <PageHero {...doc.hero} id="legal-top" />

        <article className="tcp-body tc-legal-body ap-light" ref={ref}>
          <div className="shell tc-legal-shell">
            <Contents toc={doc.toc} />

            <div className="tc-article-body" data-reveal>
              {doc.sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2>{section.heading}</h2>
                  {section.body.map((block, i) => (
                    <Block block={block} key={i} />
                  ))}
                </section>
              ))}

              {doc.showCookieSettingsButton && (
                <button
                  type="button"
                  className="ap-btn ap-btn--dark tc-legal-cookie-btn"
                  onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
                >
                  Manage cookie preferences
                </button>
              )}
            </div>
          </div>
        </article>

        <Cta />
      </main>
    </div>
  )
}
