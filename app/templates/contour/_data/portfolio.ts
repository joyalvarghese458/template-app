export const OWNER = {
  name: "Owen Marsh",
  firstName: "Owen",
  title: "Landscape Architect",
  practice: "Marsh & Field Studio",
  tagline: "I design ground that outlives the building on top of it.",
  subtagline:
    "Registered landscape architect working on public parks, campus grounds, and stormwater-led site design — practicing on the principle that a site plan is a promise to the next fifty years.",
  email: "owen@marshfield.studio",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
  resumeUrl: "mailto:owen@marshfield.studio?subject=Resume%20request",
  location: "Portland, OR",
  availability: "Booking site visits for spring 2027",
  coordinates: "45.5152° N, 122.6784° W",
  stats: [
    { value: "38", label: "Sites completed" },
    { value: "412", label: "Acres designed" },
    { value: "14", label: "Years practicing" },
    { value: "6", label: "Design awards" },
  ],
};

export const SITE_INDEX = [
  { name: "Riverside Confluence Park", meta: "12.4 acres · Public" },
  { name: "Harborfront Promenade", meta: "2.1 km · Waterfront" },
  { name: "Cedar Ridge Campus Grounds", meta: "34 acres · Institutional" },
  { name: "Willow Creek Daylighting", meta: "0.8 mi · Restoration" },
  { name: "Basecamp Rooftop Commons", meta: "1.2 acres · Urban Infill" },
  { name: "Alder Hollow Housing", meta: "6.5 acres · Residential" },
];

export const ETHOS = {
  kicker: "Design Ethos",
  lines: [
    "Most site plans are drawn to survive the ribbon-cutting.",
    "Mine are drawn to survive the hundred-year storm.",
    "Every grade, every drain, every tree pit is sized for the site's worst week — not its best photograph.",
  ],
  signOff: "If it only works on a sunny day, it isn't finished.",
};

export const LAYERS = [
  {
    id: "01",
    name: "Topography",
    color: "#4b6b3f",
    desc: "Every project starts with contours, not concepts — how water actually moves across the site before a single line is drawn on top of it.",
  },
  {
    id: "02",
    name: "Hydrology",
    color: "#2f6b74",
    desc: "Stormwater is mapped as a design layer, not an afterthought bolted on for permitting — retention, infiltration, and overflow are drawn in from day one.",
  },
  {
    id: "03",
    name: "Vegetation",
    color: "#6f9459",
    desc: "Native and climate-adapted planting palettes, sequenced by canopy maturity so the site looks intentional in year one and thrives by year twenty.",
  },
  {
    id: "04",
    name: "Circulation",
    color: "#8a6a3f",
    desc: "How people, service vehicles, and maintenance crews actually move through the finished site — tested against real desire lines, not assumed ones.",
  },
];

export const PROCESS = [
  { step: "01", title: "Site Analysis", desc: "Survey, soils, hydrology, and a week of just walking the site before any concept work starts." },
  { step: "02", title: "Concept Design", desc: "Two to three master plan directions, each pressure-tested against budget and maintenance reality before a client ever sees them." },
  { step: "03", title: "Documentation", desc: "Full construction documents — grading, planting, irrigation, details — coordinated with civil and architecture, not handed off blind." },
  { step: "04", title: "Construction Admin", desc: "On-site through substantial completion. Plans survive contact with a backhoe; I'm there to make the calls when they don't." },
];

