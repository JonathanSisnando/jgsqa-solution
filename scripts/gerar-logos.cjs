const sharp = require("sharp");
const path = require("path");

const G = "#00D26A";
const BG = "#1a1d23";
const WHITE = "#ffffff";

const logos = [
  {
    name: "jgsqa-escuro",
    svg: `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="500" rx="100" fill="${BG}"/>
      <text x="250" y="300" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="140" fill="${G}">JGSQA</text>
      <rect x="100" y="340" width="300" height="4" rx="2" fill="${G}" opacity="0.5"/>
      <text x="250" y="400" text-anchor="middle" font-family="Arial,sans-serif" font-weight="300" font-size="45" fill="${G}" opacity="0.8">TECH SOLUTIONS</text>
    </svg>`
  },
  {
    name: "jgsqa-verde",
    svg: `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="500" rx="100" fill="${G}"/>
      <text x="250" y="300" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="140" fill="${WHITE}">JGSQA</text>
      <rect x="100" y="340" width="300" height="4" rx="2" fill="${WHITE}" opacity="0.5"/>
      <text x="250" y="400" text-anchor="middle" font-family="Arial,sans-serif" font-weight="300" font-size="45" fill="${WHITE}" opacity="0.9">TECH SOLUTIONS</text>
    </svg>`
  },
  {
    name: "jgsqa-letra-j-escura",
    svg: `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="500" rx="250" fill="${BG}"/>
      <text x="250" y="340" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="240" fill="${G}">J</text>
    </svg>`
  },
  {
    name: "jgsqa-letra-j-verde",
    svg: `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="500" rx="250" fill="${G}"/>
      <text x="250" y="340" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="240" fill="${WHITE}">J</text>
    </svg>`
  },
];

async function main() {
  for (const logo of logos) {
    const outputPath = path.resolve(__dirname, `${logo.name}.png`);
    await sharp(Buffer.from(logo.svg))
      .resize(500, 500)
      .png()
      .toFile(outputPath);
    console.log(`✅ ${logo.name}.png`);
  }
  console.log("\n📁 Salvos em: " + __dirname);
}

main().catch(console.error);
