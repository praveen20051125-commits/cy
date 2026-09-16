import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { eventConfig, questions } from "../data/treasureHunt";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Diamond() {
  return <span aria-hidden className="h-1 w-1 rotate-45 bg-gold-500" />;
}

export function Header() {
  return (
    <header className="relative overflow-hidden border-b border-gold-300">
      <div className="relative mx-auto w-full max-w-2xl px-5 pb-12 pt-16 text-center sm:pb-16 sm:pt-24">
        {/* Symposium eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-800"
        >
          <span>{eventConfig.symposium}</span>
          <Diamond />
          <span>{eventConfig.year}</span>
        </motion.p>

        {/* College name */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: easeOut }}
          className="mt-6 text-balance font-display text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.01em] text-gold-800 sm:text-6xl"
        >
          {eventConfig.collegeName}
        </motion.h1>

        {/* TREASURE HUNT badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: easeOut }}
          className="mt-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-gold-500/70 bg-surface/80 py-2.5 pl-5 pr-6 shadow-[0_12px_34px_-14px_rgba(188,135,47,0.55)] backdrop-blur-sm">
            <Compass aria-hidden className="h-4 w-4 text-gold-600" />
            <span className="text-[12px] font-bold uppercase tracking-[0.34em] text-gold-700">
              Treasure Hunt
            </span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34, ease: easeOut }}
          className="mx-auto mt-6 max-w-md text-balance text-sm leading-relaxed text-ink sm:text-base"
        >
          {eventConfig.tagline}
        </motion.p>

        {/* Fact chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.44, ease: easeOut }}
          className="mt-7 flex flex-wrap items-center justify-center gap-2.5"
        >
          <span className="rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-soft">
            {questions.length} Clues
          </span>
          {eventConfig.facts.map((fact) => (
            <span
              key={fact}
              className="rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-soft"
            >
              {fact}
            </span>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
