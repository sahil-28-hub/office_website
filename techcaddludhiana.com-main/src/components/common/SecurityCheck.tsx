'use client'

import './SecurityCheck.css'

/* ==================================================================
   The same control on every form that takes a lead.

   Styled once, here, so the course enquiry panel and the brochure
   dialog cannot drift apart. Two looks:

     default   a plain field, for the compact dialog
     panel     boxed and tinted, for the large enquiry form

   `ground` is separate from `variant` because they vary independently:
   the boxed panel appears on the dark enquiry band AND on the white
   contact card. Every colour is a CSS variable keyed off this — see
   SecurityCheck.css.

   The question comes from useSecurityCheck. It is a real <label> over
   a real <input>, so it is answerable with a keyboard and readable by
   a screen reader - which a drawn captcha is not.
================================================================== */
export default function SecurityCheck({
  id,
  variant = 'default',
  ground = 'dark',
  security,
  inputRef,
  error,
  onClearError
}) {
  const { question, ready, solved, answer, setAnswer, refresh } = security

  if (!ready) {
    return (
      <div className={`seccheck seccheck--${variant} seccheck--on-${ground} is-waiting`}>
        <p className="seccheck-wait">
          Loading the security check…{' '}
          <button type="button" onClick={refresh}>
            Try again
          </button>
        </p>
      </div>
    )
  }

  return (
    <div
      className={`seccheck seccheck--${variant} seccheck--on-${ground}${solved ? ' is-solved' : ''}`}
    >
      <label htmlFor={id}>{question}</label>

      <div className="seccheck-row">
        <input
          id={id}
          ref={inputRef}
          type="text"
          inputMode="text"
          autoComplete="off"
          maxLength={12}
          placeholder="Your answer"
          value={answer}
          onChange={(event) => {
            setAnswer(event.target.value)
            onClearError?.()
          }}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : `${id}-note`}
        />

        {/* a question nobody can answer should be replaceable rather
            than a dead end */}
        <button type="button" className="seccheck-new" onClick={refresh}>
          New question
        </button>
      </div>

      {error ? (
        <span className="seccheck-error" id={`${id}-error`}>
          {error}
        </span>
      ) : (
        <span className="seccheck-note" id={`${id}-note`}>
          A one-line sum, so we know you are a person. Digits or words both work.
        </span>
      )}
    </div>
  )
}
