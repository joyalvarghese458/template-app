// ────────────────────────────────────────────────────────────────────
// Template taxonomy + data
// Single source of truth — consumed by both the homepage tier carousels
// (components/TemplatesSection.tsx) and the /templates filter grid.
// ────────────────────────────────────────────────────────────────────

export type TierId = "starter" | "pro" | "premium" | "elite";

export type AudienceId =
  | "designers"
  | "developers"
  | "photographers"
  | "creators"
  | "founders"
  | "agencies";

export type SectionId =
  | "digital-resume"
  | "career-portfolio"
  | "creator-portfolio"
  | "business-portfolio";

export type Template = {
  id: string;
  title: string;
  tag: string;
  tier: TierId;
  section: SectionId;
  slug?: string;
  image?: string;
  audiences: AudienceId[];
  specialties: string[];
};

export type TierMeta = {
  id: TierId;
  label: string;
  price: number;
  accent: string;
  badgeColor: string;
};

// Each tier maps 1-to-1 to a section price point
export const TIERS: TierMeta[] = [
  {
    id: "starter",
    label: "Starter",
    price: 49,
    accent: "from-[#0a1a3f] via-[#06122e] to-[#030814]",
    badgeColor: "bg-brand/10 text-brand-dark border-brand/30",
  },
  {
    id: "pro",
    label: "Pro",
    price: 99,
    accent: "from-[#1e3a8a] via-[#1d4ed8] to-[#1e3a8a]",
    badgeColor: "bg-brand/15 text-brand-dark border-brand/40",
  },
  {
    id: "premium",
    label: "Premium",
    price: 149,
    accent: "from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a]",
    badgeColor: "bg-brand/20 text-brand-dark border-brand/50",
  },
  {
    id: "elite",
    label: "Elite",
    price: 1599,
    accent: "from-[#7c3aed] via-[#6d28d9] to-[#4c1d95]",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
  },
];

export const TIER_BY_ID: Record<TierId, TierMeta> = Object.fromEntries(
  TIERS.map((t) => [t.id, t]),
) as Record<TierId, TierMeta>;

// ────────────────────────────────────────────────────────────────────
// Section taxonomy — primary grouping for the templates grid.
// Section price: Digital Resume 49 · Career Portfolio 99
//               Creator Portfolio 149 · Business Portfolio 1599
// ────────────────────────────────────────────────────────────────────

export type SectionMeta = {
  id: SectionId;
  label: string;
  blurb: string;
};

export const SECTIONS: SectionMeta[] = [
  {
    id: "digital-resume",
    label: "Digital Resume",
    blurb: "Clean, one-page professional resumes — AED 49",
  },
  {
    id: "career-portfolio",
    label: "Career Portfolio",
    blurb: "Showcase your skills, experience & work history — AED 99",
  },
  {
    id: "creator-portfolio",
    label: "Creator Portfolio",
    blurb: "Creative portfolios for designers, creators & more — AED 149",
  },
  {
    id: "business-portfolio",
    label: "Business Portfolio",
    blurb: "For founders, agencies & consultants — AED 1,599",
  },
];

export const SECTION_ORDER: SectionId[] = [
  "digital-resume",
  "career-portfolio",
  "creator-portfolio",
  "business-portfolio",
];

export const SECTION_BY_ID: Record<SectionId, SectionMeta> = Object.fromEntries(
  SECTIONS.map((s) => [s.id, s]),
) as Record<SectionId, SectionMeta>;

// ────────────────────────────────────────────────────────────────────
// Audience taxonomy — secondary filter
// ────────────────────────────────────────────────────────────────────

export type AudienceMeta = {
  id: AudienceId;
  label: string;
  blurb: string;
};

