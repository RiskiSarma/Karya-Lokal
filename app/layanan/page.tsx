import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ServiceGrid from "@/components/ServiceGrid";

export const metadata: Metadata = { title: "Layanan" };
const steps = [
  ["Diskusi", "Kami pahami masalah dan tujuan bisnis Anda."],
  ["Rancang", "Alur, desain, dan rencana teknis disepakati bersama."],
  ["Bangun", "Pengembangan bertahap dengan progres transparan."],
  ["Luncurkan", "Deploy, pelatihan, lalu dukungan berkelanjutan."],
];

export default function Layanan() {
  return (
    <>
      <PageHead eyebrow="Layanan" title="Dari ide sampai berjalan" desc="Satu tim untuk merancang, membangun, meluncurkan, dan merawat produk digital Anda." />
      <section className="py-16"><div className="wrap"><ServiceGrid /></div></section>
      <section className="bg-soft py-16">
        <div className="wrap">
          <h2 className="mb-8 text-3xl">Cara kerja kami</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <div key={t} className="border-t-2 border-brand pt-3">
                <span className="font-bold text-accent">0{i + 1}</span>
                <h3 className="my-1 text-lg">{t}</h3>
                <p className="text-sm text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
