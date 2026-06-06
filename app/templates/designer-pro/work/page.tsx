"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import { useLenis } from "../_hooks/useLenis";
import styles from "../theme.module.css";

const PROJECTS = [
  {
    id: "01",
    title: "Automotive Motion",
    client: "Apex Motors",
    year: "2026",
    category: "Motion",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&h=640&q=80&auto=format&fit=crop",
    description:
      "A cinematic brand film capturing the soul of precision engineering. Shot across three continents with custom motion-rig systems.",
  },
  {
    id: "02",
    title: "Urban Architecture",
    client: "Skyline Studio",
    year: "2026",
    category: "Brand",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&h=640&q=80&auto=format&fit=crop",
    description:
      "Complete visual identity and digital presence for a leading architectural firm shaping tomorrow's skylines.",
  },
  {
    id: "03",
    title: "Human Perspective",
    client: "Lumina Agency",
    year: "2025",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&h=640&q=80&auto=format&fit=crop",
    description:
      "An editorial platform that redefines how stories are told. Micro-interactions and typographic rhythm at its core.",
  },
  {
    id: "04",
    title: "Brand Identity",
    client: "Nova Collective",
    year: "2025",
    category: "Brand",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=640&q=80&auto=format&fit=crop",
    description:
      "A full brand identity system — logo, type, colour, and motion — for an emerging creative collective.",
  },
  {
    id: "05",
    title: "Abstract Flow",
    client: "Spectrum Labs",
    year: "2025",
    category: "Motion",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&h=640&q=80&auto=format&fit=crop",
    description:
      "Generative art installation paired with a digital experience exploring emergent patterns and fluid dynamics.",
  },
  {
    id: "06",
    title: "Neon Study",
    client: "Pulse Records",
    year: "2024",
    category: "Motion",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=900&h=640&q=80&auto=format&fit=crop",
    description:
      "Album campaign spanning digital, OOH and immersive live visuals for an electronic music label.",
  },
  {
    id: "07",
    title: "Speed Lines",
    client: "Drift Magazine",
    year: "2024",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&h=640&q=80&auto=format&fit=crop&crop=right",
    description:
      "Digital magazine redesign with scroll-driven storytelling and immersive data visualisations.",
  },
  {
    id: "08",
    title: "Texture Lab",
    client: "Material Studio",
    year: "2024",
    category: "Brand",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&h=640&q=80&auto=format&fit=crop&crop=bottom",
    description:
      "Tactile branding for a premium material consultancy. Photography direction, web, and print system.",
  },
];

const FILTERS = ["All", "Motion", "Brand", "UI/UX"] as const;
type Filter = (typeof FILTERS)[number];

export default function WorkPage() {
  useLenis();
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div className={styles.page}>
      <Nav />

      {/* ── Page header ── */}
      <header
        className="relative pt-40 pb-20 px-6 overflow-hidden"
        style={{ backgroundColor: "hsl(0 0% 4%)" }}
      >
        {/* Background number */}
        <span
          className="absolute right-8 top-1/2 -translate-y-1/2 text-[20vw] font-normal leading-none select-none pointer-events-none"
          style={{
            fontFamily: "var(--dp-font-display, var(--font-serif, serif))",
            color: "hsl(0 0% 8%)",
          }}
          aria-hidden="true"
        >
          {String(PROJECTS.length).padStart(2, "0")}
        </span>

        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 mb-8 text-xs uppercase tracking-[0.3em]"
            style={{ color: "hsl(0 0% 40%)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/templates/designer-pro"
              className="transition-colors duration-200 hover:text-white"
            >
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "hsl(0 0% 60%)" }}>Work</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-[9rem] font-normal leading-[0.9] tracking-tight mb-6"
            style={{
              fontFamily: "var(--dp-font-display, var(--font-serif, serif))",
              color: "hsl(0 0% 96%)",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            All{" "}
            <em
              className="italic"
              style={{
                background: "linear-gradient(90deg, #89AACC, #4E85BF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Work
            </em>
          </motion.h1>

          {/* Meta row */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <p className="text-sm max-w-md" style={{ color: "hsl(0 0% 53%)" }}>
              A full archive of selected projects — from concept to launch,
              spanning motion, brand, and digital experience.
            </p>
            <span
              className="text-xs uppercase tracking-[0.3em] flex-shrink-0"
              style={{ color: "hsl(0 0% 35%)" }}
            >
              {PROJECTS.length.toString().padStart(2, "0")} projects · 2024 — 2026
            </span>
          </motion.div>
        </div>
      </header>

      {/* ── Filter bar ── */}
      <div
        className="sticky top-0 z-40 border-b"
        style={{
          backgroundColor: "hsl(0 0% 4% / 0.9)",
          borderColor: "hsl(0 0% 10%)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-1 py-3">
          <span
            className="text-[10px] uppercase tracking-[0.3em] mr-4 flex-shrink-0"
            style={{ color: "hsl(0 0% 35%)" }}
          >
            Filter
          </span>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="relative rounded-full text-xs px-4 py-1.5 transition-colors duration-200"
              style={{
                color: active === f ? "hsl(0 0% 96%)" : "hsl(0 0% 50%)",
                backgroundColor:
                  active === f ? "hsl(0 0% 12%)" : "transparent",
              }}
            >
              {f}
              {active === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "hsl(0 0% 12%)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          ))}
          <span
            className="ml-auto text-[10px] uppercase tracking-[0.3em]"
            style={{ color: "hsl(0 0% 30%)" }}
          >
            {filtered.length.toString().padStart(2, "0")} results
          </span>
        </div>
      </div>

      {/* ── Projects grid ── */}
      <main
        className="max-w-[1200px] mx-auto px-6 py-16 md:py-20"
        style={{ backgroundColor: "hsl(0 0% 4%)" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.65,
        delay: index * 0.09,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden rounded-2xl mb-5"
        style={{
          aspectRatio: "16 / 10",
          border: "1px solid hsl(0 0% 10%)",
        }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Halftone */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-end p-5"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: "rgba(5,5,5,0.72)" }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
            style={{ backgroundColor: "white", color: "black" }}
          >
            View project{" "}
            <span
              className="italic"
              style={{
                fontFamily:
                  "var(--dp-font-display, var(--font-serif, serif))",
              }}
            >
              →
            </span>
          </div>
        </motion.div>

        {/* Category badge */}
        <span
          className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.25em] rounded-full px-3 py-1"
          style={{
            backgroundColor: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(8px)",
            color: "hsl(0 0% 65%)",
            border: "1px solid hsl(0 0% 18%)",
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <span
              className="text-[10px] font-mono"
              style={{ color: "hsl(0 0% 35%)" }}
            >
              {project.id}
            </span>
            <div
              className="w-4 h-px"
              style={{ backgroundColor: "hsl(0 0% 18%)" }}
            />
            <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "hsl(0 0% 35%)" }}>
              {project.client}
            </span>
          </div>
          <h2
            className="text-xl md:text-2xl font-normal mb-2 transition-colors duration-300"
            style={{
              fontFamily:
                "var(--dp-font-display, var(--font-serif, serif))",
              color: hovered ? "hsl(0 0% 96%)" : "hsl(0 0% 85%)",
            }}
          >
            {project.title}
          </h2>
          <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "hsl(0 0% 45%)" }}>
            {project.description}
          </p>
        </div>
        <span
          className="flex-shrink-0 text-xs uppercase tracking-[0.2em] pt-1"
          style={{ color: "hsl(0 0% 30%)" }}
        >
          {project.year}
        </span>
      </div>
    </motion.article>
  );
}
