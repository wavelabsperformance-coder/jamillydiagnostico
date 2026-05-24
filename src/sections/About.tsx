import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section className="relative bg-background py-24 md:py-30">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6">
          <Reveal>
            <span className="eyebrow text-wine">O Processo</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="serif-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-8 mb-10 leading-[1.05]">
              O que é o Diagnóstico Estratégico
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-6 text-foreground/85 text-base md:text-lg font-light leading-relaxed max-w-lg">
              <p>
                O Diagnóstico Estratégico é um processo individual conduzido diretamente por{" "}
                <span className="text-wine font-medium">Jamilly Pacheco</span>.
              </p>
              <p className="text-ink-soft">
                Um acompanhamento estruturado para analisar sua situação de forma emocional, mental e estratégica.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {["Emocional", "Mental", "Estratégico"].map((p) => (
                <div key={p} className="text-center border-t border-wine/30 pt-4">
                  <span className="font-serif text-base md:text-lg text-wine">{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="md:col-span-6">
          <div className="relative aspect-[5/4] overflow-hidden">
            <img
              src="/images/process.jpg"
              alt="Ambiente sofisticado de consultoria estratégica"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/40 -z-0 hidden md:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}