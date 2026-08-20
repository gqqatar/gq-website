"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const SCRIPT_ID = "instagram-embed-script";

function loadInstagramScript(onReady: () => void) {
  if (window.instgrm) return onReady();
  const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    existing.addEventListener("load", onReady);
    return;
  }
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  script.onload = onReady;
  document.body.appendChild(script);
}

export function InstagramEmbed({ url, className }: { url: string; className?: string }) {
  useEffect(() => {
    loadInstagramScript(() => window.instgrm?.Embeds.process());
  }, [url]);

  return (
    <blockquote
      className={`instagram-media ${className ?? ""}`}
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ background: "#FFF", border: 0, margin: "0 auto", width: "100%", minWidth: 236, maxWidth: 540 }}
    />
  );
}
