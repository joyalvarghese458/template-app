import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import PressStrip from "./_components/PressStrip";
import About from "./_components/About";
import Process from "./_components/Process";
import Fragrances from "./_components/Fragrances";
import Impact from "./_components/Impact";
import TheAccord from "./_components/TheAccord";
import Gallery from "./_components/Gallery";
import Experience from "./_components/Experience";
import Craft from "./_components/Craft";
import Awards from "./_components/Awards";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Independent Perfumer`,
  description:
    "Independent perfumer portfolio — small-batch eau de parfums, bespoke commissions, and a full fragrance collection from Atelier Rousseau in Grasse.",
  openGraph: {
    title: `${OWNER.name} — Independent Perfumer`,
    description:
      "Independent perfumer portfolio — small-batch eau de parfums, bespoke commissions, and a full fragrance collection from Atelier Rousseau in Grasse.",
    type: "website",
  },
};

export default function SillagePage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <PressStrip />
          <About />
          <Process />
          <Fragrances />
          <Impact />
          <TheAccord />
          <Gallery />
          <Experience />
          <Craft />
          <Awards />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
