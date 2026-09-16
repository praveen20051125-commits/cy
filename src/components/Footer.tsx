import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { eventConfig } from "../data/treasureHunt";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: easeOut }}
      className="border-t border-line"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-3.5 px-5 py-14 text-center">
        <div className="flex items-center gap-4">
          <span aria-hidden className="h-px w-10 bg-gold-300" />
          <Compass aria-hidden className="h-4 w-4 text-gold-600" />
          <span aria-hidden className="h-px w-10 bg-gold-300" />
        </div>
        <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-gold-700">
          Treasure Hunt
        </p>
        <p className="text-sm font-medium text-soft">
          {eventConfig.collegeName}
        </p>
        <p className="text-xs text-muted">{eventConfig.department}</p>
        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
          &copy; {eventConfig.year} &middot; {eventConfig.symposium}
        </p>
      </div>
    </motion.footer>
  );
}
