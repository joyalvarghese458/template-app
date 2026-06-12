import Image from "next/image";
import Link from "next/link";

import SectionHeading from "../components/SectionHeading";
import type { PulseProject } from "../types";

type ProjectsSectionProps = {
  projects: PulseProject[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.05)] sm:p-8">
      <SectionHeading
        eyebrow="03"
        title="Featured Projects"
        description="Selected work presented with stronger hierarchy and premium restraint."
      />
      <div className="mt-6 grid gap-5 xl:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50"
          >
            <Image
              src={project.coverImage}
              alt={`${project.name} preview`}
              width={960}
              height={620}
              unoptimized
              className="aspect-[16/10] h-auto w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-950">{project.name}</h3>
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
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  Live Link
                </Link>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
