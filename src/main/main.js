const { app, BrowserWindow, Tray, Menu, ipcMain } = require('electron');
const path = require('path');

const MAIN_ICON = path.join(app.getAppPath(), 'public/crown_256.ico');

const mainLoop = ()=> {
    const mainWindow = new BrowserWindow({
        windth: 800,
        height: 600,
        icon: MAIN_ICON,
        webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,  // 启用上下文隔离
            sandbox: true, // 启用沙箱
			webSecurity: true,
			enableRemoteModule: false,
            preload: path.join(app.getAppPath(), 'src/preload/preload.js'),  // 加载预加载脚本
        }
    });
    mainWindow.loadFile('src/render/index.html');
    mainWindow.on('show', () => {
        // 在窗口显示/隐藏时处理任务栏图标
        if (process.platform !== 'darwin') {
            mainWindow.setSkipTaskbar(false);
        }
    });
    mainWindow.on('hide', () => {
        // 在窗口显示/隐藏时处理任务栏图标
        if (process.platform !== 'darwin') {
            mainWindow.setSkipTaskbar(true);
        }
    });
    mainWindow.on('close', (event) => {
        // 关闭窗口时不退出应用
        if (!app.isQuiting) {
            event.preventDefault(); // 阻止默认关闭行为
            mainWindow.hide();  // 隐藏窗口
        }
    });
    // 托盘
    const tray = new Tray(MAIN_ICON);
    tray.setToolTip('Crown');
    let isMainWindowShowed = true;
    tray.on('click', () => {
        isMainWindowShowed ? mainWindow.hide() : mainWindow.show();
        isMainWindowShowed = !isMainWindowShowed;
    });
    // 托盘菜单
    const trayMenu = Menu.buildFromTemplate([
        { label: "显示窗口", click: () => mainWindow.show() },
        { type: "separator" },
        { label: "退出", click: () => {
            app.isQuiting = true;
            app.quit();
        }}
    ]);
    tray.setContextMenu(trayMenu);

    // 渲染进程通信
    ipcMain.on('msg-cmd', (event, data) => {
        console.log(data);
        mainWindow.webContents.send('msg-cmd', 'ready');
    });
}


app.whenReady().then(mainLoop);
