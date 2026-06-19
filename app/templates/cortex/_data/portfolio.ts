export const OWNER = {
  name: "Ethan Park",
  title: "Senior Data Scientist",
  tagline: "Turning raw data into decisions that ship.",
  subtagline:
    "I build machine learning systems — from the first notebook experiment to the production pipeline serving millions of predictions a day.",
  email: "ethan@example.com",
  github: "https://github.com/ethanpark",
  linkedin: "https://linkedin.com/in/ethanpark",
  resumeUrl: "#",
  location: "Seattle, WA",
  availability: "Open to senior ML roles",
  stats: [
    { value: "40+", label: "Models shipped" },
    { value: "2PB+", label: "Data processed" },
    { value: "8", label: "Years in ML" },
    { value: "12", label: "Patents & papers" },
  ],
};

export const ABOUT = {
  intro:
    "I'm a senior data scientist who works across the full lifecycle — framing the business question, building the model, and shipping it behind an API that survives real traffic. I care as much about latency and monitoring as I do about offline F1 scores.",
  philosophy:
    "A model that never leaves the notebook hasn't shipped anything. I default to simple baselines, instrument everything, and only reach for a bigger model when the data and the metrics ask for one.",
  focus: [
    "Production ML systems & MLOps",
    "Forecasting & demand modeling",
    "NLP and applied LLM pipelines",
    "Experimentation & causal inference",
  ],
};

export const PROJECTS = [
  {
    id: "01",
    title: "Real-Time Fraud Detection Pipeline",
    description:
      "Streaming gradient-boosted model scoring transactions in under 80ms, replacing a rules-only system.",
    tech: ["Python", "XGBoost", "Kafka", "AWS SageMaker"],
    outcomes: [
      "Cut fraud losses by 34%",
      "p99 latency under 80ms",
      "Scores 1.2M transactions/day",
    ],
  },
  {
    id: "02",
    title: "Demand Forecasting Engine",
    description:
      "Hierarchical time-series model forecasting SKU-level demand across 600+ retail locations.",
    tech: ["Python", "PyTorch", "Airflow", "Snowflake"],
    outcomes: [
      "Reduced stockouts by 21%",
      "Forecast MAPE improved to 8.4%",
      "Retrains nightly on 40M rows",
    ],
  },
  {
    id: "03",
    title: "Support Ticket Triage (NLP)",
    description:
      "Fine-tuned transformer classifier that routes inbound support tickets to the right queue automatically.",
    tech: ["Python", "Hugging Face", "FastAPI", "Docker"],
    outcomes: [
      "92% routing accuracy",
      "Cut median response time by 40%",
      "Deployed behind a 99.95% uptime API",
    ],
  },
  {
    id: "04",
    title: "Churn Prediction & Intervention",
    description:
      "Propensity model paired with an experimentation framework to test retention offers against predicted churn risk.",
    tech: ["Python", "scikit-learn", "SQL", "dbt"],
    outcomes: [
      "Identified 18% of revenue at risk early",
      "Retention campaign lifted renewal 6.3pp",
      "A/B tested across 4 cohorts",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Data Scientist",
    company: "Northwind Analytics",
    period: "2021 — Present",
    description:
      "Lead ML systems for the growth and risk teams. Own the model lifecycle from experimentation through production monitoring.",
    highlights: ["MLOps", "Team Leadership", "Production ML"],
  },
  {
    role: "Data Scientist",
    company: "Beacon Retail Co.",
    period: "2018 — 2021",
    description:
      "Built forecasting and pricing models for a multi-region retail chain. Partnered directly with supply-chain planners.",
    highlights: ["Forecasting", "Pricing Models", "Stakeholder Partnership"],
  },
  {
    role: "Data Analyst → ML Engineer",
    company: "Harbor Logistics",
    period: "2016 — 2018",
    description:
      "Started in analytics, transitioned into building the company's first production ML model for route optimization.",
    highlights: ["Route Optimization", "SQL", "Early ML Adoption"],
  },
];

export const SKILLS = {
  Modeling: [
    { name: "Deep Learning (PyTorch / TF)", level: 5 },
    { name: "Gradient Boosting (XGBoost)", level: 5 },
    { name: "Classical ML (scikit-learn)", level: 5 },
    { name: "Time-Series Forecasting", level: 4 },
    { name: "NLP / LLMs", level: 4 },
  ],
  Engineering: [
    { name: "Python", level: 5 },
    { name: "SQL", level: 5 },
    { name: "Spark", level: 3 },
    { name: "Airflow / dbt", level: 4 },
    { name: "Docker / Kubernetes", level: 3 },
  ],
  Platform: [
    { name: "AWS SageMaker", level: 4 },
    { name: "MLflow", level: 4 },
    { name: "FastAPI", level: 4 },
    { name: "Snowflake / BigQuery", level: 4 },
    { name: "CI/CD for ML", level: 3 },
  ],
  Statistics: [
    { name: "Experimentation / A-B Testing", level: 5 },
    { name: "Causal Inference", level: 4 },
    { name: "Bayesian Methods", level: 3 },
    { name: "Hypothesis Testing", level: 5 },
    { name: "Feature Engineering", level: 5 },
  ],
};

export const CERTIFICATIONS = [
  { title: "AWS Certified Machine Learning — Specialty", issuer: "Amazon Web Services", year: "2023" },
  { title: "TensorFlow Developer Certificate", issuer: "Google", year: "2021" },
  { title: "Kaggle Notebooks & Datasets Expert", issuer: "Kaggle", year: "2022" },
  { title: "M.S. in Statistics", issuer: "University of Washington", year: "2016" },
];

export const STACK = [
  "Python", "PyTorch", "TensorFlow", "scikit-learn", "SQL", "Spark", "Airflow", "AWS SageMaker", "Docker", "MLflow",
];
