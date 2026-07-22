"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Target, Layers, CheckCircle, Rocket } from "lucide-react";
import Nav from "./_components/Nav";
import { ContainerScroll } from "./_components/ContainerScroll";
import RadialOrbitalTimeline from "./_components/RadialOrbitalTimeline";
import ScrollExpansionHero from "./_components/ScrollExpansionHero";
import { useReveal, useSmoothScroll } from "./_components/hooks";
import {
  fadeUp,
  fadeIn,
  scaleIn,
  stagger,
  viewport,
} from "./_components/motion";
import styles from "./styles.module.css";

// ═══════════════════════════════════════════════════════════════════
// EDITABLE CONTENT — swap text, images, and links here
// ═══════════════════════════════════════════════════════════════════

const PROFILE = {
  firstName: "Alex",
  lastName:  "Rivera",
  title:     "Product Designer & Creative Technologist",
  tagline:   "Crafting digital experiences that move people, grow brands, and redefine the possible.",
  bio1:      "I partner with startups and established brands to define their digital presence through thoughtful design, compelling storytelling, and cutting-edge technology.",
  bio2:      "My work lives at the intersection of aesthetics and function — where strategy meets craft, and every detail earns its place.",
  email:     "hello@alexrivera.co",
  location:  "San Francisco, CA — Available Worldwide",
  availability: "Open to new projects · Starting Aug 2026",
  linkedin:  "#",
  twitter:   "#",
  dribbble:  "#",
  github:    "#",
};

const STATS = [
  { value: "8+",  label: "Years of Experience" },
  { value: "60+", label: "Projects Shipped" },
  { value: "40+", label: "Happy Clients" },
];

const PROJECTS = [
  {
    id: "01",
    title:    "Horizon App",
    client:   "Horizon AI",
    category: "Product Design · iOS",
    year:     "2025",
    img:      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=75&auto=format&fit=crop",
    href:     "/templates/profile-one/work",
  },
  {
    id: "02",
    title:    "Meridian Identity",
    client:   "Meridian Capital",
    category: "Brand Identity · Strategy",
    year:     "2025",
    img:      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=900&q=75&auto=format&fit=crop",
    href:     "/templates/profile-one/work",
  },
  {
    id: "03",
    title:    "Nova Platform",
    client:   "Nova Health",
    category: "Web Design · Design System",
    year:     "2024",
    img:      "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?w=900&q=75&auto=format&fit=crop",
    href:     "/templates/profile-one/work",
  },
];

const SKILLS = [
  {
    icon:  "✦",
    title: "Design",
    items: ["UI/UX Design", "Product Design", "Design Systems", "Prototyping", "Brand Identity", "Motion"],
  },
  {
    icon:  "⬡",
    title: "Technology",
    items: ["React · Next.js", "TypeScript", "Three.js / WebGL", "Framer Motion", "Figma", "Design Tokens"],
  },
  {
    icon:  "◈",
    title: "Strategy",
    items: ["UX Research", "User Testing", "Info Architecture", "Content Strategy", "Design Leadership"],
  },
];

const TESTIMONIAL = {
  quote:  "Alex has a rare ability to hold both the business vision and the pixel-perfect details at once. The work speaks for itself — our activation rate jumped 40% after the redesign.",
  author: "Sarah Chen",
  role:   "CEO, Horizon AI",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80&auto=format&fit=crop&crop=face",
};

// Click any orbiting node to see details + connected phases
const PROCESS_TIMELINE = [
  {
    id: 1,
    title: "Discover",
    date: "Week 1–2",
    content: "Deep-dive research, stakeholder interviews, competitive audits, and user journey mapping to build a solid strategic foundation.",
    category: "Research",
    icon: Search,
    relatedIds: [2],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Define",
    date: "Week 3",
    content: "Synthesise insights into clear problem statements, success metrics, and a prioritised product vision aligned with business goals.",
    category: "Strategy",
    icon: Target,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Design",
    date: "Week 4–7",
    content: "Rapid ideation, wireframing, high-fidelity prototyping, and a living design system with full component documentation.",
    category: "Design",
    icon: Layers,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 4,
    title: "Validate",
    date: "Week 8–9",
    content: "Moderated usability tests, A/B experiments, accessibility audits, and iterative refinement based on real user feedback.",
    category: "Testing",
    icon: CheckCircle,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 65,
  },
  {
    id: 5,
    title: "Ship",
    date: "Week 10–12",
    content: "Engineering handoff with annotated specs, launch coordination, post-release monitoring, and retrospective metrics review.",
    category: "Launch",
    icon: Rocket,
    relatedIds: [4],
    status: "pending" as const,
    energy: 35,
  },
];

