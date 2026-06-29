import { Reveal } from "@/components/Reveal";

export function Transformation() {
  return (
    <section
      id="transformacao"
      className="relative bg-foreground text-background py-28 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/cta.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-center">
          
          <Reveal>
            <div className="mx-auto lg:mx-0">
              <img
                src="/images/transformacao.jpeg"
                alt="Jamilly Pacheco"
                className="w-full max-w-[420px] h-auto object-contain"
              />
            </div>
          </Reveal>

          <div className="text-center lg:text-left">
            <Reveal>
              <span className="eyebrow text-accent">
                Transformação
              </span>
            </Reveal>

            {/* TEXTO UNIFICADO E COM DESTAQUES EM DOURADO (text-accent) */}
            <Reveal delay={0.1}>
              <p className="serif-display text-3xl md:text-5xl lg:text-[3.25rem] mt-8 leading-[1.2] max-w-4xl">
                Você não vai sair dessa experiência com mais dúvidas, e sim com{" "}
                <span className="text-accent">clareza</span>,{" "}
                <span className="text-accent">direção</span> e com a{" "}
                <span className="text-accent">confiança</span> necessária para seguir um
                caminho mais alinhado com a vida que deseja construir.
              </p>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}