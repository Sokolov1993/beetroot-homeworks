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
    return newCar;
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
    let timeToArrival = +(distance / this.averageSpeed).toFixed(0);
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
      ? `Ти проїхав ${distance} км. за ${
          timeToArrival + restCounter
        } год. Використав ${this.getFuelUsed(distance).toFixed(
          0
        )} л. бензину. Зробив ${restCounter} привали на годинний відпочинок.`
      : `На цю подорож, палива не вистачить.`;
  },
};

// Додати водіїв, яким дозволено кермувати автомобілем.
console.log(newCar.changeDrivers('Andriy'));

// Розрахунок часу, який знадобиться на подолання вказаної відстані, при середній швидкості руху.
console.log(
  newCar.getTimeToArrival2(
    +prompt('Введи відстань до пункту призначення:'),
    prompt("Введи ім'я водія:")
  )
);

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
