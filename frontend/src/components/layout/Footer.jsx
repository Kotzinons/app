import { Link } from "react-router-dom";
import { Mail, Youtube, Instagram, Twitter, Sparkles } from "lucide-react";
import { LOGO_URL, NAV_LINKS, INVESTOR_EMAIL } from "@/lib/constants";

function FooterBrand() {
  return (
    <div className="md:col-span-5">
      <Link to="/" className="flex items-center gap-3">
        <img src={LOGO_URL} alt="The Kotzinons" className="h-12 w-12 object-contain" />
        <span className="font-display text-2xl tracking-wider text-foreground">THE KOTZINONS</span>
      </Link>
      <p className="mt-5 text-sm text-foreground/65 max-w-md leading-relaxed">
        A new universe of armored heroes — born from a single drawing, built into a toy line,
        and now in full motion. Created and copyrighted by Uri Menashe Eini.
      </p>
      <div className="mt-5 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[hsl(var(--kotz-gold))]">
        <Sparkles className="h-3.5 w-3.5" /> Licensing & investment inquiries welcome
      </div>
      <a
        href={`mailto:${INVESTOR_EMAIL}`}
        className="mt-2 inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-[hsl(var(--kotz-gold))] transition-colors"
        data-testid="footer-investor-email"
      >
        <Mail className="h-4 w-4" /> {INVESTOR_EMAIL}
      </a>
    </div>
  );
}

function FooterExploreColumn() {
  return (
    <div className="md:col-span-4">
      <h4 className="font-display tracking-wider text-base mb-4 text-foreground/80">EXPLORE</h4>
      <ul className="grid grid-cols-2 gap-y-2 text-sm">
        {NAV_LINKS.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-foreground/65 hover:text-[hsl(var(--kotz-gold))] transition-colors duration-150"
              data-testid={`footer-${l.testid}`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterConnectColumn() {
  return (
    <div className="md:col-span-3">
      <h4 className="font-display tracking-wider text-base mb-4 text-foreground/80">CONNECT</h4>
      <ul className="space-y-3 text-sm">
        <li>
          <a
            href="https://www.youtube.com/shorts/diZbJpeyo6o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-[hsl(var(--kotz-gold))] transition-colors duration-150"
            data-testid="footer-youtube"
          >
            <Youtube className="h-4 w-4" /> YouTube
          </a>
        </li>
        <li className="inline-flex items-center gap-2 text-foreground/40">
          <Instagram className="h-4 w-4" /> Coming soon
        </li>
        <li className="inline-flex items-center gap-2 text-foreground/40">
          <Twitter className="h-4 w-4" /> Coming soon
        </li>
        <li>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-[hsl(var(--kotz-gold))] transition-colors duration-150"
            data-testid="footer-contact"
          >
            <Mail className="h-4 w-4" /> Send a message
          </Link>
        </li>
      </ul>
    </div>
  );
}

function FooterMeta() {
  return (
    <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p className="text-xs text-foreground/45 font-mono">
        © {new Date().getFullYear()} Uri Menashe Eini. All artwork, characters and the name “The Kotzinons” are protected by copyright.
      </p>
      <div className="flex items-center gap-2">
        <span className="inline-block w-3 h-3 rounded-full bg-[hsl(var(--kotz-red))]" />
        <span className="inline-block w-3 h-3 rounded-full bg-[hsl(var(--kotz-blue))]" />
        <span className="inline-block w-3 h-3 rounded-full bg-[hsl(var(--kotz-gold))]" />
        <span className="inline-block w-3 h-3 rounded-full bg-[hsl(var(--kotz-green))]" />
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative bg-[hsl(var(--kotz-ink))] text-foreground border-t border-border"
      data-testid="site-footer"
    >
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <FooterBrand />
          <FooterExploreColumn />
          <FooterConnectColumn />
        </div>
        <FooterMeta />
      </div>
    </footer>
  );
}
