import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export default function YouTubeFrame({ youtubeId, title = "YouTube video", isShort = false, className }) {
  const src = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`;
  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-black/90 overflow-hidden shadow-[0_30px_90px_-60px_rgba(0,0,0,0.9)]",
        className
      )}
      data-testid="youtube-frame"
    >
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
      {/* Glass highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent" />
    </div>
  );
}
