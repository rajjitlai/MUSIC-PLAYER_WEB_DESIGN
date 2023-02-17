var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function () {
          if (mySong.paused) {
                    mySong.play();
                    icon.src = "img/pause.png";
          }
          else {
                    mySong.pause();
                    icon.src = "img/play.png";
          }
}