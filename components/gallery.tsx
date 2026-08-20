import { IconArrow, IconInstagram } from "./icons";
import { InstagramEmbed } from "./instagram-embed";

const INSTAGRAM_URL = "https://instagram.com/gq_upvc";
const REEL_URL = "https://www.instagram.com/gq_upvc/reel/DUXymiZDEiH/";
const POST_URLS = [
  "https://www.instagram.com/gq_upvc/p/DcQfmb9M7me/",
  "https://www.instagram.com/gq_upvc/p/Db0StiosU_T/",
  "https://www.instagram.com/gq_upvc/p/Db2slM5sTwr/",
  "https://www.instagram.com/gq_upvc/p/DbxzKLwMFLy/",
];

export function Gallery() {
  return (
    <section id="projects" className="bg-navy py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              <IconInstagram className="h-4 w-4" />
              @gq_upvc on Instagram
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-white md:text-5xl">
              Follow along as we build across Qatar.
            </h2>
            <p className="mt-5 max-w-md text-white/60">
              Villas, compounds, and commercial builds across Doha, Al Wakra, Lusail,
              Al Shamal, and beyond &mdash; a sample of 5,000+ installs, with new
              projects posted regularly.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-white"
            >
              <IconInstagram className="h-4 w-4" />
              View our Instagram
              <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[420px_1fr] lg:items-start lg:gap-10">
          <div className="rounded-2xl bg-white p-1.5 shadow-2xl shadow-black/30">
            <InstagramEmbed url={REEL_URL} />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {POST_URLS.map((url) => (
              <div key={url} className="rounded-2xl bg-white p-1.5 shadow-xl shadow-black/20">
                <InstagramEmbed url={url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
