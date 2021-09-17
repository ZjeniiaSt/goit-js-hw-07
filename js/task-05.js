const refs = {
  nameInputEl: document.querySelector("#name-input"),
  nameOutputEl: document.querySelector("#name-output"),
};

refs.nameInputEl.addEventListener("input", onIputChange);

function onIputChange(event) {
  refs.nameInputEl.value.length > 0
    ? (refs.nameOutputEl.textContent = event.target.value)
    : (refs.nameOutputEl.textContent = "незнакомец");
}
