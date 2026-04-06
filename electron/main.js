const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { app, BrowserWindow, Menu, dialog, ipcMain, shell } = require("electron");
const { autoUpdater } = require("electron-updater");

const isMac = process.platform === "darwin";
const appRootUrl = pathToFileURL(path.join(__dirname, "..") + path.sep).toString();
const twitchClientId = "kimne78kx3ncx6brgo4mv6wki5h1ko";
const twitchStreamsQuery = [
  {
    operationName: "GrayZoneStreams",
    variables: {
      gameName: "Gray Zone Warfare",
      limit: 100,
    },
    query:
      "query GrayZoneStreams($gameName: String!, $limit: Int!) { game(name: $gameName) { name streams(first: $limit) { edges { node { id title viewersCount previewImageURL(width: 320, height: 180) broadcaster { login displayName profileImageURL(width: 70) } } } } } }",
  },
];
let mainWindow;
let manualUpdateCheckPending = false;
let handlersRegistered = false;

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

async function getGrayZoneStreams() {
  const response = await fetch("https://gql.twitch.tv/gql", {
    method: "POST",
    headers: {
      "Client-ID": twitchClientId,
      "Content-Type": "text/plain;charset=UTF-8",
    },
    body: JSON.stringify(twitchStreamsQuery),
  });

  if (!response.ok) {
    throw new Error(`Twitch request failed with status ${response.status}`);
  }

  const payload = await response.json();
  const edges = payload?.[0]?.data?.game?.streams?.edges || [];
  const streams = edges
    .map((edge) => edge?.node)
    .filter(Boolean)
    .map((stream) => ({
      id: stream.id,
      title: stream.title,
      viewers: stream.viewersCount,
      username: stream.broadcaster?.login,
      name: stream.broadcaster?.displayName,
      avatar: stream.broadcaster?.profileImageURL,
      thumbnail: stream.previewImageURL,
      url: stream.broadcaster?.login ? `https://www.twitch.tv/${stream.broadcaster.login}` : null,
    }))
    .filter((stream) => stream.username && stream.url)
    .sort((left, right) => right.viewers - left.viewers);

  return {
    featured: streams.slice(0, 3),
    upAndComing: streams.slice(3, 18),
  };
}

function registerIpcHandlers() {
  if (handlersRegistered) {
    return;
  }

  handlersRegistered = true;

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

  ipcMain.handle("twitch:get-stream-groups", async () => {
    try {
      return {
        ok: true,
        ...(await getGrayZoneStreams()),
      };
    } catch (error) {
      console.error("Failed to fetch Twitch streams:", error);

      return {
        ok: false,
        message: "Could not load Twitch streams right now.",
      };
    }
  });
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
  registerIpcHandlers();
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