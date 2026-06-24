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
        className="max-w-4xl p-0 overflow-hidden bg-card"
        data-testid="character-dossier-dialog"
      >
        <DialogTitle className="sr-only">{character.name} dossier</DialogTitle>
        <DialogDescription className="sr-only">{character.tagline}</DialogDescription>
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative bg-[hsl(var(--kotz-ink))] aspect-[3/4] md:aspect-auto">
            <div className="absolute inset-0 opacity-25 bg-halftone text-white" />
            <img
              src={character.image_url}
              alt={`${character.name} dossier image`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className={cn("inline-block h-3 w-3 rounded-full", c.bg)} />
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/80">
                  {c.label}
                </span>
                {character.is_leader && (
                  <Badge className={cn("ml-1 gap-1 border", c.bgSoft, c.text, c.border)}>
                    <Crown className="h-3 w-3" /> Leader
                  </Badge>
                )}
              </div>
              <h2 className="font-display text-5xl tracking-wider leading-none">
                {character.name.toUpperCase()}
              </h2>
              <p className="mt-1 text-sm text-white/85">{character.role}</p>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Dossier
            </p>
            <p className="mt-2 text-lg italic text-foreground/90 text-balance">
              “{character.tagline}”
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {character.description}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="rounded-xl border p-4 bg-secondary/50">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  <Swords className="h-3.5 w-3.5" /> Signature Weapon
                </div>
                <p className="mt-1 text-base font-semibold">{character.weapon}</p>
              </div>
              <div className="rounded-xl border p-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  <Shield className="h-3.5 w-3.5" /> Abilities
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {character.abilities?.map((a) => (
                    <Badge
                      key={a}
                      variant="outline"
                      className={cn("gap-1 font-mono text-[11px]", c.text, c.border)}
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
