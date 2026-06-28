function svgDataUri(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const pulsePortrait = "/sarah.jpg";

export function pulseProjectPreview(
  accent: string,
  title: string,
  subtitle: string,
  chips: string[],
) {
  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 620">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f8fafc" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="960" height="620" rx="30" fill="url(#bg)" />
      <rect x="42" y="42" width="876" height="536" rx="26" fill="rgba(255,255,255,0.82)" stroke="rgba(15,23,42,0.08)" />
      <rect x="80" y="80" width="800" height="18" rx="9" fill="rgba(15,23,42,0.08)" />
      <text x="80" y="210" fill="#0f172a" font-size="56" font-family="Arial, sans-serif" font-weight="700">${title}</text>
      <text x="80" y="254" fill="#334155" font-size="24" font-family="Arial, sans-serif">${subtitle}</text>
      <rect x="80" y="302" width="314" height="132" rx="22" fill="rgba(255,255,255,0.92)" stroke="rgba(15,23,42,0.08)" />
      <rect x="474" y="160" width="320" height="232" rx="30" fill="rgba(255,255,255,0.9)" stroke="rgba(15,23,42,0.08)" />
      <rect x="508" y="200" width="220" height="18" rx="9" fill="rgba(15,23,42,0.12)" />
      <rect x="508" y="236" width="182" height="14" rx="7" fill="rgba(51,65,85,0.12)" />
      <rect x="508" y="270" width="214" height="14" rx="7" fill="rgba(51,65,85,0.12)" />
      ${chips
        .map(
          (chip, index) => `
            <rect x="${80 + index * 152}" y="500" width="128" height="34" rx="17" fill="rgba(255,255,255,0.95)" stroke="rgba(15,23,42,0.08)" />
            <text x="${102 + index * 152}" y="522" fill="#334155" font-size="17" font-family="Arial, sans-serif">${chip}</text>
          `,
        )
        .join("")}
    </svg>
  `);
}
