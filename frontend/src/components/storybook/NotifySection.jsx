import { Card } from "@/components/ui/card";
import { Bell } from "lucide-react";
import NewsletterForm from "@/components/common/NewsletterForm";
import { INVESTOR_EMAIL } from "@/lib/constants";

export default function NotifySection() {
  return (
    <section id="notify-me" className="py-20 bg-[hsl(var(--kotz-ink))]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 sm:p-10 rounded-3xl border border-[hsl(var(--kotz-gold))]/30 bg-[hsl(var(--kotz-ink-2))] relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,hsla(43,92%,56%,0.3),transparent_60%)]" />
          <div className="relative">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[hsl(var(--kotz-gold))]">
              <Bell className="h-3.5 w-3.5" /> Be first in line
            </div>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl tracking-wider text-foreground leading-tight">
              GET NOTIFIED WHEN THE STORYBOOK LAUNCHES
            </h3>
            <p className="mt-3 text-foreground/65 text-sm sm:text-base">
              Drop your email and we&apos;ll let you know the moment the first copy is available.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
            <p className="mt-4 text-xs text-foreground/45 font-mono">
              Or write directly to{" "}
              <a
                href={`mailto:${INVESTOR_EMAIL}`}
                className="underline decoration-dotted text-foreground/65 hover:text-[hsl(var(--kotz-gold))]"
              >
                {INVESTOR_EMAIL}
              </a>{" "}
              for publishing & distribution.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
