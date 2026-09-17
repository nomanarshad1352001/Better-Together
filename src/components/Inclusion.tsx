import { Quote } from "lucide-react";
import { IMG, PILLARS } from "../lib/data";
import { Eyebrow, FadeIn, Star4 } from "./ui";

export default function Inclusion() {
  return (
    <section
      id="inclusion"
      aria-labelledby="inclusion-title"
      className="relative scroll-mt-24 overflow-hidden bg-plum-deep py-24 text-cream sm:py-32"
    >
      {/* stage atmosphere */}
      <div className="beam beam-left opacity-70" aria-hidden="true" />
      <div className="beam beam-right opacity-70" aria-hidden="true" />
      <Star4 className="animate-float-slow absolute -right-10 top-16 h-40 w-40 text-plum-soft" style={{ opacity: 0.6 }} />
      <Star4 className="animate-twinkle absolute left-[8%] top-[58%] h-5 w-5 text-gold/70" />
      <Star4 className="animate-twinkle absolute right-[16%] bottom-[12%] h-4 w-4 text-gold/60" style={{ animationDelay: "1.4s" }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="max-w-3xl">
          <Eyebrow index="03" label="Inclusion by design" tone="dark" />
          <h2 id="inclusion-title" className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4.2rem)] font-medium leading-[1.04] tracking-[-0.015em]">
            Most stages add ramps later. <em className="italic text-gold">We drew them into the blueprints.</em>
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-cream/70">
            Traditional children&apos;s programs are built for a mythical &ldquo;typical&rdquo; kid — then disabilities
            are accommodated at the edges, if at all. We flipped the script: every support below is standard equipment,
            built into the architecture of every class and performance. It serves children with disabilities{" "}
            <em className="font-display italic text-gold-soft">beautifully</em> — and it makes the program warmer,
            calmer, and more joyful for <strong className="font-extrabold text-cream">every single child</strong>.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ——— Quote + portrait column ——— */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.1}>
              <figure className="relative rounded-[2rem] border border-gold/25 bg-plum-soft/50 p-8 sm:p-10">
                <Quote className="h-8 w-8 text-gold" aria-hidden="true" fill="currentColor" />
                <blockquote className="mt-5 font-display text-[1.65rem] font-medium italic leading-snug text-cream">
                  Inclusion isn&apos;t a program for &ldquo;those kids&rdquo; — it&apos;s a better stage for every kid,
                  where differences are expected, supported, and celebrated.
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold">
                    <Star4 className="h-5 w-5 text-plum-deep" />
                  </span>
                  <span>
                    <span className="block text-sm font-extrabold">The Founding Ensemble</span>
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-cream/50">
                      Better Together Performing Arts
                    </span>
                  </span>
                </figcaption>
              </figure>
            </FadeIn>

            <FadeIn delay={0.2} className="relative mt-10">
              <div aria-hidden="true" className="absolute -inset-3 -translate-x-4 translate-y-4 rounded-t-[12rem] rounded-b-[2rem] border-2 border-gold/40" />
              <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-[2rem] border border-cream/15 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <img src={IMG.inclusion.src} alt={IMG.inclusion.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-plum-deep/60 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-6 right-6 font-display text-lg italic text-cream/95">
                  &ldquo;Here, my daughter isn&apos;t included. She&apos;s expected.&rdquo;
                </p>
              </div>
              <div className="absolute -right-2 -top-4 rotate-[9deg] rounded-2xl border-2 border-plum-deep bg-coral px-4 py-2.5 shadow-[5px_5px_0_rgba(233,180,76,0.9)]">
                <p className="font-display text-base font-bold italic leading-none text-cream">never picked last</p>
              </div>
            </FadeIn>
          </div>

          {/* ——— Pillars ——— */}
          <div className="lg:col-span-7">
            <ul className="grid gap-5 sm:grid-cols-2" role="list">
              {PILLARS.map((p, i) => (
                <FadeIn key={p.title} delay={0.06 * i} y={24} className="h-full">
                  <li className="group h-full rounded-[1.5rem] border border-cream/12 bg-cream/[0.045] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/45 hover:bg-cream/[0.08]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-plum-deep transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <p.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-gold-soft">{p.title}</h3>
                    <p className="mt-2.5 text-[0.92rem] leading-relaxed text-cream/65">{p.copy}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>

            <FadeIn delay={0.2}>
              <p className="mt-8 flex items-start gap-3 rounded-[1.5rem] border border-dashed border-gold/40 bg-gold/[0.07] px-6 py-5 text-[0.95rem] leading-relaxed text-cream/80">
                <Star4 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                <span>
                  <strong className="font-extrabold text-gold">For families of every ability:</strong> siblings, friends
                  and neighbors enroll together. Inclusion by design means no child is ever sorted into a separate room —
                  and no family ever has to ask for a seat in this one.
                </span>
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
