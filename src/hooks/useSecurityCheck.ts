'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

/* ==================================================================
   The security check behind every form on the site.

   A question, not a picture. The whole point of the reCAPTCHA-style
   widget is that it is hard for a script and easy for a person, but
   a distorted image is neither of those for someone using a screen
   reader - it is simply a wall. A worded sum is read out correctly by
   every assistive technology there is, needs no third-party script,
   and sends nothing about the visitor to anyone.

   Kept deliberately small: the real defence against automated
   submissions is the honeypot field and the time-on-form check in
   lib/submitLead.js, both of which a bot cannot see to work around.
   This is the third layer, and the only one a person ever meets.

   The challenge is generated in the browser and verified in the
   browser, so it costs nothing and works offline. Where a backend is
   configured, the answered challenge travels with the lead as
   `captcha` so the server can apply its own check as well - which is
   the one that actually counts, since anything client-side can be
   skipped by a script that is willing to read the source.
================================================================== */

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

/* Addition and subtraction only, both kept inside 0-10 and never
   negative, so the answer is always a single word or digit and the
   question can be answered either way. */
function makeChallenge() {
  const useWords = Math.random() < 0.5
  const plus = Math.random() < 0.6

  let a = 2 + Math.floor(Math.random() * 7)
  let b = 1 + Math.floor(Math.random() * 5)

  if (!plus && b > a) {
    const swap = a
    a = b
    b = swap
  }

  const total = plus ? a + b : a - b

  const left = useWords ? WORDS[a] : String(a)
  const right = useWords ? WORDS[b] : String(b)

  return {
    /* the id travels with the lead so a server can pair the answer
       back to the question it was asked */
    id: `q${Date.now().toString(36)}${Math.floor(Math.random() * 1e6).toString(36)}`,
    question: `What is ${left} ${plus ? 'plus' : 'minus'} ${right}?`,
    total
  }
}

/* "7", "seven", " Seven " and "seven." all count. Someone answering a
   sum should not fail on punctuation. */
function matches(input, total) {
  const clean = String(input).trim().toLowerCase().replace(/[.\s]+$/, '')
  if (!clean) return false
  if (clean === String(total)) return true
  return clean === WORDS[total]
}

export function useSecurityCheck(active = true) {
  const [challenge, setChallenge] = useState(null)
  const [answer, setAnswer] = useState('')

  const refresh = useCallback(() => {
    setAnswer('')
    try {
      setChallenge(makeChallenge())
    } catch {
      setChallenge(null)
    }
  }, [])

  /* A dialog asks for its challenge when it opens rather than while it
     sits closed behind the page - the same contract a fetched
     challenge would need, so swapping this for a server-issued one
     later changes nothing in the components. */
  useEffect(() => {
    if (!active) {
      setChallenge(null)
      setAnswer('')
      return
    }
    refresh()
  }, [active, refresh])

  const solved = Boolean(challenge) && matches(answer, challenge.total)

  const payload = useMemo(
    () => (solved ? { id: challenge.id, question: challenge.question, answer: answer.trim() } : null),
    [solved, challenge, answer]
  )

  return {
    /* the control renders as soon as there is a question to show */
    ready: Boolean(challenge),
    question: challenge?.question || '',
    answer,
    setAnswer,
    solved,
    payload,
    /* reserved for the day the challenge is fetched: the component
       already renders a retry when this is set */
    failed: active && !challenge,
    refresh
  }
}

export default useSecurityCheck
