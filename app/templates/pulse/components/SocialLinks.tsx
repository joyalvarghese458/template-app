import Link from "next/link";

import type { PulseLink } from "../types";

type SocialLinksProps = {
  links: PulseLink[];
};

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {links.map((link) => (
        <Link
          key={`${link.label}-${link.href}`}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
