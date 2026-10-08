/* ------------------------------------------------------------------
   Copy that lights up as the page scrolls past it.

   Each word is wrapped and handed its index; the CSS compares that
   index against the --p the parent section publishes (written by
   useSectionProgress) and decides how far in the word has arrived.
   No per-word observers, no re-render per frame — one custom property
   drives the whole paragraph.

   Words wrapped in *asterisks* take the gradient accent.
------------------------------------------------------------------ */
export default function ScrollText({ text, className = '', as: Tag = 'p' }) {
  const words = text.split(/\s+/).filter(Boolean)

  return (
    <Tag className={`tc-scrolltext ${className}`.trim()} style={{ '--n': words.length }}>
      {words.map((word, i) => {
        const accented = word.startsWith('*') && word.endsWith('*')
        const clean = accented ? word.slice(1, -1) : word

        return (
          <i key={`${word}-${i}`} style={{ '--i': i }}>
            {accented ? <em>{clean}</em> : clean}
            {i < words.length - 1 ? ' ' : ''}
          </i>
        )
      })}
    </Tag>
  )
}
