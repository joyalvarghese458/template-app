import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import ToolStrip from "./_components/ToolStrip";
import About from "./_components/About";
import Work from "./_components/Work";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import Certifications from "./_components/Certifications";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Civil Engineer, P.E.`,
  description:
    "Civil and structural engineering portfolio — bridges, foundations, site development, and licensed P.E. project work.",
  openGraph: {
    title: `${OWNER.name} — Civil Engineer, P.E.`,
    description:
      "Civil and structural engineering portfolio — bridges, foundations, site development, and licensed P.E. project work.",
    type: "website",
  },
};

export default function StrataPage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <ToolStrip />
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
