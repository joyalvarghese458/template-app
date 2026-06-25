import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import PressStrip from "./_components/PressStrip";
import About from "./_components/About";
import Pipeline from "./_components/Pipeline";
import Reel from "./_components/Reel";
import Impact from "./_components/Impact";
import Stack from "./_components/Stack";
import Gallery from "./_components/Gallery";
import Experience from "./_components/Experience";
import Timeline from "./_components/Timeline";
import Credentials from "./_components/Credentials";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — 3D Animation & VFX Student`,
  description:
    "Animation & VFX student portfolio — character animation, lighting, compositing, and a full pipeline breakdown reel.",
  openGraph: {
    title: `${OWNER.name} — 3D Animation & VFX Student`,
    description:
      "Animation & VFX student portfolio — character animation, lighting, compositing, and a full pipeline breakdown reel.",
    type: "website",
  },
};

export default function ParallaxPage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <PressStrip />
          <About />
          <Pipeline />
          <Reel />
          <Impact />
          <Stack />
          <Gallery />
          <Experience />
          <Timeline />
          <Credentials />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
