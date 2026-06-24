import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import ClientStrip from "./_components/ClientStrip";
import About from "./_components/About";
import Roadmap from "./_components/Roadmap";
import CaseStudies from "./_components/CaseStudies";
import Impact from "./_components/Impact";
import Globe from "./_components/Globe";
import Gallery from "./_components/Gallery";
import Experience from "./_components/Experience";
import Competencies from "./_components/Competencies";
import Certifications from "./_components/Certifications";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Strategic Business Consultant`,
  description:
    "Business strategy and advisory portfolio — growth strategy, M&A advisory, and operating model redesign with measurable results.",
  openGraph: {
    title: `${OWNER.name} — Strategic Business Consultant`,
    description:
      "Business strategy and advisory portfolio — growth strategy, M&A advisory, and operating model redesign with measurable results.",
    type: "website",
  },
};

export default function AtlasPage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <ClientStrip />
          <About />
          <Roadmap />
          <CaseStudies />
          <Impact />
          <Globe />
          <Gallery />
          <Experience />
          <Competencies />
          <Certifications />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
