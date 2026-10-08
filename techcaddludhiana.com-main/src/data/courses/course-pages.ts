/* ==================================================================
   The Courses dropdown pages.

   Twenty-six courses appear in the site's Courses menu and every one
   of them is on the long page layout (`layout: 'full'` — see
   CoursePage.jsx), which mounts the toolchain, certification,
   projects, career-ladder and salary sections as well as the standard
   ones.

   Twenty-four of them are here, split across four files that mirror
   the four columns of the dropdown — and, not coincidentally, the four
   seed files they overlay. The other two, artificial-intelligence and
   machine-learning, are also in the AI menu and are handled in
   ./ai-pages.js so that no course is defined twice.

   Almost every course in this map already carried long-form Ludhiana
   copy in its own -copy.js file, so most entries add only three
   things: the layout flag, the search metadata, and the salary table
   with its five questions. SEO is the exception — it had no copy file
   at all, so its entry in ./pages-marketing.js is a full page rewrite.

   Merged over the seeds in ./index.js, together with AI_PAGES.

   Copy conventions, inherited from the -copy.js files here:
     · terms the page targets are marked **like this**; RichText
       renders them inside <strong>. See RichText.jsx.
     · nothing guarantees employment, anywhere, in any wording.
     · salary bands are ranges with a disclaimer rendered beneath them,
       drawn from what students report and what the placement cell
       sees. They are an indication and are labelled as one.
     · where the local market for a skill is thin — deep learning,
       cloud, agents — the page says so rather than implying a Ludhiana
       job market that does not exist yet.
================================================================== */

import { PAGES_PROGRAMMING } from './pages-programming'
import { PAGES_DATA } from './pages-data'
import { PAGES_MARKETING } from './pages-marketing'
import { PAGES_CYBER } from './pages-cyber'

export const COURSE_PAGES = {
  ...PAGES_PROGRAMMING,
  ...PAGES_DATA,
  ...PAGES_MARKETING,
  ...PAGES_CYBER
}
