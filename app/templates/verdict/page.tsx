import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import PracticeStrip from "./_components/PracticeStrip";
import Brief from "./_components/Brief";
import Process from "./_components/Process";
import Matters from "./_components/Matters";
import Docket from "./_components/Docket";
import Experience from "./_components/Experience";
import Credentials from "./_components/Credentials";
import Recognition from "./_components/Recognition";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Corporate & Commercial Litigation Counsel`,
  description:
    "Independent litigation and corporate counsel portfolio — notable matters, practice areas, and case record for founders, family businesses, and enterprises across the UAE and GCC.",
  openGraph: {
    title: `${OWNER.name} — Corporate & Commercial Litigation Counsel`,
    description:
      "Independent litigation and corporate counsel portfolio — notable matters, practice areas, and case record across the UAE and GCC.",
    type: "website",
  },
};

export default function VerdictPage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <PracticeStrip />
          <Brief />
          <Process />
          <Matters />
          <Docket />
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
