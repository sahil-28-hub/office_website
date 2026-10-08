'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import SmartLink from '../common/SmartLink'
import { BRANCHES, branchPath } from '../../data/branches'
import { BRANCH_CITY } from '../../data/branch'
import { CONTACT_MAP } from '../../data/contact'
import ContactIcon from './icons'
import './Centres.css'

/* ------------------------------------------------------------------
   "Across Punjab" — every techcadd centre, this one first.

   The same section the group's contact page carries: a card per
   centre with its tagline and the towns it draws from, then a strip
   for the head office.

   WHAT A CARD SHOWS

   A centre with a listed street address shows it, with an "Open in
   Maps" link. A centre with none shows its tagline and no map link —
   a pin dropped on a guessed address sends somebody to the wrong
   building. See the note on `address` in data/branches.ts for where
   each one comes from.

   The card is not one big link, because it now holds two: the map,
   which leaves the site, and the centre's own page, which does not.
------------------------------------------------------------------ */

/* This centre first, then the order the group's contact page uses,
   with Mohali in the slot this centre holds over there. */
const ORDER = ['ludhiana', 'jalandhar', 'mohali', 'phagwara', 'maqsudan', 'hoshiarpur', 'amritsar']

const CURRENT = BRANCH_CITY.toLowerCase()

const mapsHref = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`techcadd, ${address}`)}`

const CENTRES = ORDER.map((slug) => BRANCHES.find((branch) => branch.slug === slug)).filter(Boolean)

const HEAD_OFFICE = BRANCHES.find((branch) => branch.headOffice)

function Areas({ areas }: { areas: string[] }) {
  return (
    <ul className="ctr-areas">
      {areas.map((area) => (
        <li key={area}>{area}</li>
      ))}
    </ul>
  )
}

export default function Centres() {
  const ref = useReveal()

  return (
    <section className="ctr" id="branches" ref={ref}>
      <div className="shell">
        <header className="ctr-head" data-reveal>
          <p className="ctr-eyebrow">Across Punjab</p>
          <h2 className="ctr-title">Other techcadd centres</h2>
          <p className="ctr-sub">
            {BRANCH_CITY} is one of {CENTRES.length === 7 ? 'seven' : CENTRES.length} techcadd campuses.
            Same syllabus, same project requirement, same certificate — pick whichever centre is
            closest to you.
          </p>
        </header>

        <ul className="ctr-grid">
          {CENTRES.map((centre, i) => {
            const isCurrent = centre.slug === CURRENT
            /* This centre's pin is the one the map below already uses. */
            const maps = isCurrent
              ? CONTACT_MAP.directions
              : centre.address
                ? mapsHref(centre.address)
                : null

            return (
              <li
                key={centre.slug}
                className={`ctr-card${isCurrent ? ' is-current' : ''}`}
                data-reveal
                style={{ '--d': `${80 + i * 60}ms` } as React.CSSProperties}
              >
                <div className="ctr-card-top">
                  {isCurrent ? (
                    <span className="ctr-here">
                      <span aria-hidden="true" />
                      You are here
                    </span>
                  ) : (
                    <span className="ctr-ico" aria-hidden="true">
                      <ContactIcon name="institute" size={19} />
                    </span>
                  )}
                  {centre.headOffice && <span className="ctr-flag">Head office</span>}
                </div>

                <h3 className="ctr-name">techcadd {centre.city}</h3>

                {/* The address where one is listed; the tagline where
                    it is not. This centre leads with its address, as
                    the reference does. */}
                {!isCurrent && centre.tagline && <p className="ctr-note">{centre.tagline}</p>}
                {centre.address && <p className="ctr-address">{centre.address}</p>}

                <Areas areas={centre.areas} />

                <div className="ctr-actions">
                  {maps && (
                    <a className="ctr-link" href={maps} target="_blank" rel="noopener noreferrer">
                      Open in Maps
                      <ContactIcon name="arrowUpRight" size={14} />
                    </a>
                  )}
                  {!isCurrent && (
                    <SmartLink className="ctr-link" href={branchPath(centre.slug)}>
                      Visit centre page
                      <ContactIcon name="arrowRight" size={14} />
                    </SmartLink>
                  )}
                </div>
              </li>
            )
          })}
        </ul>

        {HEAD_OFFICE?.address && (
          <div className="ctr-ho" data-reveal>
            <div>
              <p className="ctr-ho-label">Head office — {HEAD_OFFICE.city}</p>
              <p className="ctr-ho-text">
                {HEAD_OFFICE.address}. Counsellors here handle enquiries for every centre.
              </p>
            </div>
            <a
              className="ctr-ho-btn"
              href={mapsHref(HEAD_OFFICE.address)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions to head office
              <ContactIcon name="arrowUpRight" size={15} />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
