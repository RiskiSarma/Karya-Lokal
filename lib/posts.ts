export type Block = { t: "p"; x: string } | { t: "h2"; x: string } | { t: "ul"; x: string[] };
export type Post = { slug: string; title: string; desc: string; date: string; read: string; blocks: Block[] };

// Tambah artikel baru dengan menambah objek di array ini. Blog hanya berbahasa Indonesia.
export const posts: Post[] = [
  {
    slug: "kenapa-kafe-butuh-sistem-presensi",
    title: "Kenapa Kafe dan Warkop Butuh Sistem Presensi Digital",
    desc: "Absen kertas rawan titip absen dan merepotkan saat rekap gaji. Ini masalahnya dan apa yang berubah dengan presensi digital.",
    date: "2026-11-01",
    read: "3 menit baca",
    blocks: [
      { t: "p", x: "Di kafe, warkop, dan restoran, karyawan bekerja bergantian dengan jam yang sering berubah. Banyak usaha masih mengandalkan buku absen kertas karena murah dan terasa cukup. Masalahnya baru terasa ketika gaji dan lembur harus dihitung." },
      { t: "h2", x: "Masalah absen kertas" },
      { t: "ul", x: [
        "Titip absen: satu orang menandatangani untuk temannya.",
        "Jam masuk dan pulang ditulis kira-kira, bukan jam sebenarnya.",
        "Rekap akhir bulan dikerjakan manual, memakan waktu dan rawan salah hitung.",
        "Buku bisa hilang, rusak, atau terkena tumpahan.",
        "Pemilik yang tidak di tempat tidak bisa memantau kehadiran.",
      ] },
      { t: "h2", x: "Apa yang berubah dengan presensi digital" },
      { t: "p", x: "Waktu masuk dan pulang tercatat otomatis, datanya tersimpan rapi, dan rekap kehadiran tersusun tanpa mengetik ulang. Dengan pengenalan wajah, absen harus dilakukan oleh orangnya sendiri, sehingga titip absen jauh lebih sulit." },
      { t: "h2", x: "Hal yang perlu dicek sebelum memilih sistem" },
      { t: "ul", x: [
        "Cocok dengan pola shift usahamu.",
        "Bisa dipakai di lebih dari satu outlet.",
        "Mudah dipakai karyawan tanpa pelatihan panjang.",
        "Rekapnya bisa langsung dipakai untuk menghitung gaji.",
        "Data karyawan disimpan dengan aman.",
      ] },
      { t: "p", x: "Presensi Cafe dibuat untuk kebutuhan seperti ini di usaha F&B. Kalau kamu ingin tahu apakah cocok dengan kondisi usahamu, ceritakan lewat WhatsApp dan kami bantu menilai." },
    ],
  },
  {
    slug: "tanda-usaha-butuh-aplikasi-kasir",
    title: "5 Tanda Usahamu Sudah Waktunya Pakai Aplikasi Kasir",
    desc: "Catatan manual cukup di awal, tapi ada tanda-tanda kapan usaha perlu pindah ke aplikasi kasir.",
    date: "2026-11-01",
    read: "3 menit baca",
    blocks: [
      { t: "p", x: "Buku catatan dan kalkulator memang cukup saat usaha masih kecil. Seiring bertambahnya pelanggan, cara itu mulai menghabiskan waktu dan menimbulkan selisih. Berikut tanda-tanda sudah waktunya beralih." },
      { t: "h2", x: "1. Laporan penjualan butuh waktu lama" },
      { t: "p", x: "Kalau untuk mengetahui omzet hari ini kamu harus menjumlah nota satu per satu, itu pertanda. Aplikasi kasir menyusun laporan otomatis dari setiap transaksi." },
      { t: "h2", x: "2. Stok sering tidak cocok" },
      { t: "p", x: "Barang habis tanpa disadari, atau jumlah di catatan berbeda dengan di rak. Pencatatan stok yang terhubung ke penjualan mengurangi selisih seperti ini." },
      { t: "h2", x: "3. Kamu tidak tahu produk mana yang paling laku" },
      { t: "p", x: "Tanpa data, keputusan belanja bahan dan menu hanya berdasarkan perasaan. Data penjualan membantu menentukan mana yang perlu ditambah dan mana yang bisa dikurangi." },
      { t: "h2", x: "4. Ada beberapa kasir, shift, atau cabang" },
      { t: "p", x: "Semakin banyak orang yang mencatat, semakin sulit menjaga keseragaman. Sistem terpusat membuat semua transaksi terkumpul di satu tempat." },
      { t: "h2", x: "5. Kamu ingin memantau usaha dari jauh" },
      { t: "p", x: "Aplikasi berbasis web memungkinkan pemilik melihat penjualan tanpa harus berada di lokasi." },
      { t: "p", x: "KasirHub dibuat untuk membantu usaha mengelola transaksi dan operasional dengan lebih tertib. Ceritakan alur usahamu lewat WhatsApp, kami bantu cari yang paling pas." },
    ],
  },
];
