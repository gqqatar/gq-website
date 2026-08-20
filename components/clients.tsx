const CLIENTS = [
  "Al Hattab Holding",
  "Manfalout Trading & Cont.",
  "J Seven",
  "Monaqasat",
  "Inception Contracting",
  "Shelter Group",
  "Barzan Holdings",
  "Tatweer Doha Development Co.",
  "Al Fouad Construction",
  "Norden",
  "Al Saheli Trading & Contracting",
  "HBC — Hazem Brothers for Construction",
  "Edge Construction",
  "CEC",
  "ASAS Construction Chemical Factory",
];

export function Clients() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-accent-deep">
          Our Clients
        </p>
        <h2 className="mt-3 text-center font-display text-2xl font-medium text-navy md:text-3xl">
          Trusted by Qatar&rsquo;s leading developers and contractors.
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {CLIENTS.map((name) => (
            <span
              key={name}
              className="rounded-full border border-line bg-bg-alt px-5 py-2.5 text-sm font-medium text-navy"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
