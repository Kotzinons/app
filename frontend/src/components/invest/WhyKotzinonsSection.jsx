import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { SPACESHIP_HERO_URL } from "@/lib/constants";

const REASONS = [
  "Five distinct heroes with clear color identities — instantly merchandiseable.",
  "A story that scales — toy line, storybook, episodes, and feature-length potential.",
  "Fully owned IP. No prior license entanglements.",
  "Active animation production with a dedicated team.",
  "Toy-ready design language with built-in articulation reference (handcrafted prototype origin).",
];

export default function WhyKotzinonsSection() {
  return (
    <section className="py-20 bg-[hsl(var(--kotz-ink-2))]/40 relative">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Why Kotzinons"
              title="BUILT TO TRAVEL."
              subtitle="Original characters. Original story. A visual language that fits perfectly across toys, animation, publishing, gaming, and theme entertainment."
            />
            <ul className="mt-6 space-y-3 text-sm sm:text-base text-foreground/80">
              {REASONS.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-[hsl(var(--kotz-gold))] shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border overflow-hidden bg-black">
              <img src={SPACESHIP_HERO_URL} alt="Kotzinons cinematic still" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
