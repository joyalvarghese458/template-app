export const OWNER = {
  name: "Layla Haddad",
  firstName: "Layla",
  lastName: "Haddad",
  title: "Corporate & Commercial Litigation Counsel",
  chambers: "Haddad Chambers",
  tagline: "Representation built to reach",
  rotatingWords: ["a verdict.", "a settlement.", "resolution.", "the outcome."],
  subtagline:
    "Independent litigation and corporate counsel for founders, family businesses, and enterprises — engaged for the disputes and deals that can't afford an average outcome.",
  email: "layla@haddadchambers.com",
  linkedin: "https://linkedin.com",
  calendly: "https://cal.com",
  resumeUrl: "mailto:layla@haddadchambers.com?subject=Resume%20request",
  location: "Dubai, UAE — advising across the GCC",
  availability: "Accepting new instructions for Q4",
  winRate: 96,
  stats: [
    { value: "240+", label: "Matters resolved" },
    { value: "96%", label: "Win / favorable rate" },
    { value: "15", label: "Years at the bar" },
    { value: "6", label: "Practice areas" },
  ],
};

export const PRACTICE_AREAS = [
  "Commercial Litigation",
  "Corporate & M&A",
  "Arbitration & ADR",
  "IP & Trademark",
  "Regulatory Compliance",
  "Family Business Disputes",
];

export const BRIEF = {
  kicker: "The Brief",
  lines: [
    "Most litigation strategy is written to look thorough in a hearing bundle.",
    "I don't build cases to be admired on paper.",
    "I build them to be understood by a judge in the first five minutes — and won.",
  ],
  signOff: "Everything else is paperwork.",
};

export const PROCESS = [
  {
    step: "01",
    title: "Intake",
    output: "A conflict-checked view of your exposure",
    desc: "Every matter starts with a same-week case assessment — what's provable, what isn't, and what it actually costs to pursue or defend it.",
  },
  {
    step: "02",
    title: "Strategy",
    output: "A filed position, not a holding pattern",
    desc: "A written strategy memo with a primary line of argument, a fallback, and a real estimate of timeline and spend before a single filing goes out.",
  },
  {
    step: "03",
    title: "Advocacy",
    output: "Argued by me, in the room",
    desc: "I appear personally at hearings, negotiations, and depositions. Associates support the file; they don't stand in for me in front of a judge or the other side.",
  },
  {
    step: "04",
    title: "Resolution",
    output: "A closed file, not an open retainer",
    desc: "I stay engaged through enforcement or settlement completion — not just to judgment. A win that doesn't collect isn't a win yet.",
  },
];

export const MATTERS = [
  {
    id: "01",
    client: "Regional Logistics Operator",
    sector: "Commercial Litigation · Freight & Carriage",
    category: "Contract Breach — Arbitration",
    challenge:
      "A carriage contract dispute over $12M in disputed freight charges, with the counterparty already filing in a jurisdiction chosen to slow us down.",
    approach:
      "Filed a parallel jurisdiction challenge within eight days, froze the delay tactic, and moved the matter into DIAC arbitration on our own timeline instead of theirs.",
    result:
      "Full recovery of disputed charges plus costs, settled before the final hearing once the other side saw the exposure clearly.",
    metrics: [
      { label: "Recovered", value: "$11.4M" },
      { label: "Hearing days", value: "0 of 4" },
      { label: "Duration", value: "7 months" },
    ],
  },
  {
    id: "02",
    client: "Family-Owned Manufacturing Group",
    sector: "Corporate · Third generation",
    category: "Shareholder Dispute",
    challenge:
      "Two branches of a founding family locked in a deadlock over board control, with an operating business losing customers while the dispute dragged on.",
    approach:
      "Negotiated a binding shareholder deadlock protocol and an independent chair appointment before litigating a single claim — the business needed a decision, not a docket number.",
    result:
      "Governance restored within ten weeks; the litigation that would have taken two years never had to be filed.",
    metrics: [
      { label: "Litigation filed", value: "None" },
      { label: "Governance", value: "Restored" },
      { label: "Duration", value: "10 weeks" },
    ],
  },
  {
    id: "03",
    client: "Series B Fintech",
    sector: "Corporate & M&A · MENA",
    category: "Cap Table Restructuring",
    challenge:
      "A down round with three prior SAFEs, two classes of preferred stock, and a lead investor threatening to block the raise over conversion terms.",
    approach:
      "Rebuilt the waterfall from source documents, found a drafting error working against the founders, and used it to renegotiate the blocking investor's position directly.",
    result:
      "Round closed on schedule with founder ownership protected within one point of the original model.",
    metrics: [
      { label: "Round closed", value: "On time" },
      { label: "Founder dilution", value: "−1.2pt" },
      { label: "Duration", value: "6 weeks" },
    ],
  },
  {
    id: "04",
    client: "International Retail Franchise",
    sector: "IP & Trademark · Retail",
    category: "Brand Infringement Action",
    challenge:
      "A near-identical storefront and mark appearing across three emirates, actively confusing customers and eroding a decade of brand investment.",
    approach:
      "Secured an ex-parte interim injunction within five days, then ran a coordinated enforcement action across all three locations simultaneously.",
    result:
      "All three locations rebranded or closed within a month; the mark is now formally registered in every GCC jurisdiction the client operates in.",
    metrics: [
      { label: "Locations resolved", value: "3 of 3" },
      { label: "Injunction granted", value: "5 days" },
      { label: "Duration", value: "4 months" },
    ],
  },
];

