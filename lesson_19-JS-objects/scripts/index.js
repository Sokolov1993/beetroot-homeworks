'use strict';
/* 
Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:

Висновок на екран з інформацією про автомобіль.

Додавання водія, який має право керувати автомобілем.

Заправка автомобіля.

Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю.
 
Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.
*/

const newCar = {
  manufacturer: 'BMW',
  model: '520i',
  yearOfManufacture: 2021,
  averageSpeed: 117,
  fuelTank: 68,
  fuelConsumption: 6.8,
  drivers: ['Oleksandr Sokolov', 'Ivan Ivanov'],

  getAllCarInfo() {
    return console.log(`  Manufacturer: ${this.manufacturer}
  Model: ${this.model}
  Year of manufacture: ${this.yearOfManufacture}
  Average speed: ${this.averageSpeed} km/h
  Fuel tank size: ${this.fuelTank} l
  Fuel Comsumption: ${this.fuelConsumption} l/100 km
  Drivers: ${this.drivers.join(', ')}.`);
  },

  changeDrivers(driverName) {
    this.drivers.push(driverName);
    return this.drivers;
  },

  getFuelUsed(distance) {
    // Використано палива
    let usedFuel =
      distance >= 100
        ? (distance / 100) * this.fuelConsumption
        : (this.fuelConsumption * distance) / 100;

    return usedFuel;
  },

  getCarRefueling(distance) {
    //До заправки залишилося
    let beforeRefueling = this.fuelTank - this.getFuelUsed(distance);
    return beforeRefueling;
  },

  getTimeToArrival2(distance, driverName) {
    let timeToArrival = +(distance / this.averageSpeed);
    console.log(timeToArrival);
    let refuel = this.getCarRefueling(distance);
    let restCounter = 0;

    for (let i = 0; i <= timeToArrival; i++) {
      if (refuel < 0) break;
      if (i % 4 === 0 && this.drivers.indexOf(driverName) !== -1) {
        restCounter++;
      } else if (this.drivers.indexOf(driverName) === -1) {
        return `Водія ${driverName} немає в списках.`;
      }
    }

    return refuel > 0
      ? `  Ти проїхав ${distance} км. за ${Math.floor(
          timeToArrival + restCounter
        )} год. ${((timeToArrival * 60) % 60).toFixed(0)} хв.
  Використав ${this.getFuelUsed(distance).toFixed(
    0
  )} л. бензину. Зробив ${restCounter} привали на годинний відпочинок.`
      : `На цю подорож, палива не вистачить.`;
  },
};

// Додати водіїв, яким дозволено кермувати автомобілем.
console.log(newCar.changeDrivers('Andriy'));

// Розрахунок часу, який знадобиться на подолання вказаної відстані, при середній швидкості руху.
console.log(newCar.getTimeToArrival2(900, 'Andriy'));

// Вивести всю інформацію про автівку.
console.log(newCar.getAllCarInfo());

/************************************************************************************/

// Красиве рішення простої задачі, без "закрученого" сюжету з годинними перекурами та перевіркою водіїв.

/*
const newCar = {
  manufacturer: 'BMW',
  model: '520i',
  yearOfManufacture: 2021,
  averageSpeed: 117,
  fuelTank: 68,
  fuelConsumption: 6.8,
  drivers: ['Oleksandr Sokolov', 'Ivan Ivanov'],

  getAllCarInfo() {
    return newCar;
  },

  changeDrivers(driverName) {
    this.drivers.push(driverName);
    return this.drivers;
  },

  getCarRefueling(distance) {
    let usedFuel =
      distance >= 100
        ? (distance / 100) * this.fuelConsumption
        : (this.fuelConsumption * distance) / 100;
    let beforeRefueling = this.fuelTank - usedFuel;

    return `Використано палива: ${usedFuel} л. До заправки залишилося: ${beforeRefueling} л.`;
  },

  getTimeToArrival(distance) {
    return distance >= this.averageSpeed
      ? `Розрахунковий час до прибуття: ${(
          distance / this.averageSpeed
        ).toFixed(0)} год. ${(
          ((distance / this.averageSpeed) * 60) %
          60
        ).toFixed(0)} хв.`
      : `Розрахунковий час до прибуття ${(
          (distance / this.averageSpeed) *
          60
        ).toFixed(0)} хв.`;
  },
};

console.log(newCar.getCarRefueling(400));
console.log(newCar.getTimeToArrival(500));
*/

/******************************************************************************/

/*
Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передане кількість секунд.
Зміни часу на передане кількість хвилин.
Зміни часу на передане кількість годин.
Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:30:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин. 
*/

const time = new Date();

const timeMachine = {
  changeHours(hours = 0) {
    return time.getHours(time.setHours(hours));
  },

  changeMinutes(minutes = 0) {
    return time.getMinutes(time.setMinutes(minutes));
  },

  changeSeconds(seconds = 0) {
    return time.getSeconds(time.setSeconds(seconds));
  },

  getFullTime() {
    return console.log(
      `${time.getHours() < 10 ? '0' + time.getHours() : time.getHours()}:${
        time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
      }:${time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()}`
    );
  },
};

timeMachine.changeHours(2);
timeMachine.changeMinutes(10);
timeMachine.changeSeconds(1);
console.log(timeMachine.getFullTime());
console.log(time);
