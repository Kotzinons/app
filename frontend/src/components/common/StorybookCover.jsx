import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { BookOpen, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fetchCharacters } from "@/lib/api";
import { LOGO_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SIZES = {
  sm: { container: "max-w-xs", title: "text-3xl", thumb: "h-16 w-12" },
  md: { container: "max-w-sm", title: "text-4xl sm:text-5xl", thumb: "h-20 w-14" },
  lg: { container: "max-w-md", title: "text-5xl sm:text-6xl", thumb: "h-24 w-16" },
};

// Pre-computed stable star positions
const STARS = Array.from({ length: 35 }).map((_, i) => ({
  id: `book-star-${i}`,
  x: ((i * 173) % 400),
  y: ((i * 113) % 600),
  r: (i % 3) * 0.5 + 0.5,
}));

function StarField() {
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      {STARS.map((s) => (
        <circle key={s.id} cx={s.x} cy={s.y} r={s.r} fill="#FFE08A" opacity={0.6} />
      ))}
    </svg>
  );
}

function HeroThumbnails({ heroes, thumbClass }) {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 px-3">
      {heroes.map((h) => (
        <div
          key={h.id}
          className={cn(
            "rounded-md overflow-hidden border-2 shrink-0",
            thumbClass,
            "border-[hsl(var(--kotz-gold))]/60"
          )}
          style={{ boxShadow: `0 4px 16px -4px ${h.color_hex}` }}
        >
          <img src={h.image_url} alt={h.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

function ComingSoonRibbon() {
  return (
    <div className="absolute -top-3 -right-3 rotate-12 z-10">
      <div className="bg-[hsl(var(--kotz-red))] text-white px-3 py-1 rounded-md shadow-lg font-display text-sm tracking-widest border-2 border-white/20">
        COMING SOON
      </div>
    </div>
  );
}

export default function StorybookCover({ size = "md", className }) {
  const { data: characters = [] } = useQuery({ queryKey: ["characters"], queryFn: fetchCharacters });
  const heroes = characters.slice(0, 5);
  const s = SIZES[size] || SIZES.md;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("relative", s.container, className)}
      data-testid="storybook-cover"
    >
      {/* Book shadow */}
      <div className="absolute -inset-6 bg-[radial-gradient(circle_at_center,hsla(43,92%,56%,0.3),transparent_70%)] blur-2xl" />

      {/* Book spine effect */}
      <div className="absolute -left-2 top-3 bottom-3 w-2 rounded-l-md bg-gradient-to-b from-[#5a3210] via-[#3a2008] to-[#5a3210] shadow-inner" />

      <div
        className={cn(
          "relative rounded-r-2xl rounded-l-md border-2 border-[hsl(var(--kotz-gold))]/30 overflow-hidden aspect-[2/3]",
          "shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)]"
        )}
        style={{ background: "linear-gradient(160deg, #1a2238 0%, #0a0e1a 100%)" }}
      >
        {/* Gold border frame */}
        <div className="absolute inset-2 border border-[hsl(var(--kotz-gold))]/40 rounded-md pointer-events-none" />

        <StarField />

        {/* Halo glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-[radial-gradient(circle,hsla(43,92%,56%,0.5),transparent_60%)]" />

        {/* Logo on cover */}
        <div className="relative pt-6 px-4 flex flex-col items-center text-center">
          <img src={LOGO_URL} alt="The Kotzinons" className="h-16 sm:h-20 w-auto object-contain drop-shadow-2xl" />
          <Badge
            variant="outline"
            className="mt-3 bg-[hsl(var(--kotz-gold))]/15 text-[hsl(var(--kotz-gold))] border-[hsl(var(--kotz-gold))]/50 font-mono text-[10px] tracking-[0.2em] uppercase"
          >
            <Sparkles className="h-3 w-3 mr-1" /> Storybook — Vol. 1
          </Badge>
        </div>

        {/* Title */}
        <div className="relative px-4 mt-3 text-center">
          <h3
            className={cn("font-serif italic gold-text leading-none", s.title)}
            style={{ textShadow: "0 2px 20px rgba(245,192,51,0.4)" }}
          >
            Origins
          </h3>
          <p className="mt-1.5 text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/65">
            A Hero is Born
          </p>
        </div>

        <HeroThumbnails heroes={heroes} thumbClass={s.thumb} />

        <BookOpen className="absolute bottom-2 right-3 h-3 w-3 text-[hsl(var(--kotz-gold))]/40" />
      </div>

      <ComingSoonRibbon />
    </motion.div>
  );
}
