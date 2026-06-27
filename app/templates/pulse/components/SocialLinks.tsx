import Link from "next/link";

import type { PulseLink } from "../types";

type SocialLinksProps = {
  links: PulseLink[];
  tone?: "light" | "dark";
};

export default function SocialLinks({ links, tone = "light" }: SocialLinksProps) {
  const linkClassName =
    tone === "dark"
      ? "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-medium text-slate-200 transition hover:border-amber-300/40 hover:bg-white/10"
      : "inline-flex items-center rounded-full border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50";

  return (
    <div className="flex flex-wrap gap-2.5">
      {links.map((link) => (
        <Link
          key={`${link.label}-${link.href}`}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={linkClassName}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
