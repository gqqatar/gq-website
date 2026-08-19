const PROFILE_PARTNERS = ["Kömmerling", "Firatpen", "Best PEN", "Deceuninck", "Adopen", "Enderpen", "Taurus"];
const OTHER_PARTNERS = [
  { name: "Roto", note: "Hardware" },
  { name: "Qalex", note: "Aluminium" },
];

export function Partners() {
  return (
    <section className="border-y border-line bg-bg-alt py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-accent-deep">
          Our Partners
        </p>
        <h2 className="mt-3 text-center font-display text-2xl font-medium text-navy md:text-3xl">
          German and Turkish profile systems, genuine hardware.
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {PROFILE_PARTNERS.map((name) => (
            <span
              key={name}
              className="rounded-full border border-line bg-surface px-5 py-2.5 font-display text-base font-medium text-navy"
            >
              {name}
            </span>
          ))}
          {OTHER_PARTNERS.map((p) => (
            <span
              key={p.name}
              className="flex items-center gap-2 rounded-full border border-accent-deep/30 bg-accent-soft px-5 py-2.5 font-display text-base font-medium text-accent-deep"
            >
              {p.name}
              <span className="text-xs font-sans font-normal uppercase tracking-wide text-accent-deep/70">
                {p.note}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
