import type { Metadata } from "next";

import ElevateTemplate from "./ElevateTemplate";
import { trainer } from "./data/trainer";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/elevate");

export default function ElevatePage() {
  return <ElevateTemplate />;
}
