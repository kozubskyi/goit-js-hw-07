// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('#name-input');
const textContentRef = document.querySelector('#name-output');

//! Вариант 1

// const createTextContent = event => {
//   event.preventDefault();

//   event.target.value
//     ? (textContentRef.textContent = event.target.value)
//     : (textContentRef.textContent = 'незнакомец');
// };

// inputRef.addEventListener('keyup', createTextContent);

//! Вариант 2

// inputRef.addEventListener('keyup', event => {
//   event.preventDefault();

//   event.target.value
//     ? (textContentRef.textContent = event.target.value)
//     : (textContentRef.textContent = 'незнакомец');
// });

//! Варинат 3 (input)

const createTextContent = event => {
  event.preventDefault();

  event.target.value
    ? (textContentRef.textContent = event.target.value)
    : (textContentRef.textContent = 'незнакомец');
};

inputRef.addEventListener('input', createTextContent);
