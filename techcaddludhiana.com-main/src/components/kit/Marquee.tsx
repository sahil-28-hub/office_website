/* ------------------------------------------------------------------
   Two rails running against each other, the way the About page moves
   its subject chips. The list is rendered twice so the loop has no
   seam, and the duplicate is hidden from assistive technology so a
   screen reader hears each item once.

   Hovering pauses both rails; prefers-reduced-motion turns them into
   ordinary horizontal scrollers.
------------------------------------------------------------------ */
export default function Marquee({ items, render, rows = 2, speed = 46, className = '' }) {
  const lanes =
    rows === 1
      ? [items]
      : (() => {
          const half = Math.ceil(items.length / 2)
          return [items.slice(0, half), items.slice(half)]
        })()

  return (
    <div className={`tc-marquee ${className}`.trim()}>
      {lanes.map((lane, row) => (
        <div className="tc-rail" key={row} data-row={row}>
          <ul className="tc-track" style={{ '--speed': `${speed + row * 8}s` }}>
            {[0, 1].map((copy) =>
              lane.map((item, i) => (
                <li
                  key={`${copy}-${item.id ?? item.label ?? i}`}
                  aria-hidden={copy === 1 ? 'true' : undefined}
                >
                  {/* The third argument says this is the cycled copy.
                      The <li> is aria-hidden, so anything focusable
                      inside it has to leave the tab order too — a
                      keyboard user must not land on a duplicate that
                      screen readers have been told does not exist. */}
                  {render(item, i, copy === 1)}
                </li>
              ))
            )}
          </ul>
        </div>
      ))}
    </div>
  )
}
