//Importa módulos app e browserWindow do Electron
const { app, BrowserWindow } = require('electron')

//Função para criar a janela principal

function creatWindow () {
 
    //criar nova instancia do BrowserWindow
    const window = new BrowserWindow({
        width: 800,
        height: 600,
    })

}

