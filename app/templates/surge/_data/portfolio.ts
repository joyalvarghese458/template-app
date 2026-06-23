export const OWNER = {
  name: "Damon Reid",
  title: "Digital Marketing Specialist",
  tagline: "Growth isn't luck. It's a funnel, done right.",
  subtagline:
    "I'm a digital marketer who blends paid media, SEO, and content into campaigns that actually move the needle — and I'm looking for a team that wants to grow.",
  email: "damon.reid@example.com",
  linkedin: "https://linkedin.com/in/damonreid",
  resumeUrl: "#",
  location: "Chicago, IL",
  availability: "Actively seeking full-time opportunities",
  stats: [
    { value: "3.2x", label: "Average ROAS" },
    { value: "$4.1M", label: "Ad spend managed" },
    { value: "38%", label: "Avg. conversion lift" },
    { value: "24", label: "Campaigns launched" },
  ],
};

export const ABOUT = {
  intro:
    "I'm a digital marketer who's spent the last five years living inside ad accounts, analytics dashboards, and content calendars — turning a fixed budget into a predictable stream of customers.",
  philosophy:
    "A campaign that gets impressions but no conversions is just expensive noise. I optimize for the metric that actually pays the bills, not the one that looks good in a deck.",
  focus: [
    "Paid social & search (Meta, Google)",
    "SEO & content strategy",
    "Marketing analytics & attribution",
    "Email & lifecycle marketing",
  ],
};

export const FUNNEL = [
  { step: "01", title: "Research", desc: "Audience, competitors, and the channels where your customer already spends time." },
  { step: "02", title: "Strategy", desc: "A channel mix and content plan built around one number: the metric that matters." },
  { step: "03", title: "Launch", desc: "Campaigns go live with tracking and attribution wired in from day one." },
  { step: "04", title: "Optimize", desc: "Weekly testing and reallocation toward whatever is actually converting." },
];

export const CAMPAIGNS = [
  {
    id: "01",
    title: "Glow Skincare — Paid Social Launch",
    category: "Meta Ads · DTC",
    description: "Launched a full-funnel Meta ads strategy for a new DTC skincare brand's first 90 days.",
    tools: ["Meta Ads Manager", "Triple Whale", "Klaviyo"],
    metrics: [{ label: "ROAS", value: "4.1x" }, { label: "CAC", value: "-32%" }, { label: "Revenue", value: "$310K" }],
  },
  {
    id: "02",
    title: "Northbound SaaS — SEO Turnaround",
    category: "SEO · B2B SaaS",
    description: "Rebuilt the content and technical SEO strategy for a stalled B2B SaaS blog.",
    tools: ["Ahrefs", "Surfer SEO", "HubSpot"],
    metrics: [{ label: "Organic traffic", value: "+184%" }, { label: "Keywords ranked", value: "+92" }, { label: "MQLs", value: "+61%" }],
  },
  {
    id: "03",
    title: "Brightleaf Coffee — Local Growth",
    category: "Google Ads · Local",
    description: "Ran hyperlocal Google Ads and Google Business Profile optimization for a 6-location coffee chain.",
    tools: ["Google Ads", "Google Business Profile", "Looker Studio"],
    metrics: [{ label: "Foot traffic", value: "+27%" }, { label: "CPC", value: "-18%" }, { label: "Store visits", value: "+1,400" }],
  },
  {
    id: "04",
    title: "Fenwick & Co. — Email Lifecycle",
    category: "Email · Retention",
    description: "Rebuilt the post-purchase and win-back email flows for an apparel retailer.",
    tools: ["Klaviyo", "Figma", "Shopify"],
    metrics: [{ label: "Email revenue", value: "+44%" }, { label: "Win-back rate", value: "+12%" }, { label: "Flows shipped", value: "9" }],
  },
  {
    id: "05",
    title: "Pivot Fitness App — Launch Campaign",
    category: "Paid Social · App",
    description: "Drove app installs and trial signups for a fitness app's national launch.",
    tools: ["TikTok Ads", "Meta Ads", "AppsFlyer"],
    metrics: [{ label: "Installs", value: "82K" }, { label: "CPI", value: "-41%" }, { label: "Trial→Paid", value: "22%" }],
  },
  {
    id: "06",
    title: "Solace Wellness — Content Engine",
    category: "Content · Organic Social",
    description: "Built a repeatable short-form content engine across Instagram and TikTok.",
    tools: ["Canva", "CapCut", "Later"],
    metrics: [{ label: "Followers", value: "+38K" }, { label: "Avg. engagement", value: "6.8%" }, { label: "Posts/month", value: "30" }],
  },
];

