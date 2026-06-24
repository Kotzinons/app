import { motion } from "framer-motion";
import { Pencil, Hammer, Cpu, Film } from "lucide-react";

const STEPS = [
  {
    icon: Pencil,
    color: "red",
    title: "The Drawing",
    body: "It all started with Uri's pen on paper — a team of armored heroes sketched into existence.",
  },
  {
    icon: Hammer,
    color: "gold",
    title: "The Prototype",
    body: "Uri hand-built the first physical Kotzinon toy, turning the drawings into something you could hold.",
  },
  {
    icon: Cpu,
    color: "blue",
    title: "3D Renders",
    body: "The team brought every spike, dome, and detail to life with high-fidelity 3D models and renders.",
  },
  {
    icon: Film,
    color: "green",
    title: "Animation",
    body: "And now the Kotzinons move — a brand-new animation team is taking them to screens worldwide.",
  },
];

const COLOR = {
  red: { bg: "bg-[hsl(var(--kotz-red))]", text: "text-[hsl(var(--kotz-red))]", soft: "bg-[hsl(var(--kotz-red))]/15" },
  blue: { bg: "bg-[hsl(var(--kotz-blue))]", text: "text-[hsl(var(--kotz-blue))]", soft: "bg-[hsl(var(--kotz-blue))]/15" },
  gold: { bg: "bg-[hsl(var(--kotz-gold))]", text: "text-[hsl(var(--kotz-gold))]", soft: "bg-[hsl(var(--kotz-gold))]/20" },
  green: { bg: "bg-[hsl(var(--kotz-green))]", text: "text-[hsl(var(--kotz-green))]", soft: "bg-[hsl(var(--kotz-green))]/15" },
};

export default function JourneyTimeline() {
  return (
    <div data-testid="journey-timeline" className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const c = COLOR[s.color];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))] p-6 overflow-hidden hover:border-[hsl(var(--kotz-gold))]/40 transition-colors duration-300"
            >
              <span className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-grain opacity-30" />
              <div className={`inline-flex items-center justify-center h-11 w-11 rounded-xl ${c.soft} border border-white/5`}>
                <Icon className={`h-5 w-5 ${c.text}`} />
              </div>
              <p className="mt-4 text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/50">
                Step {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-2xl tracking-wider text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{s.body}</p>
              <div className={`mt-5 h-1 w-12 rounded-full ${c.bg}`} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
