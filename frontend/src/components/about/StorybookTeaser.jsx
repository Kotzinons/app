import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowRight } from "lucide-react";
import StorybookCover from "@/components/common/StorybookCover";

export default function StorybookTeaser() {
  return (
    <section className="py-20 bg-[hsl(var(--kotz-ink-2))]/40 relative">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Badge variant="outline" className="bg-[hsl(var(--kotz-gold))]/15 text-[hsl(var(--kotz-gold))] border-[hsl(var(--kotz-gold))]/50 font-mono text-[10px] tracking-[0.25em] uppercase">
              <BookOpen className="h-3 w-3 mr-1" /> The Storybook
            </Badge>
            <h3 className="mt-3 font-display text-4xl sm:text-5xl tracking-wider leading-tight text-foreground">
              THE ORIGIN, IN PRINT.
            </h3>
            <p className="mt-4 text-foreground/65 text-base leading-relaxed">
              The official storybook is in production — a beautifully illustrated companion to the
              animation, telling the story of how the Kotzinons came together. Designed for kids
              and collectors alike.
            </p>
            <Button asChild className="mt-6 rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold">
              <Link to="/storybook">Preview the storybook <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <StorybookCover size="md" />
          </div>
        </div>
      </div>
    </section>
  );
}
