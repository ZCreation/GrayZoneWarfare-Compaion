/**
 * build-installer.js
 * Builds the NSIS installer into a temp folder, copies the three release
 * artifacts (installer, blockmap, latest.yml) into /release/, then removes
 * the temp folder.  This avoids the win-unpacked file-lock problem entirely.
 */

const { execSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const version = pkg.version;

const tmpDir = path.join(root, `release-tmp-${version}`);
const releaseDir = path.join(root, "release");

// ── 1. Build into temp dir ────────────────────────────────────────────────
console.log(`\nBuilding v${version} into ${tmpDir} …`);

try {
  execSync(
    `npx electron-builder --win nsis --config.directories.output="${tmpDir}"`,
    { cwd: root, stdio: "inherit" }
  );
} catch (err) {
  console.error("Build failed:", err.message);
  process.exit(1);
}

// ── 2. Copy artifacts to /release/ ───────────────────────────────────────
const artifacts = [
  `GrayZoneIntelBoard-Setup-${version}.exe`,
  `GrayZoneIntelBoard-Setup-${version}.exe.blockmap`,
  "latest.yml",
];

if (!fs.existsSync(releaseDir)) {
  fs.mkdirSync(releaseDir, { recursive: true });
}

for (const file of artifacts) {
  const src = path.join(tmpDir, file);
  const dst = path.join(releaseDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dst);
    console.log(`  Copied → release/${file}`);
  } else {
    console.warn(`  Warning: expected artifact not found: ${file}`);
  }
}

// ── 3. Remove old versioned artifacts from /release/ ─────────────────────
const keep = new Set([...artifacts, "builder-effective-config.yaml"]);

for (const entry of fs.readdirSync(releaseDir, { withFileTypes: true })) {
  if (keep.has(entry.name)) continue;

  const entryPath = path.join(releaseDir, entry.name);

  if (
    entry.isFile() &&
    /^GrayZoneIntelBoard-Setup-\d+\.\d+\.\d+/i.test(entry.name)
  ) {
    fs.rmSync(entryPath, { force: true });
    console.log(`  Removed old artifact: ${entry.name}`);
    continue;
  }

  if (entry.isFile() && /\.nsis\.7z$/i.test(entry.name)) {
    fs.rmSync(entryPath, { force: true });
    continue;
  }

  // Remove any old win-unpacked or other temp dirs sitting there
  if (entry.isDirectory()) {
    try {
      fs.rmSync(entryPath, { recursive: true, force: true });
      console.log(`  Removed directory: ${entry.name}`);
    } catch {
      console.warn(`  Could not remove directory: ${entry.name} (may be locked)`);
    }
  }
}

// ── 4. Remove temp build dir ─────────────────────────────────────────────
try {
  fs.rmSync(tmpDir, { recursive: true, force: true });
  console.log(`  Cleaned up temp dir: ${path.basename(tmpDir)}`);
} catch {
  console.warn(`  Could not fully remove temp dir (may still be locked): ${tmpDir}`);
}

console.log(`\nDone — release artifacts ready in /release/\n`);
