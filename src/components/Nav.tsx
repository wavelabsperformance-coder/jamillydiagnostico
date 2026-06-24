import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { waLink } from "@/lib/site";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-6 md:py-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-serif text-xl md:text-2xl text-background tracking-tight">
            Jamilly Pacheco
          </span>

          <span className="hidden xl:inline text-[10px] tracking-[0.3em] uppercase text-background/60">
            Estratégia
          </span>
        </Link>

        {/* Área Direita */}
        <div className="flex items-center gap-6">

          {/* Dropdown */}
          <div className="relative hidden lg:block">

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                flex items-center gap-2
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-background/90
                hover:text-background
                transition-all
              "
            >
              Explorar

              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${
                  menuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {menuOpen && (
              <div
                className="
                  absolute
                  right-0
                  mt-4
                  w-[280px]

                  rounded-[24px]
                  border border-white/10

                  bg-black/85
                  backdrop-blur-xl

                  p-3

                  shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                "
              >
                <a
                  href="#sobre"
                  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
                >
                  Sobre
                </a>

                <a
                  href="#conexao-emocional"
                  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
                >
                  Clareza Emocional
                </a>

                <a
                  href="#quebra-de-padroes"
                  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
                >
                  Quebra de Padrões
                </a>

                <a
                  href="#transformacao"
                  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
                >
                  Transformação
                </a>

                <a
                  href="#como-funciona"
                  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
                >
                  Como Funciona
                </a>

                <a
                  href="#o-que-recebe"
                  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
                >
                  O Que Você Recebe
                </a>

                <a
                  href="#para-quem-e"
                  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
                >
                  Para Quem É
                </a>

                <a
                  href="#investimento"
                  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
                >
                  Investimento
                </a>

                <a
                  href="#depoimentos"
                  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
                >
                  Depoimentos
                </a>

                <a
                  href="#agendar"
                  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
                >
                  Agendar
                </a>
              </div>
            )}
          </div>

          {/* Botão WhatsApp */}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="
              text-xs
              tracking-[0.25em]
              uppercase
              text-background/90
              hover:text-background
              border-b
              border-background/30
              hover:border-background
              pb-1
              transition-all
            "
          >
            Agendar
          </a>

        </div>
      </div>
    </motion.header>
  );
}