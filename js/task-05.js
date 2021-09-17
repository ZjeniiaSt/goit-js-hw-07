const refs = {
  nameInputEl: document.querySelector("#name-input"),
  nameOutputEl: document.querySelector("#name-output"),
};

console.log(refs.nameInputEl);
console.log(refs.nameOutputEl);

refs.nameInputEl.addEventListener("input", onIputChange);

function onIputChange(event) {
  refs.nameInputEl.value.length > 0
    ? (refs.nameOutputEl.textContent = event.target.value)
    : (refs.nameOutputEl.textContent = "незнакомец");
}

console.log(refs.nameOutputEl.textContent);
