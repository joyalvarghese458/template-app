import Link from "next/link";

export default function TemplatesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Link
        href="/#templates"
        aria-label="Back to templates"
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          zIndex: 100,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 16px 10px 12px",
          background: "rgba(255, 255, 255, 0.78)",
          backdropFilter: "saturate(180%) blur(14px)",
          WebkitBackdropFilter: "saturate(180%) blur(14px)",
          border: "1px solid rgba(10, 10, 10, 0.08)",
          borderRadius: 999,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.02em",
          color: "#0a0a0a",
          textDecoration: "none",
          boxShadow: "0 4px 16px -4px rgba(0, 0, 0, 0.12)",
          transition: "transform 0.2s ease, background 0.2s ease",
        }}
        className="template-back-btn"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        Back to templates
      </Link>

      <style>{`
        .template-back-btn:hover {
          background: rgba(255, 255, 255, 0.95) !important;
          transform: translateX(-2px);
        }
        @media (max-width: 520px) {
          .template-back-btn {
            bottom: 12px !important;
            left: 12px !important;
            padding: 8px 14px 8px 10px !important;
            font-size: 12px !important;
          }
        }
      `}</style>

      {children}
    </>
  );
}
