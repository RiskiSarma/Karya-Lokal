"use client";
import { useState } from "react";
import { Icon } from "./Icon";

export function ContactForm() {
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const wa = process.env.NEXT_PUBLIC_WA_NUMBER;
    if (!wa || wa.includes("X")) {
      setError("Nomor WhatsApp belum diatur (NEXT_PUBLIC_WA_NUMBER).");
      return;
    }
    setError("");
    const d = new FormData(e.currentTarget);
    const bisnis = d.get("bisnis");
    const text =
      `Halo Karyalokal, saya ${d.get("nama")}${bisnis ? ` dari ${bisnis}` : ""}.\n` +
      `Kebutuhan: ${d.get("butuh")}\n${d.get("pesan")}`;
    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Nama<input name="nama" required autoComplete="name" /></label>
      <label>Bisnis / instansi<input name="bisnis" autoComplete="organization" /></label>
      <label>
        Kebutuhan
        <select name="butuh">
          <option>Website</option>
          <option>Aplikasi / sistem informasi</option>
          <option>Otomasi proses</option>
          <option>KasirHub</option>
          <option>Presensi Cafe</option>
          <option>Lainnya</option>
        </select>
      </label>
      <label>Ceritakan masalahnya<textarea name="pesan" rows={4} required /></label>
      {error && <p className="err">{error}</p>}
      <button className="btn" type="submit"><Icon n="chat" />Kirim lewat WhatsApp</button>
    </form>
  );
}
