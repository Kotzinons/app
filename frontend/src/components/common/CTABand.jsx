import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles } from "lucide-react";
import NewsletterForm from "@/components/common/NewsletterForm";

export default function CTABand() {
  return (
    <section className="relative" data-testid="cta-band">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[hsl(var(--kotz-ink))] text-white p-8 sm:p-12 lg:p-14">
          <div className="absolute inset-0 bg-grain opacity-80" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,hsla(43,96%,56%,0.35),transparent_60%)]" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,hsla(210,95%,50%,0.3),transparent_60%)]" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-white/70">
                <Sparkles className="h-3.5 w-3.5" /> Join the universe
              </p>
              <h3 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl tracking-wider leading-[0.95]">
                BE THE FIRST TO SEE WHAT'S NEXT
              </h3>
              <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl">
                Get news on new characters, animations, toys, and behind-the-scenes drops —
                straight to your inbox.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <NewsletterForm variant="dark" />
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-xl gap-2 bg-white text-[hsl(var(--kotz-ink))] hover:bg-white/90"
                  data-testid="cta-band-contact"
                >
                  <Link to="/contact">
                    <Mail className="h-4 w-4" /> Partnership & Press
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-white/30 bg-white/5 text-white hover:bg-white/10"
                  data-testid="cta-band-watch"
                >
                  <Link to="/animations">Watch the Animation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
