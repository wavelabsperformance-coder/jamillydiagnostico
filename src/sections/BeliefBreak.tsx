import { Reveal } from "@/components/Reveal";

export function BeliefBreak() {
  return (
    <section className="relative bg-foreground text-background py-20 md:py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-wine blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 md:px-12 text-center">
        <Reveal>
          <span className="eyebrow text-accent">Quebra de crença</span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="serif-display text-3xl md:text-5xl lg:text-6xl mt-10 mb-12 leading-[1.1]">
            Você não precisa de <em className="not-italic text-accent">mais conteúdo</em>.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-background/75 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto mb-10">
            Você não precisa consumir mais vídeos, cursos ou informações aleatórias tentando encontrar respostas sozinha.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex items-center justify-center gap-6">
            <span className="w-12 h-px bg-accent" />
            <p className="font-serif italic text-xl md:text-2xl text-background">
              O que você precisa é de um direcionamento estratégico.
            </p>
            <span className="w-12 h-px bg-accent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}