
import type { Metadata } from "next";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import PageHead from "@/components/PageHead";
import { ContactForm } from "@/components/ContactForm";
import { EMAIL } from "@/lib/data";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = { title: "Kontak" };

export default function Kontak() {
  const t = dict.id.contact;

  return (
    <>
      <PageHead
        eyebrow={t.tag}
        title={t.h2}
        desc={t.sub}
      />
      <section className="py-16">
        <div className="wrap grid items-start gap-10 md:grid-cols-2">
          <div className="space-y-3 text-muted">
            <p className="flex items-center gap-2">
              <EnvelopeIcon className="size-5 text-accent" />
              {EMAIL}
            </p>
            <p className="flex items-center gap-2">
              <MapPinIcon className="size-5 text-accent" />
              {t.loc}
            </p>
          </div>
          <ContactForm t={t.form} lang="id" />
        </div>
      </section>
    </>
  );
}
