#!/usr/bin/env node

/**
 * Logikanya.Tech Social Graphic Studio - Google Drive Uploader
 * 
 * Mengunggah seluruh aset visual (PNG Retina 4K) dan caption postingan ke Google Drive
 * menggunakan integrasi resmi Google Drive CLI dari Antigravity.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Helper to execute CLI commands and return trimmed stdout
function runCmd(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
  } catch (error) {
    const stderr = error.stderr ? error.stderr.toString().trim() : error.message;
    throw new Error(`Command failed: ${cmd}\n${stderr}`);
  }
}

// Ensure gdrive CLI is available
function checkGdriveCLI() {
  try {
    runCmd('gdrive --version');
    return true;
  } catch (e) {
    // Try bootstrapping from plugin script location if bare gdrive is not yet in PATH
    const scriptPath = path.join(os.homedir(), '.gemini/config/plugins/gdrive/skills/gdrive/scripts/gdrive');
    if (fs.existsSync(scriptPath)) {
      try {
        runCmd(`"${scriptPath}" --version`);
        // Test again
        runCmd('gdrive --version');
        return true;
      } catch (err) {
        // ignore
      }
    }
    return false;
  }
}

// Parse CLI arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    project: null,
    folder: 'Logikanya/Carousel',
    subfolder: null,
    includeCaption: true,
    all: false,
    help: false
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg === '--project' || arg === '-p') {
      options.project = args[++i];
    } else if (arg === '--folder' || arg === '-f') {
      options.folder = args[++i];
    } else if (arg === '--subfolder' || arg === '-s') {
      options.subfolder = args[++i];
    } else if (arg === '--all') {
      options.all = true;
    } else if (arg === '--no-caption') {
      options.includeCaption = false;
    }
  }

  return options;
}

function showHelp() {
  console.log(`
🚀 Logikanya.Tech - Google Drive Uploader
=========================================
Penggunaan:
  node upload.js [pilihan]
  npm run upload -- [pilihan]

Pilihan:
  -p, --project <name>     Nama folder proyek (contoh: data-warehouse, quantum-computing)
  -f, --folder <name>      Nama folder utama di Google Drive (default: "Logikanya.Tech - Social Graphics")
  -s, --subfolder <name>   Nama subfolder di Drive (default: nama proyek yang diformat)
      --all                Unggah seluruh folder proyek yang ada di folder output/
      --no-caption         Jangan unggah berkas caption.txt
  -h, --help               Tampilkan bantuan ini

Contoh:
  node upload.js --project data-warehouse
  node upload.js --project quantum-computing --subfolder "01 - Quantum Computing"
  node upload.js --all
`);
}

// Map project slugs to clean folder names
function getPrettyProjectName(slug) {
  const map = {
    'quantum-computing': '01 - Quantum Computing & Photonic Chip',
    'data-warehouse': '02 - Data Warehouse (OLTP vs OLAP)',
    'botnet-forensic': '03 - Forensik Jaringan Buzzer (Google TAG)',
    'instagram-logo': '00 - Official Logo Instagram (2D & 3D)'
  };
  if (map[slug]) return map[slug];
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// Find or create folder on Google Drive
function getOrCreateFolder(folderName, parentId = null) {
  let searchCmd = `gdrive readonly search --name-exact "${folderName}" --type folder --json`;
  if (parentId) {
    searchCmd += ` --parent-id "${parentId}"`;
  }

  let items = [];
  try {
    const out = runCmd(searchCmd);
    if (out) items = JSON.parse(out);
  } catch (err) {
    items = [];
  }

  // Fallback to name-contains if name-exact returns empty but exists
  if (items.length === 0) {
    try {
      let fbCmd = `gdrive readonly search --name-contains "${folderName}" --type folder --json`;
      if (parentId) {
        fbCmd += ` --parent-id "${parentId}"`;
      }
      const outFb = runCmd(fbCmd);
      if (outFb) items = JSON.parse(outFb);
    } catch (e) {
      items = [];
    }
  }

  const existing = items.find(item => item.name === folderName && item.mimeType === 'application/vnd.google-apps.folder');
  if (existing) {
    return existing.id;
  }

  // Create folder
  let mkdirCmd = `gdrive mutate mkdir "${folderName}"`;
  if (parentId) {
    mkdirCmd += ` --parent "${parentId}"`;
  }
  const result = runCmd(mkdirCmd);
  const match = result.match(/ID:\s*([a-zA-Z0-9_-]+)/);
  if (match) {
    return match[1];
  }

  try {
    const parsed = JSON.parse(result);
    if (parsed.id) return parsed.id;
  } catch (e) {}

  throw new Error(`Gagal membuat folder di Google Drive: ${result}`);
}

// Resolve hierarchical folder path like "Logikanya/Carousel" or "Logikanya -> Carousel"
function resolveFolderPath(pathStr) {
  const parts = pathStr.split(/[\/\->]+/).map(p => p.trim()).filter(Boolean);
  let currentParentId = null;
  for (const part of parts) {
    console.log(`📁 Menemukan/membuat folder: "${part}"...`);
    currentParentId = getOrCreateFolder(part, currentParentId);
  }
  return currentParentId;
}

// Get existing files in a folder
function getFilesInFolder(folderId) {
  try {
    const out = runCmd(`gdrive readonly ls "${folderId}" --json`);
    if (!out) return [];
    return JSON.parse(out);
  } catch (e) {
    return [];
  }
}

// Upload a single project
function uploadProject(projectSlug, rootFolderId, options) {
  const studioRoot = path.resolve(__dirname);
  const outputDir = path.join(studioRoot, 'output', projectSlug);
  const projectSrcDir = path.join(studioRoot, 'projects', projectSlug);

  if (!fs.existsSync(outputDir)) {
    console.error(`❌ Folder output tidak ditemukan: ${outputDir}`);
    return null;
  }

  const subfolderName = options.subfolder || getPrettyProjectName(projectSlug);
  console.log(`\n📁 Mempersiapkan subfolder Drive: "${subfolderName}"...`);
  const subfolderId = getOrCreateFolder(subfolderName, rootFolderId);
  const subfolderUrl = `https://drive.google.com/drive/folders/${subfolderId}`;

  // Get current files in subfolder to avoid duplicate uploads
  const existingFiles = getFilesInFolder(subfolderId);
  const fileMap = new Map();
  existingFiles.forEach(f => fileMap.set(f.name, f));

  // Collect files to upload
  const filesToUpload = [];

  // 1. Output PNG images
  const entries = fs.readdirSync(outputDir)
    .filter(f => f.endsWith('.png') && !f.startsWith('.'))
    .sort();

  for (const f of entries) {
    filesToUpload.push({
      name: f,
      filePath: path.join(outputDir, f),
      mimeType: 'image/png'
    });
  }

  // 2. Caption text file
  if (options.includeCaption) {
    const captionPath = path.join(projectSrcDir, 'caption.txt');
    if (fs.existsSync(captionPath)) {
      filesToUpload.push({
        name: 'caption.txt',
        filePath: captionPath,
        mimeType: 'text/plain'
      });
    }
  }

  if (filesToUpload.length === 0) {
    console.log(`⚠️ Tidak ada berkas PNG/caption untuk diunggah di ${outputDir}`);
    return null;
  }

  console.log(`🚀 Mengunggah ${filesToUpload.length} berkas ke Google Drive...`);
  const uploadedResults = [];

  for (const item of filesToUpload) {
    const existing = fileMap.get(item.name);
    let fileId = null;

    if (existing) {
      process.stdout.write(`  🔄 Memperbarui ${item.name}... `);
      const res = runCmd(`gdrive mutate update "${existing.id}" "${item.filePath}" --mime-type "${item.mimeType}" --json`);
      const parsed = JSON.parse(res);
      fileId = parsed.id;
      console.log(`✅ [OK: ${fileId}]`);
    } else {
      process.stdout.write(`  ⬆️ Mengunggah ${item.name}... `);
      const res = runCmd(`gdrive mutate upload "${item.filePath}" --parent "${subfolderId}" --mime-type "${item.mimeType}"`);
      const match = res.match(/ID:\s*([a-zA-Z0-9_-]+)/);
      fileId = match ? match[1] : null;
      console.log(`✅ [OK: ${fileId}]`);
    }

    const fileSize = fs.statSync(item.filePath).size;
    const sizeStr = (fileSize / (1024 * 1024)).toFixed(2) + ' MB';

    uploadedResults.push({
      name: item.name,
      id: fileId,
      size: sizeStr,
      webViewLink: `https://drive.google.com/file/d/${fileId}/view`
    });
  }

  // Save sync metadata in output directory
  const syncMeta = {
    projectName: subfolderName,
    projectSlug,
    folderId: subfolderId,
    folderUrl: subfolderUrl,
    syncedAt: new Date().toISOString(),
    files: uploadedResults
  };

  const syncPath = path.join(outputDir, 'gdrive-sync.json');
  fs.writeFileSync(syncPath, JSON.stringify(syncMeta, null, 2), 'utf-8');

  console.log(`\n🎉 Berhasil mengunggah proyek: ${subfolderName}`);
  console.log(`🔗 Link Folder Google Drive: ${subfolderUrl}`);
  console.log(`💾 Metadata sinkronisasi disimpan di: ${syncPath}\n`);

  return syncMeta;
}

// Main runner
function main() {
  const options = parseArgs();

  if (options.help) {
    showHelp();
    process.exit(0);
  }

  console.log('🔍 Memeriksa ketersediaan Google Drive CLI (Antigravity)...');
  if (!checkGdriveCLI()) {
    console.error('❌ Google Drive CLI belum terkonfigurasi.');
    console.error('Pastikan plugin Google Drive telah dipasang dan akun Google telah diautentikasi.');
    process.exit(1);
  }

  // Verify auth
  try {
    runCmd('gdrive readonly ls --max 1');
  } catch (err) {
    console.error('❌ Gagal mengakses Google Drive: Perlu autentikasi akun.');
    console.error(err.message);
    process.exit(1);
  }

  const studioRoot = path.resolve(__dirname);
  const outputBase = path.join(studioRoot, 'output');

  let targetProjects = [];

  if (options.all) {
    if (fs.existsSync(outputBase)) {
      const canonicalOrder = ['quantum-computing', 'data-warehouse', 'botnet-forensic'];
      const found = fs.readdirSync(outputBase).filter(f => {
        const full = path.join(outputBase, f);
        return fs.statSync(full).isDirectory() && f !== 'test';
      });
      targetProjects = canonicalOrder.filter(p => found.includes(p));
      found.forEach(p => {
        if (!targetProjects.includes(p)) targetProjects.push(p);
      });
    }
  } else if (options.project) {
    targetProjects = [options.project];
  } else {
    // Default to data-warehouse if present, or first available project
    if (fs.existsSync(path.join(outputBase, 'data-warehouse'))) {
      targetProjects = ['data-warehouse'];
    } else {
      console.log('⚠️ Harap tentukan nama proyek dengan flag --project <name> atau gunakan --all.');
      showHelp();
      process.exit(1);
    }
  }

  console.log(`📂 Memeriksa folder target Google Drive: "${options.folder}"...`);
  const rootFolderId = resolveFolderPath(options.folder);
  const rootFolderUrl = `https://drive.google.com/drive/folders/${rootFolderId}`;
  console.log(`✅ Folder Target ID: ${rootFolderId}`);
  console.log(`🔗 Target Folder URL: ${rootFolderUrl}`);

  const summary = [];

  for (const proj of targetProjects) {
    const meta = uploadProject(proj, rootFolderId, options);
    if (meta) {
      summary.push(meta);
    }
  }

  console.log('======================================================================');
  console.log('📊 RINGKASAN INTEGRASI GOOGLE DRIVE:');
  for (const s of summary) {
    console.log(`\n📁 Proyek: ${s.projectName}`);
    console.log(`   URL Folder: ${s.folderUrl}`);
    console.log(`   Total Berkas: ${s.files.length}`);
    s.files.forEach(f => {
      console.log(`   - ${f.name} (${f.size}) -> ${f.webViewLink}`);
    });
  }
  console.log('\n✨ Seluruh aset berhasil disinkronkan ke Google Drive!');
}

main();
