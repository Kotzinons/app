import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Film, Sparkles, ArrowRight, Mail } from "lucide-react";
import { fetchVideos, fetchTeam } from "@/lib/api";
import YouTubeFrame from "@/components/common/YouTubeFrame";
import SectionHeading from "@/components/common/SectionHeading";
import OrbitBackground from "@/components/common/OrbitBackground";
import TeamMemberCard from "@/components/common/TeamMemberCard";
import CTABand from "@/components/common/CTABand";

export default function AnimationsPage() {
  const { data: videos = [], isLoading } = useQuery({ queryKey: ["videos"], queryFn: fetchVideos });
  const { data: team = [] } = useQuery({ queryKey: ["team"], queryFn: fetchTeam });
  const animationLead = team.find((m) => m.role?.toLowerCase().includes("animation"));
  const featured = videos.find((v) => v.featured) || videos[0];
  const rest = videos.filter((v) => v.id !== featured?.id);
  const [shareCopied, setShareCopied] = useState(false);

  const onShare = async () => {
    try {
      await navigator.clipboard.writeText("https://www.youtube.com/shorts/diZbJpeyo6o");
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch (e) { /* noop */ }
  };

  return (
    <div data-testid="animations-page">
      <section className="relative overflow-hidden bg-background">
        <OrbitBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Animations"
                title="WATCH THE KOTZINONS IN MOTION."
                subtitle="Bringing every spike, dome, and battle pose to life — directed by our animation team."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="outline" size="lg" className="rounded-xl gap-2" onClick={onShare} data-testid="animations-share">
                  <Sparkles className="h-4 w-4" /> {shareCopied ? "Link copied!" : "Share YouTube"}
                </Button>
                <Button asChild size="lg" className="rounded-xl gap-2" data-testid="animations-contact">
                  <Link to="/contact"><Mail className="h-4 w-4" /> Partnership inquiry</Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-6">
              {isLoading ? (
                <Skeleton className="aspect-video rounded-2xl" />
              ) : featured ? (
                <YouTubeFrame
                  youtubeId={featured.youtube_id}
                  title={featured.title}
                  isShort={featured.is_short}
                  className="max-w-md mx-auto lg:mx-0"
                />
              ) : (
                <div className="rounded-2xl border bg-card aspect-video" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* More videos / placeholder */}
      <section className="py-14 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Library"
            title="MORE FROM THE STUDIO"
            subtitle="New shorts and episodes are in production. Drop in often — the universe is expanding."
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((v) => (
              <YouTubeFrame key={v.id} youtubeId={v.youtube_id} title={v.title} isShort={v.is_short} />
            ))}
            {Array.from({ length: Math.max(0, 3 - rest.length) }).map((_, i) => (
              <div
                key={`coming-${i}`}
                className="rounded-2xl border border-dashed bg-card/40 flex items-center justify-center p-8 min-h-[220px] text-center"
                data-testid={`animation-coming-soon-${i}`}
              >
                <div>
                  <Film className="h-7 w-7 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-sm font-semibold">More animations coming soon</p>
                  <p className="text-xs text-muted-foreground mt-1">Stay tuned to YouTube for the next drop</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animation team highlight */}
      {animationLead && (
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Animation Direction"
              title="MEET THE LEAD"
              subtitle="Our animation department is led by an experienced director shaping every frame."
            />
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <TeamMemberCard member={animationLead} index={0} />
              <div className="md:col-span-2 rounded-2xl border bg-card p-8">
                <h3 className="font-display text-3xl tracking-wider">A FILM-FIRST APPROACH</h3>
                <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Every Kotzinons sequence starts with a story beat — not a pose. Our animation team
                  carefully designs each motion to feel both kid-friendly and cinematic, drawing
                  inspiration from classic toy commercials and modern indie animation.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge variant="outline" className="font-mono text-xs">Storyboard → Animatic</Badge>
                  <Badge variant="outline" className="font-mono text-xs">3D Block-out</Badge>
                  <Badge variant="outline" className="font-mono text-xs">Character Lighting</Badge>
                  <Badge variant="outline" className="font-mono text-xs">Final Comp</Badge>
                </div>
                <Button asChild className="mt-6 rounded-xl gap-2" data-testid="animations-meet-team">
                  <Link to="/team">Meet the full team <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <CTABand />
      </section>
    </div>
  );
}
