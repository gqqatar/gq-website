import Image from "next/image";

const CATEGORIES = [
  "Doors — panel, French, lift & slide, folding",
  "Curtain wall systems",
  "Fly screens — pull-down & zig-zag",
  "Skylights",
  "Pivot doors",
  "Steel doors",
  "Garage doors",
  "Aluminium doors",
  "Glass & steel handrails",
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

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="group relative col-span-1 row-span-2 overflow-hidden rounded-2xl sm:col-span-2">
          <div className="relative aspect-[16/11] w-full sm:aspect-auto sm:h-full">
            <Image
              src="/images/arch-window.png"
              alt="Arched UPVC window installed by German Quality"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <h3 className="font-display text-2xl font-medium text-white">Windows</h3>
            <p className="mt-1 text-sm text-white/75">
              Square, arch, Islamic arch, fixed, tilt-and-turn, top-hung &amp; sliding
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/images/product-smart-lock.png"
              alt="German Quality smart lock hardware detail"
              fill
              sizes="(min-width: 1024px) 22vw, 90vw"
              className="object-cover object-top transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="font-display text-xl font-medium text-white">Smart Hardware</h3>
            <p className="mt-1 text-sm text-white/75">Fingerprint &amp; keypad smart locks</p>
          </div>
        </div>

        <div className="rounded-2xl bg-navy p-7 text-white">
          <h3 className="font-display text-xl font-medium">Moving Pergola</h3>
          <p className="mt-2 text-sm text-white/70">
            Remote-controlled open/close roof pergolas with automated sliding glass
            walls &mdash; German technology, year-round outdoor comfort.
          </p>
        </div>

        {CATEGORIES.map((c) => {
          const [title, ...rest] = c.split(" — ");
          return (
            <div
              key={c}
              className="rounded-2xl border border-line bg-surface p-6 transition hover:border-accent-deep hover:shadow-md"
            >
              <h3 className="font-display text-lg font-medium text-navy">{title}</h3>
              {rest.length > 0 && (
                <p className="mt-1.5 text-sm text-ink-muted">{rest.join(" — ")}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
