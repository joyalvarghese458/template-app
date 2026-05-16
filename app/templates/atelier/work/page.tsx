"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Cursor from "../_components/Cursor";
import { useReveal, useSmoothScroll } from "../_components/hooks";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

const PROJECTS = [
  {
    id: "01",
    title: "Helios",
    client: "Vantage Aerospace",
    year: "2026",
    discipline: "Brand Film · 3D · Sound",
    location: "Houston · Berlin",
    summary:
      "A three-minute brand film for the launch of Vantage's next-generation propulsion platform. Real-time CGI integrated with on-set plate photography.",
    img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1800&q=80&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Glasshouse",
    client: "Otsuka Foundation",
    year: "2025",
    discipline: "Installation · Web · Identity",
    location: "Naoshima, JP",
    summary:
      "A permanent interactive installation pairing a generative web experience with a physical glass pavilion. Visitors compose ambient compositions from particle behaviour.",
    img: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?w=1800&q=80&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Vesper Index",
    client: "Vesper Capital",
    year: "2025",
    discipline: "Identity · Editorial",
    location: "London",
    summary:
      "Identity system, annual report and ongoing publication design for a contrarian asset manager. A bespoke serif and full custom data visualisation language.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1800&q=80&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Northbound",
    client: "Norse Atlantic",
    year: "2024",
    discipline: "Campaign · Motion",
    location: "Oslo",
    summary:
      "Above-the-line campaign across film, OOH and digital, centred on a single recurring visual motif — the meridian line — captured across three continents.",
    img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1800&q=80&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Kintsugi OS",
    client: "Kintsugi Tokyo",
    year: "2024",
    discipline: "Product · Identity",
    location: "Tokyo",
    summary:
      "Design system, marketing site and product motion language for a Japanese productivity tool. A celebration of imperfection rendered in micro-interactions.",
    img: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=1800&q=80&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Andante",
    client: "Andante Music Foundation",
    year: "2024",
    discipline: "Web · Generative",
    location: "Vienna",
    summary:
      "A generative archive of 12,000 classical recordings. Each piece is paired with a unique algorithmically generated cover, derived from its waveform.",
    img: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=1800&q=80&auto=format&fit=crop",
  },
  {
    id: "07",
    title: "Maison Verre",
    client: "Maison Verre Paris",
    year: "2023",
    discipline: "Packaging · 3D",
    location: "Paris",
    summary:
      "Packaging system and CGI campaign imagery for a contemporary perfumery. Twelve scents, twelve material studies, all rendered in-house.",
    img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1800&q=80&auto=format&fit=crop",
  },
  {
    id: "08",
    title: "Form Press",
    client: "Form Press Ltd.",
    year: "2023",
    discipline: "Editorial · Type",
    location: "Berlin",
    summary:
      "Editorial direction and a complete custom display typeface for an independent architecture press. Four volumes per year, each with its own colour world.",
img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1800&q=80&auto=format&fit=crop"  },
];

const FILTERS = ["All Work", "Motion", "3D", "Identity", "Web"];

export default function WorkPage() {
  useSmoothScroll();
  const [activeFilter, setActiveFilter] = useState("All Work");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className={theme.root}>
      <Cursor />
      <div className={theme.vignette} aria-hidden="true" />
      <div className={theme.grain} aria-hidden="true" />

      <Nav current="work" />

      <Header />

      <section className={styles.filterBar}>
        <div className={styles.filterBarInner}>
          <span className={styles.filterLabel}>FILTER</span>
          <div className={styles.filterList}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`${styles.filterBtn} ${
                  activeFilter === f ? styles.filterBtnActive : ""
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <span className={styles.filterCount}>
            {PROJECTS.length.toString().padStart(2, "0")} ENTRIES
          </span>
        </div>
      </section>

      <section className={styles.list}>
        {mounted &&
          PROJECTS.map((p, i) => (
            <ProjectRow project={p} key={p.id} index={i} />
          ))}
      </section>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className={styles.pageHead}>
      <div className={styles.pageHeadGrid}>
        <p className={styles.pageEyebrow}>
          <span>§</span> Archive · 2023 — 2026
        </p>
        <h1 className={styles.pageTitle}>
          <span className={styles.titleLine}>
            <span className={styles.titleInner}>Selected</span>
          </span>
          <span className={styles.titleLine}>
            <span
              className={`${styles.titleInner} ${styles.serif}`}
              style={{ animationDelay: "0.15s" }}
            >
              work.
            </span>
          </span>
        </h1>
        <p className={styles.pageLead}>
          An evolving record of recent engagements — film, identity, product,
          and built environment. Click any entry to read the case study.
        </p>
      </div>
    </header>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const [imagePos, setImagePos] = useState({ x: 0, y: 0 });

  // Image follows cursor inside the row (desktop)
  const onMouseMove = (e: React.MouseEvent) => {
    const rect = rowRef.current?.getBoundingClientRect();
    if (!rect) return;
    setImagePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isReverse = index % 2 === 1;

  return (
    <div
      ref={(el) => {
        ref.current = el;
        rowRef.current = el;
      }}
      className={`${styles.projectRow} ${visible ? styles.projectRowVisible : ""} ${
        isReverse ? styles.projectRowReverse : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMouseMove}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className={styles.projectMeta}>
        <span className={styles.projectId}>{project.id}</span>
        <span className={styles.projectYear}>{project.year}</span>
      </div>

      <div className={styles.projectMain}>
        <h2 className={styles.projectTitle}>
          {project.title}
          <span className={styles.projectArrow}>↗</span>
        </h2>
        <p className={styles.projectClient}>{project.client}</p>
        <div className={styles.projectTags}>
          <span>{project.discipline}</span>
          <span className={styles.projectTagDivider}>·</span>
          <span>{project.location}</span>
        </div>
        <p className={styles.projectSummary}>{project.summary}</p>
      </div>

      <div
        className={`${styles.projectImage} ${hovered ? styles.projectImageVisible : ""}`}
        style={{
          left: `${imagePos.x}px`,
          top: `${imagePos.y}px`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={imgRef} src={project.img} alt={project.title} />
      </div>

      {/* Inline image for mobile/tablet (always visible) */}
      <div className={styles.projectImageInline}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.img} alt={project.title} />
      </div>
    </div>
  );
}