"use client";

import { useId, useState } from "react";
import { PROJECTS, type Project } from "@/lib/content";

const types = [...new Set(PROJECTS.map((project) => project.type))];
const industries = [...new Set(PROJECTS.map((project) => project.industry))];

function ProjectFilter<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: T[];
  value: T | "";
  onChange: (value: T | "") => void;
}) {
  const id = useId();
  return (
    <div className="grid min-w-0 gap-1 font-display text-sm text-muted">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(options.find((option) => option === event.target.value) ?? "")}
        className="min-h-11 w-full cursor-pointer rounded-md border border-rule bg-surface px-3 text-foreground hover:border-muted/50 sm:w-44"
      >
        <option value="">All</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <details className="group">
      <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-2 py-5 hover:bg-surface/50 sm:grid-cols-[minmax(0,1fr)_10rem_auto] sm:gap-x-6 [&::-webkit-details-marker]:hidden">
        <span className="block">
          <span className="block font-display text-xl leading-tight font-semibold">{project.title}</span>
          <span className="mt-1 block max-w-[32rem] leading-snug text-muted">{project.outcome}</span>
        </span>
        <span className="col-start-1 row-start-2 grid gap-0.5 font-display text-sm leading-snug sm:col-start-2 sm:row-start-1">
          <span className="font-medium tabular-nums text-foreground">{project.highlight}</span>
          <span className="text-muted">{project.type} · {project.industry}</span>
        </span>
        <span aria-hidden="true" className="col-start-2 row-start-1 grid size-6 place-items-center text-xl leading-none text-muted group-hover:text-foreground sm:col-start-3">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>
      </summary>
      <div className="max-w-[36rem] space-y-3 pb-5 text-base">
        <p className="font-display text-sm text-muted">{project.context}</p>
        <p>{project.summary}</p>
        {project.details && (
          <ul className="list-disc space-y-1 pl-5 text-muted">
            {project.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        )}
        {project.stack && <p className="font-display text-sm text-muted">{project.stack.join(" · ")}</p>}
      </div>
    </details>
  );
}

export function ProjectGallery() {
  const [type, setType] = useState<Project["type"] | "">("");
  const [industry, setIndustry] = useState<Project["industry"] | "">("");
  const projects = PROJECTS.filter((project) =>
    (!type || project.type === type) && (!industry || project.industry === industry),
  );

  function clearFilters() {
    setType("");
    setIndustry("");
  }

  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-4 border-t border-rule py-10 md:py-14">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <div className="grid gap-4 sm:flex sm:flex-wrap sm:items-end sm:justify-between">
          <h2 id="work-title" className="font-display text-3xl font-semibold tracking-tight">AI projects</h2>
          <div className="grid grid-cols-2 gap-3">
            <ProjectFilter label="Project type" options={types} value={type} onChange={setType} />
            <ProjectFilter label="Industry" options={industries} value={industry} onChange={setIndustry} />
          </div>
        </div>
        <p role="status" className="sr-only">
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </p>
        {projects.length > 0 ? (
          <ul className="mt-5 divide-y divide-rule border-y border-rule">
            {projects.map((project) => (
              <li key={project.title} className="sm:grid sm:grid-cols-[minmax(0,1fr)_6.5rem] sm:gap-4">
                <ProjectRow project={project} />
                {project.links && (
                  <div className="flex flex-wrap gap-3 pb-4 font-display text-sm text-muted sm:flex-col sm:items-end sm:pt-5">
                    {project.links.map((link) => (
                      <a key={link.url} href={link.url} className="underline decoration-muted/50 underline-offset-4 hover:text-foreground hover:decoration-accent">
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-5 border-y border-rule py-5">
            <p>No projects match both filters.</p>
            <button type="button" onClick={clearFilters} className="mt-2 min-h-11 rounded-md border border-rule px-4 font-display text-sm font-semibold hover:bg-surface">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
