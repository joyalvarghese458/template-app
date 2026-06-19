export const OWNER = {
  name: "Marcus Hale",
  title: "Mechanical Design Engineer, P.E.",
  tagline: "Engineering precision into every moving part.",
  subtagline:
    "I design, simulate, and validate mechanical systems — from concept sketch to manufactured part — for automotive, robotics, and industrial automation clients.",
  email: "marcus@example.com",
  linkedin: "https://linkedin.com/in/marcushale",
  github: "https://github.com/marcushale",
  resumeUrl: "#",
  location: "Detroit, MI",
  availability: "Open to new opportunities",
  stats: [
    { value: "9+", label: "Years in industry" },
    { value: "40+", label: "Products shipped" },
    { value: "6", label: "Patents filed" },
    { value: "3", label: "FAA / ISO audits passed" },
  ],
};

export const ABOUT = {
  intro:
    "I'm a Mechanical Design Engineer with nine years of experience taking products from a napkin sketch to a validated, manufactured assembly. My background spans automotive structures, robotic actuation, and precision sheet-metal enclosures — wherever tolerances are tight and failure isn't an option.",
  philosophy:
    "Good mechanical design is invisible until it isn't — a bracket that never cracks, a hinge that never binds, a chassis that passes every drop test on the first try. I lean on first-principles analysis and simulation before a single prototype gets cut, because every revision costs time the schedule doesn't have.",
  focus: [
    "Structural design & FEA validation",
    "DFM / DFA for high-volume manufacturing",
    "GD&T and tolerance stack-up analysis",
    "Cross-functional work with electrical & firmware teams",
  ],
};

export const PROJECTS = [
  {
    id: "01",
    title: "Lightweight EV Battery Enclosure",
    description:
      "Structural redesign of a battery enclosure for an electric delivery van, cutting mass while meeting UN38.3 crush and IP67 sealing requirements.",
    tech: ["SolidWorks", "ANSYS Mechanical", "Aluminum 6061", "DFM"],
    outcomes: [
      "18% mass reduction vs. prior generation",
      "Passed crush + thermal cycling on first prototype run",
      "Tooling cost reduced by consolidating 14 parts into 6",
    ],
  },
  {
    id: "02",
    title: "6-Axis Robotic Gripper",
    description:
      "Precision end-effector for a pick-and-place robot handling fragile electronics, with a compliant mechanism replacing pneumatic actuation.",
    tech: ["Fusion 360", "MATLAB", "3D Printing (SLS)", "Compliant Mechanisms"],
    outcomes: [
      "Cycle time improved by 22%",
      "Zero pneumatic lines — lower maintenance overhead",
      "Grip force repeatable within ±0.3 N across 50k cycles",
    ],
  },
  {
    id: "03",
    title: "HVAC Duct Energy Optimization",
    description:
      "CFD-driven redesign of commercial rooftop HVAC ductwork to reduce static pressure loss and fan energy draw across a 12-building portfolio.",
    tech: ["ANSYS Fluent", "AutoCAD MEP", "Sheet Metal", "Energy Modeling"],
    outcomes: [
      "14% reduction in fan energy consumption",
      "Static pressure loss cut by 1.1 in. w.g.",
      "ROI on retrofit under 18 months",
    ],
  },
  {
    id: "04",
    title: "Precision CNC Fixture System",
    description:
      "Modular 5-axis machining fixture for a family of turbine housings, replacing single-use tooling with a reconfigurable clamping platform.",
    tech: ["CATIA V5", "GD&T", "Tolerance Stack-Up", "Hardened Steel"],
    outcomes: [
      "Fixture changeover time down from 90 to 12 minutes",
      "Positional repeatability held to ±0.02 mm",
      "Single fixture family covers 9 part variants",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Mechanical Design Engineer",
    company: "Ironclad Motion Systems",
    period: "2021 — Present",
    description:
      "Lead structural and mechanism design for robotic automation products. Own FEA validation, DFM reviews, and supplier tooling sign-off from concept through production.",
    highlights: ["FEA Validation", "DFM Leadership", "Supplier Tooling"],
  },
  {
    role: "Mechanical Engineer II",
    company: "Vantage Automotive Group",
    period: "2018 — 2021",
    description:
      "Designed structural battery and chassis components for EV platforms. Ran crash, thermal, and fatigue simulations and coordinated prototype builds with three contract manufacturers.",
    highlights: ["Crash & Fatigue CAE", "EV Structures", "Prototype Builds"],
  },
  {
    role: "Mechanical Engineer",
    company: "Halsted Industrial Co.",
    period: "2016 — 2018",
    description:
      "Designed sheet-metal enclosures and HVAC ductwork for commercial mechanical systems. Produced fabrication drawings and ran CFD studies for airflow optimization.",
    highlights: ["Sheet Metal Design", "CFD Analysis", "Fabrication Drawings"],
  },
];

export const SKILLS = {
  "Design & CAD": [
    { name: "SolidWorks", level: 95 },
    { name: "CATIA V5", level: 80 },
    { name: "Fusion 360", level: 88 },
    { name: "AutoCAD", level: 85 },
  ],
  "Simulation & Analysis": [
    { name: "ANSYS Mechanical", level: 90 },
    { name: "ANSYS Fluent (CFD)", level: 75 },
    { name: "MATLAB", level: 78 },
    { name: "GD&T / Tolerance Stack-Up", level: 92 },
  ],
  "Manufacturing": [
    { name: "DFM / DFA", level: 90 },
    { name: "CNC Machining", level: 82 },
    { name: "Sheet Metal Fabrication", level: 86 },
    { name: "Injection Molding", level: 70 },
  ],
  "Tools & Process": [
    { name: "PDM / PLM (SolidWorks PDM)", level: 84 },
    { name: "Six Sigma (Green Belt)", level: 76 },
    { name: "Project Coordination", level: 80 },
  ],
};

export const CERTIFICATIONS = [
  {
    title: "Professional Engineer (P.E.)",
    issuer: "Michigan State Board of Engineering",
    year: "2022",
  },
  {
    title: "Six Sigma Green Belt",
    issuer: "ASQ",
    year: "2020",
  },
  {
    title: "GD&T Professional Certification",
    issuer: "ASME Y14.5",
    year: "2019",
  },
  {
    title: "US Patent — Compliant Robotic Gripper Mechanism",
    issuer: "USPTO",
    year: "2023",
  },
];

export const TOOLS = [
  "SolidWorks",
  "CATIA V5",
  "Fusion 360",
  "AutoCAD",
  "ANSYS Mechanical",
  "ANSYS Fluent",
  "MATLAB",
  "KeyShot",
];
