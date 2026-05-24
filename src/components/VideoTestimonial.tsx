import { useRef, useState } from "react";
import { Play, Volume2 } from "lucide-react";

export function VideoTestimonial({
  src,
  poster,
  name,
  role,
}: {
  src: string;
  poster: string;
  name: string;
  role: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const hoverPreview = () => {
    if (playing) return;
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  };
  const stopPreview = () => {
    if (playing) return;
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };
  const activate = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    v.controls = true;
    v.currentTime = 0;
    v.play().catch(() => {});
    setPlaying(true);
  };

  return (
    <div
      className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-foreground cursor-pointer"
      onMouseEnter={hoverPreview}
      onMouseLeave={stopPreview}
      onTouchStart={hoverPreview}
      onClick={activate}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
      />

      {!playing && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-background/60 backdrop-blur-sm flex items-center justify-center group-hover:bg-background group-hover:border-background transition-all duration-500">
              <Play className="w-5 h-5 md:w-6 md:h-6 text-background group-hover:text-foreground translate-x-0.5 transition-colors" />
            </div>
          </div>
          <div className="absolute top-5 right-5 flex items-center gap-1.5 text-[10px] tracking-[0.3em] uppercase text-background/70 pointer-events-none">
            <Volume2 className="w-3 h-3" />
            Som ao clicar
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 pointer-events-none">
            <p className="font-serif text-background text-xl md:text-2xl leading-tight">{name}</p>
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent mt-2">{role}</p>
          </div>
        </>
      )}
    </div>
  );
}