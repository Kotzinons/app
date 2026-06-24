import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Play, Sparkles, Shield, BookOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fetchCharacters, fetchVideos, fetchTeam } from "@/lib/api";
import { LOGO_URL, SPACESHIP_HERO_URL, COLOR_MAP, INVESTOR_EMAIL } from "@/lib/constants";
import OrbitBackground from "@/components/common/OrbitBackground";
import CharacterCard from "@/components/common/CharacterCard";
import CharacterDossierDialog from "@/components/common/CharacterDossierDialog";
import YouTubeFrame from "@/components/common/YouTubeFrame";
import JourneyTimeline from "@/components/common/JourneyTimeline";
import SectionHeading from "@/components/common/SectionHeading";
import LoadingGrid from "@/components/common/LoadingGrid";
import CTABand from "@/components/common/CTABand";
import TeamMemberCard from "@/components/common/TeamMemberCard";
import StorybookCover from "@/components/common/StorybookCover";
import InvestorBanner from "@/components/common/InvestorBanner";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [activeCharacter, setActiveCharacter] = useState(null);

  const { data: characters = [], isLoading: charsLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });
  const { data: videos = [] } = useQuery({ queryKey: ["videos"], queryFn: fetchVideos });
  const { data: team = [] } = useQuery({ queryKey: ["team"], queryFn: fetchTeam });

  const featuredVideo = videos.find((v) => v.featured) || videos[0];

  return (
    <div data-testid="home-page">
      {/* ============= CINEMATIC HERO ============= */}
      <section className="relative overflow-hidden bg-[hsl(var(--kotz-ink))] min-h-[88vh] flex items-center">
        {/* Background image */}
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
                Born from one creator's drawing pad, hand-built into a toy, and now leaping onto screens.
                Meet the spiked-armor heroes protecting the galaxy — a brand new animation studio universe.
              </motion.p>

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
                  <Link to="/invest">
                    Licensing & Invest →
                  </Link>
                </Button>
              </motion.div>

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
            </div>

            {/* Floating storybook teaser */}
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

        {/* Comet stripe at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px comet-stripe opacity-60" />
      </section>

      {/* ============= FEATURED CHARACTERS ============= */}
      <section className="relative py-20 bg-[hsl(var(--kotz-ink))]" data-testid="home-characters-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="The Lineup"
              title="FIVE HEROES. ONE MISSION."
              subtitle="Each Kotzinon wields a signature color and weapon. Tap any card to open the full dossier."
            />
            <Button asChild variant="outline" size="lg" className="rounded-xl gap-2 self-start border-border bg-transparent text-foreground hover:bg-foreground/5">
              <Link to="/characters" data-testid="home-view-all-characters">
                View all characters <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {charsLoading ? (
            <LoadingGrid count={5} className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {characters.map((c, i) => (
                <CharacterCard key={c.id} character={c} index={i} onClick={(ch) => setActiveCharacter(ch)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============= FEATURED ANIMATION ============= */}
      <section className="relative py-20 bg-[hsl(var(--kotz-ink-2))]/40" data-testid="home-animation-section">
        <div className="absolute inset-0 bg-grain opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Featured Animation"
                title="THE HEROES, IN MOTION."
                subtitle="Our animation team brings every spike, dome, and battle pose to life. Watch the first official Kotzinons short."
              />
              <Button asChild size="lg" className="mt-6 rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold" data-testid="home-animation-cta">
                <Link to="/animations">
                  More animations <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:col-span-7">
              {featuredVideo ? (
                <YouTubeFrame
                  youtubeId={featuredVideo.youtube_id}
                  title={featuredVideo.title}
                  isShort={featuredVideo.is_short}
                  className="max-w-md mx-auto lg:mx-0"
                />
              ) : (
                <div className="rounded-2xl border border-border bg-[hsl(var(--kotz-ink))] aspect-video animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============= STORYBOOK TEASER ============= */}
      <section className="relative py-20 bg-[hsl(var(--kotz-ink))]" data-testid="home-storybook-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <SectionHeading
                eyebrow="Coming Soon"
                title="THE STORYBOOK—ORIGINS."
                subtitle="How did the Kotzinons come to be? The official illustrated origin story is in production. Every spike, every cosmic battle, every secret of the Crystal Cell—told in full color."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold">
                  <Link to="/storybook" data-testid="home-storybook-cta">
                    Preview the Storybook <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
              <StorybookCover size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ============= JOURNEY TIMELINE ============= */}
      <section className="relative py-20 bg-[hsl(var(--kotz-ink-2))]/40">
        <div className="absolute inset-0 bg-grain opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Journey"
            title="FROM A PEN ON PAPER TO THE BIG SCREEN."
            subtitle="Every Kotzinon went through four lives — a drawing, a handmade toy, a 3D render, and now full animation."
            align="center"
            className="mb-12 mx-auto"
          />
          <JourneyTimeline />
        </div>
      </section>

      {/* ============= TEAM PREVIEW ============= */}
      <section className="py-20 bg-[hsl(var(--kotz-ink))]" data-testid="home-team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="The Crew"
              title="THE PEOPLE BEHIND THE HEROES."
              subtitle="A small, focused team of creators, engineers, animators, and operators bringing the Kotzinons to life."
            />
            <Button asChild variant="outline" size="lg" className="rounded-xl gap-2 self-start border-border bg-transparent text-foreground hover:bg-foreground/5">
              <Link to="/team" data-testid="home-view-all-team">
                Meet everyone <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m, i) => (
              <TeamMemberCard key={m.id} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============= INVESTOR BANNER ============= */}
      <section className="py-12 bg-[hsl(var(--kotz-ink))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InvestorBanner />
        </div>
      </section>

      {/* ============= CTA BAND ============= */}
      <section className="pb-24 bg-[hsl(var(--kotz-ink))]">
        <CTABand />
      </section>

      <CharacterDossierDialog
        character={activeCharacter}
        open={!!activeCharacter}
        onOpenChange={(o) => !o && setActiveCharacter(null)}
      />
    </div>
  );
}
