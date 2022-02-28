$(function (){
    chrome.storage.sync.get("limit",function (budget){
        $("#limit").val(budget.limit)
    })

    $("#saveLimit").click(function (){
        var limit = $("#limit").val()
        if(limit){
            chrome.storage.sync.set({"limit":limit},function (){
                window.close()
            })
        }
    })
    $("#resetTotal").click(function (){
        chrome.storage.sync.set({"total":0},function (){
            var ResetNotification = {
                "type":"basic",
                "iconUrl":"hello.png",
                "title":"预算清零通知",
                "message":"您已经将预算清零!"
            }
            chrome.notifications.create(ResetNotification)
        })
    })
})