import electron, { ipcRenderer } from "electron";

electron.contextBridge.exposeInMainWorld("electronAPI", {});
