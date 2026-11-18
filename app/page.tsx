import {
  CONTACT,
  EXPERIENCE,
  HERO,
  OTHER,
  SITE,
  type Link,
} from "@/lib/content";

import { ProjectGallery } from "./project-gallery";
import Image from "next/image";

const wrap = "mx-auto w-full max-w-5xl px-6 md:px-10";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-4 border-t border-rule py-14 md:py-20"
    >
      <div className={`${wrap} grid gap-8 md:grid-cols-12`}>
        <h2
          id={`${id}-title`}
          className="font-display text-2xl font-bold tracking-tight md:col-span-3"
        >
          {title}
        </h2>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}

function ExtLink({ link }: { link: Link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground underline decoration-muted/50 underline-offset-4 hover:decoration-accent"
    >
      {link.label}
    </a>
  );
}

export default function Home() {
  const links = [
    { label: "LinkedIn", url: CONTACT.linkedin },
    { label: "GitHub", url: CONTACT.github },
  ].filter((l) => l.url);

  return (
    <>
      {SITE.draft && (
        <p className="bg-accent px-6 py-2 text-center font-display text-sm font-medium text-on-accent">
          Draft. Items marked TODO in lib/content.ts need your review.
        </p>
      )}

      <header
        className={`${wrap} flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-6`}
      >
        <a href="#top" className="font-display text-lg font-bold">
          {SITE.name}
        </a>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 font-display text-[0.9375rem] font-medium sm:gap-8 sm:text-base">
            {[
              ["Work", "#work"],
              ["Experience", "#experience"],
              ["Other", "#other"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a className="hover:text-accent" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="flex-1">
        <section className={`${wrap} pb-12 pt-8 md:pb-16 md:pt-14`}>
          <h1 className="max-w-4xl font-display text-[clamp(2.5rem,6.4vw,4.75rem)] font-bold leading-[1.03] tracking-[-0.035em] text-balance">
            {HERO.headline}
          </h1>
          <div className="mt-6 grid items-start gap-6 sm:grid-cols-[minmax(0,1fr)_9rem] md:grid-cols-[minmax(0,1fr)_11rem]">
            <div className="max-w-[38rem] space-y-4 text-xl text-muted">
              <p>{HERO.intro}</p>
              <p>{HERO.followup}</p>
            </div>
            <div className="portrait-frame row-start-1 w-28 sm:col-start-2 sm:w-36 md:w-44">
              <Image src="/david-lewis.png" alt="David Lewis" width={800} height={800} priority className="relative z-10 aspect-square w-full rounded-full object-cover" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 font-display font-semibold">
            <a
              href="#work"
              className="rounded-md border border-accent/35 bg-accent/10 px-5 py-2 text-accent hover:bg-accent/15"
            >
              Explore projects
            </a>
            <a
              href="#contact"
              className="rounded-md px-4 py-2 text-muted hover:bg-surface hover:text-foreground"
            >
              Get in touch
            </a>
          </div>
          <ul aria-label="Professional profiles" className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-display text-sm">
            {links.map((link) => <li key={link.url}><ExtLink link={link} /></li>)}
          </ul>
        </section>

        <ProjectGallery />

        <Section id="experience" title="Experience">
          <ol className="career-timeline">
            {EXPERIENCE.map((r) => (
              <li
                key={r.org}
                className="career-role grid gap-1 pb-7 pl-6 last:pb-0 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4"
              >
                <p className="font-display text-sm font-medium tabular-nums text-muted sm:pt-0.5">
                  {r.years}
                </p>
                <div>
                  <h3 className="font-display text-lg leading-snug font-semibold">{r.org}</h3>
                  {r.title && <p className="font-display text-sm text-muted">{r.title}</p>}
                  <details className="mt-1 text-muted">
                    <summary className="w-fit cursor-pointer font-display text-sm hover:text-accent">Role highlights</summary>
                    <p className="mt-2 max-w-[36rem]">{r.note}</p>
                  </details>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="other" title="Other">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-display">
            <h3 className="text-xl font-bold">{OTHER.title}</h3>
            <span className="text-sm"><ExtLink link={OTHER.link} /></span>
          </div>
          <p className="mt-1 text-muted">{OTHER.summary}</p>
          <p className="mt-2 font-display text-sm"><ExtLink link={OTHER.source} /></p>
          <a href={OTHER.link.url} className="mt-4 block max-w-xl">
            <Image src="/projects/occidental.png" alt="Occidental Studio website featuring its Seattle loft and direct booking options" width={1440} height={1000} className="h-auto w-full rounded-md border border-rule" />
          </a>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-[34rem] text-xl">{CONTACT.blurb}</p>
          <p className="mt-6">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-block max-w-full break-words font-display text-base font-semibold text-foreground underline decoration-muted/50 underline-offset-4 hover:decoration-accent"
            >
              {CONTACT.email}
            </a>
          </p>
          {CONTACT.resume && (
            <p className="mt-4">
              <ExtLink link={{ label: "Resume (PDF)", url: CONTACT.resume }} />
            </p>
          )}
        </Section>
      </main>

      <footer className="border-t border-rule py-8">
        <p className={`${wrap} text-base text-muted`}>
          © {SITE.year} {SITE.name}
        </p>
      </footer>
    </>
  );
}
