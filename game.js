
// let onLoadInterval = setInterval(onLoad, 2000);

function onLoad () {
  function color(){
    root.querySelector(".gift").classList.add("color");
  }
  
  function collectGift() {
    highScore += 1;
    console.log(highScore);
    this.remove();
  }
  
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const root = document.getElementById("root");
  let highScore = 0;
  let giftCount = 5;
  
  let gift;
  for (let i = 0; i < giftCount; i++) {
    gift = document.createElement('div');
    gift.classList.add('gift');
    gift.style.top = getRandom(-50, -700) + 'px';
    gift.style.left = getRandom(0, window.innerWidth) + 'px';
    gift.addEventListener('click', collectGift);
    root.appendChild(gift);
  }
  
  let mainInterval = setInterval(main, 33);
  
  function main() {
    let gifts = document.querySelectorAll('.gift');
    
    for (let i = 0; i < gifts.length; i++) {
      let top = parseInt(gifts[i].style.top);
      // top += Math.floor(Math.random() * (5 - 1) + 1);
      top += 5;
      gifts[i].style.top = `${top}px`;
      
      if (top >= window.innerHeight) {
        gifts[i].remove();
      }
    }
    
    
    // let p = i.toString()+"px";
    // console.log(p);
    // return i;

    
    /* let strX = x.replace("px", "");
    console.log(strX);
    let numX = parseInt(strX);
    document.querySelector(".gift").style.top = `${numX+10}px`;
    *///console.log(document.querySelector(".gift").style.top);    
  }
  
  
  // i = 0;
  // setInterval(function () { i = dropDown(i)}, 1000);  
  
  // root.addEventListener("click", remove);
  // console.log(highScore);
  
}

window.addEventListener("load", onLoad);






/* 
initGame();

function initGame() {
  
  // Your game can start here, but define separate functions, don't write everything in here :)
}
 */