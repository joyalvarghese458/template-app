import type { Metadata } from "next";
import {
  ClosingBanner,
  FaqSection,
  NotesSection,
  ProcessSection,
  ServicesSection,
} from "../blocks";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://myportfoliowebsite.com/templates/minimalist/services",
  },
  title: "Minimalist - Services",
};

export default function MinimalistServicesPage() {
  return (
    <>
      <ServicesSection />
      <ProcessSection />
      <NotesSection />
      <FaqSection />
      <ClosingBanner />
    </>
  );
}
