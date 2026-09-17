import { ArrowUpRight, CalendarDays, MapPin, Sparkle } from "lucide-react";
import GetInvolvedSection from "../components/GetInvolved";
import PageHero from "../components/PageHero";
import PageShell from "../components/PageShell";
import { CONTACT, OFFICE_HOURS } from "../lib/data";
import { Eyebrow, FadeIn, Star4 } from "../components/ui";

const VENUE_ACCESS = ["Step-free entry", "Accessible parking", "All-gender restrooms", "Quiet room", "Sensory kits at the desk"];

export default function ContactPage() {
  return (
    <PageShell title="Get Involved & Contact">
      <PageHero
        index="05"
        label="Get involved"
        title={
          <>
            The house lights are up. <em className="italic text-coral-deep">Come on in.</em>
          </>
        }
        copy="Join the 2027 interest list, RSVP to a free event, volunteer your hands or your heart — or simply tell us about your performer and what would make them shine."
        chips={["Families", "Volunteers", "Partners", "Curious neighbors"]}
      />

      <GetInvolvedSection showHeader={false} />

      {/* ——— Visit + hours ——— */}
      <section className="bg-cream py-24 sm:py-28" aria-labelledby="visit-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="max-w-2xl">
            <Eyebrow label="Visit the studio" />
            <h2 id="visit-title" className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.015em]">
              Come watch a rehearsal — <em className="italic text-coral-deep">no RSVP needed.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Saturdays are open-studio days. Peek in, try the calm room, meet the teaching artists, and see exactly
              what your family is walking into.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* stylized map card */}
            <FadeIn>
              <div className="relative h-96 overflow-hidden rounded-[2rem] bg-plum-deep shadow-[0_30px_70px_rgba(39,16,46,0.3)] sm:h-full sm:min-h-[26rem]">
                <div className="dot-grid-light absolute inset-0 opacity-60" aria-hidden="true" />
                {/* scenic "streets" */}
                <div aria-hidden="true" className="absolute left-1/4 top-0 h-full w-10 rotate-6 bg-cream/[0.05]" />
                <div aria-hidden="true" className="absolute right-1/3 top-0 h-full w-6 -rotate-3 bg-cream/[0.04]" />
                <div aria-hidden="true" className="absolute left-0 top-1/3 h-8 w-full bg-cream/[0.05]" />
                <Star4 className="animate-twinkle absolute right-10 top-10 h-5 w-5 text-gold/70" />

                {/* pin */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="relative flex h-6 w-6">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                    <span className="relative flex h-14 w-14 -translate-x-4 -translate-y-4 items-center justify-center rounded-full bg-gold text-plum-deep shadow-[0_0_0_8px_rgba(233,180,76,0.2)]">
                      <MapPin className="h-7 w-7" aria-hidden="true" />
                    </span>
                  </span>
                  <p className="mt-8 rounded-full bg-plum-soft/80 px-5 py-2.5 font-display text-lg italic text-cream backdrop-blur">
                    {CONTACT.place}
                  </p>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-cream transition-colors hover:border-gold hover:text-gold"
                >
                  Open in maps
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </FadeIn>

            {/* hours + venue access */}
            <div className="flex flex-col gap-6">
              <FadeIn delay={0.08}>
                <div className="rounded-[1.8rem] border border-ink/10 bg-parchment p-7">
                  <h3 className="flex items-center gap-3 font-display text-2xl font-semibold tracking-tight">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-plum text-gold">
                      <CalendarDays className="h-5 w-5" aria-hidden="true" />
                    </span>
                    Doors-open hours
                  </h3>
                  <ul className="mt-6 divide-y divide-ink/10" role="list">
                    {OFFICE_HOURS.map((o) => (
                      <li key={o.day} className="flex items-center justify-between gap-4 py-3.5">
                        <span className="text-[0.8rem] font-extrabold uppercase tracking-[0.18em] text-ink/50">{o.day}</span>
                        <span className="text-[0.92rem] font-bold text-ink/80">{o.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.16}>
                <div className="rounded-[1.8rem] border border-ink/10 bg-parchment p-7">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">At the venue, always</h3>
                  <ul className="mt-5 flex flex-wrap gap-2.5" role="list">
                    {VENUE_ACCESS.map((v) => (
                      <li
                        key={v}
                        className="flex items-center gap-2 rounded-full border border-plum/15 bg-white/60 px-4 py-2 text-[0.74rem] font-extrabold uppercase tracking-[0.12em] text-plum"
                      >
                        <Sparkle className="h-3.5 w-3.5 text-coral-deep" aria-hidden="true" />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.22}>
                <p className="flex items-center justify-center gap-3 rounded-[1.8rem] bg-plum-deep px-7 py-6 text-center font-display text-lg italic text-cream">
                  <Star4 className="h-4 w-4 shrink-0 text-gold" />
                  We answer every message within two business days — usually before the curtain warms up.
                  <Star4 className="h-4 w-4 shrink-0 text-gold" />
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
