import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles, BookOpen } from "lucide-react";
import { INVESTOR_EMAIL } from "@/lib/constants";

export default function InvestFinalCTA() {
  return (
    <section className="py-20 bg-[hsl(var(--kotz-ink))]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 sm:p-12 rounded-3xl border border-[hsl(var(--kotz-gold))]/30 bg-[hsl(var(--kotz-ink-2))] relative overflow-hidden text-center">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,hsla(43,92%,56%,0.3),transparent_60%)]" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,hsla(213,92%,56%,0.2),transparent_60%)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[hsl(var(--kotz-gold))]">
              <Sparkles className="h-3.5 w-3.5" /> Let&apos;s build the next great hero universe
            </div>
            <h3 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl tracking-wider text-foreground leading-[0.95]">
              ONE EMAIL AWAY.
            </h3>
            <p className="mt-4 text-foreground/65 max-w-2xl mx-auto text-sm sm:text-base">
              Serious partners receive a full deck, story bible, prototype gallery, and current
              production status within 48 hours of inquiry.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold"
                data-testid="invest-final-email"
              >
                <a href={`mailto:${INVESTOR_EMAIL}?subject=Kotzinons%20Investment%20%2F%20Licensing%20Inquiry`}>
                  <Mail className="h-4 w-4" /> {INVESTOR_EMAIL}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-border bg-transparent text-foreground hover:bg-foreground/5">
                <Link to="/contact?inquiry=investment">Contact form</Link>
              </Button>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-foreground/50">
              <BookOpen className="h-3.5 w-3.5" /> Storybook · Animation · Toy line · Distribution
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
