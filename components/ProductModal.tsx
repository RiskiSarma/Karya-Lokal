"use client";
import { useRef } from "react";
import { Icon } from "./Icon";

type P = { icon: string; name: string; detail: { intro: string; features: string[]; stack: string[] } };
type L = { detail: string; close: string; features: string; stack: string; ask: string };

// Tombol "Lihat detail" + modal berisi penjelasan produk. Memakai <dialog> bawaan browser:
// Esc menutup, fokus terkunci di modal, dan klik area gelap juga menutup.
export function ProductModal({ p, t }: { p: P; t: L }) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = () => {
    ref.current?.showModal();
    document.body.style.overflow = "hidden";
  };
  const close = () => ref.current?.close();

  return (
    <>
      <button type="button" className="btn sm" onClick={open}>{t.detail} <Icon n="arrow" /></button>
      <dialog
        ref={ref}
        className="modal"
        aria-label={p.name}
        onClose={() => { document.body.style.overflow = ""; }}
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      >
        <div className="modal-in">
          <button type="button" className="modal-x" onClick={close} aria-label={t.close}><Icon n="x" /></button>
          <h3><Icon n={p.icon} />{p.name}</h3>
          <p className="modal-intro">{p.detail.intro}</p>
          <h4>{t.features}</h4>
          <ul className="checks">
            {p.detail.features.map((f) => <li key={f}><Icon n="check" />{f}</li>)}
          </ul>
          <h4>{t.stack}</h4>
          <ul className="chips">
            {p.detail.stack.map((s) => <li key={s}>{s}</li>)}
          </ul>
          <a className="btn sm" href="#kontak" onClick={close}>{t.ask} <Icon n="arrow" /></a>
        </div>
      </dialog>
    </>
  );
}
