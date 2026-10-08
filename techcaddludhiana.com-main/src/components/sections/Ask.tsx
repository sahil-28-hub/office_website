'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useSectionVisible } from '../../hooks/useCourseMotion'
import './Ask.css'
import WriteIn from '../common/WriteIn'
import { useCmsList } from '../../hooks/useCms'
import { mapFaq } from '../../lib/cms'

/* ------------------------------------------------------------------
   The fallback questions.

   The live ones come from the CMS — the questions an administrator has
   marked "Show on homepage", which is what `?featured=1` asks for. These
   are what the section shows while that request is in flight, and what it
   keeps showing if the CMS cannot be reached at all.

   The card stack adapts to any number of entries. Only one card is ever
   open at a time — toggle() below swaps the single `open` id rather than
   tracking a set.
------------------------------------------------------------------ */
const FALLBACK_FAQS = [
  {
    id: 'courses',
    q: 'What courses does techcadd offer?',
    a: 'We offer industry-focused programs across Full Stack Development, AI & Machine Learning, Data Science, Cybersecurity, Cloud & DevOps, Digital Marketing and more. Each one is built around the tools the industry actually hires for, and every program ends with work you can show and defend.'
  },
  {
    id: 'which',
    q: 'Which course is right for me?',
    a: 'That depends on what you enjoy more than what you already know. If you like building things people can see and click, Full Stack is the natural start. If you prefer finding patterns in numbers, look at Data Science. Book a free counselling session and we will walk through your background and goals before you commit to anything.'
  },
  {
    id: 'background',
    q: 'Do I need a programming background to start?',
    a: 'No. Most of our learners start from zero, and the foundation modules assume nothing. What matters far more than prior experience is showing up consistently and doing the practice work between sessions.'
  },
  {
    id: 'certificate',
    q: 'Do you provide certificates?',
    a: 'Yes. You receive a techcadd completion certificate at the end of your program, and separate certification for any internship or live project you complete with us. The projects themselves usually carry more weight in an interview than the certificate does.'
  },
  {
    id: 'placement',
    q: 'Is placement assistance provided?',
    a: 'Yes. Placement assistance includes resume and portfolio reviews, mock technical interviews, guidance on how to present your projects, and referrals to companies hiring in the roles you have trained for. We support you through the process — we do not guarantee a specific outcome, and you should be cautious of anyone who does.'
  },
  {
    id: 'mode',
    q: 'Are classes held online or at the campus?',
    a: 'Both. Classroom batches run at the Ludhiana campus with the labs and mentors on site, and live online batches follow the same syllabus and the same trainers. You can switch between them if your schedule changes mid-program.'
  },
  {
    id: 'projects',
    q: 'Will I build real projects?',
    a: 'Yes, and this is the part we care most about. You build and ship applications end to end rather than copying tutorial exercises, so by the end you can open your own code in an interview and explain every decision in it.'
  },
  {
    id: 'fees',
    q: 'What are the course fees, and are EMI options available?',
    a: 'Fees vary by program and format, and we keep no-cost EMI options open so cost is not the reason someone sits out. Talk to a counsellor for the exact fee and instalment plan for the course you have in mind.'
  },
  {
    id: 'duration',
    q: 'How long does a course take to complete?',
    a: 'Anywhere from a 6-week crash course to a 6-month in-depth program, depending on what you pick and whether you go classroom, online, or weekend batches. Each course page lists its exact duration.'
  },
  {
    id: 'demo',
    q: 'How do I book a free demo class?',
    a: 'Use the Book Demo button in the navigation or the contact form, tell us which program you are curious about, and we will slot you into the next running batch so you can sit through a real session before deciding.'
  }
]

const VISIBLE_COUNT = 6

/* --------------------------- section --------------------------- */
/** @param initialFaqs server-fetched by src/app/page.tsx; see useCms. */
export default function Ask({ initialFaqs }: { initialFaqs?: any[] | null } = {}) {
  /* adds `is-visible` once the band is reached — and also if the
     page jumped straight past it; see useSectionVisible. */
  const sectionRef = useSectionVisible(0.12)

  const [open, setOpen] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const { items: faqs } = useCmsList('/faqs?featured=1', {
    map: mapFaq,
    fallback: FALLBACK_FAQS,
    initial: initialFaqs
  })

  const toggle = useCallback((id: string) => {
    setOpen((current) => (current === id ? null : id))
  }, [])

  const visible = showAll ? faqs : faqs.slice(0, VISIBLE_COUNT)
  const hasMore = !showAll && faqs.length > VISIBLE_COUNT


  return (
    <section className="ask" id="faq" ref={sectionRef}>
      <div className="ask-bg" aria-hidden="true">
        <span className="ask-grid" />
        <span className="ask-glow" />
      </div>

      <div className="shell ask-inner">
        <header className="ask-head">
          <p className="ask-eyebrow">
            <span className="dot" />
            Ask techcadd
          </p>
          <h2 className="ask-title"><WriteIn>
            Have Questions? <span className="ask-title-accent">Ask techcadd.</span>
          </WriteIn></h2>
          <p className="ask-sub">
            Everything you need to know before starting your technology journey.
          </p>
        </header>

        <div className="ask-body">
          <ul className="ask-list">
            {visible.map((item, i) => {
              const isOpen = open === item.id
              return (
                <li className={`ask-card${isOpen ? ' is-open' : ''}`} key={item.id} style={{ '--i': i } as React.CSSProperties}>
                  <h3 className="ask-card-head">
                    <button
                      className="ask-card-btn"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`ask-panel-${item.id}`}
                      id={`ask-btn-${item.id}`}
                      onClick={() => toggle(item.id)}
                    >
                      <span className="ask-card-q">{item.q}</span>
                      <span className="ask-card-sign" aria-hidden="true">
                        <i />
                        <i />
                      </span>
                    </button>
                  </h3>

                  <div
                    className="ask-card-panel"
                    id={`ask-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`ask-btn-${item.id}`}
                  >
                    <div className="ask-card-panel-inner">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          {hasMore && (
            <button type="button" className="ask-more" onClick={() => setShowAll(true)}>
              See all questions
              <span className="ask-more-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
