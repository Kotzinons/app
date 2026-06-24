import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COLOR_MAP } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function TeamMemberCard({ member, index = 0 }) {
  const c = COLOR_MAP[member.avatar_color] || COLOR_MAP.gold;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <Card
        className={cn(
          "relative p-6 sm:p-7 rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))] overflow-hidden h-full",
          "transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[hsl(var(--kotz-gold))]/40",
          c.glow
        )}
        data-testid={`team-member-card-${member.order}`}
      >
        <span className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-grain opacity-30" />
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex items-center justify-center h-16 w-16 rounded-2xl text-white font-display text-2xl tracking-wider shrink-0 ring-2 ring-white/10",
              c.bg
            )}
            aria-hidden="true"
          >
            {member.avatar_initials}
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-2xl tracking-wider leading-tight text-foreground">
              {member.name}
            </h3>
            <p className={cn("text-sm font-semibold mt-0.5", c.text)}>{member.role}</p>
            <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-foreground/50 mt-1">
              {member.title}
            </p>
          </div>
        </div>
        <p className="mt-5 text-sm text-foreground/70 leading-relaxed">{member.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {member.responsibilities?.map((r) => (
            <Badge
              key={r}
              variant="outline"
              className={cn("font-mono text-[10px] uppercase tracking-wider bg-transparent", c.text, c.border)}
            >
              {r}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
