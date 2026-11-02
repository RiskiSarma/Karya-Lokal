import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

// Batas sederhana: 5 kiriman per IP per 10 menit (di memori, reset saat server restart).
const hits = new Map<string, number[]>();

const one = (v: unknown, max: number) => String(v ?? "").replace(/\s+/g, " ").trim().slice(0, max);
const many = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  if (recent.length >= 5) return NextResponse.json({ ok: false }, { status: 429 });
  hits.set(ip, [...recent, now]);

  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (b.website) return NextResponse.json({ ok: true }); // honeypot: bot mengisi kolom tersembunyi

  const lead = {
    at: new Date().toISOString(),
    lang: one(b.lang, 5),
    nama: one(b.nama, 100),
    bisnis: one(b.bisnis, 150),
    butuh: one(b.butuh, 80),
    pesan: many(b.pesan, 2000),
  };
  if (!lead.nama || !lead.pesan) return NextResponse.json({ ok: false }, { status: 400 });

  let saved = false;
  try {
    const dir = process.env.LEADS_DIR || path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "leads.jsonl"), JSON.stringify(lead) + "\n");
    saved = true;
  } catch (e) {
    console.error("lead: gagal menyimpan file", e);
  }

  // Email lewat Resend (opsional): isi RESEND_API_KEY dan LEAD_TO_EMAIL
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  if (key && to) {
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL || "Karyalokal <onboarding@resend.dev>",
          to: [to],
          subject: `Lead baru: ${lead.nama} (${lead.butuh})`,
          text: `Nama: ${lead.nama}\nBisnis: ${lead.bisnis || "-"}\nKebutuhan: ${lead.butuh}\nBahasa: ${lead.lang}\nWaktu: ${lead.at}\n\n${lead.pesan}`,
        }),
      });
      saved = saved || r.ok;
      if (!r.ok) console.error("lead: Resend", r.status);
    } catch (e) {
      console.error("lead: gagal kirim email", e);
    }
  }
  return NextResponse.json({ ok: saved }, { status: saved ? 200 : 500 });
}
