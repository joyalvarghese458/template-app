import brassClockFace from "../_assets/gallery/brass-clock-face.jpg";
import pocketWatch from "../_assets/gallery/pocket-watch.jpg";
import movementMacro from "../_assets/gallery/movement-macro.jpg";
import gearsCloseup from "../_assets/gallery/gears-closeup.jpg";

export const OWNER = {
  name: "Elias Voss",
  title: "Independent Watchmaker",
  tagline: "A watch should still be running after everyone who built it is gone.",
  subtagline:
    "Founder of Atelier Voss — a one-man workshop in Le Locle, Switzerland, building fully bespoke mechanical watches from raw movement to hand-finished case, one commission at a time.",
  email: "elias@ateliervoss.ch",
  instagram: "https://instagram.com",
  shop: "https://example.com",
  resumeUrl: "mailto:elias@ateliervoss.ch?subject=Resume%20request",
  atelier: "Atelier Voss",
  location: "Le Locle, Switzerland",
  availability: "Bespoke waitlist open · 2027 delivery",
  stats: [
    { value: "47", label: "Timepieces completed" },
    { value: "620", label: "Avg. hours per watch" },
    { value: "06", label: "Complications mastered" },
    { value: "2015", label: "Atelier founded" },
  ],
};

export const ABOUT = {
  intro:
    "My grandfather repaired clocks for a living, never watches — too fussy, he said. I took his tools anyway, and spent a decade learning exactly which parts of \"fussy\" he was right about.",
  philosophy:
    "A movement isn't finished when it keeps time. It's finished when the bridges are anglé by hand, the screw heads are polished flat, and every part left ugly by the factory has been quietly made honest.",
  focus: [
    "Movement design",
    "Hand finishing (anglage)",
    "Complications",
    "Vintage restoration",
  ],
};

export const PROCESS = [
  { step: "01", title: "Consultation & Design", desc: "We sketch the brief together — complication, case metal, dial language — before a single part is ordered." },
  { step: "02", title: "Movement Sourcing", desc: "A base caliber is selected and stripped down to the mainplate, ready for modification or a full rebuild." },
  { step: "03", title: "Case Fabrication", desc: "The case is machined and hand-finished in-house, fitted to the movement rather than the other way around." },
  { step: "04", title: "Assembly & Timing", desc: "Every jewel, wheel, and spring is set by hand, then regulated across positions until it holds to spec." },
  { step: "05", title: "Hand Finishing", desc: "Bridges get anglage and Geneva stripes; screw heads are black-polished under the loupe, one at a time." },
  { step: "06", title: "Delivery & Presentation", desc: "The finished piece is cased, timed for a final week on the wrist, and delivered with its full build record." },
];

export const TIMEPIECES = [
  {
    id: "01",
    title: "Le Locle Reserve",
    category: "Manual Wind · Small Seconds",
    description: "The house's signature build — a hand-wound caliber finished to the same standard as pieces ten times the price, because it's the one I wear.",
    notes: ["Hand-wound, 70h reserve barrel", "17 jewels, Glucydur balance", "38mm, 950 platinum case"],
    metrics: [{ label: "Caliber", value: "EV-01" }, { label: "Reserve", value: "70h" }, { label: "Built", value: "2019" }],
  },
  {
    id: "02",
    title: "Méridien GMT",
    category: "Automatic · Dual Time",
    description: "A travel commission for a client who crosses four time zones a week — a second hour hand you can set without stopping the first.",
    notes: ["Automatic, modified ETA base", "25 jewels, free-sprung balance", "39mm, stainless steel case"],
    metrics: [{ label: "Caliber", value: "EV-04G" }, { label: "Reserve", value: "48h" }, { label: "Built", value: "2021" }],
  },
  {
    id: "03",
    title: "Quantième",
    category: "Annual Calendar",
    description: "Tracks the date and month through every 30- and 31-day change with a single corrector — no correction needed until March.",
    notes: ["Automatic, in-house module", "31 jewels, silicon hairspring", "40mm, rose gold case"],
    metrics: [{ label: "Caliber", value: "EV-07C" }, { label: "Reserve", value: "56h" }, { label: "Built", value: "2022" }],
  },
  {
    id: "04",
    title: "Trente Secondes",
    category: "Chronograph · Column Wheel",
    description: "A column-wheel chronograph built the slow way — cam-actuated switching was faster to make and I couldn't live with that shortcut.",
    notes: ["Manual wind, column-wheel control", "23 jewels, horizontal clutch", "40mm, blackened steel case"],
    metrics: [{ label: "Caliber", value: "EV-09CH" }, { label: "Reserve", value: "50h" }, { label: "Built", value: "2023" }],
  },
  {
    id: "05",
    title: "L'Éclipse",
    category: "Perpetual Calendar · Moonphase",
    description: "The most complicated build to leave the bench — a perpetual calendar accurate until 2100, with a moonphase off by one day per 122 years.",
    notes: ["Automatic, 316-component movement", "37 jewels, adjusted 6 positions", "40mm, platinum case"],
    metrics: [{ label: "Caliber", value: "EV-12P" }, { label: "Reserve", value: "60h" }, { label: "Built", value: "2024" }],
  },
  {
    id: "06",
    title: "Premier Calibre",
    category: "Manual Wind · Reference Piece",
    description: "The first watch I ever finished, kept on the shelf above the bench and not for sale — everything since has been trying to out-build it.",
    notes: ["Hand-wound, pocket-watch ébauche", "15 jewels, bimetallic balance", "36mm, sterling silver case"],
    metrics: [{ label: "Caliber", value: "EV-00" }, { label: "Reserve", value: "36h" }, { label: "Built", value: "2015" }],
  },
];

