// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// - Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// - Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');

const checkValidation = event => {
  const element = event.target;

  // let maxSymbolQuantity = Number(element.dataset.length);
  let maxSymbolQuantity = element.dataset.length; // работает и без Number

  if (element.value.length > 0 && element.value.length <= maxSymbolQuantity) {
    element.classList.remove('invalid');
    element.classList.add('valid');
  } else if (element.value.length > maxSymbolQuantity) {
    element.classList.remove('valid');
    element.classList.add('invalid');
  } else {
    element.classList.remove('valid');
    // element.classList.remove('invalid'); // не обязателен
  }
};

inputRef.addEventListener('input', checkValidation);
