import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Play, Sparkles, Shield, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fetchCharacters, fetchVideos, fetchTeam } from "@/lib/api";
import { LOGO_URL, COLOR_MAP } from "@/lib/constants";
import OrbitBackground from "@/components/common/OrbitBackground";
import CharacterCard from "@/components/common/CharacterCard";
import CharacterDossierDialog from "@/components/common/CharacterDossierDialog";
import YouTubeFrame from "@/components/common/YouTubeFrame";
import JourneyTimeline from "@/components/common/JourneyTimeline";
import SectionHeading from "@/components/common/SectionHeading";
import LoadingGrid from "@/components/common/LoadingGrid";
import CTABand from "@/components/common/CTABand";
import TeamMemberCard from "@/components/common/TeamMemberCard";
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
  const leader = characters.find((c) => c.is_leader);
  const heroImage = leader?.image_url;

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <OrbitBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground"
                data-testid="hero-eyebrow"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-[hsl(var(--kotz-gold))] animate-pulse" />
                Now in production — The Kotzinons animation
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-wider leading-[0.9]"
                data-testid="hero-title"
              >
                THE <span className="text-[hsl(var(--kotz-red))]">KOTZ</span>
                <span className="text-[hsl(var(--kotz-gold))]">IN</span>
                <span className="text-[hsl(var(--kotz-blue))]">O</span>
                <span className="text-[hsl(var(--kotz-green))]">N</span>
                <span className="text-[hsl(var(--kotz-red))]">S</span>
                <br />
                <span className="text-foreground">DEFENDERS OF THE UNIVERSE.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl text-balance"
                data-testid="hero-subtitle"
              >
                Born from one creator's drawing pad, hand-built into a toy, and now leaping onto screens.
                Meet the spiked-armor heroes protecting the galaxy — created and copyrighted by Uri Eini.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-7 flex flex-wrap items-center gap-3"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl px-5 h-12 gap-2"
                  data-testid="hero-primary-cta"
                >
                  <Link to="/characters">
                    Meet the Heroes <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="rounded-xl px-5 h-12 gap-2"
                  data-testid="hero-secondary-cta"
                >
                  <Link to="/animations">
                    <Play className="h-4 w-4" /> Watch the Short
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-8 grid grid-cols-3 gap-3 max-w-md"
              >
                <Stat label="Heroes" value="5" icon={Shield} accent="red" />
                <Stat label="Color Codes" value="4" icon={Sparkles} accent="blue" />
                <Stat label="Leader" value="1" icon={Crown} accent="gold" />
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                <div className="relative rounded-3xl border bg-[hsl(var(--kotz-ink))] overflow-hidden aspect-[4/5] shadow-2xl">
                  <div className="absolute inset-0 bg-halftone text-white opacity-25" />
                  {heroImage ? (
                    <img
                      src={heroImage}
                      alt="Goldon — Supreme Commander of the Kotzinons"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/40">
                      Loading hero...
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/70">
                      Featured Hero
                    </p>
                    <h3 className="font-display text-3xl tracking-wider">GOLDON</h3>
                    <p className="text-xs text-white/80">Supreme Commander • Crystal Cell Cannon</p>
                  </div>
                  {/* Logo watermark */}
                  <img
                    src={LOGO_URL}
                    alt=""
                    aria-hidden="true"
                    className="absolute top-3 right-3 h-12 w-12 object-contain drop-shadow-2xl"
                  />
                </div>
                {/* Color chip stack */}
                <div className="absolute -bottom-3 -left-3 flex gap-1.5">
                  <span className="h-6 w-6 rounded-md bg-[hsl(var(--kotz-red))] border-2 border-background" />
                  <span className="h-6 w-6 rounded-md bg-[hsl(var(--kotz-blue))] border-2 border-background" />
                  <span className="h-6 w-6 rounded-md bg-[hsl(var(--kotz-gold))] border-2 border-background" />
                  <span className="h-6 w-6 rounded-md bg-[hsl(var(--kotz-green))] border-2 border-background" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CHARACTERS */}
      <section className="relative py-14 sm:py-20 bg-secondary/40" data-testid="home-characters-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="The Lineup"
              title="FIVE HEROES. ONE MISSION."
              subtitle="Each Kotzinon wields a signature color and weapon. Tap any card to open the dossier."
            />
            <Button asChild variant="outline" size="lg" className="rounded-xl gap-2 self-start">
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
                <CharacterCard
                  key={c.id}
                  character={c}
                  index={i}
                  onClick={(ch) => setActiveCharacter(ch)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FEATURED ANIMATION */}
      <section className="py-14 sm:py-20" data-testid="home-animation-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Featured Animation"
                title="THE HEROES, IN MOTION."
                subtitle="Our animation team brings every spike, dome, and battle cry to life. Watch the first official Kotzinons short."
              />
              <Button
                asChild
                size="lg"
                className="mt-6 rounded-xl gap-2"
                data-testid="home-animation-cta"
              >
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
                <div className="rounded-2xl border bg-card aspect-video animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="py-14 sm:py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Journey"
            title="FROM A PEN ON PAPER TO THE BIG SCREEN."
            subtitle="Every Kotzinon went through four lives — a drawing, a handmade toy, a 3D render, and now full animation."
            align="center"
            className="mb-10 mx-auto"
          />
          <JourneyTimeline />
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="py-14 sm:py-20" data-testid="home-team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="The Crew"
              title="THE PEOPLE BEHIND THE HEROES."
              subtitle="A small, focused team of creators, engineers, animators, and operators bringing Kotzinons to life."
            />
            <Button asChild variant="outline" size="lg" className="rounded-xl gap-2 self-start">
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

      {/* CTA BAND */}
      <section className="pb-20">
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

function Stat({ label, value, icon: Icon, accent }) {
  const c = COLOR_MAP[accent] || COLOR_MAP.gold;
  return (
    <div className={cn("rounded-xl border bg-card p-3", c.border)}>
      <div className="flex items-center gap-2">
        <Icon className={cn("h-4 w-4", c.text)} />
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
      </div>
      <p className="mt-1 font-display text-3xl tracking-wider">{value}</p>
    </div>
  );
}
