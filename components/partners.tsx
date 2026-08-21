import Image from "next/image";

const LOGO_PARTNERS = [
  { name: "Schüco", src: "/logos/schuco.svg", height: 28 },
  { name: "Kömmerling", src: "/logos/kommerling.svg", height: 24 },
  { name: "Roto", src: "/logos/roto.svg", height: 30 },
];
const TEXT_PARTNERS = ["Firatpen", "Qalex"];

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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {LOGO_PARTNERS.map((p) => (
            <div key={p.name} className="relative" style={{ height: p.height, width: p.height * 4 }}>
              <Image
                src={p.src}
                alt={`${p.name} logo`}
                fill
                sizes="160px"
                className="object-contain object-center"
              />
            </div>
          ))}
          {TEXT_PARTNERS.map((name) => (
            <span key={name} className="font-display text-xl font-medium text-navy">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
