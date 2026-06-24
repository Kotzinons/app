import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacters, fetchVideos, fetchTeam } from "@/lib/api";
import CharacterDossierDialog from "@/components/common/CharacterDossierDialog";
import CTABand from "@/components/common/CTABand";
import InvestorBanner from "@/components/common/InvestorBanner";
import HomeHero from "@/components/home/HomeHero";
import FeaturedCharactersSection from "@/components/home/FeaturedCharactersSection";
import FeaturedAnimationSection from "@/components/home/FeaturedAnimationSection";
import StorybookTeaserSection from "@/components/home/StorybookTeaserSection";
import JourneySection from "@/components/home/JourneySection";
import TeamPreviewSection from "@/components/home/TeamPreviewSection";

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
      <HomeHero />
      <FeaturedCharactersSection
        characters={characters}
        isLoading={charsLoading}
        onCardClick={setActiveCharacter}
      />
      <FeaturedAnimationSection video={featuredVideo} />
      <StorybookTeaserSection />
      <JourneySection />
      <TeamPreviewSection team={team} />

      <section className="py-12 bg-[hsl(var(--kotz-ink))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InvestorBanner />
        </div>
      </section>

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
