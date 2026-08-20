import Image from "next/image";

const PROJECTS = [
  { count: "667", unit: "Villas", area: "Umm Salal Mohammed" },
  { count: "65", unit: "Villas", area: "Dafna" },
  { count: "28", unit: "Villas", area: "Dafna" },
  { count: "13", unit: "Villas", area: "Simaisma" },
  { count: "10", unit: "Villa Compound", area: "Al Daayen" },
  { count: "2", unit: "7-Storey Buildings", area: "Al Wa'ab" },
  { count: "1", unit: "5-Storey Building", area: "Al Wa'ab" },
];

export function NotableProjects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-deep">
            Notable Projects
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium text-navy md:text-5xl">
            Scaled from a single villa to entire compounds.
          </h2>
          <p className="mt-5 text-lg text-ink-muted">
            A sample of the larger developments we&rsquo;ve fully equipped across
            Qatar &mdash; from Umm Salal to Simaisma.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {PROJECTS.map((p) => (
              <div key={`${p.count}-${p.area}`} className="bg-surface p-5">
                <div className="font-display text-2xl font-semibold text-navy tabular-nums">
                  {p.count}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-muted">
                  {p.unit}
                </div>
                <div className="mt-2 text-sm font-medium text-accent-deep">{p.area}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-navy/15">
          <Image
            src="/images/villa-667-compound.png"
            alt="667-villa compound fully equipped by German Quality in Umm Salal Mohammed"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="font-display text-lg font-medium text-white">
              667 villas, Umm Salal Mohammed
            </p>
            <p className="text-sm text-white/75">One of our largest compound-wide installations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
