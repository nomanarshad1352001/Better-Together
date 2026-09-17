import { ArrowRight, CalendarDays, Clock3, MapPin, Sparkles, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { EVENTS, type EventItem } from "../lib/data";
import Marquee from "./Marquee";
import { Eyebrow, FadeIn, Star4 } from "./ui";

export function EventCard({ e, i }: { e: EventItem; i: number }) {
  const dark = !!e.dark;
  return (
    <FadeIn delay={0.09 * i} className="h-full">
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border transition-all duration-500 hover:-translate-y-2.5 ${
          dark
            ? "border-plum-deep/20 bg-plum-deep text-cream shadow-[0_24px_60px_rgba(39,16,46,0.35)] hover:shadow-[0_40px_90px_rgba(39,16,46,0.45)]"
            : "border-ink/10 bg-white/70 shadow-[0_16px_45px_rgba(39,16,46,0.08)] hover:shadow-[0_36px_80px_rgba(39,16,46,0.18)]"
        }`}
      >
        {/* photo header */}
        <div className="relative overflow-hidden">
          <img
            src={e.img.src}
            alt={e.img.alt}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
          <div aria-hidden="true" className={`absolute inset-0 ${dark ? "bg-plum-deep/25" : "bg-plum-deep/10"}`} />

          {/* date block */}
          <div
            className={`absolute bottom-4 left-4 rounded-2xl px-4 py-2.5 text-center shadow-lg ${
              dark ? "bg-gold text-plum-deep" : "bg-plum text-cream"
            }`}
          >
            <span className="block text-[0.62rem] font-extrabold uppercase tracking-[0.22em] opacity-80">{e.dateTop}</span>
            <span className="block font-display text-2xl font-bold leading-none">{e.dateBig}</span>
            <span className="block text-[0.62rem] font-extrabold uppercase tracking-[0.22em] opacity-80">{e.dateSub}</span>
          </div>

          {e.free && (
            <span className="absolute right-4 top-4 rotate-6 rounded-xl border-2 border-plum-deep bg-coral px-3.5 py-1.5 font-display text-lg font-bold italic text-cream shadow-[4px_4px_0_rgba(39,16,46,1)]">
              Free!
            </span>
          )}
          {dark && (
            <span className="absolute right-4 top-4 flex rotate-6 items-center gap-1.5 rounded-xl border-2 border-plum-deep bg-gold px-3.5 py-1.5 font-display text-lg font-bold italic text-plum-deep shadow-[4px_4px_0_rgba(251,244,231,0.9)]">
              <Sparkles className="h-4 w-4" aria-hidden="true" /> Soon
            </span>
          )}
        </div>

        {/* body */}
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="font-display text-[1.7rem] font-semibold leading-tight tracking-tight">{e.title}</h3>

          <ul className={`mt-4 space-y-2 text-[0.88rem] font-bold ${dark ? "text-cream/75" : "text-ink/65"}`}>
            <li className="flex items-center gap-2.5">
              <CalendarDays className={`h-4 w-4 ${dark ? "text-gold" : "text-coral-deep"}`} aria-hidden="true" />
              {e.dateTop === "Season" ? "Opening 2027 — founding families first" : `${e.dateTop}, ${e.dateBig} ${e.dateSub}`}
            </li>
            <li className="flex items-center gap-2.5">
              <Clock3 className={`h-4 w-4 ${dark ? "text-gold" : "text-coral-deep"}`} aria-hidden="true" />
              {e.time}
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className={`h-4 w-4 ${dark ? "text-gold" : "text-coral-deep"}`} aria-hidden="true" />
              {e.place}
            </li>
          </ul>

          <p className={`mt-4 flex-1 text-[0.95rem] leading-relaxed ${dark ? "text-cream/65" : "text-ink/70"}`}>{e.copy}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {e.chips.map((c) => (
              <span
                key={c}
                className={`rounded-full px-3 py-1 text-[0.66rem] font-extrabold uppercase tracking-[0.12em] ${
                  dark ? "bg-cream/10 text-gold-soft" : "bg-plum/[0.06] text-plum"
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          {/* perforation */}
          <div className="relative mt-7" aria-hidden="true">
            <div className={`border-t-2 border-dashed ${dark ? "border-cream/20" : "border-ink/15"}`} />
            <span className="absolute -left-[1.85rem] -top-[0.65rem] h-5 w-5 rounded-full bg-cream" />
            <span className="absolute -right-[1.85rem] -top-[0.65rem] h-5 w-5 rounded-full bg-cream" />
          </div>

          {/* stub footer */}
          <div className="mt-5 flex items-center justify-between gap-3">
            <span className={`flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] ${dark ? "text-cream/55" : "text-ink/50"}`}>
              <Ticket className="h-4 w-4" aria-hidden="true" />
              {e.free ? "Admit every family" : "Reserve a front-row seat"}
            </span>
            <Link
              to="/get-involved"
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.75rem] font-extrabold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 ${
                dark ? "bg-gold text-plum-deep hover:bg-gold-soft" : "bg-plum text-cream hover:bg-plum-deep"
              }`}
            >
              {e.cta}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

export default function EventsSection() {
  return (
    <section id="events" aria-labelledby="events-title" className="relative overflow-hidden bg-cream pb-10 pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow index="04" label="Upcoming events" />
          </div>
          <h2 id="events-title" className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4rem)] font-medium leading-[1.04] tracking-[-0.015em]">
            Save the dates. <em className="italic text-coral-deep">Bring the whole crew.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Every gathering is free, sensory-friendly, and open to all families — no diagnosis, membership, or audition
            required. Come as you are; leave with new friends.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {EVENTS.map((e, i) => (
            <EventCard key={e.title} e={e} i={i} />
          ))}
        </div>

        <FadeIn delay={0.15} className="mt-12 flex flex-wrap items-center justify-center gap-3 text-center">
          <Star4 className="h-4 w-4 shrink-0 text-coral" />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-ink/50">
            Quiet rooms, visual schedules &amp; all-gender restrooms at every event
          </p>
          <Star4 className="h-4 w-4 shrink-0 text-coral" />
        </FadeIn>

        <FadeIn delay={0.2} className="mt-8 text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-[0.82rem] font-extrabold uppercase tracking-[0.2em] text-coral-deep underline decoration-coral/40 decoration-2 underline-offset-8 transition-colors hover:text-plum"
          >
            Plan your visit — the full event guide
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </FadeIn>
      </div>

      {/* ticketing ticker */}
      <div className="relative z-10 mt-20 rotate-[1.1deg] scale-[1.03] border-y-2 border-plum-deep shadow-[0_18px_50px_rgba(39,16,46,0.18)]">
        <Marquee
          tone="coral"
          reverse
          items={[
            "Oct 30 — Sensory-friendly trick-or-treat",
            "Dec 12 — Holiday celebration",
            "2027 — The inaugural season",
            "Free · All families · All welcome",
          ]}
        />
      </div>
    </section>
  );
}
