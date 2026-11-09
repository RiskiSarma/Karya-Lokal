import type { Locale } from "./site";

const id = {
  meta: {
    title: "Karya Lokal",
    desc: "Software development & digital solutions: pembuatan website, aplikasi bisnis, sistem informasi, dan produk digital KasirHub serta Presensi Cafe.",
    og: "Berakar Lokal, Berdampak Global.",
  },
  nav: { services: "Layanan", products: "Produk", portfolio: "Portofolio", process: "Proses", about: "Tentang", faq: "FAQ", blog: "Blog", consult: "Konsultasi" },
  hero: {
    eyebrow: "Software Development & Digital Solutions",
    h1a: "Berakar Lokal,", h1b: "Berdampak Global.",
    lead: "Kami membangun website, aplikasi bisnis, dan sistem informasi dari masalah nyata yang ditemukan di sekitar kita, untuk UMKM, perusahaan, organisasi, dan instansi.",
    cta1: "Ceritakan kebutuhanmu", cta2: "Lihat produk kami",
    chips: ["Website", "Web App", "Otomasi", "KasirHub"],
  },
  philo: {
    tag: "Filosofi", h2: "Karya yang lahir dari masalah di sekitar.",
    karya: ["Karya", "Kemampuan, kreativitas, dan hasil nyata yang diciptakan lewat teknologi. Bukan sekadar janji di proposal."],
    lokal: ["Lokal", "Asal-usul, kedekatan dengan masyarakat, dan kepekaan terhadap masalah yang kami temui langsung di lingkungan sekitar."],
    quote: "Solusi yang berdampak luas tidak selalu berawal dari tempat yang besar. Kadang semuanya dimulai dari masalah sederhana di sekitar kita.",
  },
  services: {
    tag: "Layanan", h2: "Dibuat sesuai cara kerja bisnismu.",
    sub: "Bukan template yang dipaksakan. Kami mulai dari alur kerjamu, baru menentukan teknologinya.",
    items: [
      { icon: "globe", title: "Custom Website", text: "Company profile, landing page, dan website bisnis yang cepat, rapi di ponsel, dan mudah ditemukan." },
      { icon: "app", title: "Web Application", text: "Aplikasi berbasis web untuk operasional harian: pesanan, stok, pelanggan, hingga laporan." },
      { icon: "bolt", title: "Business Automation", text: "Pekerjaan manual yang berulang diubah jadi alur otomatis, supaya timmu fokus ke hal yang penting." },
      { icon: "shield", title: "Software Maintenance", text: "Perbaikan bug, pembaruan fitur, keamanan, dan pemantauan server setelah sistem berjalan." },
    ],
  },
  products: {
    tag: "Produk", h2: "Produk yang kami bangun sendiri.",
    sub: "Karyalokal tidak hanya menerima pesanan. Kami juga memakai ilmu yang sama untuk membuat produk digital yang kami pertanggungjawabkan sendiri.",
    by: "A product by Karyalokal", detail: "Lihat detail", close: "Tutup", features: "Fitur utama", stack: "Teknologi", ask: "Tanya produk ini",
    items: [
      { key: "kasirhub", icon: "receipt", name: "KasirHub", text: "Aplikasi kasir untuk membantu bisnis mengelola transaksi dan operasional dengan lebih tertib.", detail: { intro: "KasirHub adalah aplikasi kasir berbasis web untuk membantu usaha mencatat penjualan dan memantau operasional tanpa pembukuan manual. Satu platform bisa dipakai banyak usaha sekaligus (multi-tenant).", features: ["Manajemen shift kasir", "Dashboard pendapatan", "Kode kupon dan diskon", "Split bill", "Retur dan refund", "Kustomisasi struk", "Program loyalitas yang bisa diaktifkan sesuai kebutuhan", "Ekspor laporan ke Excel"], stack: ["Laravel 12", "Blade", "Alpine.js", "Tailwind CSS", "MySQL"] } },
      { key: "presensi", icon: "clock", name: "Presensi Cafe", text: "Presensi karyawan untuk lingkungan usaha seperti kafe dan warkop, tanpa buku absen kertas.", detail: { intro: "Presensi Cafe adalah sistem presensi karyawan berbasis pengenalan wajah untuk usaha F&B. Karyawan absen dengan wajahnya sendiri, sehingga titip absen jauh lebih sulit. Satu platform bisa melayani banyak usaha (multi-tenant).", features: ["Presensi dengan pengenalan wajah", "Mencegah titip absen", "Satu platform untuk banyak usaha (multi-tenant)", "Rekap kehadiran karyawan"], stack: ["Laravel 12 (REST API)", "Next.js 14", "TypeScript", "Python FastAPI", "Docker"] } },
    ],
    soon: { badge: "Segera hadir", title: "Produk ketiga Karyalokal", text: "Sedang kami siapkan. Punya masalah usaha yang menurutmu layak dibuatkan aplikasinya? Ceritakan, siapa tahu jadi produk berikutnya.", btn: "Usulkan ide" },
  },
  steps: {
    tag: "Proses", h2: "Empat langkah, tanpa kejutan.",
    items: [
      { title: "Dengar", text: "Kami pelajari masalah dan alur kerjamu dulu." },
      { title: "Rancang", text: "Ruang lingkup, tampilan, dan estimasi disepakati bersama." },
      { title: "Bangun", text: "Dikerjakan bertahap, kamu bisa melihat dan mencoba hasilnya." },
      { title: "Rawat", text: "Dipasang di server, dipantau, dan dirawat setelah rilis." },
    ],
  },
  projects: {
    tag: "Portofolio", h2: "Hasil kerja yang bisa dilihat.",
    sub: "Masalah yang dihadapi, solusi yang dibangun, dan hasilnya. Studi kasus klien akan ditambahkan seiring proyek selesai.",
    labels: ["Masalah", "Solusi", "Hasil"], visit: "Kunjungi website",
    // result: isi hanya kalau ada hasil nyata; kosong = baris tidak tampil.
    items: [
      { key: "kasirhub", title: "KasirHub", kind: "Produk sendiri", problem: "Pemilik usaha masih mencatat transaksi dan stok manual sehingga laporan lambat dan sering selisih.", solution: "Aplikasi kasir berbasis web dengan pencatatan transaksi dan laporan penjualan yang tersusun otomatis.", result: "", tags: ["Web app", "Multi-tenant", "Laravel"] },
      { key: "presensi", title: "Presensi Cafe", kind: "Produk sendiri", problem: "Absen kertas di kafe dan warkop rawan titip absen dan merepotkan saat rekap gaji.", solution: "Presensi karyawan berbasis pengenalan wajah dengan rekap kehadiran otomatis per outlet.", result: "", tags: ["Face recognition", "Multi-tenant", "Laravel"] },
    ],
  },
  faq: {
    tag: "FAQ", h2: "Pertanyaan yang sering muncul.", sub: "Belum terjawab? Tanyakan langsung lewat WhatsApp.", btn: "Tanya lewat WhatsApp",
    items: [
      { q: "Berapa biaya pembuatan website atau aplikasi?", a: "Tergantung kebutuhan dan ruang lingkupnya, jadi kami diskusikan dulu lewat WhatsApp lalu kirim penawaran yang jelas. Untuk KasirHub dan Presensi Cafe, paket harga sudah tersedia di website masing-masing." },
      { q: "Berapa lama pengerjaannya?", a: "Bergantung pada fitur dan kompleksitasnya. Setelah memahami kebutuhanmu, kami beri estimasi waktu, dan pengerjaan dilakukan bertahap sehingga kamu bisa melihat progresnya." },
      { q: "Aplikasi yang saya butuhkan tidak ada di daftar layanan, bisa?", a: "Bisa. Karyalokal memulai dari masalah dan alur kerjamu, bukan dari template. Ceritakan kebutuhannya, kami bantu petakan solusinya." },
      { q: "Apakah ada dukungan setelah sistem selesai?", a: "Ada. Layanan Software Maintenance mencakup perbaikan bug, pembaruan fitur, keamanan, dan pemantauan server setelah sistem berjalan." },
      { q: "Siapa yang mengurus server, domain, dan SSL?", a: "Kami bisa membantu deploy, pengaturan domain, dan SSL di server. Rinciannya, termasuk biaya hosting, dibahas saat diskusi awal." },
      { q: "Bagaimana cara memulai?", a: "Kirim pesan lewat WhatsApp atau isi formulir kontak. Kami balas dengan arah solusi dan langkah awal." },
    ],
  },
  contact: {
    tag: "Kontak", h2: "Punya masalah yang ingin diselesaikan?",
    sub: "Ceritakan singkat. Kami balas lewat WhatsApp dengan arah solusi dan perkiraan langkah awal.",
    loc: "Aceh, Indonesia", chat: "Konsultasi awal via WhatsApp",
    form: {
      name: "Nama", biz: "Bisnis / instansi", need: "Kebutuhan",
      needs: ["Website", "Aplikasi / sistem informasi", "Otomasi proses", "KasirHub", "Presensi Cafe", "Lainnya"],
      msg: "Ceritakan masalahnya", waErr: "Nomor WhatsApp belum diatur (NEXT_PUBLIC_WA_NUMBER).", submit: "Kirim lewat WhatsApp",
      hi: "Halo Karyalokal, saya", from: "dari", needLabel: "Kebutuhan",
    },
  },
  footer: { copy: "KARYALOKAL. Berakar Lokal, Berdampak Global.", tag: "Software Development & Digital Solutions" },
  fab: { label: "Chat WhatsApp", text: "Halo Karyalokal, saya ingin konsultasi." },
  blog: { tag: "Blog", h2: "Catatan untuk pemilik usaha.", sub: "Tulisan singkat soal digitalisasi usaha kecil dan menengah.", cta: "Ingin dibantu untuk usahamu?", ctaBtn: "Konsultasi lewat WhatsApp", back: "Semua artikel" },
};

