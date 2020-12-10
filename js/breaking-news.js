window.addEventListener('load', () => {
  document.querySelector('body').addEventListener('click', () => {
    let xmasSound = document.getElementById('xmas-sound');
    xmasSound.addEventListener('ended', () => {
      document.querySelector('.drama').classList.toggle('hide');
      document.querySelector('.xmas').classList.toggle('hide');
      let dramaSound = document.getElementById('drama-sound');
      dramaSound.play();
    });
    xmasSound.play();
  });
});
