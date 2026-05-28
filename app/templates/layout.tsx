import BackToTemplates from "./_components/BackToTemplates";
import PageTransition from "@/components/PageTransition";

export default function TemplatesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BackToTemplates />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
