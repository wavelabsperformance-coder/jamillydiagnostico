import { Reveal } from "@/components/Reveal";

export function BeliefBreak() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-background md:py-20">
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-wine blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
        <Reveal>
          <span className="eyebrow text-accent">
            Quebra de crença
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="serif-display mt-10 mb-12 text-3xl leading-[1.1] md:text-5xl lg:text-6xl">
            VOCÊ NÃO PRECISA DE{" "}
            <em className="not-italic text-accent">
              MAIS CONTEÚDO.
            </em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-light text-background/75 md:text-xl">
            Você não precisa de mais um vídeo, mais um curso,
            mais uma estratégia ou mais uma opinião.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex items-center justify-center gap-6">
            <span className="h-px w-12 bg-accent" />

            <p className="max-w-2xl font-serif text-xl italic text-background md:text-2xl">
              O que você precisa é de um espaço seguro para enxergar aquilo que ainda está oculto.
            </p>

            <span className="h-px w-12 bg-accent" />
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-background/65 md:text-lg">
            Porque quando existe clareza, as respostas começam a aparecer naturalmente.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <img
            src="/images/notbook.jpeg"
            alt="Clareza emocional"
            className="mx-auto mt-14 max-h-[750px] w-auto max-w-full object-contain"
          />
        </Reveal>
      </div>
    </section>
  );
}