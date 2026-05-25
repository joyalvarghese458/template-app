"use client";

/*
  Indie — Cinematic Motion & VFX Portfolio Template
  ──────────────────────────────────────────────────────────────────────
  Target audience : Motion Designers · 3D Artists · VFX Artists ·
                    CGI Creators · Visual Storytellers · Animation Studios

  Tech            : Next.js App Router · TypeScript · Tailwind v4 ·
                    Framer Motion · GSAP + ScrollTrigger · Lenis smooth scroll

  Customise via   : _data/portfolio.ts   — all editable content lives here
  ──────────────────────────────────────────────────────────────────────
*/

import { useLenis }       from "./_hooks/useLenis";
import GrainOverlay       from "./_components/GrainOverlay";
import ScrollProgress     from "./_components/ScrollProgress";
import CustomCursor       from "./_components/CustomCursor";
import Nav                from "./_components/Nav";
import Hero               from "./_components/Hero";
import Statement          from "./_components/Statement";
import Reel               from "./_components/Reel";
import Work               from "./_components/Work";
import About              from "./_components/About";
import Studio             from "./_components/Studio";
import Contact            from "./_components/Contact";
import Footer             from "./_components/Footer";
import styles             from "./theme.module.css";

export default function IndiePortfolio() {
  useLenis();

  return (
    <div className={styles.page}>
      {/* ── Global overlays */}
      <GrainOverlay />
      <ScrollProgress />
      <CustomCursor />

      {/* ── Navigation */}
      <Nav />

      {/* ── Main content */}
      <main>
        {/* 1 · Hero — cinematic fullscreen with orbital orrery */}
        <Hero />

        {/* 2 · Statement — approach + inline stats */}
        <Statement />

        {/* 3 · Reel — cinemascope showreel frame */}
        <Reel />

        {/* 3 · Work — GSAP horizontal scroll gallery */}
        <Work />

        {/* 4 · About — sticky scrolling storytelling */}
        <About />

        {/* 5 · Studio — services · clients · tools · testimonials */}
        <Studio />

        {/* 6 · Contact — magnetic CTA + form */}
        <Contact />
      </main>

      {/* ── Footer */}
      <Footer />
    </div>
  );
}
