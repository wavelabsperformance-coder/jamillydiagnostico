import { Reveal } from "@/components/Reveal";

const forYou = [
  "Deseja parar de adiar decisões importantes.",
  "Busca um processo individual, profundo e personalizado.",
  "Está disposto a olhar com honestidade para aquilo que precisa ser transformado.",
  "Busca clareza para seguir com mais consciência.",
];

const notForYou = [
  "Procura soluções milagrosas.",
  "Deseja apenas ouvir o que quer ouvir.",
  "Não está disposto a assumir responsabilidade pela própria transformação.",
];

export function ForWho() {
  return (
   <section
  id="paraquem"
  className="relative bg-background py-24 md:py-20"
>
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        
        {/* TOPO */}
        <div className="mb-16 max-w-4xl">
          <Reveal>
            <span className="eyebrow text-wine">
              Para quem é
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="serif-display mt-8 text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
              Para quem sente que existe uma próxima fase esperando para ser vivida.
            </h2>
          </Reveal>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* CARD 1 */}
          <Reveal
            className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              bg-[#260404]
              p-10
              md:p-12
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(38,4,4,0.25)]
            "
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
            </div>

            <div className="relative z-10">
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Para quem é
              </span>

              <h3 className="mt-6 mb-10 font-serif text-3xl text-white">
                O processo foi criado para quem...
              </h3>

              <div className="space-y-6">
                {forYou.map((item) => (
                  <div
                    key={item}
                    className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
                  >
                    <p className="text-lg leading-relaxed text-white/85">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* CARD 2 */}
          <Reveal
            delay={0.1}
            className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-[#260404]/10
              bg-white
              p-10
              md:p-12
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]
            "
          >
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-[0.3em] text-wine">
                Para quem não é
              </span>

              <h3 className="mt-6 mb-10 font-serif text-3xl text-foreground">
                Este processo não é para quem...
              </h3>

              <div className="space-y-6">
                {notForYou.map((item) => (
                  <div
                    key={item}
                    className="border-b border-border pb-6 last:border-0 last:pb-0"
                  >
                    <p className="text-lg leading-relaxed text-foreground/75">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}