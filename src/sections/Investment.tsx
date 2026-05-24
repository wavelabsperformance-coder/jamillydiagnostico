import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { waLink } from "@/lib/site";

export function Investment() {
  return (
    <section className="relative bg-surface py-24 md:py-20">
      <div className="mx-auto max-w-3xl px-6 md:px-12 text-center">
        <Reveal>
          <span className="eyebrow text-wine">Investimento</span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="serif-display text-3xl md:text-4xl text-foreground mt-8 mb-16 leading-[1.15]">
            Diagnóstico Estratégico Individual
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative inline-flex flex-col items-center bg-background px-14 py-16 md:px-24 md:py-20 shadow-[var(--shadow-editorial)]">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface text-[10px] tracking-[0.4em] uppercase text-gold">
              Vagas limitadas
            </span>
            <span className="font-serif italic text-ink-soft text-sm tracking-wide mb-3">
              Atendimento individual com Jamilly Pacheco
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-foreground text-2xl">R$</span>
              <span className="font-serif text-foreground text-7xl md:text-8xl leading-none">597</span>
            </div>
            <div className="mt-8 w-16 h-px bg-gold" />
            <p className="mt-6 text-sm text-ink-soft font-light max-w-xs">
              Dois encontros individuais. Processo personalizado. Atendimento conduzido diretamente por Jamilly.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 inline-block">
            <CTAButton href={waLink()} variant="primary">
              Quero garantir minha vaga
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}