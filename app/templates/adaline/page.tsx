import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import TechStrip from "./_components/TechStrip";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import Process from "./_components/Process";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import SkipLink from "./_components/SkipLink";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Full Stack Developer`,
  description:
    "Full Stack Developer specializing in React, Next.js, NestJS, and enterprise ERP systems. Building thoughtful digital systems that scale.",
  openGraph: {
    title: `${OWNER.name} — Full Stack Developer`,
    description:
      "Full Stack Developer specializing in React, Next.js, NestJS, and enterprise ERP systems.",
    type: "website",
  },
};
export default function AdalinePage() {
  return (
    <div className={theme.root}>
      <SkipLink />
      <Nav />

      <main id="main-content">
        <Hero />
        <TechStrip />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
