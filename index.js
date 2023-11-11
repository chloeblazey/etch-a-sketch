const gridContainer = document.querySelector("#grid-container");

/* Adds the "etched" class to an element, changing its color*/
function onMouseEnter(e) {
  e.target.className += " etched";
}

/* Creates the size x size grid that will become the etch-a-sketch board */
function createGrid(gridSize = 16) {
  gridContainer.replaceChildren();
  for (let i = 0; i < gridSize; i++) {
    const col = document.createElement("div")
    col.setAttribute("id", "col-" + i);
    col.setAttribute("class", "flex-col");

    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div")
      cell.setAttribute("id", "row-" + j)
      cell.setAttribute("class", "flex-cell");

          // create event listener for each cell
      cell.addEventListener("mouseenter", onMouseEnter)
      col.appendChild(cell);
    }
    gridContainer.appendChild(col);
}}

/* Updates the number of cells in the grid */
function updateGrid(e) {
  e.preventDefault();
  let n = e.target.elements[0].value;
  createGrid(n);
}

/* Attaches an event listener to the form submit button */
const form = document.querySelector("#grid-size-form");
form.addEventListener("submit", updateGrid);

createGrid();