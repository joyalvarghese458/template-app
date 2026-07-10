import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import Grain from "./_components/Grain";
import ProgressRail from "./_components/ProgressRail";
import Mark from "./_components/Mark";
import FloatingBook from "./_components/FloatingBook";
import Intro from "./_components/Intro";
import Reel from "./_components/Reel";
import Credits from "./_components/Credits";
import Frequencies from "./_components/Frequencies";
import Sessions from "./_components/Sessions";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Sound Designer & Composer`,
  description:
    "Independent sound design and composition portfolio — reel, credits, and tools for film, games, and advertising.",
  openGraph: {
    title: `${OWNER.name} — Sound Designer & Composer`,
    description:
      "Independent sound design and composition portfolio — reel, credits, and tools for film, games, and advertising.",
    type: "website",
  },
};

export default function WavelengthPage() {
  return (
    <div className={theme.root}>
      <Grain />
      <ProgressRail />
      <Mark />
      <FloatingBook />

      <main>
        <Intro />
        <Reel />
        <Credits />
        <Frequencies />
        <Sessions />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
