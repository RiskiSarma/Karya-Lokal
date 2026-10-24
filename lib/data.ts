import {
  GlobeAltIcon, Squares2X2Icon, BoltIcon, ArrowPathIcon,
} from "@heroicons/react/24/outline";

// GANTI nomor WhatsApp: format 62xxxxxxxxxx tanpa + atau spasi
export const WA_NUMBER = "6281269334494";
export const EMAIL = "karyalokal@gmail.com";

export const nav = [
  { href: "/layanan", label: "Layanan" },
  { href: "/produk", label: "Produk" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/tentang", label: "Tentang" },
];

export const services = [
  { icon: GlobeAltIcon, title: "Custom Website", desc: "Company profile, landing page, hingga toko online. Cepat, responsif, ramah SEO." },
  { icon: Squares2X2Icon, title: "Web Application", desc: "Dashboard, portal klien, sistem pemesanan, dan aplikasi lain sesuai alur bisnis Anda." },
  { icon: BoltIcon, title: "Business Automation", desc: "Otomasi laporan, presensi, dan administrasi agar tim fokus pada hal penting." },
  { icon: ArrowPathIcon, title: "Software Maintenance", desc: "Perawatan, perbaikan bug, optimasi, dan fitur lanjutan untuk sistem yang sudah berjalan." },
];

export const products = [
  { name: "KasirHub", tag: "Point of Sale", desc: "Aplikasi kasir untuk mengelola transaksi dan operasional harian bisnis.", href: "" },
  { name: "Presensi Cafe", tag: "Absensi Karyawan", desc: "Presensi berbasis pengenalan wajah untuk usaha F&B, praktis dan sulit dititipkan.", href: "" },
];

// Studi kasus: isi dengan proyek nyata. Tanpa izin klien, anonimkan nama klien.
export const projects = [
  {
    title: "KasirHub",
    client: "Produk sendiri",
    problem: "Pemilik usaha kesulitan mencatat transaksi dan stok secara rapi.",
    solution: "Aplikasi kasir dengan laporan penjualan otomatis.",
    stack: ["Laravel", "Tailwind"],
    result: "Isi hasil nyata, misalnya rekap laporan turun dari 2 jam ke 5 menit.",
  },
  {
    title: "Presensi Cafe",
    client: "Produk sendiri",
    problem: "Absensi manual rawan titip absen dan sulit direkap.",
    solution: "Presensi pengenalan wajah dengan rekap kehadiran otomatis.",
    stack: ["Laravel", "Face Recognition"],
    result: "Isi hasil nyata, misalnya jumlah outlet dan karyawan pengguna.",
  },
];
