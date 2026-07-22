import crew from "../_assets/gallery/crew.jpg";
import clapboard from "../_assets/gallery/clapboard.jpg";
import projector from "../_assets/gallery/projector.jpg";
import filmReels from "../_assets/gallery/film-reels.jpg";
import cameraSetup from "../_assets/gallery/camera-setup.jpg";

export const OWNER = {
  name: "Reid Callahan",
  title: "Independent Film Director",
  tagline: "Cut to black. Then, somehow, cut to hope.",
  subtagline:
    "Writer-director working across narrative shorts, branded film, and documentary. Six festival selections, one feature in development, and no interest in safe coverage.",
  email: "reid@callahanpictures.co",
  imdb: "https://imdb.com",
  instagram: "https://instagram.com",
  resumeUrl: "mailto:reid@callahanpictures.co?subject=Resume%20request",
  studio: "Callahan Pictures",
  location: "Austin, TX",
  availability: "Booking Fall 2026 · Open to features",
  stats: [
    { value: "14", label: "Projects directed" },
    { value: "06", label: "Festival selections" },
    { value: "03", label: "Awards won" },
    { value: "2026", label: "Feature in development" },
  ],
};

export const ABOUT = {
  intro:
    "I picked up my dad's camcorder at eleven to fake a documentary about our block. Nobody in it was acting — that was the first time I understood the camera changes what happens in front of it.",
  philosophy:
    "Coverage is a safety net. I'd rather block a scene so precisely that we only need one angle than shoot six and hope the edit finds the film. If it can be cut around, it wasn't necessary in the first place.",
  focus: [
    "Narrative direction",
    "Visual language & blocking",
    "Actor direction",
    "Post & color supervision",
  ],
};

export const PROCESS = [
  { step: "01", title: "Develop", desc: "Break the script down to its one true idea before a single shot is planned." },
  { step: "02", title: "Preproduction", desc: "Lock locations, casting, and a shot list built to protect the performance." },
  { step: "03", title: "Production", desc: "Direct for the edit — every setup earns its place in the cut." },
  { step: "04", title: "Post", desc: "Sit inside the edit, the mix, and the grade until the film matches the intention." },
  { step: "05", title: "Release", desc: "Build the festival and distribution strategy the film actually deserves." },
];

export const FILMOGRAPHY = [
  {
    id: "01",
    title: "Static Bloom",
    category: "Narrative Short · Drama",
    description: "A 14-minute drama about a radio DJ broadcasting through her town's last night before the signal goes dark.",
    scope: ["Director", "Co-Writer", "Editor"],
    metrics: [{ label: "Runtime", value: "14 min" }, { label: "Selections", value: "3" }, { label: "Awards", value: "1" }],
  },
  {
    id: "02",
    title: "Last Light Diner",
    category: "Narrative Short · Neo-Noir",
    description: "Two strangers and a graveyard-shift waitress negotiate a debt that isn't about money, shot in one continuous night.",
    scope: ["Director", "Cinematographer"],
    metrics: [{ label: "Runtime", value: "11 min" }, { label: "Selections", value: "2" }, { label: "Festival wins", value: "1" }],
  },
  {
    id: "03",
    title: "Bloodline Radio",
    category: "Feature Documentary",
    description: "A feature doc following a pirate radio station's last broadcast season, three years in the making.",
    scope: ["Director", "Producer"],
    metrics: [{ label: "Runtime", value: "78 min" }, { label: "Shoot days", value: "46" }, { label: "Festival runs", value: "2" }],
  },
  {
    id: "04",
    title: "Departure Gate 12",
    category: "Narrative Short · Sci-Fi",
    description: "A quietly devastating short about a border agent processing the last flight before a planetary evacuation.",
    scope: ["Director", "Co-Writer"],
    metrics: [{ label: "Runtime", value: "9 min" }, { label: "Selections", value: "1" }, { label: "VFX shots", value: "22" }],
  },
  {
    id: "05",
    title: "The Understudy",
    category: "Branded Film · Narrative",
    description: "A narrative-first brand film for an independent theatre company, built to run festivals as much as ad slots.",
    scope: ["Director", "Client: Riverside Theatre"],
    metrics: [{ label: "Runtime", value: "3 min" }, { label: "Shoot days", value: "2" }, { label: "Views", value: "410K" }],
  },
  {
    id: "06",
    title: "Concrete Choir",
    category: "Feature Film · In Development",
    description: "My debut feature — a choir director rebuilding a program in a city shutting its schools down one by one.",
    scope: ["Director", "Writer"],
    metrics: [{ label: "Status", value: "Financing" }, { label: "Pages locked", value: "104" }, { label: "Target", value: "2027" }],
  },
];

