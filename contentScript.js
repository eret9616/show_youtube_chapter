chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(document.readyState !== 'complete') {
      window.addEventListener('load',afterWindowLoaded);
  } else {
      afterWindowLoaded();
  }
  function afterWindowLoaded(){
    setTimeout(()=>{
      var btn = document.querySelector('.ytp-chapter-title-prefix')    
      btn?.click()  
     },3000)
  }
  return true
});