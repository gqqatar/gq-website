import Image from "next/image";
import { IconArrow, IconInstagram } from "./icons";

const INSTAGRAM_URL = "https://instagram.com/gq_upvc";

const PHOTOS = [
  { src: "/images/villa-alwakra.png", alt: "Villa windows installed in Al Wakra", tall: true },
  { src: "/images/window-sunflare.png", alt: "UPVC window detail, Doha villa" },
  { src: "/images/villa-entrance.png", alt: "Villa main entrance door and glazing" },
  { src: "/images/hallway-windows.png", alt: "Row of UPVC windows, interior hallway", tall: true },
  { src: "/images/mosque-view.png", alt: "Window installation overlooking a Doha mosque" },
  { src: "/images/villa-facade.png", alt: "Villa facade with UPVC glazing" },
  { src: "/images/tilted-window.png", alt: "UPVC window installation detail" },
  { src: "/images/ceiling-window.png", alt: "Ceiling-height UPVC window installation", tall: true },
  { src: "/images/product-smart-lock.png", alt: "German Quality smart lock detail" },
];

export function Gallery() {
  return (
    <section id="projects" className="bg-navy py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              <IconInstagram className="h-4 w-4" />
              @gq_upvc on Instagram
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-white md:text-5xl">
              Follow along as we build across Qatar.
            </h2>
            <p className="mt-5 max-w-md text-white/60">
              Villas, compounds, and commercial builds across Doha, Al Wakra, Lusail,
              Al Shamal, and beyond &mdash; a sample of 5,000+ installs, with new
              projects posted regularly.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-white"
            >
              <IconInstagram className="h-4 w-4" />
              View our Instagram
              <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PHOTOS.map((p) => (
            <a
              key={p.src}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block overflow-hidden rounded-xl ${p.tall ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover object-top transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy/0 transition group-hover:bg-navy/50">
                <IconInstagram className="h-7 w-7 text-white opacity-0 transition group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
