import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Lightbox } from "@/components/Lightbox";

const images = [
  { src: "/images/gallery-1.jpg", alt: "Imagem 1" },
  { src: "/images/gallery-2.jpg", alt: "Imagem 2" },
  { src: "/images/gallery-3.jpg", alt: "Imagem 3" },
  { src: "/images/gallery-4.jpg", alt: "Imagem 4" },
  { src: "/images/gallery-5.jpg", alt: "Imagem 5" },
  { src: "/images/gallery-6.jpg", alt: "Imagem 6" },
  { src: "/images/gallery-7.jpg", alt: "Imagem 7" },
  { src: "/images/gallery-8.jpg", alt: "Imagem 8" },
  { src: "/images/gallery-9.jpg", alt: "Imagem 9" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-surface py-24 md:py-40">

      <div className="mx-auto max-w-[1400px] px-6 md:px-12">

        {/* HEADER */}
        <div className="mb-16 grid gap-10 md:mb-20 md:grid-cols-12">

          <div className="md:col-span-7">
            <Reveal>
              <span className="eyebrow text-wine">
                Bastidores
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="serif-display mt-8 text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
                Atmosfera. Presença. Intenção.
              </h2>
            </Reveal>
          </div>

          <div className="flex items-end md:col-span-5">
            <Reveal delay={0.2}>
              <p className="max-w-sm font-light leading-relaxed text-foreground/70">
                Um recorte visual do território onde o Diagnóstico acontece —
                clique em qualquer imagem para ampliar.
              </p>
            </Reveal>
          </div>

        </div>

        {/* GALLERY */}
        <div
          className="
            columns-1
            sm:columns-2
            lg:columns-3
            gap-[8px]
          "
        >

          {images.map((image, i) => (
            <Reveal
              key={i}
              delay={i * 0.04}
              className="mb-[8px] break-inside-avoid"
            >
              <button
                onClick={() => setActive(i)}
                className="
                  group
                  relative
                  block
                  w-full
                  overflow-hidden
                  rounded-[4px]
                  bg-[#1A0B08]/5
                "
              >

                {/* IMAGE */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="
                    block
                    w-full
                    h-auto
                    object-contain
                    transition-transform
                    duration-[1400ms]
                    ease-out
                    group-hover:scale-[1.015]
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-all
                    duration-700
                    group-hover:bg-black/10
                  "
                />

              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        images={images}
        index={active}
        onClose={() => setActive(null)}
        onPrev={() =>
          setActive((i) =>
            i === null
              ? null
              : (i - 1 + images.length) % images.length
          )
        }
        onNext={() =>
          setActive((i) =>
            i === null
              ? null
              : (i + 1) % images.length
          )
        }
      />
    </section>
  );
}