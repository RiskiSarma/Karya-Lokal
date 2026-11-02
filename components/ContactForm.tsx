"use client";
import { useState } from "react";
import { Icon } from "./Icon";
import type { Dict } from "@/lib/i18n";

export function ContactForm({ t, lang }: { t: Dict["contact"]["form"]; lang: string }) {
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const nama = String(d.get("nama") ?? "");
    const bisnis = String(d.get("bisnis") ?? "");
    const butuh = String(d.get("butuh") ?? "");
    const pesan = String(d.get("pesan") ?? "");

    // Simpan lead ke server (tidak ditunggu, supaya WhatsApp tetap terbuka tanpa diblokir browser).
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lang, nama, bisnis, butuh, pesan, website: d.get("website") }),
      keepalive: true,
    }).catch(() => {});

    const wa = process.env.NEXT_PUBLIC_WA_NUMBER;
    if (!wa || wa.includes("X")) {
      setError(t.waErr);
      return;
    }
    setError("");
    const text = `${t.hi} ${nama}${bisnis ? ` ${t.from} ${bisnis}` : ""}.\n${t.needLabel}: ${butuh}\n${pesan}`;
    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit}>
      <label>{t.name}<input name="nama" required maxLength={100} autoComplete="name" /></label>
      <label>{t.biz}<input name="bisnis" maxLength={150} autoComplete="organization" /></label>
      <label>
        {t.need}
        <select name="butuh">{t.needs.map((o) => <option key={o}>{o}</option>)}</select>
      </label>
      <label>{t.msg}<textarea name="pesan" rows={4} required maxLength={2000} /></label>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {error && <p className="err">{error}</p>}
      <button className="btn" type="submit"><Icon n="chat" />{t.submit}</button>
    </form>
  );
}
