import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { CTAButton } from "@/components/CTAButton";
import { waLink } from "@/lib/site";

export function Hero() {
  return (
    <section
  id="inicio"
  className="relative min-h-screen overflow-hidden bg-black"
>
      <Nav />

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpeg"
          alt="Mulher em momento contemplativo de clareza interior"
          className="
            w-full
            h-full
            object-cover
            object-[68%_top]
            md:object-[center_15%]
            scale-105
          "
        />

        {/* Fumaça preta lateral */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />

        {/* Fumaça preta inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          md:items-end
          pt-[22vh]
          md:pt-0
          pb-8
          md:pb-24
        "
      >
        <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12 grid md:grid-cols-12 gap-8 md:gap-16">

          {/* LEFT */}
          <div className="md:col-span-7 lg:col-span-7 mt-36 md:mt-0">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-3 mb-5 md:mb-8"
            >
              <span className="w-12 h-px bg-accent" />

              <span className="eyebrow text-accent">
                Imersão que Transforma
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                serif-display
                text-background
                text-[1.85rem]
                sm:text-5xl
                md:text-6xl
                lg:text-[4.5rem]
                leading-[1.08]
                md:leading-[1.02]
                mb-6
                md:mb-8
              "
            >
              Clareza para enxergar o que está{" "}
              <em className="not-italic text-accent/95">
                travando sua vida,
              </em>{" "}
              suas decisões e seus próximos passos.
            </motion.h1>

            {/* Descrição */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="max-w-xl space-y-5 mb-8 md:mb-10"
            >
              <p
                className="
                  text-background/85
                  text-[1rem]
                  md:text-lg
                  leading-[1.8]
                  font-light
                "
              >
                Uma experiência individual e personalizada para mulheres que
                sentem que chegou a hora de organizar pensamentos, emoções,
                estratégias e criar direção para o próximo nível da sua vida.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <CTAButton
                href={waLink()}
                variant="primary"
                className="
                  w-full
                  justify-center
                  text-[10px]
                  md:text-sm
                  tracking-[0.12em]
                "
              >
                QUERO AGENDAR MINHA IMERSÃO
              </CTAButton>

              <p
                className="
                  mt-5
                  text-[10px]
                  md:text-[11px]
                  tracking-[0.12em]
                  md:tracking-[0.25em]
                  uppercase
                  text-background/55
                "
              >
                Atendimento presencial e online
                <span className="mx-2 text-accent">·</span>
                Processo individual
                <span className="mx-2 text-accent">·</span>
                Vagas limitadas
              </p>
            </motion.div>

          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.6 }}
            className="
              hidden
              md:flex
              md:col-span-5
              lg:col-span-5
              items-end
              justify-end
            "
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

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="
          hidden
          md:block
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          text-background/40
          text-[10px]
          tracking-[0.4em]
          uppercase
        "
      >
        scroll
      </motion.div>
    </section>
  );
}