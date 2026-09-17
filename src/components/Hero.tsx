import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useState, type PointerEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { IMG } from "../lib/data";
import Marquee from "./Marquee";
import { ButtonGhost, ButtonGold, Chip, Star4 } from "./ui";

const EASE = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block origin-left"
        initial={{ y: "112%", rotate: 3 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  // On the very first paint the curtain preloader covers the stage —
  // choreograph the entrance to begin just as the curtains part.
  const [firstBoot] = useState(() => {
    try {
      return !sessionStorage.getItem("bt-booted");
    } catch {
      return true;
    }
  });
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.35);
  const sx = useSpring(mx, { stiffness: 55, damping: 18 });
  const sy = useSpring(my, { stiffness: 55, damping: 18 });
  const pxT = useTransform(sx, (v) => v * 100);
  const pyT = useTransform(sy, (v) => v * 100);
  const glow = useMotionTemplate`radial-gradient(46rem circle at ${pxT}% ${pyT}%, rgba(233,180,76,0.15), transparent 65%)`;

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const base = firstBoot && !reduce ? 2.2 : 0;

  return (
    <section id="home" onPointerMove={onMove} className="relative overflow-hidden bg-plum-deep text-cream">
      {/* spotlight beams + pointer glow */}
      <div className="beam beam-left" aria-hidden="true" />
      <div className="beam beam-right" aria-hidden="true" />
      <motion.div aria-hidden="true" style={{ background: glow }} className="pointer-events-none absolute inset-0" />
      {/* stage floor vignette */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/45 to-transparent" />
      {/* twinkling house stars */}
      {[
        { t: "14%", l: "6%", s: "h-4 w-4", d: "0s" },
        { t: "22%", l: "44%", s: "h-3 w-3", d: "1.2s" },
        { t: "10%", l: "70%", s: "h-5 w-5", d: "0.6s" },
        { t: "30%", l: "90%", s: "h-3 w-3", d: "1.8s" },
        { t: "55%", l: "4%", s: "h-3.5 w-3.5", d: "2.4s" },
      ].map((p, i) => (
        <Star4
          key={i}
          className={`animate-twinkle absolute text-gold/80 ${p.s}`}
          style={{ top: p.t, left: p.l, animationDelay: p.d }}
        />
      ))}

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-28 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pt-40">
        {/* ——— Copy ——— */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: base, ease: EASE }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-gold/35 bg-gold/10 px-4 py-2 text-[0.7rem] font-extrabold uppercase tracking-[0.26em] text-gold"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            A new kind of children&apos;s stage
          </motion.div>

          <h1 className="font-display text-[clamp(3rem,8.2vw,6.6rem)] font-medium leading-[0.98] tracking-[-0.02em]">
            <Line delay={base + 0.08}>Every child</Line>
            <Line delay={base + 0.2}>
              deserves the{" "}
              <span className="relative inline-block whitespace-nowrap">
                <em className="italic text-gold">spotlight.</em>
                <svg viewBox="0 0 220 14" aria-hidden="true" className="absolute -bottom-2 left-0 w-full text-coral">
                  <motion.path
                    d="M4 10 C 60 2, 160 2, 216 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, delay: base + 0.75, ease: EASE }}
                  />
                </svg>
              </span>
            </Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: base + 0.45, ease: EASE }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75"
          >
            Better Together is an inclusive performing arts program where children of{" "}
            <strong className="font-extrabold text-cream">all</strong> abilities sing, dance, and take the stage
            together — with every support built in from the very first rehearsal, not added as an afterthought.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: base + 0.6, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <ButtonGold to="/programs">Explore the programs</ButtonGold>
            <ButtonGhost to="/events">Upcoming events</ButtonGhost>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: base + 0.8 }}
            className="mt-9 flex flex-wrap gap-2.5"
          >
            <Chip dark>Sensory-friendly stages</Chip>
            <Chip dark>Ages 4–14</Chip>
            <Chip dark>All abilities, one ensemble</Chip>
          </motion.div>
        </div>

        {/* ——— Arch portrait ——— */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: base + 0.35, ease: EASE }}
            className="relative"
          >
            {/* offset proscenium ring */}
            <div aria-hidden="true" className="absolute -inset-3 translate-x-5 translate-y-5 rounded-t-[15rem] rounded-b-[2rem] border-2 border-gold/45" />
            <div className="relative overflow-hidden rounded-t-[15rem] rounded-b-[2rem] border border-cream/15 shadow-[0_40px_90px_rgba(0,0,0,0.5)]">
              <img
                src={IMG.hero.src}
                alt={IMG.hero.alt}
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-plum-deep/55 via-transparent to-plum-deep/10" />
              {/* caption strip */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
                <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-cream/90">
                  Now casting: joy, wiggles
                  <br />& big imaginations
                </p>
                <Sparkles className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              </div>
            </div>

            {/* rotating badge */}
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: base + 0.9 }}
              className="absolute -left-5 top-10 flex items-center gap-2 rounded-2xl border-2 border-plum-deep bg-cream px-4 py-3 shadow-[6px_6px_0_rgba(233,180,76,0.9)] sm:-left-10"
            >
              <Star4 className="h-5 w-5 text-coral" />
              <p className="font-display text-lg font-bold italic leading-none text-plum-deep">
                ALL
                <span className="block text-[0.62rem] font-extrabold not-italic tracking-[0.24em] text-coral-deep">
                  MEANS ALL
                </span>
              </p>
            </motion.div>

            {/* floating ticket */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: base + 1.05, ease: EASE }}
              className="absolute -bottom-7 right-3 sm:right-8"
            >
              <Link
                to="/events"
                className="group flex items-center gap-3 rounded-2xl border border-gold/35 bg-plum-soft/80 px-5 py-4 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-plum-deep">
                  <Star4 className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[0.62rem] font-extrabold uppercase tracking-[0.24em] text-gold">
                    Free community events
                  </span>
                  <span className="block font-display text-base italic text-cream">Oct 30 &amp; Dec 12 — save the dates</span>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.button
        type="button"
        onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to our story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: base + 1.3, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream/70 transition-colors hover:border-gold hover:text-gold">
          <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
        </span>
      </motion.button>

      {/* playbill ticker */}
      <div className="relative z-10 -rotate-[1.1deg] scale-[1.03] border-y-2 border-plum-deep shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
        <Marquee tone="gold" />
      </div>
    </section>
  );
}
