const electron = require('electron');
const path = require('path');

const app = electron.app;

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  mainWindow = new electron.BrowserWindow({ 
    width: 1500, 
    height: 1500,
    minWidth: 800,
    minHeight: 800,
    show: true,
    webPreferences: {webSecurity: false} });

  setTimeout(function () {
    mainWindow.loadURL('http://localhost:3000')
  }, 3 * 1000);

  mainWindow.on('closed', function () {
    mainWindow = null
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
}); 