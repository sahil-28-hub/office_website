import { coursePath } from './courses/path'
/* ==================================================================
   Tool → course.

   The Capabilities section on the home page shows six racks of
   technology logos. Every one of them is something we teach, so every
   one should be a way in: the logo links to the course that covers it
   rather than being decoration.

   Only slugs that exist in the registry appear here — a name with no
   entry renders as plain text, so a typo degrades to the old
   behaviour instead of a dead link. There is a build-time check for
   this in the course-links audit (scripts/audit-links.mjs).

   Where a tool is taught on more than one course, the entry points at
   the one it is most central to: PyTorch to Deep Learning rather than
   the broader AI course, Figma to UI/UX rather than Graphic Design.
================================================================== */

const TOOL_COURSE = {
  /* ---- AI & machine learning ---- */
  TensorFlow: 'machine-learning',
  PyTorch: 'deep-learning',
  Keras: 'deep-learning',
  'Scikit-learn': 'machine-learning',
  OpenAI: 'generative-ai',
  'Hugging Face': 'generative-ai',
  Pandas: 'data-science',
  Jupyter: 'data-science',
  NumPy: 'data-science',

  /* ---- full-stack ---- */
  React: 'mern-stack',
  'Node.js': 'mern-stack',
  Express: 'mern-stack',
  MongoDB: 'mern-stack',
  JavaScript: 'web-development',
  TypeScript: 'mean-stack',
  'Next.js': 'web-development',

  /* ---- data ---- */
  MySQL: 'data-analytics',
  PostgreSQL: 'data-analytics',
  Firebase: 'web-development',
  'Google Analytics': 'digital-marketing',
  'Google Search Console': 'seo',

  /* ---- cloud & devops ---- */
  AWS: 'cloud-computing',
  Azure: 'cloud-computing',
  'Google Cloud': 'cloud-computing',
  Docker: 'cloud-computing',
  Kubernetes: 'cloud-computing',
  Terraform: 'cloud-computing',
  Nginx: 'cloud-computing',
  GitHub: 'web-development',

  /* ---- cybersecurity ---- */
  Linux: 'linux',
  'Kali Linux': 'ethical-hacking',
  Wireshark: 'ethical-hacking',
  'Burp Suite': 'ethical-hacking',
  Metasploit: 'ethical-hacking',
  Nmap: 'ethical-hacking',
  OWASP: 'cybersecurity',
  Splunk: 'cybersecurity',

  /* ---- marketing & design ---- */
  WordPress: 'wordpress',
  Shopify: 'shopify',
  'Google Ads': 'google-ads',
  'Meta Ads': 'social-media-marketing',
  Mailchimp: 'digital-marketing',
  Semrush: 'seo',
  Figma: 'ui-ux-design'
}

/** The course path for a tool name, or null when it maps to nothing. */
export function toolCoursePath(name) {
  const slug = TOOL_COURSE[name]
  return slug ? coursePath(slug) : null
}

export { TOOL_COURSE }
