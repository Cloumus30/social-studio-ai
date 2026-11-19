#!/usr/bin/env node

/**
 * social-graphic-studio Renderer
 * Converts HTML slides into ultra-high-resolution PNG images using Playwright and Google Chrome/Chromium.
 * Cross-platform compatible (macOS, Windows, Linux/WSL).
 * 
 * Usage:
 *   node render.js --input <file-or-dir> [--output <output-dir>] [--format <carousel|story>] [--scale <2|3>]
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright');

// Parse CLI arguments
const args = process.argv.slice(2);
function getArg(flag, defaultValue = null) {
  const index = args.indexOf(flag);
  if (index !== -1 && args[index + 1]) {
    return args[index + 1];
  }
  return defaultValue;
}

const inputPath = getArg('--input');
const outputDir = getArg('--output', path.join(__dirname, 'output'));
const format = getArg('--format', 'carousel').toLowerCase();
const scale = parseInt(getArg('--scale', '2'), 10);

if (!inputPath) {
  console.error('Error: Argument --input is required.');
  console.log('Usage: node render.js --input <file.html|directory> [--output <dir>] [--format <carousel|story>] [--scale <2>]');
  process.exit(1);
}

// Dimensions preset
const PRESETS = {
  carousel: { width: 1080, height: 1350, name: 'Carousel (4:5)' },
  story: { width: 1080, height: 1920, name: 'Story / Reel (9:16)' },
  square: { width: 1080, height: 1080, name: 'Square (1:1)' }
};

const dimension = PRESETS[format] || PRESETS.carousel;

// Find Chrome/Edge/Brave executable path across macOS, Linux, and Windows
function getChromePath() {
  const possiblePaths = [
    // macOS
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',

    // Linux / WSL
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/snap/bin/chromium',

    // Windows
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  return undefined; // Fallback to Playwright's built-in Chromium
}

async function renderFile(browser, filePath, destDir) {
  const filename = path.basename(filePath, path.extname(filePath));
  const outputPath = path.join(destDir, `${filename}.png`);

  const page = await browser.newPage({
    viewport: {
      width: dimension.width,
      height: dimension.height
    },
    deviceScaleFactor: scale
  });

  // Cross-platform file URL handling (supports Windows C:\ drives and URL encoding)
  const fileUrl = pathToFileURL(path.resolve(filePath)).href;
  console.log(`[Render] Membuka ${path.basename(filePath)} (${dimension.name}, ${dimension.width}x${dimension.height} @ ${scale}x scale)...`);

  await page.goto(fileUrl, { waitUntil: 'networkidle' });

  // Tunggu sejenak agar web fonts & Lucide icons ter-render sempurna
  await page.evaluate(() => document.fonts ? document.fonts.ready : Promise.resolve());

  // Sinkronisasi Three.js / WebGL handshake (img2threejs pipeline)
  try {
    await page.waitForFunction(
      () => {
        if (typeof window.__THREE_READY__ !== 'undefined') {
          return window.__THREE_READY__ === true;
        }
        return true;
      },
      { timeout: 1500 }
    );
  } catch (_) {
    // Fallback bila window.__THREE_READY__ tidak diset secara eksplisit
  }
  await page.waitForTimeout(300);

  // Ambil screenshot
  await page.screenshot({
    path: outputPath,
    type: 'png',
    fullPage: false,
    clip: {
      x: 0,
      y: 0,
      width: dimension.width,
      height: dimension.height
    }
  });

  await page.close();
  console.log(`[Berhasil] Disimpan ke: ${outputPath}`);
  return outputPath;
}

async function main() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const chromePath = getChromePath();
  const launchOptions = {
    headless: true
  };
  if (chromePath) {
    launchOptions.executablePath = chromePath;
  }

  console.log(`[Studio] Memulai render engine Playwright...`);
  const browser = await chromium.launch(launchOptions);

  try {
    const stat = fs.statSync(inputPath);
    const results = [];

    if (stat.isDirectory()) {
      const files = fs.readdirSync(inputPath)
        .filter(f => f.endsWith('.html'))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

      if (files.length === 0) {
        console.warn(`[Peringatan] Tidak ada file .html di direktori: ${inputPath}`);
      }

      for (const file of files) {
        const fullPath = path.join(inputPath, file);
        const res = await renderFile(browser, fullPath, outputDir);
        results.push(res);
      }
    } else {
      const res = await renderFile(browser, inputPath, outputDir);
      results.push(res);
    }

    console.log(`\n==============================================`);
    console.log(`[Selesai] Total ${results.length} gambar berhasil dirender!`);
    console.log(`Folder Output: ${outputDir}`);
    console.log(`==============================================`);
  } catch (err) {
    console.error(`[Error saat render]:`, err);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

main();
