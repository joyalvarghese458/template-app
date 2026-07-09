import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import SectorStrip from "./_components/SectorStrip";
import Manifesto from "./_components/Manifesto";
import Method from "./_components/Method";
import Engagements from "./_components/Engagements";
import Dashboard from "./_components/Dashboard";
import Experience from "./_components/Experience";
import Credentials from "./_components/Credentials";
import Featured from "./_components/Featured";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Management Consultant`,
  description:
    "Independent management consulting portfolio — strategy, operating model, and governance engagements for founders and executive teams, with a proprietary four-stage operating method.",
  openGraph: {
    title: `${OWNER.name} — Management Consultant`,
    description:
      "Independent management consulting portfolio — strategy, operating model, and governance engagements for founders and executive teams.",
    type: "website",
  },
};

export default function VantagePage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <SectorStrip />
          <Manifesto />
          <Method />
          <Engagements />
          <Dashboard />
          <Experience />
          <Credentials />
          <Featured />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
