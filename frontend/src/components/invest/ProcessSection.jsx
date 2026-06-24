import { Card } from "@/components/ui/card";
import { Mail, Briefcase, Globe2 } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { INVESTOR_EMAIL } from "@/lib/constants";

const STEPS = [
  { n: "01", title: "Reach out", body: `Email us at ${INVESTOR_EMAIL} or fill the contact form with inquiry type “Investment” or “Licensing”.`, icon: Mail },
  { n: "02", title: "Intro Call", body: "We share the deck, story bible, and current production status. NDA available on request.", icon: Briefcase },
  { n: "03", title: "Tailored Deal", body: "We structure a deal that matches your goals — acquisition, license, co-production, or distribution.", icon: Globe2 },
];

function ProcessStepCard({ n, title, body, icon: Icon }) {
  return (
    <Card className="p-6 rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))] hover:border-[hsl(var(--kotz-gold))]/40 transition-colors duration-300 relative overflow-hidden">
      <span className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-grain opacity-30" />
      <div className="flex items-center gap-3">
        <p className="font-display text-4xl gold-text leading-none">{n}</p>
        <Icon className="h-5 w-5 text-[hsl(var(--kotz-gold))]" />
      </div>
      <h3 className="mt-3 font-display text-xl tracking-wider text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{body}</p>
    </Card>
  );
}

export default function ProcessSection() {
  return (
    <section className="py-20 bg-[hsl(var(--kotz-ink))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How to Get in Touch"
          title="A SIMPLE, RESPECTFUL PROCESS"
          align="center"
          className="mx-auto mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STEPS.map((s) => (
            <ProcessStepCard key={s.n} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
