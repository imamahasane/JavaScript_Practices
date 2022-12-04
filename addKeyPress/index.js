for (let i = 0; i < 3; i++) {
  document.querySelectorAll('.myBtn')[i].addEventListener('click', function () {
    let text = this.innerHTML;
    audioPlay(text);
    playAnimation(text);
  });
}

document.addEventListener('keypress', function (event) {
  let text = event.key;

  audioPlay(text);
  playAnimation(text);
});

function audioPlay(text) {
  switch (text) {
    case 'a':
      var audio = new Audio('./audio/audio-1.mp3');
      audio.play();
      break;

    case 'b':
      var audio = new Audio('./audio/audio-2.mp3');
      audio.play();
      break;

    case 'c':
      var audio = new Audio('./audio/audio-3.mp3');
      audio.play();
      break;
  }
}

function playAnimation(text) {
  let selectedButton = document.querySelector('.' + text);
  selectedButton.classList.add('anim');

  setTimeout(function () {
    selectedButton.classList.remove('anim');
  }, 1000);
}
