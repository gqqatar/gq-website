"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const TEAM = [
  "/images/team/member-1.jpg",
  "/images/team/member-2.jpg",
  "/images/team/member-3.jpg",
  "/images/team/member-4.jpg",
  "/images/team/member-5-sahil.jpg",
  "/images/team/member-6.jpg",
  "/images/team/member-7.jpg",
  "/images/team/member-8-bigan.jpg",
  "/images/team/member-9.jpg",
  "/images/team/member-10.jpg",
  "/images/team/member-11.jpg",
];

export function Factory() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad) videoRef.current?.play().catch(() => {});
  }, [shouldLoad]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-navy py-16">
      <div className="absolute inset-0">
        {shouldLoad && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="h-full w-full object-cover opacity-60"
          >
            <source src="/videos/factory.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
      <div className="blueprint-grid absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Behind the Scenes
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-2xl font-medium text-white md:text-3xl">
          Inside the factory floor.
        </h2>
        <p className="mt-3 max-w-lg text-sm text-white/70">
          Every frame is cut, welded, and quality-checked in-house before it ever
          reaches a site &mdash; precision that starts long before installation.
        </p>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Our People
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-medium text-white md:text-3xl">
            Meet the team achieving your dreams.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-white/70">
            Every window and door that leaves our factory passes through the
            hands of this team &mdash; measured, cut, assembled, and checked
            before it ever reaches your site.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {TEAM.map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt="German Quality team member"
                  fill
                  sizes="(min-width: 640px) 12vw, 30vw"
                  className="object-cover object-top transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
