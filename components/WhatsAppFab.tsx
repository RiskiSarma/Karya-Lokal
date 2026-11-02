import { Icon } from "./Icon";

// Tombol WhatsApp melayang. Tidak tampil kalau NEXT_PUBLIC_WA_NUMBER belum diisi.
export function WhatsAppFab({ label, text }: { label: string; text: string }) {
  const wa = process.env.NEXT_PUBLIC_WA_NUMBER;
  if (!wa) return null;
  return (
    <a className="fab" href={`https://wa.me/${wa}?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener" aria-label={label}>
      <Icon n="chat" />
      <span>{label}</span>
    </a>
  );
}
