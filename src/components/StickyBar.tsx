import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Compass } from "lucide-react";
import { eventConfig, questions } from "../data/treasureHunt";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * A minimal floating top bar that appears once the visitor scrolls
 * past the header — keeps the event name one tap away on long pages.
 */
export function StickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 340);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.35, ease: easeOut }}
          className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md"
        >
          <div className="mx-auto flex h-14 w-full max-w-2xl items-center justify-between px-5">
            <a href="#top" className="flex items-center gap-2.5">
              <Compass aria-hidden className="h-4 w-4 text-gold-600" />
              <span className="font-display text-base font-semibold text-ink">
                {eventConfig.collegeShortName}
              </span>
              <span
                aria-hidden
                className="hidden text-[11px] font-semibold uppercase tracking-[0.28em] text-muted sm:inline"
              >
                Treasure Hunt
              </span>
            </a>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              {questions.length} Clues
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
