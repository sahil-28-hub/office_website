/* ==================================================================
   Graphics, media and office courses.

   Two categories live here:

     Graphics & Media   graphic design, video, animation, UI/UX
     Office & Accounts  Tally, and computer basics with MS Excel

   Same seed shape as every other file in this folder — buildCourse()
   in shared.js fills in the rest. See design.js for the annotated
   original.
================================================================== */

export const GRAPHICS = [
  /* ---------------------------------------------------------------- */
  {
    slug: 'graphic-designing',
    name: 'Graphic Designing Course',
    short: 'Graphic Designing',
    subject: 'Graphic Design',
    category: 'Graphics & Media',
    eyebrow: 'Design that gets printed and posted',
    duration: '4–6 months',
    headline: ['Design it well.', 'Ship it everywhere.'],
    sub: 'Photoshop, Illustrator and InDesign taught around real briefs — logos, social creatives, packaging and print-ready artwork, with the colour and file discipline a press or a client will actually accept.',
    heroArt: '/courses/graphic-designing-hero.webp',
    heroArtAlt: 'Adobe design tools around the phrase Designing with Clarity',
    heroArtSize: [900, 526],
    projectCount: 'Six shipped',
    highlights: [
      'Brand work from brief to final artwork, not filter tutorials',
      'Print and screen colour handled properly — CMYK, RGB, bleed',
      'A portfolio of six pieces you can show at an interview'
    ],
    code: {
      lang: 'txt',
      file: 'artwork-spec.md',
      lines: [
        'Document  A4 · 210 x 297 mm · 3mm bleed',
        'Colour    CMYK · Coated FOGRA39',
        'Images    300 dpi · linked, not embedded',
        'Type      outlined on export',
        'Export    PDF/X-1a · marks on'
      ],
      command: 'Export → PDF/X-1a',
      output: 'press-ready.pdf · 6 pages'
    },
    badges: ['Photoshop', 'Illustrator', 'InDesign', 'Branding'],
    modules: [
      {
        title: 'Design Foundations',
        tag: 'Weeks 1–3',
        description: 'Layout, hierarchy, colour and type — the judgement that separates a designer from someone who owns the software.',
        skills: ['Grid & layout', 'Typography', 'Colour theory', 'Hierarchy', 'Composition', 'Design critique'],
        tech: ['Photoshop', 'Illustrator'],
        outcome: 'A set of layout studies that show deliberate spacing, type and colour choices.'
      },
      {
        title: 'Photoshop — Image & Composite',
        tag: 'Weeks 4–7',
        description: 'Retouching, masking and compositing at production quality, working non-destructively throughout.',
        skills: ['Layers & masks', 'Retouching', 'Compositing', 'Smart objects', 'Colour correction', 'Export for web'],
        tech: ['Photoshop'],
        outcome: 'A composited campaign image built entirely from adjustable, non-destructive layers.'
      },
      {
        title: 'Illustrator — Logo & Vector',
        tag: 'Weeks 8–11',
        description: 'Vector construction, from a logo that scales to icon sets and packaging dielines.',
        skills: ['Pen tool & paths', 'Logo construction', 'Icon systems', 'Pathfinder', 'Type on a path', 'Dielines'],
        tech: ['Illustrator'],
        outcome: 'A logo drawn as clean vectors with a usage sheet and a full icon set.'
      },
      {
        title: 'InDesign, Print & Portfolio',
        tag: 'Weeks 12–16',
        description: 'Multi-page layout, and the pre-press knowledge that stops a job coming back from the printer.',
        skills: ['Master pages', 'Paragraph styles', 'Bleed & trim', 'CMYK & profiles', 'Packaging artwork', 'Portfolio build'],
        tech: ['InDesign', 'PDF/X'],
        outcome: 'A brand book and a press-ready PDF exported to spec, plus a finished portfolio.'
      }
    ],
    technologies: [
      { name: 'Photoshop', note: 'Image & composite' },
      { name: 'Illustrator', note: 'Vector & logo' },
      { name: 'InDesign', note: 'Multi-page layout' },
      { name: 'Figma', note: 'Screen handoff' },
      { name: 'CorelDRAW', note: 'Local press workflows' },
      { name: 'CMYK / RGB', note: 'Colour for print & screen' },
      { name: 'PDF/X', note: 'Press-ready export' },
      { name: 'Typography', note: 'Type systems' }
    ],
    careers: [
      { icon: 'curriculum', title: 'Graphic Designer', text: 'Produce brand, social and print artwork for an in-house team or studio.' },
      { icon: 'stack', title: 'Brand Identity Designer', text: 'Build logos, usage rules and the assets that hold a brand together.' },
      { icon: 'code', title: 'Social Media Designer', text: 'Turn a campaign brief into a month of on-brand creatives.' },
      { icon: 'career', title: 'Print / DTP Operator', text: 'Prepare artwork that goes to press without coming back.' },
      { icon: 'spark', title: 'Freelance Designer', text: 'Take brand and collateral work directly from local businesses.' },
      { icon: 'chart', title: 'Packaging Designer', text: 'Work to dielines and print specification for product packaging.' }
    ],
    featured: {
      title: 'Full Brand Identity Kit',
      kicker: 'Capstone project',
      text: 'A complete identity for one business: logo with construction grid and clear-space rules, a colour and type system, stationery, three packaging faces to a real dieline, a set of social templates, and a brand book exported press-ready to PDF/X.',
      tags: ['Illustrator', 'InDesign', 'Branding', 'Print'],
      difficulty: 'Advanced',
      status: 'Press ready',
      lines: [
        '01  Logo suite         primary · stacked · mark',
        '02  Colour system      CMYK · RGB · HEX',
        '03  Type system        display · text · scale',
        '04  Stationery         card · letterhead · envelope',
        '05  Packaging          3 faces · dieline supplied',
        '06  Brand book         24pp · PDF/X-1a'
      ]
    },
    projects: [
      { title: 'Logo Suite', text: 'One mark drawn in three lockups with a clear-space sheet.', tags: ['Illustrator'], size: 'lg' },
      { title: 'Social Campaign', text: 'Nine on-brand posts built from one template system.', tags: ['Photoshop'], size: 'sm' },
      { title: 'Poster Series', text: 'Three posters exploring one idea through type and image.', tags: ['Layout'], size: 'sm' },
      { title: 'Packaging Face', text: 'Artwork placed onto a supplied dieline with bleed.', tags: ['Print'], size: 'sm' },
      { title: 'Brand Book', text: 'A multi-page document with master pages and styles.', tags: ['InDesign'], size: 'lg' }
    ],
    audience: 'Students after 12th, self-taught designers who want the fundamentals filled in, and small-business owners producing their own material.',
    prerequisite: 'None. The course starts at the interface and the first module is design judgement, not software.'
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'video-editing',
    name: 'Video Editing Course',
    short: 'Video Editing',
    subject: 'Video Editing',
    category: 'Graphics & Media',
    eyebrow: 'Cut, grade and deliver',
    duration: '3–5 months',
    headline: ['Cut it tight.', 'Grade it properly.'],
    sub: 'Premiere Pro and After Effects for real deliverables — reels, ads, YouTube edits and event films, with the sound, colour and export settings each platform actually wants.',
    heroArt: '/courses/video-editing-hero.webp',
    heroArtAlt: 'A camera and editing marks around Shoot, Edit, Deliver, Repeat',
    heroArtSize: [900, 600],
    projectCount: 'Five shipped',
    highlights: [
      'Editing taught as storytelling, not as a list of transitions',
      'Sound and colour treated as part of the edit, not an afterthought',
      'Correct export presets for Reels, Shorts, YouTube and broadcast'
    ],
    code: {
      lang: 'txt',
      file: 'export-preset.md',
      lines: [
        'Sequence  1080x1920 · 30fps · Reel',
        'Codec     H.264 · VBR 2-pass',
        'Bitrate   target 10 · max 12 Mbps',
        'Audio     AAC 320kbps · -14 LUFS',
        'Colour    Rec.709 · limited range'
      ],
      command: 'Queue → Media Encoder',
      output: 'reel_final.mp4 · 00:00:42'
    },
    badges: ['Premiere Pro', 'After Effects', 'Audition', 'DaVinci'],
    modules: [
      {
        title: 'Edit Fundamentals',
        tag: 'Weeks 1–3',
        description: 'Project setup, the timeline, and the cutting decisions that control pace and attention.',
        skills: ['Project & media management', 'Timeline editing', 'Cut types', 'Pacing', 'J & L cuts', 'Rough to fine cut'],
        tech: ['Premiere Pro'],
        outcome: 'A 60-second edit that holds attention through cutting alone, with no effects.'
      },
      {
        title: 'Sound & Colour',
        tag: 'Weeks 4–6',
        description: 'The two things that separate an amateur edit from a professional one, taught properly.',
        skills: ['Dialogue cleanup', 'Music & ducking', 'Loudness targets', 'Primary correction', 'Creative grading', 'Scopes'],
        tech: ['Audition', 'Lumetri', 'DaVinci Resolve'],
        outcome: 'A graded, mixed sequence that meets a -14 LUFS delivery target.'
      },
      {
        title: 'Motion Graphics in After Effects',
        tag: 'Weeks 7–10',
        description: 'Titles, lower thirds and animated graphics that match a brand rather than fight it.',
        skills: ['Keyframes & easing', 'Text animation', 'Shape layers', 'Masking & tracking', 'Essential Graphics', 'Dynamic Link'],
        tech: ['After Effects'],
        outcome: 'A reusable title pack sent back into Premiere as Essential Graphics templates.'
      },
      {
        title: 'Formats, Delivery & Portfolio',
        tag: 'Weeks 11–14',
        description: 'One shoot cut for several platforms, exported correctly for each.',
        skills: ['Vertical vs horizontal', 'Platform specs', 'Subtitles & captions', 'Codecs & bitrates', 'Archiving', 'Showreel'],
        tech: ['Media Encoder'],
        outcome: 'One story delivered as a Reel, a YouTube cut and a 30-second ad, plus a showreel.'
      }
    ],
    technologies: [
      { name: 'Premiere Pro', note: 'Primary NLE' },
      { name: 'After Effects', note: 'Motion graphics' },
      { name: 'Audition', note: 'Sound cleanup & mix' },
      { name: 'DaVinci Resolve', note: 'Colour grading' },
      { name: 'Media Encoder', note: 'Delivery & presets' },
      { name: 'Lumetri', note: 'In-timeline grading' },
      { name: 'Essential Graphics', note: 'Reusable titles' },
      { name: 'Codecs', note: 'H.264 · ProRes' }
    ],
    careers: [
      { icon: 'curriculum', title: 'Video Editor', text: 'Cut content for an agency, a brand or a production house.' },
      { icon: 'stack', title: 'Social Media Editor', text: 'Turn long footage into a month of short vertical content.' },
      { icon: 'code', title: 'Motion Graphics Artist', text: 'Build titles, explainers and animated brand assets.' },
      { icon: 'career', title: 'YouTube Editor', text: 'Edit, grade and deliver on a creator publishing schedule.' },
      { icon: 'spark', title: 'Freelance Editor', text: 'Take wedding, event and ad work directly from clients.' },
      { icon: 'chart', title: 'Content Producer', text: 'Own a shoot end to end, from plan through to delivery.' }
    ],
    featured: {
      title: 'Brand Film, Cut Three Ways',
      kicker: 'Capstone project',
      text: 'One set of supplied footage taken from rushes to delivery: a 90-second brand film, a 30-second ad cut and a 15-second vertical reel — each graded, mixed to loudness spec, titled from one Essential Graphics pack, captioned, and exported to the right preset for its platform.',
      tags: ['Premiere Pro', 'After Effects', 'Grading', 'Delivery'],
      difficulty: 'Advanced',
      status: 'Delivered',
      lines: [
        '01  Brand film      90s  · 1920x1080 · 24fps',
        '02  Ad cut          30s  · 1920x1080 · 24fps',
        '03  Vertical reel   15s  · 1080x1920 · 30fps',
        '04  Title pack      6 templates · .mogrt',
        '05  Mix             -14 LUFS · true peak -1',
        '06  Captions        .srt burned + sidecar'
      ]
    },
    projects: [
      { title: 'Story Cut', text: 'A 60-second edit that works without any effects.', tags: ['Premiere'], size: 'lg' },
      { title: 'Colour Grade', text: 'One scene corrected, then graded to a look.', tags: ['Lumetri'], size: 'sm' },
      { title: 'Title Pack', text: 'Animated lower thirds built as reusable templates.', tags: ['After Effects'], size: 'sm' },
      { title: 'Vertical Reel', text: 'A 15-second cut framed and exported for Reels.', tags: ['Social'], size: 'sm' },
      { title: 'Showreel', text: 'Your own work cut into a 45-second reel.', tags: ['Portfolio'], size: 'lg' }
    ],
    audience: 'Students after 12th, content creators editing their own work, and anyone moving into agency or wedding video.',
    prerequisite: 'None. A laptop that can play 1080p footage is enough to start; the first module covers project setup.'
  },

  /* ---------------------------------------------------------------- */
  {
    slug: '2d-3d-animation',
    name: '2D & 3D Animation Course',
    short: '2D / 3D Animation',
    subject: 'Animation',
    category: 'Graphics & Media',
    eyebrow: 'Movement with weight',
    duration: '6–8 months',
    headline: ['Make it move.', 'Make it believable.'],
    sub: 'The animation principles first, then After Effects for 2D and Blender for 3D — modelling, rigging, lighting and render, finishing with a shot you can put on a reel.',
    projectCount: 'Six shipped',
    highlights: [
      'The twelve principles taught as exercises, not as a slide',
      'Both pipelines covered — 2D motion and full 3D',
      'A finished, rendered and edited shot rather than turntables'
    ],
    code: {
      lang: 'txt',
      file: 'render-settings.md',
      lines: [
        'Engine    Cycles · GPU · 256 samples',
        'Denoise   OpenImageDenoise',
        'Output    1920x1080 · 24fps · PNG seq',
        'Colour    Filmic · Medium High Contrast',
        'Range     1-120 · motion blur on'
      ],
      command: 'Render → Render Animation',
      output: '120 frames · 00:00:05'
    },
    badges: ['After Effects', 'Blender', 'Rigging', 'Rendering'],
    modules: [
      {
        title: 'Principles of Animation',
        tag: 'Weeks 1–4',
        description: 'Timing, spacing, weight and anticipation — drilled as exercises before any complex software.',
        skills: ['Timing & spacing', 'Squash & stretch', 'Anticipation', 'Follow-through', 'Arcs', 'Easing curves'],
        tech: ['After Effects'],
        outcome: 'A bouncing-ball and pendulum set that reads as having real weight.'
      },
      {
        title: '2D Motion in After Effects',
        tag: 'Weeks 5–9',
        description: 'Character and graphic animation in 2D, including rigged puppets and explainer work.',
        skills: ['Shape layers', 'Puppet & DUIK rigs', 'Parenting', 'Graph editor', 'Expressions', 'Explainer workflow'],
        tech: ['After Effects', 'DUIK'],
        outcome: 'A rigged 2D character performing a short walk-and-gesture shot.'
      },
      {
        title: '3D Modelling & Texturing',
        tag: 'Weeks 10–17',
        description: 'Building assets in Blender that are clean enough to rig, unwrap and light.',
        skills: ['Box & poly modelling', 'Topology', 'UV unwrapping', 'PBR materials', 'Sculpting basics', 'Asset prep'],
        tech: ['Blender'],
        outcome: 'A textured prop and a simple character with clean, animatable topology.'
      },
      {
        title: 'Rigging, Lighting & Render',
        tag: 'Weeks 18–24',
        description: 'Armatures and weight painting, then lighting and rendering the finished shot.',
        skills: ['Armatures & IK', 'Weight painting', 'Keyframing in 3D', 'Three-point lighting', 'Cycles / EEVEE', 'Compositing'],
        tech: ['Blender', 'Cycles'],
        outcome: 'A rendered and composited animated shot, cut and delivered as a video file.'
      }
    ],
    technologies: [
      { name: 'Blender', note: '3D model, rig, render' },
      { name: 'After Effects', note: '2D motion & comp' },
      { name: 'DUIK', note: 'Character rigging' },
      { name: 'Cycles', note: 'Path-traced render' },
      { name: 'EEVEE', note: 'Real-time render' },
      { name: 'UV / PBR', note: 'Texturing pipeline' },
      { name: 'Graph Editor', note: 'Timing control' },
      { name: 'Premiere Pro', note: 'Final cut & delivery' }
    ],
    careers: [
      { icon: 'curriculum', title: '2D Animator', text: 'Animate explainers, ads and character work for studios and agencies.' },
      { icon: 'stack', title: '3D Generalist', text: 'Model, texture, light and render assets across a small pipeline.' },
      { icon: 'code', title: 'Motion Designer', text: 'Bring brand and product graphics to life for campaigns.' },
      { icon: 'career', title: 'Rigging Artist', text: 'Build the rigs other animators perform with.' },
      { icon: 'spark', title: 'Freelance Animator', text: 'Take explainer and product animation work directly.' },
      { icon: 'chart', title: 'VFX Assistant', text: 'Support a post house with tracking, cleanup and comp.' }
    ],
    featured: {
      title: 'Animated Short — 2D and 3D',
      kicker: 'Capstone project',
      text: 'A 30-second piece that uses both pipelines: a rigged 2D character sequence animated in After Effects, cut against a modelled, textured and lit 3D environment rendered from Blender, composited together, sound designed, and delivered as a graded film for your reel.',
      tags: ['Blender', 'After Effects', 'Rigging', 'Render'],
      difficulty: 'Advanced',
      status: 'Reel ready',
      lines: [
        '01  Story & boards     30s · 18 shots',
        '02  2D character rig   DUIK · IK arms & legs',
        '03  3D environment     modelled · UV · PBR',
        '04  Lighting           3-point · HDRI fill',
        '05  Render             Cycles · 256 spp',
        '06  Comp & grade       AE · Filmic base'
      ]
    },
    projects: [
      { title: 'Bouncing Ball', text: 'The weight exercise every animator starts with.', tags: ['Principles'], size: 'sm' },
      { title: 'Walk Cycle', text: 'A rigged 2D character walking on the spot.', tags: ['After Effects'], size: 'sm' },
      { title: 'Product Turntable', text: 'A modelled and textured prop lit and rendered.', tags: ['Blender'], size: 'lg' },
      { title: 'Explainer Scene', text: 'A 20-second animated explainer with voiceover.', tags: ['Motion'], size: 'sm' },
      { title: 'Lit 3D Shot', text: 'An environment rendered with correct lighting.', tags: ['Cycles'], size: 'lg' }
    ],
    audience: 'Students after 12th aiming at animation and VFX, designers adding motion, and gamers who want to build rather than play.',
    prerequisite: 'None, though drawing confidence helps in the 2D half. A machine with a dedicated GPU makes the 3D modules far more comfortable.'
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design Course with Figma',
    short: 'UI/UX Design',
    subject: 'UI/UX Design',
    category: 'Graphics & Media',
    eyebrow: 'Research to prototype',
    duration: '4–6 months',
    headline: ['Design the flow.', 'Prove it works.'],
    sub: 'Figma end to end — research, wireframes, design systems, prototypes and usability testing, finishing with a case study and a developer handoff a real team could build from.',
    heroArt: '/courses/ui-ux-design-hero.webp',
    heroArtAlt: 'UI/UX phone mockups and interface components',
    heroArtSize: [900, 506],
    projectCount: 'Five shipped',
    highlights: [
      'Research and testing included, not just screens',
      'A reusable design system with components and variants',
      'Handoff files a developer can actually build from'
    ],
    code: {
      lang: 'txt',
      file: 'design-tokens.json',
      lines: [
        '"color.primary"     : "#2563eb",',
        '"color.surface"     : "#ffffff",',
        '"space.4"           : "16px",',
        '"radius.md"         : "12px",',
        '"type.body.size"    : "16px",',
        '"type.body.leading" : "1.6"'
      ],
      command: 'Figma → Dev Mode',
      output: '42 components · 6 variants'
    },
    badges: ['Figma', 'Prototyping', 'Design Systems', 'Testing'],
    modules: [
      {
        title: 'UX Research & Structure',
        tag: 'Weeks 1–4',
        description: 'Finding out what to build before drawing anything — users, tasks, and the structure that follows.',
        skills: ['User interviews', 'Personas', 'User journeys', 'Information architecture', 'Task flows', 'Competitive audit'],
        tech: ['Figma', 'FigJam'],
        outcome: 'A research summary and a task flow that justifies every screen you are about to design.'
      },
      {
        title: 'Wireframes & Interaction',
        tag: 'Weeks 5–8',
        description: 'Low fidelity first, so structure and flow are settled before visual design starts.',
        skills: ['Low-fi wireframes', 'Layout grids', 'Auto layout', 'Navigation patterns', 'States & edge cases', 'Clickable prototype'],
        tech: ['Figma'],
        outcome: 'A clickable low-fidelity prototype covering the full happy path and its edge cases.'
      },
      {
        title: 'Visual Design & Systems',
        tag: 'Weeks 9–13',
        description: 'Type, colour and spacing turned into a component library rather than one-off screens.',
        skills: ['Type & colour scales', 'Components & variants', 'Design tokens', 'Accessibility & contrast', 'Dark mode', 'Responsive layout'],
        tech: ['Figma', 'Design tokens'],
        outcome: 'A design system with components, variants and tokens driving a set of finished screens.'
      },
      {
        title: 'Testing, Handoff & Case Study',
        tag: 'Weeks 14–18',
        description: 'Proving the design works, then packaging it so a developer and an interviewer both understand it.',
        skills: ['Usability testing', 'Iteration from findings', 'Dev Mode handoff', 'Specs & redlines', 'Case study writing', 'Portfolio'],
        tech: ['Figma Dev Mode'],
        outcome: 'A tested, revised product design with a written case study and a handoff file.'
      }
    ],
    technologies: [
      { name: 'Figma', note: 'Design & prototype' },
      { name: 'FigJam', note: 'Research & mapping' },
      { name: 'Auto Layout', note: 'Responsive structure' },
      { name: 'Components', note: 'Reusable UI' },
      { name: 'Variants', note: 'Component states' },
      { name: 'Dev Mode', note: 'Developer handoff' },
      { name: 'WCAG', note: 'Contrast & accessibility' },
      { name: 'Prototyping', note: 'Flows & transitions' }
    ],
    careers: [
      { icon: 'curriculum', title: 'UI Designer', text: 'Design screens and systems for web and mobile products.' },
      { icon: 'stack', title: 'UX Designer', text: 'Research, structure and test the experience behind the screens.' },
      { icon: 'code', title: 'Product Designer', text: 'Own a feature from problem through to shipped interface.' },
      { icon: 'career', title: 'Design Systems Designer', text: 'Build and maintain the component library a team designs from.' },
      { icon: 'spark', title: 'Freelance UI/UX', text: 'Take app and website design work directly from clients.' },
      { icon: 'chart', title: 'UX Researcher', text: 'Run studies that tell a product team what to build next.' }
    ],
    featured: {
      title: 'End-to-End Product Case Study',
      kicker: 'Capstone project',
      text: 'One product taken the whole way: user interviews and a journey map, task flows, a low-fidelity prototype, a full design system with components and tokens, high-fidelity responsive screens in light and dark, a round of usability testing with the revisions it produced, and a Dev Mode handoff with specs.',
      tags: ['Figma', 'Research', 'Design System', 'Handoff'],
      difficulty: 'Advanced',
      status: 'Portfolio ready',
      lines: [
        '01  Research        6 interviews · journey map',
        '02  Flows           4 tasks · happy + edge',
        '03  Wireframes      18 screens · clickable',
        '04  System          42 components · tokens',
        '05  UI              light + dark · responsive',
        '06  Testing         5 users · 11 fixes'
      ]
    },
    projects: [
      { title: 'App Redesign', text: 'An existing app restructured from its actual problems.', tags: ['UX'], size: 'lg' },
      { title: 'Design System', text: 'Components, variants and tokens in one library.', tags: ['Figma'], size: 'sm' },
      { title: 'Checkout Flow', text: 'A multi-step flow with every error state designed.', tags: ['Flows'], size: 'sm' },
      { title: 'Usability Test', text: 'Five sessions, findings, and the changes they forced.', tags: ['Research'], size: 'sm' },
      { title: 'Case Study', text: 'The whole project written up for a portfolio.', tags: ['Portfolio'], size: 'lg' }
    ],
    audience: 'Students after 12th, graphic designers moving into product, and developers who want to design the screens they build.',
    prerequisite: 'None. Figma is free and browser-based, and the course starts from a blank file.'
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'tally-erp',
    heroArt: '/courses/tally-erp-hero.webp',
    heroArtSize: [1200, 675],
    heroArtAlt: 'The Tally.ERP 9 mark, the accounting package the course is taught in',
    name: 'Tally ERP with GST Course',
    short: 'Tally ERP',
    subject: 'Tally ERP',
    category: 'Office & Accounts',
    eyebrow: 'Books that balance',
    duration: '3–4 months',
    headline: ['Keep the books.', 'File with confidence.'],
    sub: 'Tally Prime from company creation to GST returns — vouchers, inventory, payroll and the reports an accountant is asked for, practised on realistic company data.',
    projectCount: 'Four shipped',
    highlights: [
      'GST handled properly — rates, returns and reconciliation',
      'Practised on a full year of realistic company transactions',
      'The reports an employer expects on day one'
    ],
    code: {
      lang: 'txt',
      file: 'trial-balance.txt',
      lines: [
        'Particulars            Debit      Credit',
        'Sales                              8,40,000',
        'Purchases           5,12,000',
        'GST Payable                          61,200',
        'Sundry Debtors      1,94,500',
        'Closing Stock       1,38,000'
      ],
      command: 'Gateway → Balance Sheet',
      output: 'Difference in books: 0.00'
    },
    badges: ['Tally Prime', 'GST', 'Inventory', 'Payroll'],
    modules: [
      {
        title: 'Accounting Foundations',
        tag: 'Weeks 1–3',
        description: 'The double-entry logic underneath the software, so the entries make sense rather than being memorised.',
        skills: ['Double entry', 'Journal & ledger', 'Trial balance', 'Final accounts', 'Company creation', 'Chart of accounts'],
        tech: ['Tally Prime'],
        outcome: 'A company created from scratch with a correct, complete chart of accounts.'
      },
      {
        title: 'Vouchers & Inventory',
        tag: 'Weeks 4–7',
        description: 'Day-to-day entry — every voucher type, with stock moving alongside the money.',
        skills: ['Sales & purchase', 'Payment & receipt', 'Contra & journal', 'Stock groups & items', 'Godowns', 'Batch & expiry'],
        tech: ['Tally Prime'],
        outcome: 'A full quarter of transactions entered, with stock and cash both reconciling.'
      },
      {
        title: 'GST, TDS & Compliance',
        tag: 'Weeks 8–11',
        description: 'Indian statutory work as it is actually done, including the reconciliation nobody warns you about.',
        skills: ['GST setup & rates', 'GSTR-1 & 3B', 'Input credit', 'E-way bills', 'TDS entries', 'Reconciliation'],
        tech: ['Tally Prime', 'GST portal'],
        outcome: 'GST returns prepared from the books and reconciled against the portal.'
      },
      {
        title: 'Payroll, Reports & Finalisation',
        tag: 'Weeks 12–16',
        description: 'Salaries, statutory deductions, and closing a set of books for the year.',
        skills: ['Payroll masters', 'PF & ESI', 'Salary processing', 'MIS reports', 'Ratio analysis', 'Year-end closing'],
        tech: ['Tally Prime'],
        outcome: 'A payroll run plus a finalised balance sheet and profit-and-loss statement.'
      }
    ],
    technologies: [
      { name: 'Tally Prime', note: 'Core accounting platform' },
      { name: 'GST', note: 'Returns & input credit' },
      { name: 'TDS', note: 'Deduction at source' },
      { name: 'Payroll', note: 'Salary, PF, ESI' },
      { name: 'Inventory', note: 'Stock & godowns' },
      { name: 'MS Excel', note: 'Reporting & reconciliation' },
      { name: 'E-Way Bill', note: 'Movement compliance' },
      { name: 'MIS', note: 'Management reports' }
    ],
    careers: [
      { icon: 'curriculum', title: 'Accounts Executive', text: 'Run day-to-day books for a business or a firm.' },
      { icon: 'stack', title: 'Tally Operator', text: 'Handle voucher entry, stock and reporting on Tally Prime.' },
      { icon: 'code', title: 'GST Practitioner', text: 'Prepare and file returns and handle reconciliation.' },
      { icon: 'career', title: 'Accounts Assistant', text: 'Support a CA firm through filing and audit season.' },
      { icon: 'spark', title: 'Freelance Bookkeeper', text: 'Keep the books for several small businesses.' },
      { icon: 'chart', title: 'Payroll Executive', text: 'Process salaries and statutory deductions monthly.' }
    ],
    featured: {
      title: 'A Full Financial Year, Closed',
      kicker: 'Capstone project',
      text: 'One trading company taken through an entire year: masters and opening balances, twelve months of sales, purchase, payment and receipt vouchers with inventory, quarterly GST returns reconciled against the portal, a payroll run with PF and ESI, and a finalised balance sheet and P&L that balance to zero.',
      tags: ['Tally Prime', 'GST', 'Payroll', 'Finalisation'],
      difficulty: 'Advanced',
      status: 'Books closed',
      lines: [
        '01  Masters          ledgers · stock · GST rates',
        '02  Transactions     12 months · 400+ vouchers',
        '03  GST             GSTR-1 & 3B · 4 quarters',
        '04  Payroll         12 months · PF · ESI',
        '05  Reconciliation  bank · GST portal',
        '06  Finalisation    P&L · balance sheet'
      ]
    },
    projects: [
      { title: 'Company Setup', text: 'Masters, ledgers and opening balances from scratch.', tags: ['Tally'], size: 'sm' },
      { title: 'Voucher Cycle', text: 'A quarter of trading entries with stock.', tags: ['Inventory'], size: 'lg' },
      { title: 'GST Return', text: 'GSTR-1 and 3B prepared from the books.', tags: ['GST'], size: 'sm' },
      { title: 'Payroll Run', text: 'Salary processing with PF and ESI deductions.', tags: ['Payroll'], size: 'sm' },
      { title: 'Final Accounts', text: 'A closed year with P&L and balance sheet.', tags: ['Finalisation'], size: 'lg' }
    ],
    audience: 'Commerce students, B.Com and M.Com graduates, shop and business owners keeping their own books, and anyone targeting an accounts role.',
    prerequisite: 'None, though a commerce background makes the first module quicker. Basic accounting is taught from the beginning.'
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'computer-basics-excel',
    heroArt: '/courses/computer-basics-excel-hero.webp',
    heroArtSize: [1200, 800],
    heroArtAlt:
      'A desktop computer setup with Windows, Excel and Office files open, ' +
      'beside a keyboard and calculator',
    name: 'Computer Basics & MS Excel Course',
    short: 'Computer Basics & Excel',
    subject: 'Computer Basics & MS Excel',
    category: 'Office & Accounts',
    eyebrow: 'From power button to pivot table',
    duration: '2–3 months',
    headline: ['Start from zero.', 'Finish with Excel.'],
    sub: 'One course from the very beginning — Windows, files, typing, email and the internet — through Word and PowerPoint, and on to the Excel formulas, pivot tables and dashboards an office actually runs on.',
    projectCount: 'Four shipped',
    highlights: [
      'Genuinely starts at zero — no assumed computer knowledge',
      'Excel taken well past the basics, to lookups and pivots',
      'Everything practised on real office tasks, not exercises'
    ],
    code: {
      lang: 'txt',
      file: 'formulas.txt',
      lines: [
        '=VLOOKUP(A2, Products!A:D, 3, FALSE)',
        '=XLOOKUP(A2, Products[SKU], Products[Rate])',
        '=SUMIFS(Sales[Amt], Sales[Rep], $F2)',
        '=IFERROR(B2/C2, "-")',
        '=TEXT(D2, "dd-mmm-yyyy")'
      ],
      command: 'Insert → PivotTable',
      output: 'Sales by region · 4 quarters'
    },
    badges: ['Windows', 'MS Word', 'MS Excel', 'PowerPoint'],
    modules: [
      {
        title: 'Computer Fundamentals',
        tag: 'Weeks 1–2',
        description: 'The machine itself — starting it, finding things on it, and not losing your work.',
        skills: ['Windows basics', 'Files & folders', 'Keyboard & typing', 'Installing software', 'Printing & scanning', 'Backups'],
        tech: ['Windows'],
        outcome: 'Confident file management, typing at a usable speed, and work that is backed up.'
      },
      {
        title: 'Internet, Email & Safety',
        tag: 'Weeks 3–4',
        description: 'Using the internet for work, and not getting caught out while doing it.',
        skills: ['Browsing & search', 'Email & attachments', 'Google Drive', 'Online forms', 'Passwords', 'Scam awareness'],
        tech: ['Chrome', 'Gmail', 'Google Drive'],
        outcome: 'A working email and cloud setup, and the judgement to spot a phishing attempt.'
      },
      {
        title: 'MS Word & PowerPoint',
        tag: 'Weeks 5–7',
        description: 'Documents that hold their formatting, and decks that hold an audience.',
        skills: ['Formatting & styles', 'Tables & images', 'Mail merge', 'Slide design', 'Transitions', 'Print & export'],
        tech: ['MS Word', 'PowerPoint'],
        outcome: 'A formatted multi-page report and a presentation delivered from your own slides.'
      },
      {
        title: 'MS Excel — Formulas to Dashboards',
        tag: 'Weeks 8–12',
        description: 'The half of the course that gets people hired, taken well past SUM and AVERAGE.',
        skills: ['Formulas & references', 'IF & nested logic', 'VLOOKUP & XLOOKUP', 'SUMIFS & COUNTIFS', 'Pivot tables', 'Charts & dashboards'],
        tech: ['MS Excel'],
        outcome: 'A working sales dashboard driven by lookups and pivot tables from raw data.'
      }
    ],
    technologies: [
      { name: 'Windows', note: 'Operating system' },
      { name: 'MS Excel', note: 'Formulas & analysis' },
      { name: 'MS Word', note: 'Documents' },
      { name: 'PowerPoint', note: 'Presentations' },
      { name: 'Pivot Tables', note: 'Summarising data' },
      { name: 'XLOOKUP', note: 'Joining data' },
      { name: 'Google Drive', note: 'Cloud storage' },
      { name: 'Gmail', note: 'Professional email' }
    ],
    careers: [
      { icon: 'curriculum', title: 'Data Entry Operator', text: 'Enter and maintain records accurately and quickly.' },
      { icon: 'stack', title: 'Office Assistant', text: 'Handle documents, email and day-to-day office computing.' },
      { icon: 'code', title: 'MIS Executive', text: 'Build the recurring reports a management team runs on.' },
      { icon: 'career', title: 'Back Office Executive', text: 'Process records and reconciliations in Excel.' },
      { icon: 'spark', title: 'Front Desk Executive', text: 'Manage scheduling, correspondence and records.' },
      { icon: 'chart', title: 'Accounts Assistant (track)', text: 'A natural step on into Tally ERP and accounting work.' }
    ],
    featured: {
      title: 'Sales Dashboard from Raw Data',
      kicker: 'Capstone project',
      text: 'A year of messy sales records turned into something a manager would use: data cleaned and structured into tables, product and rep details joined with XLOOKUP, monthly and regional summaries built with pivot tables, and a single-screen dashboard with charts and slicers that updates when new rows are pasted in.',
      tags: ['MS Excel', 'Pivot Tables', 'XLOOKUP', 'Charts'],
      difficulty: 'Intermediate',
      status: 'Dashboard live',
      lines: [
        '01  Raw data      2,400 rows · 12 months',
        '02  Cleaning      duplicates · dates · text',
        '03  Lookups       product · rate · region',
        '04  Pivots        by month · rep · region',
        '05  Charts        trend · share · top 10',
        '06  Dashboard     one screen · slicers'
      ]
    },
    projects: [
      { title: 'Typed Report', text: 'A formatted multi-page document with styles.', tags: ['Word'], size: 'sm' },
      { title: 'Presentation', text: 'A ten-slide deck you present yourself.', tags: ['PowerPoint'], size: 'sm' },
      { title: 'Formula Sheet', text: 'A worksheet solved with lookups and logic.', tags: ['Excel'], size: 'sm' },
      { title: 'Pivot Report', text: 'Raw records summarised into a pivot report.', tags: ['Pivot'], size: 'lg' },
      { title: 'Dashboard', text: 'A one-screen dashboard with charts and slicers.', tags: ['Excel'], size: 'lg' }
    ],
    audience: 'Complete beginners, students after 10th or 12th, homemakers returning to work, and anyone whose job now expects Excel.',
    prerequisite: 'None whatsoever. This is the course that assumes you have never used a computer before.'
  }
]
