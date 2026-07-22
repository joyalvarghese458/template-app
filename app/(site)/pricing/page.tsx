import PricingContent from "./_components/PricingContent";
import Footer from "@/components/Footer";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/pricing");

export default function PricingPage() {
  return (
    <main className="bg-canvas-bg min-h-screen">
      <PricingContent />
      <Footer />
    </main>
  );
}
