import { Icon } from "./Icon";

// Bingkai browser untuk screenshot produk.
// Isi `shot` di lib/content.ts dengan path gambar (mis. "/shots/kasirhub.png") untuk menampilkan screenshot asli.
// Kalau kosong, tampil kerangka dashboard sementara.
export function Mock({ shot, name, icon }: { shot?: string; name: string; icon: string }) {
  return (
    <div className="mock">
      <div className="mock-bar"><i /><i /><i /><span><Icon n={icon} /> {name}</span></div>
      {shot ? (
        <img src={shot} alt={`Tampilan aplikasi ${name}`} loading="lazy" width={1280} height={800} />
      ) : (
        <div className="mock-ph" aria-hidden="true">
          <div className="mp-side" />
          <div className="mp-main">
            <b /><b /><b />
            <div className="mp-cards"><i /><i /><i /></div>
          </div>
        </div>
      )}
    </div>
  );
}
