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
          src="/images/hero.jpg"
          alt="Mulher em momento contemplativo de clareza interior"
          className="
            w-full
            h-full
            object-cover
            object-[68%_top]
            md:object-[92%_15%]
            scale-100
          "
        />

        {/* CORREÇÃO: Gradiente lateral e mobile intensificado para dar contraste real sob as letras */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/05 via-black/20 lg:from-black/50 to-transparent" />

        {/* CORREÇÃO: Gradiente inferior que protege o bloco de textos no mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 lg:from-black/55 to-transparent" />
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
          <div className="md:col-span-7 lg:col-span-7 mt-36 md:mt-0 max-w-xl lg:max-w-[620px]">


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

              {/* CORREÇÃO: Linha mudada de preto para dourado visível */}
              <span className="w-12 h-px bg-[#C5A880]" />

              {/* CORREÇÃO: Texto do eyebrow mudado de preto para dourado visível */}
              <span className="eyebrow text-[#C5A880] tracking-[0.15em] uppercase text-xs font-medium">
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
                text-white
                text-[1.95rem]
                sm:text-5xl
                md:text-5xl
                lg:text-[3.8rem]
                leading-[1.12]
                md:leading-[1.05]
                mb-6
                md:mb-8
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]
              "
            >

              Clareza para enxergar o que está{" "}

              {/* CORREÇÃO: O trecho que estava em preto sumindo agora ganha um destaque champanhe suave */}
              <em className="not-italic text-[#EAD7C3] font-medium">
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
                  text-zinc-200
                  text-[1rem]
                  md:text-lg
                  leading-[1.7]
                  font-light
                  drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]
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
                analyticsEvent="whatsapp_click"
                className="
                  w-full
                  md:w-auto
                  md:px-10
                  justify-center
                  text-[11px]
                  md:text-sm
                  tracking-[0.12em]
                  font-semibold
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
                  text-zinc-400
                "
              >

                Atendimento presencial e online

                <span className="mx-2 text-[#8B5A2B]">
                  ·
                </span>

                Processo individual

                <span className="mx-2 text-[#8B5A2B]">
                  ·
                </span>

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

              <p className="font-serif italic text-white/80 text-sm max-w-[220px] text-right leading-snug">

                "Quando existe clareza, o próximo passo finalmente aparece."

              </p>


              <span className="text-[10px] tracking-[0.35em] uppercase text-[#C5A880]">

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
          text-white/40
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