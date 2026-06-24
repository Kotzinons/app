import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import StorybookCover from "@/components/common/StorybookCover";

export default function StorybookTeaserSection() {
  return (
    <section className="relative py-20 bg-[hsl(var(--kotz-ink))]" data-testid="home-storybook-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <SectionHeading
              eyebrow="Coming Soon"
              title="THE STORYBOOK—ORIGINS."
              subtitle="How did the Kotzinons come to be? The official illustrated origin story is in production. Every spike, every cosmic battle, every secret of the Crystal Cell—told in full color."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold"
              >
                <Link to="/storybook" data-testid="home-storybook-cta">
                  Preview the Storybook <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
            <StorybookCover size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
