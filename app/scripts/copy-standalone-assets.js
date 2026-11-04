// Dijalankan otomatis setelah `npm run build` (script "postbuild").
// Mode standalone tidak menyalin public/ dan .next/static, jadi kita salin di sini
// supaya `node .next/standalone/server.js` langsung menampilkan logo, gambar, CSS, dan JS.
const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const standalone = path.join(root, ".next", "standalone");

if (!fs.existsSync(standalone)) {
  console.log("[postbuild] .next/standalone tidak ada, dilewati.");
  process.exit(0);
}

function copy(from, to) {
  if (!fs.existsSync(from)) return;
  fs.rmSync(to, { recursive: true, force: true });
  fs.cpSync(from, to, { recursive: true });
  console.log(`[postbuild] ${path.relative(root, from)} -> ${path.relative(root, to)}`);
}

copy(path.join(root, "public"), path.join(standalone, "public"));
copy(path.join(root, ".next", "static"), path.join(standalone, ".next", "static"));