import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Shield, Crown, Swords } from "lucide-react";
import { COLOR_MAP } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function CharacterDossierDialog({ character, open, onOpenChange }) {
  if (!character) return null;
  const c = COLOR_MAP[character.color] || COLOR_MAP.gold;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-4xl p-0 overflow-hidden bg-[hsl(var(--kotz-ink-2))] border-border"
        data-testid="character-dossier-dialog"
      >
        <DialogTitle className="sr-only">{character.name} dossier</DialogTitle>
        <DialogDescription className="sr-only">{character.tagline}</DialogDescription>
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative bg-black aspect-[3/4] md:aspect-auto">
            <img
              src={character.image_url}
              alt={`${character.name} dossier image`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={cn("inline-block h-3 w-3 rounded-full", c.bg)} />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70">
                  {c.label}
                </span>
                {character.is_leader && (
                  <Badge className="gap-1 bg-[hsl(var(--kotz-gold))]/15 text-[hsl(var(--kotz-gold))] border-[hsl(var(--kotz-gold))]/40 border">
                    <Crown className="h-3 w-3" /> Leader
                  </Badge>
                )}
              </div>
              <h2 className="font-display text-5xl tracking-wider leading-none">
                {character.name.toUpperCase()}
              </h2>
              <p className="mt-1 text-sm text-white/80">{character.role}</p>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto scrollbar-thin">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[hsl(var(--kotz-gold))]">
              Hero Dossier
            </p>
            <p className="mt-2 font-serif italic text-xl text-foreground/90 text-balance leading-snug">
              “{character.tagline}”
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              {character.description}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <div className="rounded-xl border border-border p-4 bg-[hsl(var(--kotz-ink))]">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/55">
                  <Swords className="h-3.5 w-3.5" /> Signature Weapon
                </div>
                <p className="mt-1 text-base font-semibold text-foreground">{character.weapon}</p>
              </div>
              <div className="rounded-xl border border-border p-4 bg-[hsl(var(--kotz-ink))]">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/55">
                  <Shield className="h-3.5 w-3.5" /> Abilities
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {character.abilities?.map((a) => (
                    <Badge
                      key={a}
                      variant="outline"
                      className={cn("gap-1 font-mono text-[11px] bg-transparent", c.text, c.border)}
                    >
                      <Sparkles className="h-3 w-3" /> {a}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
