import { Reveal } from "@/components/Reveal";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    src: "https://pub-f8b8497cd8584152a19aa731afec254d.r2.dev/depoimento-1.MP4",
    poster: "/images/gallery-2.jpg",
    name: "Camila R.",
    role: "Empresária · Vale do Paraíba",
  },
  {
    src: "https://pub-f8b8497cd8584152a19aa731afec254d.r2.dev/depoimento-2.MP4",
    poster: "/images/gallery-4.jpg",
    name: "Marina A.",
    role: "Consultora · São Paulo",
  },
  {
    src: "https://pub-f8b8497cd8584152a19aa731afec254d.r2.dev/depoimento-3.MP4",
    poster: "/images/gallery-5.jpg",
    name: "Juliana M.",
    role: "Psicóloga · Campinas",
  },
  {
    src: "https://pub-f8b8497cd8584152a19aa731afec254d.r2.dev/depoimento-4.MP4",
    poster: "/images/gallery-6.jpg",
    name: "Renata S.",
    role: "Empreendedora · Curitiba",
  },
  {
    src: "https://pub-f8b8497cd8584152a19aa731afec254d.r2.dev/depoimento-5.MP4",
    poster: "/images/gallery-7.jpg",
    name: "Fernanda L.",
    role: "Mentora · Rio de Janeiro",
  },
  {
    src: "https://pub-f8b8497cd8584152a19aa731afec254d.r2.dev/depoimento-6.MP4",
    poster: "/images/gallery-8.jpg",
    name: "Patrícia A.",
    role: "Arquiteta · Belo Horizonte",
  },
];

export function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    if (!scroller.current) return;

    const cardWidth =
      window.innerWidth < 768
        ? window.innerWidth * 0.82
        : 340;

    scroller.current.scrollBy({
      left: dir * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-40">
      <div className="mx-auto max-w-[1450px] px-6 md:px-10">

        {/* HEADER */}
        <div className="grid gap-10 md:grid-cols-12 md:items-end">

          {/* LEFT */}
          <div className="md:col-span-6">
            <Reveal>
              <span className="eyebrow text-wine">
                Depoimentos
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="serif-display mt-8 text-4xl leading-[1.02] text-foreground md:text-6xl">
                Quem viveu
                <br />
                o processo,
                <br />
                conta.
              </h2>
            </Reveal>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start justify-end md:col-span-4 md:col-start-8 md:items-end">

            <Reveal delay={0.2}>
              <p className="max-w-sm text-left font-light leading-relaxed text-foreground/70 md:text-right">
                Passe o mouse para visualizar o preview.
                Clique para ativar o som e assistir.
              </p>
            </Reveal>

          </div>
        </div>

        {/* CARROSSEL */}
        <div className="relative mt-16 md:mt-20">

          {/* BOTÃO ESQUERDO */}
          <button
            onClick={() => scroll(-1)}
            aria-label="Anterior"
            className="
              absolute left-0 top-1/2 z-30 hidden
              h-14 w-14 -translate-y-1/2 -translate-x-1/2
              items-center justify-center rounded-full

              border border-white/10
              bg-black/50
              backdrop-blur-xl

              transition-all duration-300

              hover:scale-110
              hover:border-wine/40
              hover:bg-black/70

              md:flex
            "
          >
            <ChevronLeft
              size={22}
              className="text-white"
            />
          </button>

          {/* BOTÃO DIREITO */}
          <button
            onClick={() => scroll(1)}
            aria-label="Próximo"
            className="
              absolute right-0 top-1/2 z-30 hidden
              h-14 w-14 -translate-y-1/2 translate-x-1/2
              items-center justify-center rounded-full

              border border-white/10
              bg-black/50
              backdrop-blur-xl

              transition-all duration-300

              hover:scale-110
              hover:border-wine/40
              hover:bg-black/70

              md:flex
            "
          >
            <ChevronRight
              size={22}
              className="text-white"
            />
          </button>

          {/* SCROLL */}
          <div
            ref={scroller}
            className="
              flex w-full gap-5 overflow-x-auto pb-4
              snap-x snap-mandatory
              scroll-smooth

              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {testimonials.map((item, index) => (
              <div
                key={item.name}
                className="
                  w-[82vw]
                  max-w-[280px]
                  shrink-0
                  snap-start

                  md:w-[320px]
                  md:max-w-[320px]
                "
              >
                <Reveal delay={index * 0.08}>
                  <VideoTestimonial
                    src={item.src}
                    poster={item.poster}
                    name={item.name}
                    role={item.role}
                  />
                </Reveal>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}