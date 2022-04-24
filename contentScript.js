function afterWindowLoaded(){
  timer = setInterval(()=>{
    var btn = document.querySelector('.ytp-chapter-title-prefix')  
    if(!btn){ return }
    btn.click()
    clearInterval(timer)
   },3000)  // extensions (ad-blockers...) would affect LCP
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(document.readyState !== 'complete') {
      window.addEventListener('load',afterWindowLoaded);
  } else {
      afterWindowLoaded();
  }
});
