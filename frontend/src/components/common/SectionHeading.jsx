import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  eyebrowClassName,
  titleClassName,
}) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.35 }}
      className={cn("max-w-3xl", alignClasses, className)}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-[10px] font-mono uppercase tracking-[0.3em] mb-3 flex items-center gap-2",
            align === "center" ? "justify-center" : "",
            "text-[hsl(var(--kotz-gold))]",
            eyebrowClassName
          )}
        >
          <span className="inline-block h-px w-8 bg-[hsl(var(--kotz-gold))]/50" />
          {eyebrow}
          <span className="inline-block h-px w-8 bg-[hsl(var(--kotz-gold))]/50" />
        </p>
      )}
      <h2
        className={cn(
          "font-display text-4xl sm:text-5xl lg:text-6xl tracking-wider text-foreground leading-[0.95]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-foreground/65 text-balance leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
