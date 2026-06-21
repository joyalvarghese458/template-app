export const OWNER = {
  name: "Owen Castillo",
  title: "Civil Engineer, P.E.",
  tagline: "Built to hold. Designed to last.",
  subtagline:
    "I'm a licensed civil engineer specializing in structural design and site development — bridges, foundations, and the load paths that keep buildings standing for a hundred years.",
  email: "owen.castillo@example.com",
  linkedin: "https://linkedin.com/in/owencastillo",
  asce: "https://www.asce.org/",
  license: "P.E. License #CO-48213",
  resumeUrl: "#",
  location: "Denver, CO",
  availability: "Open to senior structural roles",
  stats: [
    { value: "45+", label: "Projects delivered" },
    { value: "$280M", label: "Construction value" },
    { value: "11", label: "Years licensed P.E." },
    { value: "3", label: "States licensed" },
  ],
};

export const ABOUT = {
  intro:
    "I'm a licensed civil engineer who works across structural design, site development, and construction administration. I've spent eleven years turning soil reports and load calculations into buildings, bridges, and roads that hold up under real-world conditions.",
  philosophy:
    "A design that only works on paper isn't finished. I check my own math against code, against the contractor's constraints, and against the worst-case load — not just the average one.",
  focus: [
    "Structural design & load analysis",
    "Site development & grading",
    "Construction administration & inspection",
    "Code compliance & permitting",
  ],
};

export const PROJECTS = [
  {
    id: "01",
    title: "Cedar Creek Pedestrian Bridge",
    category: "Structural Design · Municipal",
    description:
      "Designed a 140-ft steel truss pedestrian bridge spanning a flood-prone creek, engineered for a 100-year flood event.",
    tools: ["Civil 3D", "RISA-3D", "STAAD.Pro"],
    outcomes: [
      "Approved on first permit submission",
      "18% under construction budget",
      "Rated for 100-year flood loading",
    ],
  },
  {
    id: "02",
    title: "Harbor View Apartments — Foundation Redesign",
    category: "Geotechnical · Residential",
    description:
      "Redesigned the foundation system for a 6-story residential building after a survey revealed expansive clay soil.",
    tools: ["Civil 3D", "PLAXIS", "Excel/VBA"],
    outcomes: [
      "Eliminated need for deep piles, saving $1.2M",
      "Settlement reduced to under 1 inch",
      "Avoided a construction delay",
    ],
  },
  {
    id: "03",
    title: "Maple District Site Grading & Drainage",
    category: "Site Development · Stormwater",
    description:
      "Led grading and stormwater design for a 22-acre mixed-use development, managing a 100-year storm event on-site.",
    tools: ["Civil 3D", "HydroCAD", "ArcGIS"],
    outcomes: [
      "Zero net increase in runoff",
      "Cut/fill balanced on-site, no import or export",
      "Permitted in a single review cycle",
    ],
  },
  {
    id: "04",
    title: "Lincoln Ave Parking Structure",
    category: "Structural · Commercial",
    description:
      "Structural design for a 5-level, 600-stall precast concrete parking structure adjacent to an active rail line.",
    tools: ["RISA-3D", "Civil 3D", "Bluebeam"],
    outcomes: [
      "Designed for rail-adjacent vibration loads",
      "600 stalls delivered on schedule",
      "Zero structural RFIs during construction",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Structural Engineer",
    company: "Hargrove & Pine Engineering",
    period: "2019 — Present",
    description: "Lead structural design for municipal and commercial projects, and stamp drawings as engineer of record.",
    highlights: ["P.E. of Record", "Structural Design", "Team Leadership"],
  },
  {
    role: "Project Engineer",
    company: "Caldwell Civil Group",
    period: "2015 — 2019",
    description: "Managed site development and stormwater design for mixed-use and residential developments.",
    highlights: ["Site Development", "Stormwater Design", "Permitting"],
  },
  {
    role: "Engineer-in-Training",
    company: "Caldwell Civil Group",
    period: "2013 — 2015",
    description: "Rotated through structural, geotechnical, and transportation teams while completing P.E. licensure.",
    highlights: ["Structural Analysis", "Field Inspection", "AutoCAD"],
  },
];

export const SKILLS: Record<string, { name: string; level: number }[]> = {
  "Structural Analysis": [
    { name: "RISA-3D / STAAD.Pro", level: 92 },
    { name: "Load & Seismic Analysis", level: 88 },
    { name: "AutoCAD Civil 3D", level: 95 },
    { name: "Steel & Concrete Design (AISC/ACI)", level: 90 },
  ],
  "Site & Geotechnical": [
    { name: "Grading & Drainage Design", level: 85 },
    { name: "HydroCAD / Stormwater Modeling", level: 80 },
    { name: "ArcGIS", level: 70 },
    { name: "Geotechnical Report Review", level: 82 },
  ],
};

export const CERTIFICATIONS = [
  { title: "Professional Engineer (P.E.) — Civil", issuer: "NCEES / State Board", year: "2016" },
  { title: "B.S. in Civil Engineering", issuer: "Colorado School of Mines", year: "2013" },
  { title: "OSHA 30-Hour Construction Safety", issuer: "OSHA", year: "2021" },
  { title: "Envision Sustainability Professional", issuer: "ISI", year: "2022" },
];

export const TOOLS = [
  "AutoCAD Civil 3D", "RISA-3D", "STAAD.Pro", "HydroCAD", "ArcGIS", "Bluebeam", "PLAXIS", "Revit",
];
