import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./util.js";
import { getPreloadPath } from "./pathResolve.js";

const URL = "http://localhost:1337";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
      devTools: isDev() ?? false,
    },
  });
  if (isDev()) {
    mainWindow.loadURL(URL);
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
  mainWindow.setMenuBarVisibility(false);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
