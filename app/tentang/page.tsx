import type { Metadata } from "next";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = { title: "Tentang Kami" };

export default function Tentang() {
  return (
    <>
      <PageHead eyebrow="Tentang Kami" title="Karya + Lokal" />
      <section className="py-16">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p><strong>Karya</strong> adalah kemampuan, kreativitas, dan hasil nyata yang diciptakan lewat teknologi. <strong>Lokal</strong> adalah asal-usul, kedekatan dengan masyarakat, dan kepekaan pada masalah di sekitar.</p>
            <p className="text-muted">Karyalokal adalah perusahaan teknologi karya anak lokal yang membangun solusi digital berdasarkan permasalahan nyata. Profesional, kreatif, membumi, dan inovatif.</p>
          </div>
          <blockquote className="border-l-4 border-accent pl-5 font-[family-name:var(--font-fraunces)] text-2xl leading-snug">
            “Solusi yang berdampak luas tidak selalu berawal dari tempat yang besar. Terkadang, semuanya dimulai dari masalah sederhana di sekitar kita.”
          </blockquote>
        </div>
      </section>
    </>
  );
}
