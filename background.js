chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo && changeInfo.status == "complete"){
        if(!tab.url.includes('https://www.youtube.com/watch')){
            return
        }
        chrome.tabs.sendMessage(tabId, {data: tab}, function(response) {});
    }
});
