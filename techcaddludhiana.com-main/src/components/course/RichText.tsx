/* ------------------------------------------------------------------
   Emphasis inside course copy.

   The long-form course content is SEO copy, so the search terms it
   targets have to render inside <strong>. Writing that as raw HTML in
   the data files would mean dangerouslySetInnerHTML on every
   paragraph; instead the seeds mark a keyword as **like this** and
   this renders the <strong> around it.

   Deliberately one rule and no more. This is not a markdown parser -
   it exists so the data files stay plain, readable strings.
------------------------------------------------------------------ */
const KEYWORD = /\*\*([^*]+)\*\*/g

export function emphasise(text) {
  if (!text) return null

  const parts = []
  let last = 0
  let match

  /* the regex is module-level and global, so its cursor has to be
     reset or a second call would start mid-string */
  KEYWORD.lastIndex = 0

  while ((match = KEYWORD.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    parts.push(<strong key={match.index}>{match[1]}</strong>)
    last = match.index + match[0].length
  }

  if (last < text.length) parts.push(text.slice(last))

  return parts
}

export default function RichText({ text, as: Tag = 'p', ...rest }) {
  return <Tag {...rest}>{emphasise(text)}</Tag>
}
