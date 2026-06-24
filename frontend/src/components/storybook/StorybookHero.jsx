import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Mail, Bell } from "lucide-react";
import OrbitBackground from "@/components/common/OrbitBackground";
import StorybookCover from "@/components/common/StorybookCover";
import { INVESTOR_EMAIL } from "@/lib/constants";

export default function StorybookHero() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--kotz-ink))] min-h-[70vh] flex items-center">
      <OrbitBackground intensity="high" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Badge
              variant="outline"
              className="bg-[hsl(var(--kotz-gold))]/15 text-[hsl(var(--kotz-gold))] border-[hsl(var(--kotz-gold))]/50 font-mono text-[10px] tracking-[0.25em] uppercase"
            >
              <Sparkles className="h-3 w-3 mr-1" /> Coming Soon
            </Badge>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl tracking-wider leading-[0.9] text-foreground">
              THE KOTZINONS
              <br />
              <span className="font-serif italic font-medium text-3xl sm:text-4xl lg:text-5xl gold-text normal-case tracking-normal">
                Storybook — Origins
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-foreground/70 max-w-xl text-balance leading-relaxed">
              The official illustrated origin story is in production. A fully painted, kid-friendly
              journey through how the Kotzinons came to be — from a single drawing to the Crystal Cell
              that chose their leader.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold"
                data-testid="storybook-notify-cta"
              >
                <a href="#notify-me">
                  <Bell className="h-4 w-4" /> Notify me at launch
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-border bg-transparent text-foreground hover:bg-foreground/5"
                data-testid="storybook-license-cta"
              >
                <a href={`mailto:${INVESTOR_EMAIL}?subject=Storybook%20Licensing`}>
                  <Mail className="h-4 w-4 mr-1" /> Licensing & publishing
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <StorybookCover size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
