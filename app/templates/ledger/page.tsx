import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import ToolStrip from "./_components/ToolStrip";
import About from "./_components/About";
import Process from "./_components/Process";
import CaseStudies from "./_components/CaseStudies";
import StatementShowcase from "./_components/StatementShowcase";
import Impact from "./_components/Impact";
import Gallery from "./_components/Gallery";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import Certifications from "./_components/Certifications";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Certified Public Accountant`,
  description:
    "Accountant portfolio — tax strategy, bookkeeping & reconciliation, financial reporting, and audit-ready advisory for startups and family businesses.",
  openGraph: {
    title: `${OWNER.name} — Certified Public Accountant`,
    description:
      "Accountant portfolio — tax strategy, bookkeeping & reconciliation, financial reporting, and audit-ready advisory for startups and family businesses.",
    type: "website",
  },
};

export default function LedgerPage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <ToolStrip />
          <About />
          <Process />
          <CaseStudies />
          <StatementShowcase />
          <Impact />
          <Gallery />
          <Experience />
          <Skills />
          <Certifications />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
