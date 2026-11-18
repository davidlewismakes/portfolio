import {
  CONTACT,
  EXPERIENCE,
  HERO,
  OTHER,
  RECOMMENDATIONS,
  SITE,
  type Link,
} from "@/lib/content";

import { ProjectGallery } from "./project-gallery";
import { Recommendation } from "./recommendation";
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
            <div className="row-start-1 w-44 sm:col-start-2 sm:-mt-10 md:-mt-14">
              <div className="portrait-frame mx-auto w-28 sm:w-36 md:w-44">
                <Image src="/david-lewis.png" alt="David Lewis" width={800} height={800} priority className="relative z-10 aspect-square w-full rounded-full object-cover" />
              </div>
              <svg aria-hidden="true" viewBox="0 0 176 44" fill="none" className="block h-11 w-44 text-muted/40">
                <path d="M88 0v12q0 10-10 10H52q-10 0-10 10v12M88 12q0 10 10 10h26q10 0 10 10v12" stroke="currentColor" strokeWidth="1" />
              </svg>
              <ul aria-label="Professional profiles" className="flex justify-between px-5">
                {links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} title={link.label} className="grid size-11 place-items-center rounded-full border border-rule bg-surface text-muted hover:border-accent/50 hover:text-foreground">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="currentColor">
                        {link.label === "LinkedIn" ? (
                          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.85H15.8V14.1c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.73H9.53V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.98 0 3.56 1.96 3.56 4.5v5.27Z" />
                        ) : (
                          <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.15 3.1-1.15.61 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />
                        )}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
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
                  {r.org === "LeanData" && (
                    <div className="mt-4">
                      <Recommendation recommendation={RECOMMENDATIONS.leadership} />
                    </div>
                  )}
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
          <div className="mb-7">
            <Recommendation recommendation={RECOMMENDATIONS.client} />
          </div>
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
