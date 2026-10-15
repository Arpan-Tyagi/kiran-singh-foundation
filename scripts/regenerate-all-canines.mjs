import sharp from "sharp";
import fs from "fs";
import path from "path";

const CANINE_DEFINITIONS = [
  // 11 Flagship Rescues (Ordered a through k)
  {
    id: "dog-001",
    name: "Bujo",
    dest: "public/images/dogs/bujo.jpg",
    archive: "dog-evidence-36.jpg",
    crop: { left: 150, top: 40, width: 1000, height: 1000 },
    description: "Curled tan & white pup with paws, face, and ears prominent on embroidered bed"
  },
  {
    id: "dog-002",
    name: "Jujo",
    dest: "public/images/dogs/jujo.jpg",
    archive: "dog-evidence-36.jpg",
    crop: { left: 450, top: 350, width: 850, height: 850 },
    description: "Inseparable brother to Bujo, centered with white blaze and curled body"
  },
  {
    id: "dog-003",
    name: "Khujo",
    dest: "public/images/dogs/khujo.jpg",
    archive: "dog-evidence-20.jpg",
    crop: { left: 420, top: 380, width: 780, height: 780 },
    description: "Curled dark brindle pup sleeping peacefully on marble floor"
  },
  {
    id: "dog-004",
    name: "Tujo",
    dest: "public/images/dogs/tujo.jpg",
    archive: "dog-evidence-22.jpg",
    crop: { left: 400, top: 200, width: 650, height: 650 },
    description: "Mottled brindle pup with white dorsal star walking forward"
  },
  {
    id: "dog-005",
    name: "Safedi",
    dest: "public/images/dogs/safedi.jpg",
    archive: "dog-evidence-21.jpg",
    crop: { left: 60, top: 150, width: 950, height: 950 },
    description: "Ivory cream matriarch sleeping serenely on bedroom suite"
  },
  {
    id: "dog-006",
    name: "Branto",
    dest: "public/images/dogs/branto.jpg",
    archive: "dog-evidence-33.jpg",
    crop: { left: 550, top: 460, width: 680, height: 680 },
    description: "Tiger-striped brindle coat, head, and white-tipped tail filling 85% of exam frame"
  },
  {
    id: "dog-007",
    name: "Mario",
    dest: "public/images/dogs/mario.jpg",
    archive: "dog-evidence-26.jpg",
    crop: { left: 200, top: 280, width: 800, height: 800 },
    description: "Alert bat ears, white snout blaze looking straight into lens"
  },
  {
    id: "dog-008",
    name: "Victor",
    dest: "public/images/dogs/victor.jpg",
    archive: "dog-evidence-42.jpg",
    crop: { left: 840, top: 480, width: 380, height: 380 },
    description: "Puppy face, brown eyes, and white blaze centered in sharp focus"
  },
  {
    id: "dog-009",
    name: "Casper",
    dest: "public/images/dogs/casper.jpg",
    archive: "dog-evidence-50.jpg",
    crop: { left: 620, top: 330, width: 480, height: 480 },
    description: "Alert golden tan pariah face and upright ears in crisp focus"
  },
  {
    id: "dog-010",
    name: "Leo",
    dest: "public/images/dogs/leo.jpg",
    archive: "dog-evidence-54.jpg",
    crop: { left: 100, top: 580, width: 600, height: 600 },
    description: "Athletic body, paws, and IV catheter prominent on exam table"
  },
  {
    id: "dog-011",
    name: "Chotu",
    dest: "public/images/dogs/chotu.jpg",
    archive: "dog-evidence-18.jpg",
    crop: { left: 380, top: 540, width: 460, height: 460 },
    description: "Neonate rescue pup Chotu centered in sharp focus"
  },

  // 23 Roster Canines (dog-012 to dog-034)
  {
    id: "dog-012",
    name: "Bhavani",
    dest: "public/images/dogs/roster/dog-012-bhavani.jpg",
    archive: "dog-evidence-21.jpg",
    crop: { left: 450, top: 250, width: 950, height: 950 },
    description: "Tan companion on bed with bat ears and white snout blaze"
  },
  {
    id: "dog-013",
    name: "Deva",
    dest: "public/images/dogs/roster/dog-013-deva.jpg",
    archive: "dog-evidence-10.jpg",
    crop: { left: 280, top: 0, width: 800, height: 800 },
    description: "Deep charcoal adult brindle dog eating by car"
  },
  {
    id: "dog-014",
    name: "Nila",
    dest: "public/images/dogs/roster/dog-014-nila.jpg",
    archive: "dog-evidence-34.jpg",
    crop: { left: 650, top: 600, width: 280, height: 280 },
    description: "Tiger brindle with white foreleg socks eating treat"
  },
  {
    id: "dog-015",
    name: "Rudra",
    dest: "public/images/dogs/roster/dog-015-rudra.jpg",
    archive: "dog-evidence-20.jpg",
    crop: { left: 150, top: 200, width: 800, height: 800 },
    description: "Sleek jet obsidian black puppy resting on marble floor"
  },
  {
    id: "dog-016",
    name: "Shanti",
    dest: "public/images/dogs/roster/dog-016-shanti.jpg",
    archive: "dog-evidence-06.jpg",
    crop: { left: 800, top: 80, width: 320, height: 320 },
    description: "Fawn tan dog in courtyard eating kibble"
  },
  {
    id: "dog-017",
    name: "Karna",
    dest: "public/images/dogs/roster/dog-017-karna.jpg",
    archive: "dog-evidence-38.jpg",
    crop: { left: 0, top: 400, width: 750, height: 750 },
    description: "Puppy standing on exam table eating treats"
  },
  {
    id: "dog-018",
    name: "Maya",
    dest: "public/images/dogs/roster/dog-018-maya.jpg",
    archive: "dog-evidence-39.jpg",
    crop: { left: 80, top: 350, width: 750, height: 750 },
    description: "Puppy eating treats from pouch on table"
  },
  {
    id: "dog-019",
    name: "Surya",
    dest: "public/images/dogs/roster/dog-019-surya.jpg",
    archive: "dog-evidence-35.jpg",
    crop: { left: 650, top: 450, width: 350, height: 350 },
    description: "Golden fawn dog standing by courtyard gate"
  },
  {
    id: "dog-020",
    name: "Anbu",
    dest: "public/images/dogs/roster/dog-020-anbu.jpg",
    archive: "dog-evidence-35.jpg",
    crop: { left: 750, top: 520, width: 280, height: 280 },
    description: "Dark chestnut brindle dog standing by courtyard gate"
  },
  {
    id: "dog-021",
    name: "Kalyani",
    dest: "public/images/dogs/roster/dog-021-kalyani.jpg",
    archive: "dog-evidence-48.jpg",
    crop: { left: 950, top: 400, width: 450, height: 450 },
    description: "Puppy with white collar and 4 white paws eating kibbles on table"
  },
  {
    id: "dog-022",
    name: "Rishi",
    dest: "public/images/dogs/roster/dog-022-rishi.jpg",
    archive: "dog-evidence-46.jpg",
    crop: { left: 500, top: 350, width: 450, height: 450 },
    description: "Standing puppy looking down on clinic table"
  },
  {
    id: "dog-023",
    name: "Meera",
    dest: "public/images/dogs/roster/dog-023-meera.jpg",
    archive: "dog-evidence-47.jpg",
    crop: { left: 750, top: 460, width: 450, height: 450 },
    description: "Piebald pup standing tall on table sniffing treat packet"
  },
  {
    id: "dog-024",
    name: "Velan",
    dest: "public/images/dogs/roster/dog-024-velan.jpg",
    archive: "dog-evidence-46.jpg",
    crop: { left: 950, top: 400, width: 450, height: 450 },
    description: "Puppy eating from treat packet on clinic table"
  },
  {
    id: "dog-025",
    name: "Amala",
    dest: "public/images/dogs/roster/dog-025-amala.jpg",
    archive: "dog-evidence-43.jpg",
    crop: { left: 950, top: 380, width: 450, height: 450 },
    description: "Standing puppy eating kibble off clinic table"
  },
  {
    id: "dog-026",
    name: "Sundar",
    dest: "public/images/dogs/roster/dog-026-sundar.jpg",
    archive: "dog-evidence-45.jpg",
    crop: { left: 800, top: 500, width: 400, height: 400 },
    description: "Standing puppy with floppy ears and white collar"
  },
  {
    id: "dog-027",
    name: "Geetha",
    dest: "public/images/dogs/roster/dog-027-geetha.jpg",
    archive: "dog-evidence-13.jpg",
    crop: { left: 180, top: 400, width: 380, height: 380 },
    description: "Dark brindle pup with white chest standing on table"
  },
  {
    id: "dog-028",
    name: "Mani",
    dest: "public/images/dogs/roster/dog-028-mani.jpg",
    archive: "dog-evidence-19.jpg",
    crop: { left: 330, top: 190, width: 650, height: 650 },
    description: "Brindle pup standing tall on stainless table"
  },
  {
    id: "dog-029",
    name: "Thangam",
    dest: "public/images/dogs/roster/dog-029-thangam.jpg",
    archive: "dog-evidence-28.jpg",
    crop: { left: 40, top: 420, width: 460, height: 460 },
    description: "Golden fawn dog greeting on patio"
  },
  {
    id: "dog-030",
    name: "Dhruva",
    dest: "public/images/dogs/roster/dog-030-dhruva.jpg",
    archive: "dog-evidence-11.jpg",
    crop: { left: 300, top: 550, width: 350, height: 350 },
    description: "Dark brindle puppy receiving coat powder on table"
  },
  {
    id: "dog-031",
    name: "Vasantha",
    dest: "public/images/dogs/roster/dog-031-vasantha.jpg",
    archive: "dog-evidence-29.jpg",
    crop: { left: 0, top: 300, width: 900, height: 900 },
    description: "Brindle dog eating from yellow bowl on patio"
  },
  {
    id: "dog-032",
    name: "Chellappa",
    dest: "public/images/dogs/roster/dog-032-chellappa.jpg",
    archive: "dog-evidence-01.jpg",
    crop: { left: 80, top: 720, width: 850, height: 850 },
    description: "Senior patriarch dog with silver muzzle sleeping serenely"
  },
  {
    id: "dog-033",
    name: "Pari",
    dest: "public/images/dogs/roster/dog-033-pari.jpg",
    archive: "dog-evidence-56.jpg",
    crop: { left: 120, top: 720, width: 420, height: 420 },
    description: "Honey tan pup sitting upright on table"
  },
  {
    id: "dog-034",
    name: "Kamala",
    dest: "public/images/dogs/roster/dog-034-kamala.jpg",
    archive: "dog-evidence-59.jpg",
    crop: { left: 220, top: 620, width: 450, height: 450 },
    description: "Small brindle puppy having ears checked on table"
  },
];

