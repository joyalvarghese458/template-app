export const OWNER = {
  name: "Meera Anand",
  firstName: "Meera",
  title: "Management Consultant",
  practice: "Vantage Advisory",
  tagline: "I help leadership teams make the call they've been avoiding.",
  subtagline:
    "Independent strategy advisor to founders and executive teams — brought in for the decisions that don't have an obvious answer, and held accountable until they play out.",
  rotatingWords: ["clarity.", "traction.", "alignment.", "a decision."],
  email: "meera@vantageadvisory.com",
  linkedin: "https://linkedin.com",
  calendly: "https://cal.com",
  resumeUrl: "mailto:meera@vantageadvisory.com?subject=Resume%20request",
  location: "Dubai, UAE — working globally",
  availability: "Taking 2 new engagements for Q4",
  clarityIndex: 92,
  stats: [
    { value: "60+", label: "Engagements led" },
    { value: "$180M+", label: "Value unlocked" },
    { value: "14", label: "Industries" },
    { value: "9", label: "Years advising" },
  ],
};

export const SECTORS = [
  "Fintech",
  "Logistics & Supply Chain",
  "Retail & FMCG",
  "Healthtech",
  "Family Business",
  "B2B SaaS",
  "Manufacturing",
  "Real Estate",
  "Hospitality",
];

export const MANIFESTO = {
  kicker: "The Vantage Point",
  lines: [
    "Most strategy decks get read once, then filed.",
    "I'm not here to write another one.",
    "I sit inside the business until the decision gets made — and stay long enough to see if it actually worked.",
  ],
  signOff: "That's the whole method. Everything else is detail.",
};

export const METHOD = [
  {
    step: "01",
    title: "Diagnose",
    output: "A written view of what's really going on",
    desc: "Two to three weeks inside the business — data, interviews, the meetings you'd rather I didn't sit in on. I'm not here to summarize what you already know.",
  },
  {
    step: "02",
    title: "Design",
    output: "2–3 real options, priced and sequenced",
    desc: "Not a 90-slide deck. A short set of genuinely different paths, each with a cost, a timeline, and the tradeoff nobody wants to say out loud.",
  },
  {
    step: "03",
    title: "Decide",
    output: "One recommendation, made in the room",
    desc: "I bring the leadership team to a single call, argue for it directly, and put my name on the recommendation — not a menu of options with no owner.",
  },
  {
    step: "04",
    title: "Deliver",
    output: "90 days of built-in accountability",
    desc: "I stay on through the first quarter of execution. If the plan was wrong, we find out fast and say so — not eighteen months later in a retro nobody runs.",
  },
];

export const ENGAGEMENTS = [
  {
    id: "01",
    client: "Regional Logistics Group",
    sector: "Logistics · 900+ employees",
    category: "Operating Model Redesign",
    challenge:
      "Three regional business units running on three different P&Ls, duplicating overhead and quietly competing for the same customers.",
    approach:
      "Mapped real decision rights against the org chart, found 40% didn't match, and redesigned around four accountable business lines instead of geography.",
    result:
      "Consolidated overhead, cut decision latency, and gave the CEO a structure she could actually run — not just draw.",
    metrics: [
      { label: "Overhead cost", value: "−18%" },
      { label: "Decision cycle", value: "−6 wks" },
      { label: "Duration", value: "5 months" },
    ],
  },
  {
    id: "02",
    client: "Series B Fintech",
    sector: "Fintech · MENA",
    category: "Go-to-Market Strategy",
    challenge:
      "Burning runway acquiring customers in four segments at once, none of them clearly winning, board losing patience.",
    approach:
      "Ran a two-week segment-economics teardown, killed two segments the founders were emotionally attached to, and rebuilt the GTM motion around the one with real payback.",
    result:
      "CAC payback cut in half within two quarters; the round that followed closed on the back of that one number.",
    metrics: [
      { label: "CAC payback", value: "−52%" },
      { label: "Segments cut", value: "2 of 4" },
      { label: "Duration", value: "4 months" },
    ],
  },
  {
    id: "03",
    client: "Family-Owned Retail Group",
    sector: "Retail & FMCG · Third generation",
    category: "Succession & Governance",
    challenge:
      "A founder unwilling to let go, two siblings who wouldn't sit in the same room, and a business that hadn't updated its governance since 1994.",
    approach:
      "Built an independent board seat, a written decision charter, and a succession timeline the founder actually signed — after six individual conversations, not one group one.",
    result:
      "First formal board meeting in the company's history; a succession plan now in writing, not in the founder's head.",
    metrics: [
      { label: "Governance", value: "Formalized" },
      { label: "Board seats added", value: "2" },
      { label: "Duration", value: "7 months" },
    ],
  },
  {
    id: "04",
    client: "B2B SaaS Scale-up",
    sector: "SaaS · Series C",
    category: "Pricing & Growth Strategy",
    challenge:
      "Land-and-expand pricing that stopped expanding — net revenue retention flat for three straight quarters.",
    approach:
      "Rebuilt pricing around a usage metric customers actually felt, tested it on 12% of the base before full rollout, and rewired sales comp to match.",
    result:
      "Net revenue retention back above 115% within two quarters, with no measurable increase in churn.",
    metrics: [
      { label: "NRR", value: "115%" },
      { label: "Churn impact", value: "None" },
      { label: "Duration", value: "3 months" },
    ],
  },
];

