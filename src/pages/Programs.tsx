import { CalendarDays, Check, Clock3 } from "lucide-react";
import Accordion from "../components/Accordion";
import CTABand from "../components/CTABand";
import PageHero from "../components/PageHero";
import PageShell from "../components/PageShell";
import { ProgramsCards } from "../components/Programs";
import { FAQS, IMG, PROGRAMS, PROGRAM_DETAILS, WEEK_SCHEDULE } from "../lib/data";
import { ButtonGold, Eyebrow, FadeIn, Star4 } from "../components/ui";

export default function ProgramsPage() {
  return (
    <PageShell title="Programs">
      <PageHero
        index="02"
        label="Programs"
        title={
          <>
            Four stages. <em className="italic text-coral-deep">Zero barriers.</em>
          </>
        }
        copy="Weekly classes in theatre, dance, music and stagecraft — every track co-taught by a teaching artist and an inclusion specialist, with supports woven in from the first rehearsal."
        main={IMG.stageRehearsal}
        small={IMG.dance}
        chips={["Launching Feb 2027", "Ages 4–14", "No auditions", "Sliding-scale tuition"]}
      />

      {/* ——— Overview grid ——— */}
      <section className="bg-cream pt-6 pb-24" aria-label="The four tracks">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ProgramsCards />
        </div>
      </section>

      {/* ——— Deep dives ——— */}
      <section className="bg-parchment py-24 sm:py-28" aria-label="Program details">
        <div className="mx-auto max-w-7xl space-y-24 px-5 sm:px-8">
          {PROGRAMS.map((p, i) => {
            const d = PROGRAM_DETAILS.find((x) => x.n === p.n)!;
            const flip = i % 2 === 1;
            return (
              <article key={p.n} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {/* image */}
                <FadeIn className={flip ? "lg:order-2" : ""}>
                  <div className="relative">
                    <div aria-hidden="true" className={`absolute -inset-3 ${flip ? "-rotate-2" : "rotate-2"} rounded-[2.4rem] bg-plum/10`} />
                    <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 shadow-[0_28px_65px_rgba(39,16,46,0.16)]">
                      <img src={p.img.src} alt={p.img.alt} loading="lazy" className="aspect-[8/6.4] w-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
                      <span className="absolute left-5 top-5 rounded-full bg-plum-deep/85 px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-gold backdrop-blur">
                        Track {p.n} · {p.title.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                </FadeIn>

                {/* copy */}
                <div className={flip ? "lg:order-1" : ""}>
                  <FadeIn>
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-plum text-gold">
                        <p.icon className="h-5.5 w-5.5" aria-hidden="true" />
                      </span>
                      <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.28em] text-coral-deep">Track {p.n}</p>
                    </div>
                    <h3 className="mt-4 font-display text-[clamp(1.9rem,3.2vw,2.8rem)] font-semibold leading-tight tracking-tight">
                      {p.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {d.meta.map((m) => (
                        <span key={m} className="rounded-full border border-plum/15 bg-white/60 px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-plum">
                          {m}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-[1.02rem] leading-relaxed text-ink/75">{d.long}</p>
                  </FadeIn>
                  <FadeIn delay={0.12}>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2" role="list">
                      {d.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2.5 text-[0.9rem] font-bold text-ink/75">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                            <Check className="h-3 w-3" aria-hidden="true" strokeWidth={3.5} />
                          </span>
                          {inc}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <ButtonGold to="/get-involved">Save my child&apos;s spot</ButtonGold>
                    </div>
                  </FadeIn>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ——— Weekly rhythm ——— */}
      <section className="relative overflow-hidden bg-plum-deep py-24 text-cream sm:py-28" aria-labelledby="week-title">
        <div className="beam beam-left opacity-50" aria-hidden="true" />
        <div className="beam beam-right opacity-50" aria-hidden="true" />
        <Star4 className="animate-twinkle absolute right-[10%] top-[18%] h-5 w-5 text-gold/60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow label="The weekly rhythm" tone="dark" />
              <h2 id="week-title" className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.015em]">
                A week at <em className="italic text-gold">Better Together.</em>
              </h2>
            </div>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-cream/60">
              Same time, same place, every week — predictable by design. Visual schedules for every session arrive in
              your inbox on Mondays.
            </p>
          </FadeIn>

          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {WEEK_SCHEDULE.map((w, i) => (
              <FadeIn key={w.day} delay={0.05 * i} y={20}>
                <li className="group flex items-center gap-5 rounded-[1.4rem] border border-cream/12 bg-cream/[0.05] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:bg-cream/[0.09]">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold font-display text-lg font-bold italic text-plum-deep transition-transform duration-500 group-hover:-rotate-6">
                    {w.day}
                  </span>
                  <span>
                    <span className="block font-display text-lg font-semibold tracking-tight">{w.what}</span>
                    <span className="mt-1 flex items-center gap-1.5 text-[0.82rem] font-bold text-cream/55">
                      <Clock3 className="h-3.5 w-3.5 text-gold/80" aria-hidden="true" />
                      {w.time}
                    </span>
                  </span>
                </li>
              </FadeIn>
            ))}
          </ol>

          <FadeIn delay={0.2}>
            <p className="mt-10 flex items-center justify-center gap-3 text-center text-[0.8rem] font-bold uppercase tracking-[0.22em] text-cream/45">
              <CalendarDays className="h-4 w-4 text-gold" aria-hidden="true" />
              Two relaxed-performance showcases every season — house lights up, voices welcome
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section className="bg-cream py-24 sm:py-28" aria-labelledby="faq-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow label="Questions, answered" />
            </div>
            <h2 id="faq-title" className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.015em]">
              Everything families <em className="italic text-coral-deep">ask us first.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12} className="mt-14 grid items-start gap-8 lg:grid-cols-2">
            <Accordion items={FAQS.slice(0, 3)} defaultOpen={0} />
            <Accordion items={FAQS.slice(3)} defaultOpen={null} />
          </FadeIn>
        </div>
      </section>

      <CTABand
        title={
          <>
            Your child&apos;s name is already <em className="italic text-gold">on the call sheet.</em>
          </>
        }
        copy="The 2027 interest list takes ninety seconds, costs nothing, and locks in founding-family tuition for life."
        primary={{ to: "/get-involved", label: "Join the 2027 interest list" }}
        secondary={{ to: "/events", label: "Try a free event first" }}
        note="Interest list families get first casting calls"
      />
    </PageShell>
  );
}
