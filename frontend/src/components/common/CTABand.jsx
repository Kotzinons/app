import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles, ArrowRight } from "lucide-react";
import NewsletterForm from "@/components/common/NewsletterForm";
import { INVESTOR_EMAIL } from "@/lib/constants";

export default function CTABand() {
  return (
    <section className="relative" data-testid="cta-band">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[hsl(var(--kotz-ink-2))] p-8 sm:p-12 lg:p-14">
          <div className="absolute inset-0 bg-grain opacity-50" />
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,hsla(43,92%,56%,0.35),transparent_60%)]" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,hsla(213,92%,56%,0.25),transparent_60%)]" />
          <div className="absolute inset-x-0 top-0 h-px comet-stripe opacity-60" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[hsl(var(--kotz-gold))]">
                <Sparkles className="h-3.5 w-3.5" /> Join the universe
              </p>
              <h3 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl tracking-wider leading-[0.95] text-foreground">
                BE THE FIRST TO SEE WHAT'S NEXT
              </h3>
              <p className="mt-4 text-foreground/65 text-base sm:text-lg max-w-xl">
                Animations, characters, the upcoming storybook, and behind-the-scenes drops —
                straight to your inbox.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <NewsletterForm />
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold"
                  data-testid="cta-band-invest"
                >
                  <Link to="/invest">
                    Licensing & Invest <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-border bg-transparent text-foreground hover:bg-foreground/5"
                  data-testid="cta-band-contact"
                >
                  <a href={`mailto:${INVESTOR_EMAIL}`}><Mail className="h-4 w-4 mr-1" /> {INVESTOR_EMAIL}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
