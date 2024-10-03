const previos = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const circle = document.querySelectorAll(".circle");
// const progressWidth = parseFloat(progressLine.style.width);
let circlesActive = 1;

next.addEventListener("click", () => {
  circlesActive++;
  if (circlesActive > circle.length) {
    circlesActive = circle.length;
  }
  update();
});

previos.addEventListener("click", () => {
  circlesActive--;
  if (circlesActive < 0) {
    circlesActive = 1;
  }
  update();
});

function update() {
  circle.forEach((circle, index) => {
    if (index < circlesActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  var activeCircles = document.querySelectorAll(".active");
  progress.style.width = ((activeCircles.length - 1) / (circle.length - 1)) * 100 + "%";
  if (circlesActive > 1) {
    previos.disabled = false;
  } else {
    previos.disabled = true;
  }
  if (circlesActive > 3) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
}
