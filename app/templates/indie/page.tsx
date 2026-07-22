import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://myportfoliowebsite.com/templates/indie",
  },
};

export default function Page() {
  return <PageClient />;
}