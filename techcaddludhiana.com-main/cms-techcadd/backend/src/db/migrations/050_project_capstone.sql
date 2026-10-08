-- The capstone project — the wide panel at the top of the Hands-on projects
-- band, above the grid.
--
-- The page has always had one and only the hand-written seeds could fill it:
-- `featured` came from the seed and nothing mapped a CMS project into it, so a
-- course built in the CMS showed the grid with no panel above it however many
-- projects it had.
--
-- Rather than a separate "capstone" record, one project is marked as the one.
-- It is the same thing as the others — a title, a brief, tags, a difficulty —
-- shown larger, and keeping it in the same list means an editor can promote a
-- different project without retyping it.
ALTER TABLE course_projects
  -- Only one per course is used; the first marked one wins. Not a unique
  -- index: an editor mid-edit may briefly mark two, and refusing the save
  -- would lose the rest of their work.
  ADD COLUMN is_capstone TINYINT(1) NOT NULL DEFAULT 0 AFTER difficulty,
  -- Free text beside the difficulty: "Deployed", "In review", "Shipped".
  ADD COLUMN status VARCHAR(40) NULL AFTER is_capstone;
