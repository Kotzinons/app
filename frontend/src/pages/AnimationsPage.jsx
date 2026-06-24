import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Film, Sparkles, ArrowRight, Mail } from "lucide-react";
import { fetchVideos, fetchTeam } from "@/lib/api";
import { logger } from "@/lib/logger";
import YouTubeFrame from "@/components/common/YouTubeFrame";
import SectionHeading from "@/components/common/SectionHeading";
import OrbitBackground from "@/components/common/OrbitBackground";
import TeamMemberCard from "@/components/common/TeamMemberCard";
import CTABand from "@/components/common/CTABand";

const APPROACH_BADGES = [
  "Storyboard → Animatic",
  "3D Block-out",
  "Character Lighting",
  "Final Comp",
];

const COMING_SOON_SLOTS = ["slot-a", "slot-b", "slot-c"];

function FeaturedVideoPanel({ isLoading, featured }) {
  if (isLoading) {
    return <Skeleton className="aspect-video rounded-2xl bg-[hsl(var(--kotz-ink-2))]" />;
  }
  if (featured) {
    return (
      <YouTubeFrame
        youtubeId={featured.youtube_id}
        title={featured.title}
        isShort={featured.is_short}
        className="max-w-md mx-auto lg:mx-0"
      />
    );
  }
  return <div className="rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))] aspect-video" />;
}

function VideoLibrary({ rest }) {
  const placeholdersNeeded = Math.max(0, 3 - rest.length);
  const placeholders = COMING_SOON_SLOTS.slice(0, placeholdersNeeded);
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rest.map((v) => (
        <YouTubeFrame key={v.id} youtubeId={v.youtube_id} title={v.title} isShort={v.is_short} />
      ))}
      {placeholders.map((slot, i) => (
        <div
          key={slot}
          className="rounded-2xl border border-dashed border-border bg-[hsl(var(--kotz-ink-2))]/40 flex items-center justify-center p-8 min-h-[240px] text-center"
          data-testid={`animation-coming-soon-${i}`}
        >
          <div>
            <Film className="h-7 w-7 mx-auto text-foreground/40" />
            <p className="mt-2 text-sm font-semibold text-foreground/80">More animations coming soon</p>
            <p className="text-xs text-foreground/45 mt-1">Stay tuned for the next drop</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function LeadDirectorPanel({ animationLead }) {
  if (!animationLead) return null;
  return (
    <section className="py-16 bg-[hsl(var(--kotz-ink))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Animation Direction"
          title="MEET THE LEAD"
          subtitle="Our animation department is led by an experienced director shaping every frame."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <TeamMemberCard member={animationLead} index={0} />
          <div className="md:col-span-2 rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))] p-8">
            <h3 className="font-display text-3xl tracking-wider text-foreground">A FILM-FIRST APPROACH</h3>
            <p className="mt-3 text-foreground/65 text-sm sm:text-base leading-relaxed">
              Every Kotzinons sequence starts with a story beat — not a pose. Our animation team
              carefully designs each motion to feel both kid-friendly and cinematic, drawing
              inspiration from classic toy commercials and modern indie animation.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {APPROACH_BADGES.map((s) => (
                <Badge
                  key={s}
                  variant="outline"
                  className="font-mono text-xs border-border text-foreground/75 bg-transparent"
                >
                  {s}
                </Badge>
              ))}
            </div>
            <Button
              asChild
              className="mt-6 rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold"
              data-testid="animations-meet-team"
            >
              <Link to="/team">Meet the full team <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AnimationsPage() {
  const { data: videos = [], isLoading } = useQuery({ queryKey: ["videos"], queryFn: fetchVideos });
  const { data: team = [] } = useQuery({ queryKey: ["team"], queryFn: fetchTeam });
  const animationLead = team.find((m) => m.role?.toLowerCase().includes("animation"));
  const featured = videos.find((v) => v.featured) || videos[0];
  const rest = videos.filter((v) => v.id !== featured?.id);
  const [shareCopied, setShareCopied] = useState(false);

  const onShare = useCallback(async () => {
    try {
      await navigator.clipboard.writeText("https://www.youtube.com/shorts/diZbJpeyo6o");
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch (error) {
      // Clipboard API may be unavailable (non-HTTPS, old browsers).
      logger.error("Failed to copy YouTube share link:", error);
    }
  }, [setShareCopied]);

  return (
    <div data-testid="animations-page">
      <section className="relative overflow-hidden bg-[hsl(var(--kotz-ink))]">
        <OrbitBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Animations"
                title="WATCH THE KOTZINONS IN MOTION."
                subtitle="Bringing every spike, dome, and battle pose to life — directed by our animation team."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl gap-2 border-border bg-transparent text-foreground hover:bg-foreground/5"
                  onClick={onShare}
                  data-testid="animations-share"
                >
                  <Sparkles className="h-4 w-4" /> {shareCopied ? "Link copied!" : "Share YouTube"}
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold"
                  data-testid="animations-contact"
                >
                  <Link to="/invest"><Mail className="h-4 w-4" /> Partnership inquiry</Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <FeaturedVideoPanel isLoading={isLoading} featured={featured} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[hsl(var(--kotz-ink-2))]/40">
        <div className="absolute inset-0 bg-grain opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Library"
            title="MORE FROM THE STUDIO"
            subtitle="New shorts and episodes are in production. Drop in often — the universe is expanding."
          />
          <VideoLibrary rest={rest} />
        </div>
      </section>

      <LeadDirectorPanel animationLead={animationLead} />

      <section className="py-20 bg-[hsl(var(--kotz-ink))]">
        <CTABand />
      </section>
    </div>
  );
}
