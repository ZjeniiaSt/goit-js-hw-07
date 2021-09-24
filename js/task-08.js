const renderEl = document.querySelector('[data-action="render"]');
const destroyEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.getElementById("boxes");
const amountEl = document.querySelector("#controls input");

console.log(renderEl);
console.log(destroyEl);
console.log(boxesEl);

renderEl.addEventListener("click", getAmount);

function getAmount() {
  let amount = +amountEl.value;
  creareBox(amount);
}

function creareBox(amount) {
  let basicSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function random() {
  return Math.floor(Math.random() * 256);
}

destroyEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
