import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { Sprite } from "@/components/Icon";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-display" });
const body = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Karya Lokal",
  description:
    "Software development & digital solutions: pembuatan website, aplikasi bisnis, sistem informasi, dan produk digital KasirHub serta Presensi Cafe.",
  openGraph: { title: "KARYALOKAL", description: "Berakar Lokal, Berdampak Global.", locale: "id_ID", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <Sprite />
        {children}
      </body>
    </html>
  );
}
