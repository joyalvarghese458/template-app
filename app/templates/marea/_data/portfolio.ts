import heroKelp from "../_assets/hero-kelp.jpg";
import heroTurtle from "../_assets/hero-turtle.jpg";
import galleryCoral from "../_assets/gallery-coral.jpg";
import galleryDiverReef from "../_assets/gallery-diver-reef.jpg";
import galleryDiverCave from "../_assets/gallery-diver-cave.jpg";
import galleryAnemone from "../_assets/gallery-anemone.jpg";
import galleryBiolume from "../_assets/gallery-biolume.jpg";

export const OWNER = {
  brand: "Marea",
  name: "Marisol Vega",
  title: "Marine Biology Graduate Student",
  tagline: "The tide keeps its own record.",
  subtagline:
    "M.S. candidate at Scripps Institution of Oceanography, tracking how kelp forests, coral reefs, and the animals that depend on them respond to a warming, changing ocean.",
  email: "marisol.vega@example.com",
  linkedin: "https://linkedin.com/in/marisolvega",
  scholar: "https://scholar.google.com/citations?user=marisolvega",
  resumeUrl: "#",
  location: "La Jolla, CA",
  university: "Scripps Institution of Oceanography, UC San Diego",
  availability: "Open to research assistant & field technician roles",
  stats: [
    { value: "410+", label: "Logged dive hours" },
    { value: "6", label: "Research expeditions" },
    { value: "3", label: "Papers in prep / co-authored" },
    { value: "2", label: "Field seasons at Moorea" },
  ],
};

export const ABOUT = {
  intro:
    "I'm a marine biology student who treats the water column like a manuscript — every depth zone is a chapter, and my job is to log what's actually down there before I trust a single conclusion.",
  philosophy:
    "The reef doesn't round its numbers. I'd rather run one more transect at 4am before the tide turns than publish a count I only half-trust.",
  focus: [
    "Coral reef ecology & bleaching resilience",
    "Subtidal kelp forest monitoring",
    "Acoustic & satellite animal tracking",
    "Environmental DNA (eDNA) sampling",
  ],
};

export const PROCESS = [
  { step: "01", title: "Dive", desc: "Survey the site first-hand — transects, quadrats, visual census — before a single sample leaves the water." },
  { step: "02", title: "Sample", desc: "Collect eDNA, tissue, and water-chemistry data with strict chain-of-custody logging." },
  { step: "03", title: "Analyze", desc: "Run qPCR assays, photo-quadrat image analysis, and acoustic detection logs back at the bench." },
  { step: "04", title: "Report", desc: "Turn raw counts into a model an advisor, an agency, or a reef manager can actually act on." },
];

export const ZONES = [
  {
    name: "Epipelagic",
    common: "Sunlight Zone",
    depth: "0 – 200m",
    bg: "#0e3a45",
    note: "Kelp canopies and coral reefs — where almost every survey in this portfolio actually starts.",
  },
  {
    name: "Mesopelagic",
    common: "Twilight Zone",
    depth: "200 – 1,000m",
    bg: "#0a2836",
    note: "Light fades to blue-black; acoustic tags start to matter more than eyesight.",
  },
  {
    name: "Bathypelagic",
    common: "Midnight Zone",
    depth: "1,000 – 4,000m",
    bg: "#071c2a",
    note: "No sunlight reaches this deep — bioluminescence becomes the water column's own language.",
  },
  {
    name: "Abyssopelagic",
    common: "Abyssal Zone",
    depth: "4,000 – 6,000m",
    bg: "#051420",
    note: "Near-freezing, crushing pressure, and some of the slowest metabolisms on the planet.",
  },
  {
    name: "Hadalpelagic",
    common: "Trench Zone",
    depth: "6,000m+",
    bg: "#030d16",
    note: "Ocean trenches — the least-observed habitat on Earth, mapped one submersible dive at a time.",
  },
];

export const PROJECTS = [
  {
    id: "01",
    title: "Kelp Canopy Recovery Survey",
    category: "Subtidal Ecology · SCUBA Transects",
    description: "Ran quarterly canopy-density transects across the Point Loma kelp forest to track recovery after the 2014–16 marine heatwave dieback.",
    tools: ["SCUBA", "Quadrat Transects", "Canopy Density Index"],
    outcomes: ["18 permanent transects re-surveyed", "Canopy density up 22% over 2 seasons", "Data shared with local kelp restoration partners"],
  },
  {
    id: "02",
    title: "Coral Bleaching Resilience Study",
    category: "Reef Ecology · Bleaching Response",
    description: "Photo-quadrat monitoring of thermally stressed coral colonies at the Moorea Coral Reef LTER site to flag early resilience signals.",
    tools: ["Photo-Quadrats", "CoralNet", "HOBO Temp Loggers"],
    outcomes: ["540+ quadrat images annotated", "3 resilient colony genotypes flagged", "Presented at department research symposium"],
  },
  {
    id: "03",
    title: "Green Sea Turtle Residency Tracking",
    category: "Megafauna · Acoustic Telemetry",
    description: "Tagged and tracked the resident green sea turtle population in San Diego Bay's warm-water outfall habitat across two seasons.",
    tools: ["Acoustic Tags", "VR2W Receivers", "Photo-ID Catalog"],
    outcomes: ["14 individuals photo-ID catalogued", "Residency patterns mapped across tide cycles", "Findings shared with regional wildlife agency"],
  },
  {
    id: "04",
    title: "eDNA Biodiversity Baseline",
    category: "Molecular Ecology · eDNA Metabarcoding",
    description: "Built a water-sample eDNA baseline across La Jolla Cove's kelp beds and tide pools to catch species a visual census would miss.",
    tools: ["eDNA Extraction Kit", "qPCR", "Metabarcoding Pipeline"],
    outcomes: ["46 water samples processed", "9 species detected with no prior visual record", "Protocol adopted by incoming lab cohort"],
  },
  {
    id: "05",
    title: "Gray Whale Migration Census",
    category: "Marine Mammals · Visual Census",
    description: "Logged pod counts and calf ratios during the winter gray whale migration from the cliffside observation station at Scripps.",
    tools: ["Spotting Scope", "Theodolite", "Sighting Log Sheets"],
    outcomes: ["312 pods logged across one season", "Calf ratio 6% above 5-year average", "Counts submitted to regional census network"],
  },
  {
    id: "06",
    title: "Red Tide Bioluminescence Monitoring",
    category: "Phytoplankton Ecology · HAB Monitoring",
    description: "Sampled Lingulodinium polyedra bloom density at La Jolla Shores during a recurring bioluminescent red tide event.",
    tools: ["Plankton Net", "Hemocytometer", "Secchi Disk"],
    outcomes: ["Bloom density tracked over 5 weeks", "Correlated bloom decline with dissolved oxygen drop", "Data logged for the regional HAB early-warning network"],
  },
];

