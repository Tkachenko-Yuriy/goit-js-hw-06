const countCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${countCategoriesEl.length}`);

const titleEl = document.querySelectorAll('.item h2');

titleEl.forEach((element) => {
  console.log(`Category: ${element.textContent}`);
  console.log(`Elements: ${element.nextElementSibling.children.length}`);
});
