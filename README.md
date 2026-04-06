# Gray Zone Intel Board Desktop App

This project can now run as a Windows desktop app using Electron.

## Automatic updates

Installed copies of the app can update automatically when opened, but only if you distribute the Windows installer build and publish each release to GitHub Releases.

Update flow:

1. Increase the version in `package.json`
2. Publish the new installer release to GitHub
3. Installed copies check for updates when the app opens
4. If a newer version exists, the update downloads automatically
5. The app prompts the user to restart and install it

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