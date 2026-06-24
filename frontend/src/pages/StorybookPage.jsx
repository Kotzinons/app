import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BookOpen, Sparkles, ArrowRight, Mail, Bell } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import OrbitBackground from "@/components/common/OrbitBackground";
import StorybookCover from "@/components/common/StorybookCover";
import NewsletterForm from "@/components/common/NewsletterForm";
import { INVESTOR_EMAIL } from "@/lib/constants";

const CHAPTERS = [
  {
    n: "01",
    title: "The First Spark",
    body: "A drawing falls from the stars. A boy named Goldon picks it up — and his world changes forever.",
  },
  {
    n: "02",
    title: "The Crystal Cell Awakens",
    body: "In the heart of the Goldon family vault, an ancient armor pulses with light. It chooses a leader.",
  },
  {
    n: "03",
    title: "Crimson, Azure, Viridian, Ruby",
    body: "Four heroes are called — each from a different corner of the universe. Together they become the Kotzinons.",
  },
  {
    n: "04",
    title: "Defenders of the Universe",
    body: "With spike, shield, and storm — the team takes its first stand against the dark.",
  },
];

export default function StorybookPage() {
  return (
    <div data-testid="storybook-page">
      {/* HERO */}
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

      {/* CHAPTER PREVIEW */}
      <section className="relative py-20 bg-[hsl(var(--kotz-ink-2))]/40">
        <div className="absolute inset-0 bg-grain opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Chapter Preview"
            title="WHAT'S INSIDE"
            subtitle="Volume 1 — Origins is a four-chapter illustrated journey. Here is a taste of what's coming."
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CHAPTERS.map((ch, i) => (
              <Card
                key={ch.n}
                className="relative p-6 rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))] overflow-hidden hover:border-[hsl(var(--kotz-gold))]/40 transition-colors duration-300"
                data-testid={`storybook-chapter-${ch.n}`}
              >
                <span className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-grain opacity-30" />
                <p className="font-display text-5xl gold-text leading-none">{ch.n}</p>
                <h3 className="mt-3 font-display text-xl tracking-wider text-foreground">{ch.title}</h3>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{ch.body}</p>
                <BookOpen className="absolute bottom-4 right-4 h-4 w-4 text-foreground/15" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NOTIFY ME */}
      <section id="notify-me" className="py-20 bg-[hsl(var(--kotz-ink))]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-10 rounded-3xl border border-[hsl(var(--kotz-gold))]/30 bg-[hsl(var(--kotz-ink-2))] relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,hsla(43,92%,56%,0.3),transparent_60%)]" />
            <div className="relative">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[hsl(var(--kotz-gold))]">
                <Bell className="h-3.5 w-3.5" /> Be first in line
              </div>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl tracking-wider text-foreground leading-tight">
                GET NOTIFIED WHEN THE STORYBOOK LAUNCHES
              </h3>
              <p className="mt-3 text-foreground/65 text-sm sm:text-base">
                Drop your email and we&apos;ll let you know the moment the first copy is available.
              </p>
              <div className="mt-6">
                <NewsletterForm />
              </div>
              <p className="mt-4 text-xs text-foreground/45 font-mono">
                Or write directly to <a href={`mailto:${INVESTOR_EMAIL}`} className="underline decoration-dotted text-foreground/65 hover:text-[hsl(var(--kotz-gold))]">{INVESTOR_EMAIL}</a> for publishing & distribution.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
