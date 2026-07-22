import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import GrainOverlay from "./_components/GrainOverlay";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import PressStrip from "./_components/PressStrip";
import About from "./_components/About";
import Process from "./_components/Process";
import TheKiln from "./_components/TheKiln";
import Collection from "./_components/Collection";
import Impact from "./_components/Impact";
import Craft from "./_components/Craft";
import Gallery from "./_components/Gallery";
import Experience from "./_components/Experience";
import Awards from "./_components/Awards";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/kiln");

export default function KilnPage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <GrainOverlay />
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <PressStrip />
          <About />
          <Process />
          <TheKiln />
          <Collection />
          <Impact />
          <Craft />
          <Gallery />
          <Experience />
          <Awards />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
