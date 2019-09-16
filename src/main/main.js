const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createWindow() {
  let newWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  newWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, './index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );
}

app.on('ready', createWindow);
