import { permanentRedirect } from "next/navigation";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/x10");

export default function LegacyLumenRedirectPage() {
  permanentRedirect("/templates/coming-soon");
}
