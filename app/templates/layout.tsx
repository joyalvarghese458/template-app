import Navbar from "@/components/Navbar";
import BackToTemplates from "./_components/BackToTemplates";

export default function TemplatesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <BackToTemplates />
      {children}
    </>
  );
}
