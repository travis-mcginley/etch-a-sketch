// Create squares for a 16x16 grid

let createGrid = (size) => {
  for (let i = 0; i < (size*size); i++) {
    let grid = document.querySelector(".grid");
    let square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
  }
}
createGrid(64);

// Allow drawing on grid
let drawSingle = function(e) {
  let colorPicker = document.querySelector("#color-picker");
  this.style.backgroundColor = colorPicker.value;
}

let drawRGB = function(e) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  this.style.backgroundColor = "#" + randomColor;
}

let erase = function(e) {
  this.style.backgroundColor = "white";
}

let singleColorButton = document.querySelector("#color-button");
let rgbButton = document.querySelector("#rbg-button");
let eraserButton = document.querySelector("#eraser-button");

singleColorButton.addEventListener("click", function(e) {
  singleColorButton.classList.add("active");
  rgbButton.classList.remove("active");
  eraserButton.classList.remove("active");
  
  let grid = document.querySelectorAll(".grid > div");
  grid.forEach(cell => cell.onclick = drawSingle);
  grid.forEach(cell => cell.ondragover = drawSingle);
  grid.forEach(cell => cell.ondragleave = drawSingle);
  grid.forEach(cell => cell.ondragenter = drawSingle);
});

rgbButton.addEventListener("click", function(e) {
  singleColorButton.classList.remove("active");
  rgbButton.classList.add("active");
  eraserButton.classList.remove("active");
  
  let grid = document.querySelectorAll(".grid > div");
  grid.forEach(cell => cell.onclick = drawRGB);
  grid.forEach(cell => cell.ondragover = drawRGB);
  grid.forEach(cell => cell.ondragleave = drawRGB);
  grid.forEach(cell => cell.ondragenter = drawRGB);
});

eraserButton.addEventListener("click", function(e) {
  singleColorButton.classList.remove("active");
  rgbButton.classList.remove("active");
  eraserButton.classList.add("active");
  
  let grid = document.querySelectorAll(".grid > div");
  grid.forEach(cell => cell.onclick = erase);
  grid.forEach(cell => cell.ondragover = erase);
  grid.forEach(cell => cell.ondragleave = erase);
  grid.forEach(cell => cell.ondragenter = erase);
});

// Show slider value above slider
let sliderUpate = function(e) {
  let sliderDisplay = document.querySelector(".display");
  sliderDisplay.textContent = `${this.value} x ${this.value}`;
  createGrid(parseInt(this.value));
}
let slider = document.querySelector("#slider");
slider.addEventListener("change", sliderUpate);

// Clear grid upon command
let clearGrid = function(e) {
  let grid = document.querySelectorAll(".grid > div");
  grid.forEach(cell => cell.style.backgroundColor = "white");
}
let clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clearGrid);


