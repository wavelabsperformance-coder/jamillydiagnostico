import { Reveal } from "@/components/Reveal";
import { useEffect, useRef, useState } from "react";

const signs = [
  "Confusão mental",
  "Insegurança nas decisões",
  "Sensação de estagnação",
  "Sobrecarga emocional",
  "Dificuldade para enxergar direção",
];

export function EmotionalConnection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeVideo, setActiveVideo] = useState(false);

  // FRAME INICIAL
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0.1;
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-10 lg:py-20">
      <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
       <div className="grid items-center gap-12 text-center lg:text-left lg:grid-cols-[1fr_620px_1fr]">

          {/* LEFT CONTENT */}
          <div className="flex self-start justify-center lg:justify-end">
            <Reveal>
              <div className="max-w-[360px] pt-4 md:pt-10 text-center lg:text-left">

                {/* EYEBROW */}
               <div className="mb-8 flex items-center justify-center gap-4 lg:justify-start">
                  <span className="h-px w-12 bg-wine" />

                  <span className="text-[11px] uppercase tracking-[0.32em] text-wine">
                    Conexão emocional
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="serif-display text-[2.7rem] leading-[0.92] tracking-[-0.045em] text-foreground md:text-[4.5rem]">
  Você sente
  <br />
  que algo
  <br />
  precisa mudar.
</h2>

<p className="mt-7 serif-display text-[1.55rem] leading-[1.08] tracking-[-0.03em] text-foreground/58 md:text-[2.5rem]">
  Mas ainda não
  <br />
  consegue enxergar
  <br />
  exatamente o quê.
</p>

              </div>
            </Reveal>
          </div>

          {/* CENTER VIDEO */}
          <div className="flex justify-center">
            <Reveal delay={0.1}>
              <div className="group relative w-full">

                <div className="relative isolate overflow-hidden rounded-[2rem] bg-black shadow-2xl shadow-black/10">

                  <video
                    ref={videoRef}
                    src="https://pub-f8b8497cd8584152a19aa731afec254d.r2.dev/hero.MP4"
                    playsInline
                    preload="metadata"
                    controls
                    muted={!activeVideo}
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate nofullscreen"
                    style={{
                      WebkitAppearance: "none",
                    }}
                    className={`
                      relative z-10
                      h-[520px]
                      w-full
                      object-cover
                      cursor-pointer

                      transition-transform
                      duration-[1400ms]
                      ease-out
                      group-hover:scale-[1.03]

                      md:h-[760px]

                      [&::-webkit-media-controls-overlay-play-button]:hidden
                      [&::-webkit-media-controls-start-playback-button]:hidden
                      [&::-webkit-media-controls-play-button]:block
                      [&::-webkit-media-controls-panel]:flex

                      ${
                        !activeVideo
                          ? "[&::-webkit-media-controls]:opacity-0"
                          : "[&::-webkit-media-controls]:opacity-100"
                      }
                    `}

                    // PREVIEW DESKTOP
                    onMouseEnter={async (e) => {
                      if (window.innerWidth < 768) return;

                      const video = e.currentTarget;

                      if (!activeVideo) {
                        try {
                          video.muted = true;
                          await video.play();
                        } catch {}
                      }
                    }}

                    onMouseLeave={(e) => {
                      if (window.innerWidth < 768) return;

                      const video = e.currentTarget;

                      if (!activeVideo) {
                        video.pause();
                        video.currentTime = 0.1;
                      }
                    }}

                    // PLAYER REAL
                    onClick={(e) => {
                      const video = e.currentTarget;

                      setActiveVideo(true);

                      video.muted = false;
                    }}
                  />

                  {/* OVERLAY */}
                  {!activeVideo && (
                    <>
                      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/45 via-black/5 to-transparent transition-all duration-700 group-hover:from-black/20 group-hover:via-transparent" />

                      {/* TEXTO SOBRE VIDEO */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 p-6 md:p-8">

                       <div className="max-w-[300px] text-center md:text-left">
                         <p className="font-serif text-[1.25rem] italic leading-snug text-white md:text-[1.5rem]">
  “Talvez não seja falta de informação.
  Talvez seja excesso de ruído.”
</p>

                          <div className="mt-5 flex items-center justify-center gap-3 md:justify-start">
                            <span className="h-px w-8 bg-white/50" />

                            <p className="text-sm font-medium text-white">
                              Clareza emocional
                            </p>
                          </div>
                        </div>

                      </div>
                    </>
                  )}

                  {/* BORDER */}
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/10" />

                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT CONTENT */}
        <div className="max-w-[360px] pb-2 md:pb-8 text-center lg:text-left">
            <Reveal delay={0.2}>
              <div className="max-w-[360px] pb-2 md:pb-8">

                {/* TOP RIGHT TEXT */}
                <div className="mb-12 md:mb-14 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-6">
                  <div className="space-y-4">

                   <p className="font-serif text-[1.15rem] italic text-foreground/72 md:text-[1.25rem]">
  Você pensa.
</p>

<p className="font-serif text-[1.15rem] italic text-foreground/72 md:text-[1.25rem]">
  Analisa.
</p>

<p className="font-serif text-[1.15rem] italic text-foreground/72 md:text-[1.25rem]">
  Busca respostas.
</p>

<p className="font-serif text-[1.15rem] italic text-foreground/72 md:text-[1.25rem]">
  Consome conteúdos.
</p>

<p className="font-serif text-[1.15rem] italic text-foreground/72 md:text-[1.25rem]">
  Tenta resolver sozinho.
</p>

                  </div>
                </div>

                {/* SUPPORT TEXT */}
             <p className="mx-auto lg:mx-0 max-w-[320px] text-[1rem] leading-[1.9] text-foreground/72 md:text-[1.08rem]">
  Mas, mesmo assim, continua sentindo
  que existe algo desalinhado.
</p>

                {/* LIST */}
                <div className="mt-12 space-y-5 md:mt-14">
                  {signs.map((sign, index) => (
                   <div
  key={sign}
  className="group flex items-center justify-between border-b border-border/70 pb-5 text-left transition-all duration-300 hover:border-wine/40"
>
                      <div className="flex items-center gap-5">

                        <span className="text-[11px] tracking-[0.3em] text-wine">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-[1rem] text-foreground/92 transition-all duration-300 group-hover:translate-x-1 md:text-[1.08rem]">
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