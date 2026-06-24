import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Crown } from "lucide-react";
import { COLOR_MAP } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function CharacterCard({ character, onClick, index = 0 }) {
  const c = COLOR_MAP[character.color] || COLOR_MAP.gold;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <Card
        onClick={() => onClick && onClick(character)}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && onClick) {
            e.preventDefault();
            onClick(character);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`Open ${character.name} dossier`}
        data-testid={`character-card-${character.slug}`}
        className={cn(
          "group relative overflow-hidden rounded-2xl border bg-card cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground",
          "transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1",
          c.glow
        )}
      >
        {/* Top color bar */}
        <div className={cn("h-1.5 w-full", c.bg)} />

        {/* Image area */}
        <div className="relative aspect-[3/4] bg-[hsl(var(--kotz-ink))] overflow-hidden">
          <div className={cn("absolute inset-0 opacity-30 bg-halftone text-white")} />
          <img
            src={character.image_url}
            alt={`${character.name} — ${character.role}`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
          />
          {/* Bottom gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          {character.is_leader && (
            <Badge
              className={cn(
                "absolute top-3 left-3 gap-1 backdrop-blur-sm border",
                c.bgSoft,
                c.text,
                c.border
              )}
            >
              <Crown className="h-3 w-3" /> Leader
            </Badge>
          )}
          <Badge
            variant="secondary"
            className="absolute top-3 right-3 bg-white/90 text-[hsl(var(--kotz-ink))] backdrop-blur-sm font-mono text-[10px] uppercase tracking-wider"
          >
            #{String(character.order).padStart(2, "0")}
          </Badge>
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className={cn("inline-block h-2.5 w-2.5 rounded-full", c.bg)} />
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/70">
                {c.label}
              </span>
            </div>
            <h3 className="font-display text-3xl tracking-wider leading-none">
              {character.name.toUpperCase()}
            </h3>
            <p className="mt-1 text-sm text-white/80">{character.role}</p>
          </div>
        </div>

        {/* Stat strip */}
        <div className="p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <Sparkles className={cn("h-3.5 w-3.5", c.text)} />
            <span className="truncate">{character.weapon}</span>
          </div>
          <span className={cn("text-xs font-semibold uppercase tracking-wider", c.text)}>
            View Dossier →
          </span>
        </div>
      </Card>
    </motion.div>
  );
}
