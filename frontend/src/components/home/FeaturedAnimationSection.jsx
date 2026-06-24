import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import YouTubeFrame from "@/components/common/YouTubeFrame";
import SectionHeading from "@/components/common/SectionHeading";

export default function FeaturedAnimationSection({ video }) {
  return (
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
            <Button
              asChild
              size="lg"
              className="mt-6 rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold"
              data-testid="home-animation-cta"
            >
              <Link to="/animations">
                More animations <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="lg:col-span-7">
            {video ? (
              <YouTubeFrame
                youtubeId={video.youtube_id}
                title={video.title}
                isShort={video.is_short}
                className="max-w-md mx-auto lg:mx-0"
              />
            ) : (
              <div className="rounded-2xl border border-border bg-[hsl(var(--kotz-ink))] aspect-video animate-pulse" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
