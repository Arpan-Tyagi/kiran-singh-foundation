import fs from "fs";
import path from "path";
import sharp from "sharp";

async function analyzeAll() {
  console.log("Analyzing all 59 archive images...");
  const archiveDir = "public/images/dogs/archive";
  const files = fs.readdirSync(archiveDir).filter(f => f.endsWith(".jpg")).sort();

  console.log(`Found ${files.length} archive files.`);
  
  const results = [];
  for (const f of files) {
    const fullPath = path.join(archiveDir, f);
    const meta = await sharp(fullPath).metadata();
    const stats = fs.statSync(fullPath);
    results.push({
      file: f,
      width: meta.width,
      height: meta.height,
      sizeKB: (stats.size / 1024).toFixed(1),
    });
  }

  console.log(JSON.stringify(results, null, 2));
}

analyzeAll().catch(console.error);
