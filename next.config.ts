import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent your site from being embedded in an iframe (clickjacking protection)
  { key: "X-Frame-Options", value: "DENY" },
  // Stop browsers from guessing file types (MIME sniffing attacks)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Only send the origin (not full URL) in the Referer header when leaving your site
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable access to camera, mic, and location for all origins
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Force HTTPS for 1 year once visited (production only — ignored on HTTP)
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  // Block XSS in older browsers and restrict inline scripts
  { key: "X-XSS-Protection", value: "1; mode=block" },
];

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
