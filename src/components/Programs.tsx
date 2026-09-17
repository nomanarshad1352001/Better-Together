import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PROGRAMS } from "../lib/data";
import { ButtonGhost, Eyebrow, FadeIn, Star4 } from "./ui";

export function ProgramsCards() {
  return (
    <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
      {PROGRAMS.map((p, i) => (
        <FadeIn key={p.n} delay={0.08 * i} className="h-full">
          <article className="group flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-ink/10 bg-cream shadow-[0_14px_40px_rgba(39,16,46,0.07)] transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_34px_70px_rgba(39,16,46,0.18)]">
            {/* arch portrait header */}
            <div className="relative bg-plum px-6 pb-0 pt-8">
              <Star4 className="absolute right-5 top-5 h-4 w-4 text-gold/70 transition-transform duration-700 group-hover:rotate-90" />
              <span className="font-display text-xl font-semibold italic text-gold-soft/90">{p.n}</span>
              <div className="mt-3 translate-y-4 overflow-hidden rounded-t-full border-[5px] border-gold/70 transition-transform duration-500 group-hover:translate-y-2">
                <img
                  src={p.img.src}
                  alt={p.img.alt}
                  loading="lazy"
                  className="aspect-[4/4.6] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 pt-9">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-plum text-gold">
                  <p.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
              </div>
              <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink/70">{p.copy}</p>

              <p className="mt-5 rounded-xl border border-dashed border-coral-deep/40 bg-coral/5 px-4 py-3 text-[0.8rem] leading-snug">
                <span className="font-extrabold uppercase tracking-[0.14em] text-coral-deep">Built in — </span>
                {p.builtIn}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-ink/5 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-ink/55">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}

export default function ProgramsSection() {
  return (
    <section id="programs" aria-labelledby="programs-title" className="relative overflow-hidden bg-parchment py-24 sm:py-32">
      {/* faint footlights */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coral/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <FadeIn className="max-w-2xl">
            <Eyebrow index="02" label="Programs — launching 2027" />
            <h2 id="programs-title" className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4rem)] font-medium leading-[1.04] tracking-[-0.015em]">
              Four stages. <em className="italic text-coral-deep">Zero barriers.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              From center stage to the lighting booth, there&apos;s a role with every child&apos;s name on it. Each track
              is co-taught by a teaching artist and an inclusion specialist.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="flex flex-col items-start gap-3">
              <ButtonGhost to="/get-involved" dark={false}>
                Join the 2027 interest list
              </ButtonGhost>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-[0.78rem] font-extrabold uppercase tracking-[0.2em] text-coral-deep underline decoration-coral/40 decoration-2 underline-offset-8 transition-colors hover:text-plum"
              >
                Full syllabus &amp; weekly schedule
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="mt-16">
          <ProgramsCards />
        </div>
      </div>
    </section>
  );
}
