"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "01",
    title: "Luminary Rebrand",
    client: "Luminary Studios",
    year: "2026",
    category: "Brand Identity",
    tags: ["Identity", "Typography", "Motion"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&q=80&auto=format&fit=crop",
    wide: true,
  },
  {
    id: "02",
    title: "Flow Dashboard",
    client: "Fintech Co.",
    year: "2025",
    category: "UI / UX",
    tags: ["Product", "Figma", "Design System"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=640&q=80&auto=format&fit=crop",
    wide: false,
  },
  {
    id: "03",
    title: "Verdant",
    client: "Botanical Brand",
    year: "2025",
    category: "Brand + Web",
    tags: ["Brand", "Web", "Photography"],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=640&q=80&auto=format&fit=crop",
    wide: false,
  },
  {
    id: "04",
    title: "Apex Campaign",
    client: "Apex Motors",
    year: "2024",
    category: "Art Direction",
    tags: ["Campaign", "Print", "Digital"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=700&q=80&auto=format&fit=crop",
    wide: true,
  },
];

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="group cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden rounded-2xl mb-5"
        style={{
          aspectRatio: project.wide ? "16/9" : "4/3",
          border: "1px solid hsl(28 7% 14%)",
          backgroundColor: "hsl(28 6% 9%)",
        }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 flex items-end p-6"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: "rgba(13,10,7,0.75)" }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #E2B96A, #C07A2E)",
              color: "#0d0a07",
            }}
          >
            View case study →
          </div>
        </motion.div>

        {/* Category badge */}
        <span
          className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] rounded-full px-3 py-1"
          style={{
            backgroundColor: "rgba(13,10,7,0.7)",
            backdropFilter: "blur(8px)",
            border: "1px solid hsl(28 7% 22%)",
            color: "hsl(30 8% 60%)",
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <span className="text-[10px] font-mono" style={{ color: "hsl(28 7% 32%)" }}>
              {project.id}
            </span>
            <div className="w-4 h-px" style={{ backgroundColor: "hsl(28 7% 18%)" }} />
            <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "hsl(30 8% 40%)" }}>
              {project.client}
            </span>
          </div>
          <h3
            className="text-xl md:text-2xl font-normal mb-3 transition-colors duration-300"
            style={{
              fontFamily: "var(--font-serif, Georgia, serif)",
              color: hovered ? "hsl(38 25% 93%)" : "hsl(38 20% 80%)",
            }}
          >
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-[0.15em] rounded-full px-2.5 py-1"
                style={{
                  backgroundColor: "hsl(28 6% 9%)",
                  border: "1px solid hsl(28 7% 14%)",
                  color: "hsl(30 8% 45%)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="text-xs font-mono flex-shrink-0 pt-1" style={{ color: "hsl(28 7% 32%)" }}>
          {project.year}
        </span>
      </div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="py-24 md:py-32 px-6"
      style={{ backgroundColor: "hsl(28 8% 5%)", borderTop: "1px solid hsl(28 7% 10%)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px" style={{ backgroundColor: "#C07A2E" }} />
              <span className="text-xs uppercase tracking-[0.35em]" style={{ color: "hsl(30 8% 45%)" }}>
                Selected Work
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-normal"
              style={{
                fontFamily: "var(--font-serif, Georgia, serif)",
                color: "hsl(38 25% 93%)",
              }}
            >
              Featured{" "}
              <em
                className="italic"
                style={{
                  background: "linear-gradient(135deg, #E2B96A, #C07A2E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                projects
              </em>
            </h2>
          </div>
          <p className="text-sm max-w-xs" style={{ color: "hsl(30 8% 45%)" }}>
            A curated selection of brand, UI/UX, and art direction work from 2024–2026.
          </p>
        </motion.div>

        {/* Wide projects (full-row) */}
        <div className="space-y-8 md:space-y-10">
          {/* Row 1 — wide */}
          <ProjectCard project={PROJECTS[0]} />

          {/* Row 2 — two column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <ProjectCard project={PROJECTS[1]} />
            <ProjectCard project={PROJECTS[2]} />
          </div>

          {/* Row 3 — wide */}
          <ProjectCard project={PROJECTS[3]} />
        </div>
      </div>
    </section>
  );
}
