import Link from "next/link";

import type { CrispLink } from "../types";

type LinkRowProps = {
  links: CrispLink[];
};

export default function LinkRow({ links }: LinkRowProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <Link
          key={`${link.label}-${link.href}`}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50/70 px-3.5 py-2 text-sm font-medium text-sky-900 transition hover:border-sky-300 hover:bg-sky-100/70"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
