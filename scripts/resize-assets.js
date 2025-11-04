// scripts/resize-assets.js
// Usage: npm install --save-dev sharp
//        node ./scripts/resize-assets.js
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function resize() {
  const input = path.resolve(__dirname, '../src/assets/commvault-cert.jpg');
  const out = path.resolve(__dirname, '../src/assets/commvault-cert-120.jpg');

  if (!fs.existsSync(input)) {
    console.error('Input file not found:', input);
    process.exit(1);
  }

  try {
    await sharp(input)
      .resize({ height: 120 }) // keep aspect ratio, fix height to 120px
      .jpeg({ quality: 90 })
      .toFile(out);
    console.log('Resized image written to', out);
  } catch (err) {
    console.error('Error resizing image:', err);
    process.exit(1);
  }
}

resize();
