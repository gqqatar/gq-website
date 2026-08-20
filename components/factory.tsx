"use client";

import { useEffect, useRef, useState } from "react";

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
    <section ref={sectionRef} className="relative overflow-hidden bg-navy py-28">
      <div className="absolute inset-0">
        {shouldLoad && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="h-full w-full scale-90 object-contain opacity-60"
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
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium text-white md:text-5xl">
          Inside the factory floor.
        </h2>
        <p className="mt-5 max-w-lg text-lg text-white/70">
          Every frame is cut, welded, and quality-checked in-house before it ever
          reaches a site &mdash; precision that starts long before installation.
        </p>
      </div>
    </section>
  );
}
