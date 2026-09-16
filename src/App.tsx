import { useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Header } from "./components/Header";
import { StickyBar } from "./components/StickyBar";
import { HowToPlay } from "./components/HowToPlay";
import { QuestionCard } from "./components/QuestionCard";
import { Footer } from "./components/Footer";
import { questions } from "./data/treasureHunt";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const maxHintReveals = 3;
const hintRevealStorageKey = "treasure-hunt-hint-reveals";

function getStoredHintReveals() {
  if (typeof window === "undefined") return 0;

  const stored = Number.parseInt(
    window.localStorage.getItem(hintRevealStorageKey) ?? "0",
    10,
  );

  return Number.isFinite(stored)
    ? Math.min(Math.max(stored, 0), maxHintReveals)
    : 0;
}

export default function App() {
  const [hintReveals, setHintReveals] = useState(getStoredHintReveals);

  const revealHint = () => {
    setHintReveals((current) => {
      if (current >= maxHintReveals) return current;

      const next = current + 1;
      window.localStorage.setItem(hintRevealStorageKey, String(next));
      return next;
    });
  };

  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-paper font-sans text-ink">
      <div aria-hidden className="theme-backdrop" />

      <div className="relative">
      <StickyBar />
      <Header />

      <main className="mx-auto w-full max-w-2xl px-5 sm:px-6">
        <HowToPlay />

        {/* The clues */}
        <section aria-labelledby="clues-heading" className="py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="flex items-end justify-between gap-4 border-b border-line pb-5"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-600">
                The hunt
              </p>
              <h2
                id="clues-heading"
                className="mt-1.5 font-display text-3xl font-semibold tracking-[-0.01em] text-ink sm:text-4xl"
              >
                The Clues
              </h2>
            </div>
            <span className="shrink-0 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-soft">
              {questions.length} Questions
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
            className="mt-5 flex items-center gap-2 text-sm text-muted"
          >
            <Info aria-hidden className="h-4 w-4 shrink-0 text-gold-500" />
            Stuck on a clue? Tap the info icon to reveal a hint. You have {maxHintReveals - hintReveals} hint reveals remaining.
          </motion.p>

          <div className="mt-7 space-y-4 sm:space-y-5">
            {questions.map((question, i) => (
              <QuestionCard
                key={question.id}
                question={question}
                index={i}
                hintRevealsRemaining={maxHintReveals - hintReveals}
                onRevealHint={revealHint}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      </div>
    </div>
  );
}
