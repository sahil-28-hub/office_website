import {
  siJavascript, siTypescript, siGo, siRust, siKotlin, siPhp, siCplusplus,
  siNodedotjs, siAngular, siVuedotjs, siNextdotjs, siDjango, siSpringboot, siLaravel, siFlutter, siExpress,
  siKeras, siScikitlearn, siPandas, siNumpy, siOpencv, siHuggingface, siJupyter,
  siKalilinux, siWireshark, siBurpsuite, siMetasploit, siSplunk, siSnort, siOwasp,
  siMysql, siPostgresql, siRedis, siSqlite, siFirebase, siApachecassandra, siMariadb,
  siJenkins, siGithub, siTerraform, siAnsible, siPrometheus, siGrafana, siNginx,
  siGooglecloud, siDigitalocean, siCloudflare, siVercel, siNetlify, siAlibabacloud,
  siWordpress, siShopify, siGoogleads, siGoogleanalytics, siGooglesearchconsole, siSemrush, siMailchimp, siMeta
} from 'simple-icons'
import { HERO_ICONS, ico, mono } from './heroIcons'

/* Every surface these marks render on is light — the Universe ribbon's
   stage and the white cards in Capabilities — so each brand keeps its
   own official hex and no override is needed.

   They used to be lightened to off-white for a dark stage, which
   quietly made GitHub / Next.js / Vercel / Express / Splunk invisible
   on the white Capabilities cards. If a surface ever goes dark again,
   put a light chip *behind* the mark rather than recolouring the mark
   itself — that keeps one icon set working on both. */

/* brands simple-icons won't ship at all — Oracle, Microsoft, Amazon,
   IBM and OpenAI restrict logo redistribution, and Java's coffee-cup
   mark was pulled after a trademark complaint. A lettered chip stands
   in instead, in a tone dark enough to read on a light surface. */

const TOOL_ICONS = {
  /* the ten the hero already ships — defined in heroIcons.js so the
     entry chunk carries only those, not this whole map */
  ...HERO_ICONS,

  // Programming
  JavaScript: ico(siJavascript),
  TypeScript: ico(siTypescript),
  Java: mono('JV', '#e76f00'),
  Go: ico(siGo),
  Rust: ico(siRust),
  Kotlin: ico(siKotlin),
  PHP: ico(siPhp),
  'C++': ico(siCplusplus),
  'C#': mono('C#', '#68217a'),

  // Frameworks
  'Node.js': ico(siNodedotjs),
  Angular: ico(siAngular),
  'Vue.js': ico(siVuedotjs),
  'Next.js': ico(siNextdotjs),
  Django: ico(siDjango),
  'Spring Boot': ico(siSpringboot),
  Laravel: ico(siLaravel),
  Flutter: ico(siFlutter),
  Express: ico(siExpress),

  // AI & ML
  Keras: ico(siKeras),
  'Scikit-learn': ico(siScikitlearn),
  Pandas: ico(siPandas),
  NumPy: ico(siNumpy),
  OpenCV: ico(siOpencv),
  'Hugging Face': ico(siHuggingface),
  OpenAI: mono('AI', '#10a37f'),
  Jupyter: ico(siJupyter),

  // Cyber Security
  'Kali Linux': ico(siKalilinux),
  Wireshark: ico(siWireshark),
  Nmap: mono('NM', '#1f6fb2'),
  'Burp Suite': ico(siBurpsuite),
  Metasploit: ico(siMetasploit),
  Splunk: ico(siSplunk),
  Nessus: mono('NS', '#00699d'),
  Snort: ico(siSnort),
  OWASP: ico(siOwasp),

  // Databases
  MySQL: ico(siMysql),
  PostgreSQL: ico(siPostgresql),
  Redis: ico(siRedis),
  SQLite: ico(siSqlite),
  'Oracle DB': mono('OR', '#c74634'),
  'SQL Server': mono('MS', '#a4373a'),
  Firebase: ico(siFirebase),
  Cassandra: ico(siApachecassandra),
  MariaDB: ico(siMariadb),

  // DevOps
  Jenkins: ico(siJenkins),
  GitHub: ico(siGithub),
  Terraform: ico(siTerraform),
  Ansible: ico(siAnsible),
  Prometheus: ico(siPrometheus),
  Grafana: ico(siGrafana),
  Nginx: ico(siNginx),

  // Cloud
  AWS: mono('AWS', '#ed7100'),
  Azure: mono('AZ', '#0078d4'),
  'Google Cloud': ico(siGooglecloud),
  DigitalOcean: ico(siDigitalocean),
  Heroku: mono('HK', '#430098'),
  Cloudflare: ico(siCloudflare),
  Vercel: ico(siVercel),
  Netlify: ico(siNetlify),
  'IBM Cloud': mono('IBM', '#0f62fe'),
  'Alibaba Cloud': ico(siAlibabacloud),

  // Digital Marketing
  WordPress: ico(siWordpress),
  Shopify: ico(siShopify),
  'Google Ads': ico(siGoogleads),
  'Google Analytics': ico(siGoogleanalytics),
  'Google Search Console': ico(siGooglesearchconsole),
  Semrush: ico(siSemrush),
  Mailchimp: ico(siMailchimp),
  'Meta Ads': ico(siMeta)
}

/* Does this tool have a real vector mark, or only a lettered chip?

   The course hero rasterises a brand path into a field of dots, and a
   three-letter chip has no path to rasterise. Anything mono() stands
   in for - Microsoft, Adobe, Autodesk, Oracle, AWS - answers false
   here, and the hero falls back to the mortarboard rather than drawing
   a blank rectangle beside the headline. */
export function hasBrandMark(name) {
  return Boolean(TOOL_ICONS[name]?.path)
}

/* nothing should ever render blank: nameless/unindexed tools fall
   back to auto-generated initials in a neutral slate tone. */
export function getToolIcon(name) {
  if (TOOL_ICONS[name]) return TOOL_ICONS[name]
  const letters = name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()
  return mono(letters, '#5b6482')
}
