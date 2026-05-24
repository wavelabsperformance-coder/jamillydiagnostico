import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-between gap-6 text-[11px] tracking-[0.3em] uppercase font-medium transition-all duration-500 px-8 py-5 md:px-10 md:py-6";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-wine"
      : variant === "light"
      ? "bg-background text-foreground hover:bg-accent hover:text-foreground"
      : "border border-background/40 text-background hover:bg-background hover:text-foreground";
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  );
}