export const PROJECTS = [
  {
    id: "01",
    name: "Riverside Confluence Park",
    location: "Portland, OR",
    typology: "Public Park · Stormwater",
    area: "12.4 acres",
    challenge:
      "A flood-prone brownfield at the confluence of two creeks, written off by three previous studies as unbuildable.",
    approach:
      "Redesigned the site as a working floodplain — terraced wetland cells that flood on purpose, with a raised boardwalk system that stays open during the events that would close a conventional park.",
    result:
      "Handles a 100-year storm event without closing, and manages stormwater for four adjacent blocks that used to flood every spring.",
    metrics: [
      { label: "Stormwater managed", value: "18M gal/yr" },
      { label: "Native species", value: "64" },
      { label: "Completed", value: "2022" },
    ],
  },
  {
    id: "02",
    name: "Cedar Ridge Campus Grounds",
    location: "Eugene, OR",
    typology: "Institutional · Master Plan",
    area: "34 acres",
    challenge:
      "A 1970s campus with disconnected quads, a maintenance budget cut three years running, and a mandate to cut irrigation use in half.",
    approach:
      "Rebuilt the planting palette around drought-adapted natives, converted 40% of turf to no-mow meadow, and redrew circulation around the paths students were already wearing into the grass.",
    result:
      "Irrigation demand down more than half within two seasons, with maintenance hours redirected instead of cut further.",
    metrics: [
      { label: "Irrigation use", value: "−54%" },
      { label: "Turf converted", value: "40%" },
      { label: "Completed", value: "2021" },
    ],
  },
  {
    id: "03",
    name: "Willow Creek Daylighting",
    location: "Beaverton, OR",
    typology: "Ecological Restoration",
    area: "0.8 mi corridor",
    challenge:
      "A salmon-bearing creek buried in a storm culvert since the 1960s, running under a strip mall parking lot.",
    approach:
      "Worked with the city and a hydrologist for two years to daylight the channel, rebuild the riparian corridor, and reroute the parking lot around it instead of through it.",
    result:
      "First confirmed coho salmon spawning in the reopened reach in over fifty years, and a public greenway where a culvert used to be.",
    metrics: [
      { label: "Channel restored", value: "0.8 mi" },
      { label: "Trees planted", value: "3,200" },
      { label: "Completed", value: "2019" },
    ],
  },
  {
    id: "04",
    name: "Basecamp Rooftop Commons",
    location: "Portland, OR",
    typology: "Urban Infill · Green Roof",
    area: "1.2 acres",
    challenge:
      "A structural roof deck rated for far less soil depth than a real planting scheme needs, on a tight infill site with no ground-level open space.",
    approach:
      "Engineered a lightweight growing-medium system in partnership with the structural engineer, layering intensive and extensive zones to stay under the load limit without flattening the design.",
    result:
      "The only usable green space for 400 residential units — and the load calculations are now a reference detail the structural engineer reuses on other projects.",
    metrics: [
      { label: "Soil depth zones", value: "3" },
      { label: "Residents served", value: "400+" },
      { label: "Completed", value: "2023" },
    ],
  },
];

export const IMPACT = [
  { value: 412, decimals: 0, prefix: "", suffix: "", label: "Acres designed" },
  { value: 71, decimals: 0, prefix: "", suffix: "%", label: "Native canopy avg." },
  { value: 46, decimals: 0, prefix: "", suffix: "M", label: "Gallons stormwater/yr" },
  { value: 38, decimals: 0, prefix: "", suffix: "", label: "Sites completed" },
];

export const EXPERIENCE = [
  {
    role: "Principal",
    company: "Marsh & Field Studio",
    period: "2019 — Present",
    description: "Independent practice focused on stormwater-led public and institutional landscapes across the Pacific Northwest.",
    highlights: ["Master Planning", "Stormwater Design", "Construction Admin"],
  },
  {
    role: "Senior Associate",
    company: "Halvorsen Landscape Collective",
    period: "2015 — 2019",
    description: "Led design development on three park systems and a university campus master plan, from concept through documentation.",
    highlights: ["Public Parks", "Campus Planning", "Grading & Drainage"],
  },
  {
    role: "Landscape Designer",
    company: "Greenway Studio",
    period: "2012 — 2015",
    description: "Cut teeth on residential and small commercial planting design before moving into larger public-realm work.",
    highlights: ["Planting Design", "Site Detailing"],
  },
  {
    role: "M.L.A., Landscape Architecture",
    company: "University of Oregon",
    period: "2010 — 2012",
    description: "Thesis on post-industrial stormwater remediation — the seed of the practice's current focus.",
    highlights: ["Ecological Design", "Hydrology"],
  },
];

export const CREDENTIALS = [
  { label: "Registered Landscape Architect (RLA)", issuer: "State of Oregon", year: "2016" },
  { label: "LEED Accredited Professional", issuer: "USGBC", year: "2017" },
  { label: "SITES AP", issuer: "Green Business Certification Inc.", year: "2020" },
  { label: "ASLA Member, Oregon Chapter", issuer: "American Society of Landscape Architects", year: "2013 —" },
];

export const RECOGNITION = [
  { name: "ASLA Oregon", role: "Honor Award, 2022" },
  { name: "Landscape Architecture Magazine", role: "Featured Project" },
  { name: "City of Portland", role: "Green Infrastructure Award" },
  { name: "Metro Parks Council", role: "Design Excellence" },
  { name: "SITES", role: "Gold Certification" },
  { name: "Dwell", role: "Rooftop Feature" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Every other firm told us the site was unbuildable. Owen redesigned it to flood on purpose and it's the busiest park in the district now, storm season included.",
    name: "Denise Okafor",
    role: "Parks Director, City of Portland",
  },
  {
    quote:
      "He sat with our maintenance crew before he drew a single plant. That's why the planting plan actually survived contact with our real budget.",
    name: "Marcus Webb",
    role: "Facilities Director, Cedar Ridge",
  },
  {
    quote:
      "Two years of permitting meetings and he never once let the ecology get value-engineered out. The salmon came back the first winter.",
    name: "Dr. Lena Petrov",
    role: "Hydrologist, Willow Creek Restoration",
  },
];
