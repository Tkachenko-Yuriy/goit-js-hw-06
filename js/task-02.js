const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector('#ingredients');
const itemsEl = ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = `${ingredient}`;

  return item;
});

listEl.append(...itemsEl);
