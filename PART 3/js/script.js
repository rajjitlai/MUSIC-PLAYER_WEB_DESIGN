// For displaying wave
var wavesurfer = WaveSurfer.create({
          container: '#waveform',
          waveColor: 'yellow',
          progressColor: 'white',
          cursorColor: 'black',
          barWidth: 4,
          responsive: true,
          height: 90,
          barRadius: 4
});

// LOAD THE AUDIO FILE
wavesurfer.load('/media/song2.mp3');

let progress = document.getElementById('progress');
let ctrlIcon = document.getElementById('ctrlIcon');
let isSeeking = false;

wavesurfer.on('ready', function () {
          progress.max = wavesurfer.getDuration();
          var durationSpan = document.getElementById('duration');
          durationSpan.innerHTML = formatTime(wavesurfer.getDuration());
});

function formatTime(time) {
          var minutes = Math.floor(time / 60);
          var seconds = Math.round(time % 60);
          return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function playPause() {
          if (ctrlIcon.classList.contains("fa-pause")) {
                    wavesurfer.pause();
                    ctrlIcon.classList.remove("fa-pause");
                    ctrlIcon.classList.add("fa-play");
          } else {
                    wavesurfer.play();
                    ctrlIcon.classList.add("fa-pause");
                    ctrlIcon.classList.remove("fa-play");
          }
}

progress.style.background = 'yellow';

wavesurfer.on('audioprocess', function () {
          if (!isSeeking) {
                    progress.value = wavesurfer.getCurrentTime();
          }
          progress.style.background = 'linear-gradient(to right, black, black ' + (progress.value / progress.max) * 100 + '%, yellow ' + (progress.value / progress.max) * 100 + '%, yellow)';
});

progress.onmousedown = function () {
          isSeeking = true;
};

progress.onmouseup = function () {
          isSeeking = false;
          wavesurfer.seekTo(progress.value / wavesurfer.getDuration());
};

progress.onchange = function () {
          if (isSeeking) {
                    wavesurfer.pause();
                    wavesurfer.seekTo(progress.value / wavesurfer.getDuration());
          }
};

function restartSong() {
          wavesurfer.stop();
          wavesurfer.play();
          progress.value = 0;
          ctrlIcon.classList.add("fa-pause");
          ctrlIcon.classList.remove("fa-play");
}
wavesurfer.on('finish', function () {
          restartSong();
});


