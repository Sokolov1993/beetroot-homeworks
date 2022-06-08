'use strict';

//TODO: Напиши всі можливі варіанти створення функцій.

// arrow function

const iAmArrowFunc = (randomNum) => randomNum++;

const iAmArrowFuncToo = (first, second) => {
  console.log(first, second);
};

//function expression

const funcExpression = function (parameters) {};

//function declaration

function capitalizeAll(text) {}

// TODO: Створи функцію, яка буде виводити кількість переданих їй аргументів.

const calcArguments = (...arg) => {
  return arg.length;
};

console.log(calcArguments(1, 2, 3, 4));

// Варіант, коли кількість параметрів відома заздалегідь, а кількість аргументів - ні

const calcArgumentsOfFunc = (first = 0, second = 0, third = 0) => {
  return +!!first + +!!second + +!!third;
};

console.log(calcArgumentsOfFunc(1, 2));

//TODO: Напиши функцію, яка приймає 2 числа і повертає : -1, якщо перше число менше, ніж друге;  1 - якщо перше число більше, ніж друге;  0 - якщо числа рівні.

function getNumTransform(firstNum, secondNum) {
  if (firstNum > secondNum) return 1;
  if (firstNum < secondNum) return -1;
  else return 0;
}

console.log(getNumTransform(2, 2));

//TODO:Напиши функцію, яка обчислює факторіал переданого їй числа.

const calcFactorial = function (nmbr) {
  let result = 1;
  if (nmbr >= 1) {
    for (; nmbr; nmbr--) {
      result *= nmbr;
    }
    return result;
  } else if (nmbr === 0) {
    return 1;
  }
};

console.log(calcFactorial(4));

//TODO: Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

const createOneStringFromNmbr = (firstNmbr, secondNmbr, thirdNmbr) => {
  const nmbrToString = `${firstNmbr}${secondNmbr}${thirdNmbr}`; // or String(), .toString()
  return nmbrToString;
};

console.log(createOneStringFromNmbr(1, 2, 3));

//TODO: Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата

const calcRecOrSqrArea = (lenght, width) => {
  return lenght * width || lenght ** 2;
};

console.log(calcRecOrSqrArea(10, 2));

// TODO: Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

const checkIsNumberPerfect = (number) => {
  let sumOfDivisors = 0;
  for (let i = number - 1; i !== 0; i--) {
    if (number % i === 0) {
      sumOfDivisors += i;
    }
  }
  return sumOfDivisors === number ? 'Досконале число' : 'Звичайне число';
};

console.log(checkIsNumberPerfect(27));

// TODO:Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

const getOnlyPerfectNumbers = (rangeStart, rangeEnd) => {
  let arrayOfPerfectNmbrs = [];
  for (; rangeEnd != rangeStart; rangeEnd--) {
    if (checkIsNumberPerfect(rangeEnd) === 'Досконале число')
      arrayOfPerfectNmbrs.push(rangeEnd);
  }
  return arrayOfPerfectNmbrs.length > 0
    ? String(arrayOfPerfectNmbrs)
    : 'Досконалих чисел не знайдено';
};

console.log(getOnlyPerfectNumbers(0, 30));
