import Image from "next/image";
import Link from "next/link";
import { IconArrow, IconLock } from "./icons";

const LINKS = [
  { href: "#why", label: "Why GQ" },
  { href: "#products", label: "Products" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6 md:px-10">
        <Link href="#top" className="flex items-center gap-2">
          <Image
            src="/gq-mark-white.png"
            alt="German Quality"
            width={40}
            height={20}
            priority
            className="h-8 w-auto md:h-9"
          />
          <span className="hidden font-display text-base font-semibold tracking-tight text-white md:block md:text-lg">
            German Quality for Windows &amp; Doors
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://gq-erp.vercel.app/login"
          className="group flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition hover:border-accent hover:bg-accent hover:text-navy"
        >
          <IconLock className="h-3.5 w-3.5" />
          Employee Login
          <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}
