// Modules to control application life and create native browser window
require('dotenv').config()
const localPort = process.env.PORT || 8000
const { app, BrowserWindow } = require('electron')
const prepareNext = require('electron-next');
const isDev = require('electron-is-dev')
//const path = require('path')
/*****init your code******/

/* 
  delete this part 
  of the code 
  and insert your 
  codes from that point.

*/

/*****end your code******/
function createWindow() {
  const mainWindow = new BrowserWindow({
    "width": 550,
    "height": 640,
    "webPreferences": {
      //"preload": path.join(__dirname, 'preload.js'),
      "nodeIntegration": false,
      "devTools": true //devtools of chrome
    }
  })
  mainWindow.setMenuBarVisibility(false); //top bar of chrome
  const devPath = `http://localhost:${localPort}/`
  const entry = isDev ? devPath : __dirname + '/renderer/out/index.html'
  console.log(entry)
  mainWindow.loadURL(entry)

}

app.on('ready', async () => {
  await prepareNext(__dirname + '/renderer')
  createWindow()
  console.log('create window')
})
