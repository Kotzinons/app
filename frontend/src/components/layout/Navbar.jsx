import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NAV_LINKS, LOGO_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-header"
      className={cn(
        "sticky top-0 z-40 w-full border-b border-transparent transition-[background-color,border-color,box-shadow] duration-200",
        scrolled
          ? "bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-border shadow-sm"
          : "bg-background/40 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group" data-testid="site-logo">
          <img
            src={LOGO_URL}
            alt="Kotzinons logo"
            className="h-10 w-10 object-contain group-hover:rotate-[8deg] transition-transform duration-300"
          />
          <span className="font-display text-2xl tracking-wider text-foreground">KOTZINONS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" data-testid="site-nav-desktop">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={l.testid}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-150",
                  isActive
                    ? "text-foreground bg-foreground/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex rounded-full px-4"
            data-testid="nav-cta-watch"
          >
            <Link to="/animations">Watch the Short</Link>
          </Button>

          {/* Mobile nav */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
                data-testid="site-nav-mobile-trigger"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px] bg-background" data-testid="site-nav-mobile">
              <SheetTitle className="font-display text-2xl tracking-wider mb-2">KOTZINONS</SheetTitle>
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
                          ? "bg-foreground text-background"
                          : "text-foreground hover:bg-foreground/5"
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
                <Button asChild className="mt-4 rounded-full" data-testid="nav-cta-watch-mobile">
                  <Link to="/animations">Watch the Short</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
