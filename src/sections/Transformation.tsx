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

            <Reveal delay={0.1}>
              <p className="serif-display text-3xl md:text-5xl lg:text-6xl mt-8 mb-10 leading-[1.1]">
                Você não vai sair dessa experiência com{" "}
                <em className="not-italic text-accent">
                  mais dúvidas
                </em>.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="space-y-4 font-serif italic text-2xl md:text-3xl text-background/95">
                <p>Vai sair com clareza.</p>
                <p className="text-accent">Com direção.</p>

                <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-background/80 not-italic mt-8">
                  E com a confiança necessária para seguir um caminho
                  mais alinhado com a vida que deseja construir.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}