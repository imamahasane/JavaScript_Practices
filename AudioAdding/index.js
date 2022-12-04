for (let i = 0; i < 3; i++) {
  document.querySelectorAll('.myBtn')[i].addEventListener('click', function () {
    let text = this.innerHTML;

    switch (text) {
      case 'Button-1':
        var audio = new Audio('./audio/audio-1.mp3');
        audio.play();
        break;

      case 'Button-2':
        var audio = new Audio('./audio/audio-2.mp3');
        audio.play();
        break;

      case 'Button-3':
        var audio = new Audio('./audio/audio-3.mp3');
        audio.play();
        break;
    }
  });
}
