const STATS = [
  { value: "QAR 67M+", label: "Delivered in signed projects" },
  { value: "5,000+", label: "Projects across Qatar" },
  { value: "15+", label: "Years of German-standard installs" },
  { value: "3", label: "Business lines — UPVC, Aluminium & Material Trading" },
];

export function Stats() {
  return (
    <section className="relative z-20 mx-auto -mt-16 max-w-7xl px-6 md:-mt-20 md:px-10">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-xl shadow-navy/10 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-surface px-6 py-8 text-center md:px-8 md:py-10">
            <div className="font-display text-3xl font-semibold text-navy tabular-nums md:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-wide text-ink-muted md:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
