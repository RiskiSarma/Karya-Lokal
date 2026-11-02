import { Icon } from "@/components/Icon";
import { Motion } from "@/components/Motion";
import { Mock } from "@/components/Mock";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { ContactForm } from "@/components/ContactForm";
import { services, products, steps, projects, faqs } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Motion />
      <div className="progress" aria-hidden="true" />
      <header className="nav">
        <div className="wrap">
          <a className="logo" href="#top" aria-label="KARYALOKAL, ke atas"><img src="/logo-mark.png" alt="" width="29" height="38" />KARYALOKAL</a>
          <nav className="links">
            <a href="#layanan">Layanan</a><a href="#produk">Produk</a><a href="#portofolio">Portofolio</a><a href="#proses">Proses</a><a href="#tentang">Tentang</a><a href="#faq">FAQ</a>
          </nav>
          <div className="nav-end">
            <a className="btn sm" href="#kontak">Konsultasi</a>
            <details className="menu">
              <summary aria-label="Menu"><Icon n="menu" /></summary>
              <div className="panel">
                <a href="#layanan">Layanan</a><a href="#produk">Produk</a><a href="#portofolio">Portofolio</a>
                <a href="#proses">Proses</a><a href="#tentang">Tentang</a><a href="#faq">FAQ</a>
              </div>
            </details>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div>
              <div className="eyebrow">Software Development &amp; Digital Solutions</div>
              <h1>Berakar Lokal, <em>Berdampak Global.</em></h1>
              <p className="lead">Kami membangun website, aplikasi bisnis, dan sistem informasi dari masalah nyata yang ditemukan di sekitar kita, untuk UMKM, perusahaan, organisasi, dan instansi.</p>
              <div className="cta">
                <a className="btn" href="#kontak">Ceritakan kebutuhanmu <Icon n="arrow" /></a>
                <a className="btn ghost" href="#produk">Lihat produk kami</a>
              </div>
            </div>
            <div className="visual" aria-hidden="true">
              <div className="blob" />
              <div className="ring" />
              <img src="/logo-mark.png" alt="" width="242" height="327" />
              <span className="chip c1"><Icon n="globe" />Website</span>
              <span className="chip c2"><Icon n="app" />Web App</span>
              <span className="chip c3"><Icon n="bolt" />Otomasi</span>
              <span className="chip c4"><Icon n="receipt" />KasirHub</span>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="track">
            {[0, 1].map((k) => (
              <div key={k}>
                {["Laravel", "Next.js", "TypeScript", "Tailwind CSS", "Alpine.js", "Docker", "Nginx", "Linux VPS"].map((t) => <span key={t + k}>{t}</span>)}
              </div>
            ))}
          </div>
        </div>

        <section className="band" id="tentang">
          <div className="wrap">
            <div className="tag" data-r>Filosofi</div>
            <h2 data-r>Karya yang lahir dari masalah di sekitar.</h2>
            <div className="philo" data-r>
              <div><h3>Karya</h3><p>Kemampuan, kreativitas, dan hasil nyata yang diciptakan lewat teknologi. Bukan sekadar janji di proposal.</p></div>
              <div><h3>Lokal</h3><p>Asal-usul, kedekatan dengan masyarakat, dan kepekaan terhadap masalah yang kami temui langsung di lingkungan sekitar.</p></div>
            </div>
            <p className="quote" data-r>Solusi yang berdampak luas tidak selalu berawal dari tempat yang besar. Kadang semuanya dimulai dari masalah sederhana di sekitar kita.</p>
          </div>
        </section>

        <section id="layanan">
          <div className="wrap">
            <div className="tag" data-r>Layanan</div>
            <h2 data-r>Dibuat sesuai cara kerja bisnismu.</h2>
            <p className="sub" data-r>Bukan template yang dipaksakan. Kami mulai dari alur kerjamu, baru menentukan teknologinya.</p>
            <div className="grid2">
              {services.map((s) => (
                <div className="card" data-r key={s.title}>
                  <div className="ic"><Icon n={s.icon} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="produk" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="tag" data-r>Produk</div>
            <h2 data-r>Produk yang kami bangun sendiri.</h2>
            <p className="sub" data-r>Karyalokal tidak hanya menerima pesanan. Kami juga memakai ilmu yang sama untuk membuat produk digital yang kami pertanggungjawabkan sendiri.</p>
            <div className="grid2">
              {products.map((p) => (
                <article className="prod" data-r key={p.name}>
                  <Mock shot={p.shot} name={p.name} icon={p.icon} />
                  <span className="by">A product by Karyalokal</span>
                  <h3><Icon n={p.icon} />{p.name}</h3>
                  <p>{p.text}</p>
                  {p.href ? (
                    <a className="btn sm" href={p.href} target="_blank" rel="noopener">Lihat paket &amp; harga <Icon n="arrow" /></a>
                  ) : (
                    <a className="btn sm" href="#kontak">Tanya {p.name} <Icon n="arrow" /></a>
                  )}
                </article>
              ))}
            </div>
            <article className="prod soon" data-r>
              <span className="badge"><Icon n="clock" />Segera hadir</span>
              <h3>Produk ketiga Karyalokal</h3>
              <p>Sedang kami siapkan. Punya masalah usaha yang menurutmu layak dibuatkan aplikasinya? Ceritakan, siapa tahu jadi produk berikutnya.</p>
              <a className="btn ghost sm" href="#kontak">Usulkan ide <Icon n="arrow" /></a>
            </article>
          </div>
        </section>

        <section className="band" id="proses">
          <div className="wrap">
            <div className="tag" data-r>Proses</div>
            <h2 data-r>Empat langkah, tanpa kejutan.</h2>
            <div className="steps">
              {steps.map((s) => (
                <div className="step" data-r key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="portofolio">
          <div className="wrap">
            <div className="tag" data-r>Portofolio</div>
            <h2 data-r>Hasil kerja yang bisa dilihat.</h2>
            <p className="sub" data-r>Masalah yang dihadapi, solusi yang dibangun, dan hasilnya. Studi kasus klien akan ditambahkan seiring proyek selesai.</p>
            <div className="grid2">
              {projects.map((p) => (
                <article className="card case" data-r key={p.title}>
                  <span className="by">{p.kind}</span>
                  <h3>{p.title}</h3>
                  <dl>
                    <dt>Masalah</dt><dd>{p.problem}</dd>
                    <dt>Solusi</dt><dd>{p.solution}</dd>
                    {p.result && (<><dt>Hasil</dt><dd>{p.result}</dd></>)}
                  </dl>
                  <ul className="chips">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" style={{ paddingTop: 0 }}>
          <div className="wrap faq">
            <div>
              <div className="tag" data-r>FAQ</div>
              <h2 data-r>Pertanyaan yang sering muncul.</h2>
              <p className="sub" data-r>Belum terjawab? Tanyakan langsung lewat WhatsApp.</p>
              <a className="btn sm" href="#kontak">Tanya lewat WhatsApp <Icon n="arrow" /></a>
            </div>
            <div className="faq-list" data-r>
              {faqs.map((f) => (
                <details className="qa" key={f.q}>
                  <summary>{f.q}<Icon n="plus" /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="kontak" style={{ paddingTop: 0 }}>
          <div className="wrap contact">
            <div>
              <div className="tag" data-r>Kontak</div>
              <h2 data-r>Punya masalah yang ingin diselesaikan?</h2>
              <p className="sub" data-r>Ceritakan singkat. Kami balas lewat WhatsApp dengan arah solusi dan perkiraan langkah awal.</p>
              <div className="info">
                <div><Icon n="pin" />Aceh, Indonesia</div>
                <div><Icon n="chat" />Konsultasi awal via WhatsApp</div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <img src="/logo.png" alt="KARYALOKAL" width="84" height="81" />
          <span>© {new Date().getFullYear()} KARYALOKAL. Berakar Lokal, Berdampak Global.</span>
          <span>Software Development &amp; Digital Solutions</span>
        </div>
      </footer>
      <WhatsAppFab />
    </>
  );
}