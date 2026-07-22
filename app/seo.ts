import type { Metadata } from "next";

const SITE_URL = "https://myportfoliowebsite.com";
const BRAND = "My Portfolio";

const TEMPLATE_NAMES: Record<string, string> = {
  adaline: "Adaline",
  amplify: "Amplify",
  ascend: "Ascend",
  atelier: "Atelier",
  atlas: "Atlas",
  byline: "Byline",
  canvas: "Canvas",
  cardstock: "Cardstock",
  cipher: "Cipher",
  contour: "Contour",
  cortex: "Cortex",
  crisp: "Crisp",
  datalab: "Datalab",
  designer: "Designer",
  "designer-pro": "Designer Pro",
  dr1: "DR1",
  echelon: "Echelon",
  elevate: "Elevate",
  escapement: "Escapement",
  "gallery-plus": "Gallery Plus",
  "graphic-designer": "Graphic Designer",
  helm: "Helm",
  indie: "Indie",
  "jack-3d-portfolio": "Jack 3D Portfolio",
  journey: "Journey",
  kiln: "Kiln",
  ladder: "Ladder",
  ledger: "Ledger",
  lithos: "Lithos",
  marea: "Marea",
  meridian: "Meridian",
  minimalist: "Minimalist",
  onefolio: "Onefolio",
  p2: "DevHub",
  parallax: "Parallax",
  prism: "Prism",
  "profile-one": "Profile One",
  pulse: "Pulse",
  pure: "Pure",
  redline: "Redline",
  reel: "Reel",
  serenity: "Serenity",
  sillage: "Sillage",
  slate: "Slate",
  snap: "Snap",
  solo: "Solo",
  strata: "Strata",
  surge: "Surge",
  swift: "Swift",
  torque: "Torque",
  umami: "Umami",
  vantage: "Vantage",
  verdict: "Verdict",
  wavelength: "Wavelength",
};

const SECTION_NAMES: Record<string, string> = {
  about: "About",
  blog: "Blog",
  contact: "Contact",
  portfolio: "Portfolio",
  press: "Press",
  services: "Services",
  stories: "Stories",
  ventures: "Ventures",
  work: "Work",
  works: "Works",
};

const CORE_METADATA: Record<string, { title: string; description: string }> = {
  "/": {
    title: `Portfolio Templates | ${BRAND}`,
    description:
      "Browse My Portfolio templates for designers, developers, founders, and creators who want polished websites with responsive layouts and fast launch paths.",
  },
  "/blog": {
    title: `Portfolio Blog | ${BRAND}`,
    description:
      "Read My Portfolio guides on portfolio strategy, SEO, client conversion, and personal branding for creators, freelancers, founders, and agencies.",
  },
  "/brand-lab": {
    title: `Brand Lab | ${BRAND}`,
    description:
      "Preview My Portfolio brand experiments, visual systems, type directions, and interface studies used to shape polished portfolio template design.",
  },
  "/contact": {
    title: `Contact ${BRAND}`,
    description:
      "Contact My Portfolio for template questions, custom portfolio builds, support, and launch guidance for creators, freelancers, and teams.",
  },
  "/pricing": {
    title: `Pricing Plans | ${BRAND}`,
    description:
      "Compare My Portfolio pricing for ready-made templates, customization help, and resume packages designed for fast, polished portfolio launches.",
  },
  "/privacy-policy": {
    title: `Privacy Policy | ${BRAND}`,
    description:
      "Review the My Portfolio privacy policy covering collected information, analytics, cookies, data retention, security, and user privacy rights.",
  },
  "/templates": {
    title: `All Templates | ${BRAND}`,
    description:
      "Browse every My Portfolio template by profession, style, section, and price to find a polished website design ready for customization.",
  },
  "/templates/coming-soon": {
    title: `Coming Soon Template | ${BRAND}`,
    description:
      "Preview the coming soon template route from My Portfolio, reserved for upcoming portfolio designs, refreshed demos, and future website releases.",
  },
  "/terms-of-service": {
    title: `Terms of Service | ${BRAND}`,
    description:
      "Read the My Portfolio terms for template purchases, customization services, permitted use, payments, intellectual property, and support expectations.",
  },
};

function canonicalUrl(route: string): string {
  return `${SITE_URL}${route === "/" ? "" : route}`;
}

function wordsFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function templateTitle(template: string, section?: string): string {
  const name = TEMPLATE_NAMES[template] ?? wordsFromSlug(template);
  const sectionName = section ? SECTION_NAMES[section] ?? wordsFromSlug(section) : null;

  if (sectionName) return `${name} ${sectionName} | ${BRAND}`;
  return `${name} Template | ${BRAND}`;
}

function templateDescription(template: string, section?: string): string {
  const name = TEMPLATE_NAMES[template] ?? wordsFromSlug(template);
  const sectionName = section ? SECTION_NAMES[section] ?? wordsFromSlug(section) : null;

  if (sectionName) {
    return `View the ${sectionName.toLowerCase()} page in the ${name} template from My Portfolio, with focused structure, conversion cues, and responsive portfolio design.`;
  }

  if (template === "dr1") {
    return "Use the DR1 legacy route from My Portfolio to reach the current Swift portfolio template without losing access to the updated responsive preview.";
  }

  return `Preview the ${name} template from My Portfolio, a responsive portfolio design with polished sections, clear storytelling, and fast customization.`;
}

function routeMetadata(route: string): { title: string; description: string } {
  const core = CORE_METADATA[route];
  if (core) return core;

  const segments = route.split("/").filter(Boolean);
  if (segments[0] === "templates" && segments[1]) {
    return {
      title: templateTitle(segments[1], segments[2]),
      description: templateDescription(segments[1], segments[2]),
    };
  }

  return {
    title: `${wordsFromSlug(segments.at(-1) ?? "Page")} | ${BRAND}`,
    description:
      "Explore this My Portfolio page for responsive portfolio design, polished template structure, and practical paths to launch a stronger personal website.",
  };
}

export function metadataForRoute(route: string): Metadata {
  const { title, description } = routeMetadata(route);
  const url = canonicalUrl(route);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
