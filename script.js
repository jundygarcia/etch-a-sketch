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