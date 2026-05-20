// ────────────────────────────────────────────────────────────────────
// Template taxonomy + data
// Single source of truth — consumed by both the homepage tier carousels
// (components/TemplatesSection.tsx) and the /templates filter grid.
// ────────────────────────────────────────────────────────────────────

export type TierId = "starter" | "pro" | "premium";

export type AudienceId =
  | "designers"
  | "developers"
  | "photographers"
  | "creators"
  | "founders"
  | "agencies";

export type Template = {
  id: string;
  title: string;
  tag: string;
  tier: TierId;
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
];

export const TIER_BY_ID: Record<TierId, TierMeta> = Object.fromEntries(
  TIERS.map((t) => [t.id, t])
) as Record<TierId, TierMeta>;

// ────────────────────────────────────────────────────────────────────
// Audience taxonomy — primary filter
// Kept intentionally small (6 buckets) to avoid choice paralysis.
// ────────────────────────────────────────────────────────────────────

export type AudienceMeta = {
  id: AudienceId;
  label: string;
  blurb: string;
};

export const AUDIENCES: AudienceMeta[] = [
  { id: "designers", label: "Designers", blurb: "UI/UX, brand, motion, 3D & more" },
  { id: "developers", label: "Developers", blurb: "Frontend, full-stack, mobile, AI" },
  { id: "photographers", label: "Photographers", blurb: "Galleries & visual storytelling" },
  { id: "creators", label: "Creators", blurb: "Writers, YouTubers, podcasters, musicians" },
  { id: "founders", label: "Founders", blurb: "SaaS, startup, consultants, coaches" },
  { id: "agencies", label: "Agencies", blurb: "Studios, luxury, Webflow/Framer" },
];

// ────────────────────────────────────────────────────────────────────
// Specialty taxonomy — appears contextually after an audience is picked
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
    { id: "game", label: "Game" },
    { id: "devops", label: "DevOps" },
    { id: "no-code", label: "No-Code" },
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
// ────────────────────────────────────────────────────────────────────

