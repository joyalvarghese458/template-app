export const OWNER = {
  brand: "Lithos",
  name: "Mara Voss",
  title: "Geology Student",
  tagline: "Layers hold tales of time.",
  subtagline:
    "B.S. Geology candidate mapping the rock record — from fault scarps to core samples — to understand how landscapes remember their own history.",
  email: "mara.voss@example.com",
  linkedin: "https://linkedin.com/in/maravoss",
  github: "https://github.com/maravoss",
  resumeUrl: "#",
  location: "Flagstaff, AZ",
  university: "Northern Arizona University",
  availability: "Open to field assistant & research roles",
  stats: [
    { value: "120+", label: "Field hours logged" },
    { value: "14", label: "Rock units mapped" },
    { value: "3", label: "Research posters presented" },
    { value: "2", label: "Field seasons completed" },
  ],
};

export const ABOUT = {
  intro:
    "I'm a geology student who reads landscapes the way other people read paragraphs. Every outcrop is a sentence, every layer a clause, and my job in the field is to figure out what the rock is trying to say.",
  philosophy:
    "The rock doesn't lie — you just have to learn to read it. I'd rather spend an extra hour at the outcrop confirming a contact than build a model on a guess.",
  focus: [
    "Structural geology & field mapping",
    "Sedimentary petrology & stratigraphy",
    "GIS & remote sensing (ArcGIS / QGIS)",
    "Hydrogeology fundamentals",
  ],
};

export const PROCESS = [
  { step: "01", title: "Observe", desc: "Describe the outcrop — lithology, bedding, contacts, structure — before touching a single sample." },
  { step: "02", title: "Sample", desc: "Collect oriented specimens, log GPS coordinates, and photograph context for every station." },
  { step: "03", title: "Analyze", desc: "Thin-section petrography, hand-lens mineral ID, and lab work back at the bench." },
  { step: "04", title: "Interpret", desc: "Build the stratigraphic column and structural model the data actually supports." },
];

export const PROJECTS = [
  {
    id: "01",
    title: "Mapping the Sedona Fault Scarp",
    category: "Structural Geology · Field Mapping",
    description: "Produced a 1:12,000 field map of a normal fault scarp cutting Permian redbeds north of Sedona, AZ.",
    tools: ["Brunton Compass", "ArcGIS Pro", "Jacob's Staff"],
    outcomes: ["38 strike-and-dip stations logged", "Fault offset estimated at 14m", "Presented at NAU undergrad symposium"],
  },
  {
    id: "02",
    title: "Petrographic Analysis of Kaibab Limestone",
    category: "Petrology · Thin-Section Microscopy",
    description: "Characterized diagenetic textures in Kaibab Formation limestone using 40 thin sections under polarized light.",
    tools: ["Petrographic Microscope", "ImageJ", "XRD"],
    outcomes: ["Identified 3 distinct diagenetic phases", "Built a point-count porosity dataset", "Co-authored department poster"],
  },
  {
    id: "03",
    title: "GIS Landslide Susceptibility Model",
    category: "GIS · Hazard Mapping",
    description: "Built a weighted-overlay landslide susceptibility model for Oak Creek Canyon from slope, lithology, and rainfall layers.",
    tools: ["ArcGIS Pro", "QGIS", "Python (rasterio)"],
    outcomes: ["92% slide-inventory overlap with high-risk zones", "Model adopted for a class capstone", "Open dataset published on GitHub"],
  },
  {
    id: "04",
    title: "Stratigraphic Column of the Supai Group",
    category: "Stratigraphy · Core Logging",
    description: "Logged and correlated a 240m composite section of the Supai Group across three canyon-wall exposures.",
    tools: ["Jacob's Staff", "Munsell Chart", "Leapfrog Geo"],
    outcomes: ["Correlated 6 marker beds across sections", "Built a 3D stratigraphic model", "Flagged a new unconformity candidate"],
  },
  {
    id: "05",
    title: "Groundwater Recharge Study, Verde Valley",
    category: "Hydrogeology · Field Sampling",
    description: "Sampled monitoring wells across the Verde Valley aquifer to estimate seasonal recharge from isotope tracers.",
    tools: ["YSI Multiparameter Probe", "Stable Isotope Analysis", "Excel/R"],
    outcomes: ["Sampled 11 wells across 2 seasons", "Estimated 6% annual recharge rate", "Data shared with local watershed council"],
  },
  {
    id: "06",
    title: "Volcanic Ash Layer Correlation",
    category: "Volcanology · Tephrochronology",
    description: "Correlated tephra layers from the San Francisco Volcanic Field across four outcrops using grain geochemistry.",
    tools: ["Hand Lens", "SEM-EDS", "ArcGIS Pro"],
    outcomes: ["Matched 2 ash beds to known eruptive events", "Refined local tephra chronology", "Field season funded by department grant"],
  },
];

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1763656269027-88983e2f80cc?w=900&h=700&q=80&auto=format&fit=crop",
    alt: "Colorful stratified sedimentary rock layers against a deep blue sky, Algarve, Portugal",
    caption: "Stratified cliff face, Algarve",
  },
  {
    src: "https://images.unsplash.com/photo-1761847246648-565baaa9b030?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Dark, textured rock face with layered striations",
    caption: "Layered striations, field outcrop",
  },
  {
    src: "https://images.unsplash.com/photo-1521133573892-e44906baee46?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Close-up of a purple quartz crystal cluster",
    caption: "Quartz cluster, hand sample",
  },
  {
    src: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Horseshoe Bend canyon walls and river carved through sedimentary rock, Arizona",
    caption: "Canyon strata, Horseshoe Bend",
  },
  {
    src: "https://images.unsplash.com/photo-1678105498516-ee8ce22af33f?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Black volcanic sand beach with basalt rock formations, Reynisfjara, Iceland",
    caption: "Basalt shoreline, Reynisfjara",
  },
];

