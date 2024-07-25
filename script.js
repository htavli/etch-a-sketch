let chosenColor = "white";
let defaultColor = "#ececec";

const colorBox = document.querySelector("#colorBox");
colorBox.style.backgroundColor = "#ececec";

function isNumber(value) {
  return typeof parseInt(value) === "number";
}

function createGrid(drawContainer, x, y) {
  let pixelSize_x = 1000 / x;
  console.log(pixelSize_x);
  let pixelSize_y = 750 / y;
  console.log(pixelSize_y);
  for (let i = 0; i < x; i++) {
    const column = document.createElement("div");
    column.classList.toggle("column");
    for (let j = 0; j < y; j++) {
      const pixel = document.createElement("div");
      pixel.classList.toggle("pixel");
      pixel.style.width = `${pixelSize_x}px`;
      pixel.style.height = `${pixelSize_y}px`;
      pixel.addEventListener("click", () => {
        if (pixel.classList.contains("colored")) {
          pixel.style.backgroundColor = defaultColor;
          console.log("default");
          pixel.classList.toggle("colored");
        } else {
          pixel.style.backgroundColor = chosenColor;
          pixel.classList.toggle("colored");
        }
      });
      pixel.addEventListener("mouseover", () => {
        pixel.classList.toggle("onHover");
      });
      pixel.addEventListener("mouseleave", () => {
        pixel.classList.toggle("onHover");
      });
      column.appendChild(pixel);
    }
    drawContainer.appendChild(column);
  }
}

function Main() {
  const drawContainer = document.querySelector("#drawContainer");
  drawContainer.innerHTML = "";
  let x = prompt("How many horizontal pixels do you want?");
  if (!isNumber(x) || x > 100) {
    x = 10;
  }
  let y = prompt("How many vertical pixels do you want?");
  if (!isNumber(y) || y > 100) {
    y = 10;
  }
  createGrid(drawContainer, x, y);
}

const colorInput = document.querySelectorAll(".colorInput");

colorInput.forEach((item) => {
  item.addEventListener("input", () => {
    changeColor(colorInput);
  });
});

function changeColor(val) {
  console.log(val[0].value);
  console.log(val[1].value);
  console.log(val[2].value);
  let res = `rgb(${val[0].value},${val[1].value},${val[2].value}`;
  chosenColor = res;
  colorBox.style.backgroundColor = res;
}

const gridButton = document.querySelector("#removeGrid");
gridButton.addEventListener("click", () => {
  Main();
});

Main();
