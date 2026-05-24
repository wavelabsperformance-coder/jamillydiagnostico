import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accepted = localStorage.getItem("jp-cookies");
    if (!accepted) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("jp-cookies", "accepted");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:bottom-8 md:max-w-md z-40"
        >
          <div className="bg-foreground text-background p-6 md:p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] backdrop-blur">
            <p className="font-serif text-lg leading-snug mb-2">Sobre os cookies</p>
            <p className="text-xs leading-relaxed text-background/75 mb-5">
              Utilizamos cookies para oferecer uma experiência refinada e analisar o desempenho do site, em conformidade com a LGPD. Veja nossa{" "}
              <Link to="/politica-de-cookies" className="underline underline-offset-4 hover:text-accent">
                política de cookies
              </Link>
              .
            </p>
            <button
              onClick={accept}
              className="text-[11px] tracking-[0.3em] uppercase border border-background/40 hover:bg-background hover:text-foreground transition-colors px-5 py-2.5"
            >
              Aceitar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}