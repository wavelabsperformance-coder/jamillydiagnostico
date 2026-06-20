import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { waLink } from "@/lib/site";

export function Investment() {
  return (
    <section className="relative overflow-hidden bg-[#260404] py-32 md:py-40">
      {/* Glow de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4A0A0A]/40 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 md:px-12 text-center">
        <Reveal>
          <span className="eyebrow text-[#C6A86A]">
            Investimento
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="serif-display mt-10 text-[#F8F2EB] text-3xl md:text-5xl lg:text-6xl leading-[1.1]">
            Imersão que transforma
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-[#F8F2EB]/70 uppercase tracking-[0.3em] text-xs md:text-sm">
            Atendimento individual conduzido por Jamilly Pacheco
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-20">
            <div className="mx-auto h-px w-24 bg-[#C6A86A]/60" />

            <div className="mt-10 flex items-start justify-center">
              <span className="font-serif text-[#F8F2EB]/80 text-3xl md:text-4xl mt-5 mr-2">
                R$
              </span>

              <span className="font-serif text-[#F8F2EB] text-[7rem] md:text-[10rem] leading-none">
                600
              </span>
            </div>

            <div className="mx-auto mt-10 h-px w-24 bg-[#C6A86A]/60" />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-16 space-y-4 text-[#F8F2EB]/85 text-lg md:text-xl">
            <p>Até 2h30 de atendimento individual</p>
            <p>Presencial ou online</p>
            <p>Processo personalizado</p>
            <p>Material de continuidade entregue após o encontro</p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
      <div className="mt-16">
  <CTAButton
    href={waLink()}
    variant="primary"
    className="bg-[#F8F2EB] text-[#260404] hover:bg-[#260404] hover:text-[#F8F2EB] transition-all duration-300"
  >
    Agendar minha imersão
  </CTAButton>
</div>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="mt-8 text-[#C6A86A] text-xs uppercase tracking-[0.4em]">
            Vagas limitadas
          </p>
        </Reveal>
      </div>
    </section>
  );
}