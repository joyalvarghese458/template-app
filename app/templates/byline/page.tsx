import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import PublicationStrip from "./_components/PublicationStrip";
import About from "./_components/About";
import Stories from "./_components/Stories";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import Awards from "./_components/Awards";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Investigative Journalist`,
  description:
    "Investigative journalist covering policy, public records, and government accountability — stories that move legislatures and courts.",
  openGraph: {
    title: `${OWNER.name} — Investigative Journalist`,
    description:
      "Investigative journalist covering policy, public records, and government accountability — stories that move legislatures and courts.",
    type: "website",
  },
};

export default function BylinePage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <PublicationStrip />
          <About />
          <Stories />
          <Experience />
          <Skills />
          <Awards />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
