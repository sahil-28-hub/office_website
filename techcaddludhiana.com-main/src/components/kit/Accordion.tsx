'use client'

import { useId, useState } from 'react'

/* ------------------------------------------------------------------
   A question list that opens one answer at a time.

   The open/close is animated through a grid track rather than a
   measured pixel height, so the answer stays in the document — it can
   be found with ctrl-F and read by assistive technology whichever way
   the panel happens to be sitting.

   `allowMultiple` lets several stay open at once; the FAQ page uses
   the default single-open behaviour.
------------------------------------------------------------------ */
export default function Accordion({ items, initial = null, allowMultiple = false }) {
  const uid = useId()
  const [open, setOpen] = useState(() => (initial == null ? [] : [initial]))

  const toggle = (id) => {
    setOpen((current) => {
      const isOpen = current.includes(id)
      if (allowMultiple) {
        return isOpen ? current.filter((entry) => entry !== id) : [...current, id]
      }
      return isOpen ? [] : [id]
    })
  }

  return (
    <ul className="tc-acc">
      {items.map((item, i) => {
        const isOpen = open.includes(item.id)
        const panelId = `${uid}-${item.id}`

        return (
          <li
            className={`tc-acc-item ${isOpen ? 'is-open' : ''}`.trim()}
            key={item.id}
            data-reveal
            style={{ '--d': `${Math.min(i, 6) * 60}ms` }}
          >
            <button
              className="tc-acc-q"
              type="button"
              id={`${panelId}-q`}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
            >
              <span>{item.q}</span>
              <i className="tc-acc-sign" aria-hidden="true" />
            </button>

            <div className="tc-acc-a" id={panelId} role="region" aria-labelledby={`${panelId}-q`}>
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
