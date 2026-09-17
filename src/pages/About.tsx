import { Globe2, HandHeart, Quote } from "lucide-react";
import CTABand from "../components/CTABand";
import PageHero from "../components/PageHero";
import PageShell from "../components/PageShell";
import StatsBand from "../components/StatsBand";
import { AUDIENCES, IMG, TEAM, TIMELINE, VALUES } from "../lib/data";
import { Eyebrow, FadeIn, Star4 } from "../components/ui";

export default function About() {
  return (
    <PageShell title="About & Our Mission">
      <PageHero
        index="01"
        label="About / Our mission"
        title={
          <>
            A stage built for <em className="italic text-coral-deep">every kind of kid.</em>
          </>
        }
        copy="Better Together Performing Arts began with one uncomfortable recital and one big promise: never again would a child be redirected to the audience while their friends took the stage."
        main={IMG.cheering}
        small={IMG.capes}
      />

      {/* ——— Big thesis ——— */}
      <section className="bg-parchment py-20 sm:py-24" aria-labelledby="thesis">
        <FadeIn className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="flex justify-center">
            <Eyebrow label="Why we exist" />
          </div>
          <p id="thesis" className="mt-8 font-display text-[clamp(1.5rem,3vw,2.4rem)] font-medium italic leading-snug text-plum-deep">
            Every child already knows how to play, pretend and applaud. The only thing between them and the stage is
            whether someone remembered to build the ramp — literal or otherwise — into the design.{" "}
            <em className="not-italic text-coral-deep">We remembered first.</em>
          </p>
        </FadeIn>
      </section>

      {/* ——— Mission & vision ——— */}
      <section className="bg-cream py-20 sm:py-24" aria-label="Mission and vision">
        <div className="mx-auto grid max-w-6xl gap-7 px-5 sm:px-8 md:grid-cols-2">
          {[
            {
              icon: HandHeart,
              title: "Our mission",
              copy: "To design children's performing arts where disability is never a barrier to participation — weaving access into every class, casting choice and curtain call, so children of all abilities create and perform side by side.",
            },
            {
              icon: Globe2,
              title: "Our vision",
              copy: "A world where 'inclusive' isn't a special track or a buzzword — it's simply how every children's program is built from the start. We intend to prove the model on one stage, then hand the blueprint to every town that wants it.",
            },
          ].map((c, i) => (
            <FadeIn key={c.title} delay={0.1 * i}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] bg-plum-deep p-9 text-cream shadow-[0_26px_60px_rgba(39,16,46,0.28)]">
                <Star4 className="absolute -right-6 -top-6 h-24 w-24 text-plum-soft transition-transform duration-700 group-hover:rotate-45" />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-plum-deep">
                  <c.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-display text-3xl font-medium italic text-gold-soft">{c.title}</h2>
                <p className="mt-4 text-[1rem] leading-relaxed text-cream/75">{c.copy}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ——— Who we serve ——— */}
      <section className="bg-cream pb-24" aria-labelledby="serve-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="max-w-2xl">
            <Eyebrow label="Who we serve" />
            <h2 id="serve-title" className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.015em]">
              Every kid. <em className="italic text-coral-deep">Yes — yours, too.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Inclusion by design only works when the room looks like the real world. Our ensemble is proudly mixed —
              and every name below already has a seat saved.
            </p>
          </FadeIn>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4" role="list">
            {AUDIENCES.map((a, i) => (
              <FadeIn key={a.label} delay={0.05 * i} y={22}>
                <li className="group h-full rounded-[1.4rem] border border-ink/10 bg-white/60 p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-plum/25 hover:shadow-[0_20px_50px_rgba(39,16,46,0.12)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-plum text-gold transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                    <a.icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{a.label}</h3>
                  <p className="mt-1.5 text-[0.88rem] leading-snug text-ink/60">{a.copy}</p>
                </li>
              </FadeIn>
            ))}
          </ul>

          <StatsBand className="mt-16" />
        </div>
      </section>

      {/* ——— Timeline ——— */}
      <section className="relative overflow-hidden bg-plum-deep py-24 text-cream sm:py-28" aria-labelledby="road-title">
        <Star4 className="animate-float-slow absolute -right-10 top-14 h-36 w-36 text-plum-soft" />
        <Star4 className="animate-twinkle absolute left-[8%] bottom-[20%] h-4 w-4 text-gold/60" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <FadeIn className="max-w-2xl">
            <Eyebrow label="Our story so far" tone="dark" />
            <h2 id="road-title" className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.015em]">
              The road to <em className="italic text-gold">opening night.</em>
            </h2>
          </FadeIn>

          <ol className="relative mt-14 space-y-10 border-l-2 border-gold/25 pl-8 sm:pl-12">
            {TIMELINE.map((t, i) => (
              <FadeIn key={t.year} delay={0.06 * i} y={22}>
                <li className="relative">
                  <span className="absolute -left-[2.65rem] top-1 flex h-5 w-5 items-center justify-center sm:-left-[3.65rem]">
                    <Star4 className="h-5 w-5 text-gold" />
                  </span>
                  <p className="font-display text-2xl font-semibold italic text-gold-soft">{t.year}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">{t.title}</h3>
                  <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-cream/65">{t.copy}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Values ——— */}
      <section className="bg-cream py-24 sm:py-28" aria-labelledby="values-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow label="What we run on" />
            </div>
            <h2 id="values-title" className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.015em]">
              Six values. <em className="italic text-coral-deep">Zero small print.</em>
            </h2>
          </FadeIn>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={0.05 * i} y={22}>
                <li className="group h-full rounded-[1.4rem] border border-ink/10 bg-parchment p-6 transition-all duration-500 hover:-translate-y-1.5 hover:bg-plum hover:shadow-[0_26px_60px_rgba(39,16,46,0.28)] [&_h3]:hover:text-gold-soft [&_p]:hover:text-cream/70">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral/15 text-coral-deep transition-colors duration-500 group-hover:bg-gold group-hover:text-plum-deep">
                    <v.icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight transition-colors">{v.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/65 transition-colors">{v.copy}</p>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Founding ensemble ——— */}
      <section className="bg-parchment py-24 sm:py-28" aria-labelledby="team-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow label="The people" />
            </div>
            <h2 id="team-title" className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.015em]">
              The founding <em className="italic text-coral-deep">ensemble.</em>
            </h2>
          </FadeIn>
          <ul className="mt-14 grid gap-7 md:grid-cols-3" role="list">
            {TEAM.map((m, i) => (
              <FadeIn key={m.name} delay={0.08 * i} y={24}>
                <li className="group relative h-full rounded-[1.8rem] border border-ink/10 bg-cream p-7 text-center shadow-[0_16px_45px_rgba(39,16,46,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_70px_rgba(39,16,46,0.16)]">
                  <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-plum-deep bg-gold font-display text-2xl font-bold text-plum-deep shadow-[4px_4px_0_rgba(239,106,78,0.9)] transition-transform duration-500 group-hover:rotate-6">
                    {m.initials}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{m.name}</h3>
                  <p className="mt-1 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-coral-deep">{m.role}</p>
                  <p className="mt-4 text-[0.9rem] leading-relaxed text-ink/65">{m.bio}</p>
                  <p className="mt-5 flex items-start justify-center gap-2 border-t border-dashed border-ink/15 pt-4 font-display text-[0.95rem] italic text-plum">
                    <Quote className="mt-0.5 h-3.5 w-3.5 shrink-0 text-coral" aria-hidden="true" fill="currentColor" />
                    {m.quote}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        title={
          <>
            Curious? <em className="italic text-gold">Come see it in person.</em>
          </>
        }
        copy="Our free community events are the best first hello — or send a note and we'll set up a relaxed studio visit for your family."
        primary={{ to: "/events", label: "Upcoming events" }}
        secondary={{ to: "/get-involved", label: "Say hello" }}
      />
    </PageShell>
  );
}
