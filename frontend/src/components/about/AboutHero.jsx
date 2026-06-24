import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import OrbitBackground from "@/components/common/OrbitBackground";
import { GROUP_TRIO_URL } from "@/lib/constants";

export default function AboutHero() {
  return (
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
  );
}
