"use client";
import { cn } from "@/lib/utils";
import { motion, useSpring, useTransform } from "motion/react";
import type { SpringOptions } from "motion/react";
import { useEffect } from "react";

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  as?: React.ElementType;
};

export function AnimatedNumber({
  value,
  className,
  springOptions,
  as: Component = "span",
}: AnimatedNumberProps) {
  // 👇 Start at 0 instead of value
  const spring = useSpring(0, springOptions);

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    // 👇 Animate to new value when it changes
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span // using motion(Component) is fine too
      className={cn("tabular-nums", className)}
    >
      {display}
    </motion.span>
  );
}
