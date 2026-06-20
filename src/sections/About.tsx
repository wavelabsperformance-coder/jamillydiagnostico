import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section className="relative bg-background py-24 md:py-30">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6">
          <Reveal>
            <span className="eyebrow text-wine">
              A Imersão que Transforma
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="serif-display mt-8 mb-10 text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
              O QUE É A IMERSÃO
              <br />
              QUE TRANSFORMA
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="max-w-xl space-y-6 text-base font-light leading-relaxed text-foreground/85 md:text-lg">
              <p>
                A{" "}
                <span className="font-medium text-wine">
                  Imersão que Transforma
                </span>{" "}
                é um encontro individual conduzido por{" "}
                <span className="text-[1.05em] font-semibold text-wine">
                  Jamilly Pacheco
                </span>.
              </p>

              {/* IMAGEM APENAS MOBILE */}
              <div className="md:hidden flex justify-center">
                <img
                  src="/images/process.jpeg"
                  alt="Imersão individual conduzida por Jamilly Pacheco"
                  loading="lazy"
                  className="h-auto max-w-full object-contain"
                />
              </div>

              <p className="text-ink-soft">
                Um{" "}
                <span className="font-medium text-foreground">
                  processo profundo de escuta, análise e direcionamento
                </span>{" "}
                criado para pessoas que desejam compreender com mais{" "}
                <span className="font-medium text-wine">
                  clareza
                </span>{" "}
                o momento que estão vivendo e construir sua{" "}
                <span className="font-medium text-foreground">
                  próxima fase
                </span>{" "}
                com consciência.
              </p>

              <p>
                Cada encontro é{" "}
                <span className="font-medium text-wine">
                  único
                </span>.
                <br />
                Cada processo é{" "}
                <span className="font-medium text-wine">
                  personalizado
                </span>.
              </p>

              <p className="text-ink-soft">
                Porque cada pessoa carrega uma história, desafios e necessidades
                diferentes.
              </p>

              <p>
                A análise pode envolver aspectos{" "}
                <span className="font-medium text-foreground">
                  emocionais
                </span>
                , mentais, comportamentais,{" "}
                <span className="font-medium text-foreground">
                  estratégicos
                </span>{" "}
                e profissionais, sempre respeitando aquilo que emerge durante o
                processo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid max-w-lg grid-cols-4 gap-4">
              {["Presença", "Escuta", "Percepção", "Direção"].map((item) => (
                <div
                  key={item}
                  className="border-t border-wine/30 pt-4 text-center"
                >
                  <span className="font-serif text-lg text-wine md:text-xl">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* IMAGEM APENAS DESKTOP */}
        <Reveal delay={0.2} className="hidden md:block md:col-span-6">
          <div className="relative flex justify-center">
            <img
              src="/images/process.jpeg"
              alt="Imersão individual conduzida por Jamilly Pacheco"
              loading="lazy"
              className="h-auto w-auto max-h-[900px] object-contain"
            />

            <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 border border-gold/40 md:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}