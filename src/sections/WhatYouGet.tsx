import { Reveal } from "@/components/Reveal";

const items = [
  {
    n: "I",
    t: "Clareza",
    d: "Sobre o que de fato está travando suas decisões.",
  },
  {
    n: "II",
    t: "Direcionamento",
    d: "Um caminho coerente para sua próxima fase.",
  },
  {
    n: "III",
    t: "Organização mental",
    d: "Aquilo que parecia embaralhado, em ordem.",
  },
  {
    n: "IV",
    t: "Plano de ação",
    d: "Próximos passos definidos com inteligência.",
  },
  {
    n: "V",
    t: "Segurança emocional",
    d: "Para sustentar suas escolhas com firmeza.",
  },
  {
    n: "VI",
    t: "Próximos passos",
    d: "Aquilo que finalmente aparece quando há clareza.",
  },
];

export function WhatYouGet() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-20">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#2A120D]/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">

        {/* TOP CONTENT */}
        <div className="mb-16 grid gap-14 md:mb-24 md:grid-cols-12 md:gap-24">

          {/* LEFT */}
          <div className="md:col-span-5">
            <Reveal>
              <span className="eyebrow text-wine">
                O que você recebe
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="serif-display mt-8 text-4xl leading-[1.02] tracking-[-0.04em] text-foreground md:text-5xl lg:text-6xl">
                Mais do que respostas.
                <br />

                <em className="not-italic text-wine">
                  Direção.
                </em>
              </h2>
            </Reveal>
          </div>

          {/* RIGHT */}
          <div className="flex items-center md:col-span-6 md:col-start-7">
            <Reveal delay={0.2}>
              <p
                className="
                  max-w-[620px]
                  text-lg
                  font-light
                  leading-[1.9]
                  tracking-[-0.01em]
                  text-foreground/80
                  md:text-[1.45rem]
                "
              >
                Cada encontro foi pensado para entregar algo que
                não cabe em um curso, em um conteúdo ou em uma
                resposta rápida da internet — clareza estratégica
                feita para a sua vida.
              </p>
            </Reveal>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-px bg-[#2A120D]/10 md:grid-cols-2 lg:grid-cols-3">

          {items.map((it, i) => (
            <Reveal
              key={it.t}
              delay={i * 0.05}
              className="
                group
                relative
                overflow-hidden
                bg-gradient-to-b
                from-[#2A120D]/[0.05]
                to-[#1A0B08]/[0.025]
                p-10
                backdrop-blur-sm
                transition-all
                duration-500
                hover:from-[#2A120D]/[0.08]
                hover:to-[#1A0B08]/[0.05]
                md:p-12
              "
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#6E3B2D]/10 blur-3xl" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10">

                {/* TOP */}
                <div className="mb-6 flex items-baseline gap-5">

                  <span className="font-serif text-3xl text-gold">
                    {it.n}
                  </span>

                  <span className="h-px flex-1 bg-border transition-colors duration-500 group-hover:bg-wine" />
                </div>

                {/* TITLE */}
                <h3 className="mb-4 font-serif text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
                  {it.t}
                </h3>

                {/* DESCRIPTION */}
                <p className="max-w-[320px] font-light leading-relaxed text-foreground/70">
                  {it.d}
                </p>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}