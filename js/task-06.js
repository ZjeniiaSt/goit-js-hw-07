const inputId = document.querySelector("#validation-input");
const inputLength = Number(inputId.dataset.length);

console.log(inputLength);

inputId.addEventListener("blur", onIputIn);

function onIputIn(event) {
  const inputText = event.target.value;

  if (inputText.length === inputLength) {
    addClass("valid", "invalid");
  } else addClass("invalid", "valid");
}

function addClass(a, r) {
  inputId.classList.add(a);
  inputId.classList.remove(r);
}
