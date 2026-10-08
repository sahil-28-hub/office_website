/* Civil & mechanical design track. See ./shared.js for the factory. */

/* Three of the four courses here carry long-form editorial copy the
   fourth does not. Each lives in its own file because any one of them
   is longer than all four seeds together — see ./autocad-copy.js,
   ./solidworks-copy.js and ./3ds-max-copy.js */
import {
  AUTOCAD_OVERVIEW,
  AUTOCAD_JOINERS,
  AUTOCAD_NARRATIVE,
  AUTOCAD_TESTIMONIALS,
  AUTOCAD_FAQS
} from './autocad-copy'

import {
  SOLIDWORKS_OVERVIEW,
  SOLIDWORKS_JOINERS,
  SOLIDWORKS_NARRATIVE,
  SOLIDWORKS_TESTIMONIALS,
  SOLIDWORKS_FAQS
} from './solidworks-copy'

import {
  MAX_OVERVIEW,
  MAX_JOINERS,
  MAX_NARRATIVE,
  MAX_TESTIMONIALS,
  MAX_FAQS
} from './3ds-max-copy'

export const DESIGN = [
  {
    slug: 'autocad',
    name: 'AutoCAD Course',
    short: 'AutoCAD',
    subject: 'AutoCAD',
    category: 'Civil / Mechanical',
    eyebrow: 'Drafting to industry standard',
    /* The Civil & Mechanical program runs 6 months. The page copy and
       its FAQ both state that, and this field feeds the hero, the
       course index and the enquiry metadata — so it has to agree. */
    duration: '6 months',
    headline: ['Draw it precisely.', 'Print it correctly.'],
    sub: '2D drafting and 3D modelling in AutoCAD — layers, dimensioning, plotting and the drawing standards a civil or mechanical office will actually accept.',
    heroArt: '/courses/autocad-hero.webp',
    heroArtAlt: 'The AutoCAD logo and wordmark',
    heroArtSize: [900, 506],
    projectCount: 'Four shipped',
    highlights: [
      'Drawing standards taught alongside the commands',
      'Both civil and mechanical drafting covered',
      'Plot-ready sheets, not just screen drawings'
    ],
    code: {
      lang: 'txt',
      file: 'standards.md',
      lines: [
        'Layers    A-WALL · A-DOOR · A-DIMS · A-TEXT',
        'Units     mm, precision 0.00',
        'Text      2.5mm at 1:100',
        'Plot      A1 · monochrome.ctb',
        'Title     block per company template'
      ],
      command: 'PLOT',
      output: 'Sheet 1 of 6 · A1 · ready'
    },
    badges: ['2D', '3D', 'Plotting', 'Standards'],
    modules: [
      {
        title: 'Interface & Drawing Setup',
        tag: 'Weeks 1–2',
        description: 'Units, limits, layers and templates — the setup that decides whether a drawing stays manageable.',
        skills: ['Interface & commands', 'Units & limits', 'Layer standards', 'Templates', 'Object snaps', 'Coordinate entry'],
        tech: ['AutoCAD', 'Layer standards'],
        outcome: 'A company-style template with layers, text styles and a title block.'
      },
      {
        title: '2D Drafting & Editing',
        tag: 'Weeks 3–5',
        description: 'The drawing and modification commands that make up most professional drafting work.',
        skills: ['Draw commands', 'Modify commands', 'Arrays & blocks', 'Hatching', 'Polylines', 'Xrefs'],
        tech: ['AutoCAD'],
        outcome: 'A complete floor plan drawn with blocks, hatching and correct layer discipline.'
      },
      {
        title: 'Dimensioning, Annotation & Plotting',
        tag: 'Weeks 6–8',
        description: 'Making a drawing readable and printable at the right scale — where most students lose marks.',
        skills: ['Dimension styles', 'Annotative scaling', 'Text & leaders', 'Layouts & viewports', 'Plot styles', 'Sheet sets'],
        tech: ['AutoCAD', 'CTB plot styles'],
        outcome: 'A multi-sheet drawing set plotted to PDF at correct scale with a title block.'
      },
      {
        title: '3D Modelling & Presentation',
        tag: 'Weeks 9–12',
        description: 'Solids, surfaces and rendering, plus generating 2D views from a 3D model.',
        skills: ['3D solids', 'Boolean operations', 'Surfaces', 'Materials & rendering', 'Section views', 'Model to layout'],
        tech: ['AutoCAD 3D', 'Rendering'],
        outcome: 'A 3D model with rendered views and 2D drawings generated directly from it.'
      }
    ],
    technologies: [
      { name: 'AutoCAD', note: 'Core drafting platform' },
      { name: 'Layouts', note: 'Sheets & viewports' },
      { name: 'Blocks', note: 'Reusable components' },
      { name: 'Xrefs', note: 'Referenced drawings' },
      { name: 'Plot Styles', note: 'Print control' },
      { name: 'Sheet Sets', note: 'Drawing set management' },
      { name: 'DWG/DXF', note: 'Industry file formats' },
      { name: 'AutoCAD 3D', note: 'Solid modelling' }
    ],
    careers: [
      { icon: 'curriculum', title: 'CAD Draftsman', text: 'Produce drawing sets for construction and manufacturing.' },
      { icon: 'stack', title: 'Civil Draftsman', text: 'Draft plans, sections and site layouts for civil projects.' },
      { icon: 'code', title: 'Mechanical Draftsman', text: 'Produce part and assembly drawings with correct tolerancing.' },
      { icon: 'career', title: 'Design Assistant', text: 'Support an engineering team with drawing production.' },
      { icon: 'spark', title: 'Freelance Draftsman', text: 'Take drafting work for architects and contractors.' },
      { icon: 'chart', title: 'BIM Technician (track)', text: 'Progress from 2D drafting into Revit and BIM workflows.' }
    ],
    featured: {
      title: 'Complete Building Drawing Set',
      kicker: 'Capstone project',
      text: 'A full construction drawing set for a two-storey building: site plan, floor plans, elevations, sections and detail drawings — layered to standard, annotatively dimensioned, arranged across multiple layouts with a title block, and plotted to a scaled PDF set ready for submission.',
      tags: ['AutoCAD', 'Layouts', 'Standards', 'Plotting'],
      difficulty: 'Advanced',
      status: 'Submission ready',
      lines: [
        'Sheet 01   Site plan            1:200',
        'Sheet 02   Ground floor plan    1:100',
        'Sheet 03   First floor plan     1:100',
        'Sheet 04   Elevations (4)       1:100',
        'Sheet 05   Sections A-A, B-B    1:50',
        'Sheet 06   Details              1:20'
      ]
    },
    projects: [
      { title: 'Floor Plan', text: 'A residential plan with blocks and hatching.', tags: ['2D'], size: 'sm' },
      { title: 'Machine Part', text: 'Orthographic views with correct dimensioning.', tags: ['Mechanical'], size: 'lg' },
      { title: 'Site Layout', text: 'A civil site plan with levels and annotation.', tags: ['Civil'], size: 'sm' },
      { title: 'Assembly Drawing', text: 'Exploded views with a parts list.', tags: ['Blocks'], size: 'sm' },
      { title: '3D Model', text: 'A solid model with rendered presentation views.', tags: ['3D'], size: 'lg' }
    ],
    audience:
      '12th-pass students from any stream, diploma holders in Civil, Mechanical or Electrical, B.Tech/B.E. graduates, architecture students, job seekers and career switchers, working site supervisors and contractors, and freelancers drafting from home.',
    prerequisite:
      'None. 10+2 in any stream is the only formal requirement. Basic computer familiarity — typing and file handling — helps but is not mandatory, and the first module covers everything from the interface up.',

    /* Written as a local landing page. Its copy names Ludhiana
       throughout, which is also the default centre, so nothing here
       has to override `city`. */
    overviewTitle: AUTOCAD_OVERVIEW.title,
    overviewLead: AUTOCAD_OVERVIEW.lead,
    overviewBody: AUTOCAD_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: AUTOCAD_JOINERS,
    narrative: AUTOCAD_NARRATIVE,

    /* UNVERIFIED quotes carrying named placement outcomes. Read the
       banner above AUTOCAD_TESTIMONIALS in ./autocad-copy.js before
       this page goes live. Deleting this one line falls back to the
       generic quotes in shared.js. */
    testimonials: AUTOCAD_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: AUTOCAD_FAQS,

    enquireEyebrow: 'Enquire now',
    enquireTitle: 'Start your AutoCAD career in Ludhiana',
    enquireText:
      'Send this form and a counsellor calls you back about the AutoCAD Civil & Mechanical course — batch timings, the 6-month structure, fees, and what the project work involves.'
  },

  {
    slug: 'solidworks',
    name: 'SolidWorks Course',
    short: 'SolidWorks',
    subject: 'SolidWorks',
    category: 'Civil / Mechanical',
    eyebrow: 'Parametric mechanical design',
    /* The page copy and its FAQ both state 6 months, and this field
       feeds the hero, the course index and the enquiry metadata — so
       it has to agree. */
    duration: '6 months',
    headline: ['Model the part.', 'Prove it works.'],
    sub: 'Parametric part modelling, assemblies, drawings, sheet metal and simulation — the mechanical design workflow used across manufacturing and product engineering.',
    heroArt: '/courses/solidworks-hero.webp',
    heroArtAlt: 'SolidWorks parts, assemblies and a machining setup',
    heroArtSize: [900, 600],
    projectCount: 'Four shipped',
    highlights: [
      'Design intent taught, not just feature clicking',
      'Assemblies with real mates and motion',
      'Simulation to validate before manufacture'
    ],
    code: {
      lang: 'txt',
      file: 'feature-tree.md',
      lines: [
        '▸ Front Plane',
        '  ▸ Sketch1 — fully defined',
        '    ▸ Boss-Extrude1   40mm',
        '    ▸ Fillet1         R3',
        '    ▸ LPattern1       6 × 25mm',
        '  ▸ Sketch2 → Cut-Extrude1  Through All'
      ],
      command: 'Rebuild',
      output: 'Model rebuilt · 0 errors'
    },
    badges: ['Parts', 'Assemblies', 'Sheet metal', 'FEA'],
    modules: [
      {
        title: 'Sketching & Design Intent',
        tag: 'Weeks 1–2',
        description: 'Fully defined sketches and relations — the habit that makes a model editable later.',
        skills: ['Sketch entities', 'Relations & constraints', 'Fully defined sketches', 'Design intent', 'Equations', 'Reference geometry'],
        tech: ['SolidWorks'],
        outcome: 'A parametric part that updates correctly when a driving dimension changes.'
      },
      {
        title: 'Part Modelling',
        tag: 'Weeks 3–5',
        description: 'The feature set that builds real components, in the order a designer would use them.',
        skills: ['Extrude & revolve', 'Sweep & loft', 'Fillets & chamfers', 'Patterns', 'Shell & rib', 'Configurations'],
        tech: ['SolidWorks'],
        outcome: 'A complex multi-feature component with configurations for size variants.'
      },
      {
        title: 'Assemblies & Motion',
        tag: 'Weeks 6–8',
        description: 'Putting parts together, checking they fit, and seeing them move.',
        skills: ['Mates', 'Sub-assemblies', 'Interference detection', 'Motion study', 'Exploded views', 'Bill of materials'],
        tech: ['SolidWorks Assembly', 'Motion Study'],
        outcome: 'A working assembly with verified clearances and an animated motion study.'
      },
      {
        title: 'Drawings, Sheet Metal & Simulation',
        tag: 'Weeks 9–12',
        description: 'Manufacturing output and a first check that the design will hold.',
        skills: ['Drawing views', 'GD&T basics', 'Sheet metal features', 'Flat patterns', 'Static simulation', 'Design validation'],
        tech: ['SolidWorks Drawings', 'Sheet Metal', 'Simulation'],
        outcome: 'A manufacturing drawing set plus a stress analysis report on your capstone part.'
      }
    ],
    technologies: [
      { name: 'SolidWorks', note: 'Parametric modelling' },
      { name: 'Assemblies', note: 'Mates & motion' },
      { name: 'Drawings', note: 'Manufacturing output' },
      { name: 'Sheet Metal', note: 'Fabrication design' },
      { name: 'Simulation', note: 'Stress analysis' },
      { name: 'GD&T', note: 'Tolerance specification' },
      { name: 'Configurations', note: 'Design variants' },
      { name: 'STEP/IGES', note: 'Interchange formats' }
    ],
    careers: [
      { icon: 'stack', title: 'Mechanical Design Engineer', text: 'Design components and assemblies for manufacture.' },
      { icon: 'curriculum', title: 'CAD Engineer', text: 'Produce and maintain the 3D model library for a product line.' },
      { icon: 'code', title: 'Product Design Engineer', text: 'Take a product from concept model to manufacturing drawings.' },
      { icon: 'chart', title: 'Design Analyst', text: 'Validate designs with simulation before tooling is cut.' },
      { icon: 'career', title: 'Manufacturing Engineer', text: 'Bridge design and production with fabrication-ready models.' },
      { icon: 'spark', title: 'Freelance CAD Designer', text: 'Take modelling work for product and machine builders.' }
    ],
    featured: {
      title: 'Machine Assembly Design',
      kicker: 'Capstone project',
      text: 'A complete mechanical assembly designed from a specification: parametric parts with configurations, a fully mated assembly with interference checks, a motion study, sheet metal enclosure with flat patterns, a static simulation report, and a manufacturing drawing set with GD&T and a bill of materials.',
      tags: ['SolidWorks', 'Assembly', 'Simulation', 'GD&T'],
      difficulty: 'Advanced',
      status: 'Manufacturing ready',
      lines: [
        'Load case      420 N vertical',
        'Material       AISI 1020 steel',
        '',
        'Max stress     186 MPa',
        'Yield          350 MPa',
        'Factor safety  1.88   ✓ pass',
        'Max deflection 0.42 mm'
      ]
    },
    projects: [
      { title: 'Parametric Bracket', text: 'A part that resizes correctly from one dimension.', tags: ['Parts'], size: 'sm' },
      { title: 'Gearbox Assembly', text: 'Mated components with a motion study.', tags: ['Assembly'], size: 'lg' },
      { title: 'Sheet Metal Enclosure', text: 'A fabricated box with a flat pattern.', tags: ['Sheet metal'], size: 'sm' },
      { title: 'Drawing Set', text: 'Manufacturing drawings with GD&T.', tags: ['Drawings'], size: 'sm' },
      { title: 'Stress Analysis', text: 'A simulated load case with a safety factor.', tags: ['Simulation'], size: 'lg' }
    ],

    audience:
      '12th-pass students from the science stream, diploma holders in Mechanical, Automobile, Production or Tool & Die, B.Tech/B.E. mechanical students and graduates, working professionals in design, production or quality, job seekers targeting design roles, and small manufacturers designing their own products.',
    prerequisite:
      'None. The course starts from complete fundamentals including basic sketching, so basic engineering knowledge and computer familiarity are enough.',

    /* Written as a local landing page. Its copy names Ludhiana
       throughout, which is also the default centre, so nothing here
       has to override `city`. */
    overviewTitle: SOLIDWORKS_OVERVIEW.title,
    overviewLead: SOLIDWORKS_OVERVIEW.lead,
    overviewBody: SOLIDWORKS_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: SOLIDWORKS_JOINERS,
    narrative: SOLIDWORKS_NARRATIVE,

    /* UNVERIFIED quotes carrying named colleges and placement
       outcomes. Read the banner above SOLIDWORKS_TESTIMONIALS in
       ./solidworks-copy.js before this page goes live. Deleting this
       one line falls back to the generic quotes in shared.js. */
    testimonials: SOLIDWORKS_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: SOLIDWORKS_FAQS,

    enquireEyebrow: 'Get started',
    enquireTitle: 'Start your SolidWorks career journey in Ludhiana',
    enquireText:
      'Our counsellors will walk you through the syllabus, batch timings, fee structure and placement support so you can make an informed decision — no pressure, just clarity.'
  },

  {
    slug: '3ds-max',
    name: '3ds Max Course',
    short: '3ds Max',
    subject: '3ds Max',
    category: 'Civil / Mechanical',
    eyebrow: 'Architectural visualisation',
    duration: '2–3 months',
    headline: ['Model the space.', 'Light it beautifully.'],
    sub: 'Modelling, materials, lighting and rendering in 3ds Max with V-Ray — producing the interior and exterior visuals architecture and interior design studios sell with.',
    heroArt: '/courses/3ds-max-hero.webp',
    heroArtAlt: 'A 3ds Max architectural visualisation on screen',
    heroArtSize: [900, 600],
    projectCount: 'Four shipped',
    highlights: [
      'Lighting taught as the difference between good and flat',
      'V-Ray rendering with real material libraries',
      'Portfolio-quality final renders'
    ],
    code: {
      lang: 'txt',
      file: 'render-settings.md',
      lines: [
        'Renderer   V-Ray 6',
        'GI         Brute force + Light cache',
        'Camera     35mm · f/8 · ISO 100',
        'Lighting   HDRI dome + VRaySun',
        'Output     3840 × 2160 · 16-bit EXR'
      ],
      command: 'Render',
      output: 'Frame complete · 14m 22s'
    },
    badges: ['V-Ray', 'Lighting', 'Materials', 'ArchViz'],
    modules: [
      {
        title: 'Interface & Modelling',
        tag: 'Weeks 1–3',
        description: 'Polygon and spline modelling, and building geometry that renders cleanly.',
        skills: ['Viewport navigation', 'Primitives & modifiers', 'Editable poly', 'Spline modelling', 'Modelling from plans', 'Clean topology'],
        tech: ['3ds Max', 'AutoCAD import'],
        outcome: 'A complete interior modelled accurately from an imported floor plan.'
      },
      {
        title: 'Materials & Texturing',
        tag: 'Weeks 4–6',
        description: 'Making surfaces read as real — reflectivity, roughness, mapping and scale.',
        skills: ['Material editor', 'V-Ray materials', 'UVW mapping', 'Bump & displacement', 'Texture scale', 'Material libraries'],
        tech: ['V-Ray', 'Substance textures'],
        outcome: 'A material library of realistic surfaces applied correctly across a scene.'
      },
      {
        title: 'Lighting & Cameras',
        tag: 'Weeks 7–9',
        description: 'The part that separates a professional render from a student one.',
        skills: ['Daylight systems', 'HDRI lighting', 'Artificial lighting', 'Camera setup', 'Exposure control', 'Composition'],
        tech: ['V-Ray', 'VRaySun', 'HDRI'],
        outcome: 'One scene lit three ways — daylight, dusk and artificial — each convincing.'
      },
      {
        title: 'Rendering, Post & Animation',
        tag: 'Weeks 10–12',
        description: 'Render settings that finish in reasonable time, then finishing the image properly.',
        skills: ['Render settings', 'Render elements', 'Noise & sampling', 'Post-production', 'Walkthrough animation', 'Output formats'],
        tech: ['V-Ray', 'Photoshop', 'After Effects'],
        outcome: 'A final portfolio render plus a short animated walkthrough of your scene.'
      }
    ],
    technologies: [
      { name: '3ds Max', note: 'Modelling & scene assembly' },
      { name: 'V-Ray', note: 'Photorealistic rendering' },
      { name: 'Corona', note: 'Alternative renderer' },
      { name: 'Photoshop', note: 'Post-production' },
      { name: 'AutoCAD', note: 'Plan import' },
      { name: 'HDRI', note: 'Environment lighting' },
      { name: 'Substance', note: 'Material textures' },
      { name: 'After Effects', note: 'Animation finishing' }
    ],
    careers: [
      { icon: 'spark', title: '3D Visualiser', text: 'Produce the renders architecture studios present to clients.' },
      { icon: 'curriculum', title: 'Architectural Visualiser', text: 'Turn drawings into images that sell a design.' },
      { icon: 'stack', title: 'Interior Design Visualiser', text: 'Render interiors for designers and furniture brands.' },
      { icon: 'code', title: '3D Modeller', text: 'Build assets for visualisation, product or media work.' },
      { icon: 'career', title: 'Freelance ArchViz Artist', text: 'Take render commissions for architects and developers.' },
      { icon: 'chart', title: 'Walkthrough Animator', text: 'Produce animated presentations of unbuilt spaces.' }
    ],
    featured: {
      title: 'Interior Visualisation Set',
      kicker: 'Capstone project',
      text: 'A complete visualisation package for one interior: accurate modelling from a real plan, a full realistic material set, three lighting scenarios, four high-resolution final renders with post-production, and a rendered walkthrough animation — the deliverable a studio would present to a client.',
      tags: ['3ds Max', 'V-Ray', 'Lighting', 'Post'],
      difficulty: 'Advanced',
      status: 'Portfolio ready',
      lines: [
        'Render 01   Living room — daylight   3840×2160',
        'Render 02   Living room — dusk       3840×2160',
        'Render 03   Kitchen — artificial     3840×2160',
        'Render 04   Detail — material study  2560×1440',
        '',
        'Animation   24s walkthrough · 25 fps'
      ]
    },
    projects: [
      { title: 'Furniture Model', text: 'A detailed piece modelled with clean topology.', tags: ['Modelling'], size: 'sm' },
      { title: 'Interior Scene', text: 'A full room modelled from a floor plan.', tags: ['3ds Max'], size: 'lg' },
      { title: 'Material Study', text: 'Realistic wood, metal, fabric and glass.', tags: ['V-Ray'], size: 'sm' },
      { title: 'Lighting Set', text: 'One scene, three convincing lighting moods.', tags: ['Lighting'], size: 'sm' },
      { title: 'Exterior Render', text: 'A building exterior with landscape and sky.', tags: ['HDRI'], size: 'lg' }
    ],
    audience:
      '12th-pass students from any stream, B.Arch, B.Des, Fine Arts and B.Tech graduates, architecture and interior design students, diploma and ITI holders, working professionals and freelancers adding visualisation to their services, and job seekers targeting design and animation roles.',
    prerequisite:
      'None. No design or architecture background is needed — the course starts from the 3ds Max interface and modeling basics before moving into advanced rendering.',

    /* Written as a local landing page. Its copy names Ludhiana
       throughout, which is also the default centre, so nothing here
       has to override `city`. */
    overviewTitle: MAX_OVERVIEW.title,
    overviewLead: MAX_OVERVIEW.lead,
    overviewBody: MAX_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: MAX_JOINERS,
    narrative: MAX_NARRATIVE,

    /* UNVERIFIED quotes carrying named outcomes. Read the banner above
       MAX_TESTIMONIALS in ./3ds-max-copy.js before this page goes
       live. Deleting this one line falls back to the generic quotes in
       shared.js. */
    testimonials: MAX_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: MAX_FAQS,

    enquireEyebrow: 'Enrol now',
    enquireTitle: 'Start your 3D design career today',
    enquireText:
      'Send this form and a counsellor calls you back about the 3ds Max course — batch timings, duration, fees, the lab setup, and the project work your portfolio will come out of.'
  },

  {
    slug: 'revit',
    name: 'Revit & BIM Course',
    short: 'Revit',
    subject: 'Revit',
    category: 'Civil / Mechanical',
    eyebrow: 'Building Information Modelling',
    duration: '2–3 months',
    headline: ['Model the building.', 'The drawings follow.'],
    sub: 'Revit architecture, structure and MEP coordination — a single coordinated model that produces plans, sections, schedules and quantities without redrawing anything.',
    heroArt: '/courses/revit-hero.webp',
    heroArtAlt: 'A Revit building model with its data callouts',
    heroArtSize: [900, 600],
    projectCount: 'Four shipped',
    highlights: [
      'One model, every drawing generated from it',
      'Families built, not just downloaded',
      'Coordination and clash detection included'
    ],
    code: {
      lang: 'txt',
      file: 'schedule.md',
      lines: [
        'Door Schedule (auto-generated)',
        '  D-01  900×2100  Flush   Ground  ×12',
        '  D-02  1200×2100 Double  Ground  ×2',
        '  D-03  800×2100  Flush   First   ×8',
        '',
        'Quantities update with the model.'
      ],
      command: 'Update schedules',
      output: '6 schedules · 0 warnings'
    },
    badges: ['BIM', 'Families', 'Schedules', 'Clash'],
    modules: [
      {
        title: 'BIM Concepts & Revit Basics',
        tag: 'Weeks 1–2',
        description: 'Why a model beats a drawing set, and how Revit organises a project.',
        skills: ['BIM workflow', 'Project browser', 'Levels & grids', 'Views & templates', 'Element hierarchy', 'Project setup'],
        tech: ['Revit', 'Project templates'],
        outcome: 'A correctly set up project with levels, grids and a view template structure.'
      },
      {
        title: 'Architectural Modelling',
        tag: 'Weeks 3–6',
        description: 'Walls, floors, roofs, stairs and openings — the building itself.',
        skills: ['Walls & compound structures', 'Floors & roofs', 'Doors & windows', 'Stairs & railings', 'Curtain walls', 'Rooms & areas'],
        tech: ['Revit Architecture'],
        outcome: 'A fully modelled two-storey building with correct assemblies and room data.'
      },
      {
        title: 'Families, Schedules & Documentation',
        tag: 'Weeks 7–9',
        description: 'Custom components, automatic quantities and the drawing set the model produces.',
        skills: ['Family editor', 'Parametric families', 'Schedules & quantities', 'Sheets & titleblocks', 'Annotation', 'Detailing'],
        tech: ['Revit Family Editor'],
        outcome: 'A custom parametric family plus a complete sheet set generated from the model.'
      },
      {
        title: 'Structure, MEP & Coordination',
        tag: 'Weeks 10–12',
        description: 'Linking disciplines, finding clashes before site does, and presenting the result.',
        skills: ['Structural elements', 'MEP systems basics', 'Linked models', 'Worksharing', 'Clash detection', 'Rendering & export'],
        tech: ['Revit Structure', 'Revit MEP', 'Navisworks'],
        outcome: 'A coordinated multi-discipline model with a documented clash report.'
      }
    ],
    technologies: [
      { name: 'Revit', note: 'BIM authoring' },
      { name: 'Families', note: 'Parametric components' },
      { name: 'Schedules', note: 'Automatic quantities' },
      { name: 'Navisworks', note: 'Clash detection' },
      { name: 'AutoCAD', note: 'Import & export' },
      { name: 'Worksharing', note: 'Team collaboration' },
      { name: 'Dynamo', note: 'Model automation' },
      { name: 'IFC', note: 'Open BIM exchange' }
    ],
    careers: [
      { icon: 'curriculum', title: 'BIM Modeller', text: 'Author and maintain the coordinated project model.' },
      { icon: 'stack', title: 'Revit Architect', text: 'Produce architectural design and documentation in BIM.' },
      { icon: 'chart', title: 'BIM Coordinator', text: 'Run clash detection and coordinate across disciplines.' },
      { icon: 'code', title: 'Structural Modeller', text: 'Model structural systems inside a shared project.' },
      { icon: 'career', title: 'Quantity Surveyor (BIM)', text: 'Take quantities and costs directly from the model.' },
      { icon: 'spark', title: 'Freelance BIM Consultant', text: 'Deliver model-based documentation for practices.' }
    ],
    featured: {
      title: 'Coordinated BIM Project',
      kicker: 'Capstone project',
      text: 'A full BIM deliverable for a two-storey building: architectural model with correct assemblies, custom parametric families, linked structural model, automatic door, window and area schedules, a complete sheet set generated from the model, a Navisworks clash report and rendered presentation views.',
      tags: ['Revit', 'Families', 'Navisworks', 'Schedules'],
      difficulty: 'Advanced',
      status: 'Submission ready',
      lines: [
        'Clash report — Architecture vs Structure',
        '  Total tests      342',
        '  Clashes found    17',
        '  Resolved         17',
        '',
        'Sheets issued      24',
        'Schedules          6 (auto-updating)'
      ]
    },
    projects: [
      { title: 'Residential Model', text: 'A house modelled with correct wall assemblies.', tags: ['Revit'], size: 'sm' },
      { title: 'Custom Family', text: 'A parametric component you built yourself.', tags: ['Families'], size: 'lg' },
      { title: 'Sheet Set', text: 'Plans, sections and elevations from one model.', tags: ['Sheets'], size: 'sm' },
      { title: 'Quantity Schedule', text: 'Automatic material take-off from the model.', tags: ['Schedules'], size: 'sm' },
      { title: 'Clash Report', text: 'Multi-discipline coordination with resolutions.', tags: ['Navisworks'], size: 'lg' }
    ],
    prerequisite: 'Basic drawing reading helps. AutoCAD experience is useful but not required — Revit is taught from the interface up.'
  }
]
