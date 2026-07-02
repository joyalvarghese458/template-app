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
import Filmography from "./_components/Filmography";
import Impact from "./_components/Impact";
import ScreeningRoom from "./_components/ScreeningRoom";
import Gallery from "./_components/Gallery";
import Experience from "./_components/Experience";
import Craft from "./_components/Craft";
import Awards from "./_components/Awards";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Independent Film Director`,
  description:
    "Independent film director portfolio — narrative shorts, documentary, and branded film, with a full filmography, screening room breakdown, and festival record.",
  openGraph: {
    title: `${OWNER.name} — Independent Film Director`,
    description:
      "Independent film director portfolio — narrative shorts, documentary, and branded film, with a full filmography, screening room breakdown, and festival record.",
    type: "website",
  },
};

export default function ReelPage() {
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
          <Filmography />
          <Impact />
          <ScreeningRoom />
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
