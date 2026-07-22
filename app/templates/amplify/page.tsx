import type { Metadata } from "next";

import AmplifyTemplate from "./AmplifyTemplate";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/amplify");

export default function AmplifyPage() {
  return <AmplifyTemplate />;
}
