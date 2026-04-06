# Gray Zone Intel Board Desktop App

## Download & Install

**[📥 Download Latest Version](https://github.com/ZCreation/GrayZoneWarfare-Compaion/releases)**

Simply download the `.exe` file, run it, then open the app. Click "Check Updates" inside to get the latest version anytime.

---

## For Developers

This project runs as a Windows desktop app using Electron. The app checks for updates automatically and prompts users to install new versions.

## Run locally

```bash
npm install
npm start
```

## Build the app executable

```bash
npm run dist
```

That writes the desktop app to `release/win-unpacked/`.
The main executable is `release/win-unpacked/Gray Zone Intel Board.exe`.

## Build a portable single-file `.exe`

```bash
npm run dist:portable
```

That writes the portable executable to the `release/` folder when the portable packaging step completes.

## Build an installer `.exe`

```bash
npm run dist:installer
```

That produces a Windows installer in the `release/` folder.

## Publish an auto-update release

```bash
npm run publish:github
```

Notes:

1. This publishes to the `ZCreation/GrayZoneWarfare-Compaion` GitHub repository releases.
2. Auto-updates are for the installed NSIS app, not the `win-unpacked` folder.
3. Every published release must use a higher version number than the last one.