export const GALLERY = [
  {
    src: galleryDiverReef,
    alt: "Scuba diver swimming over a colorful coral reef during a research dive",
    caption: "Reef transect dive",
  },
  {
    src: galleryCoral,
    alt: "Colorful coral reef with diverse textured formations",
    caption: "Coral cover, quadrat site",
  },
  {
    src: galleryAnemone,
    alt: "Anemonefish sheltering in a host sea anemone",
    caption: "Anemonefish, macro survey",
  },
  {
    src: galleryDiverCave,
    alt: "Scuba diver swimming through an underwater cave passage",
    caption: "Night dive, cavern transect",
  },
  {
    src: galleryBiolume,
    alt: "Glowing bioluminescent waves at night on a dark shoreline",
    caption: "Bioluminescent red tide, La Jolla Shores",
    position: "center 78%",
  },
];

export const EXPERIENCE = [
  {
    role: "Graduate Research Assistant",
    company: "Scripps Institution of Oceanography",
    period: "2024 — Present",
    description: "Supporting a faculty-led reef resilience project — photo-quadrat processing, eDNA lab work, and dive-log data management.",
    highlights: ["Reef Ecology", "eDNA Lab Work", "Dive Logging"],
  },
  {
    role: "Research Diver / Field Technician",
    company: "Point Loma Kelp Restoration Project",
    period: "Summer 2024",
    description: "Ran SCUBA transects and canopy-density surveys to track kelp forest recovery after a multi-year marine heatwave.",
    highlights: ["SCUBA Survey", "Data Logging", "Site Mapping"],
  },
  {
    role: "Teaching Assistant",
    company: "Marine Biology Lab, UC San Diego",
    period: "2023 — 2024",
    description: "Ran weekly lab sections on invertebrate taxonomy, water chemistry, and dissection technique for 50+ undergraduates.",
    highlights: ["Taxonomy", "Instruction", "Lab Safety"],
  },
];

export const SKILLS: Record<string, { name: string; level: number }[]> = {
  "Field & Diving": [
    { name: "AAUS Scientific Diving", level: 92 },
    { name: "Transect & Quadrat Survey", level: 90 },
    { name: "Acoustic Tag Deployment", level: 76 },
    { name: "Photo-Quadrat Imaging", level: 85 },
  ],
  "Data & Analysis": [
    { name: "R (eDNA / qPCR pipelines)", level: 82 },
    { name: "CoralNet Image Annotation", level: 88 },
    { name: "ArcGIS Mapping", level: 70 },
    { name: "Python (pandas, matplotlib)", level: 66 },
  ],
};

export const CERTIFICATIONS = [
  { title: "AAUS Scientific Diver Certification", issuer: "American Academy of Underwater Sciences", year: "2024" },
  { title: "PADI Advanced Open Water", issuer: "PADI", year: "2022" },
  { title: "Wilderness First Aid + CPR", issuer: "NOLS / American Red Cross", year: "2024" },
  { title: "Small Craft & Boat Operations", issuer: "Scripps Marine Facility", year: "2024" },
];

export const TESTIMONIALS = [
  {
    quote: "Marisol's transect data was the cleanest in the cohort — every count logged with the depth, time, and visibility conditions right beside it. No guesswork.",
    name: "Dr. Renata Ibarra",
    role: "Research Advisor, Scripps Institution of Oceanography",
  },
  {
    quote: "She's the diver who checks her own gauge twice and still surfaces with a full data sheet. That's exactly who you want running a transect at 60 feet.",
    name: "Owen Frasier",
    role: "Dive Safety Officer, Scripps Marine Facility",
  },
  {
    quote: "Marisol caught a bleaching signal in the Moorea data two weeks before the rest of us noticed it in the field. That's the kind of eye you can't fully teach.",
    name: "Priya Anand",
    role: "Ph.D. Candidate, Coral Reef Ecology Lab",
  },
];

export const TOOLS = [
  "SCUBA", "CTD Sensor", "Quadrat Transects", "Acoustic Telemetry", "eDNA Extraction Kit",
  "CoralNet", "R / RStudio", "ArcGIS Pro", "Secchi Disk", "Plankton Net",
];

export const HERO_IMAGES = {
  base: heroKelp,
  reveal: heroTurtle,
};
