"use client";

import { useEffect, useState } from "react";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Cube from "../_components/Cube";
import Cursor from "../_components/Cursor";
import { useReveal, useSmoothScroll } from "../_components/hooks";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

const MANIFESTO = [
  {
    n: "I",
    title: "We make objects, not assets.",
    body: "A campaign, a film, a system — each finished work should reward a second look. We design with longevity in mind.",
  },
  {
    n: "II",
    title: "Craft is non-negotiable.",
    body: "Every pixel, frame and kerning pair passes through human hands. We don't ship until the work feels resolved.",
  },
  {
    n: "III",
    title: "Quiet is louder.",
    body: "Restraint is a luxury. We chase compositions that hold their tension instead of shouting for it.",
  },
  {
    n: "IV",
    title: "Tools follow the idea.",
    body: "Real-time engines, AI pipelines, traditional letterpress — we pick the medium that serves the work, not the trend.",
  },
];

const TEAM = [
  {
    name: "Sasha Mori",
    role: "Founder · Creative Director",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Lukas Hoffmann",
    role: "Head of Motion",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Imani Okafor",
    role: "Design Director",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Yui Tanaka",
    role: "3D & Real-time Lead",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Marco Rossi",
    role: "Producer",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Elena Volkov",
    role: "Strategy Director",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&q=80&auto=format&fit=crop",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Listen",
    body: "Two weeks of conversations, audits and field research. We arrive without solutions and leave with the right questions.",
  },
  {
    n: "02",
    title: "Frame",
    body: "We translate the brief into a single, defensible creative direction — a strategic centre of gravity for everything that follows.",
  },
  {
    n: "03",
    title: "Make",
    body: "Small teams, fast iteration, daily reviews. We prototype in the real medium — film cuts, working code, printed sheets.",
  },
  {
    n: "04",
    title: "Land",
    body: "Launch is a craft of its own. We stay close through the first months of life, refining and stewarding the work.",
  },
];

const RECOGNITION = [
  { year: "2026", award: "D&AD Wood Pencil", category: "Brand Film" },
  { year: "2025", award: "FWA of the Year", category: "Digital" },
  { year: "2025", award: "Type Directors Club", category: "Editorial" },
  { year: "2024", award: "Cannes Lions Bronze", category: "Design" },
  { year: "2024", award: "ADC Silver Cube", category: "Identity" },
  { year: "2023", award: "Brand New of the Year", category: "Identity" },
];

export default function AboutPage() {
  useSmoothScroll();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className={theme.root}>
      <Cursor />
      <div className={theme.vignette} aria-hidden="true" />
      <div className={theme.grain} aria-hidden="true" />

      <Nav current="about" />

      <Header mounted={mounted} />
      <Manifesto />
      <Team />
      <Process />
      <Recognition />

      <Footer />
    </div>
  );
}

function Header({ mounted }: { mounted: boolean }) {
  return (
    <header className={styles.pageHead}>
      <div className={styles.pageHeadInner}>
        <p className={styles.pageEyebrow}>
          <span>§</span> About the studio
        </p>
        <h1 className={styles.pageTitle}>
          <span className={styles.titleLine}>
            <span className={styles.titleInner}>An independent</span>
          </span>
          <span className={styles.titleLine}>
            <span
              className={`${styles.titleInner} ${styles.serif}`}
              style={{ animationDelay: "0.15s" }}
            >
              practice for
            </span>
          </span>
          <span className={styles.titleLine}>
            <span
              className={styles.titleInner}
              style={{ animationDelay: "0.3s" }}
            >
              ambitious brands.
            </span>
          </span>
        </h1>
        <div className={styles.headFoot}>
          <p className={styles.headFootCopy}>
            Founded in San Francisco in 2019. We are eighteen people, working
            from three studios, taking on roughly twelve projects each year.
          </p>
          <div className={styles.headStats}>
            <div>
              <p className={styles.headStatValue}>06</p>
              <p className={styles.headStatLabel}>Years in practice</p>
            </div>
            <div>
              <p className={styles.headStatValue}>18</p>
              <p className={styles.headStatLabel}>Studio members</p>
            </div>
            <div>
              <p className={styles.headStatValue}>03</p>
              <p className={styles.headStatLabel}>Locations</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.headCube}>
        {mounted && <Cube size={340} accent="#e8d18b" />}
      </div>
    </header>
  );
}

