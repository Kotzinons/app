function ColorChip({ name, colorHex }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="inline-block h-3 w-3 rounded-full"
        style={{ backgroundColor: colorHex, boxShadow: `0 0 16px ${colorHex}` }}
      />
      <span className="text-xs font-mono uppercase tracking-[0.25em] text-foreground/65">
        {name}
      </span>
    </div>
  );
}

export default function ColorPaletteRow({ characters }) {
  if (!characters?.length) return null;
  return (
    <section className="py-12 bg-[hsl(var(--kotz-ink))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {characters.map((c) => (
            <ColorChip key={c.id} name={c.name} colorHex={c.color_hex} />
          ))}
        </div>
      </div>
    </section>
  );
}