export const AUDIENCES: AudienceMeta[] = [
  {
    id: "designers",
    label: "Designers",
    blurb: "UI/UX, brand, motion, 3D & more",
  },
  {
    id: "developers",
    label: "Developers",
    blurb: "Frontend, full-stack, mobile, AI",
  },
  {
    id: "photographers",
    label: "Photographers",
    blurb: "Galleries & visual storytelling",
  },
  {
    id: "creators",
    label: "Creators",
    blurb: "Writers, YouTubers, podcasters, musicians",
  },
  {
    id: "founders",
    label: "Founders",
    blurb: "SaaS, startup, consultants, coaches",
  },
  {
    id: "agencies",
    label: "Agencies",
    blurb: "Studios, luxury, Webflow/Framer",
  },
];

// ────────────────────────────────────────────────────────────────────
// Specialty taxonomy
// ────────────────────────────────────────────────────────────────────

export type SpecialtyMeta = { id: string; label: string };

export const SPECIALTIES: Record<AudienceId, SpecialtyMeta[]> = {
  designers: [
    { id: "ui-ux", label: "UI/UX" },
    { id: "brand", label: "Brand" },
    { id: "graphic", label: "Graphic" },
    { id: "motion", label: "Motion" },
    { id: "3d", label: "3D" },
    { id: "illustrator", label: "Illustrator" },
    { id: "architect", label: "Architect" },
    { id: "interior", label: "Interior" },
    { id: "fashion", label: "Fashion" },
  ],
  developers: [
    { id: "frontend", label: "Frontend" },
    { id: "full-stack", label: "Full Stack" },
    { id: "mobile", label: "Mobile" },
    { id: "ai-ml", label: "AI / ML" },
    { id: "data-science", label: "Data Science" },
    { id: "game", label: "Game" },
    { id: "devops", label: "DevOps" },
    { id: "no-code", label: "No-Code" },
    { id: "security", label: "Security" },
  ],
  photographers: [
    { id: "gallery", label: "Gallery" },
    { id: "fashion", label: "Fashion" },
    { id: "fine-art", label: "Fine Art" },
    { id: "wedding", label: "Wedding" },
  ],
  creators: [
    { id: "writer", label: "Writer" },
    { id: "copywriter", label: "Copywriter" },
    { id: "youtuber", label: "YouTuber" },
    { id: "podcaster", label: "Podcaster" },
    { id: "musician", label: "Musician / DJ" },
    { id: "filmmaker", label: "Filmmaker" },
    { id: "influencer", label: "Influencer" },
    { id: "model-actor", label: "Model / Actor" },
  ],
  founders: [
    { id: "saas", label: "SaaS" },
    { id: "startup", label: "Startup" },
    { id: "consultant", label: "Consultant" },
    { id: "coach", label: "Coach" },
    { id: "personal-brand", label: "Personal Brand" },
    { id: "executive", label: "Executive" },
    { id: "speaker", label: "Speaker" },
    { id: "real-estate", label: "Real Estate" },
    { id: "ecommerce", label: "Ecommerce" },
  ],
  agencies: [
    { id: "creative-studio", label: "Creative Studio" },
    { id: "luxury", label: "Luxury" },
    { id: "webflow-framer", label: "Webflow / Framer" },
    { id: "ai-automation", label: "AI Automation" },
  ],
};

// ────────────────────────────────────────────────────────────────────
// Templates
//
// Pricing is section-level — every template inherits its section price:
//   Digital Resume   → starter  (AED 49)
//   Career Portfolio → pro      (AED 99)   ← all 14 slugged templates live here
//   Creator Portfolio→ premium  (AED 149)
//   Business Portfolio→ elite   (AED 1,599)
// ────────────────────────────────────────────────────────────────────

