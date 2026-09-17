import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CONTACT, NAV_LINKS } from "../lib/data";
import { FacebookIcon, InstagramIcon, Star4, Wordmark } from "./ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const { pathname } = useLocation();
  const isHome = pathname === "/";
  // Over the home page's velvet hero (or the mobile menu) the bar stays
  // transparent with cream text; everywhere else it wears its cream stage.
  const onDark = isHome && !scrolled && !open;
  const light = onDark || open;
  const solid = !open && (scrolled || !isHome);

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    `relative text-[0.82rem] font-extrabold uppercase tracking-[0.18em] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:rounded-full after:transition-all after:duration-300 ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    } ${
      light
        ? isActive
          ? "text-gold after:bg-gold"
          : "text-cream/85 hover:text-gold after:bg-gold"
        : isActive
          ? "text-coral-deep after:bg-coral"
          : "text-ink/75 hover:text-coral-deep after:bg-coral"
    }`;

  return (
    <>
      {/* gold scroll-progress thread */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gold"
      />

      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          solid
            ? "border-b border-ink/10 bg-cream/85 shadow-[0_10px_40px_rgba(39,16,46,0.08)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="group relative z-[70]" aria-label="Better Together Performing Arts — home">
            <Wordmark dark={!light} />
          </Link>

          {/* desktop links */}
          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.slice(0, 4).map((l) => (
              <NavLink key={l.to} to={l.to} className={desktopLink}>
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/get-involved"
              className="inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-plum-deep shadow-[0_8px_24px_rgba(233,180,76,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              Get Involved
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </NavLink>
          </nav>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`relative z-[75] inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
              light ? "border-cream/30 text-cream" : "border-ink/20 text-ink"
            }`}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-4%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-3%", transition: { duration: 0.25 } }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[65] flex flex-col justify-between overflow-hidden bg-plum-deep px-6 pb-10 pt-28"
          >
            <div className="beam beam-left opacity-50" aria-hidden="true" />
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-1.5">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: -26 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <NavLink
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-baseline gap-4 border-b border-cream/10 py-4 ${isActive ? "[&>span:last-of-type]:text-gold" : ""}`
                      }
                    >
                      <span className="text-xs font-extrabold tracking-[0.3em] text-gold">{l.index}</span>
                      <span className="font-display text-4xl font-medium text-cream transition-colors group-hover:text-gold">
                        {l.label}
                      </span>
                      <Star4 className="ml-auto h-4 w-4 self-center text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center justify-between"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cream/50">{CONTACT.handle}</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Better Together on Facebook (opens in a new tab)"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Better Together on Instagram (opens in a new tab)"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
