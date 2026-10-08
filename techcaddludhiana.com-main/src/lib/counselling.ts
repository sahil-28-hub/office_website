/* ==================================================================
   The rules of a virtual counselling booking.

   One file for the dialog and the API, so the picker never offers a
   day the server then refuses. Nothing here touches the DOM or the
   network — it is imported by both a client component and a route
   handler.
================================================================== */

/** The half-hour calls the dialog offers, in display order. The CMS's
    reschedule list mirrors these — see enquiryMeta.ts over there. */
export const COUNSELLING_SLOTS = [
  '10:00 AM – 10:30 AM',
  '11:30 AM – 12:00 PM',
  '2:00 PM – 2:30 PM',
  '4:00 PM – 4:30 PM',
  '6:00 PM – 6:30 PM'
] as const

/** The `formType` a booking is filed under in the CMS's enquiry list. */
export const COUNSELLING_FORM_TYPE = 'Virtual Counselling'

/** How far ahead a counselling call can be booked. */
export const BOOKING_WINDOW_DAYS = 10

/**
 * Today as the centre sees it, "YYYY-MM-DD".
 *
 * In India's timezone rather than the machine's: the server may run in
 * UTC, where "today" is still yesterday until half past five in the
 * morning.
 */
export function todayInIndia(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date())
}

/** The last date the dialog's picker offers. */
export function lastBookableDate(): string {
  const date = new Date(`${todayInIndia()}T00:00:00Z`)
  date.setUTCDate(date.getUTCDate() + BOOKING_WINDOW_DAYS)
  return date.toISOString().slice(0, 10)
}

/** Why a date cannot be booked, or undefined when it can. */
export function bookingDateError(value: string): string | undefined {
  const date = new Date(`${value}T00:00:00Z`)
  /* The round trip catches "2026-02-31", which parses and rolls over
     into March. */
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(value) ||
    Number.isNaN(date.getTime()) ||
    date.toISOString().slice(0, 10) !== value
  ) {
    return 'Pick a date.'
  }
  if (value < todayInIndia()) return 'Pick a date from today onwards.'
  if (value > lastBookableDate()) return `Pick a date within the next ${BOOKING_WINDOW_DAYS} days.`
  /* The centre works Monday to Saturday. */
  if (date.getUTCDay() === 0) return 'We are closed on Sundays — pick another day.'
  return undefined
}
