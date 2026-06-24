import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrbitBackground from "@/components/common/OrbitBackground";
import StorybookCover from "@/components/common/StorybookCover";
import { LOGO_URL, SPACESHIP_HERO_URL } from "@/lib/constants";

function HeroBackdrop() {
  return (
    <div className="absolute inset-0">
      <img
        src={SPACESHIP_HERO_URL}
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-center opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--kotz-ink))]/70 via-[hsl(var(--kotz-ink))]/60 to-[hsl(var(--kotz-ink))]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--kotz-ink))] via-[hsl(var(--kotz-ink))]/60 to-transparent" />
      <div className="absolute inset-0 spotlight" />
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}

function HeroCTAs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.28 }}
      className="mt-8 flex flex-wrap items-center gap-3"
    >
      <Button
        asChild
        size="lg"
        className="rounded-xl px-6 h-12 gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold shadow-[0_20px_40px_-15px_rgba(245,192,51,0.5)]"
        data-testid="hero-primary-cta"
      >
        <Link to="/characters">
          Meet the Heroes <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="rounded-xl px-6 h-12 gap-2 border-border bg-transparent backdrop-blur text-foreground hover:bg-foreground/5"
        data-testid="hero-secondary-cta"
      >
        <Link to="/animations">
          <Play className="h-4 w-4" /> Watch the Short
        </Link>
      </Button>
      <Button
        asChild
        variant="ghost"
        size="lg"
        className="rounded-xl px-4 h-12 gap-2 text-foreground/70 hover:text-foreground hover:bg-foreground/5"
        data-testid="hero-invest-cta"
      >
        <Link to="/invest">Licensing & Invest →</Link>
      </Button>
    </motion.div>
  );
}

function HeroMetaStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-10 flex items-center gap-8 text-xs font-mono uppercase tracking-[0.2em] text-foreground/45"
    >
      <span className="flex items-center gap-2">
        <Shield className="h-3.5 w-3.5 text-[hsl(var(--kotz-gold))]" /> 5 Heroes
      </span>
      <span className="flex items-center gap-2">
        <BookOpen className="h-3.5 w-3.5 text-[hsl(var(--kotz-gold))]" /> Storybook soon
      </span>
      <span className="flex items-center gap-2">
        <Play className="h-3.5 w-3.5 text-[hsl(var(--kotz-gold))]" /> Animation
      </span>
    </motion.div>
  );
}

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--kotz-ink))] min-h-[88vh] flex items-center">
      <HeroBackdrop />
      <OrbitBackground intensity="high" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--kotz-gold))]/30 bg-[hsl(var(--kotz-ink-2))]/60 backdrop-blur-md px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.3em] text-[hsl(var(--kotz-gold))]"
              data-testid="hero-eyebrow"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--kotz-gold))] animate-pulse" />
              A new universe in production
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 flex items-center gap-4"
            >
              <img src={LOGO_URL} alt="The Kotzinons" className="h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-2xl" />
              <div className="hidden sm:block h-12 w-px bg-foreground/20" />
              <p className="hidden sm:block text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/55">
                An Original IP<br />by Uri Menashe Eini
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-wider leading-[0.88] text-foreground"
              data-testid="hero-title"
            >
              THE <span className="gold-text">KOTZINONS</span>
              <br />
              <span className="font-serif italic font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground/80 normal-case tracking-normal">
                Defenders of the Universe.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-foreground/70 max-w-2xl text-balance leading-relaxed"
              data-testid="hero-subtitle"
            >
              Born from one creator&apos;s drawing pad, hand-built into a toy, and now leaping onto screens.
              Meet the spiked-armor heroes protecting the galaxy — a brand new animation studio universe.
            </motion.p>

            <HeroCTAs />
            <HeroMetaStrip />
          </div>

          <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, rotate: -8, y: 30 }}
              animate={{ opacity: 1, rotate: -5, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <StorybookCover size="md" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px comet-stripe opacity-60" />
    </section>
  );
}
