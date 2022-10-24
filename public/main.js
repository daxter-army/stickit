const { app, BrowserWindow, ipcMain } = require('electron');
const remoteMain = require('@electron/remote/main');

//* Event constants
const electronEvents = require('../src/constants/eventConstants');

//* For hot-reloading electron app
require('electron-reload')(__dirname);

remoteMain.initialize();

function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		// minWidth: 400,
		// minHeight: 300,
		frame: true,
		webPreferences: {
			// only enable this if you want to use node.js modules
			// in your directly in your react app
			nodeIntegration: true,
			enableRemoteModule: true,
			contextIsolation: false
			// preload: path.join(__dirname, 'preload.js')
		},
		autoHideMenuBar: false,
	})

	mainWindow.loadURL('http://localhost:3000')
}

app.on("ready", createWindow);

// Quit when all windows are-closed
app.on("window-all-closed", function () {
	if (process.platform !== "darwin") {
		app.quit()
	}
});

app.on("activate", function () {
	if (BrowserWindow.getAllWindows().length === 0) createWindow()
});

// FUNCTION CREATING A NEW NOTE (WINDOW)
ipcMain.on(electronEvents.CREATE_NOTE, (event, arg) => {
	const newWindow = new BrowserWindow({
		width: 350,
		height: 350,
		resizable: false,
		frame: true,
		webPreferences: {
			// only enable this if you want to use node.js modules
			// in your directly in your react app
			nodeIntegration: true,
			enableRemoteModule: true,
			contextIsolation: false
			// preload: path.join(__dirname, 'preload.js')
		},
		openDevTools: { mode: "detach" },
		autoHideMenuBar: true,
		alwaysOnTop: true
	})

	newWindow.loadURL('http://localhost:3000/Note')
});