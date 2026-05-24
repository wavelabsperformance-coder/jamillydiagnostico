import { Reveal } from "@/components/Reveal";

export function Transformation() {
  return (
    <section className="relative bg-foreground text-background py-28 md:py-25 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src="/images/cta.jpg" alt="" className="w-full h-full object-cover" aria-hidden />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 md:px-12 text-center">
        <Reveal>
          <span className="eyebrow text-accent">Transformação</span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="serif-display text-3xl md:text-5xl lg:text-[3.5rem] mt-12 mb-12 leading-[1.1]">
            Você não vai sair desse processo com <em className="not-italic text-accent">mais dúvidas</em>.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="space-y-4 font-serif italic text-2xl md:text-3xl text-background/95">
            <p>Você vai sair com clareza.</p>
            <p className="text-accent">Com direção.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}