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
          "relative p-6 sm:p-7 rounded-2xl border bg-card overflow-hidden h-full",
          "transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1",
          c.glow
        )}
        data-testid={`team-member-card-${member.order}`}
      >
        <span className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-grain-dark opacity-40" />
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex items-center justify-center h-16 w-16 rounded-2xl text-white font-display text-2xl tracking-wider shrink-0",
              c.bg
            )}
            aria-hidden="true"
          >
            {member.avatar_initials}
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-2xl tracking-wider leading-tight">
              {member.name}
            </h3>
            <p className={cn("text-sm font-semibold mt-0.5", c.text)}>{member.role}</p>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground mt-1">
              {member.title}
            </p>
          </div>
        </div>
        <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {member.responsibilities?.map((r) => (
            <Badge
              key={r}
              variant="outline"
              className={cn("font-mono text-[10px] uppercase tracking-wider", c.text, c.border)}
            >
              {r}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
