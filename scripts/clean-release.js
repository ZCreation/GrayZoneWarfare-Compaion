const fs = require("node:fs");
const path = require("node:path");

function main() {
  const rootDir = path.resolve(__dirname, "..");
  const packageJsonPath = path.join(rootDir, "package.json");
  const releaseDir = path.join(rootDir, "release");

  if (!fs.existsSync(packageJsonPath) || !fs.existsSync(releaseDir)) {
    return;
  }

  const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  const version = pkg.version;

  const keepNames = new Set([
    `GrayZoneIntelBoard-Setup-${version}.exe`,
    `GrayZoneIntelBoard-Setup-${version}.exe.blockmap`,
    "latest.yml",
    "builder-effective-config.yaml",
    "builder-debug.yml",
    "win-unpacked",
  ]);

  const entries = fs.readdirSync(releaseDir, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(releaseDir, entry.name);

    if (keepNames.has(entry.name)) {
      continue;
    }

    if (
      entry.isFile() &&
      /^GrayZoneIntelBoard-Setup-\d+\.\d+\.\d+\.exe(\.blockmap)?$/i.test(entry.name)
    ) {
      fs.rmSync(entryPath, { force: true });
      continue;
    }

    if (entry.isDirectory() && entry.name !== "win-unpacked") {
      fs.rmSync(entryPath, { recursive: true, force: true });
    }
  }
}

main();
