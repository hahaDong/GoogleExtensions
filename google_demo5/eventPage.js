var menuItem = {
    "id":"speak",
    "title":"Speak：%s",
    "contexts":["selection"]
}

chrome.contextMenus.create(menuItem)


chrome.contextMenus.onClicked.addListener(function (clickData){
    if(clickData.menuItemId =="speak" && clickData.selectionText){
        chrome.tts.speak(clickData.selectionText,{"rate":0.7})
    }
})