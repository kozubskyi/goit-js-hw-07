// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputRef = document.querySelector('#controls > input');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

function createBoxes() {
  let divArray = [];
  let divSize = 30;

  for (let i = 0; i < inputRef.value; i++) {
    let div = document.createElement('div');

    div.style.backgroundColor = createRandomColor();
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    divSize = changeDivSize(divSize);

    divArray.push(div);
  }
  boxesRef.append(...divArray);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

function createRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  console.log(`rgb(${r}, ${g}, ${b})`);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeDivSize(divSize) {
  divSize += 10;
  return divSize;
}

renderBtnRef.addEventListener('click', createBoxes);

destroyBtnRef.addEventListener('click', destroyBoxes);
