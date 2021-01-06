// В HTML есть пустой список ul#ingredients.

{
  /* <ul id="ingredients"></ul> */
}

// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

//! Вариант 1

// ingredients.forEach(() => {
//   let li = document.createElement('li');
//   ingredientsRef.append(li);
// })

//! Вариант 2

// ingredients.forEach(() => ingredientsRef.append(document.createElement('li')));

//! Вариант 3

const createList = array => {
  let liArray = array.map(item => {
    let li = document.createElement('li');
    li.textContent = item;
    return li;
  });
  ingredientsRef.append(...liArray);
};

createList(ingredients);

//! Вариант 4

// const createItem = item => {
//   let li = document.createElement('li');
//   li.textContent = item;
//   return li;
// };

// const ingredientsArray = ingredients.map(ingredient => createItem(ingredient));

// ingredientsRef.append(...ingredientsArray);
