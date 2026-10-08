'use client'

import { useCallback, useState } from 'react'
import { useReveal } from '../../hooks/useCourseMotion'
import ContactIcon from './icons'
import CounsellingModal from './CounsellingModal'
import './Counselling.css'

/* ------------------------------------------------------------------
   "Schedule Virtual Counselling" — the band, and the booking dialog it
   opens.

   The dialog takes a day and a time slot and posts through the same
   /api/leads path as the form above it, so a booking lands in the same
   CMS list as every other enquiry — with its date and slot in columns
   of their own.
------------------------------------------------------------------ */
export default function VirtualCounselling() {
  const ref = useReveal()
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  return (
    <section className="vc" id="counselling" ref={ref}>
      <div className="shell">
        <div className="vc-band" data-reveal>
          <div className="vc-copy">
            <span className="vc-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
                <path d="m15.5 10.5 6-3.5v10l-6-3.5" />
              </svg>
            </span>
            <div>
              <h2 className="vc-title">Schedule Virtual Counselling</h2>
              <p className="vc-text">
                Book a free 1:1 virtual counselling session. Tell us when suits you — a techcadd
                counsellor will call you personally.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="vc-btn"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
          >
            Book Counselling Session
            <ContactIcon name="arrowRight" size={16} />
          </button>
        </div>
      </div>

      <CounsellingModal open={open} onClose={close} />
    </section>
  )
}
