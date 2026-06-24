import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LOGO_URL } from "@/lib/constants";
import OrbitBackground from "@/components/common/OrbitBackground";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-[70vh] flex items-center" data-testid="not-found-page">
      <OrbitBackground />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img src={LOGO_URL} alt="Kotzinons logo" className="h-24 w-24 mx-auto" />
        <p className="mt-4 text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
          Error 404 — lost in the orbit
        </p>
        <h1 className="mt-3 font-display text-5xl sm:text-7xl tracking-wider leading-none">
          PAGE NOT FOUND
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          The Kotzinons looked everywhere — even with cosmic sight. This page doesn't exist on our map.
        </p>
        <Button asChild size="lg" className="mt-6 rounded-xl" data-testid="not-found-home-cta">
          <Link to="/">Take me home</Link>
        </Button>
      </div>
    </div>
  );
}
