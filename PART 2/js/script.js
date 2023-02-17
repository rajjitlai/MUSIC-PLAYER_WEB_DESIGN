// JS FOR OLD VERSION
// var mySong = document.getElementById("mySong");
// var icon = document.getElementById("icon");

// icon.onclick = function () {
//           if (mySong.paused) {
//                     mySong.play();
//                     icon.src = "img/pause.png";
//           }
//           else {
//                     mySong.pause();
//                     icon.src = "img/play.png";
//           }
// }

//  -----------------------------------------------------------------------------------------------------------------

// GET ELEMENT
var icon = document.getElementById("icon");

// For displaying wave
var wavesurfer = WaveSurfer.create({
          container: '#waveform',
          waveColor: 'yellow',
          progressColor: 'white',
          // extra
          cursorColor: 'white',
          barWidth: 4,
          responsive: true,
          height: 90,
          barRadius: 4
});

// LOAD THE AUDIO FILE
wavesurfer.load('/media/WORTH NOTHING.mp3');

// ADD PLAY FUNCTION
icon.onclick = function(){
          wavesurfer.playPause();
          if(icon.src.includes("play.png")){
                    icon.src = "/img/pause.png";
          }else{
                    icon.src = "/img/play.png";
          }
}

// CHANGE ON FINISH
wavesurfer.on('finish', function () {
          icon.src = "/img/play.png";
          wavesurfer.stop();
})