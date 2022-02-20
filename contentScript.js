function afterWindowLoaded(){
  setTimeout(()=>{
    
    var btn = document.querySelector('.ytp-chapter-title-prefix')    
    btn?.click()  

    const btm1 = document.querySelector('.ytp-chrome-bottom')
    const btm2 = document.querySelector('.ytp-chrome-controls')
    const btm3 = document.querySelector('.ytp-progress-bar-container')
    btm1.style.opacity='1'
    btm2.style.opacity='1'
    btm3.style.opacity='1'
    let video = document.querySelector("#movie_player")

    video?.dispatchEvent(new Event('mousemove'));
    setInterval(function(){
      video?.dispatchEvent(new Event('mousemove'));
    },2000);
   },3000)
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(document.readyState !== 'complete') {
      window.addEventListener('load',afterWindowLoaded);
  } else {
      afterWindowLoaded();
  }
});
