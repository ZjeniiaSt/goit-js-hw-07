const incrementEl = document.querySelector('[data-action="increment"]');
const descrementEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

incrementEl.addEventListener("click", () => {
  counterValue += 1;
  valueEl.innerText = counterValue;
});

descrementEl.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.innerText = counterValue;
});