export type Dict = typeof id;

const en: Dict = {
  meta: {
    title: "Karya Lokal",
    desc: "Software development & digital solutions: websites, business applications, information systems, and our own products KasirHub and Presensi Cafe.",
    og: "Rooted Locally, Impacting Globally.",
  },
  nav: { services: "Services", products: "Products", portfolio: "Portfolio", process: "Process", about: "About", faq: "FAQ", blog: "Blog", consult: "Consult" },
  hero: {
    eyebrow: "Software Development & Digital Solutions",
    h1a: "Rooted Locally,", h1b: "Impacting Globally.",
    lead: "We build websites, business applications, and information systems from real problems found around us, for SMEs, companies, organizations, and institutions.",
    cta1: "Tell us what you need", cta2: "See our products",
    chips: ["Website", "Web App", "Automation", "KasirHub"],
  },
  philo: {
    tag: "Philosophy", h2: "Work born from the problems around us.",
    karya: ["Craft", "Skill, creativity, and real results created through technology. Not just promises in a proposal."],
    lokal: ["Local", "Roots, closeness to the community, and sensitivity to problems we encounter firsthand in our surroundings."],
    quote: "Solutions with wide impact do not always start in big places. Sometimes it all begins with a simple problem around us.",
  },
  services: {
    tag: "Services", h2: "Built around how your business works.",
    sub: "Not a template forced on you. We start from your workflow, then choose the technology.",
    items: [
      { icon: "globe", title: "Custom Website", text: "Company profiles, landing pages, and business websites that are fast, tidy on mobile, and easy to find." },
      { icon: "app", title: "Web Application", text: "Web apps for daily operations: orders, stock, customers, and reports." },
      { icon: "bolt", title: "Business Automation", text: "Repetitive manual work turned into automated flows, so your team can focus on what matters." },
      { icon: "shield", title: "Software Maintenance", text: "Bug fixes, feature updates, security, and server monitoring after the system goes live." },
    ],
  },
  products: {
    tag: "Products", h2: "Products we build ourselves.",
    sub: "Karyalokal does not only take orders. We use the same expertise to build digital products we stand behind.",
    by: "A product by Karyalokal", detail: "View details", close: "Close", features: "Key features", stack: "Technology", ask: "Ask about this product",
    items: [
      { key: "kasirhub", icon: "receipt", name: "KasirHub", text: "A point-of-sale app that helps businesses manage transactions and operations more neatly.", detail: { intro: "KasirHub is a web-based point-of-sale app that helps businesses record sales and monitor operations without manual bookkeeping. One platform can serve many businesses at once (multi-tenant).", features: ["Cashier shift management", "Revenue dashboard", "Coupon and discount codes", "Split billing", "Returns and refunds", "Receipt customization", "Loyalty program you can switch on as needed", "Excel report export"], stack: ["Laravel 12", "Blade", "Alpine.js", "Tailwind CSS", "MySQL"] } },
      { key: "presensi", icon: "clock", name: "Presensi Cafe", text: "Employee attendance for places like cafes and coffee shops, without paper sign-in books.", detail: { intro: "Presensi Cafe is a face-recognition attendance system for food and beverage businesses. Employees clock in with their own face, which makes buddy punching much harder. One platform can serve many businesses (multi-tenant).", features: ["Face-recognition attendance", "Prevents buddy punching", "One platform for many businesses (multi-tenant)", "Employee attendance summaries"], stack: ["Laravel 12 (REST API)", "Next.js 14", "TypeScript", "Python FastAPI", "Docker"] } },
    ],
    soon: { badge: "Coming soon", title: "Karyalokal's third product", text: "In the works. Got a business problem you think deserves its own app? Tell us, it might become the next product.", btn: "Suggest an idea" },
  },
  steps: {
    tag: "Process", h2: "Four steps, no surprises.",
    items: [
      { title: "Listen", text: "We study your problem and workflow first." },
      { title: "Design", text: "Scope, look, and estimate are agreed together." },
      { title: "Build", text: "Delivered in stages, so you can see and try the results." },
      { title: "Maintain", text: "Deployed on a server, monitored, and maintained after release." },
    ],
  },
  projects: {
    tag: "Portfolio", h2: "Work you can see.",
    sub: "The problem, the solution we built, and the result. Client case studies will be added as projects complete.",
    labels: ["Problem", "Solution", "Result"], visit: "Visit website",
    items: [
      { key: "kasirhub", title: "KasirHub", kind: "Own product", problem: "Business owners still record sales and stock by hand, so reports are slow and often off.", solution: "A web-based point-of-sale with transaction records and sales reports compiled automatically.", result: "", tags: ["Web app", "Multi-tenant", "Laravel"] },
      { key: "presensi", title: "Presensi Cafe", kind: "Own product", problem: "Paper sign-in at cafes and coffee shops invites buddy punching and makes payroll tallies tedious.", solution: "Face-recognition attendance with automatic attendance summaries per outlet.", result: "", tags: ["Face recognition", "Multi-tenant", "Laravel"] },
    ],
  },
  faq: {
    tag: "FAQ", h2: "Questions we often get.", sub: "Not answered here? Ask us directly on WhatsApp.", btn: "Ask on WhatsApp",
    items: [
      { q: "How much does a website or app cost?", a: "It depends on your needs and scope, so we discuss it on WhatsApp first and then send a clear quote. KasirHub and Presensi Cafe have plans and pricing on their own websites." },
      { q: "How long does it take?", a: "It depends on features and complexity. Once we understand your needs we give a time estimate, and work is delivered in stages so you can follow progress." },
      { q: "What I need is not in your service list. Can you still help?", a: "Yes. Karyalokal starts from your problem and workflow, not from a template. Tell us what you need and we will help map out the solution." },
      { q: "Is there support after the system is finished?", a: "Yes. Our Software Maintenance service covers bug fixes, feature updates, security, and server monitoring after the system goes live." },
      { q: "Who handles the server, domain, and SSL?", a: "We can help with deployment, domain setup, and SSL on the server. The details, including hosting costs, are discussed at the start." },
      { q: "How do I get started?", a: "Send a message on WhatsApp or fill in the contact form. We reply with a solution direction and first steps." },
    ],
  },
  contact: {
    tag: "Contact", h2: "Have a problem you want solved?",
    sub: "Tell us briefly. We reply on WhatsApp with a direction for the solution and the first steps.",
    loc: "Aceh, Indonesia", chat: "Initial consultation via WhatsApp",
    form: {
      name: "Name", biz: "Business / organization", need: "What do you need",
      needs: ["Website", "App / information system", "Process automation", "KasirHub", "Presensi Cafe", "Other"],
      msg: "Describe the problem", waErr: "WhatsApp number is not set (NEXT_PUBLIC_WA_NUMBER).", submit: "Send via WhatsApp",
      hi: "Hello Karyalokal, I'm", from: "from", needLabel: "Need",
    },
  },
  footer: { copy: "KARYALOKAL. Rooted Locally, Impacting Globally.", tag: "Software Development & Digital Solutions" },
  fab: { label: "Chat on WhatsApp", text: "Hello Karyalokal, I'd like a consultation." },
  blog: id.blog,
};

export const dict: Record<Locale, Dict> = { id, en };
