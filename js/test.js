// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const containerRef = document.createElement('div');
containerRef.classList.add('product-card');

const titleRef = document.createElement('h2');
titleRef.classList.add('product-card__name');
titleRef.textContent = 'Сервоприводы';

const descriptionRef = document.createElement('p');
descriptionRef.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a unde repellat porro repudiandae, aperiam inventore. Nemo, veniam rem. Asperiores.';

const priceRef = document.createElement('p');
priceRef.textContent = 'Цена: 2000 кредитов';

// containerRef.appendChild(titleRef);
// containerRef.appendChild(descriptionRef);
// containerRef.appendChild(priceRef);
containerRef.append(titleRef, descriptionRef, priceRef);

console.log(containerRef);

// ===========================================

// function digital_root(n) {}
// Написать функцию которая находит сумму цифр до тех пор, пока в результате не будет одна цифра
// примеры работы:
// 16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// 1. Преобразовать полученное число в строку
// 2. Методом .split() создать массив и разбить строку, где каждым элементом массива будет строка из 1-го символа (в нашем случае строка с цифрой)
// 3. Преобразовать каждый элемент массива в число при помощи Number()
// 4. Посчитать сумму элеметов массива и если полученное число >9 сделать операции 1-3, а если <= 9, то вернуть result

function digital_root(n) {
  let nArray = String(n).split('');
  let summ = 0
  nArray.forEach(element => {
    element = Number(element)
    summ += element;
  })
  console.log(summ);

  return summ;
}

console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));

const a = array => {
  return array.reduce((acc, element) => {
    if (element % 2) {
      acc.push(element);
      return acc;
    }
  }, []);
};

console.log(a([1, 8, 3, 6, 5, 4, 7, 2, 9, 0]));