export const TEMPLATES: Template[] = [
  // ── Starter ─────────────────────────────────────────────────────
  { id: "s1", slug: "minimalist", title: "Minimalist", tag: "Resume · Single page", tier: "starter",
    audiences: ["creators", "founders"], specialties: ["writer", "consultant", "personal-brand"] },
  { id: "s2", slug: "pure", title: "Pure", tag: "Personal · Light", tier: "starter",
    audiences: ["creators", "founders"], specialties: ["personal-brand"] },
  { id: "s3", title: "Cardstock", tag: "CV · Card layout", tier: "starter",
    audiences: ["creators", "founders"], specialties: ["writer"] },
  { id: "s4", title: "Solo", tag: "Freelancer · Lite", tier: "starter",
    audiences: ["designers", "developers"], specialties: ["frontend"] },
  { id: "s5", title: "Profile One", tag: "Personal brand", tier: "starter",
    audiences: ["founders", "creators"], specialties: ["personal-brand", "coach"] },
  { id: "s6", title: "Classic", tag: "CV · Print-ready", tier: "starter",
    audiences: ["creators", "founders"], specialties: ["writer"] },
  { id: "s7", title: "Quill", tag: "Writer · Lite", tier: "starter",
    audiences: ["creators"], specialties: ["writer", "copywriter"] },
  { id: "s8", title: "Snap", tag: "Photo · Single page", tier: "starter",
    audiences: ["photographers"], specialties: ["gallery"] },
  { id: "s9", title: "Indie", tag: "Maker · Lite", tier: "starter",
    audiences: ["designers", "founders"], specialties: ["startup"] },
  { id: "s10", title: "Onefolio", tag: "Universal · Lite", tier: "starter",
    audiences: ["creators", "founders", "designers"], specialties: [] },

  // ── Pro ─────────────────────────────────────────────────────────
  { id: "p1", title: "Designer Pro", tag: "Designer · Multi-page", tier: "pro",
    audiences: ["designers"], specialties: ["ui-ux", "graphic"] },
  { id: "p2", title: "DevHub", tag: "Developer · Projects grid", tier: "pro",
    audiences: ["developers"], specialties: ["frontend", "full-stack"] },
  { id: "p3", title: "Gallery+", tag: "Photographer · Gallery", tier: "pro",
    audiences: ["photographers"], specialties: ["gallery", "fine-art"] },
  { id: "p4", title: "Studio", tag: "Creative · Case studies", tier: "pro",
    audiences: ["designers", "agencies"], specialties: ["creative-studio", "ui-ux"] },
  { id: "p5", title: "Architect", tag: "Architect · Project pages", tier: "pro",
    audiences: ["designers"], specialties: ["architect", "interior"] },
  { id: "p6", title: "Artisan", tag: "Artist · Collection", tier: "pro",
    audiences: ["designers", "creators"], specialties: ["illustrator", "3d"] },
  { id: "p7", title: "Consult", tag: "Consultant · Services", tier: "pro",
    audiences: ["founders"], specialties: ["consultant", "coach"] },
  { id: "p8", title: "Stage", tag: "Speaker · Talks", tier: "pro",
    audiences: ["founders", "creators"], specialties: ["speaker", "personal-brand"] },
  { id: "p9", title: "Aura", tag: "Influencer · Press kit", tier: "pro",
    audiences: ["creators"], specialties: ["influencer", "model-actor"] },
  { id: "p10", title: "Brandmark", tag: "Brand · Identity", tier: "pro",
    audiences: ["designers", "agencies"], specialties: ["brand", "graphic"] },

  // ── Premium ─────────────────────────────────────────────────────
  { id: "x1", slug: "atelier", title: "Atelier", tag: "Agency · Flagship", tier: "premium",
    audiences: ["agencies", "designers"], specialties: ["luxury", "creative-studio"] },
  { id: "x2", title: "Reel", tag: "Director · Showreel", tier: "premium",
    audiences: ["creators"], specialties: ["filmmaker", "model-actor"] },
  { id: "x3", title: "Magnum", tag: "Photographer · Pro Max", tier: "premium",
    audiences: ["photographers"], specialties: ["gallery", "fashion", "fine-art"] },
  { id: "x4", title: "Blueprint", tag: "Architect · Premier", tier: "premium",
    audiences: ["designers"], specialties: ["architect", "interior"] },
  { id: "x5", title: "Founder", tag: "Executive · Suite", tier: "premium",
    audiences: ["founders"], specialties: ["executive", "saas", "startup"] },
  { id: "x6", title: "Maker Pro", tag: "Designer · Elite", tier: "premium",
    audiences: ["designers"], specialties: ["ui-ux", "motion", "graphic"] },
  { id: "x7", title: "Curate", tag: "Artist · Atelier", tier: "premium",
    audiences: ["designers", "creators"], specialties: ["illustrator", "fine-art", "3d"] },
  { id: "x8", title: "Atrium", tag: "Studio · Master", tier: "premium",
    audiences: ["agencies"], specialties: ["creative-studio", "luxury", "webflow-framer"] },
  { id: "x9", title: "Beacon", tag: "Brand · Premier", tier: "premium",
    audiences: ["designers", "agencies", "founders"], specialties: ["brand", "personal-brand"] },
  { id: "x10", title: "Lumen", tag: "Editorial · Premium", tier: "premium",
    audiences: ["creators"], specialties: ["writer", "copywriter"] },
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
  const msg = `Hi itsMyfolio! I'd like to order the "${name}" (${tierLabel} tier) portfolio template at AED ${price}.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ────────────────────────────────────────────────────────────────────
// URL param parsing — multi-select, comma-separated.
// Values are validated against the taxonomy so URL state can't smuggle
// in unexpected ids.
// ────────────────────────────────────────────────────────────────────

function toArray(raw: string | string[] | undefined): string[] {
  if (!raw) return [];
  const list = Array.isArray(raw) ? raw : [raw];
  return list
    .flatMap((v) => v.split(","))
    .map((s) => s.trim())
    .filter(Boolean);
}

const AUDIENCE_IDS = new Set<AudienceId>(AUDIENCES.map((a) => a.id));
const TIER_IDS = new Set<TierId>(TIERS.map((t) => t.id));
const ALL_SPECIALTY_IDS = new Set<string>(
  (Object.keys(SPECIALTIES) as AudienceId[]).flatMap((id) =>
    SPECIALTIES[id].map((s) => s.id)
  )
);

export function parseAudiences(raw: string | string[] | undefined): AudienceId[] {
  return toArray(raw).filter((v): v is AudienceId => AUDIENCE_IDS.has(v as AudienceId));
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
// (matches Canva-style checkbox filter semantics).
// ────────────────────────────────────────────────────────────────────

export function filterTemplates(args: {
  audiences: AudienceId[];
  specialties: string[];
  tiers: TierId[];
  q: string;
}): Template[] {
  const q = args.q.toLowerCase();
  return TEMPLATES.filter((t) => {
    if (args.tiers.length && !args.tiers.includes(t.tier)) return false;
    if (args.audiences.length && !args.audiences.some((a) => t.audiences.includes(a)))
      return false;
    if (args.specialties.length && !args.specialties.some((s) => t.specialties.includes(s)))
      return false;
    if (q && !`${t.title} ${t.tag}`.toLowerCase().includes(q)) return false;
    return true;
  });
}

// ────────────────────────────────────────────────────────────────────
// Drawer helpers — flat specialty list (deduped) and category counts.
// Counts are computed once at module load; the taxonomy is static.
// ────────────────────────────────────────────────────────────────────

export function getAllSpecialties(): SpecialtyMeta[] {
  const seen = new Map<string, SpecialtyMeta>();
  for (const audId of Object.keys(SPECIALTIES) as AudienceId[]) {
    for (const s of SPECIALTIES[audId]) {
      if (!seen.has(s.id)) seen.set(s.id, s);
    }
  }
  return Array.from(seen.values()).sort((a, b) => a.label.localeCompare(b.label));
}

export const AUDIENCE_COUNTS: Record<AudienceId, number> = (() => {
  const counts = {} as Record<AudienceId, number>;
  for (const a of AUDIENCES) counts[a.id] = 0;
  for (const t of TEMPLATES) for (const a of t.audiences) counts[a]++;
  return counts;
})();

export const TIER_COUNTS: Record<TierId, number> = (() => {
  const counts = { starter: 0, pro: 0, premium: 0 } as Record<TierId, number>;
  for (const t of TEMPLATES) counts[t.tier]++;
  return counts;
})();

export const SPECIALTY_COUNTS: Record<string, number> = (() => {
  const counts: Record<string, number> = {};
  for (const t of TEMPLATES) for (const s of t.specialties) counts[s] = (counts[s] ?? 0) + 1;
  return counts;
})();

export const AUDIENCE_LABEL: Record<AudienceId, string> = Object.fromEntries(
  AUDIENCES.map((a) => [a.id, a.label])
) as Record<AudienceId, string>;

export const SPECIALTY_LABEL: Record<string, string> = (() => {
  const out: Record<string, string> = {};
  for (const audId of Object.keys(SPECIALTIES) as AudienceId[]) {
    for (const s of SPECIALTIES[audId]) out[s.id] = s.label;
  }
  return out;
})();