export const IMPACT = [
  { value: 6, decimals: 0, prefix: "", suffix: "", label: "Festival selections" },
  { value: 3, decimals: 0, prefix: "", suffix: "", label: "Awards won" },
  { value: 14, decimals: 0, prefix: "", suffix: "", label: "Projects directed" },
  { value: 410, decimals: 0, prefix: "", suffix: "K+", label: "Total reel views" },
];

export const AFFILIATIONS = [
  { name: "Sundance", role: "Short Film Showcase" },
  { name: "SXSW", role: "Narrative Shorts" },
  { name: "Tribeca", role: "Official Selection" },
  { name: "Slamdance", role: "Jury Prize" },
  { name: "AFI Fest", role: "Documentary Selection" },
  { name: "Cannes Short Corner", role: "Market Screening" },
];

export const SCREENING_FRAMES = [
  { frame: "01", name: "Storyboard", desc: "Every scene blocked on paper before a location is scouted." },
  { frame: "02", name: "Blocking", desc: "Camera and actor rehearsal on location, no crew, just the shot." },
  { frame: "03", name: "Principal Photography", desc: "The take that survives the schedule, the weather, and the light." },
  { frame: "04", name: "Dailies", desc: "Reviewing footage each night to protect the next day's coverage." },
  { frame: "05", name: "Rough Cut", desc: "The first honest look at whether the film works at all." },
  { frame: "06", name: "Final Grade", desc: "Color and mix locked — the print that actually screens." },
];

export const GALLERY = [
  { src: crew, alt: "A film crew setting up lighting and camera equipment around a seated subject in a warehouse studio", caption: "Interview setup, Bloodline Radio" },
  { src: clapboard, alt: "A clapperboard held up against a desert sky reading Roadside, take nine", caption: "Take nine, Departure Gate 12" },
  { src: projector, alt: "A vintage film projector casting a bright beam of light through smoke in a dark room", caption: "Print screening, festival cut" },
  { src: filmReels, alt: "Several reels of unspooled film stock laid out on a white table", caption: "Selects, on the light table" },
  { src: cameraSetup, alt: "An empty studio lighting rig with softboxes aimed at a white backdrop", caption: "Lighting the stage before call time" },
];

export const EXPERIENCE = [
  {
    role: "Writer-Director",
    company: "Callahan Pictures",
    period: "2022 — Present",
    description: "Founded a two-person production shop to direct narrative shorts and branded film on my own terms.",
    highlights: ["Direction", "Development", "Post Supervision"],
  },
  {
    role: "Associate Director",
    company: "Northbound Documentary Co.",
    period: "2020 — 2022",
    description: "Shadowed and eventually co-directed observational documentary segments for a regional broadcast series.",
    highlights: ["Documentary", "Field Producing", "Verite Camera"],
  },
  {
    role: "1st Assistant Director",
    company: "Freelance, Austin Indie Circuit",
    period: "2018 — 2020",
    description: "Ran sets on a dozen no-to-low-budget shorts, learning the schedule before I ever trusted myself with the story.",
    highlights: ["Scheduling", "Set Management", "Line Producing"],
  },
];

export const CRAFT = [
  { label: "Directing", level: 96 },
  { label: "Cinematography", level: 84 },
  { label: "DaVinci Resolve", level: 88 },
  { label: "Sound Design", level: 72 },
  { label: "Screenwriting", level: 90 },
  { label: "Color Grading", level: 80 },
];

export const AWARDS = [
  { title: "Jury Prize, Narrative Short", issuer: "Slamdance Film Festival", year: "2025" },
  { title: "Official Selection", issuer: "Sundance Film Festival", year: "2024" },
  { title: "Best Cinematography", issuer: "Austin Film Society", year: "2023" },
  { title: "Vimeo Staff Pick", issuer: "Vimeo", year: "2023" },
];

export const TESTIMONIALS = [
  {
    quote: "Reid blocks a scene the way editors wish more directors would — by the time we got to the cut, half my job was already done on set.",
    name: "Priya Anand",
    role: "Editor, Static Bloom",
  },
  {
    quote: "Most directors chase coverage to feel safe. Reid trusts the blocking, trusts the actor, and it shows — the takes feel lived-in, not directed.",
    name: "Marcus Doyle",
    role: "Lead Actor, Last Light Diner",
  },
  {
    quote: "We programmed Bloodline Radio because it didn't feel like a first feature-length doc. The patience in the edit is rare at that experience level.",
    name: "Sasha Tremblay",
    role: "Programmer, AFI Fest",
  },
];