export const TEMPLATES: Template[] = [
  // ── Digital Resume  (AED 49 · tier: starter) ─────────────────────
  {
    id: "dr1",
    slug: "swift",
    title: "Swift",
    tag: "Digital Resume · Single page",
    tier: "starter",
    section: "digital-resume",
    audiences: ["founders", "creators", "developers"],
    specialties: ["personal-brand", "consultant", "frontend"],
  },
  {
    id: "dr2",
    slug: "slate",
    title: "Slate",
    tag: "Digital Resume · Minimal",
    tier: "starter",
    section: "digital-resume",
    audiences: ["founders", "creators"],
    specialties: ["personal-brand", "writer"],
  },
  {
    id: "dr3",
    slug: "crisp",
    title: "Crisp",
    tag: "Digital Resume · Clean",
    tier: "starter",
    section: "digital-resume",
    audiences: ["developers", "designers"],
    specialties: ["frontend", "ui-ux", "graphic"],
  },
  {
    id: "dr4",
    slug: "pulse",
    title: "Pulse",
    tag: "Digital Resume · Bold",
    tier: "starter",
    section: "digital-resume",
    audiences: ["founders", "creators", "developers"],
    specialties: ["personal-brand", "speaker", "ai-ml"],
  },

  // ── Career Portfolio  (AED 99 · tier: pro) ───────────────────────
  // simple cards
  {
    id: "cp2",
    slug: "ladder",
    title: "Ladder",
    tag: "Career Portfolio · Professional",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["founders", "creators"],
    specialties: ["executive", "personal-brand", "speaker"],
  },
  {
    id: "adaline",
    slug: "adaline",
    title: "Adaline",
    tag: "Full Stack Developer · Botanical",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["developers"],
    specialties: ["full-stack", "engineering", "saas"],
  },
  {
    id: "torque",
    slug: "torque",
    title: "Torque",
    tag: "Mechanical Engineer · Industrial Blueprint",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["developers"],
    specialties: ["engineering", "cad", "manufacturing"],
  },
  {
    id: "byline",
    slug: "byline",
    title: "Byline",
    tag: "Journalist · Editorial Newsroom",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["creators"],
    specialties: ["writer", "copywriter"],
  },
  {
    id: "cortex",
    slug: "cortex",
    title: "Cortex",
    tag: "Data Scientist · ML Analytics",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["developers"],
    specialties: ["ai-ml", "data-science"],
  },
  {
    id: "datalab",
    slug: "datalab",
    title: "DataLab",
    tag: "Data Science Student · 3D Interactive",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["developers"],
    specialties: ["ai-ml", "data-science"],
  },
  {
    id: "ascend",
    slug: "ascend",
    title: "Ascend",
    tag: "Career Coach · Job Search Strategist",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["founders"],
    specialties: ["coach", "consultant", "personal-brand"],
  },
  {
    id: "cipher",
    slug: "cipher",
    title: "Cipher",
    tag: "Cybersecurity Student · Offensive Security",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["developers"],
    specialties: ["security"],
  },
  {
    id: "canvas",
    slug: "canvas",
    title: "Canvas",
    tag: "UI/UX & Graphic Designer · Bauhaus Studio",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["designers"],
    specialties: ["ui-ux", "graphic", "brand"],
  },
  {
    id: "prism",
    slug: "prism",
    title: "Prism",
    tag: "Product Designer · Glassmorphic Aurora",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["designers"],
    specialties: ["ui-ux", "graphic"],
  },
  {
    id: "strata",
    slug: "strata",
    title: "Strata",
    tag: "Civil Engineer · Structural & Site Design",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["developers"],
    specialties: ["engineering", "construction", "structural"],
  },
  {
    id: "redline",
    slug: "redline",
    title: "Redline",
    tag: "Mechanical Engineer · Motorsport & Automation",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["developers"],
    specialties: ["engineering", "manufacturing", "cad"],
  },
  {
    id: "lithos",
    slug: "lithos",
    title: "Lithos",
    tag: "Geology Student · Field & Earth Sciences",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["developers"],
    specialties: ["geology", "earth-science", "fieldwork"],
  },
  {
    id: "surge",
    slug: "surge",
    title: "Surge",
    tag: "Digital Marketing Specialist · Growth & Performance",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["creators", "founders"],
    specialties: ["copywriter", "personal-brand", "consultant"],
  },
  {
    id: "atlas",
    slug: "atlas",
    title: "Atlas",
    tag: "Business Consultant · Boardroom Navy & Gold",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["founders", "agencies"],
    specialties: ["executive", "consultant", "personal-brand"],
  },
  {
    id: "echelon",
    slug: "echelon",
    title: "Echelon",
    tag: "Chief Executive Officer · Graphite Command",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["founders", "agencies"],
    specialties: ["executive", "personal-brand", "consultant"],
  },
  {
    id: "umami",
    slug: "umami",
    title: "Umami",
    tag: "Executive Chef · Charcoal Hearth",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["creators", "founders"],
    specialties: ["personal-brand", "consultant"],
  },
  {
    id: "parallax",
    slug: "parallax",
    title: "Parallax",
    tag: "Animation & VFX Student · Render Viewport",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["designers", "creators"],
    specialties: ["motion", "3d"],
  },
  {
    id: "cp3",
    slug: "serenity",
    title: "Serenity",
    tag: "Wellness · Yoga & Mindfulness",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["creators"],
    specialties: ["wellness", "yoga", "mindfulness"],
  },
  {
    id: "cp4",
    slug: "elevate",
    title: "Elevate",
    tag: "Career Portfolio · Premium",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["founders", "agencies"],
    specialties: ["executive", "consultant", "personal-brand"],
  },
  // 14 live-template slugs
  {
    id: "s3",
    slug: "cardstock",
    title: "Cardstock",
    tag: "CV · Card layout",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["creators", "founders"],
    specialties: ["writer"],
  },
  {
    id: "s4",
    slug: "solo",
    title: "Solo",
    tag: "Graphic Designer · Single page",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["designers"],
    specialties: ["graphic", "brand"],
  },
  {
    id: "p11",
    slug: "graphic-designer",
    title: "Luminary",
    tag: "Graphic Designer · Premium SPA",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["designers"],
    specialties: ["graphic", "brand", "motion"],
  },
  {
    id: "s5",
    slug: "profile-one",
    title: "Profile One",
    tag: "Personal brand · 3D Interactive",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["founders", "creators"],
    specialties: ["personal-brand", "coach"],
  },
  {
    id: "s6",
    slug: "jack-3d-portfolio",
    title: "Classic",
    tag: "CV · Print-ready",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["creators", "founders"],
    specialties: ["writer"],
  },
  {
    id: "s8",
    slug: "snap",
    title: "Snap",
    tag: "Photographer · Luxury Cinematic",
    tier: "pro",
    section: "career-portfolio",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=420&h=860&q=80&auto=format&fit=crop",
    audiences: ["photographers"],
    specialties: ["gallery", "wedding", "fashion", "fine-art"],
  },
  {
    id: "s9",
    slug: "indie",
    title: "Indie",
    tag: "Motion & VFX · Cinematic",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["designers", "creators"],
    specialties: ["motion", "3d"],
  },
  {
    id: "s10",
    slug: "onefolio",
    title: "Onefolio",
    tag: "Creative Flow · Designer Portfolio",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["creators", "founders", "designers"],
    specialties: ["graphic", "brand", "motion"],
  },
  {
    id: "p1",
    slug: "designer",
    title: "Designer",
    tag: "Designer · Single page",
    tier: "pro",
    section: "career-portfolio",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=420&h=860&q=80&auto=format&fit=crop",
    audiences: ["designers"],
    specialties: ["ui-ux", "graphic"],
  },
  {
    id: "p3",
    slug: "gallery-plus",
    title: "Gallery+",
    tag: "Photographer · Premium Portfolio",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["photographers"],
    specialties: ["gallery", "fine-art", "wedding", "fashion"],
  },
  {
    id: "x1",
    slug: "atelier",
    title: "Atelier",
    tag: "Agency · Flagship",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["agencies", "designers"],
    specialties: ["luxury", "creative-studio"],
  },
  {
    id: "x2",
    slug: "minimalist",
    title: "Reel",
    tag: "Director · Showreel",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["creators"],
    specialties: ["filmmaker", "model-actor"],
  },
  {
    id: "x3",
    slug: "pure",
    title: "Magnum",
    tag: "Photographer · Pro Max",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["photographers"],
    specialties: ["gallery", "fashion", "fine-art"],
  },
  {
    id: "x11",
    slug: "designer-pro",
    title: "Designer Pro",
    tag: "Creative Portfolio · Dark Animated SPA",
    tier: "pro",
    section: "career-portfolio",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=420&h=860&q=80&auto=format&fit=crop",
    audiences: ["designers", "creators"],
    specialties: ["motion", "ui-ux", "graphic"],
  },
  {
    id: "cp5",
    slug: "amplify",
    title: "Amplify",
    tag: "Digital Marketer · Results-first",
    tier: "pro",
    section: "career-portfolio",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=420&h=860&q=80&auto=format&fit=crop",
    audiences: ["creators", "founders"],
    specialties: ["copywriter", "personal-brand", "consultant"],
  },
  {
    id: "cp1",
    slug: "journey",
    title: "Journey",
    tag: "Career Portfolio · Timeline",
    tier: "pro",
    section: "career-portfolio",
    audiences: ["founders", "developers"],
    specialties: ["consultant", "frontend", "full-stack"],
  },

  // ── Creator Portfolio  (AED 149 · tier: premium) ─────────────────
  {
    id: "x5",
    slug: "helm",
    title: "Helm",
    tag: "Chief Executive Officer · Ivory Minimalist",
    tier: "premium",
    section: "creator-portfolio",
    image:
      "https://images.pexels.com/photos/31497519/pexels-photo-31497519.jpeg?cs=srgb&fm=jpg&w=420&h=860&fit=crop",
    audiences: ["founders", "agencies"],
    specialties: ["executive", "personal-brand", "consultant"],
  },
  {
    id: "s1",
    title: "Minimalist",
    tag: "Resume · Single page",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["creators", "founders"],
    specialties: ["writer", "consultant", "personal-brand"],
  },
  {
    id: "s2",
    title: "Pure",
    tag: "Personal · Light",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["creators", "founders"],
    specialties: ["personal-brand"],
  },
  {
    id: "s7",
    title: "Quill",
    tag: "Writer · Lite",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["creators"],
    specialties: ["writer", "copywriter"],
  },
  {
    id: "p2",
    title: "DevHub",
    tag: "Developer · Projects grid",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["developers"],
    specialties: ["frontend", "full-stack"],
  },
  {
    id: "p4",
    title: "Studio",
    tag: "Creative · Case studies",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["designers", "agencies"],
    specialties: ["creative-studio", "ui-ux"],
  },
  {
    id: "p5",
    title: "Architect",
    tag: "Architect · Project pages",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["designers"],
    specialties: ["architect", "interior"],
  },
  {
    id: "p6",
    title: "Artisan",
    tag: "Artist · Collection",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["designers", "creators"],
    specialties: ["illustrator", "3d"],
  },
  {
    id: "p7",
    title: "Consult",
    tag: "Consultant · Services",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["founders"],
    specialties: ["consultant", "coach"],
  },
  {
    id: "p8",
    title: "Stage",
    tag: "Speaker · Talks",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["founders", "creators"],
    specialties: ["speaker", "personal-brand"],
  },
  {
    id: "p9",
    title: "Aura",
    tag: "Influencer · Press kit",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["creators"],
    specialties: ["influencer", "model-actor"],
  },
  {
    id: "p10",
    title: "Brandmark",
    tag: "Brand · Identity",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["designers", "agencies"],
    specialties: ["brand", "graphic"],
  },
  {
    id: "x4",
    title: "Blueprint",
    tag: "Architect · Premier",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["designers"],
    specialties: ["architect", "interior"],
  },

  {
    id: "x6",
    title: "Maker Pro",
    tag: "Designer · Elite",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["designers"],
    specialties: ["ui-ux", "motion", "graphic"],
  },
  {
    id: "x7",
    title: "Curate",
    tag: "Artist · Atelier",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["designers", "creators"],
    specialties: ["illustrator", "fine-art", "3d"],
  },
  {
    id: "x8",
    title: "Atrium",
    tag: "Studio · Master",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["agencies"],
    specialties: ["creative-studio", "luxury", "webflow-framer"],
  },
  {
    id: "x9",
    title: "Beacon",
    tag: "Brand · Premier",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["designers", "agencies", "founders"],
    specialties: ["brand", "personal-brand"],
  },
  {
    id: "x10",
    title: "Lumen",
    tag: "Editorial · Premium",
    tier: "premium",
    section: "creator-portfolio",
    audiences: ["creators"],
    specialties: ["writer", "copywriter"],
  },

  // ── Business Portfolio  (AED 1,599 · tier: elite) ────────────────
  {
    id: "bp1",
    title: "Venture",
    tag: "Business Portfolio · Founder",
    tier: "elite",
    section: "business-portfolio",
    audiences: ["founders"],
    specialties: ["startup", "saas", "personal-brand"],
  },
  {
    id: "bp2",
    title: "Apex",
    tag: "Business Portfolio · Executive",
    tier: "elite",
    section: "business-portfolio",
    audiences: ["founders", "agencies"],
    specialties: ["executive", "consultant", "creative-studio"],
  },
  {
    id: "bp3",
    title: "Pinnacle",
    tag: "Business Portfolio · Agency",
    tier: "elite",
    section: "business-portfolio",
    audiences: ["agencies", "founders"],
    specialties: ["luxury", "creative-studio", "webflow-framer"],
  },
];

