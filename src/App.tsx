import { AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Inclusion from "./pages/Inclusion";
import Programs from "./pages/Programs";

/* Jump to the top of every new act (route) */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/inclusion" element={<Inclusion />} />
        <Route path="/events" element={<Events />} />
        <Route path="/get-involved" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const reduce = useReducedMotion();
  const [loading, setLoading] = useState(() => {
    if (reduce) return false;
    try {
      return !sessionStorage.getItem("bt-booted");
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!loading) return;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("bt-booted", "1");
      } catch {
        /* private mode — no encore needed */
      }
    }, 2000);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [loading]);

  const skipToMain = () => {
    const main = document.getElementById("main");
    if (!main) return;
    main.scrollIntoView({ behavior: "auto" });
    main.focus({ preventScroll: true });
  };

  return (
    <HashRouter>
      <MotionConfig reducedMotion="user">
        <ScrollToTop />

        {/* skip link — accessibility first */}
        <button
          type="button"
          onClick={skipToMain}
          className="sr-only z-[130] rounded-full bg-gold px-5 py-2.5 text-sm font-extrabold text-plum-deep shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </button>

        <AnimatePresence>{loading && <Preloader key="curtain" />}</AnimatePresence>

        {/* tactile film grain */}
        <div className="grain" aria-hidden="true" />

        <Navbar />

        <main id="main" tabIndex={-1}>
          <AnimatedRoutes />
        </main>

        <Footer />
      </MotionConfig>
    </HashRouter>
  );
}
