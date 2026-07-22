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
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/wavelength");

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
