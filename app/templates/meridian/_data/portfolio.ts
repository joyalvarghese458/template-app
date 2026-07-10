// ── Meridian — content model ─────────────────────────────────────────
// All copy for the template lives here so a buyer only edits one file.

export const OWNER = {
  name: "Elias Navarro",
  shortName: "E. NAVARRO",
  callsign: "MERIDIAN",
  role: "Commercial Airline Pilot · B787 Captain",
  base: "Dubai, UAE — OMDB",
  availability: "Open to corporate & charter roster",
  headline: ["Fourteen years.", "Nine thousand hours.", "One clean logbook."],
  subhead:
    "Wide-body captain with a training instructor's patience and an auditor's discipline. I fly long-haul B787 sectors across four continents — and I hold the left seat to the same standard on hour 9,000 as on hour one.",
  stats: [
    { value: "9,400+", label: "Flight hours" },
    { value: "4", label: "Type ratings" },
    { value: "3,900", label: "Sectors flown" },
    { value: "98.6%", label: "On-time record" },
  ],
  email: "elias@meridiancrew.aero",
  phone: "+971 55 000 0000",
  location: "Dubai, United Arab Emirates",
};

// ── Flight log — career history as pilot logbook rows ────────────────
export type LogEntry = {
  period: string;
  operator: string;
  aircraft: string;
  role: string;
  hours: string;
  note: string;
};

export const FLIGHT_LOG: LogEntry[] = [
  {
    period: "2021 — NOW",
    operator: "Khaleej Air",
    aircraft: "B787-9",
    role: "Captain",
    hours: "2,940",
    note: "Long-haul command across GCC–Europe–Asia network. Line training captain since 2024.",
  },
  {
    period: "2017 — 2021",
    operator: "Khaleej Air",
    aircraft: "A330-300",
    role: "Senior First Officer",
    hours: "3,160",
    note: "ETOPS 180 operations, polar route qualification, CRM facilitator.",
  },
  {
    period: "2014 — 2017",
    operator: "Gulf Connect",
    aircraft: "A320",
    role: "First Officer",
    hours: "2,410",
    note: "High-frequency regional sectors. CAT IIIB low-visibility operations.",
  },
  {
    period: "2012 — 2014",
    operator: "Meridian Flight Academy",
    aircraft: "DA42 / C172",
    role: "Flight Instructor",
    hours: "890",
    note: "Ab-initio and instrument-rating instruction. 60+ students soloed.",
  },
];

// ── Route chart — career waypoints ────────────────────────────────────
export type Waypoint = {
  code: string;
  city: string;
  year: string;
  milestone: string;
  // position on the chart, viewBox percentage (0–100)
  x: number;
  y: number;
};

export const WAYPOINTS: Waypoint[] = [
  { code: "PHX", city: "Phoenix, USA", year: "2012", milestone: "Ab-initio training — CPL/IR in the Arizona desert", x: 8, y: 62 },
  { code: "DXB", city: "Dubai, UAE", year: "2014", milestone: "First airline seat — A320 right seat at Gulf Connect", x: 34, y: 30 },
  { code: "SIN", city: "Singapore", year: "2017", milestone: "Long-haul transition — A330 ETOPS across the equator", x: 60, y: 66 },
  { code: "DXB", city: "Dubai, UAE", year: "2021", milestone: "Fourth stripe — B787-9 command upgrade", x: 78, y: 26 },
  { code: "LHR", city: "London, UK", year: "2024", milestone: "Line training captain — mentoring the next crew", x: 94, y: 52 },
];

// ── Ratings & licences ────────────────────────────────────────────────
export type Rating = {
  code: string;
  title: string;
  authority: string;
  issued: string;
  status: "VALID" | "CURRENT" | "RENEWED";
  detail: string;
};

