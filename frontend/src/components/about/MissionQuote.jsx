import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function MissionQuote() {
  return (
    <section className="py-16 bg-[hsl(var(--kotz-ink-2))]/40 relative">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="relative p-8 sm:p-12 rounded-3xl border border-border bg-[hsl(var(--kotz-ink-2))] overflow-hidden">
          <Quote className="absolute top-6 left-6 h-12 w-12 text-foreground/8" />
          <Quote className="absolute bottom-6 right-6 h-12 w-12 text-foreground/8 rotate-180" />
          <p className="relative font-serif italic text-3xl sm:text-4xl text-foreground/90 leading-tight text-balance text-center">
            “I want kids to look at the Kotzinons and believe they can build worlds too.”
          </p>
          <p className="relative mt-5 text-center text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--kotz-gold))]">
            — Uri Eini, Creator
          </p>
        </Card>
      </div>
    </section>
  );
}
