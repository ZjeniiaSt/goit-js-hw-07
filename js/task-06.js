const inputId = document.querySelector("#validation-input");
const inputLength = Number(inputId.dataset.length);

console.log(inputLength);

inputId.addEventListener("blur", onIputIn);

function onIputIn(event) {
  const inputText = event.target.value;

  if (inputText.length === inputLength) {
    inputId.classList.add("valid");
    inputId.classList.remove("invalid");
  } else {
    inputId.classList.add("invalid");
    inputId.classList.remove("valid");
  }
}
