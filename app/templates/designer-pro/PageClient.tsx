"use client";

/*
  Designer Pro — Dark Animated Creative Portfolio Template
  ──────────────────────────────────────────────────────────────────────
  Target audience : Designers · Creatives · Animators · UI/UX Artists

  Tech            : Next.js App Router · TypeScript · Tailwind v4 ·
                    Framer Motion · GSAP + ScrollTrigger · Lenis smooth scroll

  Sections:
    1. Loading Screen  — counter 000→100, rotating words, progress bar
    2. Hero            — HLS video bg, centered content, GSAP entrance
    3. Selected Works  — bento grid with 4 cinematic project cards
    4. Journal         — 4 entries as horizontal pills
    5. Explorations    — GSAP parallax two-column gallery
    6. Stats           — 3 key stats
    7. Footer          — flipped HLS video, GSAP marquee, social links
  ──────────────────────────────────────────────────────────────────────
*/

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "./_hooks/useLenis";
import LoadingScreen from "./_components/LoadingScreen";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Works from "./_components/Works";
import Journal from "./_components/Journal";
import Explorations from "./_components/Explorations";
import Stats from "./_components/Stats";
import Footer from "./_components/Footer";
import styles from "./theme.module.css";

export default function DesignerPro() {
  const [isLoading, setIsLoading] = useState(true);
  useLenis();

  return (
    <div className={styles.page}>
      {/* Loading screen overlays everything until ready */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            key="loading"
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {/* Main content renders immediately (hidden behind loading screen) */}
      <Nav />

      <main>
        {/* 1 · Hero — full-viewport with HLS video background */}
        <Hero ready={!isLoading} />

        {/* 2 · Selected Works — bento grid */}
        <Works />

        {/* 3 · Journal — horizontal pill entries */}
        <Journal />

        {/* 4 · Explorations — GSAP parallax gallery */}
        <Explorations />

        {/* 5 · Stats — 3-column figures */}
        <Stats />
      </main>

      {/* Footer — flipped video + marquee + social links */}
      <Footer />
    </div>
  );
}
