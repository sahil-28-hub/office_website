-- "The case for it" — the band between the audience groups and the syllabus.
--
-- The band has always been on the page, generated entirely from the course's
-- name: a heading, a paragraph, one headline number and four numbered points
-- arguing that the months are worth spending. Every course therefore made the
-- same argument in the same words, which is the least convincing place on the
-- page for that to be true.
--
-- The four numbered points already had a home. `course_points` has carried a
-- 'workflow' kind since 031 — an editable, saved, returned list of
-- {title, body} that nothing on the website ever read. It is the same shape as
-- the points in this band, so it is reused rather than duplicated; only the
-- label in the editor changes.
--
-- What had no home is the copy around them, which is what this adds. All
-- nullable: a course with none of it set keeps the generated band exactly as
-- it reads today, so nothing has to be backfilled.
ALTER TABLE courses
  ADD COLUMN value_title      VARCHAR(200) NULL AFTER audience_intro,
  ADD COLUMN value_text       TEXT         NULL AFTER value_title,
  -- The headline figure, split so the page can set the number apart from the
  -- words: "12+" / "Practical learning areas" / "from fundamentals to delivery".
  ADD COLUMN value_stat_num   VARCHAR(24)  NULL AFTER value_text,
  ADD COLUMN value_stat_label VARCHAR(80)  NULL AFTER value_stat_num,
  ADD COLUMN value_stat_sub   VARCHAR(160) NULL AFTER value_stat_label;
