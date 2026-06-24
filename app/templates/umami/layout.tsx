export default function UmamiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500&family=Jost:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
}
