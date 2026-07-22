import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import ToolStrip from "./_components/ToolStrip";
import About from "./_components/About";
import Process from "./_components/Process";
import AbyssDescent from "./_components/AbyssDescent";
import Projects from "./_components/Projects";
import Gallery from "./_components/Gallery";
import Skills from "./_components/Skills";
import Experience from "./_components/Experience";
import Certifications from "./_components/Certifications";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/marea");

export default function MareaPage() {
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
          <AbyssDescent />
          <Projects />
          <Gallery />
          <Skills />
          <Experience />
          <Certifications />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
