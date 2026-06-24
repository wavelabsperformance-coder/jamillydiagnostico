import { Reveal } from "@/components/Reveal";

export function Authority() {
  return (
    <section
  id="especialista"
  className="relative overflow-hidden bg-wine-deep py-24 text-background md:py-20"
>
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 md:grid-cols-12 md:gap-20 md:px-12">

        {/* FOTO */}
        <Reveal className="md:col-span-5 lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="/images/jamilly.jpeg"
              alt="Retrato editorial de Jamilly Pacheco"
              loading="lazy"
              className="h-full w-full object-cover"
            />

            <div className="absolute -bottom-5 -right-5 hidden h-40 w-40 border border-accent/40 md:block" />
          </div>
        </Reveal>

        {/* CONTEÚDO */}
        <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">

          <Reveal>
            <span className="eyebrow text-accent">
              Quem conduz
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="serif-display mt-8 mb-2 text-4xl leading-[1.05] text-background md:text-5xl lg:text-[3.8rem]">
              Jamilly Pacheco
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mb-10 font-serif text-lg italic text-accent/90 md:text-xl">
              Empreendedora, estrategista e terapeuta integrativa.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mb-8 max-w-xl space-y-6 text-base font-light leading-relaxed text-background/85 md:text-lg">
              
              <p>
                Jamilly Pacheco construiu sua trajetória unindo áreas que raramente caminham juntas:{" "}
                <span className="text-accent">
                  comportamento humano
                </span>
                ,{" "}
                <span className="text-accent">
                  empreendedorismo
                </span>
                ,{" "}
                <span className="text-accent">
                  vendas
                </span>
                ,{" "}
                <span className="text-accent">
                  posicionamento
                </span>{" "}
                e{" "}
                <span className="text-accent">
                  estratégia
                </span>.
              </p>

              <p>
                Ao longo dos anos, acompanhou centenas de pessoas em processos
                individuais de transformação, desenvolvendo uma visão que integra{" "}
                <span className="text-accent">
                  mente, emoção, identidade e direção
                </span>.
              </p>

              <p>
                Hoje lidera a{" "}
                <span className="text-accent">
                  Empower Company
                </span>{" "}
                e conduz processos voltados para quem busca compreender com mais
                clareza o momento que está vivendo e construir sua próxima fase
                de forma consciente.
              </p>

              <p>
                Porque muitas vezes o que impede uma pessoa de avançar não é a
                falta de capacidade.
              </p>

              <p className="font-medium text-background">
                É a dificuldade de enxergar aquilo que realmente precisa ser visto.
              </p>

            </div>
          </Reveal>

          {/* INDICADORES */}
          <Reveal delay={0.3}>
            <div className="grid max-w-md grid-cols-3 gap-8 border-t border-background/15 pt-10">

              <div>
                <div className="font-serif text-3xl text-accent md:text-4xl">
                  +10
                </div>

                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-background/60">
                  Anos de experiência
                </div>
              </div>

              <div>
                <div className="font-serif text-3xl text-accent md:text-4xl">
                  1:1
                </div>

                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-background/60">
                  Processo individual
                </div>
              </div>

              <div>
                <div className="font-serif text-3xl text-accent md:text-4xl">
                  +300
                </div>

                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-background/60">
                  Pessoas impactadas
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}