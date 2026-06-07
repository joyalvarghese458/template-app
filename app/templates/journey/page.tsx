"use client";

/*
  Journey — Career Portfolio Template
  Premium single-page portfolio for recent graduates and fresh job seekers.
  Black-and-white only · Dark/Light mode · Scroll animations · Glassmorphism
*/

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./styles.module.css";

// ── CONTENT ────────────────────────────────────────────────────────────────

const PROFILE = {
  name: "Alex Morgan",
  initials: "AM",
  role: "Software Engineer",
  tagline: "Building elegant solutions to complex problems",
  intro:
    "A passionate Computer Science graduate eager to contribute to innovative teams. I specialize in full-stack development with a keen eye for clean architecture and user-centric design.",
  objective:
    "Seeking a junior software engineering role where I can apply my academic foundation and internship experience to build impactful products while growing within a collaborative engineering culture.",
  email: "alex.morgan@email.com",
  phone: "+1 (555) 234-5678",
  location: "San Francisco, CA",
  resumeUrl: "#",
  linkedin: "#",
  github: "#",
  twitter: "#",
  avatar: "/alex.webp",
};

const STRENGTHS = [
  { icon: "◆", label: "Fast Learner", desc: "Adapt quickly to new technologies and frameworks" },
  { icon: "◈", label: "Problem Solver", desc: "Analytical approach to breaking down complex challenges" },
  { icon: "◇", label: "Team Player", desc: "Thrive in collaborative, cross-functional environments" },
  { icon: "◉", label: "Detail-Oriented", desc: "Committed to clean code and thorough documentation" },
];

const EDUCATION = [
  {
    degree: "B.S. Computer Science",
    institution: "University of California, Berkeley",
    year: "2020 – 2024",
    gpa: "3.82 / 4.0",
    highlights: [
      "Dean's List — 6 consecutive semesters",
      "Thesis: Optimizing distributed query execution with ML-based cost models",
      "Coursework: Algorithms, OS, Distributed Systems, ML, HCI",
    ],
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80&auto=format&fit=crop",
  },
];

const TECH_SKILLS = [
  { name: "TypeScript / JavaScript", level: 90 },
  { name: "React & Next.js", level: 88 },
  { name: "Python", level: 85 },
  { name: "Node.js", level: 82 },
  { name: "PostgreSQL / SQL", level: 78 },
  { name: "Docker & Kubernetes", level: 70 },
];

const SOFT_SKILLS = [
  "Communication", "Critical Thinking", "Adaptability",
  "Time Management", "Leadership", "Empathy",
  "Collaboration", "Creativity", "Attention to Detail",
];

const TOOLS = ["Git", "VS Code", "Figma", "Postman", "AWS", "Linux", "Jest", "Prisma"];

const PROJECTS = [
  {
    title: "DevFlow",
    category: "Full Stack · SaaS",
    year: "2024",
    desc: "A developer productivity platform with AI-assisted code review, PR analytics, and team velocity tracking. Reduced review cycle time by 40% in pilot testing.",
    outcome: "2,000+ beta sign-ups · #3 Product of the Day on Product Hunt",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "Prisma", "OpenAI"],
    link: "#",
  },
  {
    title: "EcoTrack",
    category: "Mobile · Sustainability",
    year: "2023",
    desc: "Carbon footprint tracker with real-time data visualization, personalized recommendations, and social accountability features built for college campuses.",
    outcome: "Won 1st place at UC Berkeley Hackathon 2023 · 500+ active users",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80&auto=format&fit=crop",
    tags: ["React Native", "Python", "FastAPI", "D3.js"],
    link: "#",
  },
  {
    title: "QueryMind",
    category: "Research · ML",
    year: "2024",
    desc: "ML-powered SQL query optimizer that predicts optimal execution plans 3× faster than traditional cost-based planners. Thesis project published in ACM proceedings.",
    outcome: "Published in ACM SIGMOD 2024 · 60% reduction in query latency",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
    tags: ["Python", "PyTorch", "PostgreSQL", "Apache Spark"],
    link: "#",
  },
];

