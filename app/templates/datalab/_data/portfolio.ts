export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  findings: string[];
  tech: string[];
  metrics: { label: string; value: string }[];
  chartData: {
    type: "line" | "scatter" | "bar";
    data: { label: string; x: number; y: number; val2?: number }[];
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; info: string }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export const OWNER = {
  name: "Alex Carter",
  title: "Data Science & Analytics Student",
  university: "University of Science & Technology",
  degree: "B.S. in Data Science & Business Analytics (Senior)",
  gpa: "3.92 / 4.00",
  location: "Dubai, UAE",
  bio: "A senior Data Science student passionate about predictive modeling, deep learning, and translating complex, high-dimensional datasets into actionable narratives. Experienced in developing scalable machine learning models and engineering end-to-end data pipelines.",
  tagline: "Unlocking patterns in high-dimensional noise.",
  subtagline: "Senior Data Science student specializing in predictive modeling, deep learning, and interactive analytics dashboards.",
  stats: [
    { label: "GPA", value: "3.92/4.00" },
    { label: "Datasets Analyzed", value: "24M+ Rows" },
    { label: "ML Models Shipped", value: "15+" },
    { label: "Hackathon Wins", value: "3" },
  ],
  coursework: [
    "Machine Learning & Pattern Recognition",
    "Deep Learning for NLP & Computer Vision",
    "Applied Probability & Bayesian Inference",
    "Advanced Database Systems & SQL",
    "Big Data Architecture (Spark/Hadoop)",
    "Data Visualization & Storytelling",
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "energy-load",
    title: "Smart Grid Energy Load Forecasting",
    category: "Time Series & Deep Learning",
    description: "Developed a Bidirectional LSTM recurrent neural network model to predict municipal energy demand. The model allows power grids to preemptively allocate resources, reducing load-shedding incidents by 14.2%.",
    findings: [
      "Achieved a Mean Absolute Percentage Error (MAPE) of 3.4% on hold-out test datasets.",
      "Identified seasonal drift patterns in HVAC load spikes during extreme temperature anomalies.",
      "Engineered automated pipelines to ingest real-time weather API and grid frequency inputs.",
    ],
    tech: ["Python", "PyTorch", "Pandas", "Scikit-Learn", "FastAPI", "Docker"],
    metrics: [
      { label: "MAPE Accuracy", value: "96.6%" },
      { label: "Latency", value: "18ms" },
      { label: "Feature count", value: "42 indicators" },
    ],
    chartData: {
      type: "line",
      data: [
        { label: "00:00", x: 0, y: 45, val2: 44 },
        { label: "04:00", x: 4, y: 38, val2: 39 },
        { label: "08:00", x: 8, y: 65, val2: 62 },
        { label: "12:00", x: 12, y: 88, val2: 89 },
        { label: "16:00", x: 16, y: 92, val2: 95 },
        { label: "20:00", x: 20, y: 78, val2: 76 },
        { label: "24:00", x: 24, y: 50, val2: 51 },
      ],
    },
  },
  {
    id: "customer-seg",
    title: "Transactional Customer Segmentation",
    category: "Unsupervised Machine Learning",
    description: "Conducted cohort analysis and K-Means/DBSCAN clustering on 500,000+ retail transaction records. Engineered RFM (Recency, Frequency, Monetary) metrics to segment users, improving target marketing conversion by 18.5%.",
    findings: [
      "Discovered 5 high-value customer micro-segments previously grouped into a single bucket.",
      "Recommended dynamic coupon distribution rules based on cluster transition velocities.",
      "Built PCA projections to visualize high-dimensional buyer behaviors in 3D canvas space.",
    ],
    tech: ["Python", "SciPy", "Matplotlib", "Snowflake", "dbt", "Tableau"],
    metrics: [
      { label: "Records Processed", value: "500k+" },
      { label: "Silhouette Score", value: "0.58" },
      { label: "ROAS Increase", value: "+18.5%" },
    ],
    chartData: {
      type: "scatter",
      data: [
        { label: "Loyals", x: 25, y: 85 },
        { label: "Loyals", x: 30, y: 90 },
        { label: "Loyals", x: 20, y: 78 },
        { label: "At Risk", x: 75, y: 30 },
        { label: "At Risk", x: 80, y: 25 },
        { label: "At Risk", x: 85, y: 35 },
        { label: "Big Spenders", x: 55, y: 95 },
        { label: "Big Spenders", x: 60, y: 88 },
        { label: "Big Spenders", x: 50, y: 91 },
        { label: "Hibernating", x: 85, y: 10 },
        { label: "Hibernating", x: 90, y: 15 },
      ],
    },
  },
  {
    id: "sentiment-nlp",
    title: "Real-time Sentiment Scraper Dashboard",
    category: "Natural Language Processing",
    description: "Built an end-to-end sentiment tracking tool for public financial assets. Ingests raw news headlines and social comments, extracts sentiment using fine-tuned RoBERTa transformer models, and exposes results on an API.",
    findings: [
      "Achieved a 91.2% sentiment classification F1-score across financial jargon datasets.",
      "Created an asynchronous Celery queue to handle scraping rates up to 5,000 requests/min.",
      "Correlated negative sentiment spikes with stock price movements over 12 quarters.",
    ],
    tech: ["Python", "Hugging Face", "Transformers", "SQLAlchemy", "Redis", "Next.js"],
    metrics: [
      { label: "F1 Score", value: "91.2%" },
      { label: "Throughput", value: "5k req/min" },
      { label: "Inference Speed", value: "22ms" },
    ],
    chartData: {
      type: "bar",
      data: [
        { label: "Mon", x: 1, y: 80 },
        { label: "Tue", x: 2, y: -45 },
        { label: "Wed", x: 3, y: 60 },
        { label: "Thu", x: 4, y: 90 },
        { label: "Fri", x: 5, y: -15 },
        { label: "Sat", x: 6, y: 10 },
        { label: "Sun", x: 7, y: 25 },
      ],
    },
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming & Queries",
    skills: [
      { name: "Python", level: 95, info: "Primary language for model development, data manipulation, and scripting." },
      { name: "SQL", level: 90, info: "Expert in window functions, complex joins, CTEs, and query optimization." },
      { name: "R", level: 75, info: "Used for academic statistical analysis, bootstrapping, and ggplot graphing." },
      { name: "C++", level: 60, info: "Knowledge of data structures and foundational object-oriented programming." },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Pandas / NumPy", level: 95, info: "Daily drivers for high-performance data cleaning, merging, and grouping." },
      { name: "Scikit-Learn", level: 90, info: "Supervised & unsupervised learning algorithms, preprocessing, and CV scoring." },
      { name: "PyTorch", level: 85, info: "Building Deep Feedforward, CNN, LSTM, and Transformer model architectures." },
      { name: "Hugging Face", level: 80, info: "Tokenization, pipeline execution, and fine-tuning pretrained LLMs." },
    ],
  },
  {
    title: "Data Tools & Platforms",
    skills: [
      { name: "Tableau & PowerBI", level: 85, info: "Creating interactive corporate performance dashboards and reports." },
      { name: "Git & GitHub", level: 90, info: "Version control, branching, PR review workflows, and GitHub Actions CI/CD." },
      { name: "Docker", level: 75, info: "Containerizing machine learning models and web apps for consistent deployment." },
      { name: "AWS SageMaker / S3", level: 70, info: "Familiar with cloud storage buckets and training models on remote EC2 instances." },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Data Science Intern",
    company: "FinTech Corp",
    period: "May 2025 - August 2025",
    description: [
      "Engineered credit default classification models using XGBoost, improving predictive F1-score by 3.8% over the legacy scoring model.",
      "Optimized data preprocessing SQL queries in Snowflake, reducing model ingestion runtime by 35%.",
      "Collaborated with risk analysts to deploy the model output directly into an internal credit approval dashboard.",
    ],
  },
  {
    role: "Research Assistant (Data Science Lab)",
    company: "University Dept of Computer Science",
    period: "Sept 2024 - Present",
    description: [
      "Curated, standardized, and clean-processed genomic sequencing datasets exceeding 12TB utilizing Spark cluster configurations.",
      "Co-authored a paper on genetic anomaly grouping using spectral clustering algorithms (currently under peer review).",
      "Created automated Cron-scheduled backup and validation scripts for MySQL department databases.",
    ],
  },
  {
    role: "Statistics & Probability Tutor",
    company: "University Academic Success Center",
    period: "Jan 2023 - May 2024",
    description: [
      "Tutored 60+ undergraduate students weekly in introductory statistics, linear algebra, and R statistical programming.",
      "Created interactive Jupyter notebook worksheets to visually explain regression assumptions and the Central Limit Theorem.",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Coursera",
    date: "Dec 2024",
    credentialId: "G-AD-892183A",
  },
  {
    title: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    date: "Mar 2025",
    credentialId: "AWS-MLS-839218",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "Jun 2024",
    credentialId: "DL-AI-204192",
  },
];
