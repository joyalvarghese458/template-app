"use client";

import styles from "./styles.module.css";

/* ── DATA ─────────────────────────────────────────────── */

const PROFILE = {
  name: "Shivam Kaushal",
  photo: "/pure-portrait.png",
  about:
    "Aspiring graphic designer with a strong mindset for creativity and digital art; skilled in using top design tools like Photoshop, Illustrator to create engaging visuals and layouts. I am building a portfolio in designs, photo editing and basic video editing, ready to bring fresh ideas and enthusiasm to a creative team.",
  email: "shivamkaushal@gmail.com",
  phone: "+91 95XXXXXX10",
  instagram: "psd_shivam",
  portfolioUrl: "#",
  linkedinUrl: "#",
  behanceUrl: "#",
  dribbbleUrl: "#",
};

const EDUCATION: { degree: string; institution?: string; period: string }[] = [
  {
    degree: "Diploma of Computer Science",
    institution: "Government Leather Institute",
    period: "2019 – 2022",
  },
  {
    degree: "Pursuing B.Sc (Bachelor of Science)",
    period: "2024 – Present",
  },
];

const EXPERIENCE: {
  title: string;
  company?: string;
  period: string;
  bullets: string[];
  icon: "briefcase" | "heart";
}[] = [
  {
    title: "Student Service Portal Executive",
    company: "Dr. Bhim Rao Ambedkar University, Agra",
    period: "10 Months",
    bullets: [
      "Worked on Student Service Portal",
      "Managed student queries and data",
      "Ensured smooth portal operations",
    ],
    icon: "briefcase",
  },
  {
    title: "Medical Field Professional",
    period: "1.5 Years",
    bullets: [
      "Worked in the medical field",
      "Assisted in patient care and support services",
      "Gained strong communication and teamwork skills",
    ],
    icon: "heart",
  },
];

const LANGUAGES = [
  { label: "Hindi", pct: 100 },
  { label: "English", pct: 70 },
];

const SOFTWARE = [
  { name: "Photoshop", abbr: "Ps", bg: "#001e36", color: "#31a8ff" },
  { name: "Canva", abbr: "Cv", bg: "#00c4cc", color: "#fff" },
  { name: "Illustrator", abbr: "Ai", bg: "#ff9a00", color: "#1a0500" },
  { name: "Alight Motion", abbr: "AM", bg: "#111", color: "#4ade80" },
  { name: "KineMaster", abbr: "KM", bg: "#e62429", color: "#fff" },
  { name: "Picsart", abbr: "Pa", bg: "#3d5afe", color: "#fff" },
];

const AI_TOOLS = [
  { name: "ChatGPT", abbr: "GP", color: "#10a37f" },
  { name: "Google Gemini", abbr: "GM", color: "#4285f4" },
];

const SKILLS = [
  "Communication Skills",
  "Logo Design",
  "Poster Design",
  "Brochure Design",
  "Illustration",
  "Branding",
  "Label Design",
  "Social Media Post",
  "Basic Video Editing",
  "Prototyping",
  "UI/UX Design",
  "AI Worked",
];

/* ── PAGE ─────────────────────────────────────────────── */

