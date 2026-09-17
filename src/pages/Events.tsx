import { MoonStar, Sparkles } from "lucide-react";
import CTABand from "../components/CTABand";
import { EventCard } from "../components/Events";
import PageHero from "../components/PageHero";
import PageShell from "../components/PageShell";
import { EVENTS, EXPECT_STEPS, IMG, SEASON_ROADMAP } from "../lib/data";
import { Eyebrow, FadeIn, Star4 } from "../components/ui";

const ALWAYS_ON = [
  "Staffed quiet room",
  "Visual schedule emailed ahead",
  "Step-free routes",
  "ASL at flagship events",
  "Allergen-aware treats",
  "Sensory kits at the welcome desk",
];

export default function EventsPage() {
  return (
    <PageShell title="Upcoming Events">
      <PageHero
        index="04"
        label="Upcoming events"
        title={
          <>
            Save the dates. <em className="italic text-coral-deep">Bring the whole crew.</em>
          </>
        }
        copy="Free, sensory-friendly community gatherings — the no-pressure way to meet our team, walk our spaces, and let your performer test the stage lights at their own pace."
        main={IMG.halloweenStairs}
        small={IMG.santaKids}
        chips={["Free admission", "Sensory-friendly", "All families"]}
      />

      {/* ——— This season's playbill ——— */}
      <section className="bg-cream pb-24" aria-label="Event playbill">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {EVENTS.map((e, i) => (
              <EventCard key={e.title} e={e} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ——— What to expect ——— */}
      <section className="bg-parchment py-24 sm:py-28" aria-labelledby="expect-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow label="Your first visit" />
            </div>
            <h2 id="expect-title" className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.015em]">
              What to expect <em className="italic text-coral-deep">when you arrive.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              New places are the hardest part — so we choreograph the arrival as carefully as the show.
            </p>
          </FadeIn>
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4" role="list">
            {EXPECT_STEPS.map((s, i) => (
              <FadeIn key={s.title} delay={0.06 * i} y={22}>
                <li className="group relative h-full overflow-hidden rounded-[1.5rem] border border-ink/10 bg-cream p-6 pt-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(39,16,46,0.14)]">
                  <span aria-hidden="true" className="font-display absolute right-5 top-4 text-5xl font-bold italic text-plum/10 transition-colors duration-500 group-hover:text-coral/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-plum text-gold transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                    <s.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/65">{s.copy}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Roadmap + always-on access ——— */}
      <section className="bg-cream py-24 sm:py-28" aria-labelledby="roadmap-title">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <FadeIn>
              <Eyebrow label="The road to 2027" />
              <h2 id="roadmap-title" className="mt-6 font-display text-[clamp(2rem,3.8vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.015em]">
                Every date between here <em className="italic text-coral-deep">and opening night.</em>
              </h2>
            </FadeIn>
            <ol className="relative mt-12 space-y-9 border-l-2 border-plum/15 pl-9" role="list">
              {SEASON_ROADMAP.map((r, i) => (
                <FadeIn key={r.title} delay={0.05 * i} y={18}>
                  <li className="relative">
                    <span className="absolute -left-[2.6rem] top-0.5 flex h-5 w-5 items-center justify-center">
                      <Star4 className={`h-5 w-5 ${i === 0 || i === 2 ? "text-coral" : "text-gold-deep"}`} />
                    </span>
                    <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-coral-deep">{r.date}</p>
                    <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight">{r.title}</h3>
                    <p className="mt-1 text-[0.92rem] leading-snug text-ink/60">{r.note}</p>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>

          {/* always-on access card */}
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] bg-plum-deep p-8 text-cream shadow-[0_30px_70px_rgba(39,16,46,0.3)] sm:p-10">
              <MoonStar className="absolute -right-6 -top-6 h-24 w-24 text-plum-soft" />
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-gold">Every event, every time</p>
              <h3 className="mt-3 font-display text-3xl font-medium italic">The always-on access list</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-cream/65">
                If it isn&apos;t on this list, tell us — it will be next time. Access is a living rehearsal, and
                families hold the pencil.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2.5" role="list">
                {ALWAYS_ON.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-[0.74rem] font-extrabold uppercase tracking-[0.12em] text-gold-soft"
                  >
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABand
        title={
          <>
            RSVP once. <em className="italic text-gold">We&apos;ll handle the nerves.</em>
          </>
        }
        copy="Tell us you're coming and we'll send the social story, the visual schedule, and a welcome-text the morning of — everything your family needs to walk in calm."
        primary={{ to: "/get-involved", label: "RSVP — it's free" }}
        secondary={{ to: "/inclusion", label: "How we design access" }}
        note="Every event is free, always"
      />
    </PageShell>
  );
}
