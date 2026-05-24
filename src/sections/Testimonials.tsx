import { Reveal } from "@/components/Reveal";
import { VideoTestimonial } from "@/components/VideoTestimonial";

export function Testimonials() {
  return (
    <section className="relative bg-background py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="md:col-span-6">
            <Reveal>
              <span className="eyebrow text-wine">Depoimentos</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="serif-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-8 leading-[1.05]">
                Quem viveu o processo, conta.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
            <Reveal delay={0.2}>
              <p className="text-foreground/70 font-light leading-relaxed max-w-sm">
                Cada relato carrega o silêncio do que mudou de lugar por dentro. Passe o mouse para um preview ou
                toque para abrir com som.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          <Reveal>
            <VideoTestimonial
              src="/videos/depoimento-1.mp4"
              poster="/images/gallery-2.jpg"
              name="Camila R."
              role="Empresária · Vale do Paraíba"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <VideoTestimonial
              src="/videos/depoimento-2.mp4"
              poster="/images/gallery-4.jpg"
              name="Marina A."
              role="Consultora · São Paulo"
            />
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-xs tracking-[0.25em] uppercase text-ink-soft/70 text-center">
            Para substituir os vídeos, basta trocar os arquivos em <code className="font-mono text-wine">/public/videos/</code>
          </p>
        </Reveal>
      </div>
    </section>
  );
}