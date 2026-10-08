/* ------------------------------------------------------------------
   Icon set for the About page — the same 24-unit grid and 1.6 stroke
   weight the rest of the site's inline SVG uses, so no icon package
   is needed and every glyph inherits currentColor.
------------------------------------------------------------------ */

const PATHS = {
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  arrowDown: (
    <>
      <path d="M12 4v15" />
      <path d="m6 13 6 6 6-6" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.4 12.2 2.4 2.4 4.8-5" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5h2a1 1 0 0 1 .95.68l.95 2.85a1 1 0 0 1-.27 1.05L9 9.3a12.4 12.4 0 0 0 5.05 5.05l1.22-1.23a1 1 0 0 1 1.05-.27l2.85.95a1 1 0 0 1 .68.95v2a2.3 2.3 0 0 1-2.5 2.3A15 15 0 0 1 4.3 6a2.3 2.3 0 0 1 2.3-2.5Z" />
  ),
  curriculum: (
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2.5 2.5 0 0 1 2 1 2.5 2.5 0 0 1 2-1h4.5A1.5 1.5 0 0 1 20 5.5V17a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2 2 2 0 0 0-2-2H5a1 1 0 0 1-1-1Z" />
      <path d="M12 5v15" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="m7.5 10 2.4 2.4-2.4 2.4" />
      <path d="M13 15h3.5" />
    </>
  ),
  stack: (
    <>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12 8.5 4.5 8.5-4.5" />
      <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
    </>
  ),
  mentor: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16.5 6.5a3 3 0 0 1 0 6" />
      <path d="M18 15.4a5.5 5.5 0 0 1 2.5 4.6" />
    </>
  ),
  career: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2.5" />
      <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5" />
      <path d="m9 13.5 2 2 4-4" />
    </>
  ),
  support: (
    <>
      <path d="M4 14v-2a8 8 0 1 1 16 0v2" />
      <rect x="2.5" y="13" width="4" height="6" rx="2" />
      <rect x="17.5" y="13" width="4" height="6" rx="2" />
      <path d="M20 19v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </>
  ),
  code: (
    <>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13.5 5-3 14" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.2 13.8 9l5.8 1.8-5.8 1.8L12 18.4l-1.8-5.8L4.4 10.8 10.2 9 12 3.2Z" />
      <path d="M18.5 3.5v3M20 5h-3" />
    </>
  ),
  student: (
    <>
      <path d="M12 3.5 3 8l9 4.5L21 8l-9-4.5Z" />
      <path d="M7 10.2v4.6c0 1.6 2.2 2.9 5 2.9s5-1.3 5-2.9v-4.6" />
      <path d="M21 8v5" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3c3.2 2.1 5 5.4 5 9l-2.4 2.6h-5.2L7 12c0-3.6 1.8-6.9 5-9Z" />
      <circle cx="12" cy="10" r="1.6" />
      <path d="M9.4 14.6 8 19l3-1.4 3 1.4-1.4-4.4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3" />
    </>
  ),
  growth: (
    <>
      <path d="M4 19h16" />
      <path d="m5 15 4.2-4.6 3.4 2.6L20 6" />
      <path d="M20 10.5V6h-4.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.2 2.4 3.4 5.4 3.4 8.5S14.2 18.1 12 20.5c-2.2-2.4-3.4-5.4-3.4-8.5S9.8 5.9 12 3.5Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2 19 6v6c0 4-3 7.2-7 8.8-4-1.6-7-4.8-7-8.8V6l7-2.8Z" />
      <path d="m9 12 2.2 2.2L15.4 10" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5 4.5-1.9Z" />
    </>
  ),
  quote: (
    <>
      <path d="M9.5 6.5C7 7.6 5.5 9.8 5.5 12.6c0 2.4 1.4 4 3.4 4s3.2-1.4 3.2-3.3-1.3-3.2-3-3.2h-.5" />
      <path d="M19 6.5c-2.5 1.1-4 3.3-4 6.1 0 2.4 1.4 4 3.4 4s3.2-1.4 3.2-3.3-1.3-3.2-3-3.2H18" />
    </>
  ),
  frame: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <circle cx="8.5" cy="10" r="1.6" />
      <path d="m4 17 4.8-4.4a2 2 0 0 1 2.7 0L20 19.5" />
    </>
  )
}

export default function AboutIcon({ name, size, filled = false, ...rest }: { name: string; size?: number | string; filled?: boolean; [key: string]: any }) {
  const path = PATHS[name as keyof typeof PATHS]
  if (!path) return null
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {path}
    </svg>
  )
}
