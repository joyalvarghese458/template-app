export default function EchelonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Domine:wght@500;600;700&family=Karla:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
}
