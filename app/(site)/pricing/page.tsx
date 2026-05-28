import PricingContent from "./_components/PricingContent";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pricing Plans — Portfolio & Resume Packages",
  description:
    "Choose the right portfolio or resume package for your needs. One-time payment, fast delivery, and revision rounds included. Prices in AED and USD.",
};

export default function PricingPage() {
  return (
    <main className="bg-canvas-bg min-h-screen">
      <PricingContent />
      <Footer />
    </main>
  );
}