export const EXPERIENCE = [
  {
    role: "Field Assistant",
    company: "USGS Flagstaff Science Center",
    period: "Summer 2025",
    description: "Assisted senior geologists with outcrop description, sample collection, and GPS station logging across the Colorado Plateau.",
    highlights: ["Field Mapping", "Sample Prep", "Data Logging"],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "NAU Department of Geology",
    period: "2024 — Present",
    description: "Supporting a faculty-led stratigraphy project — thin-section prep, point-counting, and GIS layer management.",
    highlights: ["Petrography", "ArcGIS Pro", "Lab Methods"],
  },
  {
    role: "Teaching Assistant",
    company: "Intro to Mineralogy Lab, NAU",
    period: "2023 — 2024",
    description: "Ran weekly lab sections on mineral identification, crystal systems, and hand-lens technique for 60+ students.",
    highlights: ["Mineral ID", "Instruction", "Lab Safety"],
  },
];

export const SKILLS: Record<string, { name: string; level: number }[]> = {
  "Field & Lab": [
    { name: "Outcrop Mapping", level: 90 },
    { name: "Hand-Lens Mineral ID", level: 88 },
    { name: "Thin-Section Petrography", level: 80 },
    { name: "Core Logging", level: 78 },
  ],
  "Technical & GIS": [
    { name: "ArcGIS Pro / QGIS", level: 92 },
    { name: "Leapfrog Geo", level: 70 },
    { name: "Python (geospatial)", level: 68 },
    { name: "AutoCAD Cross-Sections", level: 65 },
  ],
};

export const CERTIFICATIONS = [
  { title: "Summer Field Geology Camp", issuer: "Northern Arizona University", year: "2025" },
  { title: "Wilderness First Aid", issuer: "NOLS", year: "2024" },
  { title: "OSHA HAZWOPER 24-Hour", issuer: "OSHA", year: "2024" },
  { title: "ArcGIS Pro Certified User", issuer: "Esri", year: "2023" },
];

export const TESTIMONIALS = [
  {
    quote: "Mara's fault map was the most carefully stationed undergraduate field work I've reviewed in a decade — every contact justified, nothing guessed.",
    name: "Dr. Elena Park",
    role: "Research Advisor, NAU Department of Geology",
  },
  {
    quote: "She was the student who went back up the canyon wall a second time just to double-check a bedding measurement. That instinct is what separates field geologists.",
    name: "Tom Iverson",
    role: "Field Camp Instructor",
  },
  {
    quote: "Mara logged cleaner station data than some of our seasonal hires. I'd take her back on the crew without hesitation.",
    name: "Priya Nathan",
    role: "Geologist, USGS Flagstaff Science Center",
  },
];

export const TOOLS = [
  "ArcGIS Pro", "QGIS", "Brunton Compass", "Rock Hammer", "Hand Lens",
  "XRD", "Leapfrog Geo", "Munsell Chart", "GPS Total Station", "Jacob's Staff",
];

export const HERO_IMAGES = {
  base:
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85",
  reveal:
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85",
};
