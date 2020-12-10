function onLoad () {
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function createGift(top) {
    let gift = document.createElement('div');
    let random = getRandom(1, 25);
    gift.innerHTML = `<img src="./img/gift${random}.svg">`;
    gift.classList.add('gift');
    gift.style.top = getRandom(-50, top) + 'px';
    gift.style.left = getRandom(0, window.innerWidth - 70) + 'px';
    gift.addEventListener('click', collectGift);
    root.appendChild(gift);
  }

  function createCat(top) {
    let cat = document.createElement('div'); //div.cat
    let random = getRandom(1, 3);
    cat.innerHTML = `<img src="./img/cat${random}.png">`;
    cat.classList.add('cat');
    cat.style.top = getRandom(-50, top) + 'px';
    cat.style.left = getRandom(0, window.innerWidth - 100) + 'px';
    cat.addEventListener('click', collectCat);
    root.appendChild(cat);
  }

  function collectGift() {
    let scoreNumber = document.getElementById("score");
    score += 1;
    scoreNumber.textContent = `${score}`;
    this.remove();
    collectSound();
  }

  function collectCat() {
    this.remove();
    gameOver();
  }
  
  function moveGift() {
    let gifts = document.querySelectorAll('.gift');
    if (gifts.length < giftCount) {
      createGift(-100);
    }
    
    for (let i = 0; i < gifts.length; i++) {
      let top = parseInt(gifts[i].style.top);
      top += 5;
      gifts[i].style.top = `${top}px`;
      
      if (top >= window.innerHeight) {
        gifts[i].remove();
        life -= 1;
        document.getElementById(`img${life + 1}`).classList.add("img-none");

        /*
        let lifeFive = document.getElementById("img1");
        let lifeFour = document.getElementById("img2");
        let lifeThree = document.getElementById("img3");
        let lifeTwo = document.getElementById("img4");
        let lifeOne = document.getElementById("img5");

        if (life === 4) {
          lifeFive.classList.add("img-none");
        } else if (life === 3) {
          lifeFour.classList.add("img-none");
        } else if (life === 2) {
          lifeThree.classList.add("img-none");
        } else if (life === 1) {
          lifeTwo.classList.add("img-none");
        } else {
          lifeOne.classList.add("img-none");
        }
        */

        if (life <= 0) {
          gameOver();
        }
      }
    }
  }

  function moveCat() {
    let cats = document.querySelectorAll('.cat');

    let catTop = parseInt(cats[0].style.top);
    catTop += 3;
    cats[0].style.top = `${catTop}px`;
  
    if (catTop >= window.innerHeight) {
      cats[0].remove();
      createCat(-100);
    }
  }

  function collectSound() {
    let collectSound = document.getElementById("collect-sound");
    collectSound.volume = 0.1;
    collectSound.play();
  }

  function backgroundSound() {
    audio.volume = 0.1;
    audio.play();
  }

  function startGame(e)
  {
    e.target.classList.add('hide');
    mainInterval = setInterval(main, 30);
    backgroundSound();
  }

  function gameOver() {
    clearInterval(mainInterval);
    audio.pause();
    audio.currentTime = 0;
    if (score > highScore) {
      localStorage.setItem('highScore', score);
    }

    gameOverButton.classList.remove('hide');
  }

  function main() {
    intervalCount++;

    if (intervalCount % 420 === 0) {
      additionalGifts++;
    }

    giftCount = getRandom(3 + additionalGifts, 5 + additionalGifts);
    moveGift();
    moveCat();
  }

  const root = document.getElementById("root");
  let score = 0;
  const highScore = localStorage.getItem('highScore');
  document.getElementById("highscore-num").textContent = `${highScore}`;
  
  let life = 5;
  let giftCount = 6;
  let intervalCount = 0;
  let additionalGifts = 0;
  let audio = document.getElementById("xmas-sound");
  let mainInterval;
  
  const startGameButton = document.getElementById('start-game');
  startGameButton.addEventListener('click', startGame);

  const gameOverButton = document.getElementById('game-over');

  for (let i = 0; i < giftCount; i++) {
    createGift(-window.innerHeight);
  }
  
  createCat(-100);  
}

window.addEventListener("load", onLoad);
