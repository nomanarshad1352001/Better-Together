import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Eyebrow, Star4 } from "./ui";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PageHero({
  index,
  label,
  title,
  copy,
  main,
  small,
  chips,
}: {
  index: string;
  label: string;
  title: ReactNode;
  copy: string;
  main?: { src: string; alt: string };
  small?: { src: string; alt: string };
  chips?: string[];
}) {
  const centered = !main;

  return (
    <section className="relative overflow-hidden bg-cream pb-16 pt-32 sm:pb-20 sm:pt-40">
      {/* atmosphere */}
      <div aria-hidden="true" className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 top-48 h-72 w-72 rounded-full bg-coral/15 blur-3xl" />
      <Star4 className="animate-twinkle absolute left-[10%] top-[22%] h-4 w-4 text-gold-deep/60" />
      <Star4 className="animate-twinkle absolute right-[12%] top-[16%] h-5 w-5 text-coral/50" style={{ animationDelay: "1.1s" }} />
      <Star4 className="animate-twinkle absolute left-[42%] top-[9%] h-3 w-3 text-plum/30" style={{ animationDelay: "2s" }} />

      <div className={`relative mx-auto max-w-7xl px-5 sm:px-8 ${centered ? "text-center" : "grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]"}`}>
        <div className={centered ? "mx-auto max-w-3xl" : ""}>
          {/* breadcrumb */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className={`mb-6 flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-ink/40 ${centered ? "justify-center" : ""}`}
          >
            <Link to="/" className="transition-colors hover:text-coral-deep">Home</Link>
            <Star4 className="h-2 w-2 text-gold-deep" />
            <span className="text-ink/65">{label}</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.06, ease: EASE }} className={centered ? "flex justify-center" : ""}>
            <Eyebrow index={index} label={label} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.14, ease: EASE }}
            className="mt-5 font-display text-[clamp(2.6rem,5.6vw,4.9rem)] font-medium leading-[1.03] tracking-[-0.015em]"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24, ease: EASE }}
            className={`mt-6 text-lg leading-relaxed text-ink/70 ${centered ? "mx-auto max-w-2xl" : "max-w-xl"}`}
          >
            {copy}
          </motion.p>

          {chips && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
              className={`mt-8 flex flex-wrap gap-2.5 ${centered ? "justify-center" : ""}`}
            >
              {chips.map((c) => (
                <span key={c} className="rounded-full border border-plum/15 bg-plum/[0.05] px-4 py-1.5 text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-plum">
                  {c}
                </span>
              ))}
            </motion.div>
          )}
        </div>

        {main && (
          <motion.figure
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div aria-hidden="true" className="absolute -inset-3 translate-x-4 translate-y-4 rounded-t-[13rem] rounded-b-[2rem] border-2 border-gold/60" />
            <div className="relative overflow-hidden rounded-t-[13rem] rounded-b-[2rem] border border-ink/10 shadow-[0_36px_80px_rgba(39,16,46,0.22)]">
              <img src={main.src} alt={main.alt} className="aspect-[4/5] w-full object-cover" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-plum-deep/35 via-transparent to-transparent" />
            </div>
            {small && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ type: "spring", stiffness: 160, damping: 15, delay: 0.5 }}
                className="absolute -bottom-8 -left-4 w-36 rounded-2xl border-[5px] border-white bg-white shadow-[0_20px_50px_rgba(39,16,46,0.28)] sm:-left-10 sm:w-44"
              >
                <img src={small.src} alt={small.alt} className="aspect-[5/4] w-full rounded-xl object-cover" loading="lazy" />
              </motion.div>
            )}
          </motion.figure>
        )}
      </div>
    </section>
  );
}
