import Image from "next/image";

export function Craftsmanship() {
  return (
    <section className="bg-bg-alt py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-navy/15">
            <Image
              src="/images/pivot-door-interior.png"
              alt="A German Quality pivot door installed in a Qatari villa entrance"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-deep">
            German engineering, made in Germany
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium text-navy md:text-5xl">
            Every profile is engineered before it ever reaches your site.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Our UPVC profiles are produced in Germany and paired with premium Turkish
            hardware, while our aluminium range is manufactured right here in Qatar
            under the Qalex brand &mdash; giving you a system built specifically for
            this climate, not adapted to it.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <dt className="text-sm font-medium text-ink-muted">Since</dt>
              <dd className="mt-1 font-display text-3xl font-medium text-navy">2010</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-ink-muted">Business lines</dt>
              <dd className="mt-2 space-y-1">
                <p className="font-display text-lg font-medium leading-tight text-navy">
                  German UPVC Windows and Doors
                </p>
                <p className="font-display text-lg font-medium leading-tight text-navy">
                  Aluminum Windows and Doors
                </p>
                <p className="font-display text-lg font-medium leading-tight text-navy">
                  GQ Material Trading
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
