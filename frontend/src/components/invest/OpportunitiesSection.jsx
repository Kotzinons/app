import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Boxes, ShieldCheck, TrendingUp, Film } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const OPPORTUNITIES = [
  {
    icon: Boxes,
    title: "Buy the Real Product",
    body: "Acquire the rights, prototypes, and manufacturing roadmap to bring the Kotzinons toy line to retail.",
    accent: "red",
  },
  {
    icon: ShieldCheck,
    title: "License the IP",
    body: "Use the characters, story, and brand for animation, gaming, publishing, theme parks, or merchandise.",
    accent: "gold",
  },
  {
    icon: TrendingUp,
    title: "Invest in Distribution",
    body: "Partner with us to scale distribution worldwide — retail, streaming platforms, and online channels.",
    accent: "green",
  },
  {
    icon: Film,
    title: "Co-produce Animation",
    body: "Studios & platforms welcome. Co-produce the upcoming Kotzinons animated series or specials.",
    accent: "blue",
  },
];

const ACCENT = {
  red: "text-[hsl(var(--kotz-red))] bg-[hsl(var(--kotz-red))]/15 border-[hsl(var(--kotz-red))]/30",
  gold: "text-[hsl(var(--kotz-gold))] bg-[hsl(var(--kotz-gold))]/20 border-[hsl(var(--kotz-gold))]/40",
  green: "text-[hsl(var(--kotz-green))] bg-[hsl(var(--kotz-green))]/15 border-[hsl(var(--kotz-green))]/30",
  blue: "text-[hsl(var(--kotz-blue))] bg-[hsl(var(--kotz-blue))]/15 border-[hsl(var(--kotz-blue))]/30",
};

function OpportunityCard({ icon: Icon, title, body, accent, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Card className="p-6 rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))] hover:border-[hsl(var(--kotz-gold))]/40 transition-colors duration-300 h-full">
        <div className={cn("inline-flex items-center justify-center h-12 w-12 rounded-xl border", ACCENT[accent])}>
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 font-display text-2xl tracking-wider text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{body}</p>
      </Card>
    </motion.div>
  );
}

export default function OpportunitiesSection() {
  return (
    <section className="py-20 bg-[hsl(var(--kotz-ink))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Opportunities"
          title="FOUR WAYS TO PARTNER WITH US"
          subtitle="Whether you want to acquire, license, distribute, or co-produce — there is a path that works for you."
          align="center"
          className="mx-auto mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {OPPORTUNITIES.map((o, i) => (
            <OpportunityCard key={o.title} {...o} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
