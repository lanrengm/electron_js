const { app, BrowserWindow } = require('electron');
const path = require('path');


const mainLoop = ()=> {
    const winMain = new BrowserWindow({
        windth: 800,
        height: 600,
        icon: 'public/crown_256.ico',
        webPreferences: {}
    });
    winMain.loadFile('src/render/index.html');
}


app.whenReady().then(mainLoop);