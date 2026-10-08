-- The experience label under a role in the salary table — "Entry",
-- "Entry to mid", "Mid (2-4 yrs)".
--
-- The table on the page is role x market: three ranges across, and the level
-- printed small under the role name. The three ranges are the fields the CMS
-- already had (salary_start, salary_senior, market); the level is the one
-- piece it had nowhere to put, so a CMS course's table could not say who each
-- range was for.
ALTER TABLE course_careers
  ADD COLUMN level VARCHAR(40) NULL AFTER role;
