import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { waLink } from "@/lib/site";

export function FinalCTA() {
  return (
    <section 
      id="agendar"
    className="relative bg-[#260404] text-background overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/cta.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#260404]/90" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 md:px-12 py-32 md:py-44 text-center">
        <Reveal>
          <span className="eyebrow text-accent">
            Último convite
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="serif-display text-3xl md:text-5xl lg:text-6xl mt-12 leading-[1.15] max-w-3xl mx-auto">
            Talvez você tenha passado tempo demais tentando resolver tudo sozinho.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 space-y-5 font-serif italic text-2xl md:text-3xl text-background/90">
            <p>Talvez tenha chegado o momento de parar.</p>
            <p>Respirar.</p>
            <p className="text-accent">Olhar para dentro.</p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-14 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-background/75 not-italic">
            E enxergar aquilo que precisa ser visto.
            <br />
            <br />
            Porque quando existe clareza, o próximo passo finalmente aparece.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-16 inline-block">
            <CTAButton href={waLink()} variant="primary">
              Agendar minha imersão
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}