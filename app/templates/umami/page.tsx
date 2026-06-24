import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import PressStrip from "./_components/PressStrip";
import About from "./_components/About";
import Process from "./_components/Process";
import Menus from "./_components/Menus";
import Impact from "./_components/Impact";
import Pass from "./_components/Pass";
import Gallery from "./_components/Gallery";
import Experience from "./_components/Experience";
import SpiceRack from "./_components/SpiceRack";
import Credentials from "./_components/Credentials";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Executive Chef & Culinary Director`,
  description:
    "Executive chef portfolio — live-fire tasting menus, restaurant residencies, and a career built on flavor over flash.",
  openGraph: {
    title: `${OWNER.name} — Executive Chef & Culinary Director`,
    description:
      "Executive chef portfolio — live-fire tasting menus, restaurant residencies, and a career built on flavor over flash.",
    type: "website",
  },
};

export default function UmamiPage() {
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
          <Menus />
          <Impact />
          <Pass />
          <Gallery />
          <Experience />
          <SpiceRack />
          <Credentials />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
