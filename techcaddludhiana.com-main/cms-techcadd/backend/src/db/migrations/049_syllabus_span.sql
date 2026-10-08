-- The week range a module covers — "Weeks 1-4".
--
-- The roadmap prints this line under every module title. `hours` cannot hold
-- it: it is a smallint, so an editor typing "Weeks 1-4" got a truncation
-- error, and a number alone does not say where in the course the module sits.
-- The seeds have always carried the phrase as free text; this gives the CMS
-- the same field.
--
-- Nullable: a module without one falls back to its hours, and then to
-- "Module 01", which is what the page did before.
ALTER TABLE course_syllabus
  ADD COLUMN span VARCHAR(60) NULL AFTER hours;
