import { MARQUEE_ITEMS } from "../lib/data";
import { Star4 } from "./ui";

export default function Marquee({
  tone = "gold",
  reverse = false,
  items = MARQUEE_ITEMS,
  className = "",
}: {
  tone?: "gold" | "coral" | "plum";
  reverse?: boolean;
  items?: string[];
  className?: string;
}) {
  const tones = {
    gold: "bg-gold text-plum-deep",
    coral: "bg-coral text-cream",
    plum: "bg-plum text-cream",
  } as const;

  const row = [...items, ...items, ...items, ...items];

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden py-4 ${tones[tone]} ${className}`}
    >
      <div
        className={`flex w-max items-center gap-8 pr-8 animate-marquee ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.28em]">{item}</span>
            <Star4 className="h-3.5 w-3.5 opacity-70" />
          </span>
        ))}
      </div>
    </div>
  );
}
