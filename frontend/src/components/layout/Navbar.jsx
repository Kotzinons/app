import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NAV_LINKS, LOGO_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

function useScrollState(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return scrolled;
}

function DesktopNav() {
  return (
    <nav className="hidden xl:flex items-center gap-0.5" data-testid="site-nav-desktop">
      {NAV_LINKS.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          data-testid={l.testid}
          end={l.to === "/"}
          className={({ isActive }) =>
            cn(
              "px-3 py-2 text-[13px] font-semibold rounded-md transition-colors duration-150 tracking-wide",
              isActive
                ? "text-[hsl(var(--kotz-gold))]"
                : "text-foreground/70 hover:text-foreground"
            )
          }
        >
          {l.label}
        </NavLink>
      ))}
    </nav>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden text-foreground hover:bg-foreground/5"
          aria-label="Open menu"
          data-testid="site-nav-mobile-trigger"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[360px] bg-[hsl(var(--kotz-ink))] border-l border-border"
        data-testid="site-nav-mobile"
      >
        <SheetTitle className="font-display text-2xl tracking-wider mb-2 text-foreground">THE KOTZINONS</SheetTitle>
        <nav className="flex flex-col gap-1 mt-4">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`${l.testid}-mobile`}
              className={({ isActive }) =>
                cn(
                  "px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-150",
                  isActive
                    ? "bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))]"
                    : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild className="mt-4 rounded-full bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold" data-testid="nav-cta-invest-mobile">
            <Link to="/invest">Licensing & Invest</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollState(12);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-header"
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-[background-color,border-color,box-shadow] duration-200",
        scrolled
          ? "bg-[hsl(var(--kotz-ink))]/90 backdrop-blur-xl border-border shadow-[0_8px_30px_-15px_rgba(0,0,0,0.6)]"
          : "bg-[hsl(var(--kotz-ink))]/40 backdrop-blur-md border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 group" data-testid="site-logo">
          <img
            src={LOGO_URL}
            alt="The Kotzinons"
            className="h-11 w-11 object-contain group-hover:rotate-[6deg] transition-transform duration-500"
          />
          <span className="hidden sm:block font-display text-xl tracking-wider text-foreground">THE KOTZINONS</span>
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex rounded-full px-4 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold"
            data-testid="nav-cta-invest"
          >
            <Link to="/invest">Licensing & Invest <ArrowRight className="h-3.5 w-3.5 ml-1" /></Link>
          </Button>

          <MobileNav open={open} setOpen={setOpen} />
        </div>
      </div>
      {/* Subtle comet stripe at bottom of header */}
      <div className="h-px w-full comet-stripe opacity-50" />
    </header>
  );
}
