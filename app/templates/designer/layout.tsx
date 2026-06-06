import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designer – Portfolio Template",
  description: "A warm, editorial single-page portfolio template for UI/UX and brand designers.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
