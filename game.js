function dropDown () {
  let x = document.querySelector(".gift").style.top;
  let strX = x.replace("px", "");
  console.log(strX);
  let numX = parseInt(strX);
  document.querySelector(".gift").style.top = `${numX+10}px`;
  //console.log(document.querySelector(".gift").style.top);
}

function onLoad () {

  const root = document.getElementById("root");
  
  root.insertAdjacentHTML("beforeend", "<div class='gift'></div>");
  let i = 20;
  dropDown();
  setInterval(dropDown, 500);

}

window.addEventListener("load", onLoad);






/* 
initGame();

function initGame() {

  // Your game can start here, but define separate functions, don't write everything in here :)
}
 */