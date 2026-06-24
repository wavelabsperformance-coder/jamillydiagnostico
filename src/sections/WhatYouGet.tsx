import { Reveal } from "@/components/Reveal";

const items = [
  {
    n: "I",
    t: "Clareza",
    d: "Sobre o que realmente está travando suas decisões.",
  },
  {
    n: "II",
    t: "Direcionamento",
    d: "Para sua próxima fase de forma mais consciente.",
  },
  {
    n: "III",
    t: "Organização",
    d: "Mental e emocional para enxergar prioridades.",
  },
  {
    n: "IV",
    t: "Plano de ação",
    d: "Personalizado para a sua realidade atual.",
  },
  {
    n: "V",
    t: "Segurança",
    d: "Para sustentar novas escolhas com mais confiança.",
  },
  {
    n: "VI",
    t: "Um novo caminho",
    d: "Mais consciente, claro e alinhado com quem você deseja ser.",
  },
];

export function WhatYouGet() {
  return (
    <section
  id="o-que-recebe"
  className="relative overflow-hidden bg-background py-24 md:py-20"
>
      {/* SOFT BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
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
                  Clareza para seguir em frente.
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
                  leading-[1.9]
                  tracking-[-0.01em]
                  text-foreground/80
                  md:text-[1.45rem]
                "
              >
                Ao final do processo, você não recebe apenas percepções.
                Você recebe clareza, direção e um novo olhar sobre aquilo
                que antes parecia confuso.
              </p>
            </Reveal>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal
              key={it.t}
              delay={i * 0.05}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                bg-[#260404]
                p-10
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(38,4,4,0.35)]
                active:-translate-y-1
                active:shadow-[0_20px_50px_rgba(38,4,4,0.35)]
                md:p-12
              "
            >
              {/* HOVER EFFECT */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                {/* TOP */}
                <div className="mb-6 flex items-baseline gap-5">
                  <span className="text-3xl font-semibold text-white/80">
                    {it.n}
                  </span>

                  <span className="h-px flex-1 bg-white/15 transition-colors duration-500 group-hover:bg-white/30" />
                </div>

                {/* TITLE */}
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.02em] text-white md:text-3xl">
                  {it.t}
                </h3>

                {/* DESCRIPTION */}
                <p className="max-w-[320px] leading-relaxed text-white/75">
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