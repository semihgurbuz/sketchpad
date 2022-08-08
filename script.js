// const container = document.querySelector(".container");

// for (let i = 0; i < 256; i++) {
//   const square = document.createElement("div");
//   square.classList.add("square");
//   container.appendChild(square);
// }

const container = document.getElementById("container");

function makeRows(rows = 16, cols = 16) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseenter", () => {
      cell.classList.add("black");
    });
    container.appendChild(cell).className = "grid-item";
  }
}

const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  let size = prompt(
    "Please enter a single number as the size of the sketchpad"
  );
  if (size <= 100 && size > 0) {
    makeRows(size, size);
  } else {
    alert("Maximum allowed size is 100x100");
    makeRows(100, 100);
  }
});
