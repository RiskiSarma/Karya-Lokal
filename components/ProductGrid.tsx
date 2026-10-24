import Link from "next/link";
import { products } from "@/lib/data";

export default function ProductGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {products.map((p) => (
        <div key={p.name} className="card flex flex-col items-start gap-2">
          <span className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-brand">{p.tag}</span>
          <h3 className="text-2xl">{p.name}</h3>
          <p className="text-muted">{p.desc}</p>
          <span className="text-xs text-muted">A product by Karyalokal</span>
          {p.href ? (
            <a href={p.href} target="_blank" rel="noopener" className="btn btn-ghost mt-3">Kunjungi {p.name}</a>
          ) : (
            <Link href="/kontak" className="btn btn-ghost mt-3">Tanya {p.name}</Link>
          )}
        </div>
      ))}
    </div>
  );
}
