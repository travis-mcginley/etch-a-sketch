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
let draw = function(e) {
  let colorPicker = document.querySelector("#color-picker");
  this.style.backgroundColor = colorPicker.value;
}
let grid = document.querySelectorAll(".grid > div");
grid.forEach(cell => cell.addEventListener("mousedown", draw));

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


