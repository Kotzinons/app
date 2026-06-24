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
            "text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-3",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-4xl sm:text-5xl tracking-wider text-foreground leading-[0.95]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
