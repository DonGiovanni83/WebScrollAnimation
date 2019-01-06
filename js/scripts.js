var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 400, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('v0'), 
    // var vid = $('#v0')[0]; // jquery option
    navbar = document.getElementById('navbar');

vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

window.addEventListener('scroll' ,() =>  {
    var yOffset = window.pageYOffset;
    var height = document.body.clientHeight/3;
    console.log(yOffset);
    if (yOffset < height){
        navbar.style.opacity = yOffset/height;
        console.log("opacity : " + yOffset);
    }
    else if (yOffset >= height){
        navbar.style.opacity = 1;
    }
});



// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
  var frameNumber  = window.pageYOffset/400;
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);



