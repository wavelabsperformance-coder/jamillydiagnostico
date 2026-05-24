import { Reveal } from "@/components/Reveal";

export function HowItWorks() {
  return (
    <section className="relative bg-[#1D0B06] py-15 md:py-20 overflow-hidden">
      
      {/* efeito leve igual ao print */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(120,55,20,0.18),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">

        <div className="max-w-3xl mb-20">
          <Reveal>
            <span className="eyebrow text-[#B67A43] tracking-[0.3em] uppercase">
              Como funciona
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="serif-display text-4xl md:text-5xl lg:text-6xl text-[#F4E9DF] mt-8 leading-[1.05]">
              Dois encontros que mudam a forma como você se enxerga.
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 border border-[#3A2118]">

          {/* CARD 1 */}
          <Reveal className="bg-[#24100A]/70 backdrop-blur-sm p-10 md:p-14 lg:p-16 relative border-r border-[#3A2118]">

            <div className="absolute top-10 right-10 font-serif text-7xl md:text-8xl text-white/50 leading-none select-none">
              01
            </div>

            <span className="eyebrow text-[#B67A43]">
              Primeiro encontro
            </span>

            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#F4E9DF] mt-6 mb-6 leading-tight">
              Escuta e análise profunda
            </h3>

            <p className="text-[#D8C9C1] leading-relaxed font-light max-w-md">
              Um espaço seguro para colocar em palavras o que está em movimento
              dentro de você. Identificamos juntas os bloqueios emocionais,
              mentais e estratégicos que estão sustentando a sensação de
              estagnação.
            </p>

            <div className="mt-10 flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#B67A43]">
              <span className="w-8 h-px bg-[#B67A43]" />
              Acolhimento estratégico
            </div>
          </Reveal>

          {/* CARD 2 */}
          <Reveal
            delay={0.15}
            className="bg-[#24100A]/70 backdrop-blur-sm p-10 md:p-14 lg:p-16 relative"
          >
            <div className="absolute top-10 right-10 font-serif text-7xl md:text-8xl text-white/50 leading-none select-none">
              02
            </div>

            <span className="eyebrow text-[#B67A43]">
              Segundo encontro
            </span>

            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#F4E9DF] mt-6 mb-6 leading-tight">
              Direcionamento estratégico
            </h3>

            <p className="text-[#D8C9C1] leading-relaxed font-light max-w-md">
              A entrega do mapa: aquilo que precisa ser visto, organizado e
              priorizado. Você sai com clareza sobre os próximos passos e um
              caminho inteligente para sua próxima fase.
            </p>

            <div className="mt-10 flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#B67A43]">
              <span className="w-8 h-px bg-[#B67A43]" />
              Plano e direção
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}