export default function CardstockResume() {
  return (
    <div className={styles.page}>
      {/* ── HERO ─────────────────────────────────── */}
      <section className={styles.hero}>
        {/* Squiggle (top-left) */}
        <svg className={styles.decoSquiggle} viewBox="0 0 60 100" fill="none" aria-hidden="true">
          <path d="M30 5 C5 22, 55 38, 30 52 C5 66, 55 82, 30 96" stroke="#e84c1e" strokeWidth="5" strokeLinecap="round" />
        </svg>

        {/* Floating balls */}
        <svg className={styles.decoBall1} viewBox="0 0 50 50" aria-hidden="true">
          <defs>
            <radialGradient id="rg1" cx="38%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#f87c40" /><stop offset="100%" stopColor="#c93d15" />
            </radialGradient>
          </defs>
          <circle cx="25" cy="25" r="23" fill="url(#rg1)" />
        </svg>
        <svg className={styles.decoBall2} viewBox="0 0 70 70" aria-hidden="true">
          <defs>
            <radialGradient id="rg2" cx="38%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#f87c40" /><stop offset="100%" stopColor="#c93d15" />
            </radialGradient>
          </defs>
          <circle cx="35" cy="35" r="32" fill="url(#rg2)" />
        </svg>
        <svg className={styles.decoBall3} viewBox="0 0 36 36" aria-hidden="true">
          <defs>
            <radialGradient id="rg3" cx="38%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#f87c40" /><stop offset="100%" stopColor="#c93d15" />
            </radialGradient>
          </defs>
          <circle cx="18" cy="18" r="16" fill="url(#rg3)" />
        </svg>

        {/* Spiral (right) */}
        <svg className={styles.decoSpiral} viewBox="0 0 80 140" fill="none" aria-hidden="true">
          <path d="M40 6 C68 6, 74 26, 56 42 C38 58, 16 58, 26 78 C36 98, 64 98, 56 118 C48 134, 26 134, 36 142" stroke="#e84c1e" strokeWidth="6" strokeLinecap="round" />
        </svg>

        {/* Title text (behind photo) */}
        <div className={styles.heroTitles} aria-hidden="true">
          <span className={styles.heroLine1}>GRAPHIC &amp;</span>
          <span className={styles.heroLine2}>WEB DESIGNER</span>
        </div>

        {/* Person photo (over text) */}
        <div className={styles.heroPhoto}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PROFILE.photo} alt={PROFILE.name} className={styles.heroImg} />
          <div className={styles.heroPhotoFade} aria-hidden="true" />
        </div>

        {/* Down arrow */}
        <div className={styles.heroArrow} aria-hidden="true">
          <svg viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="0" x2="12" y2="32" strokeLinecap="round" />
            <polyline points="5,24 12,32 19,24" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Name + Portfolio CTA */}
        <div className={styles.heroRight}>
          <p className={styles.heroName}>{PROFILE.name}</p>
          <a href={PROFILE.portfolioUrl} className={styles.portfolioBtn}>
            PORTFOLIO
          </a>
        </div>

        {/* Screen-reader heading */}
        <h1 className={styles.srOnly}>
          {PROFILE.name} — Graphic &amp; Web Designer
        </h1>
      </section>

      {/* ── ABOUT ─────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>ABOUT ME</h2>
          <div className={styles.rule} />
          <p className={styles.aboutText}>{PROFILE.about}</p>
        </div>
      </section>

      {/* ── EDUCATION + CONTACT ───────────────────── */}
      <section className={`${styles.section} ${styles.sectionNoTop}`}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            {/* Education */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <h3 className={styles.cardTitle}>EDUCATION</h3>
              </div>
              <ul className={styles.eduList}>
                {EDUCATION.map((e, i) => (
                  <li key={i} className={styles.eduItem}>
                    <strong>{e.degree}</strong>
                    {e.institution && <span className={styles.eduInst}>{e.institution}</span>}
                    <span className={styles.eduPeriod}>{e.period}</span>
                    {i < EDUCATION.length - 1 && <div className={styles.eduRule} />}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <h3 className={styles.cardTitle}>CONTACT</h3>
              </div>
              <div className={styles.contactList}>
                <a href={`tel:${PROFILE.phone}`} className={styles.contactRow}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.2a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.58.4h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.09 6.09l1.88-1.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{PROFILE.phone}</span>
                </a>
                <a href={`mailto:${PROFILE.email}`} className={styles.contactRow}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>{PROFILE.email}</span>
                </a>
                <a href={`https://instagram.com/${PROFILE.instagram}`} target="_blank" rel="noopener noreferrer" className={styles.contactRow}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>{PROFILE.instagram}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK EXPERIENCE ───────────────────────── */}
      <section className={`${styles.section} ${styles.sectionNoTop}`}>
        <div className={styles.container}>
          <div className={styles.expHeadRow}>
            <span className={styles.expRule} />
            <h2 className={styles.expHeading}>WORK EXPERIENCE</h2>
            <span className={styles.expRule} />
          </div>
          <div className={styles.expGrid}>
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className={styles.expCard}>
                <div className={styles.expCardTop}>
                  <div className={styles.expIconBox}>
                    {exp.icon === "briefcase" ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17" aria-hidden="true">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    )}
                  </div>
                  <div className={styles.expCardMeta}>
                    <p className={styles.expCardTitle}>{exp.title}</p>
                    {exp.company && <p className={styles.expCardCompany}>{exp.company}</p>}
                    <div className={styles.expCardPeriod}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="11" height="11" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <ul className={styles.expBullets}>
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LANGUAGE + SOFTWARE + AI ──────────────── */}
      <section className={`${styles.section} ${styles.sectionNoTop}`}>
        <div className={styles.container}>
          <div className={styles.threePanel}>
            {/* Language */}
            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>LANGUAGE</h3>
              <div className={styles.langRow}>
                {LANGUAGES.map((l) => (
                  <div key={l.label} className={styles.langItem}>
                    <CircleProgress value={l.pct} />
                    <span className={styles.langLabel}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Skills */}
            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>SOFTWARE SKILLS</h3>
              <div className={styles.softGrid}>
                {SOFTWARE.map((s) => (
                  <div key={s.name} className={styles.softItem}>
                    <div className={styles.softIcon} style={{ background: s.bg, color: s.color }}>
                      {s.abbr}
                    </div>
                    <span className={styles.softName}>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Tools */}
            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>AI TOOLS</h3>
              <div className={styles.aiRow}>
                {AI_TOOLS.map((a) => (
                  <div key={a.name} className={styles.aiItem}>
                    <div className={styles.aiIcon} style={{ borderColor: a.color }}>
                      <span style={{ color: a.color }}>{a.abbr}</span>
                    </div>
                    <span className={styles.aiName}>{a.name}</span>
                  </div>
                ))}
              </div>
              <p className={styles.aiDesc}>
                AI tools help me enhance creativity, automate tasks and deliver smarter design solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionNoTop}`}>
        <div className={styles.container}>
          <div className={styles.skillsBlock}>
            <h3 className={styles.skillsHeading}>SKILLS</h3>
            <div className={styles.skillTags}>
              {SKILLS.map((s) => (
                <span key={s} className={styles.skillTag}>
                  <svg className={styles.skillTagIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" width="12" height="12">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <nav className={styles.footerNav} aria-label="Profile links">
            <a href={PROFILE.portfolioUrl} className={styles.footerLink}>Portfolio</a>
            <span className={styles.footerSep} aria-hidden="true">·</span>
            <a href={`https://instagram.com/${PROFILE.instagram}`} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Instagram</a>
            <span className={styles.footerSep} aria-hidden="true">·</span>
            <a href={PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
            <span className={styles.footerSep} aria-hidden="true">·</span>
            <a href={PROFILE.behanceUrl} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Behance</a>
            <span className={styles.footerSep} aria-hidden="true">·</span>
            <a href={PROFILE.dribbbleUrl} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Dribbble</a>
          </nav>
          <p className={styles.footerCopy}>
            © {new Date().getFullYear()} {PROFILE.name} &middot; All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ── CIRCLE PROGRESS ──────────────────────────────────── */
function CircleProgress({ value }: { value: number }) {
  const r = 34;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <svg width="84" height="84" viewBox="0 0 84 84" role="img" aria-label={`${value}%`}>
      <circle cx="42" cy="42" r={r} fill="none" stroke="#e0d8cc" strokeWidth="6" />
      <circle
        cx="42" cy="42" r={r}
        fill="none"
        stroke="#0d0d14"
        strokeWidth="6"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 42 42)"
      />
      <text x="42" y="47" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0d0d14" fontFamily="system-ui, sans-serif">
        {value}%
      </text>
    </svg>
  );
}
