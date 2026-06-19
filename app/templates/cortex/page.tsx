import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import StackStrip from "./_components/StackStrip";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import Certifications from "./_components/Certifications";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Senior Data Scientist`,
  description:
    "Senior data scientist building production machine learning systems — forecasting, NLP, and fraud detection at scale.",
  openGraph: {
    title: `${OWNER.name} — Senior Data Scientist`,
    description:
      "Senior data scientist building production machine learning systems — forecasting, NLP, and fraud detection at scale.",
    type: "website",
  },
};

export default function CortexPage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <StackStrip />
          <About />
          <Projects />
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