export const HIGHLIGHTS = [
  { icon: "📈", label: "+184% organic traffic" },
  { icon: "❤️", label: "6.8% engagement rate" },
  { icon: "🎯", label: "4.1x average ROAS" },
  { icon: "📩", label: "+44% email revenue" },
  { icon: "📲", label: "82K app installs" },
  { icon: "📍", label: "+1,400 store visits" },
];

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Analytics dashboard on a computer screen",
    caption: "Weekly reporting dashboard",
  },
  {
    src: "https://images.unsplash.com/photo-1758873269035-aae0e1fd3422?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Team collaborating around a whiteboard",
    caption: "Quarterly strategy session",
  },
  {
    src: "https://images.unsplash.com/photo-1759215524472-1b0686fdbd87?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Hands holding a phone showing a social media feed",
    caption: "Content QA before it ships",
  },
  {
    src: "https://images.unsplash.com/photo-1746014602412-a51f37a46675?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Hands holding a phone with data next to a coffee cup",
    caption: "Morning metrics check-in",
  },
];

export const EXPERIENCE = [
  {
    role: "Digital Marketing Specialist",
    company: "Northbound Growth Co.",
    period: "2022 — Present",
    description: "Manage paid and organic channels for 8 B2B and DTC clients, owning strategy and reporting.",
    highlights: ["Paid Media", "SEO", "Client Strategy"],
  },
  {
    role: "Marketing Coordinator",
    company: "Brightleaf Coffee",
    period: "2020 — 2022",
    description: "Ran local paid search and social for a multi-location coffee chain's marketing team.",
    highlights: ["Google Ads", "Local SEO", "Social Media"],
  },
  {
    role: "Marketing Intern",
    company: "Fenwick & Co.",
    period: "2019 — 2020",
    description: "Supported email marketing and content production while finishing a marketing degree.",
    highlights: ["Email Marketing", "Content Creation", "Analytics"],
  },
];

export const SKILLS: Record<string, { name: string; level: number }[]> = {
  "Paid Media": [
    { name: "Meta Ads", level: 94 },
    { name: "Google Ads", level: 90 },
    { name: "TikTok Ads", level: 78 },
    { name: "LinkedIn Ads", level: 70 },
  ],
  "Organic & Lifecycle": [
    { name: "SEO", level: 85 },
    { name: "Email / Klaviyo", level: 88 },
    { name: "Content Strategy", level: 82 },
    { name: "Analytics / GA4", level: 91 },
  ],
};

export const CERTIFICATIONS = [
  { title: "Google Ads Certification", issuer: "Google", year: "2023" },
  { title: "HubSpot Inbound Marketing", issuer: "HubSpot Academy", year: "2022" },
  { title: "Meta Blueprint Certification", issuer: "Meta", year: "2023" },
  { title: "B.A. in Marketing", issuer: "University of Illinois", year: "2019" },
];

export const TESTIMONIALS = [
  {
    quote: "Damon doesn't just run ads — he asks what number actually matters and builds toward it. Our CAC dropped 32% in his first quarter.",
    name: "Priya Shah",
    role: "Founder, Glow Skincare",
  },
  {
    quote: "He rebuilt our SEO strategy from scratch and it actually worked — organic traffic nearly tripled.",
    name: "Liam Foster",
    role: "Head of Growth, Northbound SaaS",
  },
  {
    quote: "Fast, data-driven, and never afraid to kill a campaign that isn't working. Exactly what we needed.",
    name: "Renee Okafor",
    role: "Marketing Director, Brightleaf Coffee",
  },
];

export const TOOLS = [
  "Google Ads", "Meta Ads Manager", "HubSpot", "Klaviyo", "SEMrush", "Google Analytics", "Canva", "Hootsuite",
];
