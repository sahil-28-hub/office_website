'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { CMS_ENABLED, CMS_PUBLIC_BASE } from '../../lib/cms'
import PageIcon from '../kit/icons'
import './Comments.css'

/* ------------------------------------------------------------------
   The comment thread under an article.

   The CMS has a full moderation queue — approve, hide, report, staff
   replies — and the website had nowhere for a comment to be left, so
   the queue was permanently empty and the feature existed only in the
   admin.

   STRAIGHT TO THE CMS, NOT THROUGH THIS SITE'S API

   Reading and posting both go to the CMS's public endpoints from the
   visitor's browser. The alternative — proxying through a Next route
   handler — would put this site's server between a visitor and a
   comment for no benefit: the CMS already rate-limits by IP hash,
   runs a honeypot and holds everything for moderation, and proxying
   would hide the real IP those defences depend on.

   It does mean the site's origin has to be in the CMS's CORS_ORIGIN.
   That is documented in DEPLOYMENT.md; a missing origin shows up as
   the thread failing to load, which the panel below says out loud
   rather than rendering as "no comments yet".

   NOTHING APPEARS IMMEDIATELY

   The API answers 202, not 201: a new comment is pending until a
   moderator approves it. The form says so, because a comment that
   vanishes on submit reads as a bug and gets submitted again.
------------------------------------------------------------------ */

type Comment = {
  id: string
  authorName: string
  isStaff: boolean
  body: string
  createdAt: string
  replies: Comment[]
}

const TIMEOUT_MS = 8000

/** 'Jul 28, 2026' — the format the article's own date uses. */
function formatDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

/** How many comments there are, replies included. */
function countAll(items: Comment[]): number {
  return items.reduce((total, item) => total + 1 + countAll(item.replies ?? []), 0)
}

