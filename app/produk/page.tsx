import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = { title: "Produk" };

export default function Produk() {
  return (
    <>
      <PageHead eyebrow="Produk" title="Aplikasi siap pakai, buatan sendiri" desc="Produk digital Karyalokal untuk masalah yang berulang di lapangan." />
      <section className="py-16"><div className="wrap"><ProductGrid /></div></section>
    </>
  );
}
