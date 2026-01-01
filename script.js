const video = document.getElementById("video");

// tap to mute / unmute
video.addEventListener("click", () => {
  video.muted = !video.muted;
});
