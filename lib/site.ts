export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// href: URL website produk (tombol jadi "Lihat paket & harga"). Kosong = tombol ke form kontak.
// shot: path screenshot di folder public, mis. "/shots/kasirhub.png". Kosong = kerangka sementara.
export const links: Record<string, { href: string; shot: string }> = {
  kasirhub: { href: "https://kasirhub.karyalokal.com", shot: "/shots/kasirhub.png" },
  presensi: { href: "https://presensi.karyalokal.com", shot: "/shots/Presensi Cafe.png" },
};
