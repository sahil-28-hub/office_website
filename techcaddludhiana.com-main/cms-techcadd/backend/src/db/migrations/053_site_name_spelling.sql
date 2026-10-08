-- The brand is spelled "techcadd", lower-case, everywhere on the site.
--
-- 009 seeded the settings row with "TechCADD", which is a spelling the
-- website uses nowhere else — and the website's copyright line printed it
-- verbatim as "TechCADD computer education".
--
-- Only the seeded value is corrected. A site name an editor has deliberately
-- typed is theirs to keep, so anything other than the exact default is left
-- alone.
UPDATE settings
   SET site_name = 'techcadd'
 WHERE site_name = 'TechCADD';
