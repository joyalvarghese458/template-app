"use client";

/*
  Solo — Graphic Designer Portfolio
  Single-page template. Copy the entire `solo/` folder into any
  Next.js 13+ App Router project to deploy.
*/

import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

// ── CONTENT ────────────────────────────────────────────────────────

const PROFILE = {
  name: "Alex Rivera",
  initials: "AR",
  role: "Graphic Designer",
  tagline: "Crafting Visual Identities That Last",
  bio1: "I'm a graphic designer with 8+ years of experience turning bold ideas into unforgettable visuals. From brand identities to motion graphics, I create work that makes people stop and feel something.",
  bio2: "Formerly at Pentagram · Studio Dumbar. Now fully independent, working with global brands and ambitious startups.",
  location: "New York City",
  availability: "Available worldwide",
  status: "Open for Q3 2026",
  email: "hello@alexrivera.design",
  phone: "+1 (212) 555-0142",
  instagram: "#",
  behance: "#",
  linkedin: "#",
  dribbble: "#",
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop",
  resumeUrl: "#",
};

const BRANDS = [
  "Nike", "Apple", "Spotify", "Airbnb", "Stripe",
  "Notion", "Figma", "Netflix", "Adobe", "Google",
  "Mercedes", "The Guardian",
];

const WORKS = [
  {
    id: 1, title: "Noir Collective", category: "Brand Identity", year: "2026",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80&auto=format&fit=crop",
    wide: true,
  },
  {
    id: 2, title: "Forma Studio", category: "Visual Identity", year: "2025",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&q=80&auto=format&fit=crop",
    wide: false,
  },
  {
    id: 3, title: "Pulse Magazine", category: "Editorial Design", year: "2025",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&q=80&auto=format&fit=crop",
    wide: false,
  },
  {
    id: 4, title: "Vivid Spirits", category: "Packaging Design", year: "2024",
    image: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=1200&q=80&auto=format&fit=crop",
    wide: true,
  },
  {
    id: 5, title: "Bloom Co.", category: "Motion & Digital", year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80&auto=format&fit=crop",
    wide: false,
  },
  {
    id: 6, title: "Apex Sports", category: "Campaign Design", year: "2023",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=900&q=80&auto=format&fit=crop",
    wide: false,
  },
];

const EXPERIENCE = [
  {
    year: "2022–Present", role: "Senior Graphic Designer",
    company: "Studio Collective", city: "New York",
    desc: "Lead visual identity projects for global brands. Oversee a team of 4 designers and collaborate directly with creative directors.",
  },
  {
    year: "2019–2022", role: "Brand Designer",
    company: "Apex Creative Agency", city: "London",
    desc: "Developed brand systems for 30+ clients across tech and lifestyle. Led packaging and campaign design end-to-end.",
  },
  {
    year: "2017–2019", role: "Junior Designer",
    company: "Bright & Bold Studios", city: "Berlin",
    desc: "Crafted print collateral, social media assets, and packaging concepts for emerging brands.",
  },
  {
    year: "2016–2017", role: "Design Intern",
    company: "Volt Studio", city: "Amsterdam",
    desc: "First professional role — branding, type exploration, and a lot of learning.",
  },
];

const SKILLS = [
  { name: "Brand Identity", level: 96 },
  { name: "Typography", level: 92 },
  { name: "Art Direction", level: 90 },
  { name: "Packaging Design", level: 88 },
  { name: "Editorial Design", level: 85 },
  { name: "Motion Graphics", level: 82 },
];

const TOOLS = [
  "Figma", "Illustrator", "Photoshop", "InDesign",
  "After Effects", "Procreate", "Blender", "Webflow",
  "Framer", "Notion",
];

const TESTIMONIALS = [
  {
    name: "Sarah Chen", role: "Founder, Pulse Magazine",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
    text: "Alex reimagined our entire editorial identity in 6 weeks. The rebrand doubled our newsstand pick-up rate — that kind of ROI is unheard of in publishing.",
    stars: 5,
  },
  {
    name: "Marcus Deleon", role: "CMO, Vivid Spirits",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
    text: "Our packaging went from commodity to conversation-starter overnight. Alex's attention to material, form, and colour is genuinely exceptional.",
    stars: 5,
  },
  {
    name: "Priya Sharma", role: "CEO, Bloom Co.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&auto=format&fit=crop",
    text: "Working with Alex felt like having a creative director on staff. The motion work for our launch drove 2M+ organic impressions in 48 hours.",
    stars: 5,
  },
  {
    name: "Tom Eriksson", role: "Brand Director, Apex Sports",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop",
    text: "Bold, on-brief, and delivered a week early. Alex's strategic thinking goes way beyond just making things look good.",
    stars: 5,
  },
];

