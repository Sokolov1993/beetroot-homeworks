"use strict";

/* 
Норма.  

Запитати та вивсети ім'я користувача.
*/
const userName = prompt("Як я можу до тебе звертатися?");
alert(`Привіт, ${userName}`);

// Запитати рік народження та вивести вік.

const yearOfBirth = prompt("Вкажи свій рік народження:");
const currentYear = 2022;
alert(
  `Класний вік, ${userName}е! В ${
    currentYear - yearOfBirth
  } життя тільки починається ;)`
);

// Площа квадрату

const sideOfSquare = document.getElementById("sideOfSquare");
const button0 = document.getElementById("button-0");
const squarePerimeter = document.getElementById("squarePerimeter");

button0.onclick = function () {
  squarePerimeter.innerHTML = sideOfSquare.valueAsNumber * 4;
};

/* 
Максимум.

Калькулятор площі кола 
*/

const circleRadius = document.getElementById("circleRadius");
const button = document.getElementById("button");
const result = document.getElementById("result");

button.onclick = function () {
  result.innerHTML = Math.PI * circleRadius.valueAsNumber ** 2;
};

// Оптимальна швидкість руху

const distance = document.getElementById("distance");
const timeLimit = document.getElementById("timeLimit");
const button2 = document.getElementById("button-2");
const optimalSpeed = document.getElementById("optimalSpeed");

button2.onclick = function () {
  optimalSpeed.innerHTML = distance.valueAsNumber / timeLimit.valueAsNumber;
};

// Конвертер валют
const euroExchangeRate = 0.93;
const dollarsForExchange = document.getElementById("dollarsForExchange");
const button3 = document.getElementById("button-3");
const euroResult = document.getElementById("euroResult");

button3.onclick = function () {
  euroResult.innerHTML = euroExchangeRate * dollarsForExchange.valueAsNumber;
};

/* Варіант з prompt. Абсолютно тотожна логіка й у інших задач.

const circleR = prompt("Введіть радіус кола:");
console.log(3.14 * circleR ** 2); */

/* Мінімум. 

Неправильні назви змінних

let const = 123;               const - зарезервоване слово, яке не може бути змінною.

let count of iterations = 0;   У назвах змінних не може бути пробілів. 

let euroexchangerate = 0.93;   Нечитабельна назва змінної. 

let паляниця = "з медом";      Цілком працююча змінна, назву якої зрозуміють лише українці.

let ONLY_UPPER_CASE;            Верхній регістр не використовують для назв змінних. Лише для констант, значення яких відомо заздалегідь.

*/

// Стилі написання імен змінних: camelCase, snake_case
