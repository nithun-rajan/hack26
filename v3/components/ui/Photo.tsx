// Reusable event photo. Plain <img> (static export, unoptimized images) so the
// GitHub Pages base path has to be prefixed manually — next/image is not used.
// Files live in /public/gallery.

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Photo({
  src,
  alt,
  caption,
  className = "",
  imgClassName = "",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={`group relative overflow-hidden border border-violet-400/20 bg-violet-500/[0.07] ${className}`}
    >
      <img
        src={`${base}/gallery/${src}`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${imgClassName}`}
      />
      {caption && (
        <>
          {/* subtle bottom gradient — just enough to seat the caption */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" />
          <figcaption className="absolute bottom-0 left-0 p-3 font-mono text-[11px] uppercase tracking-[0.1em] text-white/90">
            {caption}
          </figcaption>
        </>
      )}
    </figure>
  );
}
