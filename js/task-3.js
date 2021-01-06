// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

{
  /* <ul id="gallery"></ul> */
}

// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');
galleryRef.style.display = 'flex';

//! Вариант 1

const createGallery = (array, elementRef) => {
  let liArray = array.map(element => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    li.append(img);

    img.setAttribute('src', `${element.url}`); // видимо ошибка, поскольку при url не загружаются картинки, а при src все работает
    img.setAttribute('alt', `${element.alt}`);

    img.style.width = '100%';
    li.style.listStyleType = 'none';
    li.style.margin = '15px';
    return li;
  });
  elementRef.append(...liArray);
};

createGallery(images, galleryRef);

//! Вариант 2

// const createCard = object => {
//   let li = document.createElement('li');
//   let img = document.createElement('img');
//   li.append(img);

//   img.setAttribute('src', `${object.url}`); // видимо ошибка, поскольку при url не загружаются картинки, а при src все работает
//   img.setAttribute('alt', `${object.alt}`);

//   img.style.width = '100%';
//   li.style.listStyleType = 'none';
//   li.style.margin = '15px';
//   return li;
// };

// const imagesArray = images.map(image => createCard(image))

// galleryRef.append(...imagesArray);

// console.log(imagesArray); // (3) [li, li, li]

//! Вариант 3

// const createCard = object => {
//   let li = document.createElement('li');
//   let img = document.createElement('img');
//   li.append(img);

//   img.setAttribute('src', `${object.url}`); // видимо ошибка, поскольку при url не загружаются картинки, а при src все работает
//   img.setAttribute('alt', `${object.alt}`);

//   img.style.width = '100%';
//   li.style.listStyleType = 'none';
//   li.style.margin = '15px';
//   return li;
// };

// const createGallery = (array, elementRef) => {
//   elementRef.append(...array.map(element => createCard(element)));
// };

// createGallery(images, galleryRef);

//! Вариант 4 (insertAdjacentHTML)

// const createCard = object => {
//   galleryRef.insertAdjacentHTML(
//     'beforeend',
//     `<li style="list-style-type: none; margin: 15px;"><img src="${object.url}" alt="${object.alt}" style="width: 100%;"></li>`,
//   ); // При 'afterbegin' картинки ставятся с 3 по 1
// };

// const imagesArray = images.map(image => createCard(image));

// console.log(imagesArray); // Почему-то выдает (3) [undefined, undefined, undefined], хотя код работает
