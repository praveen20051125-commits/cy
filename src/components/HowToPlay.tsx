import { motion } from "framer-motion";
import { Lightbulb, ListOrdered, MapPinned } from "lucide-react";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const tips = [
  {
    icon: ListOrdered,
    title: "Follow the order",
    text: "Each clue leads to the next spot — solve them one by one.",
  },
  {
    icon: Lightbulb,
    title: "Stuck? Tap (i)",
    text: "Every question hides its own hint. Tap the info icon to reveal it.",
  },
  {
    icon: MapPinned,
    title: "Find the spot",
    text: "Each answer points to a place on campus. First team back wins.",
  },
];

export function HowToPlay() {
  return (
    <section
      aria-label="How to play"
      className="grid grid-cols-1 gap-7 border-b border-line py-10 sm:grid-cols-3 sm:gap-8 sm:py-12"
    >
      {tips.map((tip, i) => (
        <motion.div
          key={tip.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.09, ease: easeOut }}
          className="flex items-start gap-4 sm:flex-col sm:gap-3.5"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-200 bg-gold-50 text-gold-600">
            <tip.icon aria-hidden className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-gold-800">{tip.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink/75">
              {tip.text}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
