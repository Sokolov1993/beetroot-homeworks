"use strict";

//TODO: Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const ageDetectInput = document.getElementById("ageDetect__input");
const ageDetectButton = document.getElementById("ageDetect__button");
const ageDetectResult = document.getElementById("ageDetect__span");

ageDetectButton.onclick = function () {
  if (0 <= ageDetectInput.valueAsNumber && ageDetectInput.valueAsNumber <= 11) {
    ageDetectResult.innerText = "Дитина";
  } else if (
    ageDetectInput.valueAsNumber > 11 &&
    ageDetectInput.valueAsNumber <= 17
  ) {
    ageDetectResult.innerHTML = "Підліток";
  } else if (
    ageDetectInput.valueAsNumber > 17 &&
    ageDetectInput.valueAsNumber <= 59
  ) {
    ageDetectResult.innerHTML = "Дорослий";
  } else if (ageDetectInput.valueAsNumber > 59) {
    ageDetectResult.innerHTML = "Пенсіонер";
  } else {
    ageDetectResult.innerHTML = "Помилка вводу";
  }
};

// Варінт з console.log

/* 
const age = +prompt("Скільки тобі років?");
if (0 <= age && age <= 11) {
  console.log("Дитина");
} else if (age > 11 && age <= 17) {
  console.log("Підліток");
} else if (age > 17 && age <= 59) {
  console.log("Дорослий");
} else if (age > 59) {
  console.log("Пенсіонер");
} else {
  console.log("Помилка вводу");
}
*/

//TODO: Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const specialSymbolReturnInput = document.getElementById(
  "specialSymbolReturn__input"
);
const specialSymbolReturnButton = document.getElementById(
  "specialSymbolReturn__button"
);
const specialSymbolReturnResult = document.getElementById(
  "specialSymbolReturn__span"
);

const symbolCollection = {
  1: "!",
  2: "@",
  3: "#",
  4: "$",
  5: "%",
  6: "^",
  7: "&",
  8: "*",
  9: "(",
  0: ")",
};

specialSymbolReturnButton.onclick = function () {
  specialSymbolReturnResult.innerHTML =
    symbolCollection[specialSymbolReturnInput.valueAsNumber] ?? "Помилка вводу";
};

// Варіант з console.log

/*
const symbolCollection = {
  1: "!",
  2: "@",
  3: "#",
  4: "$",
  5: "%",
  6: "^",
  7: "&",
  8: "*",
  9: "(",
  0: ")",
};
console.log(symbolCollection[+prompt("Введи число:")]);
*/

//  Варіант 2 з застосуванням switch

/* 
switch (prompt("Введи число:")) {
  case "1":
    console.log("!");
    break;
  case "2":
    console.log("@");
    break;
  case "3":
    console.log("#");
    break;
  case "4":
    console.log("$");
    break;
  case "5":
    console.log("%");
    break;
  case "6":
    console.log("^");
    break;
  case "7":
    console.log("&");
    break;
  case "8":
    console.log("*");
    break;
  case "7":
    console.log("(");
    break;
  case "7":
    console.log(")");
    break;
  default:
    console.log("Помилка вводу.");
}
*/

//TODO: Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const sumInRangeStart = document.getElementById("sumInRange__start");
const sumInRangeEnd = document.getElementById("sumInRange__end");
const sumInRangeButton = document.getElementById("sumInRange__button");
const sumInRangeResult = document.getElementById("sumInRange__span");

sumInRangeButton.onclick = function () {
  let sumOfVar = 0;
  for (let i = +sumInRangeStart.value; i <= +sumInRangeEnd.value; i++) {
    sumOfVar += i;
  }
  sumInRangeResult.innerHTML = sumOfVar;
};

// Варіант з console.log

/*
let rangeStart = +prompt("Введіть початкове значення діапазону:");
const rangeEnd = +prompt("Введіть кінцеве значення діапазону");
let sumOf = 0;

for (rangeStart; rangeStart <= rangeEnd; rangeStart++) {
  sumOf += rangeStart;
}
console.log(sumOf);
*/

// Варіант реалізації через while

/*
let rangeStart = +prompt("Введіть початкове значення діапазону:");
const rangeEnd = +prompt("Введіть кінцеве значення діапазону");
let sumOf = 0;

while (rangeStart <= rangeEnd) {
  sumOf += rangeStart;
  rangeStart++;
}
*/

