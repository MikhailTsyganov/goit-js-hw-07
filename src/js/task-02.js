
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsContainer = document.querySelector('#ingredients')

const elements = [];



for (let i = 0; i < ingredients.length; i += 1) {
  console.log(ingredients[i]);
  const item = document.createElement('li')
  item.textContent = ingredients[i];
  
  elements.push(item)
}
  
ingredientsContainer.append(...elements)

// console.log(elements);

// console.log(makeScript(ingredients));