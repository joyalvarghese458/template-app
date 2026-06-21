import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import ToolTicker from "./_components/ToolTicker";
import About from "./_components/About";
import Operations from "./_components/Operations";
import Experience from "./_components/Experience";
import Arsenal from "./_components/Arsenal";
import Certifications from "./_components/Certifications";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Cybersecurity Student`,
  description:
    "Cybersecurity student specializing in offensive security, CTFs, and SOC operations — penetration testing, threat hunting, and vulnerability research.",
  openGraph: {
    title: `${OWNER.name} — Cybersecurity Student`,
    description:
      "Cybersecurity student specializing in offensive security, CTFs, and SOC operations — penetration testing, threat hunting, and vulnerability research.",
    type: "website",
  },
};

export default function CipherPage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <ToolTicker />
          <About />
          <Operations />
          <Experience />
          <Arsenal />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