const EXPERIENCE = [
  {
    company: "Stripe",
    logo: "S",
    role: "Software Engineering Intern",
    duration: "Jun 2023 – Aug 2023 · 3 months",
    location: "San Francisco, CA",
    type: "Internship",
    responsibilities: [
      "Built and shipped a self-serve dashboard feature used by 12,000+ merchants within 2 weeks of launch",
      "Optimized API response time by 28% through query batching and strategic caching with Redis",
      "Collaborated with senior engineers on payment reconciliation microservice in Ruby on Rails",
    ],
    achievement: "Received return offer · Top 10% intern cohort rating",
  },
  {
    company: "Notion Labs",
    logo: "N",
    role: "Frontend Engineering Intern",
    duration: "Jun 2022 – Aug 2022 · 3 months",
    location: "Remote",
    type: "Internship",
    responsibilities: [
      "Contributed to Notion's mobile editor — improved block rendering performance by 35%",
      "Implemented 4 new block types in TypeScript, shipped to 10M+ users",
      "Wrote comprehensive unit and integration tests, raising coverage from 71% to 89%",
    ],
    achievement: "Featured in Notion's 2022 intern showcase · Extended project continued post-internship",
  },
];

const CERTIFICATIONS = [
  {
    title: "AWS Certified Solutions Architect",
    org: "Amazon Web Services",
    date: "March 2024",
    badge: "AWS",
    credentialId: "AWS-SAA-2024-00342",
  },
  {
    title: "Google Professional Data Engineer",
    org: "Google Cloud",
    date: "November 2023",
    badge: "GCP",
    credentialId: "GCP-PDE-2023-11891",
  },
  {
    title: "Meta Front-End Developer Certificate",
    org: "Meta / Coursera",
    date: "August 2023",
    badge: "META",
    credentialId: "META-FE-2023-04512",
  },
  {
    title: "Deep Learning Specialization",
    org: "DeepLearning.AI / Coursera",
    date: "May 2023",
    badge: "DL",
    credentialId: "DL-SPEC-2023-77291",
  },
];

const ACHIEVEMENTS = [
  {
    category: "Awards",
    icon: "◆",
    items: [
      { title: "UC Berkeley Hackathon — 1st Place", detail: "EcoTrack · Spring 2023" },
      { title: "Grace Hopper Scholarship Recipient", detail: "Full conference scholarship · 2023" },
      { title: "Outstanding Senior Thesis Award", detail: "CS Department · Class of 2024" },
    ],
  },
  {
    category: "Leadership",
    icon: "◈",
    items: [
      { title: "President, CS Student Association", detail: "Led 400-member org · 2022–2024" },
      { title: "Technical Lead, Google DSC Berkeley", detail: "Organized 12 workshops · 2023" },
      { title: "Mentor, Women in STEM Program", detail: "Guided 8 first-year students · 2023–2024" },
    ],
  },
  {
    category: "Competitions",
    icon: "◉",
    items: [
      { title: "ACM ICPC Regional Finalist", detail: "Top 15% · 2023" },
      { title: "LeetCode Top 500 Ranking", detail: "Competitive Programming" },
      { title: "MLH Local Hack Day — Runner Up", detail: "48-hour hackathon · 2022" },
    ],
  },
  {
    category: "Volunteer",
    icon: "◇",
    items: [
      { title: "Code.org Volunteer Instructor", detail: "Taught K-12 coding · 2021–2024" },
      { title: "Crisis Text Line Counselor", detail: "Certified mental health first aid" },
      { title: "Open Source Contributor", detail: "100+ merged PRs across OSS projects" },
    ],
  },
];

