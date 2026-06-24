import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TeamMemberCard from "@/components/common/TeamMemberCard";
import SectionHeading from "@/components/common/SectionHeading";

export default function TeamPreviewSection({ team }) {
  return (
    <section className="py-20 bg-[hsl(var(--kotz-ink))]" data-testid="home-team-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="The Crew"
            title="THE PEOPLE BEHIND THE HEROES."
            subtitle="A small, focused team of creators, engineers, animators, and operators bringing the Kotzinons to life."
          />
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-xl gap-2 self-start border-border bg-transparent text-foreground hover:bg-foreground/5"
          >
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
  );
}
