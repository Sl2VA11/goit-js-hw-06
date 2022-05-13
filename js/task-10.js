


const refs = {
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  valueOfElements: document.querySelector('input'),
  elementToAdd: document.querySelector('#boxes'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const minAmountOfElements = Number(refs.valueOfElements.getAttribute('min'));
const maxAmountOfElements = Number(refs.valueOfElements.getAttribute('max'));

function createBoxes() {
  const arr = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < refs.valueOfElements.value; i += 1) {
    const divEl = document.createElement('div');
    const elementColor = getRandomHexColor();
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;

    divEl.style.backgroundColor = elementColor;
    divEl.classList.add('addedElements');
    width += 10;
    height += 10;
    arr.push(divEl);
    
  }
  return refs.elementToAdd.append(...arr);
}

function removeElements() {


  refs.elementToAdd.innerHTML = '';
  refs.valueOfElements.value = '';

  
}

refs.createButton.addEventListener('click', createBoxes);
refs.destroyButton.addEventListener('click', removeElements);