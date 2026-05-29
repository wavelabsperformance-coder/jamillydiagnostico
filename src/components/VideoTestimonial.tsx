import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  poster?: string;
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

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0.1;
    }
  }, []);

  return (
    <div className="group relative overflow-hidden rounded-[2rem] bg-black">

      {/* VIDEO */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        muted={!active}
        controls={active}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen"
        className="
          aspect-[9/16]
          w-full
          object-cover
          cursor-pointer

          transition-transform
          duration-[1400ms]
          ease-out

          md:group-hover:scale-[1.04]
        "

        // PREVIEW DESKTOP
        onMouseEnter={async (e) => {
          if (window.innerWidth < 768) return;

          const video = e.currentTarget;

          if (!active) {
            try {
              video.muted = true;
              await video.play();
            } catch {}
          }
        }}

        onMouseLeave={(e) => {
          if (window.innerWidth < 768) return;

          const video = e.currentTarget;

          if (!active) {
            video.pause();
            video.currentTime = 0.1;
          }
        }}

        // PLAY REAL
        onClick={async (e) => {
          const video = e.currentTarget;

          setActive(true);

          video.muted = false;

          try {
            await video.play();
          } catch {}
        }}
      />

      {/* OVERLAY */}
      {!active && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* PLAY MOBILE */}
          <div className="absolute inset-0 flex items-center justify-center md:hidden">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md">
              <Play
                size={28}
                className="ml-1 text-white"
                fill="white"
              />
            </div>
          </div>

          {/* INFO */}
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="font-serif text-[1.6rem] text-white">
              {name}
            </p>

            <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-[#d6b48a]">
              {role}
            </p>
          </div>
        </>
      )}
    </div>
  );
}