'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import './BhuviChat.css'

/* ------------------------------------------------------------------
   Ask Bhuvi — the chat launcher, bottom-left on every page, and the
   panel it opens above itself.

   The widget only talks to /api/ask-bhuvi. Whether the reply came
   from the CMS's own knowledge or from a model is the server's
   business; this renders whatever text comes back and turns the
   addresses in it into links.

   Nothing is fetched until the visitor sends a message, and the
   conversation lives in memory — close the tab and it is gone, which
   is what a visitor expects of a help bubble.
------------------------------------------------------------------ */

type Message = { role: 'user' | 'assistant'; content: string }

const WELCOME: Message = {
  role: 'assistant',
  content:
    "Hi! I'm Bhuvi 👋 Ask me about courses, fees, batch timings, admissions or placements — or pick a topic below."
}

/* the questions most visitors open with */
const TOPICS = [
  { label: 'Courses', ask: 'Which courses do you offer?' },
  { label: 'Fees', ask: 'What are the fees?' },
  { label: 'Batch timings', ask: 'What are the batch timings?' },
  { label: 'Placements', ask: 'Do you provide placement support?' },
  { label: 'Location', ask: 'Where is the centre located?' }
]

const FAILED = 'Bhuvi is having trouble right now. Please try again, or call the centre.'

/* The server keeps the last 20 turns at most. */
const MAX_TURNS = 20

const URL = /(https?:\/\/[^\s]+[^\s.,)])/g

/** Reply text, with its addresses made into links. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(URL).map((part, i) =>
        /^https?:\/\//.test(part) ? (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer">
            {part.replace(/^https?:\/\/(www\.)?/, '')}
          </a>
        ) : (
          part
        )
      )}
    </>
  )
}

/* Bhuvi's mark: a small glass orb. Drawn here rather than loaded — the
   group's animated logo file is over 200KB, which is a lot to put on
   every page for a 28px icon. */
function Orb() {
  return <span className="bhv-orb" aria-hidden="true" />
}

export default function BhuviChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [draft, setDraft] = useState('')
  const [busy, setBusy] = useState(false)
  const logRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const launcherRef = useRef<HTMLButtonElement>(null)

  /* keep the newest message in view */
  useEffect(() => {
    const log = logRef.current
    if (log) log.scrollTop = log.scrollHeight
  }, [messages, busy, open])

  useEffect(() => {
    if (!open) return undefined
    inputRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      launcherRef.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const send = async (text: string) => {
    const content = text.trim()
    if (!content || busy) return

    const next: Message[] = [...messages, { role: 'user', content }]
    setMessages(next)
    setDraft('')
    setBusy(true)

    let answer = FAILED
    try {
      const response = await fetch('/api/ask-bhuvi', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        /* the greeting is the widget's own, not part of the conversation */
        body: JSON.stringify({ messages: next.slice(1).slice(-MAX_TURNS) })
      })
      const data = await response.json().catch(() => null)
      answer = data?.answer || data?.error || FAILED
    } catch {
      answer = FAILED
    }

    setMessages((current) => [...current, { role: 'assistant', content: answer }])
    setBusy(false)
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    void send(draft)
  }

  return (
    <div className={`bhv${open ? ' is-open' : ''}`}>
      {open && (
        <section className="bhv-panel" role="dialog" aria-label="Ask Bhuvi">
          <header className="bhv-head">
            <Orb />
            <div>
              <p className="bhv-name">Ask Bhuvi</p>
              <p className="bhv-sub">techcadd&rsquo;s course assistant</p>
            </div>
            <button
              type="button"
              className="bhv-close"
              onClick={() => {
                setOpen(false)
                launcherRef.current?.focus()
              }}
              aria-label="Close chat"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </header>

          <div className="bhv-log" ref={logRef} aria-live="polite">
            {messages.map((message, i) => (
              <p key={i} className={`bhv-msg bhv-msg--${message.role}`}>
                <Rich text={message.content} />
              </p>
            ))}

            {busy && (
              <p className="bhv-msg bhv-msg--assistant bhv-typing" aria-label="Bhuvi is typing">
                <span />
                <span />
                <span />
              </p>
            )}

            {/* offered until the visitor has asked something */}
            {messages.length === 1 && (
              <ul className="bhv-topics">
                {TOPICS.map((topic) => (
                  <li key={topic.label}>
                    <button type="button" onClick={() => void send(topic.ask)}>
                      {topic.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <form className="bhv-form" onSubmit={submit}>
            <label className="sr-only" htmlFor="bhv-input">Your question</label>
            <input
              id="bhv-input"
              ref={inputRef}
              type="text"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Type your question…"
              maxLength={1500}
              autoComplete="off"
            />
            <button type="submit" disabled={busy || !draft.trim()} aria-label="Send">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12 20 4l-6 16-3-7-7-1Z" />
              </svg>
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className="bhv-launch"
        ref={launcherRef}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? 'Close Ask Bhuvi' : 'Open Ask Bhuvi'}
      >
        <Orb />
        Ask Bhuvi
      </button>
    </div>
  )
}
