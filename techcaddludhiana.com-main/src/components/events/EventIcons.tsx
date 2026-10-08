/* ==================================================================
   The small marks the event pages set beside a fact.

   Its own set rather than an addition to the shared kit: `PageIcon`
   has no calendar or map pin, and the contact set's pin is drawn for a
   16px slot in a coloured badge rather than for an inline label. Four
   glyphs used on two pages is not worth reshaping either of those.

   All stroke-based on `currentColor` at the same 1.7 weight, so they
   inherit the colour of the line they sit in and match the site's
   other icons at a glance.
================================================================== */

const PATHS: Record<string, React.ReactNode> = {
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  users: (
    <>
      <path d="M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
      <circle cx="9.5" cy="8" r="3.5" />
      <path d="M21 20v-1a4 4 0 0 0-3-3.87M16.5 4.6a3.5 3.5 0 0 1 0 6.8" />
    </>
  ),
  arrowLeft: <path d="M19 12H5M11 18l-6-6 6-6" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
}

export function EventIcon({ name, size = 16 }: { name: string; size?: number }) {
  const path = PATHS[name]
  /* An unknown name draws nothing rather than an empty box — the same
     rule the other icon sets follow. */
  if (!path) return null

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  )
}
