import type { Dict } from "@/lib/i18n";

export function Footer({ t }: { t: Dict }) {
  return (
    <footer>
      <div className="wrap">
        <img src="/logo.png" alt="KARYALOKAL" width="84" height="81" />
        <span>© {new Date().getFullYear()} {t.footer.copy}</span>
        <span>{t.footer.tag}</span>
      </div>
    </footer>
  );
}
