import { Reveal } from "@/components/Reveal";

export function Authority() {
  return (
    <section className="relative bg-wine-deep text-background py-24 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <Reveal className="md:col-span-5 lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="/images/jamilly.jpg"
              alt="Retrato editorial de Jamilly Pacheco"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-5 -right-5 w-40 h-40 border border-accent/40 hidden md:block" />
          </div>
        </Reveal>

        <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
          <Reveal>
            <span className="eyebrow text-accent">Quem conduz</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="serif-display text-4xl md:text-5xl lg:text-[3.8rem] text-background mt-8 mb-2 leading-[1.05]">
              Jamilly Pacheco
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-serif italic text-accent/90 text-lg md:text-xl mb-10">
              Estrategista, especialista em posicionamento e terapeuta integrativa.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-background/85 text-base md:text-lg leading-relaxed font-light max-w-xl mb-8">
              Um trabalho construído na interseção entre <span className="text-accent">posicionamento</span>,{" "}
              <span className="text-accent">negócios</span>, <span className="text-accent">vendas</span> e{" "}
              <span className="text-accent">terapias integrativas</span> — porque clareza estratégica não nasce só da
              mente. Nasce de quem você está se tornando.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-background/15 max-w-md">
              <div>
                <div className="font-serif text-3xl md:text-4xl text-accent">+10</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-background/60 mt-2">Anos de estudo</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl text-accent">1:1</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-background/60 mt-2">Atendimento</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl text-accent">+300</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-background/60 mt-2">Vidas tocadas</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}