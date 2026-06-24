import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const CHAPTERS = [
  {
    n: "01",
    title: "The First Spark",
    body: "A drawing falls from the stars. A boy named Goldon picks it up — and his world changes forever.",
  },
  {
    n: "02",
    title: "The Crystal Cell Awakens",
    body: "In the heart of the Goldon family vault, an ancient armor pulses with light. It chooses a leader.",
  },
  {
    n: "03",
    title: "Crimson, Azure, Viridian, Ruby",
    body: "Four heroes are called — each from a different corner of the universe. Together they become the Kotzinons.",
  },
  {
    n: "04",
    title: "Defenders of the Universe",
    body: "With spike, shield, and storm — the team takes its first stand against the dark.",
  },
];

function ChapterCard({ n, title, body }) {
  return (
    <Card
      className="relative p-6 rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))] overflow-hidden hover:border-[hsl(var(--kotz-gold))]/40 transition-colors duration-300"
      data-testid={`storybook-chapter-${n}`}
    >
      <span className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-grain opacity-30" />
      <p className="font-display text-5xl gold-text leading-none">{n}</p>
      <h3 className="mt-3 font-display text-xl tracking-wider text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{body}</p>
      <BookOpen className="absolute bottom-4 right-4 h-4 w-4 text-foreground/15" />
    </Card>
  );
}

export default function ChapterPreviewSection() {
  return (
    <section className="relative py-20 bg-[hsl(var(--kotz-ink-2))]/40">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Chapter Preview"
          title="WHAT'S INSIDE"
          subtitle="Volume 1 — Origins is a four-chapter illustrated journey. Here is a taste of what's coming."
          align="center"
          className="mx-auto mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CHAPTERS.map((ch) => (
            <ChapterCard key={ch.n} n={ch.n} title={ch.title} body={ch.body} />
          ))}
        </div>
      </div>
    </section>
  );
}
