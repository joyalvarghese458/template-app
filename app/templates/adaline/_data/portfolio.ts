export const OWNER = {
  name: "Alex Morgan",
  title: "Full Stack Developer",
  tagline: "Building thoughtful digital systems that scale.",
  subtagline:
    "I design and develop ERP platforms, business applications, and modern web experiences that help organizations operate more efficiently.",
  email: "alex@example.com",
  linkedin: "https://linkedin.com/in/alexmorgan",
  github: "https://github.com/alexmorgan",
  resumeUrl: "#",
  location: "Available Remotely",
  availability: "Open to new opportunities",
};

export const ABOUT = {
  intro:
    "I'm a Full Stack Developer with deep expertise in building complex business systems — from ERP platforms to SaaS applications that serve hundreds of users daily. My work sits at the intersection of software engineering and business logic, where clean code meets real-world operational needs.",
  philosophy:
    "I believe the best software is invisible — it handles complexity so quietly that users never think about the technology, only the outcome. Every system I build is designed with longevity in mind: maintainable, scalable, and thoughtfully documented.",
  focus: [
    "ERP system architecture and development",
    "Business process automation",
    "Cloud-native application design",
    "Developer experience and clean APIs",
  ],
};

export const PROJECTS = [
  {
    id: "01",
    title: "Enterprise ERP System",
    description:
      "A full-featured ERP platform built for mid-size manufacturing companies. Covers procurement, inventory, HR, payroll, and financial reporting in a unified interface.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Docker", "AWS"],
    outcomes: [
      "Reduced manual data entry by 70%",
      "Unified 5 legacy systems into one",
      "Serving 200+ daily active users",
    ],
  },
  {
    id: "02",
    title: "Inventory Management System",
    description:
      "Real-time inventory tracking and warehouse management system with barcode scanning, automated reorder alerts, and multi-location support.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    outcomes: [
      "98.5% inventory accuracy rate",
      "Automated 3000+ weekly reorder decisions",
      "Integrated with 4 supplier APIs",
    ],
  },
  {
    id: "03",
    title: "HRMS Platform",
    description:
      "Human Resource Management System handling employee lifecycle — from onboarding and leave management to payroll processing and performance tracking.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    outcomes: [
      "Onboarding time reduced from 3 days to 4 hours",
      "Automated payroll for 500+ employees",
      "Self-service portal with 95% adoption rate",
    ],
  },
  {
    id: "04",
    title: "Marketing Management Module",
    description:
      "A campaign planning and analytics module integrated within the ERP ecosystem, enabling marketing teams to track budgets, ROI, and content calendars.",
    tech: ["React", "NestJS", "PostgreSQL", "Chart.js"],
    outcomes: [
      "Consolidated 4 marketing tools into 1",
      "Real-time ROI tracking across channels",
      "45% reduction in reporting time",
    ],
  },
  {
    id: "05",
    title: "Attendance Tracking System",
    description:
      "Biometric and GPS-based attendance system with shift scheduling, overtime calculation, and compliance reporting built for distributed teams.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS Lambda"],
    outcomes: [
      "Supports 1000+ employees across 8 locations",
      "Eliminated manual attendance fraud",
      "Automated compliance reports for audits",
    ],
  },
  {
    id: "06",
    title: "Purchase Management System",
    description:
      "End-to-end procurement workflow covering vendor management, purchase orders, approval chains, GRN processing, and three-way invoice matching.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    outcomes: [
      "Approval cycle time reduced by 60%",
      "Vendor onboarding streamlined to 1 day",
      "Full audit trail for all transactions",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 — Present",
    description:
      "Lead development of enterprise ERP modules serving 500+ users. Architected microservices migration from legacy monolith, reducing deployment time by 80%.",
    highlights: ["ERP Architecture", "Team Leadership", "Cloud Migration"],
  },
  {
    role: "ERP Developer",
    company: "Business Systems Ltd",
    period: "2020 — 2022",
    description:
      "Built and maintained custom ERP modules for manufacturing clients. Developed integrations between SAP, custom systems, and third-party logistics providers.",
    highlights: ["SAP Integration", "Custom Modules", "API Development"],
  },
  {
    role: "Software Engineer",
    company: "Digital Ventures",
    period: "2018 — 2020",
    description:
      "Full stack development of SaaS applications for the hospitality industry. Built real-time booking systems, POS integrations, and analytics dashboards.",
    highlights: ["SaaS Development", "Real-time Systems", "React/Node.js"],
  },
];

export const SKILLS = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  Backend: ["NestJS", "Node.js", "Express", "REST APIs", "GraphQL", "WebSockets"],
  Database: ["PostgreSQL", "MySQL", "Redis", "Prisma", "TypeORM", "MongoDB"],
  Cloud: ["AWS (EC2, S3, Lambda, RDS)", "Docker", "Nginx", "CI/CD Pipelines"],
  Tools: ["Git", "Postman", "Figma", "Jira", "Linux", "Webpack"],
};

export const PROCESS = [
  {
    step: "01",
    title: "Discover",
    description:
      "Deep dive into business requirements, existing systems, and user workflows. I map every edge case before writing a line of code.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architecture planning, data modeling, and UI wireframing. Every decision is documented and reviewed before development starts.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Clean, typed, well-tested code. I work in short cycles with frequent check-ins, so there are never any surprises at delivery.",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "Containerized deployments, automated pipelines, and monitored rollouts. I stay with the product through go-live and beyond.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Alex transformed our entire operations by building an ERP system that actually fits how we work. The attention to detail in understanding our business processes was remarkable.",
    author: "Sarah Chen",
    title: "COO, Meridian Manufacturing",
  },
  {
    quote:
      "The inventory system Alex delivered eliminated a problem we had struggled with for years. Clean code, thoughtful design, and delivered ahead of schedule.",
    author: "Marcus Webb",
    title: "Head of Operations, Nexus Logistics",
  },
  {
    quote:
      "Working with Alex felt like having an in-house architect. He understood not just the technical requirements, but the business context behind every feature.",
    author: "Priya Nair",
    title: "CTO, Elevate SaaS",
  },
];

export const TECHNOLOGIES = [
  "React",
  "Next.js",
  "NestJS",
  "Node.js",
  "PostgreSQL",
  "TypeScript",
  "Docker",
  "AWS",
];
