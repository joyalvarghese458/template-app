interface BrandMarkProps {
  /** Square pixel size of the mark */
  size?: number;
  /** Tailwind className passthrough */
  className?: string;
  /** Render with a subtle ring/glow — for splash + loading screens */
  glow?: boolean;
}

/**
 * My Portfolio brand mark (V09).
 * Gradient tile + stylized "M" — pairs with the V01 wordmark in the navbar.
 * Single source of truth: also used by app/icon.svg.
 */
export default function BrandMark({ size = 32, className = "", glow = false }: BrandMarkProps) {
  const id = "itsmf-brand-grad";
  return (
    <span
      className={`inline-grid place-items-center ${className}`}
      style={{
        width: size,
        height: size,
        filter: glow ? "drop-shadow(0 8px 20px rgba(37, 99, 235, 0.45))" : undefined,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill={`url(#${id})`} />
        <path
          d="M16 46 V18 L32 38 L48 18 V46"
          fill="none"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
