const container = document.querySelector("#container");

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = container.clientWidth / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    
    square.addEventListener("mouseenter", () => {
        square.classList.add("colored"); //gives the square the colored class
    });
    
    container.appendChild(square);
  }
}

createGrid(16);

const newGridButton = document.querySelector("#new-grid");

newGridButton.addEventListener("click", () => {
  const input = prompt("How many squares per side? (max 100)");

  if (input === null) return; // they pressed Cancel

  const size = parseInt(input);

  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number from 1 to 100.");
    return;
  }

  createGrid(size);
});