import { Link } from "react-router-dom";
import { Mail, Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import OrbitBackground from "@/components/common/OrbitBackground";
import { INVESTOR_EMAIL, GROUP_TRIO_URL } from "@/lib/constants";

const PROOF = [
  { stat: "Original IP", label: "Hand-drawn & built by the creator" },
  { stat: "5 Heroes", label: "Fully designed and 3D-rendered" },
  { stat: "In Production", label: "Animation team actively shipping" },
  { stat: "Storybook", label: "Vol. 1 — Origins coming soon" },
];

function ProofStrip() {
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
      {PROOF.map((p) => (
        <div key={p.stat} className="rounded-xl border border-border bg-[hsl(var(--kotz-ink-2))]/80 backdrop-blur p-4">
          <p className="font-display text-2xl tracking-wider text-[hsl(var(--kotz-gold))]">{p.stat}</p>
          <p className="mt-1 text-xs text-foreground/65 leading-snug">{p.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function InvestHero() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--kotz-ink))] min-h-[75vh] flex items-center">
      <div className="absolute inset-0">
        <img src={GROUP_TRIO_URL} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--kotz-ink))] via-[hsl(var(--kotz-ink))]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--kotz-ink))] via-transparent to-transparent" />
      </div>
      <OrbitBackground intensity="high" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="max-w-3xl">
          <Badge
            variant="outline"
            className="bg-[hsl(var(--kotz-gold))]/15 text-[hsl(var(--kotz-gold))] border-[hsl(var(--kotz-gold))]/50 font-mono text-[10px] tracking-[0.25em] uppercase"
          >
            <Handshake className="h-3 w-3 mr-1" /> For Investors, Studios & Distributors
          </Badge>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl tracking-wider leading-[0.9] text-foreground">
            OWN A PIECE OF
            <br />
            <span className="gold-text">THE KOTZINONS</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-foreground/75 max-w-2xl text-balance leading-relaxed">
            An original, IP-protected universe of armored heroes. Toy line, storybook, and animated
            series in active production. We are open to partners who want to <span className="text-foreground">buy the real product</span>,
            <span className="text-foreground"> license the brand</span>, or <span className="text-foreground">invest in distribution</span>.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold shadow-[0_20px_40px_-15px_rgba(245,192,51,0.5)]"
              data-testid="invest-hero-email"
            >
              <a href={`mailto:${INVESTOR_EMAIL}?subject=Kotzinons%20Investment%20%2F%20Licensing%20Inquiry`}>
                <Mail className="h-4 w-4" /> {INVESTOR_EMAIL}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-border bg-transparent text-foreground hover:bg-foreground/5"
            >
              <Link to="/contact?inquiry=investment" data-testid="invest-hero-form">
                Send a structured inquiry <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
          <ProofStrip />
        </div>
      </div>
    </section>
  );
}
