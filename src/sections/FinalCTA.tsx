import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { waLink } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative bg-wine-deep text-background overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src="/images/cta.jpg" alt="" className="w-full h-full object-cover" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-wine-deep/60 to-wine-deep" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 md:px-12 py-28 md:py-44 text-center">
        <Reveal>
          <span className="eyebrow text-accent">Último convite</span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="serif-display text-2xl md:text-4xl text-background/90 mt-12 mb-6 italic font-light leading-[1.3] max-w-2xl mx-auto">
            Talvez você já tenha tentado resolver tudo sozinha por tempo demais.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="serif-display text-3xl md:text-5xl lg:text-6xl text-background mb-8 leading-[1.1] max-w-3xl mx-auto">
            O Diagnóstico Estratégico existe para organizar aquilo que hoje parece{" "}
            <em className="not-italic text-accent">embaralhado dentro de você</em>.
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="font-serif italic text-background/80 text-lg md:text-xl mb-14 max-w-xl mx-auto">
            Porque quando existe clareza, o próximo passo finalmente aparece.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="inline-block">
            <CTAButton href={waLink()} variant="light">
              Agendar meu diagnóstico
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}