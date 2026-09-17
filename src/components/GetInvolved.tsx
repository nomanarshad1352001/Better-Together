import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent, type MouseEvent } from "react";
import { CONTACT, PATHWAYS } from "../lib/data";
import { Eyebrow, FacebookIcon, FadeIn, InstagramIcon, Star4 } from "./ui";

export const inputCls =
  "w-full rounded-xl border border-cream/20 bg-cream/[0.06] px-4 py-3 text-[0.95rem] text-cream placeholder:text-cream/35 transition-colors focus:border-gold focus:bg-cream/10 focus:outline-none";

export function InterestForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div id="interest-form" className="relative h-full scroll-mt-28 overflow-hidden rounded-[2rem] bg-plum-deep p-7 text-cream shadow-[0_36px_90px_rgba(39,16,46,0.35)] sm:p-10">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-gold via-coral to-gold" />
      <Star4 className="animate-twinkle absolute right-8 top-8 h-5 w-5 text-gold/70" />

      {sent ? (
        <div className="flex h-full min-h-[26rem] flex-col items-center justify-center text-center" role="status">
          <CheckCircle2 className="h-16 w-16 text-gold" aria-hidden="true" />
          <h3 className="mt-6 font-display text-3xl font-medium italic">You&apos;re on the cast list!</h3>
          <p className="mt-3 max-w-sm text-cream/70">
            Break a leg — we&apos;ll be in touch within two business days with next steps, event details, and ways to
            get involved.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-8 rounded-full border border-cream/30 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Send another note
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} aria-label="Interest and contact form">
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-gold">Say hello</p>
          <h3 className="mt-2 font-display text-3xl font-medium tracking-tight">Join the ensemble</h3>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="gi-name" className="mb-1.5 block text-xs font-extrabold uppercase tracking-[0.16em] text-cream/60">
                Your name <span aria-hidden="true" className="text-coral">*</span>
              </label>
              <input id="gi-name" name="name" type="text" required autoComplete="name" placeholder="Jamie Rivera" className={inputCls} />
            </div>
            <div>
              <label htmlFor="gi-email" className="mb-1.5 block text-xs font-extrabold uppercase tracking-[0.16em] text-cream/60">
                Email <span aria-hidden="true" className="text-coral">*</span>
              </label>
              <input id="gi-email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" className={inputCls} />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="gi-interest" className="mb-1.5 block text-xs font-extrabold uppercase tracking-[0.16em] text-cream/60">
              I&apos;m here to…
            </label>
            <select id="gi-interest" name="interest" className={`${inputCls} appearance-none [&>option]:text-ink`} defaultValue="Enroll my child (2027 season)">
              <option>Enroll my child (2027 season)</option>
              <option>RSVP to an upcoming event</option>
              <option>Volunteer</option>
              <option>Partner or sponsor</option>
              <option>Just say hello</option>
            </select>
          </div>

          <div className="mt-5">
            <label htmlFor="gi-msg" className="mb-1.5 block text-xs font-extrabold uppercase tracking-[0.16em] text-cream/60">
              Anything we should know?
            </label>
            <textarea
              id="gi-msg"
              name="message"
              rows={4}
              placeholder="Tell us about your performer — interests, supports that help them shine, access questions…"
              className={`${inputCls} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-plum-deep shadow-[0_12px_34px_rgba(233,180,76,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft"
          >
            Take your place in the cast
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="mt-4 text-center text-[0.78rem] leading-relaxed text-cream/45">
            No spam, ever — just season announcements and event invitations.
          </p>
        </form>
      )}
    </div>
  );
}

export default function GetInvolvedSection({ showHeader = true }: { showHeader?: boolean }) {
  const scrollToForm = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("interest-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="get-involved" aria-labelledby="involved-title" className="relative overflow-hidden bg-parchment py-24 sm:py-32">
      <div aria-hidden="true" className="absolute -left-20 bottom-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {showHeader && (
          <FadeIn className="max-w-3xl">
            <Eyebrow index="05" label="Get involved" />
            <h2 id="involved-title" className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4rem)] font-medium leading-[1.04] tracking-[-0.015em]">
              The house lights are up. <em className="italic text-coral-deep">Come on in.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Whether you&apos;re raising a future performer, lending a pair of hands, or cheering from the front row —
              there&apos;s a place for you in this cast.
            </p>
          </FadeIn>
        )}

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          {/* ——— Pathways + contact ——— */}
          <div className="flex flex-col gap-4">
            {PATHWAYS.map((p, i) => (
              <FadeIn key={p.title} delay={0.07 * i} y={22}>
                <a
                  href="#interest-form"
                  onClick={scrollToForm}
                  className="group flex items-center gap-5 rounded-[1.5rem] border border-ink/10 bg-cream p-4 pr-6 transition-all duration-500 hover:-translate-y-1 hover:border-plum/25 hover:shadow-[0_20px_50px_rgba(39,16,46,0.14)]"
                >
                  <span className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-32">
                    <img src={p.img.src} alt={p.img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center gap-2.5">
                      <p.icon className="h-4.5 w-4.5 text-coral-deep" aria-hidden="true" />
                      <span className="font-display text-xl font-semibold tracking-tight">{p.title}</span>
                    </span>
                    <span className="mt-1 block text-[0.9rem] leading-snug text-ink/65">{p.copy}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral-deep" aria-hidden="true" />
                </a>
              </FadeIn>
            ))}

            {/* direct contact */}
            <FadeIn delay={0.2}>
              <div className="mt-2 grid gap-3 sm:grid-cols-3">
                <a href={`mailto:${CONTACT.email}`} className="group rounded-2xl border border-ink/10 bg-white/50 p-4 transition-colors hover:border-coral/50">
                  <Mail className="h-5 w-5 text-coral-deep" aria-hidden="true" />
                  <p className="mt-2 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-ink/45">Email</p>
                  <p className="mt-0.5 break-all text-[0.85rem] font-bold group-hover:text-coral-deep">{CONTACT.email}</p>
                </a>
                <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, "")}`} className="group rounded-2xl border border-ink/10 bg-white/50 p-4 transition-colors hover:border-coral/50">
                  <Phone className="h-5 w-5 text-coral-deep" aria-hidden="true" />
                  <p className="mt-2 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-ink/45">Call us</p>
                  <p className="mt-0.5 text-[0.85rem] font-bold group-hover:text-coral-deep">{CONTACT.phone}</p>
                </a>
                <div className="rounded-2xl border border-ink/10 bg-white/50 p-4">
                  <MapPin className="h-5 w-5 text-coral-deep" aria-hidden="true" />
                  <p className="mt-2 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-ink/45">Visit</p>
                  <p className="mt-0.5 text-[0.85rem] font-bold leading-snug">{CONTACT.place}</p>
                </div>
              </div>
            </FadeIn>

            {/* follow card */}
            <FadeIn delay={0.25}>
              <div className="relative mt-2 overflow-hidden rounded-[1.5rem] bg-plum-deep p-6 text-cream sm:p-7">
                <Star4 className="absolute -right-4 -top-4 h-20 w-20 text-plum-soft" />
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-gold">Follow the journey</p>
                <p className="mt-2 font-display text-2xl font-medium italic">{CONTACT.handle}</p>
                <p className="mt-2 max-w-sm text-[0.88rem] leading-relaxed text-cream/60">
                  Our Facebook &amp; Instagram are freshly launched — come say hello and help us reach every family in
                  town.
                </p>
                <div className="mt-5 flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Better Together on Facebook (opens in a new tab)"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Better Together on Instagram (opens in a new tab)"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ——— Form ——— */}
          <FadeIn delay={0.12} className="h-full">
            <InterestForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
