function afterWindowLoaded(){
  let count = 0
  let timer = setInterval(()=>{
    var btn = document.querySelector('.ytp-chapter-title-prefix')  
    if(count>=10){
      clearInterval(timer)
      return
    }
    if(!btn){ 
      count++
      return 
    }
    btn.click()
    clearInterval(timer)
   },1500)
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if(document.readyState !== 'complete') {
      window.addEventListener('load',afterWindowLoaded);
  } else {
      afterWindowLoaded();
  }
  sendResponse()
});
