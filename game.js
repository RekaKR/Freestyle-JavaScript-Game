
// let onLoadInterval = setInterval(onLoad, 2000);

function onLoad () {
  function collectGift() {
    let scoreNumber = document.getElementById("score");
    score += 1;
    scoreNumber.textContent = `${score}`;
    this.remove();
  }
  
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function createGift(top) {
    let gift = document.createElement('div');
    let random = getRandom(1, 25);
    gift.innerHTML = `<img src="./img/gift${random}.svg">`;
    gift.classList.add('gift');
    gift.style.top = getRandom(-50, top) + 'px';
    gift.style.left = getRandom(0, window.innerWidth - 50) + 'px';
    gift.addEventListener('click', collectGift);
    root.appendChild(gift);
  }

  const root = document.getElementById("root");
  let score = 0;
  let life = 5;
  let giftCount = 6;
  let mainRuns = 0;
  let additionalGifts = 0;
  
  for (let i = 0; i < giftCount; i++) {
    createGift(-window.innerHeight);
  }
  
  let mainInterval = setInterval(main, 30);
  
  function main() {
    
    mainRuns++;
    if (mainRuns % 420 === 0) {
      additionalGifts++;
    }
    giftCount = getRandom(3 + additionalGifts, 5 + additionalGifts);

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
        console.log(life);
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
          clearInterval(mainInterval);
        }
      }
    }
  }
}

window.addEventListener("load", onLoad);