//TODO: Запитай у користувача 2 числа і знайди найбільший спільний дільник.
const maxCommonDivisorFirstNmbr = document.getElementById(
  "maxCommonDivisor__firstNumber"
);
const maxCommonDivisorSecondNmbr = document.getElementById(
  "maxCommonDivisor__secondNumber"
);
const maxCommonDivisorButton = document.getElementById(
  "maxCommonDivisor__button"
);
const maxCommonDivisorResult = document.getElementById(
  "maxCommonDivisor__span"
);

maxCommonDivisorButton.onclick = function () {
  for (
    let i = Math.min(
      +maxCommonDivisorFirstNmbr.value,
      +maxCommonDivisorSecondNmbr.value
    );
    i !== 0;
    i--
  ) {
    if (
      +maxCommonDivisorFirstNmbr.value % i === 0 &&
      +maxCommonDivisorSecondNmbr.value % i === 0
    ) {
      maxCommonDivisorResult.innerHTML = i;
      break;
    }
  }
};

// Варіант з console.log

/*
const firstNumber = +prompt("Введи перше число:");
const secondNumber = +prompt("Введи друге число:");
let result = 0;

for (result = Math.min(firstNumber, secondNumber); result !== 0; result--) {
  if (firstNumber % result === 0 && secondNumber % result === 0) {
    console.log(result);
    break;
  }
}
*/

//TODO: Запитай у користувача число і виведи всі дільники цього числа.

const allDivisorsOfNmbr = document.getElementById("allDivisorsOf__input");
const allDivisorsOfButton = document.getElementById("allDivisorsOf__button");
const allDivisorsOfResult = document.getElementById("allDivisorsOf__span");

allDivisorsOfButton.onclick = function () {
  let arrayOfDivisors = [];
  for (let i = 0; i <= +allDivisorsOfNmbr.value; i++) {
    if (+allDivisorsOfNmbr.value % i === 0) {
      arrayOfDivisors.push(i);
    }
  }
  allDivisorsOfResult.innerHTML = arrayOfDivisors.join(", ");
};

// Варіант з console.log

/*
const findAllDivisorsOf = +prompt("Введи число:");
let arrayOfDivisors = [];

for (let i = 0; i <= findAllDivisorsOf; i++) {
  if (findAllDivisorsOf % i === 0) {
    arrayOfDivisors.push(i);
  }
}
console.log(arrayOfDivisors.join(","));
*/

//TODO: Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const isPalindromeNmbr = document.getElementById("isPalindrome__input");
const isPalindromeButton = document.getElementById("isPalindrome__button");
const isPalindromeResult = document.getElementById("isPalindrome__span");

isPalindromeButton.onclick = function () {
  isPalindromeResult.innerHTML =
    isPalindromeNmbr.value ===
    isPalindromeNmbr.value.split("").reverse().join("")
      ? "Це паліндром"
      : "Це звичайне число";
};

// Варіант з console.log

/*
const isPalindrome = prompt("Введи число:");

console.log(
  isPalindrome === isPalindrome.split("").reverse().join("")
    ? "Це паліндром"
    : "Це звичайне число"
);
*/

// варіант 2 з циклом for

/*
const palindromeDetect = prompt("Введи число:");
let reversedNmbr = "";

for (let i = palindromeDetect.length - 1; i >= 0; i--) {
  reversedNmbr += palindromeDetect[i];
}
console.log(
  palindromeDetect === reversedNmbr ? "Це паліндром" : "Це звичайне число"
);
*/

//TODO:Запитай у користувача суму покупки і виведи суму до оплати зі знижкою: від 200 до 300 - знижка буде 3%;  від 300 до 500 - 5%; від 500 і вище - 7%.

const calcDiscount = document.getElementById("calcDiscount__input");
const calcDiscountButton = document.getElementById("calcDiscount__button");
const calcDiscountResult = document.getElementById("calcDiscount__span");

calcDiscountButton.onclick = function () {
  if (+calcDiscount.value >= 200 && +calcDiscount.value < 300) {
    calcDiscountResult.innerHTML =
      +calcDiscount.value - (+calcDiscount.value / 100) * 3 + ". Знижка 3%";
  } else if (+calcDiscount.value >= 300 && +calcDiscount.value < 500) {
    calcDiscountResult.innerHTML =
      +calcDiscount.value - (+calcDiscount.value / 100) * 5 + ". Знижка 5%";
  } else {
    calcDiscountResult.innerHTML =
      +calcDiscount.value - (+calcDiscount.value / 100) * 7 + ". Знижка 7%";
  }
};

