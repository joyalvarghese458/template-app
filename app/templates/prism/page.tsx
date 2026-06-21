import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import ToolBand from "./_components/ToolBand";
import About from "./_components/About";
import Work from "./_components/Work";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import Certifications from "./_components/Certifications";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Senior Product Designer`,
  description:
    "UI/UX and product design portfolio — product design, design systems, prototyping, and case studies.",
  openGraph: {
    title: `${OWNER.name} — Senior Product Designer`,
    description:
      "UI/UX and product design portfolio — product design, design systems, prototyping, and case studies.",
    type: "website",
  },
};

export default function PrismPage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <ToolBand />
          <About />
          <Work />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
