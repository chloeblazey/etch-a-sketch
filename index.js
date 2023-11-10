/* Defines the width and height of our grid */
const GRID_SIZE = 16; 

/* Creates the 16x16 grid that will become the etch-a-sketch board */
const gridContainer = document.querySelector("#grid-container");

/* Adds the "etched" class to an element, changing its color*/
function onMouseEnter(e) {
  e.target.className += " etched";
}

for (let i = 0; i < GRID_SIZE; i++) {
  const col = document.createElement("div")
  col.setAttribute("id", "col-" + i);
  col.setAttribute("class", "flex-col");

  for (let j = 0; j < GRID_SIZE; j++) {
    const cell = document.createElement("div")
    cell.setAttribute("id", "row-" + j)
    cell.setAttribute("class", "flex-cell");

    // create event listener for each cell
    cell.addEventListener("mouseenter", onMouseEnter)
    col.appendChild(cell);
  }
  gridContainer.appendChild(col);
}