import Image from "next/image";

type Category = {
  title: string;
  subtitle?: string;
  image?: string;
  alt?: string;
};

const CATEGORIES: Category[] = [
  {
    title: "Doors",
    subtitle: "Panel, French, lift & slide, folding",
  },
  {
    title: "Curtain Wall",
    subtitle: "Full-height glazed systems",
    image: "/images/curtain-wall.png",
    alt: "Curtain wall glazing installed by German Quality",
  },
  {
    title: "Fly Screens",
    subtitle: "Zig-zag & pull-down",
  },
  {
    title: "Pivot Doors",
    subtitle: "Wide, statement entrances",
  },
  {
    title: "Aluminium Doors",
    subtitle: "Qalex aluminium systems",
  },
  {
    title: "Skylights",
    image: "/images/skylight.png",
    alt: "Skylight installation viewed from below",
  },
  {
    title: "Steel Doors",
    image: "/images/steel-door.avif",
    alt: "Ornate laser-cut steel door",
  },
  {
    title: "Garage Doors",
    subtitle: "Ornate laser-cut steel",
    image: "/images/garage-door.webp",
    alt: "Ornate laser-cut steel garage gate",
  },
  {
    title: "Glass & Steel Handrails",
    image: "/images/glass-handrail.jpg",
    alt: "Glass and steel staircase handrail",
  },
];

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-28 md:px-10">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-deep">
          Our range
        </p>
        <h2 className="mt-4 font-display text-4xl font-medium text-navy md:text-5xl">
          One supplier, every opening in the building.
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="group relative col-span-1 overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-3">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/windows-featured.png"
              alt="UPVC and aluminium window installed by German Quality"
              fill
              sizes="90vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <h3 className="font-display text-2xl font-medium text-white">Windows</h3>
            <p className="mt-1 text-sm text-white/75">
              UPVC and Qalex aluminium &mdash; square, arch, Islamic arch, fixed,
              tilt-and-turn, top-hung &amp; sliding
            </p>
          </div>
        </div>

        {CATEGORIES.map((c) =>
          c.image ? (
            <div key={c.title} className="group relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={c.image}
                  alt={c.alt ?? c.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover object-bottom transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl font-medium text-white">{c.title}</h3>
                {c.subtitle && <p className="mt-1 text-sm text-white/75">{c.subtitle}</p>}
              </div>
            </div>
          ) : (
            <div
              key={c.title}
              className="rounded-2xl border border-line bg-surface p-6 transition hover:border-accent-deep hover:shadow-md"
            >
              <h3 className="font-display text-lg font-medium text-navy">{c.title}</h3>
              {c.subtitle && <p className="mt-1.5 text-sm text-ink-muted">{c.subtitle}</p>}
            </div>
          ),
        )}
      </div>
    </section>
  );
}
