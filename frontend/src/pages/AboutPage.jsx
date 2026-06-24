import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Quote, ArrowRight, Heart, Globe, Shield, BookOpen } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "@/lib/api";
import SectionHeading from "@/components/common/SectionHeading";
import JourneyTimeline from "@/components/common/JourneyTimeline";
import OrbitBackground from "@/components/common/OrbitBackground";
import CTABand from "@/components/common/CTABand";
import StorybookCover from "@/components/common/StorybookCover";
import { LOGO_URL, GROUP_TRIO_URL, RUBY_HERO_URL } from "@/lib/constants";

export default function AboutPage() {
  const { data: characters = [] } = useQuery({ queryKey: ["characters"], queryFn: fetchCharacters });

  return (
    <div data-testid="about-page">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[hsl(var(--kotz-ink))]">
        <OrbitBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our Story"
                title="ONE CREATOR. ONE DRAWING. A WHOLE UNIVERSE."
                subtitle="The Kotzinons began as a single sketch on a single page. Uri Eini drew them, hand-built them, and dreamed bigger."
              />
              <p className="mt-6 text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl">
                The Kotzinons are a team of spiked-armor heroes — each protected by a glass dome,
                each carrying their own color and weapon, each defending their world with courage.
                What started as a drawing on paper became a handcrafted toy, then a digital render,
                and is now becoming a full-fledged animated universe with a forthcoming storybook.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold">
                  <Link to="/characters" data-testid="about-cta-characters">
                    Meet the heroes <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl border-border bg-transparent text-foreground hover:bg-foreground/5">
                  <Link to="/team" data-testid="about-cta-team">Meet the team</Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl border border-border overflow-hidden bg-black"
              >
                <img src={GROUP_TRIO_URL} alt="The Kotzinons together" className="w-full h-auto block" />
                <div className="absolute top-3 left-3 bg-[hsl(var(--kotz-ink))]/85 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.25em] text-[hsl(var(--kotz-gold))] border border-[hsl(var(--kotz-gold))]/30">
                  The Royal Lineup
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Mission */}
      <section className="py-16 bg-[hsl(var(--kotz-ink-2))]/40 relative">
        <div className="absolute inset-0 bg-grain opacity-30" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative p-8 sm:p-12 rounded-3xl border border-border bg-[hsl(var(--kotz-ink-2))] overflow-hidden">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-foreground/8" />
            <Quote className="absolute bottom-6 right-6 h-12 w-12 text-foreground/8 rotate-180" />
            <p className="relative font-serif italic text-3xl sm:text-4xl text-foreground/90 leading-tight text-balance text-center">
              “I want kids to look at the Kotzinons and believe they can build worlds too.”
            </p>
            <p className="relative mt-5 text-center text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--kotz-gold))]">
              — Uri Eini, Creator
            </p>
          </Card>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-[hsl(var(--kotz-ink))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Journey"
            title="FOUR LIVES OF EVERY KOTZINON"
            subtitle="Each character traveled the same path — from a pen sketch to full motion animation."
            align="center"
            className="mx-auto mb-12"
          />
          <JourneyTimeline />
        </div>
      </section>

      {/* Storybook teaser */}
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

      {/* Pillars */}
      <section className="py-20 bg-[hsl(var(--kotz-ink))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="COURAGE, IMAGINATION, BELONGING"
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Pillar icon={Shield} color="red" title="Courage" body="Every Kotzinon stands tall when others can't. We tell stories that show bravery in everyday moments." />
            <Pillar icon={Globe} color="blue" title="Imagination" body="From sketch to toy to screen, we celebrate the power of making something with your own hands." />
            <Pillar icon={Heart} color="gold" title="Belonging" body="Five colors, one team. There is a Kotzinon for every kid — because everyone belongs in the lineup." />
          </div>
        </div>
      </section>

      {/* Ruby spotlight */}
      <section className="py-20 bg-[hsl(var(--kotz-ink-2))]/40 relative">
        <div className="absolute inset-0 bg-grain opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <Badge variant="outline" className="bg-[hsl(var(--kotz-red))]/15 text-[hsl(var(--kotz-red))] border-[hsl(var(--kotz-red))]/40 font-mono text-[10px] uppercase tracking-wider">Heart of the team</Badge>
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

      {/* Color palette row */}
      {characters?.length > 0 && (
        <section className="py-12 bg-[hsl(var(--kotz-ink))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {characters.map((c) => (
                <div key={c.id} className="flex items-center gap-2">
                  <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: c.color_hex, boxShadow: `0 0 16px ${c.color_hex}` }} />
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-foreground/65">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-24 bg-[hsl(var(--kotz-ink))]">
        <CTABand />
      </section>
    </div>
  );
}

function Pillar({ icon: Icon, color, title, body }) {
  const colorMap = {
    red: "bg-[hsl(var(--kotz-red))]/15 text-[hsl(var(--kotz-red))] border-[hsl(var(--kotz-red))]/30",
    blue: "bg-[hsl(var(--kotz-blue))]/15 text-[hsl(var(--kotz-blue))] border-[hsl(var(--kotz-blue))]/30",
    gold: "bg-[hsl(var(--kotz-gold))]/20 text-[hsl(var(--kotz-gold))] border-[hsl(var(--kotz-gold))]/40",
    green: "bg-[hsl(var(--kotz-green))]/15 text-[hsl(var(--kotz-green))] border-[hsl(var(--kotz-green))]/30",
  };
  return (
    <Card className="p-6 rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))] hover:border-[hsl(var(--kotz-gold))]/40 transition-colors duration-300">
      <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl border ${colorMap[color]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="mt-4 font-display text-2xl tracking-wider text-foreground">{title}</h4>
      <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{body}</p>
    </Card>
  );
}
