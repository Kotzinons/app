import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { fetchTeam } from "@/lib/api";
import TeamMemberCard from "@/components/common/TeamMemberCard";
import SectionHeading from "@/components/common/SectionHeading";
import OrbitBackground from "@/components/common/OrbitBackground";
import CTABand from "@/components/common/CTABand";
import InvestorBanner from "@/components/common/InvestorBanner";
import { Skeleton } from "@/components/ui/skeleton";

const TEAM_SKELETONS = Array.from({ length: 4 }).map((_, i) => `team-skel-${i}`);

function TeamGrid({ team, isLoading }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEAM_SKELETONS.map((id) => (
          <Skeleton key={id} className="h-64 rounded-2xl bg-[hsl(var(--kotz-ink-2))]" />
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {team.map((m, i) => (
        <TeamMemberCard key={m.id} member={m} index={i} />
      ))}
    </div>
  );
}

export default function TeamPage() {
  const { data: team = [], isLoading } = useQuery({ queryKey: ["team"], queryFn: fetchTeam });

  return (
    <div data-testid="team-page">
      <section className="relative overflow-hidden bg-[hsl(var(--kotz-ink))]">
        <OrbitBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
          <SectionHeading
            eyebrow="The Team"
            title="THE CREW BEHIND THE KOTZINONS."
            subtitle="A small team with a big mission: bring the Kotzinons to fans across the world — with art, technology, and story."
          />
        </div>
      </section>

      <section className="pb-16 bg-[hsl(var(--kotz-ink))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeamGrid team={team} isLoading={isLoading} />
        </div>
      </section>

      <section className="py-16 bg-[hsl(var(--kotz-ink-2))]/40 relative">
        <div className="absolute inset-0 bg-grain opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InvestorBanner />
        </div>
      </section>

      <section className="pb-24 bg-[hsl(var(--kotz-ink))]">
        <CTABand />
      </section>
    </div>
  );
}
