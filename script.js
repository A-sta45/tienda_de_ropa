var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtubePlayer', {
    height: '315',
    width: '560',
    videoId: 'VIDEO_ID', // Reemplaza 'VIDEO_ID' con el ID del video de YouTube que deseas reproducir
    playerVars: {
      'autoplay': 1,
      'controls': 1,
      'loop': 1,
      'showinfo': 0,
      'modestbranding': 1,
      'rel': 0,
      'fs': 0,
      'playlist': "HvXWVmmdtbU" // Reemplaza 'VIDEO_ID' con el mismo ID del video de YouTube
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.mute(); // Descomenta esta línea si deseas que el video se reproduzca en silencio
}

document.addEventListener('mousemove', function(event) {
  var body = document.querySelector('body');
  var xPos = (event.clientX / window.innerWidth) * 100;
  var yPos = (event.clientY / window.innerHeight) * 100;
  body.style.backgroundPosition = xPos + '% ' + yPos + '%';
});