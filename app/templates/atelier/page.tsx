"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import Cube from "./_components/Cube";
import Cursor from "./_components/Cursor";
import { useReveal, useSmoothScroll } from "./_components/hooks";
import theme from "./_components/theme.module.css";
import styles from "./styles.module.css";

// =====================================================
// EDITABLE CONTENT — swap text/images here
// =====================================================

const PROFILE = {
  name: "Atelier Studio",
  tagline: "We build moving images,",
  tagline2: "interactive worlds,",
  tagline3: "and brand identities.",
  intro:
    "Atelier is an independent creative studio working at the intersection of motion design, 3D craft, and digital experience for ambitious brands and cultural institutions.",
  reel: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1600&q=80&auto=format&fit=crop",
  clientCount: "84",
  awardCount: "21",
  yearFounded: "2019",
};

const SHOWCASE = [
  {
    id: "01",
    title: "Helios",
    client: "Vantage Aerospace",
    tag: "Brand Film · 3D",
    year: "2026",
    img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Glasshouse",
    client: "Otsuka Foundation",
    tag: "Installation · Web",
    year: "2025",
    img: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Vesper Index",
    client: "Vesper Capital",
    tag: "Identity System",
    year: "2025",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Northbound",
    client: "Norse Atlantic",
    tag: "Campaign · Motion",
    year: "2024",
    img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1600&q=80&auto=format&fit=crop",
  },
];

const SERVICES = [
  {
    n: "01",
    title: "Motion & Film",
    body: "Brand films, broadcast packages, title sequences and short-form social.",
  },
  {
    n: "02",
    title: "3D & CGI",
    body: "Product visualisation, world-building, generative environments, real-time pipelines.",
  },
  {
    n: "03",
    title: "Brand Identity",
    body: "Strategy, naming, identity systems, packaging and editorial direction.",
  },
  {
    n: "04",
    title: "Digital Experience",
    body: "Interactive sites, configurators, installations and AR.",
  },
];

const STATS = [
  { value: "84", label: "Clients Served" },
  { value: "21", label: "International Awards" },
  { value: "06", label: "Years In Practice" },
  { value: "03", label: "Studios Worldwide" },
];

const CLIENT_LOGOS = [
  "Vantage Aerospace",
  "Otsuka Foundation",
  "Vesper Capital",
  "Norse Atlantic",
  "Helena Worldwide",
  "Kintsugi Tokyo",
  "Form Press",
  "Andante",
  "Maison Verre",
];

// =====================================================

export default function AtelierHome() {
  useSmoothScroll();
  return (
    <div className={theme.root}>
      <Cursor />
      <div className={theme.vignette} aria-hidden="true" />
      <div className={theme.grain} aria-hidden="true" />

      <Nav current="home" />

      <Hero />
      <Marquee />
      <Intro />
      <Showcase />
      <ServicesPreview />
      <Stats />
      <Clients />
      <Cta />

      <Footer />
    </div>
  );
}

// =====================================================
// HERO — 3D cube + animated headline
// =====================================================

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.heroCubeWrap}>
          <div className={styles.cubeStage}>
            {mounted && <Cube size={520} accent="#f5f0e6" />}
          </div>
          <div className={styles.cubeLabel}>
            <span className={styles.cubeLabelTag}>FIG · 001</span>
            <span className={styles.cubeLabelText}>
              Self-correcting object · interactive
            </span>
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>
            <span className={styles.heroEyebrowDot} />
            <span>Independent Creative Studio · 2019—</span>
          </div>

          <h1 className={styles.heroHeadline}>
            <span className={styles.heroLine}>
              <span className={styles.heroLineInner}>{PROFILE.tagline}</span>
            </span>
            <span className={styles.heroLine}>
              <span
                className={`${styles.heroLineInner} ${styles.heroItalic}`}
                style={{ animationDelay: "0.15s" }}
              >
                {PROFILE.tagline2}
              </span>
            </span>
            <span className={styles.heroLine}>
              <span
                className={styles.heroLineInner}
                style={{ animationDelay: "0.3s" }}
              >
                {PROFILE.tagline3}
              </span>
            </span>
          </h1>

          <div className={styles.heroFoot}>
            <div className={styles.heroFootBlock}>
              <p className={styles.heroFootLabel}>Currently</p>
              <p className={styles.heroFootValue}>
                Booking for Q3 — Q4 2026
              </p>
            </div>
            <div className={styles.heroFootBlock}>
              <p className={styles.heroFootLabel}>Coordinates</p>
              <p className={styles.heroFootValue}>37.7749° N · 122.4194° W</p>
            </div>
            <Link href="/templates/atelier/work" className={styles.heroCta}>
              <span>View Recent Work</span>
              <span className={styles.heroCtaArrow}>→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span>SCROLL</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className={styles.heroMarquee} aria-hidden="true">
      <div className={styles.heroMarqueeTrack}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i}>
            BRAND FILMS · 3D · INSTALLATIONS · IDENTITY · MOTION · INTERACTIVE ·
            EDITORIAL · STRATEGY ·{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

// =====================================================
// INTRO — Big statement block
// =====================================================

function Intro() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.intro} ref={ref}>
      <div className={styles.introInner}>
        <p className={styles.sectionLabel}>
          <span>§ 01</span>
          <span>Statement</span>
        </p>
        <p
          className={`${styles.introCopy} ${visible ? styles.revealVisible : ""}`}
        >
          We treat every project as a single thoughtful{" "}
          <em className={styles.serif}>object</em> — designed to be examined
          from every angle, to{" "}
          <em className={styles.serif}>hold attention</em>, and to keep
          revealing detail long after the first encounter.
        </p>
      </div>
    </section>
  );
}

