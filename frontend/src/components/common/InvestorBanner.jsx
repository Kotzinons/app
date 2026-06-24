import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Handshake } from "lucide-react";
import { INVESTOR_EMAIL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function InvestorBanner({ compact = false, className }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[hsl(var(--kotz-gold))]/30 bg-[hsl(var(--kotz-ink-2))]",
        compact ? "p-6" : "p-8 sm:p-10 lg:p-12",
        className
      )}
      data-testid="investor-banner"
    >
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,hsla(43,92%,56%,0.35),transparent_60%)]" />
      <div className="absolute inset-0 bg-grain opacity-40" />
      <div className="relative grid lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[hsl(var(--kotz-gold))]">
            <Handshake className="h-3.5 w-3.5" /> Licensing · Distribution · Investment
          </div>
          <h3 className={cn("mt-3 font-display tracking-wider text-foreground leading-[0.95]", compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl lg:text-5xl")}>
            INTERESTED IN BRINGING THE KOTZINONS TO THE WORLD?
          </h3>
          <p className="mt-3 text-foreground/65 text-sm sm:text-base max-w-2xl">
            We're open to partners interested in <span className="text-foreground/90">buying the real product line</span>,
            <span className="text-foreground/90"> licensing the IP</span>, or <span className="text-foreground/90">investing in distribution</span>.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold"
            data-testid="investor-banner-email"
          >
            <a href={`mailto:${INVESTOR_EMAIL}?subject=Kotzinons%20Licensing%20%26%20Investment`}>
              <Mail className="h-4 w-4" /> {INVESTOR_EMAIL}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-xl border-border bg-transparent text-foreground hover:bg-foreground/5"
            data-testid="investor-banner-page"
          >
            <Link to="/invest">View deck <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
