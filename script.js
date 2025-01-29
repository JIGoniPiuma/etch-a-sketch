const body = document.querySelector("body");
const container = document.querySelector(".container");
const button = document.querySelector("button");
const squareSize = 16;

button.addEventListener("click", () => {
  let numSquares = prompt("Choose the # of squares per size of your Grid");

  if (isNaN(numSquares) || numSquares <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  console.log("Grid size chosen:", numSquares);
  container.innerHTML = "";
  container.style.width = `${numSquares * squareSize}px`;
  container.style.height = `${numSquares * squareSize}px`;
  generateGrid(numSquares);
});

function generateGrid(numSquares) {
  let totalSquares = numSquares * numSquares;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.dataset.opacity = 0.1;
    container.appendChild(square);

    square.addEventListener("mouseover", () => {
      let currentOpacity = parseFloat(square.dataset.opacity);
      if (currentOpacity < 1) {
        currentOpacity += 0.1;
        square.dataset.opacity = currentOpacity;
        square.style.opacity = currentOpacity;
      }
      const randomColor = getRandomColor();
      square.style.backgroundColor = `rgba(${randomColor}, ${currentOpacity})`;
    });
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Valor entre 0 y 255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `${r}, ${g}, ${b}`;
}
