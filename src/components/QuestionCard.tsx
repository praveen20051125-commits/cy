import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Info, Lightbulb, X } from "lucide-react";
import type { TreasureQuestion } from "../data/treasureHunt";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface QuestionCardProps {
  question: TreasureQuestion;
  index: number;
  hintRevealsRemaining: number;
  onRevealHint: () => void;
}

export function QuestionCard({
  question,
  index,
  hintRevealsRemaining,
  onRevealHint,
}: QuestionCardProps) {
  const [open, setOpen] = useState(false);

  const num = String(question.id).padStart(2, "0");
  const hintId = `hint-${question.id}`;
  const canRevealHint = open || hintRevealsRemaining > 0;

  const toggleHint = () => {
    if (open) {
      setOpen(false);
      return;
    }

    if (hintRevealsRemaining === 0) return;

    onRevealHint();
    setOpen(true);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.55,
        delay: Math.min(index, 4) * 0.06,
        ease: easeOut,
      }}
      className="group rounded-2xl border border-gold-300 bg-surface/95 shadow-[0_1px_2px_rgba(132,89,30,0.08),0_12px_32px_-20px_rgba(132,89,30,0.3)] transition-[border-color,box-shadow] duration-300 hover:border-gold-500 hover:shadow-[0_2px_4px_rgba(132,89,30,0.1),0_20px_44px_-20px_rgba(132,89,30,0.38)]"
    >
      <div className="flex items-start gap-4 p-5 sm:gap-5 sm:p-6">
        {/* Number anchor */}
        <div
          aria-hidden
          className="flex w-9 shrink-0 flex-col items-center border-r border-dashed border-line pr-4 sm:w-11"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted">
            Q
          </span>
          <span className="mt-1 font-display text-3xl font-light leading-none text-gold-600">
            {num}
          </span>
        </div>

        {/* Question text */}
        <div className="min-w-0 flex-1 pt-1">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold-600">
            Question {num}
          </h3>
          <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink sm:text-base">
            {question.question}
          </p>
        </div>

        {/* Hint toggle */}
        <motion.button
          type="button"
          onClick={toggleHint}
          disabled={!canRevealHint}
          whileTap={{ scale: 0.88 }}
          aria-expanded={open}
          aria-controls={hintId}
          aria-label={
            open
              ? `Hide hint for question ${num}`
              : canRevealHint
                ? `Reveal hint for question ${num}`
                : "No hint reveals remaining"
          }
          className={`mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-40 ${
            open
              ? "border-gold-500 bg-gold-500 text-white"
              : "border-line bg-paper text-soft hover:border-gold-400 hover:text-gold-600"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="inline-flex"
              >
                <X className="h-4 w-4" strokeWidth={2.5} />
              </motion.span>
            ) : (
              <motion.span
                key="info"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="inline-flex"
              >
                <Info className="h-4 w-4" strokeWidth={2.5} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Hint panel — hidden until the info icon is tapped */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={hintId}
            key="hint"
            role="region"
            aria-label={`Hint for question ${num}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <div className="rounded-xl border border-gold-300 bg-gold-100/90 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] sm:p-5">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-gold-700">
                  <Lightbulb aria-hidden className="h-3.5 w-3.5" />
                  Hint
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-ink/85">
                  {question.hint}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
