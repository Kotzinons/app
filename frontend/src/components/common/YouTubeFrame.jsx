import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export default function YouTubeFrame({ youtubeId, title = "YouTube video", isShort = false, className }) {
  const src = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`;
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-border bg-black overflow-hidden shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)]",
        className
      )}
      data-testid="youtube-frame"
    >
      {/* Gold film strip */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-[hsl(var(--kotz-ink-2))]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--kotz-red))]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--kotz-gold))]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--kotz-green))]/80" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/50 truncate max-w-[60%]">
          {title}
        </span>
        <span className="text-[10px] font-mono text-foreground/50">LIVE</span>
      </div>
      <AspectRatio ratio={isShort ? 9 / 16 : 16 / 9}>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </AspectRatio>
    </div>
  );
}