export const RATINGS: Rating[] = [
  {
    code: "ATPL",
    title: "Airline Transport Pilot Licence",
    authority: "GCAA · ICAO Annex 1",
    issued: "2016",
    status: "VALID",
    detail: "Unrestricted ATPL(A) with English language proficiency Level 6.",
  },
  {
    code: "B787",
    title: "Boeing 787 Type Rating",
    authority: "GCAA / Boeing FTC",
    issued: "2021",
    status: "CURRENT",
    detail: "PIC privileges. Recurrent sim checks passed to first-series standard.",
  },
  {
    code: "A330",
    title: "Airbus A330 Type Rating",
    authority: "GCAA / Airbus TC",
    issued: "2017",
    status: "RENEWED",
    detail: "ETOPS 180 and polar operations qualified.",
  },
  {
    code: "IR-ME",
    title: "Instrument Rating, Multi-Engine",
    authority: "FAA → GCAA conversion",
    issued: "2013",
    status: "CURRENT",
    detail: "CAT IIIB low-visibility approach approval.",
  },
  {
    code: "CRMI",
    title: "CRM Instructor Certificate",
    authority: "Khaleej Air Training",
    issued: "2019",
    status: "CURRENT",
    detail: "Facilitating crew resource management for 200+ flight crew yearly.",
  },
  {
    code: "UPRT",
    title: "Upset Prevention & Recovery",
    authority: "ICAO Doc 10011",
    issued: "2020",
    status: "RENEWED",
    detail: "Advanced on-aircraft and simulator upset recovery training.",
  },
];

// ── Systems panel — competencies as annunciators + gauges ─────────────
export const ANNUNCIATORS: { label: string; state: "green" | "amber" }[] = [
  { label: "ETOPS 180", state: "green" },
  { label: "CAT IIIB", state: "green" },
  { label: "PBN / RNP-AR", state: "green" },
  { label: "RVSM", state: "green" },
  { label: "POLAR OPS", state: "green" },
  { label: "CRM FACILITATOR", state: "green" },
  { label: "LOFT / SIM INSTRUCTOR", state: "amber" },
  { label: "IOSA AUDIT SUPPORT", state: "amber" },
  { label: "FUEL & PERF PLANNING", state: "green" },
];

export const GAUGES: { label: string; value: number; caption: string }[] = [
  { label: "ICAO ENGLISH", value: 100, caption: "Level 6 — expert" },
  { label: "SIM CHECK AVG", value: 94, caption: "First-series pass rate" },
  { label: "TRAINEE PASS RATE", value: 97, caption: "As line training captain" },
];

// ── Departures board — career highlights ─────────────────────────────
export type Departure = {
  flight: string;
  destination: string;
  time: string;
  status: string;
  ok: boolean;
};

export const DEPARTURES: Departure[] = [
  { flight: "MR 2401", destination: "LINE TRAINING CAPTAIN", time: "2024", status: "ONGOING", ok: true },
  { flight: "MR 2302", destination: "9,000 HOUR MILESTONE", time: "2023", status: "LOGGED", ok: true },
  { flight: "MR 2203", destination: "ZERO-FINDING IOSA AUDIT", time: "2022", status: "CLOSED", ok: true },
  { flight: "MR 2104", destination: "B787 COMMAND UPGRADE", time: "2021", status: "COMPLETED", ok: true },
  { flight: "MR 1905", destination: "POLAR ROUTE QUALIFICATION", time: "2019", status: "COMPLETED", ok: true },
  { flight: "MR 1806", destination: "CRM INSTRUCTOR APPOINTMENT", time: "2018", status: "COMPLETED", ok: true },
];

// ── Section nav ───────────────────────────────────────────────────────
export const NAV = [
  { id: "horizon", label: "Intro" },
  { id: "flightlog", label: "Flight log" },
  { id: "routes", label: "Routes" },
  { id: "ratings", label: "Ratings" },
  { id: "systems", label: "Systems" },
  { id: "departures", label: "Highlights" },
  { id: "contact", label: "Contact" },
];
