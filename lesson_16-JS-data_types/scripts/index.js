//  Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

const rightAdditionResult = (0.1 + 0.2).toFixed(1);
console.log(rightAdditionResult);

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

const numberAsString = "1";
const number = 2;
console.log(+numberAsString + number);

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const penDriveSize = prompt("Вкажи обсяг флеш-пам'яті у Гб:") * 1000;
const fileSize = 820;
console.log(Math.floor(penDriveSize / fileSize));

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

const moneyInWallet = prompt("Кількість грошей:");
const chocolatePrice = prompt("Вартість шоколадки:");
console.log(
  "Ти можеш купити: " +
    (moneyInWallet / chocolatePrice).toFixed(0) +
    " шоколадок."
);
console.log("Решта складатиме: " + (moneyInWallet % chocolatePrice) + " грн.");

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).

const guessedNumber = prompt("Загадай тризначне число:");
console.log(
  (+guessedNumber % 10).toString() +
    (Math.floor(+guessedNumber / 10) % 10).toString() +
    Math.floor(+guessedNumber / 100).toString()
);

// 2 варіант

console.log(guessedNumber[2] + guessedNumber[1] + guessedNumber[0]);

// 3 варіант

let newString = "";

for (let i = guessedNumber.length - 1; i >= 0; i--) {
  newString += guessedNumber[i];
}
console.log(newString);

// 4 варіант

console.log(guessedNumber.split("").reverse().join(""));

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

const customerDeposit = prompt("Розмір банківського внеску: ");
const yearDepositGrow = (+customerDeposit / 100) * 5;
const monthDepositGrow = yearDepositGrow / 12;
const depositTerm = prompt("Вкажіть строк депозиту: ");
const uah = Math.floor((depositTerm * monthDepositGrow * 100) / 100);
const cop = Math.floor((depositTerm * monthDepositGrow * 100) % 100);

console.log(
  `За ${depositTerm} м. вам нарахують: ${uah} грн, ${cop} коп.`,
  `Загальний залишок на рахунку складатиме: ${
    +customerDeposit + uah
  } грн, ${cop} коп.`
);