const TIMELINE = [
  { year: "2020", label: "Started at UC Berkeley", type: "edu", desc: "Began B.S. in Computer Science" },
  { year: "2021", label: "First Open Source Contributions", type: "work", desc: "100+ PRs merged across OSS projects" },
  { year: "2022", label: "Notion Labs Internship", type: "work", desc: "Frontend Engineering Intern · Remote" },
  { year: "2022", label: "CS Student Association President", type: "achievement", desc: "Elected to lead 400-member organization" },
  { year: "2023", label: "Stripe Internship", type: "work", desc: "Software Engineering Intern · SF" },
  { year: "2023", label: "Hackathon Champion", type: "achievement", desc: "1st Place — UC Berkeley EcoTrack" },
  { year: "2023", label: "AWS & GCP Certifications", type: "cert", desc: "Earned two cloud architecture certifications" },
  { year: "2024", label: "Thesis Published in ACM", type: "achievement", desc: "QueryMind — ML query optimizer" },
  { year: "2024", label: "Graduated with Honors", type: "edu", desc: "B.S. Computer Science · GPA 3.82" },
];

const TESTIMONIALS = [
  {
    name: "Dr. Sarah Chen",
    role: "Associate Professor, UC Berkeley CS",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
    text: "Alex is among the most intellectually curious students I've had in 14 years of teaching. Their thesis work on ML-based query optimization was genuinely novel research, not just academic exercise. The quality of thinking and the rigor of execution were graduate-level.",
    stars: 5,
  },
  {
    name: "Marcus Reid",
    role: "Engineering Manager, Stripe",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
    text: "In three months, Alex shipped more impactful work than some engineers do in a year. They took ambiguous requirements and turned them into clean, well-tested features without hand-holding. We extended a return offer without hesitation — that's rare for an intern cohort of 200+.",
    stars: 5,
  },
  {
    name: "Priya Nair",
    role: "Senior Engineer, Notion Labs",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&auto=format&fit=crop",
    text: "Alex's frontend work on our mobile editor was production-grade from day one. They asked the right questions, wrote thorough tests, and communicated blockers before they became problems. Exactly the kind of engineer every team wants.",
    stars: 5,
  },
];

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

// ── HOOKS ──────────────────────────────────────────────────────────────────

function useReveal<T extends Element = HTMLDivElement>(threshold = 0.1) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      let found = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id.replace("#", ""));
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 100) found = id;
      }
      setActive(found);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);
  return active;
}

// ── PAGE ───────────────────────────────────────────────────────────────────

