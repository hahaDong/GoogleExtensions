var menuItem = {
    "id":"baidu",
    "title":"hahaBaidu",
    "contexts":["selection"]
}

chrome.contextMenus.create(menuItem)

function fixedEncodeURI(str){
    return encodeURI(str).replace(/%5B/g,'[').replace(/%5D/g,']')
}

chrome.contextMenus.onClicked.addListener(function (clickData){
    console.log("clickData",clickData)
    if(clickData.menuItemId =="baidu" && clickData.selectionText){
        var baiduUrl = "https://www.baidu.com/s?wd="+fixedEncodeURI(clickData.selectionText)
        var createData = {
            "url":baiduUrl,
            "type":"popup",
            "top":5,
            "left":5,
            "width":screen.width/2,
            "height":screen.height/2
        }
        chrome.windows.create(createData,function (){})
    }
})