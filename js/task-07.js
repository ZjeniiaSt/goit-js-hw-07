const inputId = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

console.log(inputId);
console.log(textEl);

inputId.addEventListener("input", onInputRange);
function onInputRange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
