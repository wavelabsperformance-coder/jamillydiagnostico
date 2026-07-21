import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  analyticsEvent,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
  analyticsEvent?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-4 whitespace-nowrap text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-300 px-6 py-5 md:px-10 md:py-6 no-underline";

  const styles =
    variant === "primary"
      ? "!bg-[#25D366] !text-white !border !border-[#25D366] hover:!bg-[#128C7E] hover:!border-[#128C7E] active:!bg-[#128C7E]"
      : variant === "light"
      ? "bg-background text-foreground hover:bg-accent hover:text-foreground"
      : "border border-background/40 text-background hover:bg-background hover:text-foreground";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-analytics={analyticsEvent}
      className={`${base} ${styles} ${className}`}
    >
      <span className="whitespace-nowrap">
        {children}
      </span>

      <ArrowUpRight
        className="
          w-4
          h-4
          shrink-0
          transition-transform
          duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
      />
    </a>
  );
}