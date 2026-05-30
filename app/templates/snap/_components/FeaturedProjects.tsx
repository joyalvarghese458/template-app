"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FEATURED_PROJECTS } from "../_data/portfolio";
import { stagger, scaleIn, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function FeaturedProjects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>Featured Work</div>
          <h2 className={styles.sectionTitle}>
            Selected <em>projects</em>
          </h2>
          <p className={styles.sectionLead}>
            A curated collection of recent work spanning six continents and
            every photographic discipline.
          </p>
        </div>

        <motion.div
          className={styles.projectsGrid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {FEATURED_PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              className={project.wide ? styles.projectCardWide : ""}
            >
              <Link
                href="/templates/snap/portfolio"
                className={styles.projectCard}
                data-cursor-hover
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImg}
                  loading="lazy"
                  draggable={false}
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <div className={styles.projectLocation}>
                      <PinIcon />
                      {project.location}
                    </div>
                    <span className={styles.projectCta}>
                      View project <ArrowIcon />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/templates/snap/portfolio" className={styles.btnGhost}>
            View all work
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