function Entry({
  comment,
  depth,
  onReply,
  onReport,
  reported
}: {
  comment: Comment
  depth: number
  onReply: (id: string, name: string) => void
  onReport: (id: string) => void
  reported: Set<string>
}) {
  return (
    <li className="cmt-item">
      <article className={`cmt-card${comment.isStaff ? ' cmt-card--staff' : ''}`}>
        <header className="cmt-head">
          <span className="cmt-avatar" aria-hidden="true">{initials(comment.authorName)}</span>
          <div>
            <p className="cmt-name">
              {comment.authorName}
              {/* A reply from the institute is worth marking: it is the
                  difference between an answer and an opinion. */}
              {comment.isStaff && <span className="cmt-badge">techcadd</span>}
            </p>
            <p className="cmt-date">{formatDate(comment.createdAt)}</p>
          </div>
        </header>

        {/* Plain text, set as text — a comment is a stranger's input and
            is never rendered as markup. */}
        <p className="cmt-body">{comment.body}</p>

        <footer className="cmt-actions">
          {/* One level of nesting. Deeper threads are unreadable on a
              phone, and the API keeps the parent link either way. */}
          {depth === 0 && (
            <button type="button" onClick={() => onReply(comment.id, comment.authorName)}>
              Reply
            </button>
          )}
          <button
            type="button"
            onClick={() => onReport(comment.id)}
            disabled={reported.has(comment.id)}
          >
            {reported.has(comment.id) ? 'Reported' : 'Report'}
          </button>
        </footer>
      </article>

      {comment.replies?.length > 0 && (
        <ul className="cmt-replies">
          {comment.replies.map((reply) => (
            <Entry
              key={reply.id}
              comment={reply}
              depth={depth + 1}
              onReply={onReply}
              onReport={onReport}
              reported={reported}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export default function Comments({ slug }: { slug: string }) {
  const [items, setItems] = useState<Comment[]>([])
  /*
    'off' and 'error' are deliberately different.

    'off' means there is no CMS configured, so nothing here can work
    and the section renders nothing at all. 'error' means there IS a
    CMS and the thread could not be read — a restart, a network blip,
    an origin missing from the API's CORS list. Those are not the same
    thing, and collapsing them hid the entire section whenever a fetch
    failed: no thread, no form, and no explanation.

    Posting is a separate request from reading, so a failed read is no
    reason to take the form away.
  */
  const [state, setState] = useState<'loading' | 'ready' | 'error' | 'off'>('loading')
  const [replyTo, setReplyTo] = useState<{ id: string; name: string } | null>(null)
  const [reported, setReported] = useState<Set<string>>(new Set())

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')
  /* The honeypot. Never shown, never filled by a person. */
  const [website, setWebsite] = useState('')

  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const formRef = useRef<HTMLFormElement>(null)
  const base = `${CMS_PUBLIC_BASE}/blogs/${encodeURIComponent(slug)}/comments`

  const load = useCallback(async () => {
    try {
      const response = await fetch(base, {
        headers: { accept: 'application/json' },
        signal: AbortSignal.timeout(TIMEOUT_MS)
      })
      if (!response.ok) throw new Error(`CMS responded ${response.status}`)
      const data = await response.json()
      setItems(Array.isArray(data?.items) ? data.items : [])
      setState('ready')
    } catch {
      setState('error')
    }
  }, [base])

  useEffect(() => {
    if (!CMS_ENABLED || !CMS_PUBLIC_BASE.startsWith('http')) {
      /* No CMS configured: there is nothing to load and nothing to
         post to, so the section renders nothing at all rather than an
         empty thread and a form that cannot work. */
      setState('off')
      return
    }
    setState('loading')
    void load()
  }, [load])

  const total = useMemo(() => countAll(items), [items])

  const onReply = useCallback((id: string, who: string) => {
    setReplyTo({ id, name: who })
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  const onReport = useCallback(
    async (id: string) => {
      /* Marked immediately and kept marked. The API answers the same
         way whatever the comment's state, so there is nothing to wait
         for and nothing to undo. */
      setReported((current) => new Set(current).add(id))
      try {
        await fetch(`${CMS_PUBLIC_BASE}/comments/${encodeURIComponent(id)}/report`, {
          method: 'POST',
          headers: { accept: 'application/json' },
          signal: AbortSignal.timeout(TIMEOUT_MS)
        })
      } catch {
        /* Nothing useful to say: the reporter has been told it is
           reported, and retrying would double-report. */
      }
    },
    []
  )

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    if (sending) return

    setError('')

    if (name.trim().length < 2) return setError('Please give a name.')
    if (body.trim().length < 2) return setError('Please write a comment.')

    setSending(true)
    try {
      const response = await fetch(base, {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({
          authorName: name.trim(),
          authorEmail: email.trim(),
          body: body.trim(),
          website,
          ...(replyTo ? { parentId: replyTo.id } : {})
        }),
        signal: AbortSignal.timeout(TIMEOUT_MS)
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.message || 'That did not send. Please try again.')
      }

      /* 202: held for moderation. The thread is deliberately NOT
         refetched — the new comment is not in it and reloading would
         look like the comment had been thrown away. */
      setSent(true)
      setBody('')
      setReplyTo(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'That did not send. Please try again.')
    } finally {
      setSending(false)
    }
  }

  /* No CMS to talk to at all. A comment form that cannot possibly post
     is worse than no section — but this is the ONLY case that hides
     it; see the note on the state above. */
  if (state === 'off') return null

  return (
    <section className="cmt" id="comments">
      <div className="shell cmt-inner">
        <header className="cmt-lede">
          <p className="ap-eyebrow">Discussion</p>
          <h2 className="ap-title">
            {total === 0 ? 'Be the first to comment' : `${total} ${total === 1 ? 'comment' : 'comments'}`}
          </h2>
        </header>

        {state === 'loading' && <p className="cmt-note">Loading the discussion…</p>}

        {/* The thread could not be read. The form below still works —
            posting is a different request — so this explains what is
            missing rather than leaving a heading over nothing. */}
        {state === 'error' && (
          <p className="cmt-note">
            The discussion could not be loaded just now. You can still leave a comment below.
          </p>
        )}

        {state === 'ready' && items.length > 0 && (
          <ul className="cmt-list">
            {items.map((comment) => (
              <Entry
                key={comment.id}
                comment={comment}
                depth={0}
                onReply={onReply}
                onReport={onReport}
                reported={reported}
              />
            ))}
          </ul>
        )}

        <form className="cmt-form" onSubmit={submit} ref={formRef}>
          {replyTo && (
            <p className="cmt-replying">
              Replying to <strong>{replyTo.name}</strong>
              <button type="button" onClick={() => setReplyTo(null)}>Cancel</button>
            </p>
          )}

          <div className="cmt-row">
            <label>
              <span>Your name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
                required
                autoComplete="name"
              />
            </label>

            <label>
              <span>Email <em>(optional, never published)</em></span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={190}
                autoComplete="email"
              />
            </label>
          </div>

          <label className="cmt-field">
            <span>Comment</span>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={5}
              maxLength={4000}
              required
            />
          </label>

          {/*
            The honeypot. Hidden from sight AND from screen readers, and
            never focusable — a person cannot reach it, a bot that fills
            every input gives itself away. The CMS answers a filled one
            as success and stores nothing.
          */}
          <div className="cmt-hp" aria-hidden="true">
            <label>
              Website
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </label>
          </div>

          {error && <p className="cmt-error" role="alert">{error}</p>}

          {sent ? (
            <p className="cmt-sent" role="status">
              <PageIcon name="check" size={18} />
              Thanks — your comment has been sent for moderation and will appear once it is
              approved.
            </p>
          ) : (
            <button className="ap-btn ap-btn--dark cmt-submit" type="submit" disabled={sending}>
              {sending ? 'Sending…' : 'Post comment'}
              <PageIcon name="arrowRight" size={18} />
            </button>
          )}

          <p className="cmt-note cmt-note--small">
            Comments are read by a moderator before they appear.
          </p>
        </form>
      </div>
    </section>
  )
}
