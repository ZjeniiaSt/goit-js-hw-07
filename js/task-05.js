const refs = {
  nameInputEl: document.querySelector("#name-input"),
  nameOutputEl: document.querySelector("#name-output"),
};

console.log(refs.nameInputEl);
console.log(refs.nameOutputEl);

refs.nameInputEl.addEventListener("input", onIputChange);

function onIputChange() {
  console.log(event.currentTarget.value);
  refs.nameOutputEl.textContent = event.currentTarget.value;
}
