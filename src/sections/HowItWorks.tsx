import { Reveal } from "@/components/Reveal";

export function HowItWorks() {
  return (
    <section
    id="processo"
     className="relative overflow-hidden bg-[#1D0B06] py-15 md:py-20"
     >

      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(120,55,20,0.18),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">

        <div className="max-w-3xl mb-20">
          <Reveal>
            <span className="eyebrow text-[#B67A43] tracking-[0.3em] uppercase">
              Como funciona
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="serif-display mt-8 text-4xl leading-[1.05] text-[#F4E9DF] md:text-5xl lg:text-6xl">
              Um processo criado para gerar clareza.
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 border border-[#3A2118]">

          {/* ETAPA 01 */}
          <Reveal className="relative border-r border-[#3A2118] bg-[#24100A]/70 p-10 backdrop-blur-sm md:p-14 lg:p-16">

            <div className="absolute top-10 right-10 select-none font-serif text-7xl leading-none text-white/50 md:text-8xl">
              01
            </div>

            <span className="eyebrow text-[#B67A43]">
              Etapa 01
            </span>

            <h3 className="mt-6 mb-6 font-serif text-2xl leading-tight text-[#F4E9DF] md:text-3xl lg:text-4xl">
              Imersão profunda
            </h3>

            {/* IMAGEM ETAPA 01 */}
            <div className="my-8 flex justify-center">
              <img
                src="/images/etapa1.jpeg"
                alt="Imersão profunda"
                loading="lazy"
                className="h-auto w-auto max-w-full object-contain"
              />
            </div>

            <div className="space-y-4 text-[#D8C9C1] font-light leading-relaxed max-w-md">
            

              <p>
                 Teremos encontros personalizados e seguro para investigar aquilo que está gerando confusão, estagnação, insegurança ou sobrecarga.
              </p>

              <p>
                Aqui começamos a enxergar aquilo que precisa ser visto.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#B67A43]">
              <span className="h-px w-8 bg-[#B67A43]" />
              Imersão individual
            </div>

          </Reveal>

          {/* ETAPA 02 */}
          <Reveal
            delay={0.15}
            className="relative bg-[#24100A]/70 p-10 backdrop-blur-sm md:p-14 lg:p-16"
          >

            <div className="absolute top-10 right-10 select-none font-serif text-7xl leading-none text-white/50 md:text-8xl">
              02
            </div>

            <span className="eyebrow text-[#B67A43]">
              Etapa 02
            </span>

            <h3 className="mt-6 mb-6 font-serif text-2xl leading-tight text-[#F4E9DF] md:text-3xl lg:text-4xl">
              Mapa de clareza
            </h3>

            {/* IMAGEM ETAPA 02 */}
            <div className="my-8 flex justify-center">
              <img
                src="/images/etapa2.jpeg"
                alt="Mapa de clareza"
                loading="lazy"
                className="h-auto w-auto max-w-full object-contain"
              />
            </div>

            <div className="space-y-4 text-[#D8C9C1] font-light leading-relaxed max-w-md">
          

              <p>
                Ao final da sua imersão, você recebe um material personalizado construído apartir de tudo que foi identificado durante o encontro. 

O seu plano de ação individual organiza percepções e prioridades com o propósito de te conectar ao que voce verdadeiramente deseja.
              </p>

            
            </div>

            <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#B67A43]">
              <span className="h-px w-8 bg-[#B67A43]" />
              Clareza e direção
            </div>

          </Reveal>

        </div>
      </div>
    </section>
  );
}