// =====================================================
// SHOWCASE — flagship project grid
// =====================================================

function Showcase() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.showcase} id="work" ref={ref}>
      <div className={styles.showcaseHead}>
        <p className={styles.sectionLabel}>
          <span>§ 02</span>
          <span>Selected Work · 2024 — 2026</span>
        </p>
        <h2 className={styles.sectionTitle}>
          A small archive of <em className={styles.serif}>recent</em> work.
        </h2>
        <Link
          href="/templates/atelier/work"
          className={styles.showcaseAllLink}
        >
          Full archive →
        </Link>
      </div>

      <div className={`${styles.showcaseGrid} ${visible ? styles.revealVisible : ""}`}>
        {SHOWCASE.map((p, i) => (
          <ShowcaseCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ShowcaseCard({
  project,
  index,
}: {
  project: (typeof SHOWCASE)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement | null>(null);

  // 3D tilt on hover
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    let raf = 0;
    let targetRX = 0,
      targetRY = 0;
    let currentRX = 0,
      currentRY = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRY = x * 12;
      targetRX = -y * 12;
    };
    const onLeave = () => {
      targetRX = 0;
      targetRY = 0;
    };

    const tick = () => {
      currentRX += (targetRX - currentRX) * 0.1;
      currentRY += (targetRY - currentRY) * 0.1;
      el.style.transform = `perspective(1000px) rotateX(${currentRX}deg) rotateY(${currentRY}deg)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const isLarge = index === 0 || index === 3;

  return (
    <Link
      href="/templates/atelier/work"
      className={`${styles.card} ${isLarge ? styles.cardLarge : ""}`}
      ref={cardRef}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.img} alt={project.title} />
        <div className={styles.cardOverlay} />
      </div>
      <div className={styles.cardMeta}>
        <span className={styles.cardId}>{project.id}</span>
        <span className={styles.cardYear}>{project.year}</span>
      </div>
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardClient}>{project.client}</p>
        <span className={styles.cardTag}>{project.tag}</span>
      </div>
    </Link>
  );
}

// =====================================================
// SERVICES preview
// =====================================================

function ServicesPreview() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.servicesGrid}>
        <div className={styles.servicesIntro}>
          <p className={styles.sectionLabel}>
            <span>§ 03</span>
            <span>Practice</span>
          </p>
          <h2 className={styles.sectionTitle}>
            Four disciplines, <em className={styles.serif}>one studio</em>.
          </h2>
          <p className={styles.servicesCopy}>
            We work in tight, multi-disciplinary teams. Most projects begin
            with strategy and end with a finished artefact.
          </p>
          <Link
            href="/templates/atelier/services"
            className={styles.heroCta}
          >
            <span>All services</span>
            <span className={styles.heroCtaArrow}>→</span>
          </Link>
        </div>

        <ul className={styles.servicesList}>
          {SERVICES.map((s) => (
            <ServiceRow key={s.n} service={s} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceRow({ service }: { service: (typeof SERVICES)[number] }) {
  const { ref, visible } = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className={`${styles.serviceRow} ${visible ? styles.revealVisible : ""}`}
    >
      <span className={styles.serviceN}>{service.n}</span>
      <div className={styles.serviceBody}>
        <h3 className={styles.serviceTitle}>{service.title}</h3>
        <p className={styles.serviceCopy}>{service.body}</p>
      </div>
      <span className={styles.serviceArrow}>↗</span>
    </li>
  );
}

// =====================================================
// STATS strip
// =====================================================

function Stats() {
  return (
    <section className={styles.stats}>
      {STATS.map((s, i) => (
        <StatBlock key={i} stat={s} index={i} />
      ))}
    </section>
  );
}

function StatBlock({
  stat,
  index,
}: {
  stat: (typeof STATS)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${styles.statBlock} ${visible ? styles.revealVisible : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <p className={styles.statValue}>{stat.value}</p>
      <p className={styles.statLabel}>{stat.label}</p>
    </div>
  );
}

// =====================================================
// CLIENTS marquee
// =====================================================

function Clients() {
  return (
    <section className={styles.clients}>
      <p className={styles.sectionLabel}>
        <span>§ 04</span>
        <span>Collaborators</span>
      </p>
      <div className={styles.clientsTrack}>
        <div className={styles.clientsRow}>
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => (
            <span key={i} className={styles.clientName}>
              {c}
              <em className={styles.clientDot}>✦</em>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================================
// CTA — final block before footer
// =====================================================

function Cta() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.cta} id="contact" ref={ref}>
      <div
        className={`${styles.ctaInner} ${visible ? styles.revealVisible : ""}`}
      >
        <p className={styles.sectionLabel}>
          <span>§ 05</span>
          <span>Begin</span>
        </p>
        <h2 className={styles.ctaHeadline}>
          Have a project <em className={styles.serif}>in mind</em>?
        </h2>
        <p className={styles.ctaCopy}>
          We take on a handful of engagements each year. Tell us about yours —
          we read every brief personally.
        </p>
        <Link
          href="/templates/atelier/contact"
          className={styles.ctaButton}
        >
          <span>Start a conversation</span>
          <span className={styles.ctaButtonArrow}>→</span>
        </Link>
      </div>
    </section>
  );
}