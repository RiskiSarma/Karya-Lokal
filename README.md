# KARYALOKAL

Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Lokal
    cp .env.example .env.local   # isi NEXT_PUBLIC_WA_NUMBER, format 62xxxxxxxxxx
    npm install
    npm run dev                  # http://localhost:3000

## Isi konten
Edit `lib/content.ts`: layanan, produk (isi `href` kalau web produk sudah live), proses, dan `projects` (studi kasus).
Isi `result` hanya kalau ada hasil nyata.

## VPS (Docker + Nginx + SSL)
    cp .env.example .env         # isi nomor WhatsApp
    docker compose up -d --build
    sudo certbot certonly --nginx -d karyalokal.id -d www.karyalokal.id
    sudo cp deploy/nginx.conf /etc/nginx/sites-available/karyalokal   # ganti domain
    sudo ln -s /etc/nginx/sites-available/karyalokal /etc/nginx/sites-enabled/
    sudo nginx -t && sudo systemctl reload nginx

Update: `git pull && docker compose up -d --build`
