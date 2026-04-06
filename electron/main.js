const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { app, BrowserWindow, Menu, dialog, ipcMain, shell } = require("electron");
const { autoUpdater } = require("electron-updater");

const isMac = process.platform === "darwin";
const appRootUrl = pathToFileURL(path.join(__dirname, "..") + path.sep).toString();
let mainWindow;
let manualUpdateCheckPending = false;

function isAppFileUrl(url) {
  return typeof url === "string" && url.startsWith(appRootUrl);
}

function isExternalHttpUrl(url) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch {
    return false;
  }
}

function shouldEnableAutoUpdates() {
  return app.isPackaged && !process.env.PORTABLE_EXECUTABLE_DIR;
}

function getDialogWindow() {
  return mainWindow && !mainWindow.isDestroyed() ? mainWindow : null;
}

function configureAutoUpdates() {
  if (!shouldEnableAutoUpdates()) {
    return;
  }

  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;

  autoUpdater.on("error", async (error) => {
    console.error("Auto-update error:", error);

    if (manualUpdateCheckPending) {
      manualUpdateCheckPending = false;

      await dialog.showMessageBox(getDialogWindow(), {
        type: "error",
        buttons: ["OK"],
        title: "Update Check Failed",
        message: "Could not check for updates.",
        detail: "Please try again in a bit.",
      });
    }
  });

  autoUpdater.on("update-available", async () => {
    if (manualUpdateCheckPending) {
      await dialog.showMessageBox(getDialogWindow(), {
        type: "info",
        buttons: ["OK"],
        title: "Update Found",
        message: "A new update is available.",
        detail: "It is downloading in the background now.",
      });
    }
  });

  autoUpdater.on("update-not-available", async () => {
    if (manualUpdateCheckPending) {
      manualUpdateCheckPending = false;

      await dialog.showMessageBox(getDialogWindow(), {
        type: "info",
        buttons: ["OK"],
        title: "Up To Date",
        message: "You already have the latest version.",
      });
    }
  });

  autoUpdater.on("update-downloaded", async () => {
    manualUpdateCheckPending = false;

    const { response } = await dialog.showMessageBox(getDialogWindow(), {
      type: "info",
      buttons: ["Restart Now", "Later"],
      defaultId: 0,
      cancelId: 1,
      title: "Update Ready",
      message: "A new Gray Zone Intel Board update has been downloaded.",
      detail: "Restart the app now to install the update.",
    });

    if (response === 0) {
      autoUpdater.quitAndInstall();
    }
  });

  autoUpdater.checkForUpdatesAndNotify().catch((error) => {
    console.error("Failed to check for updates:", error);
  });

  ipcMain.handle("app:check-for-updates", async () => {
    if (!shouldEnableAutoUpdates()) {
      return {
        ok: false,
        message: "Manual update check is only available in the installed app build.",
      };
    }

    manualUpdateCheckPending = true;

    try {
      await autoUpdater.checkForUpdates();
      return { ok: true };
    } catch (error) {
      manualUpdateCheckPending = false;
      console.error("Manual update check failed:", error);

      return {
        ok: false,
        message: "Could not check for updates right now.",
      };
    }
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 920,
    minWidth: 1100,
    minHeight: 720,
    backgroundColor: "#081316",
    autoHideMenuBar: true,
    title: "Gray Zone Intel Board",
    icon: path.join(__dirname, "..", "assets", "intelboard.ico"),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js"),
      sandbox: true,
    },
  });

  Menu.setApplicationMenu(null);

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (isExternalHttpUrl(url)) {
      shell.openExternal(url);
      return { action: "deny" };
    }

    if (isAppFileUrl(url)) {
      return { action: "allow" };
    }

    return { action: "deny" };
  });

  mainWindow.webContents.on("will-navigate", (event, url) => {
    if (isAppFileUrl(url)) {
      return;
    }

    if (isExternalHttpUrl(url)) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  mainWindow.loadFile(path.join(__dirname, "..", "index.html"));
}

app.whenReady().then(() => {
  createWindow();
  configureAutoUpdates();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});