export const IMPACT = [
  { value: 47, decimals: 0, prefix: "", suffix: "", label: "Timepieces completed" },
  { value: 6, decimals: 0, prefix: "", suffix: "", label: "Complications mastered" },
  { value: 620, decimals: 0, prefix: "", suffix: "", label: "Avg. hours per watch" },
  { value: 14, decimals: 0, prefix: "", suffix: "", label: "Countries delivered to" },
];

export const AFFILIATIONS = [
  { name: "Hodinkee", role: "Press Feature" },
  { name: "A Collected Man", role: "Stockist" },
  { name: "Phillips Watches", role: "Auction Feature" },
  { name: "WOSTEP", role: "Certified Graduate" },
  { name: "AHCI", role: "Candidate Member" },
  { name: "GPHG", role: "Petite Aiguille Finalist" },
];

export const MOVEMENT_LAYERS = [
  { layer: "01", name: "Mainspring Barrel", desc: "Stores the energy that powers the entire movement — up to 70 hours on a full wind." },
  { layer: "02", name: "Gear Train", desc: "Steps that stored energy down, turning the barrel's slow torque into a fast, steady rotation." },
  { layer: "03", name: "Escapement", desc: "The mechanism the atelier is named for — releases the gear train's energy in small, regular ticks." },
  { layer: "04", name: "Balance & Hairspring", desc: "Oscillates at 21,600 vibrations per hour — the part actually responsible for keeping time." },
  { layer: "05", name: "Pallet Fork", desc: "The go-between, locking and releasing the escape wheel with every swing of the balance." },
  { layer: "06", name: "Dial & Hands", desc: "The only parts the wearer ever sees, hiding two hundred components working underneath." },
];

export const GALLERY = [
  { src: movementMacro, alt: "A watch caliber mid-assembly, the balance wheel not yet fitted", caption: "A caliber mid-build, bench-side" },
  { src: pocketWatch, alt: "A fully restored antique pocket watch resting on a table", caption: "A client restoration, fully serviced" },
  { src: gearsCloseup, alt: "Gold and black steel gears from a winding clock mechanism", caption: "Third and fourth wheel of the train" },
  { src: brassClockFace, alt: "An antique brass clock face with Roman numerals", caption: "A regulator kept for reference" },
];

export const EXPERIENCE = [
  {
    role: "Founder & Watchmaker",
    company: "Atelier Voss",
    period: "2015 — Present",
    description: "Left a maison bench to build under my own name — every commission designed, sourced, and finished in one small workshop.",
    highlights: ["Movement Design", "Hand Finishing", "Bespoke Commissions"],
  },
  {
    role: "Journeyman Watchmaker",
    company: "Maison Chappuis, Le Locle",
    period: "2011 — 2015",
    description: "Assisted a senior watchmaker on complicated pieces, learning the house's approach to anglage and in-house calendar modules.",
    highlights: ["Complications", "Anglage", "Client Repairs"],
  },
  {
    role: "WOSTEP Diploma",
    company: "WOSTEP, Neuchâtel",
    period: "2008 — 2011",
    description: "Formal training in movement theory, precision timing, and traditional hand-finishing techniques at a Swiss watchmaking institute.",
    highlights: ["Movement Theory", "Precision Timing", "Hand Finishing"],
  },
];

export const CRAFT = [
  { label: "Hand Finishing (Anglage)", level: 96 },
  { label: "Regulation & Timing", level: 94 },
  { label: "Movement Design", level: 92 },
  { label: "Complications", level: 85 },
  { label: "Case Fabrication", level: 80 },
  { label: "Vintage Restoration", level: 75 },
];

export const AWARDS = [
  { title: "AHCI Candidate Member", issuer: "Académie Horlogère des Créateurs Indépendants", year: "2022" },
  { title: "Petite Aiguille Finalist", issuer: "Grand Prix d'Horlogerie de Genève", year: "2021" },
  { title: "\"Independents to Watch\"", issuer: "Hodinkee Feature", year: "2020" },
  { title: "Certification with Distinction", issuer: "WOSTEP, Neuchâtel", year: "2011" },
];

export const TESTIMONIALS = [
  {
    quote: "I asked for a simple time-only watch. Elias talked me out of it, and the GMT he built instead is the only watch I've worn every day for three years.",
    name: "Marcus Feldmann",
    role: "Collector, Zürich",
  },
  {
    quote: "Most independents chase complications for the story. Elias chases the finishing — I've had his pieces under a loupe next to six-figure watches and his anglage wins.",
    name: "Priya Ramanathan",
    role: "Watch Journalist, The Balance Wheel",
  },
  {
    quote: "He restored my grandfather's pocket watch and refused to modernize a single part of it. It runs better now than it likely ever did new.",
    name: "Odette Laurent",
    role: "Private Client, Geneva",
  },
];
