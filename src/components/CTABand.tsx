import type { ReactNode } from "react";
import { ButtonGhost, ButtonGold, FadeIn, Star4 } from "./ui";

export default function CTABand({
  title,
  copy,
  primary,
  secondary,
  note,
}: {
  title: ReactNode;
  copy?: string;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-plum-deep py-24 text-center text-cream sm:py-28">
      <div className="beam beam-left opacity-60" aria-hidden="true" />
      <div className="beam beam-right opacity-60" aria-hidden="true" />
      <Star4 className="animate-twinkle absolute left-[12%] top-[26%] h-4 w-4 text-gold/70" />
      <Star4 className="animate-twinkle absolute right-[14%] top-[36%] h-5 w-5 text-gold/60" style={{ animationDelay: "1.3s" }} />
      <Star4 className="animate-twinkle absolute left-[46%] top-[12%] h-3 w-3 text-coral/70" style={{ animationDelay: "2.1s" }} />

      <div className="relative mx-auto max-w-3xl px-5">
        <FadeIn>
          <p className="flex items-center justify-center gap-3 text-[0.7rem] font-extrabold uppercase tracking-[0.32em] text-gold">
            <Star4 className="h-3.5 w-3.5" />
            Places, everyone
            <Star4 className="h-3.5 w-3.5" />
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.3rem,4.8vw,4rem)] font-medium leading-[1.05] tracking-[-0.015em]">
            {title}
          </h2>
          {copy && <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/70">{copy}</p>}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonGold to={primary.to}>{primary.label}</ButtonGold>
            {secondary && <ButtonGhost to={secondary.to}>{secondary.label}</ButtonGhost>}
          </div>
          {note && <p className="mt-7 text-[0.8rem] font-bold uppercase tracking-[0.22em] text-cream/40">{note}</p>}
        </FadeIn>
      </div>
    </section>
  );
}
