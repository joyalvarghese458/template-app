import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import Grain from "./_components/Grain";
import Deck from "./_components/Deck";
import FloatingCall from "./_components/FloatingCall";
import Horizon from "./_components/Horizon";
import FlightLog from "./_components/FlightLog";
import Routes from "./_components/Routes";
import Ratings from "./_components/Ratings";
import Systems from "./_components/Systems";
import Departures from "./_components/Departures";
import BoardingPass from "./_components/BoardingPass";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://myportfoliowebsite.com/templates/meridian",
  },
  title: `${OWNER.name} — Commercial Airline Pilot`,
  description:
    "B787 captain portfolio — flight log, career route chart, licences & ratings, systems panel, and a boarding-pass contact card.",
  openGraph: {
    title: `${OWNER.name} — Commercial Airline Pilot`,
    description:
      "B787 captain portfolio — flight log, career route chart, licences & ratings, systems panel, and a boarding-pass contact card.",
    type: "website",
  },
};

export default function MeridianPage() {
  return (
    <div className={theme.root}>
      <Grain />
      <Deck />
      <FloatingCall />

      <main>
        <Horizon />
        <FlightLog />
        <Routes />
        <Ratings />
        <Systems />
        <Departures />
        <BoardingPass />
      </main>

      <Footer />
    </div>
  );
}
