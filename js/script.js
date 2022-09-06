// Create squares for a 16x16 grid
for (let i = 0; i < (5*5); i++) {
  let grid = document.querySelector(".grid");
  let square = document.createElement("div");
  square.classList.add("square");
  grid.appendChild(square);
}

