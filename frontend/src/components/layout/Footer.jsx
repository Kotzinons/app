import { Link } from "react-router-dom";
import { Mail, Youtube, Instagram, Twitter } from "lucide-react";
import { LOGO_URL, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      className="relative bg-[hsl(var(--kotz-ink))] text-white"
      data-testid="site-footer"
    >
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={LOGO_URL} alt="Kotzinons logo" className="h-10 w-10 object-contain" />
              <span className="font-display text-2xl tracking-wider">KOTZINONS</span>
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-md">
              The official home of the Kotzinons — a colorful, courageous team of armored heroes
              created by Uri Eini. From hand-drawn sketches to handcrafted toys to full animation.
            </p>
            <p className="mt-4 text-xs text-white/50 font-mono">
              © Uri Menashe Eini. All artwork, characters and the name “Kotzinons” are protected by copyright.
            </p>
          </div>
          <div>
            <h4 className="font-display tracking-wider text-lg mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/70 hover:text-white transition-colors duration-150"
                    data-testid={`footer-${l.testid}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display tracking-wider text-lg mb-3">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.youtube.com/shorts/diZbJpeyo6o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-150"
                  data-testid="footer-youtube"
                >
                  <Youtube className="h-4 w-4" /> YouTube
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-white/60" data-testid="footer-instagram">
                  <Instagram className="h-4 w-4" /> Coming soon
                </span>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-white/60" data-testid="footer-twitter">
                  <Twitter className="h-4 w-4" /> Coming soon
                </span>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-150"
                  data-testid="footer-email"
                >
                  <Mail className="h-4 w-4" /> Send a message
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/50 font-mono">
            Made with care for kids, fans, and the future of indie animation.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[hsl(var(--kotz-red))]" />
            <span className="inline-block w-3 h-3 rounded-full bg-[hsl(var(--kotz-blue))]" />
            <span className="inline-block w-3 h-3 rounded-full bg-[hsl(var(--kotz-gold))]" />
            <span className="inline-block w-3 h-3 rounded-full bg-[hsl(var(--kotz-green))]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
