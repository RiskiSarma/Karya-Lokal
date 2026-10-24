import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { nav } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-fraunces)] text-xl font-bold tracking-wide">
          KARYA<span className="text-accent">LOKAL</span>
        </Link>
        <nav className="hidden gap-7 text-sm text-muted md:flex">
          {nav.map((n) => <Link key={n.href} href={n.href} className="hover:text-ink">{n.label}</Link>)}
        </nav>
        <Link href="/kontak" className="btn btn-primary hidden md:inline-block">Konsultasi Gratis</Link>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none" aria-label="Menu"><Bars3Icon className="size-7" /></summary>
          <div className="absolute right-0 mt-3 grid w-52 gap-1 rounded-2xl border border-line bg-surface p-3 shadow-lg">
            {nav.map((n) => <Link key={n.href} href={n.href} className="rounded-lg px-3 py-2 hover:bg-soft">{n.label}</Link>)}
            <Link href="/kontak" className="btn btn-primary mt-1 text-center">Konsultasi Gratis</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
