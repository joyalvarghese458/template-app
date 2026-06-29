// ────────────────────────────────────────────────────────────────────
// Helm — editorial-minimalist CEO portfolio
// Single source of content for all five pages. Swap these values to
// re-skin the template for a different executive.
// ────────────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Margaux Sinclair",
  initials: "MS",
  role: "Chief Executive Officer",
  company: "Meridian Group",
  tagline: "Building category-defining companies across technology, energy, and global trade.",
  location: "London · New York · Singapore",
  email: "office@margauxsinclair.com",
  availability: "Open to select board & advisory roles",
};

export const NAV_ITEMS = [
  { key: "home", label: "Index", href: "/templates/helm" },
  { key: "about", label: "About", href: "/templates/helm/about" },
  { key: "ventures", label: "Ventures", href: "/templates/helm/ventures" },
  { key: "press", label: "Press", href: "/templates/helm/press" },
  { key: "contact", label: "Contact", href: "/templates/helm/contact" },
] as const;

export const STATS = [
  { value: 4.2, prefix: "$", suffix: "B+", label: "Group valuation" },
  { value: 18, suffix: "", label: "Years in leadership" },
  { value: 5, suffix: "", label: "Operating ventures" },
  { value: 31, suffix: "", label: "Countries of operation" },
];

export const VENTURES = [
  {
    slug: "technologies",
    year: "2014",
    sector: "Technology",
    title: "Meridian Technologies",
    metric: "20 countries",
    description:
      "Cloud infrastructure and applied-AI systems powering enterprise clients across five continents.",
    image: "venture-tech",
  },
  {
    slug: "energy",
    year: "2017",
    sector: "Energy",
    title: "Meridian Energy",
    metric: "2.1 GW capacity",
    description:
      "Utility-scale solar and wind assets accelerating the transition to clean, dispatchable power.",
    image: "venture-energy",
  },
  {
    slug: "logistics",
    year: "2019",
    sector: "Logistics",
    title: "Meridian Logistics",
    metric: "140+ ports",
    description:
      "Port-to-door freight networks moving goods across five continents with predictive routing.",
    image: "venture-logistics",
  },
  {
    slug: "properties",
    year: "2021",
    sector: "Real Estate",
    title: "Meridian Properties",
    metric: "3.4M sq ft",
    description:
      "Landmark commercial developments designed for the next century of work and civic life.",
    image: "venture-realestate",
  },
  {
    slug: "capital",
    year: "2023",
    sector: "Finance",
    title: "Meridian Capital",
    metric: "$1.8B deployed",
    description:
      "Strategic capital placed behind category-defining founders, infrastructure, and ideas.",
    image: "venture-finance",
  },
];

export const TIMELINE = [
  {
    year: "2008",
    title: "Joined Meridian as Strategy Director",
    description: "Recruited to rebuild the group's capital-allocation framework from the ground up.",
  },
  {
    year: "2012",
    title: "Appointed Chief Operating Officer",
    description: "Led a three-year operational turnaround across the group's four founding business units.",
  },
  {
    year: "2014",
    title: "Named Chief Executive Officer",
    description: "Took the helm and set a new ten-year portfolio strategy centred on five core ventures.",
  },
  {
    year: "2017",
    title: "Launched Meridian Energy",
    description: "Committed the group's first capital toward utility-scale renewables.",
  },
  {
    year: "2021",
    title: "Group-wide expansion into Asia-Pacific",
    description: "Opened the Singapore headquarters and tripled the group's international footprint.",
  },
  {
    year: "2026",
    title: "Group reaches $4.2B+ in valuation",
    description: "Five ventures, thirty-one countries, and a board mandate to keep building.",
  },
];

export const AWARDS = [
  { year: "2025", title: "Power List — Global 100 Executives", org: "Fortune" },
  { year: "2024", title: "CEO of the Year, Diversified Holdings", org: "Forbes" },
  { year: "2023", title: "Top 50 Business Leaders to Watch", org: "Bloomberg" },
  { year: "2021", title: "Excellence in Corporate Leadership", org: "The Economist" },
];

export const PRESS_FEATURES = [
  { outlet: "Financial Times", quote: "A rare operator who treats capital discipline as a creative constraint." },
  { outlet: "Bloomberg", quote: "Sinclair has turned a holding company into one of the decade's most-watched portfolios." },
  { outlet: "Forbes", quote: "Meridian's five ventures share one trait: every one of them is built to outlast its market." },
  { outlet: "Fortune", quote: "The clearest articulation yet of what disciplined, long-horizon leadership looks like." },
];

export const SPEAKING = [
  {
    year: "2026",
    title: "The Future of Capital",
    event: "World Economic Forum",
    location: "Davos, Switzerland",
  },
  {
    year: "2025",
    title: "Leading Through Disruption",
    event: "TED Business",
    location: "Vancouver, Canada",
  },
  {
    year: "2024",
    title: "Energy at Scale",
    event: "Bloomberg Sustainable Business Summit",
    location: "London, UK",
  },
  {
    year: "2023",
    title: "Building Without Borders",
    event: "Fortune Global Forum",
    location: "Singapore",
  },
];

export const OFFICES = [
  { city: "London", role: "Group Headquarters", lines: ["24 Bishopsgate", "London EC2M 4QQ, UK"] },
  { city: "New York", role: "Americas Office", lines: ["450 Park Avenue", "New York, NY 10022"] },
  { city: "Singapore", role: "APAC Office", lines: ["1 Marina Boulevard", "Singapore 018989"] },
];

export const SOCIALS = [
  { label: "LinkedIn", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "Bloomberg Profile", href: "#" },
];
