-- Everything the office needs to run an event page from the CMS.
--
-- 041 gave events a solid core — dates, venue, agenda, speakers, gallery —
-- and left the rest to be written into the body as prose. That works until
-- somebody wants to change the registration button's wording, or add the
-- contact number for the day, and finds the only way is editing a paragraph.
--
-- Nothing here is a fee, a price, a payment or a ticket cost. 042 took the
-- fee column off deliberately and this does not put it back: what an event
-- costs is a conversation, not a field.
--
-- WHY A LIFECYCLE COLUMN SEPARATE FROM `status`
--
-- `status` is editorial — draft, published, scheduled — and answers "may the
-- public see this". `lifecycle` answers "has it happened yet", which is a
-- different question with a different audience. They are not substitutes: an
-- event can be published and completed at the same time.
--
-- It is NULL by default and stays that way for almost every event, because
-- the website already works the answer out from the dates. It exists for the
-- cases the dates get wrong — a workshop postponed indefinitely, one that
-- ran early, one that is running right now across a date boundary. An empty
-- value means "trust the dates", which is the behaviour that was there
-- before and remains the default.

ALTER TABLE events
  -- Alongside `event_type`. The type is the format (workshop, seminar); the
  -- category is the subject (AI & Data, Design), and the two are filtered on
  -- independently.
  ADD COLUMN category          VARCHAR(80)  NULL AFTER event_type,

  -- One YouTube or Vimeo address. Played on the page rather than linked out
  -- — see the site's VideoPlayer.
  ADD COLUMN video_url         VARCHAR(500) NULL AFTER map_url,
  ADD COLUMN video_title       VARCHAR(200) NULL AFTER video_url,

  -- Who the session is for, and what they need first. Prose rather than a
  -- list: the honest answer is usually a sentence with a caveat in it.
  ADD COLUMN who_can_attend    TEXT         NULL AFTER body,
  ADD COLUMN prerequisites     TEXT         NULL AFTER who_can_attend,

  -- The wording on the registration button. Without it every event says the
  -- same thing, and "Register" is wrong for a free open day.
  ADD COLUMN registration_label VARCHAR(80) NULL AFTER registration_url,

  -- Who to ring on the day. Separate from the site-wide contact details,
  -- which are the switchboard rather than the person running this.
  ADD COLUMN contact_name      VARCHAR(120) NULL AFTER registration_label,
  ADD COLUMN contact_phone     VARCHAR(40)  NULL AFTER contact_name,
  ADD COLUMN contact_email     VARCHAR(190) NULL AFTER contact_phone,

  -- Per-event social links, as {platform: url}. JSON rather than a table
  -- because it is a handful of keyed strings with no order and no other
  -- fields — the same shape and the same reasoning as `settings.social`.
  ADD COLUMN social            JSON         NULL AFTER contact_email,

  -- See the note above: NULL means "work it out from the dates".
  ADD COLUMN lifecycle         VARCHAR(20)  NULL AFTER status;

-- Questions people ask before signing up. Its own table rather than a reuse
-- of `faqs`: those are the site-wide admissions questions and are shown on
-- /faq, and an event's are about that one day.
CREATE TABLE IF NOT EXISTS event_faqs (
  id       CHAR(36)     NOT NULL PRIMARY KEY,
  event_id CHAR(36)     NOT NULL,
  question VARCHAR(300) NOT NULL,
  answer   TEXT         NOT NULL,
  position INT          NOT NULL DEFAULT 0,
  KEY idx_event_faqs_event (event_id, position),
  CONSTRAINT fk_event_faqs_event FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listing pages filter on these two together, and both are low-cardinality
-- strings, so one index serves the catalogue query.
CREATE INDEX idx_events_category ON events (category, starts_on);
