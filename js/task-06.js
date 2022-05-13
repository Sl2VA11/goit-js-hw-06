
const input = document.querySelector("#validation-input")
const dataLength = Number(input.getAttribute('data-length'));

input.addEventListener("blur" , onValidInput)

function onValidInput(event) {
   if (input.classList.contains("valid")) {
      input.classList.remove("valid")
   }

   if (input.classList.contains("invalid")) {
      input.classList.remove("invalid")
   }

   event.currentTarget.value.length === dataLength
      ? input.classList.add("valid")
      : input.classList.add("invalid")
}



