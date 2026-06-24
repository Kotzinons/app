import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LOGO_URL } from "@/lib/constants";
import OrbitBackground from "@/components/common/OrbitBackground";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-[70vh] flex items-center bg-[hsl(var(--kotz-ink))]" data-testid="not-found-page">
      <OrbitBackground />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img src={LOGO_URL} alt="The Kotzinons" className="h-24 w-24 mx-auto" />
        <p className="mt-4 text-[10px] font-mono uppercase tracking-[0.3em] text-[hsl(var(--kotz-gold))]">
          Error 404 — lost in the orbit
        </p>
        <h1 className="mt-3 font-display text-5xl sm:text-7xl tracking-wider leading-none text-foreground">
          PAGE NOT FOUND
        </h1>
        <p className="mt-4 text-foreground/65 max-w-xl mx-auto">
          The Kotzinons looked everywhere — even with cosmic sight. This page doesn&apos;t exist on our map.
        </p>
        <Button asChild size="lg" className="mt-6 rounded-xl bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold" data-testid="not-found-home-cta">
          <Link to="/">Take me home</Link>
        </Button>
      </div>
    </div>
  );
}
