import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function MasonryGallery({ items }) {
  const [active, setActive] = useState(null);

  if (!items?.length) {
    return (
      <div className="text-center py-20 text-muted-foreground" data-testid="gallery-empty">
        No items in this category yet — check back soon!
      </div>
    );
  }

  return (
    <>
      <div
        className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]"
        data-testid="masonry-gallery"
      >
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item)}
            data-testid={`gallery-item-${i}`}
            className={cn(
              "mb-5 inline-block w-full overflow-hidden rounded-2xl border bg-card group focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground",
              "transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            )}
            aria-label={`Open ${item.title} preview`}
          >
            <div className="relative">
              <img
                src={item.image_url}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute inset-x-0 bottom-0 p-3 text-left text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/70">
                  {item.category}
                </p>
                <p className="font-semibold text-sm leading-tight">{item.title}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className="max-w-5xl p-2 sm:p-3 bg-card"
          data-testid="gallery-lightbox"
        >
          {active && (
            <>
              <DialogTitle className="sr-only">{active.title}</DialogTitle>
              <DialogDescription className="sr-only">{active.description}</DialogDescription>
              <img
                src={active.image_url}
                alt={active.title}
                className="w-full max-h-[78vh] object-contain rounded-xl bg-[hsl(var(--kotz-ink))]"
              />
              <div className="p-3 sm:p-4">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  {active.category}
                </p>
                <h3 className="font-display text-2xl tracking-wider mt-1">{active.title}</h3>
                {active.description && (
                  <p className="mt-2 text-sm text-muted-foreground">{active.description}</p>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
