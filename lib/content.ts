export const services = [
  { icon: "globe", title: "Custom Website", text: "Company profile, landing page, dan website bisnis yang cepat, rapi di ponsel, dan mudah ditemukan." },
  { icon: "app", title: "Web Application", text: "Aplikasi berbasis web untuk operasional harian: pesanan, stok, pelanggan, hingga laporan." },
  { icon: "bolt", title: "Business Automation", text: "Pekerjaan manual yang berulang diubah jadi alur otomatis, supaya timmu fokus ke hal yang penting." },
  { icon: "shield", title: "Software Maintenance", text: "Perbaikan bug, pembaruan fitur, keamanan, dan pemantauan server setelah sistem berjalan." },
];

// Isi `href` kalau website produk sudah ada. Kosong = tombol mengarah ke form kontak.
export const products = [
  { icon: "receipt", name: "KasirHub", text: "Aplikasi kasir untuk membantu bisnis mengelola transaksi dan operasional dengan lebih tertib.", href: "" },
  { icon: "clock", name: "Presensi Cafe", text: "Presensi karyawan untuk lingkungan usaha seperti kafe dan warkop, tanpa buku absen kertas.", href: "" },
];

export const steps = [
  { title: "Dengar", text: "Kami pelajari masalah dan alur kerjamu dulu." },
  { title: "Rancang", text: "Ruang lingkup, tampilan, dan estimasi disepakati bersama." },
  { title: "Bangun", text: "Dikerjakan bertahap, kamu bisa melihat dan mencoba hasilnya." },
  { title: "Rawat", text: "Dipasang di server, dipantau, dan dirawat setelah rilis." },
];

// Studi kasus. `result` opsional: isi hanya kalau ada angka/hasil nyata, kalau kosong barisnya tidak tampil.
// Tambahkan proyek klien di sini (anonimkan nama klien kalau belum ada izin).
export const projects = [
  {
    title: "KasirHub",
    kind: "Produk sendiri",
    problem: "Pemilik usaha masih mencatat transaksi dan stok manual sehingga laporan lambat dan sering selisih.",
    solution: "Aplikasi kasir berbasis web dengan pencatatan transaksi dan laporan penjualan yang tersusun otomatis.",
    result: "",
    tags: ["Web app", "Multi-tenant", "Laravel"],
  },
  {
    title: "Presensi Cafe",
    kind: "Produk sendiri",
    problem: "Absen kertas di kafe dan warkop rawan titip absen dan merepotkan saat rekap gaji.",
    solution: "Presensi karyawan berbasis pengenalan wajah dengan rekap kehadiran otomatis per outlet.",
    result: "",
    tags: ["Face recognition", "Multi-tenant", "Laravel"],
  },
];
