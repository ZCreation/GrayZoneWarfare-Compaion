const { contextBridge, ipcRenderer, webFrame } = require("electron");

let pendingFit = false;
const fitPages = new Set(["index.html", "vulture.html", "blueprints.html", "medical.html"]);

function getCurrentPage() {
  return window.location.pathname.split("/").pop()?.toLowerCase() || "index.html";
}

function shouldAutoFitPage() {
  return fitPages.has(getCurrentPage());
}

function applyPageScrollMode() {
  const overflowMode = shouldAutoFitPage() ? "hidden" : "auto";

  document.documentElement.style.overflow = overflowMode;
  document.body.style.overflow = overflowMode;
}

function getDocumentSize() {
  const root = document.documentElement;
  const body = document.body;

  return {
    width: Math.max(
      root?.scrollWidth || 0,
      root?.offsetWidth || 0,
      body?.scrollWidth || 0,
      body?.offsetWidth || 0
    ),
    height: Math.max(
      root?.scrollHeight || 0,
      root?.offsetHeight || 0,
      body?.scrollHeight || 0,
      body?.offsetHeight || 0
    ),
  };
}

function applyFitZoom() {
  pendingFit = false;

  webFrame.setZoomFactor(1);

  applyPageScrollMode();

  if (!shouldAutoFitPage()) {
    return;
  }

  const { width, height } = getDocumentSize();
  const safeWidth = Math.max(width, 1);
  const safeHeight = Math.max(height, 1);
  const viewportWidth = Math.max(window.innerWidth, 1);
  const viewportHeight = Math.max(window.innerHeight, 1);
  const nextZoom = Math.min(viewportWidth / safeWidth, viewportHeight / safeHeight, 1);

  webFrame.setZoomFactor(nextZoom);
}

function scheduleFitZoom() {
  if (pendingFit) {
    return;
  }

  pendingFit = true;
  window.requestAnimationFrame(applyFitZoom);
}

function styleUpdateButton(button) {
  button.style.position = "fixed";
  button.style.top = "12px";
  button.style.right = "12px";
  button.style.zIndex = "2147483000";
  button.style.border = "1px solid rgba(121, 214, 183, 0.8)";
  button.style.borderRadius = "999px";
  button.style.background = "linear-gradient(135deg, rgba(67, 191, 148, 0.75), rgba(27, 80, 65, 0.85))";
  button.style.color = "#e9fff7";
  button.style.fontFamily = '"Space Grotesk", sans-serif';
  button.style.fontSize = "12px";
  button.style.fontWeight = "700";
  button.style.padding = "7px 12px";
  button.style.cursor = "pointer";
  button.style.boxShadow = "0 0 0 1px rgba(121, 214, 183, 0.25), 0 6px 16px rgba(35, 126, 98, 0.35)";
  button.style.backdropFilter = "blur(2px)";
}

function addUpdateButton() {
  if (document.getElementById("appUpdateButton")) {
    return;
  }

  const button = document.createElement("button");
  button.id = "appUpdateButton";
  button.type = "button";
  button.textContent = "Check Updates";
  button.setAttribute("aria-label", "Check for app updates");
  styleUpdateButton(button);

  button.addEventListener("click", async () => {
    const originalText = button.textContent;
    button.disabled = true;
    button.style.opacity = "0.75";
    button.textContent = "Checking...";

    try {
      const result = await ipcRenderer.invoke("app:check-for-updates");

      if (result && result.ok === false) {
        button.textContent = result.message || "Unavailable";
      } else {
        button.textContent = "Check Started";
      }
    } catch {
      button.textContent = "Check Failed";
    }

    window.setTimeout(() => {
      button.disabled = false;
      button.style.opacity = "1";
      button.textContent = originalText;
    }, 2200);
  });

  document.body.appendChild(button);
}

contextBridge.exposeInMainWorld("grayZoneApp", {
  getTwitchStreamGroups: () => ipcRenderer.invoke("twitch:get-stream-groups"),
});

window.addEventListener("load", () => {
  addUpdateButton();
  applyPageScrollMode();

  if (!shouldAutoFitPage()) {
    webFrame.setZoomFactor(1);
    return;
  }

  scheduleFitZoom();
  window.setTimeout(scheduleFitZoom, 150);
  window.setTimeout(scheduleFitZoom, 500);

  if (document.fonts?.ready) {
    document.fonts.ready.then(scheduleFitZoom);
  }

  const observer = new MutationObserver(() => {
    scheduleFitZoom();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  });
});

window.addEventListener("resize", () => {
  applyPageScrollMode();

  if (!shouldAutoFitPage()) {
    webFrame.setZoomFactor(1);
    return;
  }

  scheduleFitZoom();
});