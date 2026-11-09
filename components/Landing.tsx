import { Icon } from "./Icon";
import { Mock } from "./Mock";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { ContactForm } from "./ContactForm";
import { ProductModal } from "./ProductModal";
import { dict } from "@/lib/i18n";
import { links, type Locale } from "@/lib/site";

const stack = ["Laravel", "Next.js", "TypeScript", "Tailwind CSS", "Alpine.js", "Docker", "Nginx", "Linux VPS"];

export function Landing({ lang }: { lang: Locale }) {
  const t = dict[lang];
  const c = t.hero.chips;
  return (
    <>
      <div className="progress" aria-hidden="true" />
      <Header t={t} lang={lang} />

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div>
              <div className="eyebrow">{t.hero.eyebrow}</div>
              <h1>{t.hero.h1a} <em>{t.hero.h1b}</em></h1>
              <p className="lead">{t.hero.lead}</p>
              <div className="cta">
                <a className="btn" href="#kontak">{t.hero.cta1} <Icon n="arrow" /></a>
                <a className="btn ghost" href="#produk">{t.hero.cta2}</a>
              </div>
            </div>
            <div className="visual" aria-hidden="true">
              <div className="blob" />
              <div className="ring" />
              <img src="/logo-mark.png" alt="" width="242" height="327" />
              <span className="chip c1"><Icon n="globe" />{c[0]}</span>
              <span className="chip c2"><Icon n="app" />{c[1]}</span>
              <span className="chip c3"><Icon n="bolt" />{c[2]}</span>
              <span className="chip c4"><Icon n="receipt" />{c[3]}</span>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="track">
            {[0, 1].map((k) => (
              <div key={k}>{stack.map((s) => <span key={s + k}>{s}</span>)}</div>
            ))}
          </div>
        </div>

        <section className="band" id="tentang">
          <div className="wrap">
            <div className="tag" data-r>{t.philo.tag}</div>
            <h2 data-r>{t.philo.h2}</h2>
            <div className="philo" data-r>
              <div><h3>{t.philo.karya[0]}</h3><p>{t.philo.karya[1]}</p></div>
              <div><h3>{t.philo.lokal[0]}</h3><p>{t.philo.lokal[1]}</p></div>
            </div>
            <p className="quote" data-r>{t.philo.quote}</p>
          </div>
        </section>

        <section id="layanan">
          <div className="wrap">
            <div className="tag" data-r>{t.services.tag}</div>
            <h2 data-r>{t.services.h2}</h2>
            <p className="sub" data-r>{t.services.sub}</p>
            <div className="grid2">
              {t.services.items.map((s) => (
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
            <div className="tag" data-r>{t.products.tag}</div>
            <h2 data-r>{t.products.h2}</h2>
            <p className="sub" data-r>{t.products.sub}</p>
            <div className="grid2">
              {t.products.items.map((p) => {
                const l = links[p.key] ?? { href: "", shot: "" };
                return (
                  <article className="prod" data-r key={p.key}>
                    <Mock shot={l.shot} name={p.name} icon={p.icon} />
                    <span className="by">{t.products.by}</span>
                    <h3><Icon n={p.icon} />{p.name}</h3>
                    <p>{p.text}</p>
                    <ProductModal p={p} t={t.products} />
                  </article>
                );
              })}
            </div>
            <article className="prod soon" data-r>
              <span className="badge"><Icon n="clock" />{t.products.soon.badge}</span>
              <h3>{t.products.soon.title}</h3>
              <p>{t.products.soon.text}</p>
              <a className="btn ghost sm" href="#kontak">{t.products.soon.btn} <Icon n="arrow" /></a>
            </article>
          </div>
        </section>

        <section className="band" id="proses">
          <div className="wrap">
            <div className="tag" data-r>{t.steps.tag}</div>
            <h2 data-r>{t.steps.h2}</h2>
            <div className="steps">
              {t.steps.items.map((s) => (
                <div className="step" data-r key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="portofolio">
          <div className="wrap">
            <div className="tag" data-r>{t.projects.tag}</div>
            <h2 data-r>{t.projects.h2}</h2>
            <p className="sub" data-r>{t.projects.sub}</p>
            <div className="grid2">
              {t.projects.items.map((p) => (
                <article className="card case" data-r key={p.title}>
                  <span className="by">{p.kind}</span>
                  <h3>{p.title}</h3>
                  <dl>
                    <dt>{t.projects.labels[0]}</dt><dd>{p.problem}</dd>
                    <dt>{t.projects.labels[1]}</dt><dd>{p.solution}</dd>
                    {p.result && (<><dt>{t.projects.labels[2]}</dt><dd>{p.result}</dd></>)}
                  </dl>
                  <ul className="chips">{p.tags.map((x) => <li key={x}>{x}</li>)}</ul>
                  {links[p.key]?.href && (
                    <a className="btn ghost sm" href={links[p.key].href} target="_blank" rel="noopener">{t.projects.visit} <Icon n="arrow" /></a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" style={{ paddingTop: 0 }}>
          <div className="wrap faq">
            <div>
              <div className="tag" data-r>{t.faq.tag}</div>
              <h2 data-r>{t.faq.h2}</h2>
              <p className="sub" data-r>{t.faq.sub}</p>
              <a className="btn sm" href="#kontak">{t.faq.btn} <Icon n="arrow" /></a>
            </div>
            <div className="faq-list" data-r>
              {t.faq.items.map((f) => (
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
              <div className="tag">{t.contact.tag}</div>
              <h2>{t.contact.h2}</h2>
              <p className="sub">{t.contact.sub}</p>
              <div className="info">
                <div><Icon n="pin" />{t.contact.loc}</div>
                <div><Icon n="chat" />{t.contact.chat}</div>
              </div>
            </div>
            <ContactForm t={t.contact.form} lang={lang} />
          </div>
        </section>
      </main>

      <Footer t={t} />
      <WhatsAppFab label={t.fab.label} text={t.fab.text} />
    </>
  );
}
