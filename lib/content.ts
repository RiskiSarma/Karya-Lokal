export const services = [
  { icon: "globe", title: "Custom Website", text: "Company profile, landing page, dan website bisnis yang cepat, rapi di ponsel, dan mudah ditemukan." },
  { icon: "app", title: "Web Application", text: "Aplikasi berbasis web untuk operasional harian: pesanan, stok, pelanggan, hingga laporan." },
  { icon: "bolt", title: "Business Automation", text: "Pekerjaan manual yang berulang diubah jadi alur otomatis, supaya timmu fokus ke hal yang penting." },
  { icon: "shield", title: "Software Maintenance", text: "Perbaikan bug, pembaruan fitur, keamanan, dan pemantauan server setelah sistem berjalan." },
];

// `href`: URL website produk (tombol jadi "Lihat paket & harga"). Kosong = tombol ke form kontak.
// `shot`: path screenshot di folder public, mis. "/shots/kasirhub.png". Kosong = kerangka sementara.
export const products = [
  { icon: "receipt", name: "KasirHub", text: "Aplikasi kasir untuk membantu bisnis mengelola transaksi dan operasional dengan lebih tertib.", href: "", shot: "/shots/kasirhub.png" },
  { icon: "clock", name: "Presensi Cafe", text: "Presensi karyawan untuk lingkungan usaha seperti kafe dan warkop, tanpa buku absen kertas.", href: "", shot: "/shots/Presensi Cafe.png" },
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

export const faqs = [
  { q: "Berapa biaya pembuatan website atau aplikasi?", a: "Tergantung kebutuhan dan ruang lingkupnya, jadi kami diskusikan dulu lewat WhatsApp lalu kirim penawaran yang jelas. Untuk KasirHub dan Presensi Cafe, paket harga sudah tersedia di website masing-masing." },
  { q: "Berapa lama pengerjaannya?", a: "Bergantung pada fitur dan kompleksitasnya. Setelah memahami kebutuhanmu, kami beri estimasi waktu, dan pengerjaan dilakukan bertahap sehingga kamu bisa melihat progresnya." },
  { q: "Aplikasi yang saya butuhkan tidak ada di daftar layanan, bisa?", a: "Bisa. Karyalokal memulai dari masalah dan alur kerjamu, bukan dari template. Ceritakan kebutuhannya, kami bantu petakan solusinya." },
  { q: "Apakah ada dukungan setelah sistem selesai?", a: "Ada. Layanan Software Maintenance mencakup perbaikan bug, pembaruan fitur, keamanan, dan pemantauan server setelah sistem berjalan." },
  { q: "Siapa yang mengurus server, domain, dan SSL?", a: "Kami bisa membantu deploy, pengaturan domain, dan SSL di server. Rinciannya, termasuk biaya hosting, dibahas saat diskusi awal." },
  { q: "Bagaimana cara memulai?", a: "Kirim pesan lewat WhatsApp atau isi formulir kontak. Kami balas dengan arah solusi dan langkah awal." },
];