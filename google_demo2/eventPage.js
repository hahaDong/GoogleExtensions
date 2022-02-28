var contextMenuItem = {
    "id":"spendMoney",
    "title":"SpendMoney",
    "contexts":["selection"]
};
chrome.contextMenus.create(contextMenuItem)


function isInt(value){
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value,10))
}

chrome.contextMenus.onClicked.addListener(function (clickData){
    console.log(clickData)
    if(clickData.menuItemId == "spendMoney" && clickData.selectionText){
        if (isInt(clickData.selectionText)){
            chrome.storage.sync.get("total",function (budget){
                var newTotal = 0;
                if(budget.total){
                    newTotal += parseInt(budget.total)
                }
                newTotal += parseInt(clickData.selectionText)
                chrome.storage.sync.set({"total":newTotal},function (){
                    var notif = {
                        "type":"basic",
                        "iconUrl":"hello.png",
                        "title":"消费通知",
                        "message":"【hahaCoder提醒您】：您又多了一笔消费！"
                    }
                    chrome.notifications.create(notif)
                })
            })
        }
    }
})

chrome.storage.onChanged.addListener(function (changes,storageName){
    console.log(changes)
    chrome.browserAction.setBadgeText({"text":changes.total.newValue.toString()})
})
