// Варіант з console.log

/*
const buyPrice = +prompt("Введи суму покупки:");

if (buyPrice >= 200 && buyPrice < 300) {
  console.log(buyPrice - (buyPrice / 100) * 3, "Знижка 3%");
} else if (buyPrice >= 300 && buyPrice < 500) {
  console.log(buyPrice - (buyPrice / 100) * 5, "Знижка 5%");
} else {
  console.log(buyPrice - (buyPrice / 100) * 7, "Знижка 7%");
}
*/

//TODO: Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

const typeOfNumbers = document.getElementById("typeOfNumbers__input");
const typeOfNumbersButton = document.getElementById("typeOfNumbers__button");
const typeOfNumbersResult = document.getElementById("typeOfNumbers__span");

typeOfNumbersButton.onclick = function () {
  let arrayOfNumbers = typeOfNumbers.value.split(" ");
  let counterForZeros = 0;
  let counterForNegative = 0;
  let counterForPositive = 0;
  let counterForEven = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (+arrayOfNumbers[i] < 0) {
      counterForNegative++;
      if (+arrayOfNumbers[i] % 2 === 0) {
        counterForEven++;
      }
    } else if (+arrayOfNumbers[i] === 0) {
      counterForZeros++;
    } else if (+arrayOfNumbers[i] > 0) {
      counterForPositive++;
      if (+arrayOfNumbers[i] % 2 === 0) {
        counterForEven++;
      }
    }
  }

  typeOfNumbersResult.innerHTML = `Кількість нулів: ${counterForZeros}. \n Кількість додатніх чисел: ${counterForPositive}. \n Кількість від'ємних чисел: ${counterForNegative}.\n Кількість парних чисел: ${counterForEven}`;
};

// Варіант з console.log

/*
let counterForIter = 1;
let arrayOfNumbers = [];
let counterForZeros = 0;
let counterForNegative = 0;
let counterForPositive = 0;
let counterForEven = 0;

while (counterForIter <= 10) {
  arrayOfNumbers.push(+prompt(`Введи ${counterForIter} число:`));
  counterForIter++;
}

for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] < 0) {
    counterForNegative++;
    if (arrayOfNumbers[i] % 2 === 0) {
      counterForEven++;
    }
  } else if (arrayOfNumbers[i] === 0) {
    counterForZeros++;
  } else if (arrayOfNumbers[i] > 0) {
    counterForPositive++;
    if (arrayOfNumbers[i] % 2 === 0) {
      counterForEven++;
    }
  }
}

console.log(
  `Кількість нулів: ${counterForZeros}. \n Кількість додатніх чисел: ${counterForPositive}. \n Кількість від'ємних чисел: ${counterForNegative}.\n Кількість парних чисел: ${counterForEven}`
);
*/

//TODO:Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

const dayOfWeekCycleButton = document.getElementById("dayOfWeekCycle__button");
const dayOfWeekCycleResult = document.getElementById(
  "dayOfWeekCycle_paragraph"
);

dayOfWeekCycleButton.onclick = function () {
  const dayOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "нд"];
  let flag = true;
  let counter = 0;

  while (flag) {
    alert(dayOfWeek[counter]);
    flag = confirm("Хочеш побачити наступний день тижня?");
    ++counter;
    if (counter === 7) {
      counter = 0;
    } else if (flag !== true) {
      dayOfWeekCycleResult.classList.add("ua");
    }
  }
};

// Варіант з console.log

/*
const dayOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "нд"];
let flag = true;
let counter = 0;

while (flag) {
  console.log(dayOfWeek[counter]);
  flag = confirm("Хочеш побачити наступний день тижня?");
  ++counter;
  if (counter === 7) {
    counter = 0;
  } else if (flag !== true) {
    console.log(
      "Ну, не хочеш - як хочеш. Якщо сподобалась гра - наступного разу покажу звідки на Білорусь готувався напад."
    );
  }
}
*/

//TODO: Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число > N, < N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").

