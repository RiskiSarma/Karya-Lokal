import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Portofolio" };

export default function Portofolio() {
  return (
    <>
      <PageHead eyebrow="Portofolio" title="Karya yang sudah berjalan" desc="Studi kasus: masalah yang dihadapi, solusi yang dibangun, dan hasilnya." />
      <section className="py-16">
        <div className="wrap grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{p.client}</p>
              <h3 className="mb-4 text-2xl">{p.title}</h3>
              <dl className="grid gap-3 text-sm">
                <div><dt className="font-semibold">Masalah</dt><dd className="text-muted">{p.problem}</dd></div>
                <div><dt className="font-semibold">Solusi</dt><dd className="text-muted">{p.solution}</dd></div>
                <div><dt className="font-semibold">Hasil</dt><dd className="text-muted">{p.result}</dd></div>
              </dl>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => <li key={s} className="rounded-full bg-soft px-3 py-1 text-xs text-brand">{s}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