export const DOCKET = {
  kpis: [
    { value: 240, decimals: 0, prefix: "", suffix: "+", label: "Matters resolved" },
    { value: 91, decimals: 0, prefix: "", suffix: "%", label: "Client retention" },
    { value: 5.2, decimals: 1, prefix: "", suffix: " mo", label: "Avg. resolution time" },
    { value: 210, decimals: 0, prefix: "$", suffix: "M+", label: "Value protected / recovered" },
  ],
  focusMix: [
    { label: "Commercial Litigation", value: 36, color: "var(--color-brass-bright)" },
    { label: "Corporate & M&A", value: 24, color: "var(--color-burgundy-bright)" },
    { label: "Arbitration & ADR", value: 22, color: "var(--color-brass)" },
    { label: "IP & Regulatory", value: 18, color: "var(--color-burgundy)" },
  ],
  trend: [22, 28, 26, 33, 38, 35, 44, 49, 46, 55, 60, 66],
  trendLabel: "Matters opened, trailing 12 quarters",
};

export const EXPERIENCE = [
  {
    role: "Founding Partner",
    company: "Haddad Chambers",
    period: "2019 — Present",
    description:
      "Independent litigation and corporate practice representing founders, family businesses, and mid-market enterprises across the UAE and wider GCC.",
    highlights: ["Commercial Litigation", "Corporate Advisory", "Arbitration"],
  },
  {
    role: "Senior Associate",
    company: "Whitfield & Cross LLP",
    period: "2015 — 2019",
    description:
      "Led disputes and corporate transactional work for regional conglomerates, with a focus on cross-border enforcement and shareholder matters.",
    highlights: ["Cross-Border Enforcement", "M&A Due Diligence"],
  },
  {
    role: "Associate",
    company: "Whitfield & Cross LLP",
    period: "2012 — 2015",
    description:
      "Built the litigation groundwork — pleadings, discovery, and hearing preparation — on matters ranging from construction claims to trademark disputes.",
    highlights: ["Litigation Support", "Trademark Disputes"],
  },
  {
    role: "Judicial Trainee",
    company: "Dubai Courts",
    period: "2011 — 2012",
    description:
      "Trained inside the court system before ever arguing in front of it — where the discipline of writing for a judge, not for a client, was set.",
    highlights: ["Court Procedure", "Judicial Drafting"],
  },
];

export const CREDENTIALS = [
  { label: "Juris Doctor (J.D.)", issuer: "American University in Dubai", year: "2010" },
  { label: "LL.M., International Commercial Law", issuer: "SOAS, University of London", year: "2011" },
  { label: "Advocate, Dubai Courts", issuer: "Licensed & Practicing", year: "2012 —" },
  { label: "Certified Arbitrator", issuer: "DIAC — Dubai International Arbitration Centre", year: "2018 —" },
];

export const RECOGNITION = [
  { name: "Legal 500 EMEA", role: "Recommended, Dispute Resolution" },
  { name: "Chambers & Partners", role: "Ranked, Commercial Litigation" },
  { name: "Who's Who Legal", role: "Listed, Arbitration" },
  { name: "The Oath — ME Legal Digest", role: "Feature, 2024" },
  { name: "Middle East Legal Awards", role: "Finalist, Litigator of the Year" },
  { name: "DIAC Panel", role: "Accredited Arbitrator" },
];

export const TESTIMONIALS = [
  {
    quote:
      "She was the only counsel who told us to settle the shareholder dispute before it became litigation. That advice saved the business two years and, honestly, the relationship between the two branches of my family.",
    name: "Omar Ferran",
    role: "CEO, Manufacturing Group",
  },
  {
    quote:
      "Most lawyers hand you a strategy memo and disappear until the hearing. Layla was in every negotiation herself, and she flagged the drafting error that saved our round before anyone else even saw it.",
    name: "Priya Nair",
    role: "Co-Founder, Series B Fintech",
  },
  {
    quote:
      "We had three storefronts infringing our mark across three emirates. She had an injunction on the first one within five days and didn't stop until all three were resolved.",
    name: "Marcus Webb",
    role: "General Counsel, Retail Franchise",
  },
];
