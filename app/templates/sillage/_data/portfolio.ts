import roses from "../_assets/gallery/rose-petals.jpg";
import cruets from "../_assets/gallery/cruets.jpg";
import oilBottle from "../_assets/gallery/oil-bottle.jpg";
import lavenderField from "../_assets/gallery/lavender-field.jpg";

export const OWNER = {
  name: "Camille Rousseau",
  title: "Independent Perfumer",
  tagline: "The scent should arrive before you do, and stay after you've gone.",
  subtagline:
    "Founder of Atelier Rousseau — a one-woman fragrance house in Grasse, composing small-batch eau de parfums from naturally extracted absolutes and hand-blended accords.",
  email: "camille@atelierrousseau.fr",
  instagram: "https://instagram.com",
  shop: "https://example.com",
  resumeUrl: "mailto:camille@atelierrousseau.fr?subject=Resume%20request",
  atelier: "Atelier Rousseau",
  location: "Grasse, France",
  availability: "Bespoke commissions open · Autumn 2026",
  stats: [
    { value: "18", label: "Fragrances composed" },
    { value: "07", label: "Countries stocked" },
    { value: "03", label: "Industry awards" },
    { value: "2018", label: "Atelier founded" },
  ],
};

export const ABOUT = {
  intro:
    "My grandmother kept a single bottle of jasmine absolute in a locked drawer, and let me open it once a year, on my birthday. I spent the other 364 days trying to remember exactly what it smelled like.",
  philosophy:
    "A fragrance is a sentence, not a single word. If a scent smells the same from the spray to an hour on skin, I haven't finished building it — a good accord keeps revealing itself for hours, not seconds.",
  focus: [
    "Natural extraction",
    "Accord composition",
    "Bespoke commissions",
    "Sustainable sourcing",
  ],
};

export const PROCESS = [
  { step: "01", title: "Inspiration", desc: "Every fragrance starts as a memory or a place, never a formula." },
  { step: "02", title: "Formulation", desc: "Sketch the accord on paper before a single drop is measured." },
  { step: "03", title: "Maceration", desc: "Let the blend rest for weeks, sometimes months, before judging it." },
  { step: "04", title: "Blending & Aging", desc: "Fine-tune the balance as the raw alcohol mellows into the oil." },
  { step: "05", title: "Bottling & Label", desc: "Hand-fill, hand-label, hand-number every bottle in the batch." },
];

export const FRAGRANCES = [
  {
    id: "01",
    title: "Terre Battue",
    category: "Eau de Parfum · Woody Chypre",
    description: "The signature scent — clay-warm oakmoss and patchouli under a bergamot opening, built to age well on skin.",
    notes: ["Bergamot, Pink Pepper", "Oakmoss, Iris", "Patchouli, Amber"],
    metrics: [{ label: "Concentration", value: "18%" }, { label: "Batch size", value: "120" }, { label: "Launched", value: "2019" }],
  },
  {
    id: "02",
    title: "Nuit Blanche",
    category: "Eau de Parfum · Amber Floral",
    description: "A sleepless-night scent built around tuberose and vanilla absolute, designed to bloom slowly after dark.",
    notes: ["Mandarin, Saffron", "Tuberose, Ylang-Ylang", "Vanilla, Benzoin"],
    metrics: [{ label: "Concentration", value: "20%" }, { label: "Batch size", value: "90" }, { label: "Launched", value: "2021" }],
  },
  {
    id: "03",
    title: "Champ de Lavande",
    category: "Eau de Toilette · Aromatic Fougère",
    description: "A tribute to the lavender fields outside the atelier, distilled from a harvest I cut myself that July.",
    notes: ["Lavender, Bergamot", "Geranium, Clary Sage", "Tonka, Oakmoss"],
    metrics: [{ label: "Concentration", value: "12%" }, { label: "Batch size", value: "200" }, { label: "Launched", value: "2020" }],
  },
  {
    id: "04",
    title: "Fumée de Cèdre",
    category: "Extrait de Parfum · Woody Smoky",
    description: "A dense, resinous extrait built for winter — cedar and birch tar smoke wrapped around a labdanum base.",
    notes: ["Cardamom, Pink Pepper", "Cedar, Birch Tar", "Labdanum, Leather"],
    metrics: [{ label: "Concentration", value: "28%" }, { label: "Batch size", value: "60" }, { label: "Launched", value: "2023" }],
  },
  {
    id: "05",
    title: "Fleur Sauvage",
    category: "Eau de Parfum · Green Floral",
    description: "A bespoke commission for a Left Bank flower shop, since added to the permanent line by popular request.",
    notes: ["Galbanum, Violet Leaf", "Muguet, Peony", "Vetiver, White Musk"],
    metrics: [{ label: "Concentration", value: "16%" }, { label: "Batch size", value: "80" }, { label: "Launched", value: "2022" }],
  },
  {
    id: "06",
    title: "Ambre Nu",
    category: "Extrait de Parfum · Oriental Amber",
    description: "The first fragrance I ever sold — a raw, unfiltered amber accord I still can't bring myself to reformulate.",
    notes: ["Orange Blossom", "Rose Absolute", "Amber, Vanilla"],
    metrics: [{ label: "Concentration", value: "24%" }, { label: "Batch size", value: "40" }, { label: "Launched", value: "2018" }],
  },
];

