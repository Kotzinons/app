import { Badge } from "@/components/ui/badge";
import { LOGO_URL, RUBY_HERO_URL } from "@/lib/constants";

export default function RubySpotlight() {
  return (
    <section className="py-20 bg-[hsl(var(--kotz-ink-2))]/40 relative">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Badge variant="outline" className="bg-[hsl(var(--kotz-red))]/15 text-[hsl(var(--kotz-red))] border-[hsl(var(--kotz-red))]/40 font-mono text-[10px] uppercase tracking-wider">
              Heart of the team
            </Badge>
            <h3 className="mt-3 font-display text-4xl sm:text-5xl tracking-wider leading-tight text-foreground">
              RUBY — ROYAL LINEAGE.
            </h3>
            <p className="mt-4 text-foreground/65 text-base leading-relaxed">
              Ruby is the only female Kotzinon and the swiftest of them all. Her ruby-tipped
              spear and crowned helm mark her royal lineage. In every story, she is the bridge
              between strength and strategy — the heart of the team.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[hsl(var(--kotz-gold))]">
              <img src={LOGO_URL} alt="" className="h-7 w-7" /> Kotzinons archive · hero #05
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-3xl border border-border overflow-hidden bg-black">
              <img src={RUBY_HERO_URL} alt="Ruby" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
