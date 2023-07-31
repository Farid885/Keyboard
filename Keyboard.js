const arrowUp = document.getElementById("keyUp");
const arrowLeft = document.getElementById("keyLeft");
const arrowDown = document.getElementById("keyDowne");
const arrowRight = document.getElementById("keyRight");
document.addEventListener("keydown", (e) => {
  if (e.which == 38) {
    arrowUp.style.color = "yellow";
    arrowUp.style.transform = " translate3d(-3px, 3px, 0)";
    console.log(e.which, "UP");
  }
});
document.addEventListener("keyup", (e) => {
  if (e.which == 38) {
    arrowUp.style.color = "";
    arrowUp.style.transform = "";
  }
});
//  -----------------------
document.addEventListener("keydown", (e) => {
  if (e.which == 37) {
    arrowLeft.style.color = "darkblue";
    arrowLeft.style.transform = " translate3d(-3px, 3px, 0)";
    console.log(e.which, "LEFT");
  }
});
document.addEventListener("keyup", (e) => {
  if (e.which == 37) {
    arrowLeft.style.color = "";
    arrowLeft.style.transform = "";
  }
});
//  ------------------------
document.addEventListener("keydown", (e) => {
  if (e.which == 40) {
    arrowDown.style.color = "green";
    arrowDown.style.transform = " translate3d(-3px, 3px, 0)";
    console.log(e.which, "DOWN");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.which == 40) {
    arrowDown.style.color = "";
    arrowDown.style.transform = "";
  }
});
//  --------------------------------

document.addEventListener("keydown", (e) => {
  if (e.which == 39) {
    arrowRight.style.color = "red";
    arrowRight.style.transform = " translate3d(-3px, 3px, 0)";
    console.log(e.which, "RIGHT");
  }
});
document.addEventListener("keyup", (e) => {
  if (e.which == 39) {
    arrowRight.style.color = "";
    arrowRight.style.transform = "";
  }
});
