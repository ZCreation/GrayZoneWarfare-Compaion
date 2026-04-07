const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("dialogBridge", {
  getParams: () => {
    const params = new URLSearchParams(window.location.search);
    return {
      id: params.get("id") || "",
      type: params.get("type") || "info",
      title: params.get("title") || "",
      message: params.get("message") || "",
      detail: params.get("detail") || "",
      buttons: JSON.parse(params.get("buttons") || '["OK"]'),
      cancelId: parseInt(params.get("cancelId") || "0", 10),
    };
  },
  submit: (id, buttonIndex) => ipcRenderer.send("dialog:result", { id, buttonIndex }),
});
