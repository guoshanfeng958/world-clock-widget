// World Clock Widget - Main Process
const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');

let mainWindow = null;

function createWindow() {
    const display = screen.getPrimaryDisplay();
    const { width: sw, height: sh } = display.workAreaSize;
    
    mainWindow = new BrowserWindow({
        width: 440,
        height: 600,
        frame: false,
        resizable: false,
        alwaysOnTop: true,
        skipTaskbar: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
        backgroundColor: '#1a1a2e',
        show: true
    });

    mainWindow.setPosition(sw - 460, sh - 640);
    mainWindow.loadFile('index.html');

    mainWindow.webContents.on('did-finish-load', () => {
        console.log('World Clock loaded successfully!');
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', (e) => {
    e.preventDefault();
});

ipcMain.on('window-minimize', () => mainWindow && mainWindow.minimize());
ipcMain.on('window-close', () => mainWindow && mainWindow.hide());
ipcMain.on('window-toggle-pin', () => {
    if (mainWindow) {
        mainWindow.setAlwaysOnTop(!mainWindow.isAlwaysOnTop());
        mainWindow.webContents.send('pin-state-changed', mainWindow.isAlwaysOnTop());
    }
});
ipcMain.handle('window-is-pinned', () => mainWindow && mainWindow.isAlwaysOnTop());
