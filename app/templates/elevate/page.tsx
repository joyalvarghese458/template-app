import type { Metadata } from "next";

import ElevateTemplate from "./ElevateTemplate";
import { trainer } from "./data/trainer";

export const metadata: Metadata = {
  title: `${trainer.name} | Elevate`,
  description: `${trainer.title} in ${trainer.location}. ${trainer.tagline}`,
  openGraph: {
    title: `${trainer.name} | Elevate`,
    description: `${trainer.title} in ${trainer.location}. ${trainer.tagline}`,
    type: "website",
  },
};

export default function ElevatePage() {
  return <ElevateTemplate />;
}
