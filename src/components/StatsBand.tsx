import { STATS } from "../lib/data";
import { FadeIn, Star4 } from "./ui";

export default function StatsBand({ className = "" }: { className?: string }) {
  return (
    <FadeIn className={className}>
      <dl className="grid grid-cols-2 overflow-hidden rounded-[2rem] border border-ink/10 bg-plum shadow-[0_30px_80px_rgba(39,16,46,0.25)] lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`relative px-8 py-10 text-cream ${i > 0 ? "border-l border-cream/10" : ""} ${
              i === 2 ? "max-lg:border-l-0 max-lg:border-t max-lg:border-cream/10" : ""
            } ${i === 3 ? "max-lg:border-t max-lg:border-cream/10" : ""}`}
          >
            <Star4 className="absolute right-5 top-5 h-3.5 w-3.5 text-gold/50" />
            <dd className="font-display text-5xl font-medium text-gold sm:text-6xl">{s.value}</dd>
            <dt className="mt-2 block text-[0.78rem] font-bold uppercase tracking-[0.18em] text-cream/60">{s.label}</dt>
          </div>
        ))}
      </dl>
    </FadeIn>
  );
}