export default function JourneyPortfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [slide, setSlide] = useState(0);
  const [formState, setFormState] = useState<"idle" | "sent">("idle");
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const active = useActiveSection(NAV_LINKS.map((n) => n.href));

  useEffect(() => {
    const saved = localStorage.getItem("journey-theme") as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("journey-theme", next);
  };

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(
      () => setSlide((s) => (s + 1) % TESTIMONIALS.length), 5000
    );
  }, []);

  useEffect(() => {
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [startAuto]);

  const goSlide = (i: number) => { setSlide(i); startAuto(); };

  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setSkillsVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sent");
  };

  // reveal hooks
  const heroReveal = useReveal(0.05);
  const aboutReveal = useReveal();
  const eduReveal = useReveal();
  const projReveal = useReveal();
  const expReveal = useReveal();
  const certReveal = useReveal();
  const achieveReveal = useReveal();
  const timelineReveal = useReveal();
  const testReveal = useReveal();
  const contactReveal = useReveal();

  return (
    <div className={styles.page} data-theme={theme}>

      {/* ── NAV ──────────────────────────────────────────────────────── */}
      <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.navInner}>
            <a href="#hero" className={styles.logo}>
              {PROFILE.initials}<span className={styles.logoDot}>.</span>
            </a>

            <nav className={styles.navLinks} aria-label="Main navigation">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`${styles.navLink} ${active === l.href ? styles.navLinkActive : ""}`}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className={styles.navRight}>
              <button
                type="button"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                onClick={toggleTheme}
                className={styles.themeBtn}
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>

              <a href={PROFILE.resumeUrl} className={styles.navCta} download>
                Resume
              </a>

              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
                className={`${styles.menuBtn} ${menuOpen ? styles.menuOpen : ""}`}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ───────────────────────────────────────────────── */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuVisible : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileMenuBg} onClick={closeMenu} />
        <nav className={styles.mobileMenuPanel}>
          <div className={styles.mobileMenuHead}>
            <span className={styles.logo}>{PROFILE.initials}<span className={styles.logoDot}>.</span></span>
            <button type="button" onClick={toggleTheme} className={styles.themeBtn} aria-label="Toggle theme">
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={closeMenu} className={styles.mobileMenuLink}>
              {l.label}
            </a>
          ))}
          <a href={PROFILE.resumeUrl} download onClick={closeMenu} className={styles.mobileMenuCta}>
            Download Resume <DownloadIcon />
          </a>
        </nav>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBlob1} />
          <div className={styles.heroBlob2} />
        </div>
        <div className={styles.container}>
          <div
            ref={heroReveal.ref}
            className={`${styles.heroGrid} ${heroReveal.visible ? styles.revealed : ""}`}
          >
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeDot} />
                Open to opportunities
              </div>

              <h1 className={styles.heroTitle}>
                <span className={styles.heroGreet}>Hi, I&apos;m</span>
                <span className={styles.heroName}>{PROFILE.name}</span>
                <span className={styles.heroRole}>{PROFILE.role}</span>
              </h1>

              <p className={styles.heroIntro}>{PROFILE.intro}</p>

              <div className={styles.heroActions}>
                <a href={PROFILE.resumeUrl} download className={styles.btnPrimary}>
                  <DownloadIcon /> Download Resume
                </a>
                <a href="#contact" className={styles.btnGhost}>
                  Get in Touch <ArrowIcon />
                </a>
              </div>

              <div className={styles.heroMeta}>
                <span><PinIcon /> {PROFILE.location}</span>
                <span><MailIcon /> {PROFILE.email}</span>
              </div>
            </div>

            <div className={styles.heroImageCol}>
              <div className={styles.heroImageWrap}>
                <div className={styles.heroImageGlow} aria-hidden="true" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  className={styles.heroImg}
                />
                <div className={styles.heroImageBorder} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <div
            ref={aboutReveal.ref}
            className={`${styles.aboutGrid} ${aboutReveal.visible ? styles.revealed : ""}`}
          >
            <div className={styles.aboutLeft}>
              <span className={styles.eyebrow}>About Me</span>
              <h2 className={styles.sectionTitle}>
                The person behind<br />the <em>ambition</em>
              </h2>
              <p className={styles.aboutLead}>{PROFILE.intro}</p>
              <p className={styles.aboutObj}>{PROFILE.objective}</p>
            </div>
            <div className={styles.aboutRight}>
              <p className={styles.strengthsLabel}>Core Strengths</p>
              <div className={styles.strengthsGrid}>
                {STRENGTHS.map((s) => (
                  <div key={s.label} className={styles.strengthCard}>
                    <span className={styles.strengthIcon}>{s.icon}</span>
                    <h3 className={styles.strengthTitle}>{s.label}</h3>
                    <p className={styles.strengthDesc}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────────────────────────────── */}
      <section id="education" className={styles.section}>
        <div className={styles.container}>
          <div
            ref={eduReveal.ref}
            className={`${styles.sectionHeader} ${eduReveal.visible ? styles.revealed : ""}`}
          >
            <span className={styles.eyebrow}>Education</span>
            <h2 className={styles.sectionTitle}>Academic Foundation</h2>
          </div>
          {EDUCATION.map((e) => (
            <div key={e.degree} className={styles.eduCard}>
              <div className={styles.eduImageCol}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={e.image} alt={e.institution} className={styles.eduImage} loading="lazy" />
                <div className={styles.eduGpaTag}>{e.gpa} GPA</div>
              </div>
              <div className={styles.eduContent}>
                <div className={styles.eduMeta}>
                  <span className={styles.eduYear}>{e.year}</span>
                </div>
                <h3 className={styles.eduDegree}>{e.degree}</h3>
                <p className={styles.eduInst}>{e.institution}</p>
                <ul className={styles.eduHighlights}>
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────── */}
      <section id="skills" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Skills</span>
            <h2 className={styles.sectionTitle}>Technical Arsenal</h2>
          </div>
          <div ref={skillsRef} className={`${styles.skillsGrid} ${skillsVisible ? styles.skillsVisible : ""}`}>
            <div className={styles.skillBarsCol}>
              <p className={styles.skillColLabel}>Technical Proficiency</p>
              {TECH_SKILLS.map((s, i) => (
                <div key={s.name} className={styles.skillItem} style={{ "--i": i } as React.CSSProperties}>
                  <div className={styles.skillMeta}>
                    <span className={styles.skillName}>{s.name}</span>
                    <span className={styles.skillPct}>{s.level}%</span>
                  </div>
                  <div className={styles.skillTrack}>
                    <div
                      className={styles.skillFill}
                      style={{ "--target": `${s.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.skillSoftCol}>
              <div className={styles.softSkillsWrap}>
                <p className={styles.skillColLabel}>Soft Skills</p>
                <div className={styles.softChips}>
                  {SOFT_SKILLS.map((s) => (
                    <span key={s} className={styles.softChip}>{s}</span>
                  ))}
                </div>
              </div>
              <div className={styles.toolsWrap}>
                <p className={styles.skillColLabel}>Tools & Technologies</p>
                <div className={styles.toolChips}>
                  {TOOLS.map((t) => (
                    <span key={t} className={styles.toolChip}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────── */}
      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <div
            ref={projReveal.ref}
            className={`${styles.sectionHeader} ${projReveal.visible ? styles.revealed : ""}`}
          >
            <span className={styles.eyebrow}>Projects</span>
            <h2 className={styles.sectionTitle}>Featured Work</h2>
          </div>
          <div className={styles.projectsGrid}>
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────── */}
      <section id="experience" className={styles.section}>
        <div className={styles.container}>
          <div
            ref={expReveal.ref}
            className={`${styles.sectionHeader} ${expReveal.visible ? styles.revealed : ""}`}
          >
            <span className={styles.eyebrow}>Internship & Experience</span>
            <h2 className={styles.sectionTitle}>Where I&apos;ve Contributed</h2>
          </div>
          <div className={styles.expList}>
            {EXPERIENCE.map((e, i) => (
              <ExpCard key={e.company} exp={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────────────────────────── */}
      <section id="certifications" className={styles.section}>
        <div className={styles.container}>
          <div
            ref={certReveal.ref}
            className={`${styles.sectionHeader} ${certReveal.visible ? styles.revealed : ""}`}
          >
            <span className={styles.eyebrow}>Certifications</span>
            <h2 className={styles.sectionTitle}>Verified Credentials</h2>
          </div>
          <div className={styles.certGrid}>
            {CERTIFICATIONS.map((c) => (
              <div key={c.title} className={styles.certCard}>
                <div className={styles.certBadge}>{c.badge}</div>
                <div className={styles.certContent}>
                  <h3 className={styles.certTitle}>{c.title}</h3>
                  <p className={styles.certOrg}>{c.org}</p>
                  <div className={styles.certFooter}>
                    <span className={styles.certDate}>{c.date}</span>
                    <span className={styles.certId}>ID: {c.credentialId}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ─────────────────────────────────────────────── */}
      <section id="achievements" className={styles.section}>
        <div className={styles.container}>
          <div
            ref={achieveReveal.ref}
            className={`${styles.sectionHeader} ${achieveReveal.visible ? styles.revealed : ""}`}
          >
            <span className={styles.eyebrow}>Achievements & Activities</span>
            <h2 className={styles.sectionTitle}>Beyond the Classroom</h2>
          </div>
          <div className={styles.achieveGrid}>
            {ACHIEVEMENTS.map((a) => (
              <div key={a.category} className={styles.achieveCard}>
                <div className={styles.achieveHead}>
                  <span className={styles.achieveIcon}>{a.icon}</span>
                  <h3 className={styles.achieveCategory}>{a.category}</h3>
                </div>
                <ul className={styles.achieveList}>
                  {a.items.map((item) => (
                    <li key={item.title} className={styles.achieveItem}>
                      <span className={styles.achieveTitle}>{item.title}</span>
                      <span className={styles.achieveDetail}>{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────── */}
      <section id="timeline" className={styles.section}>
        <div className={styles.container}>
          <div
            ref={timelineReveal.ref}
            className={`${styles.sectionHeader} ${timelineReveal.visible ? styles.revealed : ""}`}
          >
            <span className={styles.eyebrow}>Resume Timeline</span>
            <h2 className={styles.sectionTitle}>The Full Journey</h2>
          </div>
          <div className={styles.timeline}>
            <div className={styles.timelineAxis} aria-hidden="true" />
            {TIMELINE.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section id="testimonials" className={styles.section}>
        <div className={styles.container}>
          <div
            ref={testReveal.ref}
            className={`${styles.sectionHeader} ${testReveal.visible ? styles.revealed : ""}`}
          >
            <span className={styles.eyebrow}>Testimonials</span>
            <h2 className={styles.sectionTitle}>What They Say</h2>
          </div>
          <div className={styles.carousel}>
            <div className={styles.carouselTrack}>
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.name}
                  className={`${styles.testimonialCard} ${i === slide ? styles.testimonialActive : ""}`}
                  aria-hidden={i !== slide}
                >
                  <div className={styles.testimonialStars}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <span key={j} className={styles.star}>★</span>
                    ))}
                  </div>
                  <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                  <div className={styles.testimonialAuthor}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.avatar} alt={t.name} className={styles.testimonialAvatar} loading="lazy" />
                    <div>
                      <div className={styles.testimonialName}>{t.name}</div>
                      <div className={styles.testimonialRole}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.carouselControls}>
              <div className={styles.carouselDots}>
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i} type="button"
                    aria-label={`Testimonial ${i + 1}`}
                    className={`${styles.dot} ${i === slide ? styles.dotActive : ""}`}
                    onClick={() => goSlide(i)}
                  />
                ))}
              </div>
              <div className={styles.carouselNav}>
                <button
                  type="button" className={styles.carouselBtn}
                  onClick={() => goSlide((slide - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  aria-label="Previous"
                ><ChevronIcon dir="left" /></button>
                <button
                  type="button" className={styles.carouselBtn}
                  onClick={() => goSlide((slide + 1) % TESTIMONIALS.length)}
                  aria-label="Next"
                ><ChevronIcon dir="right" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <div
            ref={contactReveal.ref}
            className={`${styles.contactGrid} ${contactReveal.visible ? styles.revealed : ""}`}
          >
            <div className={styles.contactInfo}>
              <span className={styles.eyebrow}>Contact</span>
              <h2 className={styles.sectionTitle}>
                Let&apos;s connect<br />and <em>build</em> something
              </h2>
              <p className={styles.contactLead}>
                I&apos;m actively seeking full-time roles in software engineering. Whether you have a position, a project, or just want to chat — I&apos;d love to hear from you.
              </p>
              <div className={styles.contactDetails}>
                <a href={`mailto:${PROFILE.email}`} className={styles.contactDetail}>
                  <MailIcon /> {PROFILE.email}
                </a>
                <a href={`tel:${PROFILE.phone}`} className={styles.contactDetail}>
                  <PhoneIcon /> {PROFILE.phone}
                </a>
                <div className={styles.contactDetail}>
                  <PinIcon /> {PROFILE.location}
                </div>
              </div>
              <div className={styles.socialLinks}>
                <a href={PROFILE.linkedin} className={styles.socialLink} aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href={PROFILE.github} className={styles.socialLink} aria-label="GitHub">
                  <GitHubIcon />
                </a>
                <a href={PROFILE.twitter} className={styles.socialLink} aria-label="Twitter">
                  <TwitterIcon />
                </a>
              </div>
            </div>

            <div className={styles.contactFormWrap}>
              {formState === "sent" ? (
                <div className={styles.formSuccess}>
                  <span className={styles.formSuccessIcon}>✦</span>
                  <h3>Message received!</h3>
                  <p>I&apos;ll get back to you within 24 hours. Looking forward to connecting!</p>
                </div>
              ) : (
                <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="j-name">Full Name</label>
                      <input id="j-name" type="text" className={styles.formInput} placeholder="Jane Smith" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="j-email">Email</label>
                      <input id="j-email" type="email" className={styles.formInput} placeholder="jane@company.com" required />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="j-subject">Subject</label>
                    <input id="j-subject" type="text" className={styles.formInput} placeholder="Job opportunity at…" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="j-message">Message</label>
                    <textarea id="j-message" className={styles.formTextarea} placeholder="Tell me about the role or opportunity…" rows={5} required />
                  </div>
                  <button type="submit" className={styles.btnPrimary}>
                    Send Message <ArrowIcon />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <a href="#hero" className={styles.footerLogo}>
              {PROFILE.initials}<span className={styles.logoDot}>.</span>
            </a>
            <nav className={styles.footerNav} aria-label="Footer navigation">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={styles.footerNavLink}>{l.label}</a>
              ))}
            </nav>
            <div className={styles.footerSocials}>
              <a href={PROFILE.linkedin} aria-label="LinkedIn" className={styles.footerSocialLink}><LinkedInIcon /></a>
              <a href={PROFILE.github} aria-label="GitHub" className={styles.footerSocialLink}><GitHubIcon /></a>
              <a href={PROFILE.twitter} aria-label="Twitter" className={styles.footerSocialLink}><TwitterIcon /></a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
            <span className={styles.footerTag}>Open to opportunities · {PROFILE.location}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── SUB-COMPONENTS ────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.08);
  return (
    <div
      ref={ref}
      className={`${styles.projectCard} ${visible ? styles.revealed : ""}`}
      style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}
    >
      <div className={styles.projectImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className={styles.projectOverlay}>
          <a href={project.link} className={styles.projectViewBtn} aria-label={`View ${project.title}`}>
            View Project <ArrowIcon />
          </a>
        </div>
      </div>
      <div className={styles.projectBody}>
        <div className={styles.projectMeta}>
          <span className={styles.projectCategory}>{project.category}</span>
          <span className={styles.projectYear}>{project.year}</span>
        </div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.desc}</p>
        <div className={styles.projectOutcome}>
          <span className={styles.outcomeIcon}>◆</span>
          {project.outcome}
        </div>
        <div className={styles.projectTags}>
          {project.tags.map((t) => (
            <span key={t} className={styles.projectTag}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExpCard({ exp, index }: { exp: (typeof EXPERIENCE)[0]; index: number }) {
  const { ref, visible } = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={`${styles.expCard} ${visible ? styles.revealed : ""}`}
      style={{ "--delay": `${index * 120}ms` } as React.CSSProperties}
    >
      <div className={styles.expLeft}>
        <div className={styles.expLogo}>{exp.logo}</div>
        <div className={styles.expLeftInfo}>
          <span className={styles.expDuration}>{exp.duration}</span>
          <span className={styles.expLocation}>{exp.location}</span>
          <span className={styles.expTypeBadge}>{exp.type}</span>
        </div>
      </div>
      <div className={styles.expRight}>
        <h3 className={styles.expRole}>{exp.role}</h3>
        <p className={styles.expCompany}>{exp.company}</p>
        <ul className={styles.expList2}>
          {exp.responsibilities.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <div className={styles.expAchievement}>
          <span className={styles.achieveIcon2}>◆</span>
          {exp.achievement}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ item, index }: { item: (typeof TIMELINE)[0]; index: number }) {
  const { ref, visible } = useReveal(0.15);
  const typeClass = item.type === "edu"
    ? styles.tlEdu
    : item.type === "achievement"
    ? styles.tlAchieve
    : item.type === "cert"
    ? styles.tlCert
    : styles.tlWork;

  return (
    <div
      ref={ref}
      className={`${styles.tlItem} ${index % 2 === 0 ? styles.tlLeft : styles.tlRight} ${visible ? styles.revealed : ""}`}
      style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
    >
      <div className={styles.tlContent}>
        <span className={styles.tlYear}>{item.year}</span>
        <h3 className={styles.tlLabel}>{item.label}</h3>
        <p className={styles.tlDesc}>{item.desc}</p>
      </div>
      <div className={`${styles.tlDot} ${typeClass}`} aria-hidden="true" />
    </div>
  );
}

// ── ICONS ────────────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 8.29 8.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}
