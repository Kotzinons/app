import JourneyTimeline from "@/components/common/JourneyTimeline";
import SectionHeading from "@/components/common/SectionHeading";

export default function JourneySection() {
  return (
    <section className="relative py-20 bg-[hsl(var(--kotz-ink-2))]/40">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Journey"
          title="FROM A PEN ON PAPER TO THE BIG SCREEN."
          subtitle="Every Kotzinon went through four lives — a drawing, a handmade toy, a 3D render, and now full animation."
          align="center"
          className="mb-12 mx-auto"
        />
        <JourneyTimeline />
      </div>
    </section>
  );
}
