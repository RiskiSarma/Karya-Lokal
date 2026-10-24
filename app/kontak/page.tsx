import type { Metadata } from "next";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import PageHead from "@/components/PageHead";
import { ContactForm } from "@/components/ContactForm";
import { EMAIL } from "@/lib/data";

export const metadata: Metadata = { title: "Kontak" };

export default function Kontak() {
  return (
    <>
      <PageHead eyebrow="Kontak" title="Ceritakan kebutuhan Anda" desc="Konsultasi awal gratis. Isi formulir, pesan terbuka di WhatsApp kami." />
      <section className="py-16">
        <div className="wrap grid items-start gap-10 md:grid-cols-2">
          <div className="space-y-3 text-muted">
            <p className="flex items-center gap-2"><EnvelopeIcon className="size-5 text-accent" />{EMAIL}</p>
            <p className="flex items-center gap-2"><MapPinIcon className="size-5 text-accent" />Aceh, Indonesia</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
