import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { waLink } from "@/lib/site";

export function Investment() {
  return (
<section
  id="investimento"
  className="relative overflow-hidden bg-[#260404] py-32 md:py-30"
>
      {/* Glow de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4A0A0A]/40 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 md:px-12 text-center">
     

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

     

       <Reveal delay={0.25}>
  <div className="mt-16 max-w-3xl mx-auto">

    <p className="text-[#F8F2EB]/90 text-lg md:text-2xl leading-relaxed font-light">
      Uma experiência conduzida para quem busca
      <span className="text-[#C6A86A] font-medium"> clareza</span>,
      deseja romper ciclos de
      <span className="text-[#C6A86A] font-medium"> confusão e estagnação</span>
      e está pronto para tomar decisões com mais
      <span className="text-[#C6A86A] font-medium"> segurança e direção</span>.
    </p>

    <div className="mt-10 grid gap-4 md:grid-cols-3">

      <div className="rounded-2xl border border-[#C6A86A]/20 bg-white/[0.03] p-5">
        <p className="text-[#C6A86A] text-xs uppercase tracking-[0.25em]">
          Formato
        </p>
 
        <p className="mt-3 text-[#F8F2EB] text-lg">
          Presencial
        </p>
      </div>

      <div className="rounded-2xl border border-[#C6A86A]/20 bg-white/[0.03] p-5">
        <p className="text-[#C6A86A] text-xs uppercase tracking-[0.25em]">
          Processo
        </p>

        <p className="mt-3 text-[#F8F2EB] text-lg">
          100% Personalizado
        </p>
      </div>

      <div className="rounded-2xl border border-[#C6A86A]/20 bg-white/[0.03] p-5">
        <p className="text-[#C6A86A] text-xs uppercase tracking-[0.25em]">
          Entrega
        </p>

        <p className="mt-3 text-[#F8F2EB] text-lg">
          Plano de Continuidade
        </p>
      </div>

    </div>

  </div>
</Reveal>

        <Reveal delay={0.3}>
      <div className="mt-16">
  <CTAButton
    href={waLink()}
    variant="primary"
    analyticsEvent="whatsapp_click"
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