export const OWNER = {
  name: "Axel Brennan",
  title: "Mechanical Engineer",
  tagline: "Built for speed. Engineered for precision.",
  subtagline:
    "I'm a mechanical engineer who designs, simulates, and races what I build — from motorsport components to automated production lines that run twenty-four hours a day.",
  email: "axel.brennan@example.com",
  linkedin: "https://linkedin.com/in/axelbrennan",
  github: "https://github.com/axelbrennan",
  resumeUrl: "#",
  location: "Indianapolis, IN",
  availability: "Open to senior design roles",
  stats: [
    { value: "60+", label: "Components shipped" },
    { value: "0.2s", label: "Lap time gained" },
    { value: "9", label: "Years in motorsport eng." },
    { value: "4", label: "Patents filed" },
  ],
};

export const ABOUT = {
  intro:
    "I'm a mechanical engineer who lives at the intersection of CAD models and the shop floor. I design parts in SolidWorks in the morning, validate them with FEA by lunch, and watch them spin on a test rig by the end of the day.",
  philosophy:
    "A part that only survives in simulation hasn't been engineered yet. I design for the worst tolerance stack, the worst material batch, and the worst day the part will ever see.",
  focus: [
    "Mechanical design & GD&T",
    "FEA / CFD simulation",
    "Motorsport & powertrain components",
    "DFM & production automation",
  ],
};

export const PROCESS = [
  { step: "01", title: "Concept", desc: "Sketch geometry, define load cases, and lock the functional requirements." },
  { step: "02", title: "CAD Model", desc: "Parametric solid modeling with full GD&T and tolerance stack-up." },
  { step: "03", title: "Simulate", desc: "FEA and CFD validation against real-world load and thermal cases." },
  { step: "04", title: "Validate", desc: "Physical prototyping, test-rig data, and sign-off for production." },
];

export const PROJECTS = [
  {
    id: "01",
    title: "GT4 Brake Cooling Duct",
    category: "Motorsport · CFD",
    description: "Designed a 3D-printed brake cooling duct that cut rotor temps by 60°C across a full race stint.",
    tools: ["SolidWorks", "Ansys Fluent", "Markforged"],
    outcomes: ["Rotor temps down 60°C", "0.2s/lap gain in late-race stints", "Adopted across the full GT4 grid"],
  },
  {
    id: "02",
    title: "Robotic Weld Cell Redesign",
    category: "Automation · Production",
    description: "Redesigned a 6-axis robotic weld cell fixture to cut cycle time on a high-volume chassis line.",
    tools: ["SolidWorks", "AutoCAD", "Six Sigma"],
    outcomes: ["22% faster cycle time", "Zero fixture-related defects in 6 months", "Retooled in a single weekend"],
  },
  {
    id: "03",
    title: "Lightweight Suspension Upright",
    category: "Motorsport · Topology Optimization",
    description: "Topology-optimized a forged aluminum suspension upright, cutting unsprung mass without losing stiffness.",
    tools: ["Fusion 360", "Ansys", "Altair OptiStruct"],
    outcomes: ["31% mass reduction", "Stiffness within 2% of baseline", "Passed full fatigue testing"],
  },
  {
    id: "04",
    title: "Conveyor Drive Gearbox",
    category: "Industrial · Power Transmission",
    description: "Specified and packaged a custom gearbox for a high-throughput conveyor line running three shifts a day.",
    tools: ["SolidWorks", "KISSsoft", "GD&T"],
    outcomes: ["Zero unplanned downtime in year one", "18-month ROI on energy savings", "Rated for continuous duty"],
  },
  {
    id: "05",
    title: "Quick-Release Pit Wheel Hub",
    category: "Motorsport · Mechanism Design",
    description: "Designed a quick-release wheel hub mechanism to shave seconds off pit-stop tire changes.",
    tools: ["SolidWorks", "Fusion 360", "Rapid Prototyping"],
    outcomes: ["1.1s faster average pit stop", "Zero hub failures across a full season", "Adopted by two race teams"],
  },
  {
    id: "06",
    title: "HVAC Damper Actuator",
    category: "Product Design · Consumer",
    description: "Designed an injection-molded damper actuator mechanism for a residential smart-HVAC product line.",
    tools: ["SolidWorks", "Moldflow", "DFM Review"],
    outcomes: ["40% part-count reduction", "Passed 100k-cycle durability test", "Shipped in 200k+ units"],
  },
];

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Shaft being machined on a CNC lathe",
    caption: "CNC turning — final pass",
  },
  {
    src: "https://images.unsplash.com/photo-1524514587686-e2909d726e9b?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Close-up of black metal gears",
    caption: "Precision gear train",
  },
  {
    src: "https://images.unsplash.com/photo-1752614671052-92e18f534db1?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Industrial robotic arm on a factory floor",
    caption: "Robotic weld cell, line 3",
  },
  {
    src: "https://images.unsplash.com/photo-1689942007817-679c21614b25?w=640&h=480&q=80&auto=format&fit=crop",
    alt: "Machine cutting a piece of metal",
    caption: "Roughing pass, 4140 steel",
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Mechanical Engineer",
    company: "Apex Performance Engineering",
    period: "2020 — Present",
    description: "Lead mechanical design for motorsport components, from concept through race-day validation.",
    highlights: ["Motorsport Design", "FEA/CFD", "Team Leadership"],
  },
  {
    role: "Mechanical Engineer",
    company: "Ironclad Automation",
    period: "2017 — 2020",
    description: "Designed fixtures and automated tooling for high-volume automotive production lines.",
    highlights: ["Production Automation", "DFM", "GD&T"],
  },
  {
    role: "Design Engineer, Co-op",
    company: "Ironclad Automation",
    period: "2015 — 2017",
    description: "Rotated through design, simulation, and the shop floor while finishing a mechanical engineering degree.",
    highlights: ["SolidWorks", "Prototyping", "Six Sigma"],
  },
];

