import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import Experience from "./_components/Experience";
import Certifications from "./_components/Certifications";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Data Science & Analytics Student Portfolio`,
  description: `${OWNER.name}'s personal portfolio showcasing predictive modeling, deep learning, and interactive datasets.`,
  openGraph: {
    title: `${OWNER.name} — Data Science & Analytics Student Portfolio`,
    description: `${OWNER.name}'s personal portfolio showcasing predictive modeling, deep learning, and interactive datasets.`,
    type: "website",
  },
};

export default function DataLabPage() {
  return (
    <div className={theme.root}>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
