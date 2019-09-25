const { TouchBar } = require('electron');
const { TouchBarButton, TouchBarLabel } = TouchBar;

class Touchy {
    getTouchBar(mainWindowRef) {
        const helloBasta = new TouchBarLabel();
        helloBasta.label = "Hello, BASTA! 2019 👋 let's 😁";
        const launchDebuggerButton = new TouchBarButton({click: ()=>{
            mainWindowRef.webContents.toggleDevTools();
        }});
        launchDebuggerButton.label = "🚀";
        launchDebuggerButton.backgroundColor = '#7851A9';
        return new TouchBar({
            items: [
                helloBasta,
                launchDebuggerButton
            ]});
    }
}

module.exports = new Touchy();