function Manifesto() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.manifesto} ref={ref}>
      <p className={styles.sectionLabel}>
        <span>§ 01</span>
        <span>Manifesto</span>
      </p>
      <div
        className={`${styles.manifestoGrid} ${visible ? styles.visible : ""}`}
      >
        {MANIFESTO.map((m, i) => (
          <div
            key={m.n}
            className={styles.manifestoItem}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <span className={styles.manifestoN}>{m.n}</span>
            <h3 className={styles.manifestoTitle}>{m.title}</h3>
            <p className={styles.manifestoBody}>{m.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className={styles.team}>
      <div className={styles.teamHead}>
        <p className={styles.sectionLabel}>
          <span>§ 02</span>
          <span>The studio</span>
        </p>
        <h2 className={styles.sectionTitle}>
          A small group of <em className={styles.serif}>specialists</em>.
        </h2>
      </div>

      <div className={styles.teamGrid}>
        {TEAM.map((p, i) => (
          <TeamCard person={p} index={i} key={p.name} />
        ))}
      </div>
    </section>
  );
}

function TeamCard({
  person,
  index,
}: {
  person: (typeof TEAM)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      className={`${styles.teamCard} ${visible ? styles.teamCardVisible : ""}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className={styles.teamImg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={person.img} alt={person.name} />
      </div>
      <div className={styles.teamInfo}>
        <p className={styles.teamName}>{person.name}</p>
        <p className={styles.teamRole}>{person.role}</p>
      </div>
    </div>
  );
}

function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.process} ref={ref}>
      <div className={styles.processHead}>
        <p className={styles.sectionLabel}>
          <span>§ 03</span>
          <span>How we work</span>
        </p>
        <h2 className={styles.sectionTitle}>
          Four stages, <em className={styles.serif}>roughly</em>.
        </h2>
        <p className={styles.processIntro}>
          We adapt our process to each engagement — but every project moves
          through these four phases, with built-in checkpoints to recalibrate.
        </p>
      </div>

      <div
        className={`${styles.processGrid} ${visible ? styles.visible : ""}`}
      >
        {PROCESS.map((p, i) => (
          <div
            key={p.n}
            className={styles.processStep}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <span className={styles.processN}>{p.n}</span>
            <h3 className={styles.processTitle}>{p.title}</h3>
            <p className={styles.processBody}>{p.body}</p>
            {i < PROCESS.length - 1 && (
              <span className={styles.processArrow}>→</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Recognition() {
  return (
    <section className={styles.recognition}>
      <p className={styles.sectionLabel}>
        <span>§ 04</span>
        <span>Recognition</span>
      </p>
      <h2 className={styles.sectionTitle}>
        Awards & <em className={styles.serif}>press</em>.
      </h2>

      <ul className={styles.recogList}>
        {RECOGNITION.map((r, i) => (
          <RecogRow recog={r} key={i} index={i} />
        ))}
      </ul>
    </section>
  );
}

function RecogRow({
  recog,
  index,
}: {
  recog: (typeof RECOGNITION)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLLIElement>(0.2);
  return (
    <li
      ref={ref}
      className={`${styles.recogRow} ${visible ? styles.recogRowVisible : ""}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <span className={styles.recogYear}>{recog.year}</span>
      <span className={styles.recogAward}>{recog.award}</span>
      <span className={styles.recogCategory}>{recog.category}</span>
    </li>
  );
}