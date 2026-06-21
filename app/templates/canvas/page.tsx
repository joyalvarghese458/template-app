import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import StackBand from "./_components/StackBand";
import About from "./_components/About";
import Work from "./_components/Work";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import Certifications from "./_components/Certifications";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — UI/UX & Graphic Designer`,
  description:
    "UI/UX and graphic design portfolio — product design, brand identity, design systems, and motion work.",
  openGraph: {
    title: `${OWNER.name} — UI/UX & Graphic Designer`,
    description:
      "UI/UX and graphic design portfolio — product design, brand identity, design systems, and motion work.",
    type: "website",
  },
};

export default function CanvasPage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <StackBand />
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
