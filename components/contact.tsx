import { IconArrow, IconMail, IconPhone, IconPin } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="bg-bg-alt py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-deep">
              Get in touch
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-navy md:text-5xl">
              Tell us what you&rsquo;re building.
            </h2>
            <p className="mt-6 max-w-md text-lg text-ink-muted">
              Whether it&rsquo;s a single villa or a full compound, our team will
              measure, quote, and install &mdash; start to finish.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/97455011175"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-accent-deep hover:text-white"
              >
                WhatsApp us
                <IconArrow className="h-4 w-4" />
              </a>
              <a
                href="tel:+97444422543"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-navy hover:bg-navy hover:text-white"
              >
                <IconPhone className="h-4 w-4" />
                Call the office
              </a>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            <a href="tel:+97444422543" className="flex flex-col gap-3 bg-surface p-7 transition hover:bg-white">
              <IconPhone className="h-6 w-6 text-accent-deep" />
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-ink-muted">Telephone</div>
                <div className="mt-1 font-display text-lg text-navy">+974 4442 2543</div>
              </div>
            </a>
            <a href="tel:+97455011175" className="flex flex-col gap-3 bg-surface p-7 transition hover:bg-white">
              <IconPhone className="h-6 w-6 text-accent-deep" />
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-ink-muted">Mobile</div>
                <div className="mt-1 font-display text-lg text-navy">+974 5501 1175</div>
              </div>
            </a>
            <a href="mailto:info@gq-upvc.com" className="flex flex-col gap-3 bg-surface p-7 transition hover:bg-white sm:col-span-2">
              <IconMail className="h-6 w-6 text-accent-deep" />
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-ink-muted">Email</div>
                <div className="mt-1 font-display text-lg text-navy">info@gq-upvc.com</div>
              </div>
            </a>
            <div className="flex flex-col gap-3 bg-surface p-7 sm:col-span-2">
              <IconPin className="h-6 w-6 text-accent-deep" />
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-ink-muted">Showroom</div>
                <div className="mt-1 font-display text-lg text-navy">Salwa Road, Doha, Qatar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
