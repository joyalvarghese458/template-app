"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Loader from "../_components/Loader";
import { useReveal } from "../_components/hooks";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

const FILTERS = ["All", "Web", "Mobile", "Branding", "Motion"] as const;
type Filter = (typeof FILTERS)[number];

const PROJECTS: { title: string; tag: Exclude<Filter, "All">; img: string }[] = [
  {
    title: "First Project",
    tag: "Web",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Second Project",
    tag: "Mobile",
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Third Project",
    tag: "Branding",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Fourth Project",
    tag: "Motion",
    img: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Fifth Project",
    tag: "Web",
    img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Sixth Project",
    tag: "Branding",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Seventh Project",
    tag: "Mobile",
    img: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Eighth Project",
    tag: "Web",
    img: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Ninth Project",
    tag: "Motion",
    img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=900&q=80&auto=format&fit=crop",
  },
];

export default function PurePortfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <div className={theme.root}>
      <Loader />
      <Nav current="portfolio" />

      <section className={styles.banner}>
        <span className={styles.bannerGlow} aria-hidden="true" />
        <span className={`${styles.bannerOrb} ${styles.bannerOrb1}`} aria-hidden="true" />
        <span className={`${styles.bannerOrb} ${styles.bannerOrb2}`} aria-hidden="true" />
        <h1 className={styles.bannerTitle}>Portfolio</h1>
        <div className={styles.crumbs}>
          <Link href="/templates/pure">Home</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
          <span>Portfolio</span>
        </div>
      </section>

      <div className={styles.filters}>
        <div className={styles.filtersInner}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <section className={styles.grid}>
        <div className={styles.gridInner}>
          {list.map((p, i) => (
            <Card key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>

      <Footer
        ctaTitle="Like what you see?"
        ctaLabel="Hire Me"
        ctaHref="/templates/pure/contact"
      />
    </div>
  );
}

function Card({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLAnchorElement>();
  return (
    <Link
      href="/templates/pure/portfolio"
      className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <span className={styles.cardTag}>{project.tag}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.cardImg} src={project.img} alt={project.title} />
      <div className={styles.cardOverlay} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <span className={styles.cardLink}>
          View Work
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
