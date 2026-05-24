import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { waLink } from "@/lib/site";

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute top-0 left-0 right-0 z-30"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-6 md:py-8 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-serif text-xl md:text-2xl text-background tracking-tight">
            Jamilly Pacheco
          </span>
          <span className="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-background/60">
            Estratégia
          </span>
        </Link>
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="text-xs tracking-[0.25em] uppercase text-background/90 hover:text-background border-b border-background/30 hover:border-background pb-1 transition-all"
        >
          Agendar
        </a>
      </div>
    </motion.header>
  );
}