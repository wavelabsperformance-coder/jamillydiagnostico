import { Reveal } from "@/components/Reveal";

const signs = [
  "Confusão mental",
  "Insegurança nas decisões",
  "Sensação de estagnação",
  "Sobrecarga emocional",
  "Dificuldade para enxergar direção",
];

export function EmotionalConnection() {
  return (
    <section className="relative overflow-hidden bg-background py-10 lg:py-20">
      <div className="mx-auto max-w-[1450px] px-6 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_620px_1fr]">

          {/* LEFT CONTENT */}
          <div className="flex self-start justify-end">
            <Reveal>
              <div className="max-w-[360px] pt-10">

                {/* EYEBROW */}
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-wine" />

                  <span className="text-[11px] uppercase tracking-[0.32em] text-wine">
                    Conexão emocional
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="serif-display text-[3.1rem] leading-[0.95] tracking-[-0.045em] text-foreground md:text-[4.5rem]">
                  Você sente
                  <br />
                  que algo
                  <br />
                  precisa mudar…
                </h2>

                {/* SUBTITLE */}
                <p className="mt-8 serif-display text-[1.9rem] leading-[1.08] tracking-[-0.03em] text-foreground/58 md:text-[2.5rem]">
                  mas não consegue
                  <br />
                  enxergar
                  <br />
                  exatamente o quê.
                </p>
              </div>
            </Reveal>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <Reveal delay={0.1}>
              <div className="relative w-full">

                <div className="overflow-hidden rounded-[32px]">
                  <img
                    src="/images/emotional.jpg"
                    alt="Momento íntimo de reflexão"
                    loading="lazy"
                    className="h-[760px] w-full object-cover"
                  />
                </div>

                {/* SOFT OVERLAY */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-black/10 to-transparent" />

                {/* BORDER */}
                <div className="absolute inset-0 rounded-[32px] ring-1 ring-black/5" />
              </div>
            </Reveal>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex h-full items-end">
            <Reveal delay={0.2}>
              <div className="max-w-[360px] pb-8">

                {/* TOP RIGHT EMOTIONAL TEXT */}
                <div className="mb-14 border-l border-border pl-6">
                  <div className="space-y-4">

                    <p className="font-serif text-[1.25rem] italic text-foreground/72">
                      Você pensa.
                    </p>

                    <p className="font-serif text-[1.25rem] italic text-foreground/72">
                      Analisa.
                    </p>

                    <p className="font-serif text-[1.25rem] italic text-foreground/72">
                      Tenta encontrar respostas.
                    </p>

                    <p className="font-serif text-[1.25rem] italic text-foreground/72">
                      Busca soluções.
                    </p>

                  </div>
                </div>

                {/* SUPPORT TEXT */}
                <p className="max-w-[320px] text-[1.08rem] leading-[1.9] text-foreground/72">
                  Mas, mesmo assim, continua sentindo
                  que está presa no mesmo lugar.
                </p>

                {/* LIST */}
                <div className="mt-14 space-y-5">
                  {signs.map((sign, index) => (
                    <div
                      key={sign}
                      className="group flex items-center justify-between border-b border-border/70 pb-5 transition-all duration-300 hover:border-wine/40"
                    >
                      <div className="flex items-center gap-5">

                        <span className="text-[11px] tracking-[0.3em] text-wine">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-[1.08rem] text-foreground/92 transition-all duration-300 group-hover:translate-x-1">
                          {sign}
                        </span>

                      </div>

                      <span className="text-foreground/30 transition-all duration-300 group-hover:text-wine">
                        +
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}