import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles, CheckCircle2, Handshake, Briefcase, Globe2, ArrowRight, TrendingUp, Boxes, Film, BookOpen, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import OrbitBackground from "@/components/common/OrbitBackground";
import { INVESTOR_EMAIL, GROUP_TRIO_URL, SPACESHIP_HERO_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const OPPORTUNITIES = [
  {
    icon: Boxes,
    title: "Buy the Real Product",
    body: "Acquire the rights, prototypes, and manufacturing roadmap to bring the Kotzinons toy line to retail.",
    accent: "red",
  },
  {
    icon: ShieldCheck,
    title: "License the IP",
    body: "Use the characters, story, and brand for animation, gaming, publishing, theme parks, or merchandise.",
    accent: "gold",
  },
  {
    icon: TrendingUp,
    title: "Invest in Distribution",
    body: "Partner with us to scale distribution worldwide — retail, streaming platforms, and online channels.",
    accent: "green",
  },
  {
    icon: Film,
    title: "Co-produce Animation",
    body: "Studios & platforms welcome. Co-produce the upcoming Kotzinons animated series or specials.",
    accent: "blue",
  },
];

const ACCENT = {
  red: "text-[hsl(var(--kotz-red))] bg-[hsl(var(--kotz-red))]/15 border-[hsl(var(--kotz-red))]/30",
  gold: "text-[hsl(var(--kotz-gold))] bg-[hsl(var(--kotz-gold))]/20 border-[hsl(var(--kotz-gold))]/40",
  green: "text-[hsl(var(--kotz-green))] bg-[hsl(var(--kotz-green))]/15 border-[hsl(var(--kotz-green))]/30",
  blue: "text-[hsl(var(--kotz-blue))] bg-[hsl(var(--kotz-blue))]/15 border-[hsl(var(--kotz-blue))]/30",
};

const PROOF = [
  { stat: "Original IP", label: "Hand-drawn & built by the creator" },
  { stat: "5 Heroes", label: "Fully designed and 3D-rendered" },
  { stat: "In Production", label: "Animation team actively shipping" },
  { stat: "Storybook", label: "Vol. 1 — Origins coming soon" },
];

export default function InvestPage() {
  return (
    <div data-testid="invest-page">
      {/* HERO */}
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

            {/* Proof strip */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
              {PROOF.map((p) => (
                <div key={p.stat} className="rounded-xl border border-border bg-[hsl(var(--kotz-ink-2))]/80 backdrop-blur p-4">
                  <p className="font-display text-2xl tracking-wider text-[hsl(var(--kotz-gold))]">{p.stat}</p>
                  <p className="mt-1 text-xs text-foreground/65 leading-snug">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="py-20 bg-[hsl(var(--kotz-ink))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Opportunities"
            title="FOUR WAYS TO PARTNER WITH US"
            subtitle="Whether you want to acquire, license, distribute, or co-produce — there is a path that works for you."
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {OPPORTUNITIES.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Card className="p-6 rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))] hover:border-[hsl(var(--kotz-gold))]/40 transition-colors duration-300 h-full">
                    <div className={cn("inline-flex items-center justify-center h-12 w-12 rounded-xl border", ACCENT[o.accent])}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl tracking-wider text-foreground">{o.title}</h3>
                    <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{o.body}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY KOTZINONS */}
      <section className="py-20 bg-[hsl(var(--kotz-ink-2))]/40 relative">
        <div className="absolute inset-0 bg-grain opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Why Kotzinons"
                title="BUILT TO TRAVEL."
                subtitle="Original characters. Original story. A visual language that fits perfectly across toys, animation, publishing, gaming, and theme entertainment."
              />
              <ul className="mt-6 space-y-3 text-sm sm:text-base text-foreground/80">
                {[
                  "Five distinct heroes with clear color identities — instantly merchandiseable.",
                  "A story that scales — toy line, storybook, episodes, and feature-length potential.",
                  "Fully owned IP. No prior license entanglements.",
                  "Active animation production with a dedicated team.",
                  "Toy-ready design language with built-in articulation reference (handcrafted prototype origin).",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-[hsl(var(--kotz-gold))] shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-border overflow-hidden bg-black">
                <img src={SPACESHIP_HERO_URL} alt="Kotzinons cinematic still" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-[hsl(var(--kotz-ink))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How to Get in Touch"
            title="A SIMPLE, RESPECTFUL PROCESS"
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { n: "01", title: "Reach out", body: `Email us at ${INVESTOR_EMAIL} or fill the contact form with inquiry type “Investment” or “Licensing”.`, icon: Mail },
              { n: "02", title: "Intro Call", body: "We share the deck, story bible, and current production status. NDA available on request.", icon: Briefcase },
              { n: "03", title: "Tailored Deal", body: "We structure a deal that matches your goals — acquisition, license, co-production, or distribution.", icon: Globe2 },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <Card key={step.n} className="p-6 rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))] hover:border-[hsl(var(--kotz-gold))]/40 transition-colors duration-300 relative overflow-hidden">
                  <span className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-grain opacity-30" />
                  <div className="flex items-center gap-3">
                    <p className="font-display text-4xl gold-text leading-none">{step.n}</p>
                    <Icon className="h-5 w-5 text-[hsl(var(--kotz-gold))]" />
                  </div>
                  <h3 className="mt-3 font-display text-xl tracking-wider text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{step.body}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
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
    </div>
  );
}
