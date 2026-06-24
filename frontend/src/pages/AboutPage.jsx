import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "@/lib/api";
import CTABand from "@/components/common/CTABand";
import AboutHero from "@/components/about/AboutHero";
import MissionQuote from "@/components/about/MissionQuote";
import JourneySection from "@/components/about/JourneySection";
import StorybookTeaser from "@/components/about/StorybookTeaser";
import PillarsSection from "@/components/about/PillarsSection";
import RubySpotlight from "@/components/about/RubySpotlight";
import ColorPaletteRow from "@/components/about/ColorPaletteRow";

export default function AboutPage() {
  const { data: characters = [] } = useQuery({ queryKey: ["characters"], queryFn: fetchCharacters });

  return (
    <div data-testid="about-page">
      <AboutHero />
      <MissionQuote />
      <JourneySection />
      <StorybookTeaser />
      <PillarsSection />
      <RubySpotlight />
      <ColorPaletteRow characters={characters} />
      <section className="pb-24 bg-[hsl(var(--kotz-ink))]">
        <CTABand />
      </section>
    </div>
  );
}
