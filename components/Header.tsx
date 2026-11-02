import { Icon } from "./Icon";
import type { Dict } from "@/lib/i18n";
import type { Locale } from "@/lib/site";

// p = prefix link anchor: "" di landing, "/" di halaman lain (mis. blog).
export function Header({ t, lang, p = "" }: { t: Dict; lang: Locale; p?: string }) {
  const n = t.nav;
  const items: [string, string][] = [["layanan", n.services], ["produk", n.products], ["portofolio", n.portfolio], ["proses", n.process], ["tentang", n.about], ["faq", n.faq]];
  const all = (
    <>
      {items.map(([k, l]) => <a key={k} href={`${p}#${k}`}>{l}</a>)}
      {lang === "id" && <a href="/blog">{n.blog}</a>}
    </>
  );
  const home = lang === "id" ? "/" : "/en";
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href={`${p || home}#top`} aria-label="KARYALOKAL"><img src="/logo-mark.png" alt="" width="29" height="38" />KARYALOKAL</a>
        <nav className="links">{all}</nav>
        <div className="nav-end">
          <a className="lang" href={lang === "id" ? "/en" : "/"} hrefLang={lang === "id" ? "en" : "id"}>{lang === "id" ? "EN" : "ID"}</a>
          <a className="btn sm" href={`${p}#kontak`}>{n.consult}</a>
          <details className="menu">
            <summary aria-label="Menu"><Icon n="menu" /></summary>
            <div className="panel">{all}</div>
          </details>
        </div>
      </div>
    </header>
  );
}
