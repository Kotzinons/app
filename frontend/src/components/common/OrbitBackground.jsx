import { cn } from "@/lib/utils";

function getOpacity(intensity) {
  if (intensity === "high") return 0.28;
  if (intensity === "low") return 0.12;
  return 0.2;
}

// Pre-computed stable star positions (deterministic seed)
const STARS = Array.from({ length: 60 }).map((_, i) => ({
  id: `star-${i}`,
  x: ((i * 173) % 1200) + ((i * 13) % 30),
  y: ((i * 113) % 800) + ((i * 7) % 25),
  r: (i % 3) + 0.6,
}));

export default function OrbitBackground({ className, intensity = "medium" }) {
  const op = getOpacity(intensity);
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      data-testid="orbit-background"
    >
      {/* Star field dots */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="star-grad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FFE08A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFE08A" stopOpacity="0" />
          </radialGradient>
        </defs>
        {STARS.map((s) => (
          <circle key={s.id} cx={s.x} cy={s.y} r={s.r} fill="url(#star-grad)" opacity={0.6} />
        ))}
      </svg>

      {/* Color washes */}
      <div className="absolute -top-40 -left-32 h-[640px] w-[640px] rounded-full" style={{ background: `radial-gradient(circle, hsla(43, 92%, 56%, ${op}), transparent 60%)` }} />
      <div className="absolute top-1/3 -right-32 h-[560px] w-[560px] rounded-full" style={{ background: `radial-gradient(circle, hsla(213, 92%, 56%, ${op * 0.9}), transparent 60%)` }} />
      <div className="absolute bottom-0 left-1/4 h-[520px] w-[520px] rounded-full" style={{ background: `radial-gradient(circle, hsla(358, 80%, 55%, ${op * 0.7}), transparent 60%)` }} />

      {/* Orbit rings */}
      <svg viewBox="0 0 1200 800" className="absolute inset-0 w-full h-full opacity-[0.22]" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="orbit-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE08A" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFE08A" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FFE08A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse cx="600" cy="420" rx="580" ry="190" fill="none" stroke="url(#orbit-stroke)" strokeWidth="1" />
        <ellipse cx="600" cy="420" rx="440" ry="150" fill="none" stroke="url(#orbit-stroke)" strokeWidth="0.8" />
        <ellipse cx="600" cy="420" rx="320" ry="110" fill="none" stroke="url(#orbit-stroke)" strokeWidth="0.6" />
      </svg>

      <div className="absolute inset-0 bg-noise mix-blend-overlay" />
    </div>
  );
}
