import { motion } from "framer-motion";
import { LogoMark } from "./ui";

/* Theatre-curtain preloader: two velvet panels part to reveal the stage. */
export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100]"
      role="status"
      aria-label="Better Together Performing Arts is loading"
      exit={{ opacity: 0 }}
    >
      {/* left curtain */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-plum-deep"
        exit={{ x: "-100%" }}
        transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
      >
        <div className="dot-grid-light absolute inset-0 opacity-40" />
        <div className="absolute right-0 inset-y-0 w-10 bg-gradient-to-l from-black/30 to-transparent" />
      </motion.div>

      {/* right curtain */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-plum-deep"
        exit={{ x: "100%" }}
        transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
      >
        <div className="dot-grid-light absolute inset-0 opacity-40" />
        <div className="absolute left-0 inset-y-0 w-10 bg-gradient-to-r from-black/30 to-transparent" />
      </motion.div>

      {/* center lockup */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-5"
        exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.35 } }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <LogoMark className="h-20 w-20" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="font-display text-2xl font-medium italic text-cream"
        >
          The curtain rises…
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.05, ease: "easeInOut" }}
          className="h-0.5 w-44 origin-left bg-gold"
        />
      </motion.div>
    </motion.div>
  );
}
