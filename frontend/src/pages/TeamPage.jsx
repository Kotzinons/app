import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Handshake, Mail } from "lucide-react";
import { fetchTeam } from "@/lib/api";
import TeamMemberCard from "@/components/common/TeamMemberCard";
import SectionHeading from "@/components/common/SectionHeading";
import OrbitBackground from "@/components/common/OrbitBackground";
import CTABand from "@/components/common/CTABand";
import InvestorBanner from "@/components/common/InvestorBanner";
import { Skeleton } from "@/components/ui/skeleton";
import { INVESTOR_EMAIL } from "@/lib/constants";

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
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-64 rounded-2xl bg-[hsl(var(--kotz-ink-2))]" />
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
