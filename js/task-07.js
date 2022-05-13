const refs = {
   slider: document.querySelector("#font-size-control"),
   text: document.querySelector("#text"),
}

refs.slider.addEventListener("input" , fontSizeIncrease)

function fontSizeIncrease() {
   refs.text.style.fontSize = refs.slider.value + 'px'
}


