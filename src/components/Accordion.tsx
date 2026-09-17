import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";

export default function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: { q: string; a: string }[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const btnId = `${baseId}-btn-${i}`;
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
              isOpen ? "border-plum/25 bg-plum text-cream shadow-[0_20px_50px_rgba(39,16,46,0.25)]" : "border-ink/10 bg-white/60 hover:border-plum/25"
            }`}
          >
            <button
              type="button"
              id={btnId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className={`font-display text-lg font-semibold tracking-tight ${isOpen ? "text-gold-soft" : "text-ink"}`}>
                {item.q}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-180 bg-gold text-plum-deep" : "bg-plum/10 text-plum"
                }`}
              >
                {isOpen ? <Minus className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-6 pb-6 text-[0.95rem] leading-relaxed text-cream/75">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
