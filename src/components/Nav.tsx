import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { waLink } from "@/lib/site";

export function Nav() {
 const [menuOpen, setMenuOpen] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const closeMenus = () => {
  setMenuOpen(false);
  setMobileMenuOpen(false);
};

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="
fixed
top-0
left-0
right-0
z-50
bg-black/20
backdrop-blur-md
border-b
border-white/10
"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-6 md:py-8 flex items-center justify-between">

        {/* Logo */}
     <a href="#inicio" className="flex items-baseline gap-2 group cursor-pointer">
  <span className="font-serif text-xl md:text-2xl text-background tracking-tight">
    Jamilly Pacheco
  </span>

  <span className="hidden xl:inline text-[10px] tracking-[0.3em] uppercase text-background/60">
    Estratégia
  </span>
</a>

        <div className="flex items-center gap-4">

          {/* Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-background"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Dropdown Desktop */}
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
  onClick={closeMenus}
  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
>
  Sobre
</a>

<a
  href="#conexao-emocional"
  onClick={closeMenus}
  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
>
  Clareza Emocional
</a>

<a
  href="#quebra-de-padroes"
  onClick={closeMenus}
  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
>
  Quebra de Padrões
</a>

<a
  href="#transformacao"
  onClick={closeMenus}
  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
>
  Transformação
</a>

<a
  href="#especialista"
  onClick={closeMenus}
  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
>
  A Especialista
</a>

<a
  href="#processo"
  onClick={closeMenus}
  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
>
  Como Funciona
</a>

<a
  href="#o-que-recebe"
  onClick={closeMenus}
  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
>
  O Que Você Recebe
</a>

<a
  href="#paraquem"
  onClick={closeMenus}
  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
>
  Para Quem É
</a>

<a
  href="#investimento"
  onClick={closeMenus}
  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
>
  Investimento
</a>

<a
  href="#depoimentos"
  onClick={closeMenus}
  className="block rounded-xl px-4 py-3 text-sm text-background/85 hover:bg-white/5 hover:text-white transition"
>
  Depoimentos
</a>

<a
  href="#agendar"
  onClick={closeMenus}
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

      {/* Menu Mobile Aberto */}
      {mobileMenuOpen && (
        <div
          className="
            lg:hidden
            absolute
            top-full
            left-4
            right-4
            mt-2
            rounded-[24px]
            border border-white/10
            bg-black/95
            backdrop-blur-xl
            p-3
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          "
        >
       <a href="#sobre" onClick={closeMenus} className="block px-4 py-3 text-white/90">Sobre</a>

<a href="#conexao-emocional" onClick={closeMenus} className="block px-4 py-3 text-white/90">Clareza Emocional</a>

<a href="#quebra-de-padroes" onClick={closeMenus} className="block px-4 py-3 text-white/90">Quebra de Padrões</a>

<a href="#transformacao" onClick={closeMenus} className="block px-4 py-3 text-white/90">Transformação</a>

<a href="#especialista" onClick={closeMenus} className="block px-4 py-3 text-white/90">A Especialista</a>

<a href="#processo" onClick={closeMenus} className="block px-4 py-3 text-white/90">Como Funciona</a>

<a href="#o-que-recebe" onClick={closeMenus} className="block px-4 py-3 text-white/90">O Que Você Recebe</a>

<a href="#paraquem" onClick={closeMenus} className="block px-4 py-3 text-white/90">Para Quem É</a>

<a href="#investimento" onClick={closeMenus} className="block px-4 py-3 text-white/90">Investimento</a>

<a href="#depoimentos" onClick={closeMenus} className="block px-4 py-3 text-white/90">Depoimentos</a>

<a href="#agendar" onClick={closeMenus} className="block px-4 py-3 text-white/90">Agendar</a>
        </div>
      )}
    </motion.header>
  );
}