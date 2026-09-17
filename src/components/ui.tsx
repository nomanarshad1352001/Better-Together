import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { CSSProperties, ReactNode } from "react";

/* ————— Four-point stage-star ————— */
export function Star4({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} style={style}>
      <path d="M12 2c.83 5.17 4.03 8.37 9.2 9.2-5.17.83-8.37 4.03-9.2 9.2-.83-5.17-4.03-8.37-9.2-9.2C7.97 10.37 11.17 7.17 12 2z" />
    </svg>
  );
}

/* ————— Social brand icons (drawn inline — not in icon set) ————— */
export function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.6 21.4v-7.6h2.56l.38-2.97H13.6V8.96c0-.86.24-1.45 1.48-1.45h1.58V4.85c-.27-.04-1.21-.12-2.3-.12-2.28 0-3.85 1.39-3.85 3.95v2.18H7.9v2.97h2.61v7.57h3.09z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3.1" y="3.1" width="17.8" height="17.8" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.35" cy="6.65" r="0.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ————— Brand mark: gold spotlight disc with a plum star ————— */
export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <circle cx="24" cy="24" r="23" fill="#E9B44C" />
      <circle cx="24" cy="24" r="23" fill="none" stroke="#27102E" strokeOpacity="0.25" strokeWidth="1.5" />
      <path
        d="M24 7.5c1.28 7.94 6.72 13.38 14.66 14.66-7.94 1.28-13.38 6.72-14.66 14.66-1.28-7.94-6.72-13.38-14.66-14.66C17.28 20.88 22.72 15.44 24 7.5z"
        fill="#35173E"
      />
      <circle cx="36.5" cy="11.5" r="2.6" fill="#FBF4E7" />
    </svg>
  );
}

/* ————— Wordmark lockup ————— */
export function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="h-11 w-11 shrink-0 transition-transform duration-500 group-hover:rotate-[25deg]" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.35rem] font-semibold tracking-tight ${dark ? "text-ink" : "text-cream"}`}>
          Better&nbsp;Together
        </span>
        <span className={`mt-1 text-[0.6rem] font-extrabold uppercase tracking-[0.34em] ${dark ? "text-coral-deep" : "text-gold"}`}>
          Performing Arts
        </span>
      </span>
    </span>
  );
}

/* ————— Playbill eyebrow ————— */
export function Eyebrow({ index, label, tone = "light" }: { index?: string; label: string; tone?: "light" | "dark" }) {
  return (
    <div
      className={`flex items-center gap-3 text-[0.7rem] font-extrabold uppercase tracking-[0.32em] ${
        tone === "dark" ? "text-gold" : "text-coral-deep"
      }`}
    >
      <Star4 className="h-3.5 w-3.5 shrink-0" />
      {index && <span>Playbill Nº {index}</span>}
      {index && <span aria-hidden="true" className={`h-px w-8 ${tone === "dark" ? "bg-gold/60" : "bg-coral-deep/50"}`} />}
      <span className={tone === "dark" ? "text-cream/80" : "text-ink/60"}>{label}</span>
    </div>
  );
}

/* ————— Scroll reveal wrapper ————— */
export function FadeIn({
  children,
  delay = 0,
  y = 30,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ————— Buttons (router links) ————— */
export function ButtonGold({ to, children, className = "" }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-extrabold tracking-wide text-plum-deep shadow-[0_10px_30px_rgba(233,180,76,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-[0_16px_40px_rgba(233,180,76,0.45)] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function ButtonGhost({
  to,
  children,
  dark = true,
  className = "",
}: {
  to: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2.5 rounded-full border px-7 py-3.5 text-sm font-extrabold tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
        dark
          ? "border-cream/35 text-cream hover:border-gold hover:text-gold"
          : "border-ink/25 text-ink hover:border-coral-deep hover:text-coral-deep"
      } ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

/* ————— Small feature chip ————— */
export function Chip({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.72rem] font-bold tracking-wide ${
        dark ? "border-cream/20 bg-cream/5 text-cream/85" : "border-ink/12 bg-white/50 text-ink/75"
      }`}
    >
      <Star4 className={`h-2.5 w-2.5 ${dark ? "text-gold" : "text-coral"}`} />
      {children}
    </span>
  );
}