export const DASHBOARD = {
  kpis: [
    { value: 60, decimals: 0, prefix: "", suffix: "+", label: "Engagements led" },
    { value: 94, decimals: 0, prefix: "", suffix: "%", label: "Client retention" },
    { value: 4.5, decimals: 1, prefix: "", suffix: " mo", label: "Avg. engagement" },
    { value: 180, decimals: 0, prefix: "$", suffix: "M+", label: "Value unlocked" },
  ],
  focusMix: [
    { label: "Growth Strategy", value: 34, color: "var(--color-emerald)" },
    { label: "Operating Model", value: 28, color: "var(--color-copper)" },
    { label: "Governance & Succession", value: 20, color: "var(--color-emerald-bright)" },
    { label: "Turnaround", value: 18, color: "var(--color-copper-bright)" },
  ],
  trend: [38, 44, 41, 52, 58, 55, 64, 71, 68, 78, 82, 88],
  trendLabel: "Engagement volume, trailing 12 quarters",
};

export const EXPERIENCE = [
  {
    role: "Founder & Principal",
    company: "Vantage Advisory",
    period: "2021 — Present",
    description:
      "Independent practice advising founders and executive teams on growth strategy, operating model, and governance — engagements run 3 to 7 months, always with a named accountable outcome.",
    highlights: ["Strategy Design", "Operating Model", "Executive Advisory"],
  },
  {
    role: "Engagement Manager",
    company: "Northbridge Consulting",
    period: "2017 — 2021",
    description:
      "Led due-diligence and post-merger integration engagements for mid-market PE portfolio companies across MENA and South Asia.",
    highlights: ["M&A Integration", "Due Diligence", "PE Portfolio Ops"],
  },
  {
    role: "Senior Consultant",
    company: "Northbridge Consulting",
    period: "2015 — 2017",
    description:
      "Built pricing and go-to-market models for growth-stage clients, then stayed through implementation instead of handing off at the deck.",
    highlights: ["Pricing Strategy", "GTM Design", "Client Delivery"],
  },
  {
    role: "Strategy Analyst",
    company: "Northbridge Consulting",
    period: "2013 — 2015",
    description:
      "Started on the research desk building the financial models senior partners presented — where the discipline of getting the number right, not just defensible, was set.",
    highlights: ["Financial Modeling", "Market Research"],
  },
];

export const CREDENTIALS = [
  { label: "MBA, Strategy & Finance", issuer: "INSEAD", year: "2013" },
  { label: "Certified Management Consultant (CMC)", issuer: "IMC", year: "2016" },
  { label: "Independent Board Advisor", issuer: "3 portfolio boards, active", year: "2021 —" },
  { label: "Guest Faculty, Executive Education", issuer: "American University of Sharjah", year: "2022 —" },
];

export const FEATURED = [
  { name: "Forbes Middle East", role: "Contributor" },
  { name: "Harvard Business Review", role: "Arabic Edition, Interview" },
  { name: "The Economic Times", role: "Op-Ed" },
  { name: "GITEX Global", role: "Keynote, 2024" },
  { name: "World Business Forum", role: "Panelist" },
  { name: "McKinsey Alumni Network", role: "Member" },
];

export const TESTIMONIALS = [
  {
    quote:
      "She was the only advisor who told us to kill two of our four product lines. It was the right call, and it was the one nobody in the room was willing to say out loud first.",
    name: "Rahul Menon",
    role: "CEO, Series B Fintech",
  },
  {
    quote:
      "Most consultants hand you a deck and disappear. Meera stayed through the first quarter of execution and flagged when part of the plan wasn't working before we had to ask.",
    name: "Sara Al Farsi",
    role: "COO, Regional Logistics Group",
  },
  {
    quote:
      "We'd avoided the succession conversation for a decade. She got my father, my sister, and me into the same room and out of it with a written plan — that alone was worth the engagement.",
    name: "Karan Vasant",
    role: "Managing Director, Family Retail Group",
  },
];
