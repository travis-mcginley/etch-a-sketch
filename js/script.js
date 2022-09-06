// Create squares for a 16x16 grid

const createGrid = (size) => {
  for (let i = 0; i < (size*size); i++) {
    let grid = document.querySelector(".grid");
    let square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
  }
}
createGrid(64);

// Allow drawing on grid
const drawSingle = function(e) {
  const colorPicker = document.querySelector("#color-picker");
  this.style.backgroundColor = colorPicker.value;
}

const drawRGB = function(e) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  this.style.backgroundColor = "#" + randomColor;
}

const erase = function(e) {
  this.style.backgroundColor = "white";
}

const singleColorButton = document.querySelector("#color-button");
const rgbButton = document.querySelector("#rbg-button");
const eraserButton = document.querySelector("#eraser-button");

const gridMode = (func) => {
  const grid = document.querySelectorAll(".grid > div");
  grid.forEach(cell => cell.onclick = func);
  grid.forEach(cell => cell.ondragover = func);
  grid.forEach(cell => cell.ondragleave = func);
  grid.forEach(cell => cell.ondragenter = func);
}

singleColorButton.addEventListener("click", function(e) {
  singleColorButton.classList.add("active");
  rgbButton.classList.remove("active");
  eraserButton.classList.remove("active");
  gridMode(drawSingle);
});

rgbButton.addEventListener("click", function(e) {
  singleColorButton.classList.remove("active");
  rgbButton.classList.add("active");
  eraserButton.classList.remove("active");
  gridMode(drawRGB);
});

eraserButton.addEventListener("click", function(e) {
  singleColorButton.classList.remove("active");
  rgbButton.classList.remove("active");
  eraserButton.classList.add("active");
  gridMode(erase);
});

// Show slider value above slider
document.querySelector("#slider").addEventListener("change", function(e) {
  let sliderDisplay = document.querySelector(".display");
  sliderDisplay.textContent = `${this.value} x ${this.value}`;
  createGrid(parseInt(this.value));
});

// Clear grid upon command
document.querySelector("#clear-button").addEventListener("click", function(e) {
  let grid = document.querySelectorAll(".grid > div");
  grid.forEach(cell => cell.style.backgroundColor = "white");
});


