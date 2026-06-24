import JourneyTimeline from "@/components/common/JourneyTimeline";
import SectionHeading from "@/components/common/SectionHeading";

export default function JourneySection() {
  return (
    <section className="py-20 bg-[hsl(var(--kotz-ink))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Journey"
          title="FOUR LIVES OF EVERY KOTZINON"
          subtitle="Each character traveled the same path — from a pen sketch to full motion animation."
          align="center"
          className="mx-auto mb-12"
        />
        <JourneyTimeline />
      </div>
    </section>
  );
}
