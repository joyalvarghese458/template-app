import Image from "next/image";
import Link from "next/link";

import SectionHeading from "../components/SectionHeading";
import type { CrispProject } from "../types";

type ProjectsSectionProps = {
  projects: CrispProject[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:p-8">
      <SectionHeading
        eyebrow="04"
        title="Projects"
        description="Selected work that supports the resume without overwhelming it."
      />
      <div className="mt-6 grid gap-5 xl:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
          >
            <div className="border-b border-slate-200">
              <Image
                src={project.thumbnail}
                alt={`${project.name} preview`}
                width={960}
                height={600}
                unoptimized
                className="aspect-[16/10] h-auto w-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-950">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {project.links.map((link) => (
                  <Link
                    key={`${project.name}-${link.label}`}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-300 px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
