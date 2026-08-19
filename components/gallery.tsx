import Image from "next/image";

const PHOTOS = [
  { src: "/images/villa-alwakra.png", alt: "Villa windows installed in Al Wakra", tall: true },
  { src: "/images/window-sunflare.png", alt: "UPVC window detail, Doha villa" },
  { src: "/images/villa-entrance.png", alt: "Villa main entrance door and glazing" },
  { src: "/images/hallway-windows.png", alt: "Row of UPVC windows, interior hallway", tall: true },
  { src: "/images/mosque-view.png", alt: "Window installation overlooking a Doha mosque" },
  { src: "/images/villa-facade.png", alt: "Villa facade with UPVC glazing" },
  { src: "/images/tilted-window.png", alt: "UPVC window installation detail" },
  { src: "/images/ceiling-window.png", alt: "Ceiling-height UPVC window installation", tall: true },
];

export function Gallery() {
  return (
    <section id="projects" className="bg-navy py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              On site across Qatar
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-white md:text-5xl">
              A small sample of 5,000+ installs.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/60">
            Villas, compounds, and commercial builds across Doha, Al Wakra, Lusail,
            Al Shamal, and beyond.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PHOTOS.map((p) => (
            <div
              key={p.src}
              className={`group relative overflow-hidden rounded-xl ${p.tall ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover object-top transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/0 transition group-hover:bg-navy/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
