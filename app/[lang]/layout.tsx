import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { Sprite } from "@/components/Icon";
import { Motion } from "@/components/Motion";
import { dict } from "@/lib/i18n";
import { locales, siteUrl, type Locale } from "@/lib/site";
import "../globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-display" });
const body = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = dict[lang as Locale];
  return {
    metadataBase: new URL(siteUrl),
    title: { default: t.meta.title, template: "%s | KARYALOKAL" },
    description: t.meta.desc,
    alternates: { canonical: lang === "id" ? "/" : "/en", languages: { id: "/", en: "/en", "x-default": "/" } },
    openGraph: { title: "KARYALOKAL", description: t.meta.og, locale: lang === "id" ? "id_ID" : "en_US", type: "website", images: ["/logo.png"] },
  };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('mo')" }} />
      </head>
      <body>
        <Sprite />
        <Motion />
        {children}
      </body>
    </html>
  );
}
