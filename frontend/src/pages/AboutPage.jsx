import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Quote, ArrowRight, Heart, Globe, Shield } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchGallery, fetchCharacters } from "@/lib/api";
import SectionHeading from "@/components/common/SectionHeading";
import JourneyTimeline from "@/components/common/JourneyTimeline";
import OrbitBackground from "@/components/common/OrbitBackground";
import CTABand from "@/components/common/CTABand";
import { LOGO_URL } from "@/lib/constants";

export default function AboutPage() {
  const { data: gallery = [] } = useQuery({
    queryKey: ["gallery", "all"],
    queryFn: () => fetchGallery("all"),
  });
  const { data: characters = [] } = useQuery({ queryKey: ["characters"], queryFn: () => import("@/lib/api").then(m => m.fetchCharacters()) });
  const groupPoster = gallery.find((g) => g.category === "posters");
  const prototype = gallery.find((g) => g.category === "toy-photos");

  return (
    <div data-testid="about-page">
      <section className="relative overflow-hidden bg-background">
        <OrbitBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our Story"
                title="ONE CREATOR. ONE DRAWING. A WHOLE UNIVERSE."
                subtitle="Kotzinons began as a single sketch on a single page. Uri Eini drew them, built them by hand, and dreamed bigger."
              />
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                The Kotzinons are a team of spiked-armor heroes — each protected by a glass dome,
                each carrying their own color and weapon, each defending their world with courage.
                What started as a drawing on paper became a handcrafted toy, then a digital render,
                and is now becoming a full-fledged animated universe.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl gap-2">
                  <Link to="/characters" data-testid="about-cta-characters">
                    Meet the heroes <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl">
                  <Link to="/team" data-testid="about-cta-team">Meet the team</Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              {groupPoster && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-3xl border overflow-hidden bg-[hsl(var(--kotz-ink))]"
                >
                  <img src={groupPoster.image_url} alt={groupPoster.title} className="w-full h-auto block" />
                  <div className="absolute top-3 left-3 bg-background/90 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-[0.2em]">
                    Original Poster
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Mission */}
      <section className="py-14 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative p-8 sm:p-12 rounded-3xl border bg-card overflow-hidden">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-foreground/5" />
            <Quote className="absolute bottom-6 right-6 h-12 w-12 text-foreground/5 rotate-180" />
            <p className="relative font-display text-3xl sm:text-4xl tracking-wider leading-tight text-balance text-center">
              “I WANT KIDS TO LOOK AT THE KOTZINONS AND BELIEVE THEY CAN BUILD WORLDS TOO.”
            </p>
            <p className="relative mt-4 text-center text-sm font-mono uppercase tracking-[0.25em] text-muted-foreground">
              — Uri Eini, Creator
            </p>
          </Card>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Journey"
            title="FOUR LIVES OF EVERY KOTZINON"
            subtitle="Each character traveled the same path — from a pen sketch to full motion animation."
            align="center"
            className="mx-auto mb-10"
          />
          <JourneyTimeline />
        </div>
      </section>

      {/* Pillars */}
      <section className="py-14 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="COURAGE, IMAGINATION, BELONGING"
            align="center"
            className="mx-auto mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Pillar
              icon={Shield}
              color="red"
              title="Courage"
              body="Every Kotzinon stands tall when others can't. We tell stories that show bravery in everyday moments."
            />
            <Pillar
              icon={Globe}
              color="blue"
              title="Imagination"
              body="From sketch to toy to screen, we celebrate the power of making something with your own hands."
            />
            <Pillar
              icon={Heart}
              color="gold"
              title="Belonging"
              body="Five colors, one team. There is a Kotzinon for every kid — because everyone belongs in the lineup."
            />
          </div>
        </div>
      </section>

      {/* Prototype highlight */}
      {prototype && (
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <Badge variant="outline" className="font-mono text-xs uppercase tracking-wider">Where it all began</Badge>
                <h3 className="mt-3 font-display text-4xl sm:text-5xl tracking-wider leading-tight">
                  THE FIRST PROTOTYPE — BUILT BY HAND.
                </h3>
                <p className="mt-4 text-muted-foreground text-base leading-relaxed">
                  Before any rendering software, before any studio lights — there was a small,
                  handcrafted figure on Uri's table. This original prototype is the seed from which
                  the entire Kotzinons universe grew. We keep it close as a reminder that big stories
                  start small.
                </p>
                <div className="mt-6 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  <img src={LOGO_URL} alt="" className="h-7 w-7" /> Kotzinons archive • piece #001
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="rounded-3xl border overflow-hidden bg-[hsl(var(--kotz-ink))]">
                  <img src={prototype.image_url} alt={prototype.title} className="w-full h-auto block" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Characters preview row */}
      {characters?.length > 0 && (
        <section className="pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {characters.map((c) => (
                <div key={c.id} className="flex items-center gap-2">
                  <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: c.color_hex }}
                  />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-20">
        <CTABand />
      </section>
    </div>
  );
}

function Pillar({ icon: Icon, color, title, body }) {
  const colorMap = {
    red: "bg-[hsl(var(--kotz-red))]/10 text-[hsl(var(--kotz-red))]",
    blue: "bg-[hsl(var(--kotz-blue))]/10 text-[hsl(var(--kotz-blue))]",
    gold: "bg-[hsl(var(--kotz-gold))]/15 text-[hsl(var(--kotz-gold))]",
    green: "bg-[hsl(var(--kotz-green))]/10 text-[hsl(var(--kotz-green))]",
  };
  return (
    <Card className="p-6 rounded-2xl border bg-card">
      <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${colorMap[color]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="mt-4 font-display text-2xl tracking-wider">{title}</h4>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </Card>
  );
}
