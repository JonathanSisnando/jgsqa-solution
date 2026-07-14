const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PUBLIC = path.resolve(__dirname, "..", "public");

// SVG do favicon Nós / Rede (gestão + tecnologia)
function generateSVG(size) {
  const pad = size * 0.14;
  const c = size / 2;
  const r = size * 0.3;

  const nodes = [
    { x: c - r * 0.8, y: c - r * 0.8 },
    { x: c + r * 0.8, y: c - r * 0.6 },
    { x: c, y: c + r * 0.6 },
    { x: c + r * 1.1, y: c + r * 0.7 },
  ];

  const edges = [
    [0, 1], [0, 2], [1, 2], [1, 3], [2, 3]
  ];

  const nodeSize = size * 0.06;
  const bigNodeSize = size * 0.08;
  const smallNodeSize = size * 0.05;

  let lines = "";
  for (const [i, j] of edges) {
    lines += `<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[j].x}" y2="${nodes[j].y}" stroke="#0f973d" stroke-width="${size * 0.025}" opacity="0.5" />\n`;
  }

  let circles = "";
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    const ns = i === 2 ? bigNodeSize : i === 3 ? smallNodeSize : nodeSize;
    circles += `<circle cx="${n.x}" cy="${n.y}" r="${ns}" fill="#0f973d" />\n`;
  }

  const bg = size <= 64 ? "#111" : "none";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <rect width="${size}" height="${size}" rx="${size * 0.18}" fill="${bg}" />
  ${lines}
  ${circles}
</svg>`;
}

async function main() {
  // 1. Generate SVG at 256px for high quality
  const svg = generateSVG(256);

  // 2. Generate PNG 32x32 for favicon.ico
  const png32 = await sharp(Buffer.from(svg)).resize(32, 32).png().toBuffer();
  const png16 = await sharp(Buffer.from(svg)).resize(16, 16).png().toBuffer();

  // 3. Generate PNG 32x32 and 192x192 for web
  await sharp(Buffer.from(svg)).resize(32, 32).png().toFile(path.join(PUBLIC, "favicon.png"));
  await sharp(Buffer.from(svg)).resize(192, 192).png().toFile(path.join(PUBLIC, "icon-192.png"));
  await sharp(Buffer.from(svg)).resize(512, 512).png().toFile(path.join(PUBLIC, "icon-512.png"));

  // 4. Generate .ico (ICO format: 16x16 + 32x32)
  // ICO header: reserved(2) + type(2) + count(2)
  // ICO entry: width(1) + height(1) + colors(1) + reserved(1) + planes(2) + bpp(2) + size(4) + offset(4)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);     // reserved
  header.writeUInt16LE(1, 2);     // type = ICO
  header.writeUInt16LE(2, 4);     // count = 2

  const entries = [];
  const imageData = [];

  for (const [buf, w] of [[png16, 16], [png32, 32]]) {
    const bmp = await makeBMP(buf, w, w);
    const offset = 6 + 2 * 16; // header + 2 entries * 16 bytes
    const totalImageData = imageData.reduce((s, d) => s + d.length, 0);

    const entry = Buffer.alloc(16);
    entry.writeUInt8(w >= 256 ? 0 : w, 0);  // width
    entry.writeUInt8(w >= 256 ? 0 : w, 1);  // height
    entry.writeUInt8(0, 2);   // colors
    entry.writeUInt8(0, 3);   // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(bmp.length, 8); // size
    entry.writeUInt32LE(offset + totalImageData, 12); // offset

    entries.push(entry);
    imageData.push(bmp);
  }

  const ico = Buffer.concat([header, ...entries, ...imageData]);
  fs.writeFileSync(path.join(PUBLIC, "favicon.ico"), ico);

  // 5. Save SVG source
  fs.writeFileSync(path.join(PUBLIC, "favicon.svg"), generateSVG(32));

  console.log("Favicon generated successfully!");
}

async function makeBMP(pngBuffer, width, height) {
  // Convert PNG to BGRA raw pixels
  const { data, info } = await sharp(pngBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // BMP header for ICO: BITMAPINFOHEADER(40) + pixel data
  const rowSize = Math.ceil((width * 32) / 32) * 4;
  const pixelDataSize = rowSize * height;
  const headerSize = 40;

  const bmp = Buffer.alloc(headerSize + pixelDataSize);

  // BITMAPINFOHEADER
  bmp.writeUInt32LE(headerSize, 0);  // header size
  bmp.writeInt32LE(width, 4);         // width
  bmp.writeInt32LE(height * 2, 8);    // height (double for ICO)
  bmp.writeUInt16LE(1, 12);           // planes
  bmp.writeUInt16LE(32, 14);          // bpp
  bmp.writeUInt32LE(0, 16);           // compression
  bmp.writeUInt32LE(pixelDataSize, 20); // image size

  // Pixel data (BGRA, bottom-up, XOR mask)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = ((height - 1 - y) * width + x) * 4;
      const dstIdx = headerSize + y * rowSize + x * 4;
      bmp[dstIdx] = data[srcIdx + 2];      // B
      bmp[dstIdx + 1] = data[srcIdx + 1];  // G
      bmp[dstIdx + 2] = data[srcIdx];      // R
      bmp[dstIdx + 3] = data[srcIdx + 3];  // A
    }
  }

  // AND mask (1-bit transparency, all zeros = fully transparent where alpha < 128)
  const andRowSize = Math.ceil(width / 32) * 4;
  const andMaskSize = andRowSize * height;
  const andMask = Buffer.alloc(andMaskSize);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = ((height - 1 - y) * width + x) * 4;
      const alpha = data[srcIdx + 3];
      if (alpha >= 128) {
        const byteIdx = Math.floor(x / 8);
        const bitIdx = 7 - (x % 8);
        andMask[y * andRowSize + byteIdx] |= (1 << bitIdx);
      }
    }
  }

  // XOR mask + AND mask
  return Buffer.concat([bmp.subarray(0, headerSize + pixelDataSize), andMask]);
}

main().catch(console.error);
