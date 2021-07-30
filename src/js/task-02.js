
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsContainer = document.querySelector('#ingredients')

// const elements = [];

//   ingredients.forEach((ingredient) => {
//   const item = document.createElement('li')
//   item.textContent = ingredient;
  
//   elements.push(item)
// });

  


const elements = ingredients.map((ingredient) => {
  
    const item = document.createElement('li')
  item.textContent = ingredient;
  
  return item;
  
});

ingredientsContainer.append(...elements)