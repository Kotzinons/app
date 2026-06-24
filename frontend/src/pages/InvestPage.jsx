import InvestHero from "@/components/invest/InvestHero";
import OpportunitiesSection from "@/components/invest/OpportunitiesSection";
import WhyKotzinonsSection from "@/components/invest/WhyKotzinonsSection";
import ProcessSection from "@/components/invest/ProcessSection";
import InvestFinalCTA from "@/components/invest/InvestFinalCTA";

export default function InvestPage() {
  return (
    <div data-testid="invest-page">
      <InvestHero />
      <OpportunitiesSection />
      <WhyKotzinonsSection />
      <ProcessSection />
      <InvestFinalCTA />
    </div>
  );
}
