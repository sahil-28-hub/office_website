-- "Future scope" — the band after Why techcadd.
--
-- The last section on the course page with no CMS representation at all: no
-- column, no API field, no editor. Every course's answer to "where does this
-- go next" was generated from its name and its first two career roles, so all
-- fifty said the same thing in the same words.
--
-- The band has two halves and a footer: a timeline (Year 0-1 / 2-4 / 5+), a
-- set of trend cards, and a line of industry chips.
--
-- The timeline and the cards are both {title, body, icon} lists, which is what
-- `course_points` already stores — so they become two more kinds there rather
-- than two new tables. The only thing that table could not hold is the
-- timeline's period marker ("Year 0-1"), which is what `label` adds. It is
-- nullable and unused by the two existing kinds.
ALTER TABLE course_points
  MODIFY COLUMN kind ENUM('workflow','why-techcadd','future-horizon','future-trend') NOT NULL,
  ADD COLUMN label VARCHAR(60) NULL AFTER kind;

-- The copy around them. `future_industries` is a plain list of names for the
-- chip row, stored as JSON like `careers` and `tools` above it: it is edited
-- as a whole by a tag input, never reordered row by row.
ALTER TABLE courses
  ADD COLUMN future_title           VARCHAR(200) NULL AFTER value_stat_sub,
  ADD COLUMN future_lead            TEXT         NULL AFTER future_title,
  ADD COLUMN future_industries_note VARCHAR(200) NULL AFTER future_lead,
  ADD COLUMN future_industries      JSON         NULL AFTER future_industries_note;
