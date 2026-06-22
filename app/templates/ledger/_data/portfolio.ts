export const OWNER = {
  name: "Marcus Hale",
  title: "Certified Public Accountant",
  tagline: "Clarity in every ledger line.",
  subtagline:
    "I'm a CPA who turns scattered receipts and spreadsheets into clean books, accurate filings, and numbers you can actually make decisions on.",
  email: "marcus.hale@example.com",
  linkedin: "https://linkedin.com/in/marcushale",
  ctaLabel: "Book a Consult",
  ctaHref: "#contact",
  location: "Boston, MA",
  availability: "Accepting new clients for Q3",
  stats: [
    { value: "500+", label: "Returns filed" },
    { value: "$2.1M", label: "Deductions recovered" },
    { value: "12", label: "Years in practice" },
    { value: "98%", label: "On-time filing rate" },
  ],
};

export const ABOUT = {
  intro:
    "I'm a Certified Public Accountant who believes a business should understand its own numbers, not just receive them once a year. I sit between the spreadsheet and the strategy meeting — translating raw transactions into a picture clear enough to act on.",
  philosophy:
    "A clean set of books is a foundation, not the finish line. I close every engagement asking the same question: does this client know more about their business than they did before I touched their numbers?",
  focus: [
    "Tax Strategy & Compliance",
    "Bookkeeping & Reconciliation",
    "Financial Reporting & Forecasting",
    "Audit & Assurance Support",
  ],
};

export const PROCESS = [
  { step: "01", title: "Discovery", desc: "Review existing books, prior filings, and systems to find gaps, risk, and quick wins before any work begins." },
  { step: "02", title: "Reconcile", desc: "Clean up the ledger, reconcile every account, and put a monthly close process in place that actually holds." },
  { step: "03", title: "Report", desc: "Turn reconciled data into statements and forecasts that drive real decisions, not just compliance paperwork." },
  { step: "04", title: "Advise", desc: "File on time, every time, then stay on as a year-round advisor instead of a once-a-year scramble." },
];

export const CASE_STUDIES = [
  {
    id: "01",
    title: "Three Years of Backlogged Books",
    category: "Bookkeeping · Cleanup",
    description: "Rebuilt three years of unreconciled transactions for a 12-person agency in six weeks, ahead of a funding round.",
    tools: ["QuickBooks Online", "Excel", "Bill.com"],
    outcomes: ["3 years reconciled in 6 weeks", "Passed investor financial due diligence", "Monthly close cut from 18 days to 4"],
  },
  {
    id: "02",
    title: "R&D Tax Credit Recovery",
    category: "Tax Strategy · SaaS",
    description: "Identified and documented R&D tax credits a software client's prior accountant had never claimed.",
    tools: ["Form 6765", "ASC 730 Workpapers", "Drake Tax"],
    outcomes: ["$184K in credits recovered", "2 prior years amended successfully", "Zero IRS inquiry flags"],
  },
  {
    id: "03",
    title: "Multi-State Sales Tax Cleanup",
    category: "Compliance · E-commerce",
    description: "Untangled nexus exposure across 14 states for a fast-growing e-commerce brand and got every state current.",
    tools: ["Avalara", "Excel", "State VDAs"],
    outcomes: ["14 states brought current", "Penalties reduced via voluntary disclosure", "Automated tax collection going forward"],
  },
  {
    id: "04",
    title: "Year-One Audit Readiness",
    category: "Audit & Assurance",
    description: "Prepared a Series A startup's books and controls for its first financial statement audit.",
    tools: ["GAAP Workpapers", "NetSuite", "PBC Checklists"],
    outcomes: ["Clean audit opinion, no restatements", "Audit timeline cut by 3 weeks", "Controls memo adopted board-wide"],
  },
  {
    id: "05",
    title: "Restaurant Group Cash Flow Turnaround",
    category: "Advisory · Hospitality",
    description: "Rebuilt a four-location restaurant group's cash flow forecasting after two near-miss payroll shortfalls.",
    tools: ["13-Week Cash Model", "QuickBooks", "Excel"],
    outcomes: ["Zero payroll shortfalls in 18 months", "14% reduction in food-cost variance", "Weekly cash visibility across locations"],
  },
  {
    id: "06",
    title: "Estate & Succession Tax Planning",
    category: "Tax Strategy · Family Business",
    description: "Structured a multi-year succession and gifting plan for a family manufacturing business changing hands.",
    tools: ["Trust Structuring", "Form 709", "Valuation Coordination"],
    outcomes: ["Estate tax exposure cut ~40%", "Smooth two-generation ownership transfer", "Plan re-confirmed annually since"],
  },
];

