'use strict';

class Circle {
  constructor(radius) {
    this.circleR = radius;
  }

  get circleRadius() {
    return `Circle radius: ${this.circleR}`;
  }

  set circleRadius(radius) {
    this.circleR = radius;
  }

  get circleDiameter() {
    return `Circle diameter: ${this.circleR * 2}`;
  }

  getCircleArea() {
    return `Circle area: ${(Math.PI * this.circleR ** 2).toFixed(1)}`;
  }

  getCircleLength() {
    return `Circle length: ${(2 * Math.PI * this.circleR).toFixed(1)}`;
  }
}

const circleObj = new Circle(2);

console.log(circleObj); //до виклику сетера
circleObj.circleR = 4;
console.log(circleObj); //після виклику сетера
console.log(circleObj.circleRadius); //виклик гетера, який повертає радіус
console.log(circleObj.circleDiameter); //виклик гетера, який повертає діаметр
console.log(circleObj.getCircleArea()); //виклик методу, який повертає площу
console.log(circleObj.getCircleLength()); //виклик методу, який повертає довжину кола

/****************************************************************************************************************/

class Car {
  constructor(
    manufacturer,
    model,
    yearOfManufacture,
    averageSpeed,
    fuelTank,
    fuelConsumption,
    ...drivers
  ) {
    this.manufacturer = manufacturer.toString();
    this.model = model.toString();
    this.yearOfManufacture = yearOfManufacture.toString();
    this.averageSpeed = +averageSpeed;
    this.fuelTank = +fuelTank;
    this.fuelConsumption = +fuelConsumption;
    this.drivers = drivers.toString().split(',');
  }

  get allCarInfo() {
    return `    Manufacturer: ${this.manufacturer}
    Model: ${this.model}
    Year of manufacture: ${this.yearOfManufacture}
    Average speed: ${this.averageSpeed} km/h
    Fuel tank size: ${this.fuelTank} l
    Fuel Comsumption: ${this.fuelConsumption} l/100 km
    Drivers: ${this.drivers.join(', ')}`;
  }

  set newDriver(driverName) {
    this.drivers.push(driverName);
  }

  getFuelUsed(distance) {
    let usedFuel =
      distance >= 100
        ? (distance / 100) * this.fuelConsumption
        : (this.fuelConsumption * distance) / 100;

    return usedFuel;
  }

  getCarRefueling(distance) {
    let beforeRefueling = this.fuelTank - this.getFuelUsed(distance);
    return beforeRefueling;
  }

  getTimeToArrival2(distance, driverName) {
    let timeToArrival = +(distance / this.averageSpeed);
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
  }
}

const bmwCar = new Car(
  'BMW',
  '520i',
  '2021',
  117,
  68,
  6.8,
  'Oleksandr Sokolov',
  'Ivan Ivanov',
  'Boris Jonsonuk'
);

// Інформація про екземпляр класу Car
console.log(bmwCar);

// Додати водія, якому дозволено кермувати автомобілем.
bmwCar.newDriver = 'Dmitro Stepanyuk';

// Розрахунок часу, який знадобиться на подолання вказаної відстані, при середній швидкості руху.
console.log(bmwCar.getTimeToArrival2(900, 'Dmitro Stepanyuk'));

// Вивести всю інформацію про автівку.
console.log(bmwCar.allCarInfo);
