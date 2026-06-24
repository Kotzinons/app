import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fetchCharacters } from "@/lib/api";
import { COLOR_MAP } from "@/lib/constants";
import CharacterCard from "@/components/common/CharacterCard";
import CharacterDossierDialog from "@/components/common/CharacterDossierDialog";
import SectionHeading from "@/components/common/SectionHeading";
import LoadingGrid from "@/components/common/LoadingGrid";
import OrbitBackground from "@/components/common/OrbitBackground";
import { cn } from "@/lib/utils";

const FILTERS = [
  { value: "all", label: "All", color: null },
  { value: "red", label: "Red", color: "red" },
  { value: "blue", label: "Blue", color: "blue" },
  { value: "gold", label: "Gold", color: "gold" },
  { value: "green", label: "Green", color: "green" },
];

function FilterButton({ filter, active, onClick }) {
  const c = filter.color ? COLOR_MAP[filter.color] : null;
  return (
    <Button
      size="sm"
      className={cn(
        "rounded-full px-4 transition-colors duration-150",
        active
          ? "bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold"
          : "bg-transparent border border-border text-foreground/75 hover:bg-foreground/5"
      )}
      onClick={onClick}
      data-testid={`character-filter-${filter.value}`}
    >
      {c && <span className={cn("inline-block h-2 w-2 rounded-full mr-2", c.bg)} />}
      {filter.label}
    </Button>
  );
}

export default function CharactersPage() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("all");
  const { data: characters = [], isLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });

  const filtered = useMemo(() => {
    if (filter === "all") return characters;
    return characters.filter((char) => char.color === filter);
  }, [characters, filter]);

  return (
    <div data-testid="characters-page">
      <section className="relative overflow-hidden bg-[hsl(var(--kotz-ink))]">
        <OrbitBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <SectionHeading
            eyebrow="Characters"
            title="MEET EVERY KOTZINON."
            subtitle="Filter by signature color and tap any card to open the full dossier."
          />

          <div className="mt-8 flex flex-wrap items-center gap-2" data-testid="character-filters">
            {FILTERS.map((f) => (
              <FilterButton
                key={f.value}
                filter={f}
                active={filter === f.value}
                onClick={() => setFilter(f.value)}
              />
            ))}
            <Badge variant="outline" className="ml-2 font-mono border-border text-foreground/65">
              {filtered.length} shown
            </Badge>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-[hsl(var(--kotz-ink))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <LoadingGrid count={5} className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((c, i) => (
                <CharacterCard key={c.id} character={c} index={i} onClick={(ch) => setActive(ch)} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CharacterDossierDialog character={active} open={!!active} onOpenChange={(o) => !o && setActive(null)} />
    </div>
  );
}