export const STATEMENTS = [
  { label: "INCOME STATEMENT", rev: "FY24", color: "#1f5c3f" },
  { label: "BALANCE SHEET", rev: "FY24", color: "#b8862c" },
  { label: "CASH FLOW STATEMENT", rev: "FY24", color: "#4d5f52" },
  { label: "TAX RETURN — 1120", rev: "FY24", color: "#8a9388" },
];

export const IMPACT = [
  { target: 2.1, decimals: 1, prefix: "$", suffix: "M+", label: "Tax savings & deductions identified" },
  { target: 500, decimals: 0, suffix: "+", label: "Returns filed, zero missed deadlines" },
  { target: 98, decimals: 0, suffix: "%", label: "On-time filing rate" },
  { target: 12, decimals: 0, suffix: "+", label: "Years in independent practice" },
];

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1746221331496-a87689fc8eb9?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Calculator and financial documents on a desk",
    caption: "Reconciling the details",
  },
  {
    src: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Professional reviewing figures on a tablet",
    caption: "Client advisory session",
  },
  {
    src: "https://images.unsplash.com/photo-1765868017186-18a3fc4c2942?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Pen resting across financial documents",
    caption: "Signed, sealed, filed",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Low-angle view of financial district skyscrapers",
    caption: "Where the numbers work",
  },
];

export const EXPERIENCE = [
  {
    role: "Principal CPA",
    company: "Hale & Co. Financial",
    period: "2018 — Present",
    description: "Run an independent CPA practice serving startups, agencies, and family businesses across tax, bookkeeping, and advisory.",
    highlights: ["Tax Strategy", "Advisory", "Practice Leadership"],
  },
  {
    role: "Senior Tax Associate",
    company: "Bristow Hartwell LLP",
    period: "2014 — 2018",
    description: "Led multi-state tax compliance and planning engagements for mid-market clients across professional services and retail.",
    highlights: ["Multi-State Tax", "Compliance", "Client Management"],
  },
  {
    role: "Staff Accountant",
    company: "Bristow Hartwell LLP",
    period: "2012 — 2014",
    description: "Rotated through audit, tax, and bookkeeping engagements while completing CPA licensure requirements.",
    highlights: ["GAAP", "Audit Support", "CPA Exam"],
  },
];

export const SKILLS: Record<string, { name: string; level: number }[]> = {
  "Tax & Compliance": [
    { name: "Individual & Business Tax Returns", level: 96 },
    { name: "Multi-State & Sales Tax", level: 88 },
    { name: "R&D & Specialty Credits", level: 82 },
    { name: "IRS Representation", level: 85 },
  ],
  "Accounting & Advisory": [
    { name: "QuickBooks / Xero / NetSuite", level: 94 },
    { name: "Financial Reporting & Forecasting", level: 90 },
    { name: "Audit & Assurance Support", level: 80 },
    { name: "Cash Flow & Budgeting", level: 92 },
  ],
};

export const CERTIFICATIONS = [
  { title: "Certified Public Accountant (CPA)", issuer: "State Board of Accountancy", year: "2014" },
  { title: "B.S. in Accounting", issuer: "Boston University", year: "2012" },
  { title: "QuickBooks Online ProAdvisor", issuer: "Intuit", year: "2016" },
  { title: "Enrolled Agent (EA)", issuer: "Internal Revenue Service", year: "2019" },
];

export const TESTIMONIALS = [
  {
    quote: "Marcus found credits our last two accountants completely missed. That recovery alone paid for years of his fees.",
    name: "Priya Anand",
    role: "Founder, Loomwell Studio",
  },
  {
    quote: "He's the first accountant who's explained our numbers to me like I'm a business owner, not an audit risk.",
    name: "Devon Marsh",
    role: "Owner, Marsh & Co. Hospitality",
  },
  {
    quote: "Three years of messy books, cleaned and reconciled inside six weeks, right before our funding round closed.",
    name: "Renata Cole",
    role: "COO, Fielding Analytics",
  },
];

export const TOOLS = [
  "QuickBooks Online", "Xero", "NetSuite", "Excel / Power BI", "Avalara", "Drake Tax", "Bill.com", "Sage Intacct",
];
