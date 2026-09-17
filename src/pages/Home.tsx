import { Quote } from "lucide-react";
import CTABand from "../components/CTABand";
import EventsSection from "../components/Events";
import Hero from "../components/Hero";
import PageShell from "../components/PageShell";
import ProgramsSection from "../components/Programs";
import { IMG, PILLARS } from "../lib/data";
import { ButtonGold, Chip, Eyebrow, FadeIn, Star4 } from "../components/ui";

/* ————— Welcome collage ————— */
function Welcome() {
  return (
    <section id="story" aria-labelledby="story-title" className="relative scroll-mt-28 overflow-hidden bg-cream py-24 sm:py-32">
      <div aria-hidden="true" className="absolute -right-28 top-16 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* copy */}
        <div>
          <FadeIn>
            <Eyebrow label="Welcome to the theatre" />
            <h2 id="story-title" className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4rem)] font-medium leading-[1.04] tracking-[-0.015em]">
              Better Together isn&apos;t our name. <em className="italic text-coral-deep">It&apos;s our method.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mt-7 text-lg leading-relaxed text-ink/75">
              We&apos;re a brand-new children&apos;s performing arts program built around a big idea: when a stage is
              designed for every body and every mind, nobody has to be &ldquo;accommodated&rdquo; — everyone just
              rehearses, performs, and belongs.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              Theatre, dance, music and backstage magic for kids ages 4–14 — disabled kids, neurodivergent kids, shy
              kids, wiggly kids, and every friend and sibling who comes with them.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8 flex flex-wrap gap-2.5">
            <Chip>Theatre</Chip>
            <Chip>Dance</Chip>
            <Chip>Music</Chip>
            <Chip>Backstage &amp; Design</Chip>
          </FadeIn>
          <FadeIn delay={0.28} className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonGold to="/about">Read our story</ButtonGold>
          </FadeIn>
        </div>

        {/* collage */}
        <FadeIn delay={0.15} className="relative pb-10">
          <div aria-hidden="true" className="absolute -inset-4 rotate-2 rounded-[2.8rem] bg-parchment" />
          <div className="relative -rotate-1 overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-[0_36px_80px_rgba(39,16,46,0.2)]">
            <img src={IMG.cheering.src} alt={IMG.cheering.alt} loading="lazy" className="aspect-[11/8] w-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -left-3 w-40 rotate-[-8deg] rounded-2xl border-[6px] border-white bg-white shadow-[0_22px_50px_rgba(39,16,46,0.25)] sm:-left-8 sm:w-48">
            <img src={IMG.capes.src} alt={IMG.capes.alt} loading="lazy" className="aspect-[4/5] w-full rounded-lg object-cover" />
            <p className="py-2 text-center font-display text-sm italic text-plum">capes count as costumes</p>
          </div>
          <div className="absolute -right-3 -top-6 rotate-[7deg] rounded-2xl border-2 border-plum-deep bg-gold px-4 py-3 shadow-[5px_5px_0_rgb(39,16,46)]">
            <p className="flex items-center gap-2 font-display text-lg font-bold italic leading-none text-plum-deep">
              <Star4 className="h-4 w-4" />
              est. 2026
            </p>
            <p className="mt-1 text-[0.62rem] font-extrabold uppercase tracking-[0.22em] text-plum-deep/70">
              every ability · every kid
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ————— Compact inclusion banner ————— */
function InclusionBanner() {
  const picks = [PILLARS[1], PILLARS[2], PILLARS[5]];
  return (
    <section aria-labelledby="banner-title" className="relative overflow-hidden bg-plum-deep py-24 text-cream">
      <div className="beam beam-left opacity-60" aria-hidden="true" />
      <div className="beam beam-right opacity-60" aria-hidden="true" />
      <Star4 className="animate-float-slow absolute -left-8 bottom-8 h-28 w-28 text-plum-soft" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <FadeIn>
            <Eyebrow index="03" label="Inclusion by design" tone="dark" />
            <h2 id="banner-title" className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.015em]">
              Built different — <em className="italic text-gold">so no one gets left out.</em>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/70">
              Traditional programs bolt on accommodations later. We wrote every support into the blueprints — which
              turns out to be a warmer, calmer, more joyful design for every single child.
            </p>
            <div className="mt-9">
              <ButtonGold to="/inclusion">See how it works</ButtonGold>
            </div>
          </FadeIn>
        </div>
        <ul className="flex flex-col gap-4" role="list">
          {picks.map((p, i) => (
            <FadeIn key={p.title} delay={0.1 + i * 0.09} y={20}>
              <li className="group flex items-center gap-5 rounded-[1.4rem] border border-cream/12 bg-cream/[0.05] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:bg-cream/[0.08]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold text-plum-deep transition-transform duration-500 group-hover:-rotate-6">
                  <p.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-xl font-semibold tracking-tight text-gold-soft">{p.title}</span>
                  <span className="mt-1 block text-[0.9rem] leading-snug text-cream/60">{p.copy}</span>
                </span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ————— Parent quote ————— */
function QuoteStrip() {
  return (
    <section aria-label="What families say" className="relative overflow-hidden bg-parchment py-20 sm:py-24">
      <Star4 className="animate-twinkle absolute left-[12%] top-[24%] h-4 w-4 text-coral/50" />
      <Star4 className="animate-twinkle absolute right-[10%] bottom-[26%] h-5 w-5 text-gold-deep/50" style={{ animationDelay: "1.4s" }} />
      <FadeIn className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Quote className="mx-auto h-9 w-9 text-coral" aria-hidden="true" fill="currentColor" />
        <blockquote className="mt-6 font-display text-[clamp(1.6rem,3.2vw,2.6rem)] font-medium italic leading-snug text-plum-deep">
          She didn&apos;t watch from the audience once. Not once. She had a role, a cue card, and three new best
          friends by the second rehearsal.
        </blockquote>
        <p className="mt-7 text-[0.78rem] font-extrabold uppercase tracking-[0.28em] text-ink/50">
          — Priya, parent of two performers
        </p>
      </FadeIn>
    </section>
  );
}

export default function Home() {
  return (
    <PageShell title="Every Child Deserves the Spotlight">
      <Hero />
      <Welcome />
      <ProgramsSection />
      <InclusionBanner />
      <EventsSection />
      <QuoteStrip />
      <CTABand
        title={
          <>
            The house lights are up. <em className="italic text-gold">Come on in.</em>
          </>
        }
        copy="Join the family interest list, RSVP to a free event, or just come watch a rehearsal. Every door at Better Together opens the same way: wide."
        primary={{ to: "/get-involved", label: "Start here — it's free" }}
        secondary={{ to: "/events", label: "See upcoming events" }}
        note="Oct 30 & Dec 12 · no audition, ever"
      />
    </PageShell>
  );
}
