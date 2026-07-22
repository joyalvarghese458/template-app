import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import GrainOverlay from "./_components/GrainOverlay";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import PressStrip from "./_components/PressStrip";
import About from "./_components/About";
import Process from "./_components/Process";
import Movement from "./_components/Movement";
import Timepieces from "./_components/Timepieces";
import Impact from "./_components/Impact";
import Craft from "./_components/Craft";
import Gallery from "./_components/Gallery";
import Experience from "./_components/Experience";
import Awards from "./_components/Awards";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://myportfoliowebsite.com/templates/escapement",
  },
  title: `${OWNER.name} — Independent Watchmaker`,
  description:
    "Independent watchmaker portfolio — bespoke mechanical timepieces, complications, and restorations, hand-built and hand-finished at Atelier Voss in Le Locle, Switzerland.",
  openGraph: {
    title: `${OWNER.name} — Independent Watchmaker`,
    description:
      "Independent watchmaker portfolio — bespoke mechanical timepieces, complications, and restorations, hand-built and hand-finished at Atelier Voss in Le Locle, Switzerland.",
    type: "website",
  },
};

export default function EscapementPage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <GrainOverlay />
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <PressStrip />
          <About />
          <Process />
          <Movement />
          <Timepieces />
          <Impact />
          <Craft />
          <Gallery />
          <Experience />
          <Awards />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
