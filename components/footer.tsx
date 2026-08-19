import Image from "next/image";
import { IconLock } from "./icons";

const LINKS = [
  { href: "#why", label: "Why GQ" },
  { href: "#products", label: "Products" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-10 border-b border-navy-line pb-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Image
              src="/gq-logo-white.png"
              alt="German Quality"
              width={220}
              height={158}
              className="h-16 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-white/50">
              German Quality for Windows &amp; Doors &mdash; UPVC, aluminium, and
              Windows &amp; Doors Material Trading, serving Qatar since 2010.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-white/40">Site</div>
              <ul className="mt-4 space-y-3">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-white/70 transition hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-white/40">Connect</div>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="https://instagram.com/GQ_UPVC" className="text-sm text-white/70 transition hover:text-white">
                    @GQ_UPVC
                  </a>
                </li>
                <li>
                  <a
                    href="https://erp.gqqatar.com/login"
                    className="inline-flex items-center gap-1.5 text-sm text-white/70 transition hover:text-white"
                  >
                    <IconLock className="h-3.5 w-3.5" />
                    Employee Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} German Quality for Windows &amp; Doors. All rights reserved.</p>
          <p>Doha, Qatar</p>
        </div>
      </div>
    </footer>
  );
}
