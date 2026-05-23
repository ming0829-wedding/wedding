/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const IMAGE_ROOT = path.join(__dirname, "..", "public", "image");
const GALLERY_DIR = path.join(IMAGE_ROOT, "gallery");

const HERO_IMAGES = [
  "main-card.jpeg",
  "main-card.webp",
  "poster-image.jpeg",
  "weddingholl-image.jpeg",
  "location-image.png",
  "ending-image.png",
];

const HERO_WIDTH = 960;
const HERO_QUALITY = 78;
const GALLERY_WIDTH = 640;
const GALLERY_QUALITY = 75;

async function compress(filePath, width, quality) {
  const ext = path.extname(filePath).toLowerCase();
  const tmpPath = filePath + ".tmp";

  let pipeline = sharp(filePath)
    .rotate()
    .resize({ width, withoutEnlargement: true });

  if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({ quality, mozjpeg: true });
  } else if (ext === ".png") {
    pipeline = pipeline.png({ quality, palette: true, compressionLevel: 9 });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality });
  } else {
    return null;
  }

  await pipeline.toFile(tmpPath);
  const before = fs.statSync(filePath).size;
  const after = fs.statSync(tmpPath).size;
  fs.renameSync(tmpPath, filePath);
  return { before, after };
}

function fmtKB(bytes) {
  return (bytes / 1024).toFixed(0) + "KB";
}

(async () => {
  let totalBefore = 0;
  let totalAfter = 0;

  console.log("== Hero images ==");
  for (const name of HERO_IMAGES) {
    const full = path.join(IMAGE_ROOT, name);
    if (!fs.existsSync(full)) {
      console.log(`  (skip) ${name} not found`);
      continue;
    }
    const r = await compress(full, HERO_WIDTH, HERO_QUALITY);
    if (r) {
      totalBefore += r.before;
      totalAfter += r.after;
      console.log(`  ${name}: ${fmtKB(r.before)} -> ${fmtKB(r.after)}`);
    }
  }

  console.log("== Gallery ==");
  const files = fs
    .readdirSync(GALLERY_DIR)
    .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
    .sort();
  for (const f of files) {
    const full = path.join(GALLERY_DIR, f);
    const r = await compress(full, GALLERY_WIDTH, GALLERY_QUALITY);
    if (r) {
      totalBefore += r.before;
      totalAfter += r.after;
      console.log(`  ${f}: ${fmtKB(r.before)} -> ${fmtKB(r.after)}`);
    }
  }

  console.log("\n== Total ==");
  console.log(
    `${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`,
  );
})();
