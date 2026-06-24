import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function LoadingGrid({ count = 6, className }) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", className)} data-testid="loading-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))] overflow-hidden">
          <Skeleton className="aspect-[3/4] w-full bg-[hsl(var(--kotz-ink))]" />
          <div className="p-4">
            <Skeleton className="h-4 w-2/3 bg-[hsl(var(--kotz-ink))]" />
            <Skeleton className="mt-2 h-3 w-1/3 bg-[hsl(var(--kotz-ink))]" />
          </div>
        </div>
      ))}
    </div>
  );
}