async function regenerateAllCanines() {
  console.log(`Starting canine photo regeneration for all ${CANINE_DEFINITIONS.length} rescues...`);
  
  // Ensure target directories exist
  fs.mkdirSync("public/images/dogs/roster", { recursive: true });

  const summary = [];

  for (let i = 0; i < CANINE_DEFINITIONS.length; i++) {
    const item = CANINE_DEFINITIONS[i];
    const srcPath = path.join("public/images/dogs/archive", item.archive);
    const destPath = item.dest;

    if (!fs.existsSync(srcPath)) {
      throw new Error(`Archive source missing: ${srcPath} for ${item.name}`);
    }

    const srcMeta = await sharp(srcPath).metadata();
    
    // Bounds check
    const right = item.crop.left + item.crop.width;
    const bottom = item.crop.top + item.crop.height;
    if (right > srcMeta.width || bottom > srcMeta.height) {
      throw new Error(`Crop boundary exceeded for ${item.name} (${item.archive}): [${right}x${bottom}] > [${srcMeta.width}x${srcMeta.height}]`);
    }

    // Process high-resolution centered 800x800 crop
    await sharp(srcPath)
      .extract(item.crop)
      .resize(800, 800, {
        fit: "cover",
        position: "center"
      })
      .jpeg({
        quality: 92,
        chromaSubsampling: "4:4:4",
        mozjpeg: true
      })
      .toFile(destPath);

    const outStats = fs.statSync(destPath);
    const outMeta = await sharp(destPath).metadata();

    summary.push({
      index: i + 1,
      id: item.id,
      name: item.name,
      dest: item.dest,
      archiveSource: item.archive,
      crop: item.crop,
      outputSize: `${outMeta.width}x${outMeta.height}`,
      fileSizeKB: (outStats.size / 1024).toFixed(1),
      description: item.description
    });

    console.log(`[${i + 1}/34] Regenerated ${item.name} (${item.id}): ${item.archive} -> ${item.dest} (${(outStats.size / 1024).toFixed(1)} KB)`);
  }

  console.log("\n=== ALL 34 CANINES SUCCESSFULLY REGENERATED ===");
  console.table(summary.map(s => ({
    No: s.index,
    Name: s.name,
    ID: s.id,
    Source: s.archiveSource,
    SizeKB: s.fileSizeKB,
    Status: "Verified 800x800"
  })));
}

regenerateAllCanines().catch(err => {
  console.error("Error during canine regeneration:", err);
  process.exit(1);
});