export const IMPACT = [
  { value: 18, decimals: 0, prefix: "", suffix: "", label: "Fragrances composed" },
  { value: 7, decimals: 0, prefix: "", suffix: "", label: "Countries stocked" },
  { value: 3, decimals: 0, prefix: "", suffix: "", label: "Industry awards" },
  { value: 6, decimals: 1, prefix: "", suffix: "K+", label: "Bottles hand-filled" },
];

export const AFFILIATIONS = [
  { name: "Liberty London", role: "Stockist" },
  { name: "Le Bon Marché", role: "Stockist" },
  { name: "Vogue Paris", role: "Press Feature" },
  { name: "Fragrantica", role: "Editor's Pick" },
  { name: "Osmothèque", role: "Permanent Collection" },
  { name: "Colette Archive", role: "Former Stockist" },
];

export const ACCORD_LAYERS = [
  { layer: "01", name: "Top — Bergamot", desc: "The first ten minutes — bright, citrus, and gone before you notice it leaving." },
  { layer: "02", name: "Top — Pink Pepper", desc: "A sharp counterpoint to the citrus, keeping the opening from reading too sweet." },
  { layer: "03", name: "Heart — Jasmine", desc: "The scent's true identity, emerging as the top notes fade around the one-hour mark." },
  { layer: "04", name: "Heart — Iris", desc: "A powdery, cool balance against the jasmine's warmth." },
  { layer: "05", name: "Base — Sandalwood", desc: "The skin-scent that lingers for hours, carrying everything above it." },
  { layer: "06", name: "Base — Amber", desc: "The final signature — the note still on your collar the next morning." },
];

export const GALLERY = [
  { src: roses, alt: "A dense wall of pink and red rose blooms used for absolute extraction", caption: "Rose harvest, early June" },
  { src: cruets, alt: "Antique crystal perfume decanters catching warm candlelight", caption: "The decanter shelf, atelier back room" },
  { src: oilBottle, alt: "Amber glass dropper bottles of essential oil beside green leaves", caption: "Raw absolutes, ready to weigh" },
  { src: lavenderField, alt: "Rows of blooming lavender stretching toward distant hills under a blue sky", caption: "The lavender rows outside Grasse" },
];

export const EXPERIENCE = [
  {
    role: "Founder & Perfumer",
    company: "Atelier Rousseau",
    period: "2018 — Present",
    description: "Left a house perfumer role to build a fragrance line under my own name, sourced and blended entirely in-house.",
    highlights: ["Composition", "Sourcing", "Small-Batch Production"],
  },
  {
    role: "Junior Perfumer",
    company: "Maison Verlac, Grasse",
    period: "2015 — 2018",
    description: "Assisted on commercial briefs and private commissions under a senior perfumer, learning the house's accord library.",
    highlights: ["Accord Building", "Client Briefs", "Raw Material Library"],
  },
  {
    role: "Apprentice Perfumer",
    company: "ISIPCA, Versailles",
    period: "2012 — 2015",
    description: "Formal training in organic chemistry, olfactive analysis, and composition at one of France's perfumery schools.",
    highlights: ["Olfactive Analysis", "Organic Chemistry", "Composition Theory"],
  },
];

export const CRAFT = [
  { label: "Accord Building", level: 95 },
  { label: "Natural Extraction", level: 88 },
  { label: "Note Blending", level: 92 },
  { label: "IFRA Compliance", level: 80 },
  { label: "Packaging & Branding", level: 74 },
  { label: "Retail Sourcing", level: 70 },
];

export const AWARDS = [
  { title: "Art and Olfaction Award", issuer: "Independent Category", year: "2023" },
  { title: "FiFi Award, Indie Fragrance", issuer: "The Fragrance Foundation", year: "2022" },
  { title: "Permanent Collection", issuer: "Osmothèque, Versailles", year: "2021" },
  { title: "Fragrance of the Year", issuer: "Elle Magazine", year: "2020" },
];

export const TESTIMONIALS = [
  {
    quote: "Camille's accords don't announce themselves. Terre Battue took three visits to the counter before a customer finally asked what it was — and then they never left.",
    name: "Anaïs Fournier",
    role: "Fragrance Buyer, Liberty London",
  },
  {
    quote: "Most indie perfumers chase novelty. Camille chases correctness — every accord she's shown me earns its complexity instead of just collecting it.",
    name: "Julien Massot",
    role: "Fragrance Journalist, Osmoz",
  },
  {
    quote: "I commissioned Fleur Sauvage for my shop on a whim. Eighteen months later it outsells three names I've carried for a decade.",
    name: "Odile Béranger",
    role: "Owner, Fleuriste Béranger",
  },
];
