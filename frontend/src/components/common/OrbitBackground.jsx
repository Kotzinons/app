import { cn } from "@/lib/utils";

export default function OrbitBackground({ className }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      data-testid="orbit-background"
    >
      {/* Soft radial color washes */}
      <div className="absolute -top-32 -left-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,hsla(43,96%,56%,0.18),transparent_60%)]" />
      <div className="absolute top-1/3 -right-20 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_center,hsla(210,95%,50%,0.16),transparent_60%)]" />
      <div className="absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,hsla(152,62%,40%,0.14),transparent_60%)]" />

      {/* Orbit rings */}
      <svg
        viewBox="0 0 1200 800"
        className="absolute inset-0 w-full h-full opacity-[0.18]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="orbit-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(222 47% 11%)" stopOpacity="0.0" />
            <stop offset="50%" stopColor="hsl(222 47% 11%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(222 47% 11%)" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <ellipse cx="600" cy="420" rx="560" ry="180" fill="none" stroke="url(#orbit-stroke)" strokeWidth="1.2" />
        <ellipse cx="600" cy="420" rx="420" ry="140" fill="none" stroke="url(#orbit-stroke)" strokeWidth="1" />
        <ellipse cx="600" cy="420" rx="300" ry="100" fill="none" stroke="url(#orbit-stroke)" strokeWidth="0.8" />
      </svg>

      {/* Halftone overlay */}
      <div className="absolute inset-0 text-foreground bg-halftone" />
    </div>
  );
}