const STATS = [
  { value: "8+", label: "Years of craft" },
  { value: "120+", label: "Projects shipped" },
  { value: "30+", label: "Brands transformed" },
  { value: "4×", label: "D&AD Nominee" },
];

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

// ── HOOKS ──────────────────────────────────────────────────────────

function useReveal<T extends Element = HTMLDivElement>(threshold = 0.12) {
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

// ── COMPONENT ──────────────────────────────────────────────────────

export default function SoloPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [slide, setSlide] = useState(0);
  const [formState, setFormState] = useState<"idle" | "sent">("idle");
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const skillsRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // nav scroll state
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // body lock on mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // persist theme
  useEffect(() => {
    const saved = localStorage.getItem("solo-theme") as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("solo-theme", next);
  };

  // testimonials auto-play
  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(
      () => setSlide((s) => (s + 1) % TESTIMONIALS.length), 4000
    );
  };

  useEffect(() => {
    startAutoplay();
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // skill bars on scroll
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

  const goSlide = (idx: number) => { setSlide(idx); startAutoplay(); };
  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sent");
  };

  // reveal hooks
  const brandsReveal = useReveal();
  const workReveal = useReveal();
  const aboutReveal = useReveal();
  const expReveal = useReveal();
  const resumeReveal = useReveal();
  const testimonialReveal = useReveal();
  const contactReveal = useReveal();

  return (
    <div className={styles.page} data-theme={theme}>

      {/* ── NAV ─────────────────────────────────────────── */}
      <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.navInner}>
            <a href="#hero" className={styles.logo}>
              {PROFILE.initials}<span className={styles.logoDot}>.</span>
            </a>

            <nav className={styles.navLinks}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={styles.navLink}>{l.label}</a>
              ))}
            </nav>

            <div className={styles.navRight}>
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className={styles.themeBtn}
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>

              <a href="#contact" className={styles.navCta}>Hire me</a>

              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
                className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ─────────────────────────────────── */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileMenuBg} onClick={closeMenu} />
        <nav className={styles.mobileMenuPanel}>
          <div className={styles.mobileMenuTop}>
            <div className={styles.mobileMenuLogo}>
              {PROFILE.initials}<span className={styles.logoDot}>.</span>
            </div>
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className={styles.themeBtn}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={closeMenu} className={styles.mobileMenuLink}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className={styles.mobileMenuCta}>
            Hire me
          </a>
        </nav>
      </div>

      {/* ── HERO ────────────────────────────────────────── */}
      <section id="hero" className={styles.hero}>

        {/* ── Left: text content ──────────────────────── */}
        <div className={styles.heroInner}>
          {/* "✦ Hey There!" label */}
          <div className={styles.heroLabel}>
            <span className={styles.heroLabelStar}>✦</span>
            Hey There!
          </div>

          {/* Heading: "I'm Alex Rivera / Graphic Designer" */}
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleName}>I&apos;m {PROFILE.name}</span>
            <span className={styles.heroTitleRole}>
              <span className={styles.heroTitleRoleAccent}>Graphic</span> Designer
            </span>
          </h1>

          <p className={styles.heroLead}>{PROFILE.bio1}</p>

          <div className={styles.heroActions}>
            <a href={PROFILE.resumeUrl} className={styles.btnPrimary}>
              Download CV <ArrowIcon />
            </a>
            <a href="#work" className={styles.btnReel}>
              <span className={styles.btnReelIcon}>▶</span>
              View Work
            </a>
          </div>
        </div>

        {/* ── Right: portrait (desktop only) ──────────── */}
        <div className={styles.heroPortrait}>
          <div className={styles.heroPortraitGlow} aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/solo-hero.png"
            alt={PROFILE.name}
            className={styles.heroPortraitImg}
          />
        </div>

      </section>

      {/* ── STICKY HERO IMAGE (mobile only) ─────────────── */}
      <section className={styles.heroImageSection}>
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImagePanel}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/solo-hero.png"
              alt={PROFILE.name}
              className={styles.heroFullImg}
            />
          </div>
        </div>
      </section>

      {/* ── STICKY BOTTOM CTA (mobile only) ─────────────── */}
      <div className={styles.stickyBottom}>
        <a href="#contact" className={styles.stickyBottomBtn}>
          Hire me <ArrowIcon />
        </a>
        <span className={styles.stickyBottomMeta}>Responds in&nbsp;24h</span>
      </div>

      {/* ── BRANDS ──────────────────────────────────────── */}
      <section
        id="brands"
        ref={brandsReveal.ref}
        className={`${styles.brands} ${brandsReveal.visible ? styles.revealed : ""}`}
      >
        <div className={styles.container}>
          <p className={styles.brandsLabel}>Brands I&apos;ve worked with</p>
        </div>
        <div className={styles.marqueeOuter}>
          <div className={styles.marqueeInner}>
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <span key={i} className={styles.brandItem}>
                {b}
                <span className={styles.brandSep} aria-hidden="true">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY STATEMENT ────────────────────────────── */}
      <section className={styles.stickySection}>
        <div className={styles.stickySectionWrapper}>
          <div className={styles.stickySectionPanel}>
            <div className={styles.stickyBgGlow} aria-hidden="true" />
            <div className={styles.stickyInner}>
              <span className={styles.stickyLabel}>Design Philosophy</span>
              <h2 className={styles.stickyHeading}>
                Good design is invisible.<br />
                Great design is{" "}
                <em className={styles.stickyAccent}>unforgettable.</em>
              </h2>
              <div className={styles.stickyDivider}>
                <span className={styles.stickyDividerDot} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ───────────────────────────────── */}
      <section id="work" className={styles.section}>
        <div className={styles.container}>
          <div
            ref={workReveal.ref}
            className={`${styles.sectionHeader} ${workReveal.visible ? styles.revealed : ""}`}
          >
            <span className={styles.eyebrow}>Featured Work</span>
            <h2 className={styles.sectionTitle}>
              Selected <em className={styles.accent}>Projects</em>
            </h2>
            <p className={styles.sectionLead}>
              A curated look at brand identity, editorial, and campaign work from 2023–2026.
            </p>
          </div>
          <div className={styles.workGrid}>
            {WORKS.map((w, i) => (
              <WorkCard key={w.id} work={w} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────── */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.container}>
          <div
            ref={aboutReveal.ref}
            className={`${styles.aboutGrid} ${aboutReveal.visible ? styles.revealed : ""}`}
          >
            <div className={styles.aboutImageCol}>
              <div className={styles.aboutImgWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80&auto=format&fit=crop"
                  alt="Design workspace"
                  className={styles.aboutImg}
                  loading="lazy"
                />
                <div className={styles.aboutImgAccent} aria-hidden="true" />
              </div>
              <div className={styles.availBadge}>
                <span className={styles.availDot} />
                {PROFILE.status}
              </div>
            </div>

            <div className={styles.aboutContent}>
              <span className={styles.eyebrow}>About Me</span>
              <h2 className={styles.sectionTitle}>
                The person behind<br />the <em className={styles.accent}>pixels</em>
              </h2>
              <p className={styles.aboutBio}>{PROFILE.bio1}</p>
              <p className={styles.aboutBio}>{PROFILE.bio2}</p>
              <div className={styles.aboutStats}>
                {STATS.map((s) => (
                  <div key={s.label} className={styles.aboutStat}>
                    <span className={styles.aboutStatValue}>{s.value}</span>
                    <span className={styles.aboutStatLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className={styles.btnPrimary}>
                Work with me <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE TIMELINE ─────────────────────────── */}
      <section id="experience" className={styles.section}>
        <div className={styles.container}>
          <div
            ref={expReveal.ref}
            className={`${styles.sectionHeader} ${expReveal.visible ? styles.revealed : ""}`}
          >
            <span className={styles.eyebrow}>Experience</span>
            <h2 className={styles.sectionTitle}>
              Where I&apos;ve <em className={styles.accent}>been</em>
            </h2>
          </div>
          <div className={styles.timeline}>
            {EXPERIENCE.map((e, i) => (
              <TimelineItem key={i} item={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS & TOOLS ──────────────────────────────── */}
      <section id="skills" className={styles.skillsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Skills &amp; Tools</span>
            <h2 className={styles.sectionTitle}>
              My <em className={styles.accent}>Arsenal</em>
            </h2>
          </div>
          <div
            ref={skillsRef}
            className={`${styles.skillsGrid} ${skillsVisible ? styles.skillsVisible : ""}`}
          >
            <div className={styles.skillBars}>
              {SKILLS.map((s) => (
                <div key={s.name} className={styles.skillItem}>
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

            <div className={styles.toolsCol}>
              <p className={styles.toolsHeading}>Tools I use daily</p>
              <div className={styles.toolsGrid}>
                {TOOLS.map((t) => (
                  <div key={t} className={styles.toolChip}>{t}</div>
                ))}
              </div>
              <div className={styles.showreelCard}>
                <div className={styles.showreelThumb}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?w=600&q=80&auto=format&fit=crop"
                    alt="Design reel"
                    loading="lazy"
                  />
                  <a href="#" className={styles.playBtn} aria-label="Watch showreel">
                    <PlayIcon />
                  </a>
                </div>
                <p className={styles.showreelLabel}>Watch my showreel ↗</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESUME ──────────────────────────────────────── */}
      <section id="resume" className={styles.resumeSection}>
        <div className={styles.container}>
          <div
            ref={resumeReveal.ref}
            className={`${styles.resumeCard} ${resumeReveal.visible ? styles.revealed : ""}`}
          >
            <div className={styles.resumeBlobA} aria-hidden="true" />
            <div className={styles.resumeBlobB} aria-hidden="true" />
            <div className={styles.resumeContent}>
              <span className={styles.eyebrow}>Resume</span>
              <h2 className={styles.resumeTitle}>Get the full picture</h2>
              <p className={styles.resumeDesc}>
                8 years of work history, education, awards, and client references — all in one clean PDF.
              </p>
              <a href={PROFILE.resumeUrl} className={styles.btnPrimary} download>
                Download Resume <DownloadIcon />
              </a>
            </div>
            <div className={styles.resumeVisual} aria-hidden="true">
              <div className={styles.resumeDoc}>
                <div className={styles.resumeDocLine} />
                <div className={styles.resumeDocLine} style={{ width: "70%" }} />
                <div className={styles.resumeDocLine} style={{ width: "55%" }} />
                <div className={styles.resumeDocLine} style={{ width: "80%", marginTop: "12px" }} />
                <div className={styles.resumeDocLine} style={{ width: "60%" }} />
                <div className={styles.resumeDocLine} style={{ width: "75%", marginTop: "12px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section id="testimonials" className={styles.section}>
        <div className={styles.container}>
          <div
            ref={testimonialReveal.ref}
            className={`${styles.sectionHeader} ${testimonialReveal.visible ? styles.revealed : ""}`}
          >
            <span className={styles.eyebrow}>Testimonials</span>
            <h2 className={styles.sectionTitle}>
              What clients <em className={styles.accent}>say</em>
            </h2>
          </div>
          <div className={styles.carousel}>
            <div className={styles.carouselTrack}>
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.name}
                  className={`${styles.testimonialCard} ${i === slide ? styles.testimonialActive : ""}`}
                  aria-hidden={i !== slide}
                >
                  <div className={styles.stars}>
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
            <div className={styles.carouselDots}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i} type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
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
      </section>

      {/* ── CONTACT ─────────────────────────────────────── */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <div
            ref={contactReveal.ref}
            className={`${styles.contactGrid} ${contactReveal.visible ? styles.revealed : ""}`}
          >
            <div className={styles.contactInfo}>
              <span className={styles.eyebrow}>Contact</span>
              <h2 className={styles.sectionTitle}>
                Let&apos;s create<br />something <em className={styles.accent}>great</em>
              </h2>
              <p className={styles.contactLead}>
                Have a project in mind? I&apos;d love to hear about it. Drop me a
                message and I&apos;ll get back within 24 hours.
              </p>
              <div className={styles.contactDetails}>
                <a href={`mailto:${PROFILE.email}`} className={styles.contactDetail}>
                  <MailIcon />{PROFILE.email}
                </a>
                <a href={`tel:${PROFILE.phone}`} className={styles.contactDetail}>
                  <PhoneIcon />{PROFILE.phone}
                </a>
                <div className={styles.contactDetail}>
                  <PinIcon />{PROFILE.location} · {PROFILE.availability}
                </div>
              </div>
              <div className={styles.socials}>
                <a href={PROFILE.instagram} className={styles.socialLink} aria-label="Instagram">Instagram</a>
                <a href={PROFILE.behance} className={styles.socialLink} aria-label="Behance">Behance</a>
                <a href={PROFILE.linkedin} className={styles.socialLink} aria-label="LinkedIn">LinkedIn</a>
                <a href={PROFILE.dribbble} className={styles.socialLink} aria-label="Dribbble">Dribbble</a>
              </div>
            </div>

            <div className={styles.contactFormWrap}>
              {formState === "sent" ? (
                <div className={styles.formSuccess}>
                  <span className={styles.formSuccessIcon}>✦</span>
                  <h3>Message sent!</h3>
                  <p>Thanks for reaching out. I&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="solo-name">Name</label>
                      <input id="solo-name" type="text" className={styles.formInput} placeholder="Your name" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="solo-email">Email</label>
                      <input id="solo-email" type="email" className={styles.formInput} placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="solo-project">Project type</label>
                    <input id="solo-project" type="text" className={styles.formInput} placeholder="Brand identity, packaging, editorial…" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="solo-message">Message</label>
                    <textarea id="solo-message" className={styles.formTextarea} placeholder="Tell me about your project, timeline, and budget…" rows={5} required />
                  </div>
                  <button type="submit" className={styles.btnPrimary}>
                    Send message <ArrowIcon />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <a href="#hero" className={styles.footerLogo}>
              {PROFILE.initials}<span className={styles.logoDot}>.</span>
            </a>
            <div className={styles.footerSocials}>
              <a href={PROFILE.instagram} className={styles.footerSocialLink}>IG</a>
              <a href={PROFILE.behance} className={styles.footerSocialLink}>BE</a>
              <a href={PROFILE.linkedin} className={styles.footerSocialLink}>LI</a>
              <a href={PROFILE.dribbble} className={styles.footerSocialLink}>DR</a>
            </div>
          </div>
          <nav className={styles.footerNav}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={styles.footerNavLink}>{l.label}</a>
            ))}
          </nav>
          <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
            <span>{PROFILE.location} · {PROFILE.availability}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── SUB-COMPONENTS ─────────────────────────────────────────────────

function WorkCard({ work, index }: { work: (typeof WORKS)[0]; index: number }) {
  const { ref, visible } = useReveal<HTMLAnchorElement>(0.08);
  return (
    <a
      ref={ref}
      href="#"
      className={`${styles.workItem} ${work.wide ? styles.workItemWide : ""} ${visible ? styles.revealed : ""}`}
      style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={work.image} alt={work.title} className={styles.workImg} loading="lazy" />
      <div className={styles.workOverlay}>
        <div className={styles.workMeta}>
          <span className={styles.workCategory}>{work.category} · {work.year}</span>
          <h3 className={styles.workTitle}>{work.title}</h3>
          <span className={styles.workCta}>View project ↗</span>
        </div>
      </div>
    </a>
  );
}

function TimelineItem({ item, index }: { item: (typeof EXPERIENCE)[0]; index: number }) {
  const { ref, visible } = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={`${styles.timelineItem} ${visible ? styles.revealed : ""}`}
      style={{ "--delay": `${index * 120}ms` } as React.CSSProperties}
    >
      <div className={styles.timelineLine}>
        <div className={styles.timelineDot} />
      </div>
      <div className={styles.timelineBody}>
        <span className={styles.timelineYear}>{item.year}</span>
        <h3 className={styles.timelineRole}>{item.role}</h3>
        <span className={styles.timelineCompany}>{item.company} · {item.city}</span>
        <p className={styles.timelineDesc}>{item.desc}</p>
      </div>
    </div>
  );
}

// ── ICONS ──────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 8.29 8.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
