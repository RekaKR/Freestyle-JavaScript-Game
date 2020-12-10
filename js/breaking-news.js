window.addEventListener('load', () => {
  document.getElementById('start-intro').addEventListener('click', startIntro);
  let xmasSound = document.getElementById('xmas-sound');
  
  function startIntro(e) {
    e.target.remove();
    xmasSound.volume = 0.1;
    xmasSound.play();
    setTimeout(() => {
      xmasSound.pause();
      startDrama();      
    }, 5000);
  }

  function startDrama() {
    document.querySelector('.drama').classList.remove('hide');
    document.querySelector('.xmas').classList.add('hide');

    let dramaSound = document.getElementById('drama-sound');
    dramaSound.volume = 0.1;
    dramaSound.play();

    setTimeout(() => {
      document.querySelector('.newspaper img').remove();
      document.querySelector('.newspaper').insertAdjacentHTML('beforeend', '<img src="img/newspaper2.jpg" alt="">');
    }, 5000);

    setTimeout(() => {
      document.querySelector('.newspaper img').remove();
      document.querySelector('.newspaper').insertAdjacentHTML('beforeend', '<img src="img/newspaper3.jpg" alt="">');
    }, 10000);

    setTimeout(() => {
      document.querySelector('.drama').classList.add('hide');
      document.querySelector('.instructions').classList.remove('hide');
    }, 15000);
  }
});
