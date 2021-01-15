const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// EVENT LISTENERS

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", UpdatePlayIcon);
video.addEventListener("play", UpdatePlayIcon);
video.addEventListener("timeupdate", UpdateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);

// PLAY AND PAUSE VIDEO
function toggleVideoStatus() {
  if (video.paused) {
    //   we were able to use (paused )because the we used HTML VIDEO Tag
    // so with that we have access to some inbuilt js video APIs
    video.play();
  } else {
    video.pause();
  }
}
// update  PLAY & PAUSE icon
function UpdatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class= "fa fa-pause fa-2x"></i>';
  }
}
// stop video from playing
function stopVideo() {
  video.currentTime = 0;
  //  this is used to return the video to the initial beginning...
  video.pause();
  
}
// update progress & timestamp
function UpdateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //   get minutes of the video time
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  //   get seconds of the video current time
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
    // when setting the secs time 
    // we have to use the modulus % sign 
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// set video time to progress

function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}
