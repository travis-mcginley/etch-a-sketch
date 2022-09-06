// Create squares for a 16x16 grid
for (let i = 0; i < (16*16); i++) {
  let grid = document.querySelector(".grid");
  let square = document.createElement("div");
  square.classList.add("square");
  square.setAttribute("id", `square-${i + 1}`); // Give id to each square for individual modifications
  grid.appendChild(square);
}