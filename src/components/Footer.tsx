import { ArrowUp, Accessibility, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT, NAV_LINKS } from "../lib/data";
import { FacebookIcon, InstagramIcon, Star4, Wordmark } from "./ui";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-20 text-cream/80">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* giant wordmark */}
        <div aria-hidden="true" className="select-none overflow-hidden pb-4 text-center">
          <p className="text-outline-cream whitespace-nowrap font-display text-[clamp(2.4rem,8.6vw,7.2rem)] font-bold leading-none tracking-tight">
            BETTER <Star4 className="inline-block h-[0.42em] w-[0.42em] -translate-y-[0.5em] text-gold" /> TOGETHER
          </p>
          <p className="mt-2 text-[0.66rem] font-extrabold uppercase tracking-[0.6em] text-gold/70">
            Performing Arts · Inclusion by Design
          </p>
        </div>

        <div className="mt-14 grid gap-12 border-t border-cream/10 pt-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr]">
          {/* brand */}
          <div>
            <Wordmark />
            <p className="mt-5 max-w-xs text-[0.92rem] leading-relaxed text-cream/55">
              A children&apos;s performing arts community where every ability takes the stage — theatre, dance, music
              and stagecraft with belonging built in from day one.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Better Together on Facebook (opens in a new tab)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Better Together on Instagram (opens in a new tab)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* explore */}
          <nav aria-label="Footer">
            <h3 className="text-[0.7rem] font-extrabold uppercase tracking-[0.3em] text-gold">Explore</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-2 text-[0.95rem] font-bold text-cream/70 transition-colors hover:text-gold"
                  >
                    <Star4 className="h-2.5 w-2.5 text-gold/0 transition-colors group-hover:text-gold" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* visit */}
          <div>
            <h3 className="text-[0.7rem] font-extrabold uppercase tracking-[0.3em] text-gold">Visit &amp; contact</h3>
            <ul className="mt-5 space-y-4 text-[0.92rem]">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-3 font-bold text-cream/70 transition-colors hover:text-gold">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" aria-hidden="true" />
                  <span className="break-all">{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, "")}`} className="flex items-start gap-3 font-bold text-cream/70 transition-colors hover:text-gold">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" aria-hidden="true" />
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 font-bold text-cream/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" aria-hidden="true" />
                {CONTACT.place}
              </li>
            </ul>
          </div>

          {/* accessibility promise */}
          <div className="rounded-[1.4rem] border border-cream/12 bg-cream/[0.04] p-6">
            <h3 className="flex items-center gap-2.5 text-[0.7rem] font-extrabold uppercase tracking-[0.3em] text-gold">
              <Accessibility className="h-4 w-4" aria-hidden="true" />
              Our promise — on &amp; off stage
            </h3>
            <p className="mt-4 text-[0.88rem] leading-relaxed text-cream/60">
              Accessibility is our baseline, not our bonus: this site uses high-contrast design, reduced-motion support
              and screen-reader-friendly structure — and our rehearsals use calm rooms, visual schedules and flexible
              everything.
            </p>
            <Link
              to="/inclusion"
              className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-gold transition-colors hover:text-gold-soft"
            >
              Read Inclusion by Design
              <ArrowUp className="h-3.5 w-3.5 -rotate-45" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-cream/10 py-8 sm:flex-row">
          <p className="text-[0.8rem] font-bold text-cream/45">
            © {new Date().getFullYear()} Better Together Performing Arts · A community arts nonprofit in formation
          </p>
          <p className="flex items-center gap-2 text-[0.8rem] font-bold text-cream/45">
            Built with <Star4 className="h-3 w-3 text-gold" /> inclusion by design
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-all hover:-translate-y-1 hover:border-gold hover:text-gold"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