const binarySearchButton = document.getElementById("binarySearch__button");
const binarySearchResult = document.getElementById("binarySearch__span");

binarySearchButton.onclick = function () {
  let orderingNumber = 50;
  let gameFlag = true;
  let resultOfBinarySearch = 50;
  let userAnswer;

  while (gameFlag) {
    userAnswer = prompt(
      `Ваше число більше ${resultOfBinarySearch.toFixed(
        0
      )}, менше або дорівнює? Дай відповідь символом: >, <, =.`
    );
    if (userAnswer === ">" && orderingNumber < 100) {
      orderingNumber /= 2;
      resultOfBinarySearch += orderingNumber;
    } else if (userAnswer === "<" && orderingNumber > 0) {
      orderingNumber /= 2;
      resultOfBinarySearch -= orderingNumber;
    } else if (userAnswer === "=") {
      alert("Це було занадто просто!");
      binarySearchResult.innerHTML = resultOfBinarySearch.toFixed(0);
      gameFlag = false;
    } else {
      binarySearchResult.innerHTML = "Помилка вводу або відміна операції.";
      gameFlag = false;
    }
  }
};

// Варіант з console.log
/*
console.log("Загадай число від 0 до 100. А я спробую його вгадати.");
let orderingNumber = 50;
let gameFlag = true;
let resultOfBinarySearch = 50;

while (gameFlag) {
  let userAnswer = prompt(
    `Ваше число більше ${resultOfBinarySearch.toFixed(
      0
    )}, менше або дорівнює? Дай відповідь символом: >, <, =.`
  );
  if (userAnswer === ">" && orderingNumber < 100) {
    orderingNumber /= 2;
    resultOfBinarySearch += orderingNumber;
  } else if (userAnswer === "<" && orderingNumber > 0) {
    orderingNumber /= 2;
    resultOfBinarySearch -= orderingNumber;
  } else {
    console.log("Це було занадто просто.");
    gameFlag = false;
  }
}
*/

//TODO: Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

const multiplicationTableButton = document.getElementById(
  "multiplicationTable__button"
);

multiplicationTableButton.onclick = function () {
  for (let i = 1; i <= 10; i++) {
    console.log("\n");
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
};

//TODO: Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

// let calendarDay = +prompt("Введи день:");
// const calendarMonth = +prompt("Введи месяц (1-12):");
// const calendarYear = +prompt("Введи год:");

// const calendarCollection = {
//   1: 31,
//   2: 28,
//   3: 31,
//   4: 30,
//   5: 31,
//   6: 30,
//   7: 31,
//   8: 31,
//   9: 30,
//   10: 31,
//   11: 30,
//   12: 31,
// };

// if (calendarYear % 4 !== 0 && calendarDay < calendarCollection[calendarMonth]) {
//   console.log(`${calendarDay + 1}.${calendarMonth}.${calendarYear}`);
// } else if (
//   calendarYear % 4 !== 0 &&
//   calendarDay === calendarCollection[calendarMonth]
// ) {
//   calendarDay -= calendarCollection[calendarMonth] - 1;
//   console.log(`${calendarDay}.${calendarMonth + 1}.${calendarYear}`);
// } else if (
//   calendarYear % 4 === 0 &&
//   calendarMonth === 2 &&
//   calendarDay < calendarCollection[calendarMonth] + 1
// ) {
//   console.log(`${calendarDay + 1}.${calendarMonth}.${calendarYear}`);
// } else if (
//   calendarYear % 4 === 0 &&
//   calendarDay < calendarCollection[calendarMonth]
// ) {
//   console.log(`${calendarDay + 1}.${calendarMonth}.${calendarYear}`);
// } else if (
//   calendarYear % 4 === 0 &&
//   calendarDay === calendarCollection[calendarMonth]
// ) {
//   console.log(
//     `${calendarDay - (calendarDay - 1)}.${calendarMonth + 1}.${
//       calendarYear + 1
//     }`
//   );
// } else if (
//   calendarMonth === 12 &&
//   calendarDay === calendarCollection[calendarMonth]
// ) {
//   console.log(
//     `${calendarDay - (calendarDay - 1)}.${
//       calendarMonth - (calendarMonth - 1)
//     }.${calendarYear + 1}`
//   );
// } else {
//   console.log("Щось пішло не так. Але це фіча, а не баг.");
// }
