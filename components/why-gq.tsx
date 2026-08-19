import { IconEnergy, IconInsulation, IconMaintenance, IconSound } from "./icons";

const FEATURES = [
  {
    icon: IconInsulation,
    title: "Double-glazed insulation",
    body: "Two panes with an insulating air gap keep interiors cooler in summer and warmer in winter, cutting the load on your AC.",
  },
  {
    icon: IconSound,
    title: "Serious soundproofing",
    body: "The same air gap that blocks heat blocks noise — a real difference on a busy road or near the airport corridor.",
  },
  {
    icon: IconEnergy,
    title: "Lower energy bills",
    body: "Less heat transfer means lower cooling costs year-round — an investment that pays for itself over Doha's long summers.",
  },
  {
    icon: IconMaintenance,
    title: "Decades of low upkeep",
    body: "UPVC won't warp, rot, or corrode in Qatar's climate. No repainting, no rust — just a quick wipe-down.",
  },
];

export function WhyGQ() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-6 py-28 md:px-10">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-deep">
          Why UPVC, why GQ
        </p>
        <h2 className="mt-4 font-display text-4xl font-medium text-navy md:text-5xl">
          Built for a climate that punishes everything else.
        </h2>
        <p className="mt-5 text-lg text-ink-muted">
          Over 15 years supplying premium German and Turkish profiles to Qatar, we've
          learned exactly what this climate does to ordinary materials &mdash; and
          engineered around it.
        </p>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <div key={f.title} className="group bg-surface p-8 transition hover:bg-navy">
            <f.icon className="h-9 w-9 text-accent-deep transition group-hover:text-accent" />
            <h3 className="mt-6 font-display text-xl font-medium text-navy transition group-hover:text-white">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted transition group-hover:text-white/70">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
