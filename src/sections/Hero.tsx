import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { CTAButton } from "@/components/CTAButton";
import { waLink } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-wine-deep">
      <Nav />

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Mulher em momento contemplativo de clareza interior"
          className="w-full h-full object-cover object-[center_15%] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wine-deep/85 via-wine-deep/55 to-wine-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-deep via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-end pb-16 md:pb-24">
        <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12 grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-7 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-px bg-accent" />
              <span className="eyebrow text-accent">Diagnóstico Estratégico</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="serif-display text-background text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.02] mb-8"
            >
              Existe um motivo pelo qual <em className="not-italic text-accent/95">você sente</em> que está parada,
              mesmo tentando tanto avançar.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="max-w-xl space-y-5 mb-10"
            >
              <p className="text-background/85 text-base md:text-lg leading-relaxed font-light">
                E o problema talvez não seja falta de capacidade, esforço ou dedicação.
              </p>
              <p className="text-background/70 text-sm md:text-base leading-relaxed font-light">
                Talvez seja falta de clareza sobre o que realmente está travando sua vida, suas decisões e seus próximos passos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <CTAButton href={waLink()} variant="light">
                Quero agendar meu diagnóstico
              </CTAButton>
              <p className="mt-5 text-[11px] tracking-[0.25em] uppercase text-background/55">
                Atendimento individual <span className="mx-2 text-accent">·</span> Processo personalizado{" "}
                <span className="mx-2 text-accent">·</span> Vagas limitadas
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.6 }}
            className="hidden md:flex md:col-span-5 lg:col-span-5 items-end justify-end"
          >
            <div className="flex flex-col items-end gap-3">
              <p className="font-serif italic text-background/70 text-sm max-w-[220px] text-right leading-snug">
                "Quando existe clareza, o próximo passo finalmente aparece."
              </p>
              <span className="text-[10px] tracking-[0.35em] uppercase text-accent">
                — Jamilly Pacheco
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* subtle scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-background/40 text-[10px] tracking-[0.4em] uppercase"
      >
        scroll
      </motion.div>
    </section>
  );
}