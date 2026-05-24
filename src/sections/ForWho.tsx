import { Reveal } from "@/components/Reveal";
import { Check, Minus } from "lucide-react";

const forYou = [
  "Você sente que está pronta para outra fase, mas falta clareza sobre como chegar lá.",
  "Você é uma mulher que decide com profundidade — e quer parar de adiar escolhas importantes.",
  "Você busca um processo individual, estratégico e humano, não mais um curso.",
  "Você está disposta a olhar para si com honestidade para enxergar o que realmente está travando.",
];

const notForYou = [
  "Você procura uma fórmula rápida ou uma resposta milagrosa.",
  "Você não está disposta a entrar em contato com o que precisa ser visto.",
  "Você espera ser convencida a mudar — em vez de escolher a partir de si.",
];

export function ForWho() {
  return (
    <section className="relative bg-background py-24 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-7">
          <Reveal>
            <span className="eyebrow text-wine">Para quem é</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="serif-display text-3xl md:text-5xl text-foreground mt-8 mb-12 leading-[1.1]">
              Pensado para mulheres que escolhem se ouvir antes de agir.
            </h2>
          </Reveal>

          <ul className="space-y-8">
            {forYou.map((t, i) => (
              <Reveal key={t} delay={0.1 + i * 0.05}>
                <li className="flex items-start gap-5 group">
                  <span className="mt-1 shrink-0 w-9 h-9 rounded-full border border-wine/30 flex items-center justify-center text-wine group-hover:bg-wine group-hover:text-background transition-colors duration-500">
                    <Check className="w-4 h-4" />
                  </span>
                  <p className="font-serif text-lg md:text-xl text-foreground/90 leading-snug max-w-xl">
                    {t}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5 md:border-l md:border-border/60 md:pl-12">
          <Reveal>
            <span className="eyebrow text-ink-soft">Para quem não é</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="serif-display text-2xl md:text-3xl text-ink-soft mt-8 mb-10 leading-[1.15] italic">
              Com transparência — esse processo não serve para todas.
            </h3>
          </Reveal>

          <ul className="space-y-6">
            {notForYou.map((t, i) => (
              <Reveal key={t} delay={0.1 + i * 0.05}>
                <li className="flex items-start gap-4 opacity-70">
                  <Minus className="w-4 h-4 mt-1.5 text-ink-soft shrink-0" />
                  <p className="text-sm md:text-base text-ink-soft font-light leading-relaxed">{t}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}