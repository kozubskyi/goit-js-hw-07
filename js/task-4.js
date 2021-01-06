// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterRef = document.querySelector('#value');
let incrementButtonRef = document.querySelector(
  'button[data-action="increment"]',
);
let decrementButtonRef = document.querySelector(
  'button[data-action="decrement"]',
);

let counterValue = Number(counterRef.textContent);

const increment = () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
  // counterRef.textContent = Number(counterRef.textContent) + 1;
};
const decrement = () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
  // counterRef.textContent = Number(counterRef.textContent) - 1;
};

incrementButtonRef.addEventListener('click', increment);
decrementButtonRef.addEventListener('click', decrement);
