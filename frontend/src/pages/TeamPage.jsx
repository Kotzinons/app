import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Handshake } from "lucide-react";
import { fetchTeam } from "@/lib/api";
import TeamMemberCard from "@/components/common/TeamMemberCard";
import SectionHeading from "@/components/common/SectionHeading";
import OrbitBackground from "@/components/common/OrbitBackground";
import CTABand from "@/components/common/CTABand";
import { Skeleton } from "@/components/ui/skeleton";

export default function TeamPage() {
  const { data: team = [], isLoading } = useQuery({ queryKey: ["team"], queryFn: fetchTeam });

  return (
    <div data-testid="team-page">
      <section className="relative overflow-hidden bg-background">
        <OrbitBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
          <SectionHeading
            eyebrow="The Team"
            title="THE CREW BEHIND THE KOTZINONS."
            subtitle="A small team with a big mission: bring Kotzinons to fans across the world — with art, technology, and story."
          />
        </div>
      </section>

      <section className="pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-64 rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.map((m, i) => (
                <TeamMemberCard key={m.id} member={m} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-12 rounded-3xl border bg-card">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  <Handshake className="h-3.5 w-3.5" /> Partner with us
                </div>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl tracking-wider leading-tight">
                  LICENSING, ANIMATION & DISTRIBUTION OPPORTUNITIES
                </h3>
                <p className="mt-3 text-muted-foreground text-sm sm:text-base">
                  We're actively looking for studios, retailers and platforms ready to bring the
                  Kotzinons to a global audience. Whether you're interested in licensing the IP,
                  co-producing animation, or distributing toys — we'd love to talk.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <Button asChild size="lg" className="rounded-xl gap-2" data-testid="team-cta-partner">
                  <Link to="/contact">
                    Start a conversation <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl" data-testid="team-cta-watch">
                  <Link to="/animations">Watch our latest animation</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="pb-20">
        <CTABand />
      </section>
    </div>
  );
}
