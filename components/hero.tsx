import Image from "next/image";
import { IconArrow, IconPhone } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy">
      <Image
        src="/images/hero-entrance.png"
        alt="A German Quality window and door installation at a Qatari villa entrance"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_15%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/10 to-transparent" />
      <div className="blueprint-grid absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          German Engineering &middot; Made for Qatar&rsquo;s Climate
        </p>
        <h1
          className="animate-fade-up mt-5 max-w-2xl font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.08s" }}
        >
          Windows &amp; doors, engineered for Qatar.
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-lg text-white/75"
          style={{ animationDelay: "0.16s" }}
        >
          Premium UPVC and aluminium systems, precision-installed across Qatar
          since 2010 &mdash; trusted on over 5,000 projects in Doha, Lusail,
          Al Wakra, and beyond.
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.24s" }}
        >
          <a
            href="tel:+97444422543"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-white"
          >
            <IconPhone className="h-4 w-4" />
            Call +974 4442 2543
          </a>
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Explore our products
            <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
