#!/usr/bin/env node
// generate-icons.js — Creates all PWA icon PNGs from the SVG source
// Run: node scripts/generate-icons.js
// Requires: npm install sharp (or: npm install canvas)

const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '..', 'public', 'icons');
const SVG_SRC = path.join(ICONS_DIR, 'icon.svg');

const SIZES = [72, 96, 128, 144, 152, 167, 180, 192, 384, 512];

async function generateIcons() {
  try {
    const sharp = require('sharp');
    const svgBuffer = fs.readFileSync(SVG_SRC);
    console.log('🎨 Generating Núcleo PWA icons...');
    
    for (const size of SIZES) {
      const outPath = path.join(ICONS_DIR, `icon-${size}.png`);
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(outPath);
      console.log(`  ✓ icon-${size}.png`);
    }

    // Generate splash screens (simple colored background + centered icon)
    const SPLASHES = [
      { name: 'splash-2048x2732', w: 2048, h: 2732 },
      { name: 'splash-1668x2388', w: 1668, h: 2388 },
      { name: 'splash-1170x2532', w: 1170, h: 2532 },
      { name: 'splash-1125x2436', w: 1125, h: 2436 },
      { name: 'splash-828x1792',  w: 828,  h: 1792 },
      { name: 'splash-750x1334',  w: 750,  h: 1334 },
      { name: 'screenshot-narrow',w: 390,  h: 844  },
      { name: 'screenshot-wide',  w: 1280, h: 800  },
    ];

    const iconSize = 256;
    const iconPng = await sharp(svgBuffer).resize(iconSize, iconSize).png().toBuffer();

    for (const splash of SPLASHES) {
      const bg = { r: 27, g: 44, b: 58 }; // #1B2C3A
      const outPath = path.join(ICONS_DIR, `${splash.name}.png`);
      
      await sharp({
        create: {
          width: splash.w,
          height: splash.h,
          channels: 4,
          background: { r: bg.r, g: bg.g, b: bg.b, alpha: 1 }
        }
      })
      .composite([{
        input: iconPng,
        left: Math.floor((splash.w - iconSize) / 2),
        top: Math.floor((splash.h - iconSize) / 2),
      }])
      .png()
      .toFile(outPath);
      console.log(`  ✓ ${splash.name}.png`);
    }

    console.log('\n✅ All icons generated! Ready for PWA deployment.');
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      console.log('📦 Installing sharp for icon generation...');
      const { execSync } = require('child_process');
      execSync('npm install sharp --save-dev', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
      console.log('✓ sharp installed. Run: node scripts/generate-icons.js again');
    } else {
      console.error('Error:', err.message);
    }
  }
}

generateIcons();
