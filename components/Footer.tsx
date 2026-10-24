export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-muted">
      <div className="wrap flex flex-wrap justify-between gap-3">
        <span><strong className="text-ink">KARYALOKAL</strong> · Berakar Lokal, Berdampak Global.</span>
        <span>© {new Date().getFullYear()} Karyalokal. Semua hak dilindungi.</span>
      </div>
    </footer>
  );
}
