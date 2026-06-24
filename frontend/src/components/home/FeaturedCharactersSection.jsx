import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CharacterCard from "@/components/common/CharacterCard";
import LoadingGrid from "@/components/common/LoadingGrid";
import SectionHeading from "@/components/common/SectionHeading";

export default function FeaturedCharactersSection({ characters, isLoading, onCardClick }) {
  return (
    <section className="relative py-20 bg-[hsl(var(--kotz-ink))]" data-testid="home-characters-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="The Lineup"
            title="FIVE HEROES. ONE MISSION."
            subtitle="Each Kotzinon wields a signature color and weapon. Tap any card to open the full dossier."
          />
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-xl gap-2 self-start border-border bg-transparent text-foreground hover:bg-foreground/5"
          >
            <Link to="/characters" data-testid="home-view-all-characters">
              View all characters <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <LoadingGrid count={5} className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {characters.map((c, i) => (
              <CharacterCard key={c.id} character={c} index={i} onClick={onCardClick} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
