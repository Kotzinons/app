import { Card } from "@/components/ui/card";
import { Shield, Globe, Heart } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const PILLAR_COLORS = {
  red: "bg-[hsl(var(--kotz-red))]/15 text-[hsl(var(--kotz-red))] border-[hsl(var(--kotz-red))]/30",
  blue: "bg-[hsl(var(--kotz-blue))]/15 text-[hsl(var(--kotz-blue))] border-[hsl(var(--kotz-blue))]/30",
  gold: "bg-[hsl(var(--kotz-gold))]/20 text-[hsl(var(--kotz-gold))] border-[hsl(var(--kotz-gold))]/40",
  green: "bg-[hsl(var(--kotz-green))]/15 text-[hsl(var(--kotz-green))] border-[hsl(var(--kotz-green))]/30",
};

const PILLARS = [
  {
    icon: Shield,
    color: "red",
    title: "Courage",
    body: "Every Kotzinon stands tall when others can't. We tell stories that show bravery in everyday moments.",
  },
  {
    icon: Globe,
    color: "blue",
    title: "Imagination",
    body: "From sketch to toy to screen, we celebrate the power of making something with your own hands.",
  },
  {
    icon: Heart,
    color: "gold",
    title: "Belonging",
    body: "Five colors, one team. There is a Kotzinon for every kid — because everyone belongs in the lineup.",
  },
];

function Pillar({ icon: Icon, color, title, body }) {
  return (
    <Card className="p-6 rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))] hover:border-[hsl(var(--kotz-gold))]/40 transition-colors duration-300">
      <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl border ${PILLAR_COLORS[color]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="mt-4 font-display text-2xl tracking-wider text-foreground">{title}</h4>
      <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{body}</p>
    </Card>
  );
}

export default function PillarsSection() {
  return (
    <section className="py-20 bg-[hsl(var(--kotz-ink))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Stand For"
          title="COURAGE, IMAGINATION, BELONGING"
          align="center"
          className="mx-auto mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((p) => (
            <Pillar key={p.title} icon={p.icon} color={p.color} title={p.title} body={p.body} />
          ))}
        </div>
      </div>
    </section>
  );
}
