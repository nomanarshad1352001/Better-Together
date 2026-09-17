import { Check, X } from "lucide-react";
import InclusionSection from "../components/Inclusion";
import PageHero from "../components/PageHero";
import PageShell from "../components/PageShell";
import { COMMITMENTS, IMG, OLD_VS_OURS } from "../lib/data";
import { ButtonGold, Eyebrow, FadeIn, Star4 } from "../components/ui";

export default function InclusionPage() {
  return (
    <PageShell title="Inclusion by Design">
      <PageHero
        index="03"
        label="Inclusion by design"
        title={
          <>
            Ramps drawn into the <em className="italic text-coral-deep">blueprints.</em>
          </>
        }
        copy="We didn't adapt a traditional program for kids with disabilities. We built a new kind of program where disability is never the reason a child is excluded — and where every child, disabled or not, gets a better stage because of it."
        main={IMG.ballerinaSpot}
        small={IMG.stageGirls}
        chips={["For every body", "For every mind", "For every family"]}
      />

      {/* ——— Old vs ours ——— */}
      <section className="bg-cream pb-24" aria-labelledby="compare-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="max-w-2xl">
            <Eyebrow label="The difference" />
            <h2 id="compare-title" className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.015em]">
              Same art form. <em className="italic text-coral-deep">Different script.</em>
            </h2>
          </FadeIn>

          <div className="mt-14 grid items-start gap-8 lg:grid-cols-2">
            {/* old script */}
            <FadeIn>
              <div className="rounded-[2rem] border border-ink/10 bg-ink/[0.03] p-8">
                <h3 className="font-display text-2xl font-semibold italic text-ink/50">The old script</h3>
                <ul className="mt-6 space-y-5" role="list">
                  {OLD_VS_OURS.map((r, i) => (
                    <FadeIn key={r.old} delay={0.05 * i} y={16}>
                      <li className="flex items-start gap-3.5">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral/15 text-coral-deep">
                          <X className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={3} />
                        </span>
                        <p className="text-[0.98rem] font-bold leading-snug text-ink/55">{r.old}</p>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* our script */}
            <FadeIn delay={0.1}>
              <div className="relative rounded-[2rem] bg-plum-deep p-8 text-cream shadow-[0_30px_70px_rgba(39,16,46,0.35)] lg:-translate-y-4">
                <Star4 className="absolute -right-4 -top-4 h-16 w-16 text-plum-soft" />
                <h3 className="font-display text-2xl font-semibold italic text-gold-soft">Our script</h3>
                <ul className="mt-6 space-y-5" role="list">
                  {OLD_VS_OURS.map((r, i) => (
                    <FadeIn key={r.ours} delay={0.07 * i} y={16}>
                      <li className="flex items-start gap-3.5">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-plum-deep">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={3} />
                        </span>
                        <p className="text-[0.98rem] font-bold leading-snug text-cream/85">{r.ours}</p>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ——— The full pillars + quote (signature dark section) ——— */}
      <InclusionSection />

      {/* ——— Written commitments ——— */}
      <section className="bg-parchment py-24 sm:py-28" aria-labelledby="commit-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <FadeIn>
              <Eyebrow label="Put it in writing" />
              <h2 id="commit-title" className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.015em]">
                Our access commitments — <em className="italic text-coral-deep">no asterisks.</em>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">
                These aren&apos;t aspirations or premium add-ons. They run at every class, rehearsal, performance and
                birthday-adjacent cupcake situation we ever host.
              </p>
              <div className="mt-9">
                <ButtonGold to="/programs">See it in action — the programs</ButtonGold>
              </div>
            </FadeIn>
            <ul className="grid gap-3.5 sm:grid-cols-2" role="list">
              {COMMITMENTS.map((c, i) => (
                <FadeIn key={c} delay={0.04 * i} y={18}>
                  <li className="flex h-full items-start gap-3 rounded-2xl border border-ink/10 bg-cream p-4 text-[0.9rem] font-bold leading-snug text-ink/75">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                      <Check className="h-3 w-3" aria-hidden="true" strokeWidth={3.5} />
                    </span>
                    {c}
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
