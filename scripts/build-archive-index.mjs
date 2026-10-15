import fs from "fs";
import path from "path";

const archiveDir = "public/images/dogs/archive";
const files = fs.readdirSync(archiveDir).filter((f) => f.endsWith(".jpg")).sort();

let html = `<!DOCTYPE html>
<html>
<head>
<title>Dog Archive Visual Catalog</title>
<style>
  body { font-family: system-ui, sans-serif; background: #121212; color: #eee; padding: 24px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
  .card { background: #1e1e1e; border: 1px solid #333; border-radius: 8px; overflow: hidden; }
  .card img { width: 100%; height: 240px; object-fit: contain; background: #000; }
  .info { padding: 10px; font-size: 13px; }
  .info strong { color: #f59e0b; }
</style>
</head>
<body>
<h1>Dog Archive Catalog (59 Photos)</h1>
<div class="grid">
`;

files.forEach((f, idx) => {
  html += `  <div class="card">
    <img src="/images/dogs/archive/${f}" alt="${f}" />
    <div class="info">
      <strong>#${idx + 1}: ${f}</strong>
    </div>
  </div>\n`;
});

html += `</div></body></html>`;

fs.writeFileSync("public/dog-archive-index.html", html, "utf8");
console.log(`Created public/dog-archive-index.html with ${files.length} images.`);
