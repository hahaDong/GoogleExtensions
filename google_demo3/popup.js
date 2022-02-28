$(function (){
    var color = $("#fontColor").val();
    $("#fontColor").on("change paste click",function (){
        console.log("this",this)
        color = $(this).val()
    })
    $("#btnChange").click(function (){
        chrome.tabs.query({active:true,currentWindow:true},function (tabs){
            console.log("tabs",tabs)
            console.log(tabs[0])
            console.log(tabs[0].id)
            chrome.tabs.sendMessage(tabs[0].id,{todo:"changeColor",clickedColor:color})
        })
    })
})