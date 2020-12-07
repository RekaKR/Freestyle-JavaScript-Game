function dropDown (i) {
  console.log(i);
  let p = i.toString()+"px";
  console.log(p);
  document.querySelector(".gift").style.top = p;
  i += 10;
  return i;
  /* let strX = x.replace("px", "");
  console.log(strX);
  let numX = parseInt(strX);
  document.querySelector(".gift").style.top = `${numX+10}px`;
  *///console.log(document.querySelector(".gift").style.top);
}

function remove(){
  root.querySelector(".gift").classList.add("removed");
}

function color(){
  root.querySelector(".gift").classList.add("color");
}


function onLoad () {
  
  const root = document.getElementById("root");
  let highScore = 0;
  
  root.insertAdjacentHTML("beforeend", "<div class='gift'></div>");
  
  i = 0;
  setInterval( function () { i = dropDown(i)}, 1000);
  
  
  root.addEventListener("click", remove);
  highScore += 1;
  console.log(highScore);
}

window.addEventListener("load", onLoad);







/* 
initGame();

function initGame() {

  // Your game can start here, but define separate functions, don't write everything in here :)
}
 */