document.addEventListener("keydown", (ev) => {
  let ball = document.querySelector(".ball");
  let left = ball.style.left;
  let leftPixel = Number(ball.style.left.replace("px", ""));
  let topPixel = Number(ball.style.top.replace("px", ""));
  let speed=10;
  if (ev.keyCode == 38) {
    if (topPixel > 0) {
      ball.style.top = `${topPixel - speed}px`;
    }
    console.log(ball.style.top);
  } else if (ev.keyCode == 40) {
    if (topPixel < 450) {
      ball.style.top = `${topPixel+speed}px`;
    }
  } else if (ev.keyCode == 37) {
    if (leftPixel>0)
    ball.style.left = `${leftPixel -speed}px`;
  } else if (ev.keyCode == 39) {
    if(leftPixel<1450){
    ball.style.left = `${ leftPixel+speed}px`;}
  }
});