// ────────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────────

export function templateImage(t: Pick<Template, "id" | "image">) {
  return t.image ?? `https://picsum.photos/seed/${t.id}/420/860`;
}

export function templateHref(t: Pick<Template, "id" | "slug">) {
  return `/templates/${t.slug ?? t.id}`;
}

export const WA_NUMBER = "971568450406";

export function waLink(tierLabel: string, name: string, price: number) {
  const msg = `Hi! I'd like to order the "${name}" (${tierLabel} tier) portfolio template at AED ${price}.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ────────────────────────────────────────────────────────────────────
// URL param parsing — multi-select, comma-separated.
// ────────────────────────────────────────────────────────────────────

function toArray(raw: string | string[] | undefined): string[] {
  if (!raw) return [];
  const list = Array.isArray(raw) ? raw : [raw];
  return list
    .flatMap((v) => v.split(","))
    .map((s) => s.trim())
    .filter(Boolean);
}

const SECTION_IDS = new Set<SectionId>(SECTIONS.map((s) => s.id));
const AUDIENCE_IDS = new Set<AudienceId>(AUDIENCES.map((a) => a.id));
const TIER_IDS = new Set<TierId>(TIERS.map((t) => t.id));
const ALL_SPECIALTY_IDS = new Set<string>(
  (Object.keys(SPECIALTIES) as AudienceId[]).flatMap((id) =>
    SPECIALTIES[id].map((s) => s.id),
  ),
);

export function parseSections(raw: string | string[] | undefined): SectionId[] {
  return toArray(raw).filter((v): v is SectionId =>
    SECTION_IDS.has(v as SectionId),
  );
}

export function parseAudiences(
  raw: string | string[] | undefined,
): AudienceId[] {
  return toArray(raw).filter((v): v is AudienceId =>
    AUDIENCE_IDS.has(v as AudienceId),
  );
}

export function parseTiers(raw: string | string[] | undefined): TierId[] {
  return toArray(raw).filter((v): v is TierId => TIER_IDS.has(v as TierId));
}

export function parseSpecialties(raw: string | string[] | undefined): string[] {
  return toArray(raw).filter((v) => ALL_SPECIALTY_IDS.has(v));
}

export function parseQuery(raw: string | string[] | undefined): string {
  const v = Array.isArray(raw) ? raw[0] : raw;
  return (v ?? "").trim().slice(0, 100);
}

// ────────────────────────────────────────────────────────────────────
// Filtering — OR within a category, AND across categories
// ────────────────────────────────────────────────────────────────────

export function filterTemplates(args: {
  sections?: SectionId[];
  audiences: AudienceId[];
  specialties: string[];
  tiers: TierId[];
  q: string;
}): Template[] {
  const q = args.q.toLowerCase();
  return TEMPLATES.filter((t) => {
    if (args.sections?.length && !args.sections.includes(t.section))
      return false;
    if (args.tiers.length && !args.tiers.includes(t.tier)) return false;
    if (
      args.audiences.length &&
      !args.audiences.some((a) => t.audiences.includes(a))
    )
      return false;
    if (
      args.specialties.length &&
      !args.specialties.some((s) => t.specialties.includes(s))
    )
      return false;
    if (q && !`${t.title} ${t.tag}`.toLowerCase().includes(q)) return false;
    return true;
  });
}

// ────────────────────────────────────────────────────────────────────
// Drawer helpers
// ────────────────────────────────────────────────────────────────────

export function getAllSpecialties(): SpecialtyMeta[] {
  const seen = new Map<string, SpecialtyMeta>();
  for (const audId of Object.keys(SPECIALTIES) as AudienceId[]) {
    for (const s of SPECIALTIES[audId]) {
      if (!seen.has(s.id)) seen.set(s.id, s);
    }
  }
  return Array.from(seen.values()).sort((a, b) =>
    a.label.localeCompare(b.label),
  );
}

export const SECTION_COUNTS: Record<SectionId, number> = (() => {
  const counts = {
    "digital-resume": 0,
    "career-portfolio": 0,
    "creator-portfolio": 0,
    "business-portfolio": 0,
  } as Record<SectionId, number>;
  for (const t of TEMPLATES) counts[t.section]++;
  return counts;
})();

export const AUDIENCE_COUNTS: Record<AudienceId, number> = (() => {
  const counts = {} as Record<AudienceId, number>;
  for (const a of AUDIENCES) counts[a.id] = 0;
  for (const t of TEMPLATES) for (const a of t.audiences) counts[a]++;
  return counts;
})();

export const TIER_COUNTS: Record<TierId, number> = (() => {
  const counts = { starter: 0, pro: 0, premium: 0, elite: 0 } as Record<
    TierId,
    number
  >;
  for (const t of TEMPLATES) counts[t.tier]++;
  return counts;
})();

export const SPECIALTY_COUNTS: Record<string, number> = (() => {
  const counts: Record<string, number> = {};
  for (const t of TEMPLATES)
    for (const s of t.specialties) counts[s] = (counts[s] ?? 0) + 1;
  return counts;
})();

export const SECTION_LABEL: Record<SectionId, string> = Object.fromEntries(
  SECTIONS.map((s) => [s.id, s.label]),
) as Record<SectionId, string>;

export const AUDIENCE_LABEL: Record<AudienceId, string> = Object.fromEntries(
  AUDIENCES.map((a) => [a.id, a.label]),
) as Record<AudienceId, string>;

export const SPECIALTY_LABEL: Record<string, string> = (() => {
  const out: Record<string, string> = {};
  for (const audId of Object.keys(SPECIALTIES) as AudienceId[]) {
    for (const s of SPECIALTIES[audId]) out[s.id] = s.label;
  }
  return out;
})();
