import { motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";

/* Wraps every routed page: sets the document title and plays the page transition. */
export default function PageShell({ title, children }: { title: string; children: ReactNode }) {
  useEffect(() => {
    document.title = `${title} · Better Together Performing Arts`;
  }, [title]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16, transition: { duration: 0.28, ease: "easeIn" } }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
