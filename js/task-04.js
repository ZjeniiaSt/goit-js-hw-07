const incrementEl = document.querySelector('[data-action="increment"]');
const descrementEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

const onBtnIncrement = () => {
  counterValue += 1;
  valueEl.innerText = counterValue;
};

const onBtnDecrement = () => {
  counterValue -= 1;
  valueEl.innerText = counterValue;
};

incrementEl.addEventListener("click", onBtnIncrement);

descrementEl.addEventListener("click", onBtnDecrement);
