import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import SiteIndex from "./_components/SiteIndex";
import Ethos from "./_components/Ethos";
import LayerStack from "./_components/LayerStack";
import Process from "./_components/Process";
import Projects from "./_components/Projects";
import GrowthRings from "./_components/GrowthRings";
import Experience from "./_components/Experience";
import Credentials from "./_components/Credentials";
import Recognition from "./_components/Recognition";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://myportfoliowebsite.com/templates/contour",
  },
  title: `${OWNER.name} — Landscape Architect`,
  description:
    "Landscape architecture portfolio — stormwater-led public parks, campus grounds, and ecological restoration, from site analysis through construction administration.",
  openGraph: {
    title: `${OWNER.name} — Landscape Architect`,
    description:
      "Landscape architecture portfolio — stormwater-led public parks, campus grounds, and ecological restoration.",
    type: "website",
  },
};

export default function ContourPage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <SiteIndex />
          <Ethos />
          <LayerStack />
          <Process />
          <Projects />
          <GrowthRings />
          <Experience />
          <Credentials />
          <Recognition />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
