import { Reveal } from "@/components/Reveal";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    src: "https://pub-f8b8497cd8584152a19aa731afec254d.r2.dev/depoimento-1.MP4",
    poster: "",
    name: "Iasmin Dantas",
    role: "Empresária na área da fisioterapia",
  },
  {
    src: "https://pub-f8b8497cd8584152a19aa731afec254d.r2.dev/depoimento-2.MP4",
    poster: "/images/gallery-4.jpg",
    name: "Marina A.",
    role: "Consultora · São Paulo",
  },
  {
    src: "https://pub-f8b8497cd8584152a19aa731afec254d.r2.dev/depoimento-3.MP4",
    poster: "",
    name: "Comunidade empower",
    role: "Club",
  },
  {
    src: "https://pub-f8b8497cd8584152a19aa731afec254d.r2.dev/depoimento-4.MP4",
    poster: "",
    name: "Comunidade empower",
    role: "Club",
  },
  {
    src: "https://pub-f8b8497cd8584152a19aa731afec254d.r2.dev/depoimento-5.MP4",
    poster: "",
    name: "Fernanda L.",
    role: "Mentora · Rio de Janeiro",
  },
  {
    src: "https://pub-f8b8497cd8584152a19aa731afec254d.r2.dev/depoimento-6.MP4",
    poster: "",
    name: "Débora Amaral.",
    role: "Arquiteta · Belo Horizonte",
  },
];

export function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    if (!scroller.current) return;

    const cardWidth =
      window.innerWidth < 768
        ? window.innerWidth * 0.9
        : 340;

    scroller.current.scrollBy({
      left: dir * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
  id="depoimentos"
  className="relative overflow-hidden bg-background py-20 md:py-40"
>
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">

        {/* HEADER */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">

          {/* LEFT */}
          <div className="md:col-span-6">
            <Reveal>
              <span className="eyebrow text-wine">
                Depoimentos
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="serif-display mt-6 text-[2.7rem] leading-[0.95] text-foreground md:mt-8 md:text-6xl">
                Quem viveu
                <br />
                o processo,
                <br />
                conta.
              </h2>
            </Reveal>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-4 md:col-start-8 md:flex md:justify-end">
            <Reveal delay={0.2}>
              <p className="max-w-sm text-[0.98rem] leading-relaxed text-foreground/70 md:text-right">
                Passe o mouse para visualizar o preview.
                Clique para ativar o som e assistir.
              </p>
            </Reveal>
          </div>

        </div>

        {/* CARROSSEL */}
        <div className="relative mt-14 md:mt-20">

          {/* ESQUERDA */}
          <button
            onClick={() => scroll(-1)}
            aria-label="Anterior"
            className="
              absolute left-2 top-1/2 z-30
              flex h-11 w-11 -translate-y-1/2
              items-center justify-center rounded-full

              border border-white/10
              bg-black/50
              backdrop-blur-xl

              transition-all duration-300

              hover:scale-110
              hover:border-wine/40
              hover:bg-black/70

              md:left-0 md:h-14 md:w-14 md:-translate-x-1/2
            "
          >
            <ChevronLeft
              size={20}
              className="text-white"
            />
          </button>

          {/* DIREITA */}
          <button
            onClick={() => scroll(1)}
            aria-label="Próximo"
            className="
              absolute right-2 top-1/2 z-30
              flex h-11 w-11 -translate-y-1/2
              items-center justify-center rounded-full

              border border-white/10
              bg-black/50
              backdrop-blur-xl

              transition-all duration-300

              hover:scale-110
              hover:border-wine/40
              hover:bg-black/70

              md:right-0 md:h-14 md:w-14 md:translate-x-1/2
            "
          >
            <ChevronRight
              size={20}
              className="text-white"
            />
          </button>

          {/* LISTA */}
          <div
            ref={scroller}
            className="
              flex gap-4
              overflow-x-auto
              overflow-y-hidden
              pb-4

              snap-x
              snap-mandatory

              scroll-smooth

              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden

              md:gap-6
            "
          >
            {testimonials.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="
                  w-[85vw]
                  max-w-[320px]
                  shrink-0
                  snap-center

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