export const SKILLS: Record<string, { name: string; level: number }[]> = {
  "Design & Analysis": [
    { name: "SolidWorks / Fusion 360", level: 95 },
    { name: "FEA (Ansys)", level: 88 },
    { name: "CFD (Fluent)", level: 80 },
    { name: "GD&T / Tolerance Stack-Up", level: 92 },
  ],
  "Production & Tools": [
    { name: "DFM / DFA", level: 90 },
    { name: "Six Sigma (Green Belt)", level: 78 },
    { name: "Rapid Prototyping", level: 85 },
    { name: "PLM / PDM", level: 75 },
  ],
};

export const CERTIFICATIONS = [
  { title: "B.S. in Mechanical Engineering", issuer: "Purdue University", year: "2015" },
  { title: "Certified SolidWorks Professional (CSWP)", issuer: "Dassault Systèmes", year: "2017" },
  { title: "Six Sigma Green Belt", issuer: "ASQ", year: "2019" },
  { title: "FE Exam — Mechanical", issuer: "NCEES", year: "2016" },
];

export const TESTIMONIALS = [
  {
    quote: "Axel shaved two-tenths off our lap time with a part that weighed less and survived twice as long. That's the whole job, done right.",
    name: "Maria Solis",
    role: "Team Principal, Apex GT Racing",
  },
  {
    quote: "He's the engineer you call when the line is down and you need a fix that's still standing in six months.",
    name: "Devon Caldwell",
    role: "Plant Manager, Ironclad Automation",
  },
  {
    quote: "Axel's tolerance stack-ups have saved us from at least three expensive tooling mistakes.",
    name: "Priya Nair",
    role: "Manufacturing Engineer, Ironclad Automation",
  },
];

export const TOOLS = [
  "SolidWorks", "Fusion 360", "Ansys", "AutoCAD", "KISSsoft", "Moldflow", "Altair OptiStruct", "Six Sigma",
];
