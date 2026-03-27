const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
    // Window controls
    minimize: () => ipcRenderer.send('window-minimize'),
    close: () => ipcRenderer.send('window-close'),
    togglePin: () => ipcRenderer.send('window-toggle-pin'),
    isPinned: () => ipcRenderer.invoke('window-is-pinned'),
    
    // Listen for pin state changes from main process
    onPinStateChanged: (callback) => {
        ipcRenderer.on('pin-state-changed', (event, isPinned) => callback(isPinned));
    }
});
