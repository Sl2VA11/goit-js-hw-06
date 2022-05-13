const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const searchUl = document.querySelector("#ingredients")

const makeIngredient = ingredients => {
  return ingredients.map(ingredient => {
    const createLi = document.createElement('li');
    createLi.textContent = ingredient;
    createLi.classList.add("item");

    return createLi
  }) 
}

const elements = makeIngredient(ingredients);

searchUl.append(...elements);