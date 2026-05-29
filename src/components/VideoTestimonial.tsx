import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  poster: string;
  name: string;
  role: string;
}

export function VideoTestimonial({
  src,
  poster,
  name,
  role,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [activeVideo, setActiveVideo] = useState(false);

  // FRAME INICIAL
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0.1;
    }
  }, []);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="group relative"
    >
      <div
        className="
          relative isolate overflow-hidden
          rounded-[2rem]
          bg-black
          shadow-2xl shadow-black/10
        "
      >

        {/* VIDEO */}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
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
            aspect-[9/16]
            w-full
            object-cover
            cursor-pointer

            transition-transform
            duration-[1400ms]
            ease-out

            group-hover:scale-[1.03]

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

  // ativa apenas primeira vez
  if (!activeVideo) {
    setActiveVideo(true);

    video.muted = false;

    video.play();
  }
}}
        />

        {/* OVERLAY */}
        {!activeVideo && (
          <>
            <div
              className="
                pointer-events-none absolute inset-0 z-20
                bg-gradient-to-t
                from-black/55
                via-black/10
                to-transparent

                transition-all duration-700

                group-hover:from-black/20
                group-hover:via-transparent
              "
            />

            {/* PLAY MOBILE */}
            <div
              className="
                pointer-events-none absolute inset-0 z-30
                flex items-center justify-center

                md:hidden
              "
            >
              <div
                className="
                  flex h-16 w-16 items-center justify-center
                  rounded-full
                  border border-white/20
                  bg-black/40
                  backdrop-blur-xl
                "
              >
                <Play
                  size={24}
                  className="ml-1 text-white"
                  fill="white"
                />
              </div>
            </div>

            {/* TEXTO */}
            <div
              className="
                pointer-events-none absolute inset-x-0 bottom-0 z-30
                p-5 md:p-6
              "
            >
              <div>
                <p className="font-serif text-[1.75rem] text-white">
                  {name}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <span className="h-px w-7 bg-white/40" />

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-[#D6B98C]
                    "
                  >
                    {role}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* BORDER */}
        <div
          className="
            pointer-events-none absolute inset-0
            rounded-[2rem]
            ring-1 ring-white/10
          "
        />

      </div>
    </motion.figure>
  );
}