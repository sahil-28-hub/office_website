-- "What you will learn" — the numbered card grid between the syllabus and the
-- tools band.
--
-- Not a duplicate of the syllabus. The syllabus is the running order: modules
-- in sequence, with the weeks they occupy and the skills each one closes with.
-- This band is the prose answer to "what will I actually be able to do" — long
-- paragraphs an editor writes for search, marked up with **keywords**, and it
-- had no representation in the CMS at all.
--
-- The cards themselves are {title, body}, which is what `course_points`
-- already stores, so they become another kind there rather than another table
-- — the fourth to do so, after workflow, why-techcadd and the future-scope
-- pair. The chip row under them reuses the course's existing `tools` list; it
-- is the same set of tools, and asking an editor to type them twice would
-- guarantee the two drift apart.
ALTER TABLE course_points
  MODIFY COLUMN kind ENUM(
    'workflow','why-techcadd','future-horizon','future-trend','what-you-learn'
  ) NOT NULL;

-- The copy around the cards. All nullable: with none of it set the band does
-- not render at all, which is what every course does today.
ALTER TABLE courses
  ADD COLUMN learn_title VARCHAR(200) NULL AFTER future_industries,
  ADD COLUMN learn_intro TEXT         NULL AFTER learn_title,
  ADD COLUMN learn_outro TEXT         NULL AFTER learn_intro;
