import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Sparkles, Youtube, Globe } from "lucide-react";
import NewsletterForm from "@/components/common/NewsletterForm";
import { INVESTOR_EMAIL } from "@/lib/constants";

function InvestorContactCard() {
  return (
    <Card className="p-6 rounded-2xl border border-[hsl(var(--kotz-gold))]/30 bg-[hsl(var(--kotz-ink-2))] relative overflow-hidden">
      <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,hsla(43,92%,56%,0.3),transparent_60%)]" />
      <div className="relative">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[hsl(var(--kotz-gold))]">
          <Sparkles className="h-3.5 w-3.5" /> Direct line
        </div>
        <h3 className="mt-2 font-display text-2xl tracking-wider text-foreground">INVESTORS & LICENSING</h3>
        <p className="mt-1 text-sm text-foreground/65">Reach the creator directly for serious inquiries:</p>
        <Button
          asChild
          className="mt-4 w-full rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold"
          data-testid="contact-investor-mail-btn"
        >
          <a href={`mailto:${INVESTOR_EMAIL}?subject=Kotzinons%20Licensing%20%2F%20Investment`}>
            <Mail className="h-4 w-4" /> {INVESTOR_EMAIL}
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="mt-2 w-full rounded-xl border-border bg-transparent text-foreground hover:bg-foreground/5"
        >
          <Link to="/invest">View opportunities</Link>
        </Button>
      </div>
    </Card>
  );
}

function NewsletterCard() {
  return (
    <Card className="p-6 rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))]">
      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[hsl(var(--kotz-gold))]">
        <Sparkles className="h-3.5 w-3.5" /> Newsletter
      </div>
      <h3 className="mt-2 font-display text-2xl tracking-wider text-foreground">JOIN THE KOTZINONS FAM</h3>
      <p className="mt-1 text-sm text-foreground/65">Be the first to see new animations, characters, and toy drops.</p>
      <div className="mt-4">
        <NewsletterForm />
      </div>
    </Card>
  );
}

function OtherChannelLink({ to, href, icon: Icon, colorClass, title, subtitle, testid, external = false }) {
  const className = "inline-flex items-center gap-3 text-foreground hover:text-[hsl(var(--kotz-gold))]";
  const inner = (
    <>
      <span className={`inline-flex items-center justify-center h-9 w-9 rounded-lg ${colorClass}`}>
        <Icon className="h-4 w-4" />
      </span>
      <span>
        <span className="block font-semibold">{title}</span>
        <span className="block text-foreground/55 text-xs">{subtitle}</span>
      </span>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} data-testid={testid}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to} className={className} data-testid={testid}>
      {inner}
    </Link>
  );
}

function OtherChannelsCard() {
  return (
    <Card className="p-6 rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))]">
      <h3 className="font-display text-2xl tracking-wider text-foreground">OTHER WAYS TO REACH US</h3>
      <ul className="mt-4 space-y-3 text-sm">
        <li>
          <OtherChannelLink
            external
            href="https://www.youtube.com/shorts/diZbJpeyo6o"
            icon={Youtube}
            colorClass="bg-[hsl(var(--kotz-red))]/15 text-[hsl(var(--kotz-red))] border border-[hsl(var(--kotz-red))]/30"
            title="YouTube"
            subtitle="Watch our latest short"
            testid="contact-link-youtube"
          />
        </li>
        <li>
          <OtherChannelLink
            to="/team"
            icon={Mail}
            colorClass="bg-[hsl(var(--kotz-blue))]/15 text-[hsl(var(--kotz-blue))] border border-[hsl(var(--kotz-blue))]/30"
            title="Meet the team"
            subtitle="See who&apos;s behind the project"
            testid="contact-link-team"
          />
        </li>
        <li>
          <OtherChannelLink
            to="/characters"
            icon={Globe}
            colorClass="bg-[hsl(var(--kotz-gold))]/15 text-[hsl(var(--kotz-gold))] border border-[hsl(var(--kotz-gold))]/40"
            title="Explore the universe"
            subtitle="Open the character roster"
            testid="contact-link-characters"
          />
        </li>
      </ul>
    </Card>
  );
}

export default function ContactSidebar() {
  return (
    <div className="lg:col-span-5 space-y-5">
      <InvestorContactCard />
      <NewsletterCard />
      <OtherChannelsCard />
    </div>
  );
}
