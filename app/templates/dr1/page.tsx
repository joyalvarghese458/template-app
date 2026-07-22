import { permanentRedirect } from "next/navigation";

export default function LegacySwiftRedirectPage() {
  permanentRedirect("/templates/swift");
}
