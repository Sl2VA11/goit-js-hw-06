const refs = {
  btn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
} 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.body.addEventListener('click' , changeBodyColor)

function changeBodyColor() {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.span.textContent = randomColor
}