// ═══════════════════════════════════════════════════════════════════

export default function ProfileOnePage() {
  useSmoothScroll();

  return (
    <div className={styles.root}>
      <Nav />
      <ScrollExpansionHero
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1280&q=75&auto=format&fit=crop"
        bgImageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=75&auto=format&fit=crop"
        title={`${PROFILE.firstName} ${PROFILE.lastName}`}
        date={PROFILE.title}
        scrollToExpand="Scroll to explore"
        textBlend
      >
        <ScrollShowcase />
        <About />
        <Work />
        <SkillsSection />
        <ProcessSection />
        <TestimonialSection />
        <ContactSection />
        <Footer />
      </ScrollExpansionHero>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// SCROLL SHOWCASE — 3D perspective card unrolls on scroll
// ═══════════════════════════════════════════════════════════════════

function ScrollShowcase() {
  return (
    <section className={styles.scrollShowcase}>
      <ContainerScroll
        titleComponent={
          <div className={styles.scrollShowcaseTitle}>
            <p className={styles.scrollShowcaseLabel}>
              <span className={styles.scrollShowcaseLabelLine} />
              Featured Project
              <span className={styles.scrollShowcaseLabelLine} />
            </p>
            <h2 className={styles.scrollShowcaseHeadline}>
              Crafting{" "}
              <em className={styles.sectionTitleItalic}>products</em>
              {" "}that live<br />at the edge of what&apos;s possible.
            </h2>
            <p className={styles.scrollShowcaseSub}>
              A glimpse into Horizon — an AI-powered analytics platform designed
              from the ground up for speed, clarity, and delight.
            </p>
          </div>
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=75&auto=format&fit=crop"
          alt="Horizon AI — featured product dashboard"
          className={styles.scrollShowcaseImg}
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// ABOUT — statement + stats + bio
// ═══════════════════════════════════════════════════════════════════

function About() {
  const { ref: stRef, visible: stVis } = useReveal<HTMLDivElement>();
  const { ref: gRef,  visible: gVis }  = useReveal<HTMLDivElement>();

  return (
    <section id="about" className={styles.about}>
      {/* Big statement */}
      <div className={styles.aboutInner}>
        <div
          ref={stRef}
          className={`${styles.reveal} ${stVis ? styles.revealVisible : ""}`}
        >
          <p className={styles.sectionLabel}>
            <span className={styles.sectionLabelLine} />
            About
          </p>
          <p className={styles.aboutStatement}>
            I believe great design is <span className={styles.sectionTitleItalic}>invisible</span> when it works —{" "}
            <span className={styles.aboutStatementMuted}>
              and unforgettable when it's right.
            </span>
          </p>
        </div>

        {/* Bio + stats grid */}
        <div
          ref={gRef}
          className={`${styles.aboutGrid} ${styles.reveal} ${gVis ? styles.revealVisible : ""}`}
        >
          <div>
            <p className={styles.aboutBio}>{PROFILE.bio1}</p>
            <p className={styles.aboutBio}>{PROFILE.bio2}</p>
            <div className={styles.availabilityBadge}>
              <span className={styles.availabilityDot} />
              {PROFILE.availability}
            </div>
          </div>

          {/* Stats panel */}
          <div className={styles.aboutStats}>
            {STATS.map((s, i) => (
              <div key={i} className={styles.statBlock}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// WORK — featured project cards
// ═══════════════════════════════════════════════════════════════════

function Work() {
  return (
    <section id="work" className={styles.work}>
      {/* Header */}
      <div className={styles.workHead}>
        <div>
          <p className={styles.sectionLabel}>
            <span className={styles.sectionLabelLine} />
            Selected Work
          </p>
          <h2 className={styles.sectionTitle}>
            A curated{" "}
            <em className={styles.sectionTitleItalic}>archive</em>{" "}
            of recent work.
          </h2>
        </div>
        <Link href="/templates/profile-one" className={styles.workViewAll}>
          View all projects →
        </Link>
      </div>

      {/* Cards */}
      <motion.div
        className={styles.workGrid}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <motion.div variants={scaleIn}>
      <Link href={project.href ?? "/templates/profile-one/work"} className={styles.projectCard}>
        {/* Image */}
        <div className={styles.projectImageWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.img}
            alt={project.title}
            className={styles.projectImage}
            loading="lazy"
            draggable={false}
          />
          <div className={styles.projectImageOverlay} />
          <span className={styles.projectNum}>{project.id}</span>
        </div>

        {/* Body */}
        <div className={styles.projectBody}>
          <p className={styles.projectCategory}>{project.category} · {project.year}</p>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectClient}>{project.client}</p>
        </div>

        {/* Hover arrow */}
        <span className={styles.projectArrow} aria-hidden="true">↗</span>
      </Link>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// SKILLS / EXPERTISE
// ═══════════════════════════════════════════════════════════════════

function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.sectionLabel}>
          <span className={styles.sectionLabelLine} />
          Expertise
        </p>
        <h2 className={styles.sectionTitle}>
          Tools of the{" "}
          <em className={styles.sectionTitleItalic}>trade.</em>
        </h2>

        <motion.div
          className={styles.skillsGrid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {SKILLS.map((s) => (
            <SkillCard key={s.title} skill={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: (typeof SKILLS)[number] }) {
  return (
    <motion.div variants={fadeUp} className={styles.skillCard}>
      <div className={styles.skillCardIcon}>{skill.icon}</div>
      <h3 className={styles.skillCardTitle}>{skill.title}</h3>
      <div className={styles.skillTags}>
        {skill.items.map((item) => (
          <span key={item} className={styles.skillTag}>
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PROCESS — radial orbital timeline showing the design process
// ═══════════════════════════════════════════════════════════════════

function ProcessSection() {
  return (
    <section id="process" className={styles.process}>
      {/* Header sits above the full-bleed orbit canvas */}
      <div className={styles.processHeader}>
        <p className={styles.sectionLabel}>
          <span className={styles.sectionLabelLine} />
          Process
        </p>
        <h2 className={styles.sectionTitle}>
          How I turn{" "}
          <em className={styles.sectionTitleItalic}>ambiguity</em>{" "}
          into shipped product.
        </h2>
        <p className={styles.processSub}>
          Click any orbiting node to explore each phase — and see how they connect.
        </p>
      </div>

      {/* Full-bleed orbital canvas */}
      <RadialOrbitalTimeline timelineData={PROCESS_TIMELINE} />
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// TESTIMONIAL
// ═══════════════════════════════════════════════════════════════════

function TestimonialSection() {
  return (
    <section className={`${styles.section} ${styles.testimonial}`}>
      <motion.div
        className={styles.testimonialInner}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className={styles.testimonialQuoteMark}>&ldquo;</div>
        <p className={styles.testimonialQuote}>{TESTIMONIAL.quote}</p>
        <div className={styles.testimonialAuthor}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={TESTIMONIAL.avatar}
            alt={TESTIMONIAL.author}
            className={styles.testimonialAvatar}
          />
          <div className={styles.testimonialMeta}>
            <p className={styles.testimonialName}>{TESTIMONIAL.author}</p>
            <p className={styles.testimonialRole}>{TESTIMONIAL.role}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// CONTACT — large CTA + email + socials
// ═══════════════════════════════════════════════════════════════════

function ContactSection() {
  return (
    <section id="contact" className={styles.contact}>
      <motion.div
        className={styles.contactInner}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <p className={styles.sectionLabel}>
          <span className={styles.sectionLabelLine} />
          Get In Touch
        </p>

        <h2 className={styles.contactTitle}>
          Have a project{" "}
          <em className={styles.contactTitleAccent}>in mind?</em>
        </h2>

        <p className={styles.contactBody}>
          I take on a handful of projects each year. If you have something great in
          mind — a product launch, a brand identity, or a complex design challenge —
          let&apos;s talk.
        </p>

        <a href={`mailto:${PROFILE.email}`} className={styles.contactEmail}>
          {PROFILE.email}
        </a>

        {/* Social icons */}
        <div className={styles.contactSocials}>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href={PROFILE.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Twitter / X"
          >
            <XIcon />
          </a>
          <a
            href={PROFILE.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Dribbble"
          >
            <DribbbleIcon />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </div>

        <p style={{ fontSize: "0.8125rem", color: "#334155" }}>
          {PROFILE.location}
        </p>
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════════════

function Footer() {
  return (
    <footer>
      <div className={styles.divider} />
      <div className={styles.footer}>
        <p className={styles.footerCopy}>
          © 2026 {PROFILE.firstName} {PROFILE.lastName}. All rights reserved.
        </p>
        <Link href="/templates" className={styles.footerBack}>
          ← Browse all templates
        </Link>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════
// ICON COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10"/>
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}
